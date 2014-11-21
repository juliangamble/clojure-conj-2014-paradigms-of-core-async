(ns hello-clojurescript.client
  (:require [cljs.core.async :refer [chan put! take! timeout] :as async]
            ;[clojure.walk :refer [prewalk]]
            ;[goog.net.XhrIo]
          )
  (:require-macros [cljs.core.async.macros :refer [go]]))


;(defn handle-click []
;  (js/alert "Hello!"))

;(def clickable (.getElementById js/document "clickable"))
;(.addEventListener clickable "click" handle-click)

;https://github.com/halgari/clojure-conj-2013-core.async-examples/blob/master/src/clojure_conj_talk/core.clj
(def canvas (.getElementById js/document "canvas"))

(def colors ["#FF0000"
             "#00FF00"
             "#0000FF"
             "#00FFFF"
             "#FFFF00"
             "#FF00FF"])

(defn make-cell [canvas x y]
  (let [ctx (-> js/document
                (.getElementById canvas)
                (.getContext "2d"))]
    (go (while true
          (set! (.-fillStyle ctx) (rand-nth colors))
          (.fillRect ctx x y 10 10)
          (<! (timeout (rand-int 1000)))
          ))))

(defn make-scene [canvas rows cols]
  (dotimes [x cols]
    (dotimes [y rows]
      (make-cell canvas (* 10 x) (* 10 y)))))


(make-scene "canvas" 100 100)
