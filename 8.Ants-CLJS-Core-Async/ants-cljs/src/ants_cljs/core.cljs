;note - mods from original
; - pheremones only switch on when has food
; changed ant cycle to turn then move, not turn or move
(ns ants-cljs.core
  (:require
    [goog.dom :as dom]
    [goog.events :as ev]))

;dimensions of square world - needs to be divisible by four
;(def dim 80)
(def dim 20) 

;number of ants = nants-sqrt^2
;(def nants-sqrt 7)
(def nants-sqrt 3)

;number of places with food
;(def food-places 35)
(def food-places 10)

;range of amount of food at a place
(def food-range 100)
;scale factor for pheromone drawing
(def pher-scale 20.0)
;scale factor for food drawing
(def food-scale 30.0)
;evaporation rate
(def evap-rate 0.99)

(def animation-sleep-ms 100)
(def ant-sleep-ms 40)
(def evap-sleep-ms 1000)

(def is-running false)

;(defstruct cell :food :pher) ;may also have :ant and :home
;replce with defrecord

;(def log-flags #{"behave" "behave-ants" "update-ants" "move" "create-ant" "setup" "pprint"})
(def log-flags #{})

(defn logj [& flag args] 
  (when (contains? log-flags flag)
    (. js/console (log (str args)))))

(defn do-pause []
  (if is-running
    (set! is-running false)
    (set! is-running true)))

(defrecord cell [food pher ant home])

;world is a 2d vector of refs to cells
(def world 
     (apply vector 
            (map (fn [_] 
                     (apply vector (map (fn [_] (atom (cell. 0 0 nil nil)))
                                      (range dim)))) 
                 (range dim))))

(defn place [[x y]]
  {:pre [(not (nil? [x y]))]
   :post [(not (nil? %))]}
  (-> world (nth x) (nth y)))

(defrecord ant [dir id food])

(defn create-ant 
  "create an ant at the location, returning an ant agent on the location"
  [loc dir id]
      (let [p (place loc)
             a (ant. dir id nil)]
        (swap! p assoc :ant a)
        (logj "create-ant" (str "created ant: " a " at " loc))
        loc))

(defn pprint-map[cljs-map]
  (let [result (reduce (fn [lhs [k v] ] 
                         (str lhs " " k  " " v )) "" cljs-map)]
    (str "{" result "}")))

(defn pprint-vec [cljs-vec]
  (let [result (reduce (fn [lhs v ] 
                         (str lhs  " " v )) "" cljs-vec)]
    (str "[" result "]")))

(defn pprint [cljs-obj]
  (let [type-name (type->str (type cljs-obj))]
    (case type-name
      "cljs.core/PersistentArrayMap" (pprint-map cljs-obj)
      "cljs.core/PersistentVector" (pprint-vec cljs-obj)
      (logj "pprint" (str "no pprint handler for " type-name)))))

(defn pprint-ant-record [ant-rec]
  (str "[ :dir " (:dir ant-rec) " :id " (:id ant-rec) " :food " (:food ant-rec) "]" ))


(defn pprint-cell-record [cell-rec]
  (str "[ :food " (:food cell-rec) " :pher " (:pher cell-rec) " :ant " (:ant cell-rec) "]" )) 


(def home-off (/ dim 4))
(def home-range (range home-off (+ nants-sqrt home-off)))

(defn get-ant-coords 
  "get coordinates of the locations of the ants from the main map" []
  (filter identity
          (map (fn [coord] (when (:ant (deref (place coord))) coord))
               (for [y (range dim) x (range dim)] [x y]))))

(defn ant-food-count
  "return an integer for the food the ant has at a coord" [coord]
  (let [ant-atom (place coord)
        ant @ant-atom]
    ;(if (and (not (nil? (:food @ant))) (not (= 0 (:food @ant)))) 
    (logj "count" (str "food count ant: " (:food ant)))
    (if  (not (= 0 (:food ant)))
      (do 
        (logj "count" (pprint-ant-record ant))
        (logj "count" "ant has food") 
        1) 
      0)))

(defn get-ant-food-count 
  "get a count of the ants with food" []
  (let [ant-coords (get-ant-coords)
        map-result (map ant-food-count ant-coords)]
    (logj "count" "map-result " map-result)
    (reduce + map-result)))

(defn setup 
  "places initial food and ants, returns seq of ant agents"
  []
    (dotimes [i food-places]
      (let [p (place [(rand-int dim) (rand-int dim)])]
        (swap! p assoc :food (rand-int food-range))))
    (doall
     (for [x home-range y home-range]
       (do
         (swap! (place [x y]) 
                assoc :home true)
         (logj "setup" "setup - creating ant at " x y)
         (create-ant [x y] (rand-int 8) (str x "-" y))
         (logj "setup" (get-ant-coords))))))

(setup)

(defn bound 
  "returns n wrapped into range 0-b"
  [b n]
    (let [n (rem n b)]
      (if (neg? n) 
        (+ n b) 
        n)))

(defn wrand 
  "given a vector of slice sizes, returns the index of a slice given a
  random spin of a roulette wheel with compartments proportional to
  slices."
  [slices]
  (let [total (reduce + slices)
        r (rand total)
        result 
    (loop [i 0 sum 0]
      (if (< r (+ (slices i) sum))
        i
        (recur (inc i) (+ (slices i) sum))))]
    result))

;dirs are 0-7, starting at north and going clockwise
;these are the deltas in order to move one step in given dir
(def dir-delta {0 [0 -1]
                1 [1 -1]
                2 [1 0]
                3 [1 1]
                4 [0 1]
                5 [-1 1]
                6 [-1 0]
                7 [-1 -1]})

(defn delta-loc 
  "returns the location one step in the given dir. Note the world is a torus"
  [[x y] dir]
  (let [[dx dy] (dir-delta (bound 8 dir))]
    [(bound dim (+ x dx)) (bound dim (+ y dy))]))


;ant agent functions
;an ant agent tracks the location of an ant, and controls the behavior of 
;the ant at that location
(defn turn 
  "turns the ant at the location by the given amount"
  [loc amt] 
     (let [p (place loc)
           ant (:ant @p)]
       (logj "turn" "ant: " ant)
       (when (nil? ant)
         ;stop the world
         (logj "turn" "error: no ant at this location")
         (throw (js/Error. "turn - no ant at this location"))
         (do-pause)
         )
       (logj "turn" "location before turn: " p)
       (swap! p assoc :ant (assoc ant :dir (bound 8 (+ (:dir ant) amt))));)
       (logj "turn" "location after turn: " p)
       )
    loc)


(defn validate-expected-ants-count 
  "ensure the actual number of ants is the number expected"
[]
 (let [validated (= (* nants-sqrt nants-sqrt) (count (get-ant-coords)))]
   ;(when (not validated)
     ;(do
     ;  (throw (js/Error. "validation failure - count of ants down"))
     ;  (do-pause)))
   validated))

(defn move-check-preconditions [oldp ant p]
  {:pre [(not (nil? oldp)) (not (nil? ant)) (not (nil? p)) (not (nil? (:ant @p)))]}
  )

(defn move 
  "moves the ant in the direction it is heading. Must be called in a
  transaction that has verified the way is clear"
  [coord]
  ;pre and postconditions
  {:pre [(validate-expected-ants-count)]
    :post [(validate-expected-ants-count)]}
     (let [oldp (place coord)
           ant (:ant @oldp)
           newloc (delta-loc coord (:dir ant))
           p (place newloc)]
    (logj "move" "move: " coord " to " newloc)
    (move-check-preconditions oldp ant p)
         (if (not (nil? (:ant @p)))
           (do
             (logj "move" "already ant in new location!")
             coord)
           (do
       (swap! p assoc :ant ant)
       (when (not (nil? (:ant @p)))
         (do
           (swap! oldp dissoc :ant)
           (when-not (:home @oldp)
             (when (:food ant)
               (swap! oldp assoc :pher (inc (:pher @oldp)))))
           (logj "move" (str "moving: " (get-ant-coords)))

      newloc))))))

(defn take-food [loc]
  "Takes one food from current location. Must be called in a
  transaction that has verified there is food available"
  (let [p (place loc)
        ant (:ant @p)]    
    (logj "take-food" "take-food - did I go red? " loc)
    (swap! p assoc 
           :food (dec (:food @p))
           :ant (assoc ant :food true))
    loc))

(defn drop-food [loc]
  "Drops food at current location. Must be called in a
  transaction that has verified the ant has food"
  (let [p (place loc)
        ant (:ant @p)]    
    (logj "drop-food" "dropping food at: " loc " food before" (:food @p) ant)
    (logj "drop-food" "place before " p)
    (swap! p assoc 
           :food (inc (:food @p))
           :ant (dissoc ant :food))
    (logj "drop-food" "place after " p)
    (logj "drop-food" "ant dissoc food: " (dissoc ant :food))
    (logj "drop-food" "dropping food at: " loc " food after" (:food @p) ant)
    loc))

(defn rank-by 
  "returns a map of xs to their 1-based rank when sorted by keyfn"
  [keyfn xs]
  (let [sorted (sort-by (comp float keyfn) xs)]
    (reduce (fn [ret i] (assoc ret (nth sorted i) (inc i)))
            {} (range (count sorted)))))

(defn behave 
  "the main function for the ant agent"
  [coord]
  (let [p (place coord)
        ant (:ant @p)
        ahead (place (delta-loc coord (:dir ant)))
        ahead-left (place (delta-loc coord (dec (:dir ant))))
        ahead-right (place (delta-loc coord (inc (:dir ant))))
        places [ahead ahead-left ahead-right]]
    (logj "behave" "behave: " ant)
     (if (:food ant)
       (cond 
        (:home @p)
        (do
          (logj "behave" "has food - at home - dropping food")
          (-> coord drop-food (turn 4)))
        (and (:home ahead) (not (:ant ahead)))

          (do
            (logj "behave" "has food - home ahead and no ant")
            (move coord))
        :else
          (do
            (let [ranks (merge-with + 
                                    (rank-by (comp #(if (:home %) 1 0) deref) places)
                                    (rank-by (comp :pher deref) places))]
              (([#(turn % 0) #(turn % -1) #(turn % 1)]
                  (wrand [(if (:ant @ahead) 0 (ranks ahead))
                          (ranks ahead-left) (ranks ahead-right)]))
               coord)
              (move coord)
              )))       
       ;foraging
       (cond 
        (and (pos? (:food @p)) (not (:home @p)) (not (> (:food ant) 0)))
          (do
            (-> coord take-food (turn 4)))
          ;food is ahead, the home is not ahead and there is no ant ahead
        (and (pos? (:food @ahead)) (not (:home @ahead)) (not (:ant @ahead)))
          (do
            ;(logj "foraging - food ahead, home not ahead and no ant ahead")
            (move coord))
        :else
          (do
        (let [ranks (merge-with + 
                                  (rank-by (comp :food deref) places)
                                  (rank-by (comp :pher deref) places))
                ]
          ;move ahead or turn left or turn right
          (def move-vec [move #(turn % -1) #(turn % 1)])
          (def wrand-func             (wrand [(if (:ant @ahead) 0 (ranks ahead)) 
                    (ranks ahead-left) (ranks ahead-right)]))  
          (([#(turn % 0) #(turn % -1)#(turn % 1)] wrand-func) coord)
          (move coord)
          ))))))

(defn evaporate 
  "causes all the pheromones to evaporate a bit"
  []
  (dorun 
   (for [x (range dim) y (range dim)]
      (let [p (place [x y])]
        (swap! p assoc :pher (* evap-rate (:pher @p)))))));)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; UI ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(def scale 5)

(defn fill-cell [ctx x y colour]
  (doto ctx
    (.beginPath)
    (.rect (* x  scale) (* y scale) scale scale))
  (set! (.-fillStyle ctx) colour)
  (.fill ctx))

(defn render-ant [ant ctx x y]
  (let [[hx hy tx ty] ({0 [2 0 2 4] 
                        1 [4 0 0 4] 
                        2 [4 2 0 2] 
                        3 [4 4 0 0] 
                        4 [2 4 2 0] 
                        5 [0 4 4 0] 
                        6 [0 2 4 2] 
                        7 [0 0 4 4]}
                       (:dir ant))]
    (.beginPath ctx)
    (if (and (not (nil? (:food ant)))
             (not (= 0 (:food ant)))) 
      (do
        (set! (.-strokeStyle ctx) "#ff0000")
        (logj "render-ant" "drawing red"))
      (set! (.-strokeStyle ctx) "black"))

    (doto ctx
      (.moveTo (+ hx (* x scale)) (+ hy (* y scale))) 
      (.lineTo (+ tx (* x scale)) (+ ty (* y scale)))
      (.stroke))))


(defn render-place [ctx p x y]
  (when (pos? (:pher p))
    (fill-cell ctx x y (str "rgba(0,255,0,"
                            (min 1  (/ (:pher p) pher-scale))")")))
  (when (pos? (:food p))
    (fill-cell ctx x y (str "rgba(255,0,0,"
                          (min 1 (/ (:food p) food-scale)) ")")))
  (when (:ant p)
    (render-ant (:ant p) ctx x y)))

(defn setup-context [ctx]
  (set! (.-width ctx) (* dim scale))
  (set! (.-height ctx) (* dim scale))
  (doto ctx
    (.beginPath)
    (.rect 1 1 (* dim scale) (* dim scale)))
  (set! (.-fillStyle ctx) "white")
  (.fill ctx)
  (set! (.-lineWidth ctx) 1)
  (set! (.-strokeStyle ctx) "black")
  (.stroke ctx))

(defn draw-outside-box [ctx]
  (doto ctx
    (.beginPath)
    (.rect 1 1 (* dim scale) (* dim scale)))
  (set! (.-lineWidth ctx) 1)
  (set! (.-strokeStyle ctx) "black")
  (.stroke ctx))

(defn draw-home-box [ctx]
   (doto ctx
    (.beginPath)
    (.rect (* scale home-off) (* scale home-off) 
           (* scale nants-sqrt) (* scale nants-sqrt)))
  (set! (.-lineWidth ctx) 1)
  (set! (.-strokeStyle ctx) "blue")
  (.stroke ctx))

(defn render [ctx]
  (let [v  (apply vector (for [x (range dim) y (range dim)] 
                                   @(place [x y])));)
        ]
    ;1. draw the white background
    (setup-context ctx)
    ;2. Render each of the cells
    (dorun 
     (for [x (range dim) y (range dim)]
       (render-place ctx (v (+ (* x dim) y)) x y)))
    ;3. Draw the box of the outline over the edge cells
    (draw-outside-box ctx)
    ;4. Draw a blue box around home
    (draw-home-box ctx)))

(defn get-canvas 
  "Don't tell anyone this is actually just document.getElementById()."
  [id]
    (.getElementById js/document id))

(def canvs (get-canvas "antcanvas"))

(def context (.getContext canvs "2d"))

(defn map-coords []
  (for [y (range dim) x (range dim)] [x y]))


(defn behave-ants []
  (let [ant-coords (get-ant-coords)]
    (logj "move" (str "get-ants-coords: " ant-coords))
    (logj "count" (str "get-ant-food-count " (get-ant-food-count))) 
  (dorun
   (for [coord ant-coords]

     (do
       (let [p (place coord)
             ant (:ant @p)]
         (when (nil? p)
           (do
             (logj "behave-ants" "nil p in behave-ants")
             (throw (js/Error. "behave-ants - no p at this location"))
             (do-pause)))
         (when (nil? ant)
           (do
             (logj "behave-ants" "nil ant in behave-ants")
             (throw (js/Error. "behave-ants - no ant at this location"))
             (do-pause))))

       (behave coord))))))

(defn send-off-animation []
  (render context))


(defn run-loop []
  (send-off-animation)
  (behave-ants)
  (evaporate))

(defn animate[]
  (when is-running
    (.requestAnimationFrame js/window animate))
  (run-loop))

(animate)

;note - Chrome only above - for other browsers try
;["requestAnimationFrame"
;"webkitRequestAnimationFrame"
;"mozRequestAnimationFrame"
;"oRequestAnimationFrame" 
;"msRequestAnimationFrame"]

;add listener to button 
(ev/listen
   (dom/getElement "clickMe")
   "click"
   (fn []
      (do-pause)
      (animate)))



