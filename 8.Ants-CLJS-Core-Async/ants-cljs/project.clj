(defproject ants-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 ;[org.clojure/clojurescript "0.0-2127"]
                 [org.clojure/clojurescript "0.0-2173"]
                 ;[org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 ] 

  ;:plugins [[lein-cljsbuild "1.0.1"]]
  :plugins [[lein-cljsbuild "1.0.2"]]
  ;:plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "ants-cljs"
              :source-paths ["src"]
              :compiler {
                :output-to "ants_cljs.js"
                :output-dir "out"
                :optimizations :none
                :source-map true
                         }}]})
