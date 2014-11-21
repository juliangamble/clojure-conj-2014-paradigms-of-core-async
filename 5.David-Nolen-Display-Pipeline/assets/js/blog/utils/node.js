// Compiled by ClojureScript 0.0-2173
goog.provide('blog.utils.node');
goog.require('cljs.core');
goog.require('blog.utils.reactive');
goog.require('blog.utils.reactive');
blog.utils.node.fs = require("fs");
blog.utils.node.read_file = (function read_file(fname,encoding){return blog.utils.reactive.run_task.call(null,blog.utils.node.fs.readFile,fname,encoding);
});

//# sourceMappingURL=node.js.map