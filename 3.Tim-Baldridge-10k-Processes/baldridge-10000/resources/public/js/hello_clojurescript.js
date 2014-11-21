// Compiled by ClojureScript 0.0-2156
goog.provide('hello_clojurescript');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
hello_clojurescript.canvas = document.getElementById("canvas");
hello_clojurescript.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF0000","#00FF00","#0000FF","#00FFFF","#FFFF00","#FF00FF"], null);
hello_clojurescript.make_cell = (function make_cell(canvas,x,y){var ctx = document.getElementById(canvas).getContext("2d");var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_8459){var state_val_8460 = (state_8459[1]);if((state_val_8460 === 7))
{var inst_8451 = (state_8459[2]);var state_8459__$1 = (function (){var statearr_8461 = state_8459;(statearr_8461[7] = inst_8451);
return statearr_8461;
})();var statearr_8462_8476 = state_8459__$1;(statearr_8462_8476[2] = null);
(statearr_8462_8476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8460 === 6))
{var inst_8455 = (state_8459[2]);var state_8459__$1 = state_8459;var statearr_8463_8477 = state_8459__$1;(statearr_8463_8477[2] = inst_8455);
(statearr_8463_8477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8460 === 5))
{var state_8459__$1 = state_8459;var statearr_8464_8478 = state_8459__$1;(statearr_8464_8478[2] = null);
(statearr_8464_8478[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8460 === 4))
{var inst_8445 = cljs.core.rand_nth.call(null,hello_clojurescript.colors);var inst_8446 = ctx.fillStyle = inst_8445;var inst_8447 = ctx.fillRect(x,y,10,10);var inst_8448 = cljs.core.rand_int.call(null,1000);var inst_8449 = cljs.core.async.timeout.call(null,inst_8448);var state_8459__$1 = (function (){var statearr_8465 = state_8459;(statearr_8465[8] = inst_8447);
(statearr_8465[9] = inst_8446);
return statearr_8465;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8459__$1,7,inst_8449);
} else
{if((state_val_8460 === 3))
{var inst_8457 = (state_8459[2]);var state_8459__$1 = state_8459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8459__$1,inst_8457);
} else
{if((state_val_8460 === 2))
{var state_8459__$1 = state_8459;if(true)
{var statearr_8466_8479 = state_8459__$1;(statearr_8466_8479[1] = 4);
} else
{var statearr_8467_8480 = state_8459__$1;(statearr_8467_8480[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8460 === 1))
{var state_8459__$1 = state_8459;var statearr_8468_8481 = state_8459__$1;(statearr_8468_8481[2] = null);
(statearr_8468_8481[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_8472 = [null,null,null,null,null,null,null,null,null,null];(statearr_8472[0] = state_machine__5525__auto__);
(statearr_8472[1] = 1);
return statearr_8472;
});
var state_machine__5525__auto____1 = (function (state_8459){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_8459);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e8473){if((e8473 instanceof Object))
{var ex__5528__auto__ = e8473;var statearr_8474_8482 = state_8459;(statearr_8474_8482[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8459);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8483 = state_8459;
state_8459 = G__8483;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_8459){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_8459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_8475 = f__5540__auto__.call(null);(statearr_8475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_8475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
});
hello_clojurescript.make_scene = (function make_scene(canvas,rows,cols){var n__4251__auto__ = cols;var x = 0;while(true){
if((x < n__4251__auto__))
{var n__4251__auto___8484__$1 = rows;var y_8485 = 0;while(true){
if((y_8485 < n__4251__auto___8484__$1))
{hello_clojurescript.make_cell.call(null,canvas,(10 * x),(10 * y_8485));
{
var G__8486 = (y_8485 + 1);
y_8485 = G__8486;
continue;
}
} else
{}
break;
}
{
var G__8487 = (x + 1);
x = G__8487;
continue;
}
} else
{return null;
}
break;
}
});
hello_clojurescript.make_scene.call(null,"canvas",100,100);
