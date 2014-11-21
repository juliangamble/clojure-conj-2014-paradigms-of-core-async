(ns multi-chan-core-async.core
  (:gen-class)
  (:require [clojure.core.async :as async :refer [<! >! <!! >!! timeout chan alt! go close! alts!]]))

(defn -main
  [& args]
  (println "Starting!")

  (let [my-q1 (chan 5)
        my-q2 (chan 5)
        my-seq1 (seq "Hello World")
        my-seq2 (range 10)]
    (go  
     (doseq [item my-seq1]
       (>! my-q1 item)
       (<! (timeout 1000))))

    (go  
     (doseq [item my-seq2]
       (>! my-q2 item)
       (<! (timeout (rand-int 1500)))))

    (go
     (while true
       (let [[item queue] (alts! [my-q1 my-q2])]
         (condp = queue
           my-q1 (println item)
           my-q2 (println " " item)))))

    (future (Thread/sleep 12000) (println "-"))
    (shutdown-agents); Bug in futures http://dev.clojure.org/jira/browse/CLJ-124
    (println "Finished!")))
