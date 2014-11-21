// Compiled by ClojureScript 0.0-2156
goog.provide('hello_clojurescript.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
hello_clojurescript.client.canvas = document.getElementById("canvas");
hello_clojurescript.client.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF0000","#00FF00","#0000FF","#00FFFF","#FFFF00","#FF00FF"], null);
hello_clojurescript.client.make_cell = (function make_cell(canvas,x,y){var ctx = document.getElementById(canvas).getContext("2d");var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_11667){var state_val_11668 = (state_11667[1]);if((state_val_11668 === 7))
{var inst_11659 = (state_11667[2]);var state_11667__$1 = (function (){var statearr_11669 = state_11667;(statearr_11669[7] = inst_11659);
return statearr_11669;
})();var statearr_11670_11684 = state_11667__$1;(statearr_11670_11684[2] = null);
(statearr_11670_11684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 6))
{var inst_11663 = (state_11667[2]);var state_11667__$1 = state_11667;var statearr_11671_11685 = state_11667__$1;(statearr_11671_11685[2] = inst_11663);
(statearr_11671_11685[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 5))
{var state_11667__$1 = state_11667;var statearr_11672_11686 = state_11667__$1;(statearr_11672_11686[2] = null);
(statearr_11672_11686[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 4))
{var inst_11653 = cljs.core.rand_nth.call(null,hello_clojurescript.client.colors);var inst_11654 = ctx.fillStyle = inst_11653;var inst_11655 = ctx.fillRect(x,y,10,10);var inst_11656 = cljs.core.rand_int.call(null,1000);var inst_11657 = cljs.core.async.timeout.call(null,inst_11656);var state_11667__$1 = (function (){var statearr_11673 = state_11667;(statearr_11673[8] = inst_11654);
(statearr_11673[9] = inst_11655);
return statearr_11673;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11667__$1,7,inst_11657);
} else
{if((state_val_11668 === 3))
{var inst_11665 = (state_11667[2]);var state_11667__$1 = state_11667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11667__$1,inst_11665);
} else
{if((state_val_11668 === 2))
{var state_11667__$1 = state_11667;if(true)
{var statearr_11674_11687 = state_11667__$1;(statearr_11674_11687[1] = 4);
} else
{var statearr_11675_11688 = state_11667__$1;(statearr_11675_11688[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 1))
{var state_11667__$1 = state_11667;var statearr_11676_11689 = state_11667__$1;(statearr_11676_11689[2] = null);
(statearr_11676_11689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_11680 = [null,null,null,null,null,null,null,null,null,null];(statearr_11680[0] = state_machine__5525__auto__);
(statearr_11680[1] = 1);
return statearr_11680;
});
var state_machine__5525__auto____1 = (function (state_11667){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_11667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e11681){if((e11681 instanceof Object))
{var ex__5528__auto__ = e11681;var statearr_11682_11690 = state_11667;(statearr_11682_11690[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11691 = state_11667;
state_11667 = G__11691;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_11667){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_11667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_11683 = f__5540__auto__.call(null);(statearr_11683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_11683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
});
hello_clojurescript.client.make_scene = (function make_scene(canvas,rows,cols){var n__4251__auto__ = cols;var x = 0;while(true){
if((x < n__4251__auto__))
{var n__4251__auto___11692__$1 = rows;var y_11693 = 0;while(true){
if((y_11693 < n__4251__auto___11692__$1))
{hello_clojurescript.client.make_cell.call(null,canvas,(10 * x),(10 * y_11693));
{
var G__11694 = (y_11693 + 1);
y_11693 = G__11694;
continue;
}
} else
{}
break;
}
{
var G__11695 = (x + 1);
x = G__11695;
continue;
}
} else
{return null;
}
break;
}
});
hello_clojurescript.client.make_scene.call(null,"canvas",100,100);
