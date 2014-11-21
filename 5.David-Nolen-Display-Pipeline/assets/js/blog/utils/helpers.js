// Compiled by ClojureScript 0.0-2173
goog.provide('blog.utils.helpers');
goog.require('cljs.core');
blog.utils.helpers.now = (function now(){return (new Date());
});
blog.utils.helpers.index_of = (function index_of(xs,x){var len = cljs.core.count.call(null,xs);var i = 0;while(true){
if((i < len))
{if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,xs,i),x))
{return i;
} else
{{
var G__8618 = (i + 1);
i = G__8618;
continue;
}
}
} else
{return -1;
}
break;
}
});
blog.utils.helpers.error_QMARK_ = (function error_QMARK_(x){return (x instanceof Error);
});
blog.utils.helpers.throw_err = (function throw_err(x){if(blog.utils.helpers.error_QMARK_.call(null,x))
{throw x;
} else
{return x;
}
});

//# sourceMappingURL=helpers.js.map