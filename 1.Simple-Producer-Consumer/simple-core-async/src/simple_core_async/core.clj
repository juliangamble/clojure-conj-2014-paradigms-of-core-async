(ns simple-core-async.core
  (:gen-class)
  (:require [clojure.core.async :as async :refer [<! >! <!! >!! timeout chan alt! go close!]]))

(defn -main
  [& args]
  (println "Starting!")

  (let [my-q (chan 5)
        my-seq (seq "Hello World")]
    (go  
     (doseq [item my-seq]
       (>! my-q item)
       (<! (timeout 1000))))

    (go
     (while true
       (let [c (<! my-q)]
         (println c))))

    (future (Thread/sleep 12000) (println "-"))
    (shutdown-agents); Bug in futures http://dev.clojure.org/jira/browse/CLJ-124
    (println "Finished!")))
