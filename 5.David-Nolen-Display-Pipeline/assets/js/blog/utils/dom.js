// Compiled by ClojureScript 0.0-2173
goog.provide('blog.utils.dom');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.style');
blog.utils.dom.by_id = (function by_id(id){return document.getElementById(id);
});
blog.utils.dom.set_html_BANG_ = (function set_html_BANG_(el,s){return el.innerHTML = s;
});
blog.utils.dom.set_text_BANG_ = (function set_text_BANG_(el,s){return goog.dom.setTextContent(el,s);
});
blog.utils.dom.set_class_BANG_ = (function set_class_BANG_(el,name){return goog.dom.classes.set(el,name);
});
blog.utils.dom.add_class_BANG_ = (function add_class_BANG_(el,name){return goog.dom.classes.add(el,name);
});
blog.utils.dom.remove_class_BANG_ = (function remove_class_BANG_(el,name){return goog.dom.classes.remove(el,name);
});
blog.utils.dom.tag_match = (function tag_match(tag){return (function (el){var temp__4092__auto__ = el.tagName;if(cljs.core.truth_(temp__4092__auto__))
{var tag_name = temp__4092__auto__;return cljs.core._EQ_.call(null,tag,tag_name.toLowerCase());
} else
{return null;
}
});
});
blog.utils.dom.parent = (function parent(el,tag){var matcher = blog.utils.dom.tag_match.call(null,tag);if(cljs.core.truth_(matcher.call(null,el)))
{return el;
} else
{return goog.dom.getAncestor(el,blog.utils.dom.tag_match.call(null,tag));
}
});
blog.utils.dom.el_matcher = (function el_matcher(el){return (function (other){return (other === el);
});
});
blog.utils.dom.by_tag_name = (function by_tag_name(el,tag){return cljs.core.prim_seq.call(null,goog.dom.getElementsByTagNameAndClass(tag,null,el));
});
blog.utils.dom.offset = (function offset(el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.style.getPageOffsetLeft(el),goog.style.getPageOffsetTop(el)], null);
});
blog.utils.dom.in_QMARK_ = (function in_QMARK_(e,el){var target = e.target;return ((target === el)) || (!((goog.dom.getAncestor(target,blog.utils.dom.el_matcher.call(null,el)) == null)));
});

//# sourceMappingURL=dom.js.map