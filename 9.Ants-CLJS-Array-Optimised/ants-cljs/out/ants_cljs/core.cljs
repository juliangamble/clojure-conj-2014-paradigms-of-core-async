;note - mods from original
; - pheremones only switch on when has food
; changed ant cycle to turn then move, not turn or move
(ns ants-cljs.core
  (:require
    [goog.dom :as dom]
    [goog.events :as ev]
    [cljs.core.async :as async :refer [<! >! chan put! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:use-macros [chambered.macros :only [forloop local >> <<]]))

(enable-console-print!)

;dimensions of square world - needs to be divisible by four
(def dim 80)

;number of ants = nants-sqrt^2
(def nants-sqrt 7)
;(def nants-sqrt 3)

;number of places with food
(def food-places 35)
;(def food-places 10)

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

(def chan-timeout-duration 10)


(defn do-pause []
  (if is-running
    (set! is-running false)
    (set! is-running true)))
;reflection - could this be replaced by (set! is-running !is-running) ???

;(defrecord cell [food pher ant home])
(defn cell [food pher ant home]
    {:pre [(not (nil? food))
          (not (nil? pher)) 
          (not (nil? ant))
          (not (nil? home))
          (or (= false ant) (= 3 (alength ant)))
          (number? food)
          (number? pher)
          ]}
  ;TODO: add not-null preconditions here for home and food and pher
  (let [cell (make-array 4)]
    (aset cell 0 food)
    (aset cell 1 pher)
    (aset cell 2 ant)
    (aset cell 3 home)
    cell
    ))

(defn get-cell-food [cell]
      {:pre [(not (nil? cell))
            (= 4 (alength cell))]
      :post [(not (nil? %))
              (number? %)]}
  (aget cell 0))

(defn get-cell-pher [cell]
      {:pre [(not (nil? cell))
            (= 4 (alength cell))]
      :post [(not (nil? %))
              (number? %)]}
  (aget cell 1))

(defn get-cell-ant [cell]
      {:pre [(not (nil? cell))
            (= 4 (alength cell))]
      :post [(not (nil? %))]}
  (aget cell 2))

(defn get-cell-home [cell]
      {:pre [(not (nil? cell))
            (= 4 (alength cell))]
      :post [(not (nil? %))]}
  (aget cell 3))

(defn set-cell-food [cell food]
      {:pre [(not (nil? cell))
            (not (nil? food))
            (= 4 (alength cell))
            (number? food)]}
  (aset cell 0 food)
  cell)

(defn set-cell-pher [cell pher]
      {:pre [(not (nil? cell))
            (not (nil? pher))
            (= 4 (alength cell))
            (number? pher)]}
  (aset cell 1 pher)
  cell)

(defn set-cell-ant [cell ant]
      {:pre [(not (nil? cell))
            (not (nil? ant))
            (= 4 (alength cell))
            (or (= false ant) (= 3 (alength ant)))]}
  (aset cell 2 ant)
  cell)

(defn set-cell-home [cell home]
      {:pre [(not (nil? cell))
            (not (nil? home))
            (= 4 (alength cell))]}
  (aset cell 3 home)
  cell)

;TODO: this is incredibly repetitive - macros would take it away - surely the existing defrecord does this already?



;**TODO** - do we need to define coord as an array?

;defn cell [food pher ant home]

;world is a 2d vector of refs to cells
(def world 
     (apply vector 
            (map (fn [_] 
                     ;(apply vector (map (fn [_] (atom (cell. 0 0 nil nil)))
                     ;(apply vector (map (fn [_] (atom (cell 0 0 nil nil)))
                     (apply vector (map (fn [_] (atom (cell 0 0 false false)))
                                      (range dim)))) 
                 (range dim))))

;borrowed from Lau Jensen - http://www.bestinclass.dk/blog/brians-brain-optimized-clojurescript-html5
(defn make-world
  [w h]
  (let [world  (make-array h)]
    (forloop [(y 0) (< y h) (inc y)]
       (let [row  (int-array w)]
         (forloop [(x 0) (< x w) (inc x)]
             (aset row x (atom (cell 0 0 false false))))
         (aset world y (int-array row))))
    world))

(def world (make-world dim dim))


(defn place [[x y]]
  {:pre [(not (nil? [x y]))]
   :post [(not (nil? %))]}
  (-> world (nth x) (nth y)))


(defn place [[x y]]
  (aget world x y))

(defn ant "make an array representing an ant" [dir id food]
  {:pre [(not (nil? dir))
          (not (nil? id)) 
          (not (nil? food))
          (number? dir)
          (number? food)]}
  (let [ant (make-array 3)]
    (aset ant 0 dir)
    (aset ant 1 id)
    (aset ant 2 food)
    ant))

(defn get-ant-dir [ant]
    {:pre [(not (nil? ant))
            (= 3 (alength ant))]
      :post [(not (nil? %))]}
  (aget ant 0)) 

(defn get-ant-id [ant]
      {:pre [(not (nil? ant))
            (= 3 (alength ant))]
        :post [(not (nil? %))]}
  (aget ant 1))

(defn get-ant-food [ant]
      {:pre [(not (nil? ant))
              (= 3 (alength ant))]
       :post [(not (nil? %))
              (number? %)]}
  (aget ant 2))

(defn set-ant-dir [ant dir]
      {:pre [(not (nil? ant)) 
              (not (nil? dir))
              (number? dir)
              (= 3 (alength ant))]}
  (aset ant 0 dir)
  ant)

(defn set-ant-id [ant id]
      {:pre [(not (nil? ant)) 
              (not (nil? id))
              (= 3 (alength ant))]}
  (aset ant 1 id)
  ant)

(defn set-ant-food [ant food]
  {:pre [(not (nil? food)) 
          (number? food)
          (not (nil? ant))
            (= 3 (alength ant))]}
  (aset ant 2 food)
  ant)

;(defn get-ant-string [ant] (str "[ant: " (get-ant-dir ant) " " (get-ant-id ant) " " (get-ant-food ant) " ]"))


(defn create-ant 
  "create an ant at the location, returning an ant agent on the location"
  [loc dir id]
      (let [p (place loc)
             a (ant dir id 0)]
        (set-cell-ant @p a)
        loc))


(def home-off (/ dim 4))
(def home-range (range home-off (+ nants-sqrt home-off)))

(defn get-ant-coords 
  "get coordinates of the locations of the ants from the main map" []
  {:post [(coll? %)]}
  (let [result (local (* nants-sqrt nants-sqrt))
        counter (local)]
    (>> counter 0)
    (forloop [(x 0) (< x dim) (inc x)]
      (forloop [(y 0) (< y dim) (inc y)]
        (let [p (place [x y])]
          (when (get-cell-ant @p)
            (aset result counter [x y])
            (>> counter (inc (<< counter)))))
        )
      )
    (js->clj result)
  )
)

(defn ant-food-count
  "return an integer for the food the ant has at a coord" [coord]
  (let [p (place coord)
        ant (get-cell-ant @p)]
    (if  (not (= 0 (get-ant-food ant)))

      (do 
        1) 
      0)))

(defn get-ant-food-count 
  "get a count of the ants with food" []
  (let [ant-coords (get-ant-coords)
        map-result (map ant-food-count ant-coords)]
    (reduce + map-result)))

(defn setup 
  "places initial food and ants, returns seq of ant agents"
  []
    (dotimes [i food-places]
      (let [p (place [(rand-int dim) (rand-int dim)])]
        (set-cell-food @p (rand-int food-range))))

    (doall
     (for [x home-range y home-range]
       (do
          (set-cell-home @(place [x y]) true)
         (create-ant [x y] (rand-int 8) (str x "-" y))))))

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
           ant (get-cell-ant @p)]
       (when (nil? ant)
         ;stop the world
         (throw (js/Error. "turn - no ant at this location"))
         (do-pause))
       (set-cell-ant @p  (set-ant-dir ant (bound 8 (+ (get-ant-dir ant) amt))));)
       )
    loc)


(defn validate-expected-ants-count 
  "ensure the actual number of ants is the number expected"
[]
 (let [validated (= (* nants-sqrt nants-sqrt) (count (get-ant-coords)))]
   validated))


(defn move 
  "moves the ant in the direction it is heading. Must be called in a
  transaction that has verified the way is clear"
  [coord]
     (let [oldp (place coord)
           ant (get-cell-ant @oldp)
           newloc (delta-loc coord (get-ant-dir ant))

           p (place newloc)]
          (if (not (= false (get-cell-ant @p)))

           (do
             coord)
           (do
       (set-cell-ant @p ant)
       (when (not (nil? (get-cell-ant @p)))

         (do
           (set-cell-ant @oldp false)
           (when-not (get-cell-home @oldp)
             (when (get-ant-food ant)
               (set-cell-pher @oldp (inc (get-cell-pher @oldp)))))

      newloc))))))

(defn take-food [loc]
  "Takes one food from current location. Must be called in a
  transaction that has verified there is food available"
  (let [p (place loc)
        ant (get-cell-ant @p)]    
    (set-cell-food @p (dec (get-cell-food @p)))
    (set-cell-ant @p (set-ant-food ant 1))
    loc))

(defn drop-food [loc]
  "Drops food at current location. Must be called in a
  transaction that has verified the ant has food"
  (let [p (place loc)
        ant (get-cell-ant @p)]    
    (set-cell-food @p (inc (get-cell-food @p)))
    (set-cell-ant @p (set-ant-food ant 0))
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
        ant (get-cell-ant @p)
        ahead (place (delta-loc coord (get-ant-dir ant)))
        ahead-left (place (delta-loc coord (dec (get-ant-dir ant))))
        ahead-right (place (delta-loc coord (inc (get-ant-dir ant))))
        places [ahead ahead-left ahead-right]]
     (if (pos? (get-ant-food ant))
       (cond 
        (get-cell-home @p)
        (do
          (-> coord drop-food (turn 4)))
        (and (get-cell-home @ahead) (not (get-cell-ant @ahead)))

          (do
            (move coord))
        :else
          (do
            (let [ranks (merge-with + 
                                    (rank-by (comp #(if (get-cell-home %) 1 0) deref) places)
                                    (rank-by (comp #(get-cell-pher %) deref) places))]
              (([#(turn % 0) #(turn % -1) #(turn % 1)]
                  (wrand [(if (get-cell-ant @ahead) 0 (ranks ahead))
                          (ranks ahead-left) (ranks ahead-right)]))
               coord)
              (move coord)
              )))       
       ;foraging
       (cond 
        (and (pos? (get-cell-food @p)) (not (get-cell-home @p)) (not (> (get-ant-food ant) 0)))
          (do
            (-> coord take-food (turn 4)))
          ;food is ahead, the home is not ahead and there is no ant ahead
        (and (pos? (get-cell-food @ahead)) (not (get-cell-home @ahead)) (not (get-cell-ant @ahead)))
          (do
            (move coord))
        :else
          (do
        (let [ranks (merge-with + 
                                  (rank-by (comp #(get-cell-food %) deref) places)
                                  (rank-by (comp #(get-cell-pher %) deref) places))
                ]
          ;move ahead or turn left or turn right
          (def move-vec [move #(turn % -1) #(turn % 1)])
          (def wrand-func             (wrand [(if (get-cell-ant @ahead) 0 (ranks ahead)) 
                    (ranks ahead-left) (ranks ahead-right)]))  
          (([#(turn % 0) #(turn % -1)#(turn % 1)] wrand-func) coord)
          (move coord)
          ))))))

(defn evaporate 
  "causes all the pheromones to evaporate a bit"
  []
  (go (while true (if is-running

  (let [start-time (.getTime (js/Date.))]
   

  (dorun 
    (forloop [(x 0) (< x dim) (inc x)]
      (forloop [(y 0) (< y dim) (inc y)]

      (let [p (place [x y])]
        (set-cell-pher @p (* evap-rate (get-cell-pher @p))))))

   );end dorun

  )
  )

  (<! (timeout chan-timeout-duration))


  )))


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
                       ;(:dir ant))]
                       (get-ant-dir ant))]
    (.beginPath ctx)
    ;need to expand this into a function - we use it everywhere - everywhere we get the food
    ;(if (and (not (nil? (:food ant)))
    ;         (not (= 0 (:food ant)))) 
    (if (and (not (nil? (get-ant-food ant)))
             (not (= 0 (get-ant-food ant)))) 
      (do
        (set! (.-strokeStyle ctx) "#ff0000")

      (set! (.-strokeStyle ctx) "black")))

    (doto ctx
      (.moveTo (+ hx (* x scale)) (+ hy (* y scale))) 
      (.lineTo (+ tx (* x scale)) (+ ty (* y scale)))
      (.stroke))))


(defn render-place [ctx p x y]
  (let [cell-pher (get-cell-pher p)
        cell-food (get-cell-food p)
        cell-ant (get-cell-ant p)]
  (when (pos? cell-pher)

    (fill-cell ctx x y (str "rgba(0,255,0,"
                            (min 1  (/ cell-pher pher-scale))")")))
  (when (pos? cell-food)
    (fill-cell ctx x y (str "rgba(255,0,0,"
                          (min 1 (/ cell-food food-scale)) ")")))
  (when cell-ant
    (render-ant cell-ant ctx x y))))

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
  (go (while true   (if is-running

  (let [start-time (.getTime (js/Date.))] 

    ;1. draw the white background
    (setup-context ctx)
    ;2. Render each of the cells 

    (dorun 
      (forloop [(x 0) (< x dim) (inc x)]
        (forloop [(y 0) (< y dim) (inc y)]

          (render-place ctx @(place [x y]) x y))))

    (draw-outside-box ctx)
    (draw-home-box ctx);))

        (let [finish-time (.getTime (js/Date.))])))
     (<! (timeout chan-timeout-duration))))) 

(defn get-canvas 
  "Don't tell anyone this is actually just document.getElementById()."
  [id]
    (.getElementById js/document id))

(def canvs (get-canvas "antcanvas"))

(def context (.getContext canvs "2d"))

(defn map-coords []
  (for [y (range dim) x (range dim)] [x y])) 


(defn behave-ants []
  (go (while true   (if is-running

  (let [ant-coords (time(get-ant-coords))
        ant-coords-count (count ant-coords)]
  (dorun
    (forloop [(i 0) (< i ant-coords-count) (inc i)]
      (let [coord (nth ant-coords i)]

     (do
       (let [p (place coord)
             ant (get-cell-ant @p)]
         (when (nil? p)
           (do
             (throw (js/Error. "behave-ants - no p at this location"))
             (do-pause)))
         (when (nil? ant)
           (do
             (throw (js/Error. "behave-ants - no ant at this location"))
             (do-pause))))

       (behave coord))
       );end of let
       ));end of for loop


       );)

      )
     (<! (timeout  chan-timeout-duration)))))

(defn send-off-animation []
  (render context))



(defn run-loop []
    (send-off-animation)
    (behave-ants)
    (evaporate)

    )

(defn animate[]
  (run-loop))

(animate)


;put the events from an element on a core.async channel
;from David Noel's core.async tutorial http://swannodette.github.io/2013/11/07/clojurescript-101/
(defn listen [el type]
  (let [out (chan)]
    (ev/listen el type
      (fn [e] (put! out e)))
    out))

(defn init []
  (let [clicks (listen (dom/getElement "clickMe") "click")        ]
    (go (while true
          (<! clicks)
          (do-pause)
          (animate)))))



(init)












