(defproject baldridge-10000 "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [;[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 ;[ring "1.2.1"]
                 ]
  :plugins [[lein-cljsbuild "1.0.2"]
            ;[lein-ring "0.8.10"]
            ]
  :hooks [leiningen.cljsbuild]
  ;:source-paths ["src/clj"]
  :cljsbuild { 
    :builds {
      :main {
        :source-paths ["src/cljs"]
        :compiler {:output-to "resources/public/js/cljs.js"
                   :output-dir "resources/public/js/"
                   :optimizations :none
                   :source-maps :true
                   :pretty-print true}
        ;:jar true
             }}}
  ;:main baldridge-10000.server
  ;:ring {:handler baldridge-10000.server/app}
)

