// Compiled by ClojureScript 0.0-2173
goog.provide('blog.utils.reactive');
goog.require('cljs.core');
goog.require('blog.utils.helpers');
goog.require('cljs.core.async');
goog.require('blog.utils.helpers');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.net.Jsonp');
goog.require('goog.dom');
goog.require('blog.utils.dom');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.Uri');
goog.require('blog.utils.dom');
blog.utils.reactive.atom_QMARK_ = (function atom_QMARK_(x){return (x instanceof cljs.core.Atom);
});
blog.utils.reactive.keyword__GT_event_type = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),new cljs.core.Keyword(null,"keypress","keypress",1530666166),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,"blur","blur",1016931289),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"keydown","keydown",4493897459),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),new cljs.core.Keyword(null,"keyup","keyup",1115849900),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),new cljs.core.Keyword(null,"dblclick","dblclick",3463991820)],[goog.events.EventType.MOUSEDOWN,goog.events.EventType.KEYPRESS,goog.events.EventType.MOUSEOVER,goog.events.EventType.MOUSEOUT,goog.events.EventType.CLICK,goog.events.EventType.BLUR,goog.events.EventType.FOCUS,goog.events.EventType.KEYDOWN,goog.events.EventType.MOUSEUP,goog.events.EventType.KEYUP,goog.events.EventType.MOUSEMOVE,goog.events.EventType.DBLCLICK]);
blog.utils.reactive.log = (function log(in$){var out = cljs.core.async.chan.call(null);var chan__3291__auto___10406 = in$;var c__5587__auto___10407 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_10388){var state_val_10389 = (state_10388[1]);if((state_val_10389 === 8))
{var inst_10380 = (state_10388[2]);var state_10388__$1 = (function (){var statearr_10390 = state_10388;(statearr_10390[7] = inst_10380);
return statearr_10390;
})();var statearr_10391_10408 = state_10388__$1;(statearr_10391_10408[2] = null);
(statearr_10391_10408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 7))
{var inst_10384 = (state_10388[2]);var state_10388__$1 = state_10388;var statearr_10392_10409 = state_10388__$1;(statearr_10392_10409[2] = inst_10384);
(statearr_10392_10409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 6))
{var state_10388__$1 = state_10388;var statearr_10393_10410 = state_10388__$1;(statearr_10393_10410[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_10393_10410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 5))
{var inst_10376 = (state_10388[8]);var inst_10378 = console.log(inst_10376);var state_10388__$1 = (function (){var statearr_10394 = state_10388;(statearr_10394[9] = inst_10378);
return statearr_10394;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10388__$1,8,out,inst_10376);
} else
{if((state_val_10389 === 4))
{var inst_10376 = (state_10388[8]);var inst_10376__$1 = (state_10388[2]);var state_10388__$1 = (function (){var statearr_10395 = state_10388;(statearr_10395[8] = inst_10376__$1);
return statearr_10395;
})();if(cljs.core.truth_(inst_10376__$1))
{var statearr_10396_10411 = state_10388__$1;(statearr_10396_10411[1] = 5);
} else
{var statearr_10397_10412 = state_10388__$1;(statearr_10397_10412[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 3))
{var inst_10386 = (state_10388[2]);var state_10388__$1 = state_10388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10388__$1,inst_10386);
} else
{if((state_val_10389 === 2))
{var state_10388__$1 = state_10388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10388__$1,4,chan__3291__auto___10406);
} else
{if((state_val_10389 === 1))
{var state_10388__$1 = state_10388;var statearr_10398_10413 = state_10388__$1;(statearr_10398_10413[2] = null);
(statearr_10398_10413[1] = 2);
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
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_10402 = [null,null,null,null,null,null,null,null,null,null];(statearr_10402[0] = state_machine__5573__auto__);
(statearr_10402[1] = 1);
return statearr_10402;
});
var state_machine__5573__auto____1 = (function (state_10388){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_10388);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e10403){if((e10403 instanceof Object))
{var ex__5576__auto__ = e10403;var statearr_10404_10414 = state_10388;(statearr_10404_10414[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10415 = state_10388;
state_10388 = G__10415;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_10388){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_10388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_10405 = f__5588__auto__.call(null);(statearr_10405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___10407);
return statearr_10405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.listen = (function() {
var listen = null;
var listen__2 = (function (el,type){return listen.call(null,el,type,null);
});
var listen__3 = (function (el,type,f){return listen.call(null,el,type,f,cljs.core.async.chan.call(null));
});
var listen__4 = (function (el,type,f,out){goog.events.listen(el,blog.utils.reactive.keyword__GT_event_type.call(null,type),(function (e){if(cljs.core.truth_(f))
{f.call(null,e);
} else
{}
return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
listen = function(el,type,f,out){
switch(arguments.length){
case 2:
return listen__2.call(this,el,type);
case 3:
return listen__3.call(this,el,type,f);
case 4:
return listen__4.call(this,el,type,f,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$2 = listen__2;
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
listen.cljs$core$IFn$_invoke$arity$4 = listen__4;
return listen;
})()
;
blog.utils.reactive.map = (function map(f,in$){var out = cljs.core.async.chan.call(null);var c__5587__auto___10480 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_10463){var state_val_10464 = (state_10463[1]);if((state_val_10464 === 8))
{var inst_10454 = (state_10463[2]);var state_10463__$1 = (function (){var statearr_10465 = state_10463;(statearr_10465[7] = inst_10454);
return statearr_10465;
})();var statearr_10466_10481 = state_10463__$1;(statearr_10466_10481[2] = null);
(statearr_10466_10481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10464 === 7))
{var inst_10459 = (state_10463[2]);var state_10463__$1 = state_10463;var statearr_10467_10482 = state_10463__$1;(statearr_10467_10482[2] = inst_10459);
(statearr_10467_10482[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10464 === 6))
{var inst_10457 = cljs.core.async.close_BANG_.call(null,out);var state_10463__$1 = state_10463;var statearr_10468_10483 = state_10463__$1;(statearr_10468_10483[2] = inst_10457);
(statearr_10468_10483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10464 === 5))
{var inst_10450 = (state_10463[8]);var inst_10452 = f.call(null,inst_10450);var state_10463__$1 = state_10463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10463__$1,8,out,inst_10452);
} else
{if((state_val_10464 === 4))
{var inst_10450 = (state_10463[8]);var inst_10450__$1 = (state_10463[2]);var state_10463__$1 = (function (){var statearr_10469 = state_10463;(statearr_10469[8] = inst_10450__$1);
return statearr_10469;
})();if(cljs.core.truth_(inst_10450__$1))
{var statearr_10470_10484 = state_10463__$1;(statearr_10470_10484[1] = 5);
} else
{var statearr_10471_10485 = state_10463__$1;(statearr_10471_10485[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10464 === 3))
{var inst_10461 = (state_10463[2]);var state_10463__$1 = state_10463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10463__$1,inst_10461);
} else
{if((state_val_10464 === 2))
{var state_10463__$1 = state_10463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10463__$1,4,in$);
} else
{if((state_val_10464 === 1))
{var state_10463__$1 = state_10463;var statearr_10472_10486 = state_10463__$1;(statearr_10472_10486[2] = null);
(statearr_10472_10486[1] = 2);
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
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_10476 = [null,null,null,null,null,null,null,null,null];(statearr_10476[0] = state_machine__5573__auto__);
(statearr_10476[1] = 1);
return statearr_10476;
});
var state_machine__5573__auto____1 = (function (state_10463){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_10463);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e10477){if((e10477 instanceof Object))
{var ex__5576__auto__ = e10477;var statearr_10478_10487 = state_10463;(statearr_10478_10487[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10488 = state_10463;
state_10463 = G__10488;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_10463){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_10463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_10479 = f__5588__auto__.call(null);(statearr_10479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___10480);
return statearr_10479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.filter = (function filter(pred,in$){var out = cljs.core.async.chan.call(null);var c__5587__auto___10569 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_10548){var state_val_10549 = (state_10548[1]);if((state_val_10549 === 1))
{var state_10548__$1 = state_10548;var statearr_10550_10570 = state_10548__$1;(statearr_10550_10570[2] = null);
(statearr_10550_10570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10549 === 2))
{var state_10548__$1 = state_10548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10548__$1,4,in$);
} else
{if((state_val_10549 === 3))
{var inst_10546 = (state_10548[2]);var state_10548__$1 = state_10548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10548__$1,inst_10546);
} else
{if((state_val_10549 === 4))
{var inst_10531 = (state_10548[7]);var inst_10531__$1 = (state_10548[2]);var state_10548__$1 = (function (){var statearr_10551 = state_10548;(statearr_10551[7] = inst_10531__$1);
return statearr_10551;
})();if(cljs.core.truth_(inst_10531__$1))
{var statearr_10552_10571 = state_10548__$1;(statearr_10552_10571[1] = 5);
} else
{var statearr_10553_10572 = state_10548__$1;(statearr_10553_10572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10549 === 5))
{var inst_10531 = (state_10548[7]);var inst_10533 = pred.call(null,inst_10531);var state_10548__$1 = state_10548;if(cljs.core.truth_(inst_10533))
{var statearr_10554_10573 = state_10548__$1;(statearr_10554_10573[1] = 8);
} else
{var statearr_10555_10574 = state_10548__$1;(statearr_10555_10574[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10549 === 6))
{var inst_10542 = cljs.core.async.close_BANG_.call(null,out);var state_10548__$1 = state_10548;var statearr_10556_10575 = state_10548__$1;(statearr_10556_10575[2] = inst_10542);
(statearr_10556_10575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10549 === 7))
{var inst_10544 = (state_10548[2]);var state_10548__$1 = state_10548;var statearr_10557_10576 = state_10548__$1;(statearr_10557_10576[2] = inst_10544);
(statearr_10557_10576[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10549 === 8))
{var inst_10531 = (state_10548[7]);var state_10548__$1 = state_10548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10548__$1,11,out,inst_10531);
} else
{if((state_val_10549 === 9))
{var state_10548__$1 = state_10548;var statearr_10558_10577 = state_10548__$1;(statearr_10558_10577[2] = null);
(statearr_10558_10577[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10549 === 10))
{var inst_10539 = (state_10548[2]);var state_10548__$1 = (function (){var statearr_10559 = state_10548;(statearr_10559[8] = inst_10539);
return statearr_10559;
})();var statearr_10560_10578 = state_10548__$1;(statearr_10560_10578[2] = null);
(statearr_10560_10578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10549 === 11))
{var inst_10536 = (state_10548[2]);var state_10548__$1 = state_10548;var statearr_10561_10579 = state_10548__$1;(statearr_10561_10579[2] = inst_10536);
(statearr_10561_10579[1] = 10);
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
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_10565 = [null,null,null,null,null,null,null,null,null];(statearr_10565[0] = state_machine__5573__auto__);
(statearr_10565[1] = 1);
return statearr_10565;
});
var state_machine__5573__auto____1 = (function (state_10548){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_10548);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e10566){if((e10566 instanceof Object))
{var ex__5576__auto__ = e10566;var statearr_10567_10580 = state_10548;(statearr_10567_10580[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10548);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10581 = state_10548;
state_10548 = G__10581;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_10548){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_10548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_10568 = f__5588__auto__.call(null);(statearr_10568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___10569);
return statearr_10568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.remove = (function remove(f,in$){var out = cljs.core.async.chan.call(null);var c__5587__auto___10662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_10641){var state_val_10642 = (state_10641[1]);if((state_val_10642 === 1))
{var state_10641__$1 = state_10641;var statearr_10643_10663 = state_10641__$1;(statearr_10643_10663[2] = null);
(statearr_10643_10663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10642 === 2))
{var state_10641__$1 = state_10641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10641__$1,4,in$);
} else
{if((state_val_10642 === 3))
{var inst_10639 = (state_10641[2]);var state_10641__$1 = state_10641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10641__$1,inst_10639);
} else
{if((state_val_10642 === 4))
{var inst_10624 = (state_10641[7]);var inst_10624__$1 = (state_10641[2]);var state_10641__$1 = (function (){var statearr_10644 = state_10641;(statearr_10644[7] = inst_10624__$1);
return statearr_10644;
})();if(cljs.core.truth_(inst_10624__$1))
{var statearr_10645_10664 = state_10641__$1;(statearr_10645_10664[1] = 5);
} else
{var statearr_10646_10665 = state_10641__$1;(statearr_10646_10665[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10642 === 5))
{var inst_10624 = (state_10641[7]);var inst_10626 = f.call(null,inst_10624);var state_10641__$1 = state_10641;if(cljs.core.truth_(inst_10626))
{var statearr_10647_10666 = state_10641__$1;(statearr_10647_10666[1] = 8);
} else
{var statearr_10648_10667 = state_10641__$1;(statearr_10648_10667[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10642 === 6))
{var inst_10635 = cljs.core.async.close_BANG_.call(null,out);var state_10641__$1 = state_10641;var statearr_10649_10668 = state_10641__$1;(statearr_10649_10668[2] = inst_10635);
(statearr_10649_10668[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10642 === 7))
{var inst_10637 = (state_10641[2]);var state_10641__$1 = state_10641;var statearr_10650_10669 = state_10641__$1;(statearr_10650_10669[2] = inst_10637);
(statearr_10650_10669[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10642 === 8))
{var state_10641__$1 = state_10641;var statearr_10651_10670 = state_10641__$1;(statearr_10651_10670[2] = null);
(statearr_10651_10670[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10642 === 9))
{var inst_10624 = (state_10641[7]);var state_10641__$1 = state_10641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10641__$1,11,out,inst_10624);
} else
{if((state_val_10642 === 10))
{var inst_10632 = (state_10641[2]);var state_10641__$1 = (function (){var statearr_10652 = state_10641;(statearr_10652[8] = inst_10632);
return statearr_10652;
})();var statearr_10653_10671 = state_10641__$1;(statearr_10653_10671[2] = null);
(statearr_10653_10671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10642 === 11))
{var inst_10630 = (state_10641[2]);var state_10641__$1 = state_10641;var statearr_10654_10672 = state_10641__$1;(statearr_10654_10672[2] = inst_10630);
(statearr_10654_10672[1] = 10);
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
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_10658 = [null,null,null,null,null,null,null,null,null];(statearr_10658[0] = state_machine__5573__auto__);
(statearr_10658[1] = 1);
return statearr_10658;
});
var state_machine__5573__auto____1 = (function (state_10641){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_10641);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e10659){if((e10659 instanceof Object))
{var ex__5576__auto__ = e10659;var statearr_10660_10673 = state_10641;(statearr_10660_10673[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10641);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10674 = state_10641;
state_10641 = G__10674;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_10641){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_10641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_10661 = f__5588__auto__.call(null);(statearr_10661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___10662);
return statearr_10661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.spool = (function spool(xs){var out = cljs.core.async.chan.call(null);var c__5587__auto___10741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_10724){var state_val_10725 = (state_10724[1]);if((state_val_10725 === 7))
{var inst_10709 = (state_10724[7]);var inst_10714 = (state_10724[2]);var inst_10715 = cljs.core.next.call(null,inst_10709);var inst_10709__$1 = inst_10715;var state_10724__$1 = (function (){var statearr_10726 = state_10724;(statearr_10726[7] = inst_10709__$1);
(statearr_10726[8] = inst_10714);
return statearr_10726;
})();var statearr_10727_10742 = state_10724__$1;(statearr_10727_10742[2] = null);
(statearr_10727_10742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 6))
{var inst_10720 = (state_10724[2]);var state_10724__$1 = state_10724;var statearr_10728_10743 = state_10724__$1;(statearr_10728_10743[2] = inst_10720);
(statearr_10728_10743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 5))
{var inst_10718 = cljs.core.async.close_BANG_.call(null,out);var state_10724__$1 = state_10724;var statearr_10729_10744 = state_10724__$1;(statearr_10729_10744[2] = inst_10718);
(statearr_10729_10744[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 4))
{var inst_10709 = (state_10724[7]);var inst_10712 = cljs.core.first.call(null,inst_10709);var state_10724__$1 = state_10724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10724__$1,7,out,inst_10712);
} else
{if((state_val_10725 === 3))
{var inst_10722 = (state_10724[2]);var state_10724__$1 = state_10724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10724__$1,inst_10722);
} else
{if((state_val_10725 === 2))
{var inst_10709 = (state_10724[7]);var state_10724__$1 = state_10724;if(cljs.core.truth_(inst_10709))
{var statearr_10730_10745 = state_10724__$1;(statearr_10730_10745[1] = 4);
} else
{var statearr_10731_10746 = state_10724__$1;(statearr_10731_10746[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 1))
{var inst_10708 = cljs.core.seq.call(null,xs);var inst_10709 = inst_10708;var state_10724__$1 = (function (){var statearr_10732 = state_10724;(statearr_10732[7] = inst_10709);
return statearr_10732;
})();var statearr_10733_10747 = state_10724__$1;(statearr_10733_10747[2] = null);
(statearr_10733_10747[1] = 2);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_10737 = [null,null,null,null,null,null,null,null,null];(statearr_10737[0] = state_machine__5573__auto__);
(statearr_10737[1] = 1);
return statearr_10737;
});
var state_machine__5573__auto____1 = (function (state_10724){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_10724);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e10738){if((e10738 instanceof Object))
{var ex__5576__auto__ = e10738;var statearr_10739_10748 = state_10724;(statearr_10739_10748[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10749 = state_10724;
state_10724 = G__10749;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_10724){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_10724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_10740 = f__5588__auto__.call(null);(statearr_10740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___10741);
return statearr_10740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.split = (function() {
var split = null;
var split__2 = (function (pred,in$){return split.call(null,pred,in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null),cljs.core.async.chan.call(null)], null));
});
var split__3 = (function (pred,in$,p__10750){var vec__10795 = p__10750;var out1 = cljs.core.nth.call(null,vec__10795,0,null);var out2 = cljs.core.nth.call(null,vec__10795,1,null);var c__5587__auto___10839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_10817){var state_val_10818 = (state_10817[1]);if((state_val_10818 === 1))
{var state_10817__$1 = state_10817;var statearr_10819_10840 = state_10817__$1;(statearr_10819_10840[2] = null);
(statearr_10819_10840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 2))
{var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10817__$1,4,in$);
} else
{if((state_val_10818 === 3))
{var inst_10815 = (state_10817[2]);var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10817__$1,inst_10815);
} else
{if((state_val_10818 === 4))
{var inst_10798 = (state_10817[7]);var inst_10798__$1 = (state_10817[2]);var state_10817__$1 = (function (){var statearr_10820 = state_10817;(statearr_10820[7] = inst_10798__$1);
return statearr_10820;
})();if(cljs.core.truth_(inst_10798__$1))
{var statearr_10821_10841 = state_10817__$1;(statearr_10821_10841[1] = 5);
} else
{var statearr_10822_10842 = state_10817__$1;(statearr_10822_10842[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 5))
{var inst_10798 = (state_10817[7]);var inst_10800 = pred.call(null,inst_10798);var state_10817__$1 = state_10817;if(cljs.core.truth_(inst_10800))
{var statearr_10823_10843 = state_10817__$1;(statearr_10823_10843[1] = 8);
} else
{var statearr_10824_10844 = state_10817__$1;(statearr_10824_10844[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 6))
{var state_10817__$1 = state_10817;var statearr_10825_10845 = state_10817__$1;(statearr_10825_10845[2] = null);
(statearr_10825_10845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 7))
{var inst_10813 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10826_10846 = state_10817__$1;(statearr_10826_10846[2] = inst_10813);
(statearr_10826_10846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 8))
{var inst_10798 = (state_10817[7]);var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10817__$1,11,out1,inst_10798);
} else
{if((state_val_10818 === 9))
{var inst_10798 = (state_10817[7]);var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10817__$1,12,out2,inst_10798);
} else
{if((state_val_10818 === 10))
{var inst_10810 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10827_10847 = state_10817__$1;(statearr_10827_10847[2] = inst_10810);
(statearr_10827_10847[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 11))
{var inst_10803 = (state_10817[2]);var state_10817__$1 = (function (){var statearr_10828 = state_10817;(statearr_10828[8] = inst_10803);
return statearr_10828;
})();var statearr_10829_10848 = state_10817__$1;(statearr_10829_10848[2] = null);
(statearr_10829_10848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 12))
{var inst_10807 = (state_10817[2]);var state_10817__$1 = (function (){var statearr_10830 = state_10817;(statearr_10830[9] = inst_10807);
return statearr_10830;
})();var statearr_10831_10849 = state_10817__$1;(statearr_10831_10849[2] = null);
(statearr_10831_10849[1] = 2);
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
}
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_10835 = [null,null,null,null,null,null,null,null,null,null];(statearr_10835[0] = state_machine__5573__auto__);
(statearr_10835[1] = 1);
return statearr_10835;
});
var state_machine__5573__auto____1 = (function (state_10817){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_10817);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e10836){if((e10836 instanceof Object))
{var ex__5576__auto__ = e10836;var statearr_10837_10850 = state_10817;(statearr_10837_10850[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10851 = state_10817;
state_10817 = G__10851;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_10817){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_10817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_10838 = f__5588__auto__.call(null);(statearr_10838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___10839);
return statearr_10838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out1,out2], null);
});
split = function(pred,in$,p__10750){
switch(arguments.length){
case 2:
return split__2.call(this,pred,in$);
case 3:
return split__3.call(this,pred,in$,p__10750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
blog.utils.reactive.concat = (function concat(xs,in$){var out = cljs.core.async.chan.call(null);var c__5587__auto___10950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_10926){var state_val_10927 = (state_10926[1]);if((state_val_10927 === 1))
{var inst_10901 = cljs.core.seq.call(null,xs);var inst_10902 = inst_10901;var state_10926__$1 = (function (){var statearr_10928 = state_10926;(statearr_10928[7] = inst_10902);
return statearr_10928;
})();var statearr_10929_10951 = state_10926__$1;(statearr_10929_10951[2] = null);
(statearr_10929_10951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10927 === 2))
{var inst_10902 = (state_10926[7]);var state_10926__$1 = state_10926;if(cljs.core.truth_(inst_10902))
{var statearr_10930_10952 = state_10926__$1;(statearr_10930_10952[1] = 4);
} else
{var statearr_10931_10953 = state_10926__$1;(statearr_10931_10953[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10927 === 3))
{var inst_10924 = (state_10926[2]);var state_10926__$1 = state_10926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10926__$1,inst_10924);
} else
{if((state_val_10927 === 4))
{var inst_10902 = (state_10926[7]);var inst_10905 = cljs.core.first.call(null,inst_10902);var state_10926__$1 = state_10926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10926__$1,7,out,inst_10905);
} else
{if((state_val_10927 === 5))
{var state_10926__$1 = state_10926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10926__$1,8,in$);
} else
{if((state_val_10927 === 6))
{var inst_10922 = (state_10926[2]);var state_10926__$1 = state_10926;var statearr_10932_10954 = state_10926__$1;(statearr_10932_10954[2] = inst_10922);
(statearr_10932_10954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10927 === 7))
{var inst_10902 = (state_10926[7]);var inst_10907 = (state_10926[2]);var inst_10908 = cljs.core.next.call(null,inst_10902);var inst_10902__$1 = inst_10908;var state_10926__$1 = (function (){var statearr_10933 = state_10926;(statearr_10933[8] = inst_10907);
(statearr_10933[7] = inst_10902__$1);
return statearr_10933;
})();var statearr_10934_10955 = state_10926__$1;(statearr_10934_10955[2] = null);
(statearr_10934_10955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10927 === 8))
{var inst_10912 = (state_10926[9]);var inst_10912__$1 = (state_10926[2]);var state_10926__$1 = (function (){var statearr_10935 = state_10926;(statearr_10935[9] = inst_10912__$1);
return statearr_10935;
})();if(cljs.core.truth_(inst_10912__$1))
{var statearr_10936_10956 = state_10926__$1;(statearr_10936_10956[1] = 9);
} else
{var statearr_10937_10957 = state_10926__$1;(statearr_10937_10957[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10927 === 9))
{var inst_10912 = (state_10926[9]);var state_10926__$1 = state_10926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10926__$1,12,out,inst_10912);
} else
{if((state_val_10927 === 10))
{var inst_10918 = cljs.core.async.close_BANG_.call(null,out);var state_10926__$1 = state_10926;var statearr_10939_10958 = state_10926__$1;(statearr_10939_10958[2] = inst_10918);
(statearr_10939_10958[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10927 === 11))
{var inst_10920 = (state_10926[2]);var state_10926__$1 = state_10926;var statearr_10940_10959 = state_10926__$1;(statearr_10940_10959[2] = inst_10920);
(statearr_10940_10959[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10927 === 12))
{var inst_10902 = (state_10926[7]);var inst_10915 = (state_10926[2]);var tmp10938 = inst_10902;var inst_10902__$1 = tmp10938;var state_10926__$1 = (function (){var statearr_10941 = state_10926;(statearr_10941[7] = inst_10902__$1);
(statearr_10941[10] = inst_10915);
return statearr_10941;
})();var statearr_10942_10960 = state_10926__$1;(statearr_10942_10960[2] = null);
(statearr_10942_10960[1] = 2);
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
}
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_10946 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10946[0] = state_machine__5573__auto__);
(statearr_10946[1] = 1);
return statearr_10946;
});
var state_machine__5573__auto____1 = (function (state_10926){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_10926);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e10947){if((e10947 instanceof Object))
{var ex__5576__auto__ = e10947;var statearr_10948_10961 = state_10926;(statearr_10948_10961[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10962 = state_10926;
state_10926 = G__10962;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_10926){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_10926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_10949 = f__5588__auto__.call(null);(statearr_10949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___10950);
return statearr_10949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.distinct = (function distinct(in$){var out = cljs.core.async.chan.call(null);var c__5587__auto___11047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11025){var state_val_11026 = (state_11025[1]);if((state_val_11026 === 1))
{var inst_11005 = null;var state_11025__$1 = (function (){var statearr_11027 = state_11025;(statearr_11027[7] = inst_11005);
return statearr_11027;
})();var statearr_11028_11048 = state_11025__$1;(statearr_11028_11048[2] = null);
(statearr_11028_11048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 2))
{var state_11025__$1 = state_11025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11025__$1,4,in$);
} else
{if((state_val_11026 === 3))
{var inst_11023 = (state_11025[2]);var state_11025__$1 = state_11025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11025__$1,inst_11023);
} else
{if((state_val_11026 === 4))
{var inst_11008 = (state_11025[8]);var inst_11008__$1 = (state_11025[2]);var state_11025__$1 = (function (){var statearr_11029 = state_11025;(statearr_11029[8] = inst_11008__$1);
return statearr_11029;
})();if(cljs.core.truth_(inst_11008__$1))
{var statearr_11030_11049 = state_11025__$1;(statearr_11030_11049[1] = 5);
} else
{var statearr_11031_11050 = state_11025__$1;(statearr_11031_11050[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 5))
{var inst_11005 = (state_11025[7]);var inst_11008 = (state_11025[8]);var inst_11010 = cljs.core.not_EQ_.call(null,inst_11008,inst_11005);var state_11025__$1 = state_11025;if(inst_11010)
{var statearr_11032_11051 = state_11025__$1;(statearr_11032_11051[1] = 8);
} else
{var statearr_11033_11052 = state_11025__$1;(statearr_11033_11052[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 6))
{var inst_11019 = cljs.core.async.close_BANG_.call(null,out);var state_11025__$1 = state_11025;var statearr_11034_11053 = state_11025__$1;(statearr_11034_11053[2] = inst_11019);
(statearr_11034_11053[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 7))
{var inst_11021 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11035_11054 = state_11025__$1;(statearr_11035_11054[2] = inst_11021);
(statearr_11035_11054[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 8))
{var inst_11008 = (state_11025[8]);var state_11025__$1 = state_11025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11025__$1,11,out,inst_11008);
} else
{if((state_val_11026 === 9))
{var state_11025__$1 = state_11025;var statearr_11036_11055 = state_11025__$1;(statearr_11036_11055[2] = null);
(statearr_11036_11055[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 10))
{var inst_11008 = (state_11025[8]);var inst_11016 = (state_11025[2]);var inst_11005 = inst_11008;var state_11025__$1 = (function (){var statearr_11037 = state_11025;(statearr_11037[9] = inst_11016);
(statearr_11037[7] = inst_11005);
return statearr_11037;
})();var statearr_11038_11056 = state_11025__$1;(statearr_11038_11056[2] = null);
(statearr_11038_11056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 11))
{var inst_11013 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11039_11057 = state_11025__$1;(statearr_11039_11057[2] = inst_11013);
(statearr_11039_11057[1] = 10);
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
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11043 = [null,null,null,null,null,null,null,null,null,null];(statearr_11043[0] = state_machine__5573__auto__);
(statearr_11043[1] = 1);
return statearr_11043;
});
var state_machine__5573__auto____1 = (function (state_11025){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11025);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11044){if((e11044 instanceof Object))
{var ex__5576__auto__ = e11044;var statearr_11045_11058 = state_11025;(statearr_11045_11058[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11025);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11059 = state_11025;
state_11025 = G__11059;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11025){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11046 = f__5588__auto__.call(null);(statearr_11046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___11047);
return statearr_11046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.fan_in = (function() {
var fan_in = null;
var fan_in__1 = (function (ins){return fan_in.call(null,ins,cljs.core.async.chan.call(null));
});
var fan_in__2 = (function (ins,out){var c__5587__auto___11168 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11143){var state_val_11144 = (state_11143[1]);if((state_val_11144 === 1))
{var inst_11114 = cljs.core.vec.call(null,ins);var inst_11115 = inst_11114;var state_11143__$1 = (function (){var statearr_11145 = state_11143;(statearr_11145[7] = inst_11115);
return statearr_11145;
})();var statearr_11146_11169 = state_11143__$1;(statearr_11146_11169[2] = null);
(statearr_11146_11169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11144 === 2))
{var inst_11115 = (state_11143[7]);var inst_11117 = cljs.core.count.call(null,inst_11115);var inst_11118 = (inst_11117 > 0);var state_11143__$1 = state_11143;if(cljs.core.truth_(inst_11118))
{var statearr_11147_11170 = state_11143__$1;(statearr_11147_11170[1] = 4);
} else
{var statearr_11148_11171 = state_11143__$1;(statearr_11148_11171[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11144 === 3))
{var inst_11140 = (state_11143[2]);var inst_11141 = cljs.core.async.close_BANG_.call(null,out);var state_11143__$1 = (function (){var statearr_11149 = state_11143;(statearr_11149[8] = inst_11140);
return statearr_11149;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11143__$1,inst_11141);
} else
{if((state_val_11144 === 4))
{var inst_11115 = (state_11143[7]);var state_11143__$1 = state_11143;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11143__$1,7,inst_11115);
} else
{if((state_val_11144 === 5))
{var state_11143__$1 = state_11143;var statearr_11150_11172 = state_11143__$1;(statearr_11150_11172[2] = null);
(statearr_11150_11172[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11144 === 6))
{var inst_11138 = (state_11143[2]);var state_11143__$1 = state_11143;var statearr_11151_11173 = state_11143__$1;(statearr_11151_11173[2] = inst_11138);
(statearr_11151_11173[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11144 === 7))
{var inst_11123 = (state_11143[9]);var inst_11122 = (state_11143[2]);var inst_11123__$1 = cljs.core.nth.call(null,inst_11122,0,null);var inst_11124 = cljs.core.nth.call(null,inst_11122,1,null);var state_11143__$1 = (function (){var statearr_11152 = state_11143;(statearr_11152[10] = inst_11124);
(statearr_11152[9] = inst_11123__$1);
return statearr_11152;
})();if(cljs.core.truth_(inst_11123__$1))
{var statearr_11153_11174 = state_11143__$1;(statearr_11153_11174[1] = 8);
} else
{var statearr_11154_11175 = state_11143__$1;(statearr_11154_11175[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11144 === 8))
{var inst_11123 = (state_11143[9]);var state_11143__$1 = state_11143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11143__$1,11,out,inst_11123);
} else
{if((state_val_11144 === 9))
{var state_11143__$1 = state_11143;var statearr_11156_11176 = state_11143__$1;(statearr_11156_11176[2] = null);
(statearr_11156_11176[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11144 === 10))
{var inst_11115 = (state_11143[7]);var inst_11124 = (state_11143[10]);var inst_11131 = (state_11143[2]);var inst_11132 = cljs.core.set.call(null,inst_11115);var inst_11133 = cljs.core.disj.call(null,inst_11132,inst_11124);var inst_11134 = cljs.core.vec.call(null,inst_11133);var inst_11115__$1 = inst_11134;var state_11143__$1 = (function (){var statearr_11157 = state_11143;(statearr_11157[11] = inst_11131);
(statearr_11157[7] = inst_11115__$1);
return statearr_11157;
})();var statearr_11158_11177 = state_11143__$1;(statearr_11158_11177[2] = null);
(statearr_11158_11177[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11144 === 11))
{var inst_11115 = (state_11143[7]);var inst_11127 = (state_11143[2]);var tmp11155 = inst_11115;var inst_11115__$1 = tmp11155;var state_11143__$1 = (function (){var statearr_11159 = state_11143;(statearr_11159[12] = inst_11127);
(statearr_11159[7] = inst_11115__$1);
return statearr_11159;
})();var statearr_11160_11178 = state_11143__$1;(statearr_11160_11178[2] = null);
(statearr_11160_11178[1] = 2);
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
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11164 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11164[0] = state_machine__5573__auto__);
(statearr_11164[1] = 1);
return statearr_11164;
});
var state_machine__5573__auto____1 = (function (state_11143){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11143);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11165){if((e11165 instanceof Object))
{var ex__5576__auto__ = e11165;var statearr_11166_11179 = state_11143;(statearr_11166_11179[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11143);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11180 = state_11143;
state_11143 = G__11180;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11143){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11167 = f__5588__auto__.call(null);(statearr_11167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___11168);
return statearr_11167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
fan_in = function(ins,out){
switch(arguments.length){
case 1:
return fan_in__1.call(this,ins);
case 2:
return fan_in__2.call(this,ins,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fan_in.cljs$core$IFn$_invoke$arity$1 = fan_in__1;
fan_in.cljs$core$IFn$_invoke$arity$2 = fan_in__2;
return fan_in;
})()
;
blog.utils.reactive.take_until = (function() {
var take_until = null;
var take_until__2 = (function (pred_sentinel,in$){return take_until.call(null,pred_sentinel,in$,cljs.core.async.chan.call(null));
});
var take_until__3 = (function (pred_sentinel,in$,out){var c__5587__auto___11265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11244){var state_val_11245 = (state_11244[1]);if((state_val_11245 === 1))
{var state_11244__$1 = state_11244;var statearr_11246_11266 = state_11244__$1;(statearr_11246_11266[2] = null);
(statearr_11246_11266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 2))
{var state_11244__$1 = state_11244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11244__$1,4,in$);
} else
{if((state_val_11245 === 3))
{var inst_11242 = (state_11244[2]);var state_11244__$1 = state_11244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11244__$1,inst_11242);
} else
{if((state_val_11245 === 4))
{var inst_11225 = (state_11244[7]);var inst_11225__$1 = (state_11244[2]);var state_11244__$1 = (function (){var statearr_11247 = state_11244;(statearr_11247[7] = inst_11225__$1);
return statearr_11247;
})();if(cljs.core.truth_(inst_11225__$1))
{var statearr_11248_11267 = state_11244__$1;(statearr_11248_11267[1] = 5);
} else
{var statearr_11249_11268 = state_11244__$1;(statearr_11249_11268[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 5))
{var inst_11225 = (state_11244[7]);var state_11244__$1 = state_11244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11244__$1,8,out,inst_11225);
} else
{if((state_val_11245 === 6))
{var inst_11238 = cljs.core.async.close_BANG_.call(null,out);var state_11244__$1 = state_11244;var statearr_11250_11269 = state_11244__$1;(statearr_11250_11269[2] = inst_11238);
(statearr_11250_11269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 7))
{var inst_11240 = (state_11244[2]);var state_11244__$1 = state_11244;var statearr_11251_11270 = state_11244__$1;(statearr_11251_11270[2] = inst_11240);
(statearr_11251_11270[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 8))
{var inst_11225 = (state_11244[7]);var inst_11228 = (state_11244[2]);var inst_11229 = pred_sentinel.call(null,inst_11225);var inst_11230 = cljs.core.not.call(null,inst_11229);var state_11244__$1 = (function (){var statearr_11252 = state_11244;(statearr_11252[8] = inst_11228);
return statearr_11252;
})();if(inst_11230)
{var statearr_11253_11271 = state_11244__$1;(statearr_11253_11271[1] = 9);
} else
{var statearr_11254_11272 = state_11244__$1;(statearr_11254_11272[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 9))
{var state_11244__$1 = state_11244;var statearr_11255_11273 = state_11244__$1;(statearr_11255_11273[2] = null);
(statearr_11255_11273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 10))
{var inst_11234 = cljs.core.async.close_BANG_.call(null,out);var state_11244__$1 = state_11244;var statearr_11256_11274 = state_11244__$1;(statearr_11256_11274[2] = inst_11234);
(statearr_11256_11274[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 11))
{var inst_11236 = (state_11244[2]);var state_11244__$1 = state_11244;var statearr_11257_11275 = state_11244__$1;(statearr_11257_11275[2] = inst_11236);
(statearr_11257_11275[1] = 7);
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
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11261 = [null,null,null,null,null,null,null,null,null];(statearr_11261[0] = state_machine__5573__auto__);
(statearr_11261[1] = 1);
return statearr_11261;
});
var state_machine__5573__auto____1 = (function (state_11244){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11244);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11262){if((e11262 instanceof Object))
{var ex__5576__auto__ = e11262;var statearr_11263_11276 = state_11244;(statearr_11263_11276[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11244);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11277 = state_11244;
state_11244 = G__11277;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11244){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11264 = f__5588__auto__.call(null);(statearr_11264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___11265);
return statearr_11264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
take_until = function(pred_sentinel,in$,out){
switch(arguments.length){
case 2:
return take_until__2.call(this,pred_sentinel,in$);
case 3:
return take_until__3.call(this,pred_sentinel,in$,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_until.cljs$core$IFn$_invoke$arity$2 = take_until__2;
take_until.cljs$core$IFn$_invoke$arity$3 = take_until__3;
return take_until;
})()
;
blog.utils.reactive.siphon = (function() {
var siphon = null;
var siphon__1 = (function (in$){return siphon.call(null,in$,cljs.core.PersistentVector.EMPTY);
});
var siphon__2 = (function (in$,coll){var c__5587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11322){var state_val_11323 = (state_11322[1]);if((state_val_11323 === 7))
{var inst_11318 = (state_11322[2]);var state_11322__$1 = state_11322;var statearr_11324_11340 = state_11322__$1;(statearr_11324_11340[2] = inst_11318);
(statearr_11324_11340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 6))
{var inst_11309 = (state_11322[7]);var state_11322__$1 = state_11322;var statearr_11325_11341 = state_11322__$1;(statearr_11325_11341[2] = inst_11309);
(statearr_11325_11341[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 5))
{var inst_11309 = (state_11322[7]);var inst_11312 = (state_11322[8]);var inst_11314 = cljs.core.conj.call(null,inst_11309,inst_11312);var inst_11309__$1 = inst_11314;var state_11322__$1 = (function (){var statearr_11326 = state_11322;(statearr_11326[7] = inst_11309__$1);
return statearr_11326;
})();var statearr_11327_11342 = state_11322__$1;(statearr_11327_11342[2] = null);
(statearr_11327_11342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 4))
{var inst_11312 = (state_11322[8]);var inst_11312__$1 = (state_11322[2]);var state_11322__$1 = (function (){var statearr_11328 = state_11322;(statearr_11328[8] = inst_11312__$1);
return statearr_11328;
})();if(cljs.core.truth_(inst_11312__$1))
{var statearr_11329_11343 = state_11322__$1;(statearr_11329_11343[1] = 5);
} else
{var statearr_11330_11344 = state_11322__$1;(statearr_11330_11344[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11323 === 3))
{var inst_11320 = (state_11322[2]);var state_11322__$1 = state_11322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11322__$1,inst_11320);
} else
{if((state_val_11323 === 2))
{var state_11322__$1 = state_11322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11322__$1,4,in$);
} else
{if((state_val_11323 === 1))
{var inst_11309 = coll;var state_11322__$1 = (function (){var statearr_11331 = state_11322;(statearr_11331[7] = inst_11309);
return statearr_11331;
})();var statearr_11332_11345 = state_11322__$1;(statearr_11332_11345[2] = null);
(statearr_11332_11345[1] = 2);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11336 = [null,null,null,null,null,null,null,null,null];(statearr_11336[0] = state_machine__5573__auto__);
(statearr_11336[1] = 1);
return statearr_11336;
});
var state_machine__5573__auto____1 = (function (state_11322){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11337){if((e11337 instanceof Object))
{var ex__5576__auto__ = e11337;var statearr_11338_11346 = state_11322;(statearr_11338_11346[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11347 = state_11322;
state_11322 = G__11347;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11322){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11339 = f__5588__auto__.call(null);(statearr_11339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto__);
return statearr_11339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return c__5587__auto__;
});
siphon = function(in$,coll){
switch(arguments.length){
case 1:
return siphon__1.call(this,in$);
case 2:
return siphon__2.call(this,in$,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
siphon.cljs$core$IFn$_invoke$arity$1 = siphon__1;
siphon.cljs$core$IFn$_invoke$arity$2 = siphon__2;
return siphon;
})()
;
blog.utils.reactive.always = (function always(v,c){var out = cljs.core.async.chan.call(null);var c__5587__auto___11408 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11392){var state_val_11393 = (state_11392[1]);if((state_val_11393 === 8))
{var inst_11383 = (state_11392[2]);var state_11392__$1 = (function (){var statearr_11394 = state_11392;(statearr_11394[7] = inst_11383);
return statearr_11394;
})();var statearr_11395_11409 = state_11392__$1;(statearr_11395_11409[2] = null);
(statearr_11395_11409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 7))
{var inst_11388 = (state_11392[2]);var state_11392__$1 = state_11392;var statearr_11396_11410 = state_11392__$1;(statearr_11396_11410[2] = inst_11388);
(statearr_11396_11410[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 6))
{var inst_11386 = cljs.core.async.close_BANG_.call(null,out);var state_11392__$1 = state_11392;var statearr_11397_11411 = state_11392__$1;(statearr_11397_11411[2] = inst_11386);
(statearr_11397_11411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 5))
{var state_11392__$1 = state_11392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11392__$1,8,out,v);
} else
{if((state_val_11393 === 4))
{var inst_11380 = (state_11392[2]);var state_11392__$1 = state_11392;if(cljs.core.truth_(inst_11380))
{var statearr_11398_11412 = state_11392__$1;(statearr_11398_11412[1] = 5);
} else
{var statearr_11399_11413 = state_11392__$1;(statearr_11399_11413[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11393 === 3))
{var inst_11390 = (state_11392[2]);var state_11392__$1 = state_11392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11392__$1,inst_11390);
} else
{if((state_val_11393 === 2))
{var state_11392__$1 = state_11392;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11392__$1,4,c);
} else
{if((state_val_11393 === 1))
{var state_11392__$1 = state_11392;var statearr_11400_11414 = state_11392__$1;(statearr_11400_11414[2] = null);
(statearr_11400_11414[1] = 2);
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
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11404 = [null,null,null,null,null,null,null,null];(statearr_11404[0] = state_machine__5573__auto__);
(statearr_11404[1] = 1);
return statearr_11404;
});
var state_machine__5573__auto____1 = (function (state_11392){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11392);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11405){if((e11405 instanceof Object))
{var ex__5576__auto__ = e11405;var statearr_11406_11415 = state_11392;(statearr_11406_11415[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11392);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11416 = state_11392;
state_11392 = G__11416;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11392){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11407 = f__5588__auto__.call(null);(statearr_11407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___11408);
return statearr_11407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.toggle = (function toggle(in$){var out = cljs.core.async.chan.call(null);var control = cljs.core.async.chan.call(null);var c__5587__auto___11565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11533){var state_val_11534 = (state_11533[1]);if((state_val_11534 === 1))
{var inst_11491 = true;var state_11533__$1 = (function (){var statearr_11535 = state_11533;(statearr_11535[7] = inst_11491);
return statearr_11535;
})();var statearr_11536_11566 = state_11533__$1;(statearr_11536_11566[2] = null);
(statearr_11536_11566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 2))
{var inst_11498 = [in$,control];var inst_11499 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11498,null));var state_11533__$1 = state_11533;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11533__$1,4,inst_11499);
} else
{if((state_val_11534 === 3))
{var inst_11531 = (state_11533[2]);var state_11533__$1 = state_11533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11533__$1,inst_11531);
} else
{if((state_val_11534 === 4))
{var inst_11501 = (state_11533[8]);var inst_11503 = (state_11533[9]);var inst_11501__$1 = (state_11533[2]);var inst_11502 = cljs.core.nth.call(null,inst_11501__$1,0,null);var inst_11503__$1 = cljs.core.nth.call(null,inst_11501__$1,1,null);var inst_11504 = cljs.core._EQ_.call(null,inst_11503__$1,in$);var state_11533__$1 = (function (){var statearr_11537 = state_11533;(statearr_11537[8] = inst_11501__$1);
(statearr_11537[10] = inst_11502);
(statearr_11537[9] = inst_11503__$1);
return statearr_11537;
})();if(inst_11504)
{var statearr_11538_11567 = state_11533__$1;(statearr_11538_11567[1] = 5);
} else
{var statearr_11539_11568 = state_11533__$1;(statearr_11539_11568[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 5))
{var inst_11491 = (state_11533[7]);var inst_11501 = (state_11533[8]);var inst_11507 = cljs.core.nth.call(null,inst_11501,0,null);var state_11533__$1 = (function (){var statearr_11540 = state_11533;(statearr_11540[11] = inst_11507);
return statearr_11540;
})();if(cljs.core.truth_(inst_11491))
{var statearr_11541_11569 = state_11533__$1;(statearr_11541_11569[1] = 8);
} else
{var statearr_11542_11570 = state_11533__$1;(statearr_11542_11570[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 6))
{var inst_11503 = (state_11533[9]);var inst_11515 = cljs.core._EQ_.call(null,inst_11503,control);var state_11533__$1 = state_11533;if(inst_11515)
{var statearr_11543_11571 = state_11533__$1;(statearr_11543_11571[1] = 12);
} else
{var statearr_11544_11572 = state_11533__$1;(statearr_11544_11572[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 7))
{var inst_11528 = (state_11533[2]);var inst_11491 = inst_11528;var state_11533__$1 = (function (){var statearr_11545 = state_11533;(statearr_11545[7] = inst_11491);
return statearr_11545;
})();var statearr_11546_11573 = state_11533__$1;(statearr_11546_11573[2] = null);
(statearr_11546_11573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 8))
{var inst_11507 = (state_11533[11]);var state_11533__$1 = state_11533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11533__$1,11,out,inst_11507);
} else
{if((state_val_11534 === 9))
{var state_11533__$1 = state_11533;var statearr_11547_11574 = state_11533__$1;(statearr_11547_11574[2] = null);
(statearr_11547_11574[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 10))
{var inst_11491 = (state_11533[7]);var inst_11513 = (state_11533[2]);var state_11533__$1 = (function (){var statearr_11548 = state_11533;(statearr_11548[12] = inst_11513);
return statearr_11548;
})();var statearr_11549_11575 = state_11533__$1;(statearr_11549_11575[2] = inst_11491);
(statearr_11549_11575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 11))
{var inst_11510 = (state_11533[2]);var state_11533__$1 = state_11533;var statearr_11550_11576 = state_11533__$1;(statearr_11550_11576[2] = inst_11510);
(statearr_11550_11576[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 12))
{var inst_11501 = (state_11533[8]);var inst_11518 = cljs.core.nth.call(null,inst_11501,0,null);var state_11533__$1 = state_11533;var statearr_11551_11577 = state_11533__$1;(statearr_11551_11577[2] = inst_11518);
(statearr_11551_11577[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 13))
{var inst_11503 = (state_11533[9]);var inst_11520 = cljs.core._EQ_.call(null,inst_11503,new cljs.core.Keyword(null,"default","default",2558708147));var state_11533__$1 = state_11533;if(inst_11520)
{var statearr_11552_11578 = state_11533__$1;(statearr_11552_11578[1] = 15);
} else
{var statearr_11553_11579 = state_11533__$1;(statearr_11553_11579[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 14))
{var inst_11526 = (state_11533[2]);var state_11533__$1 = state_11533;var statearr_11554_11580 = state_11533__$1;(statearr_11554_11580[2] = inst_11526);
(statearr_11554_11580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 15))
{var inst_11502 = (state_11533[10]);var state_11533__$1 = state_11533;var statearr_11555_11581 = state_11533__$1;(statearr_11555_11581[2] = inst_11502);
(statearr_11555_11581[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 16))
{var state_11533__$1 = state_11533;var statearr_11556_11582 = state_11533__$1;(statearr_11556_11582[2] = null);
(statearr_11556_11582[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11534 === 17))
{var inst_11524 = (state_11533[2]);var state_11533__$1 = state_11533;var statearr_11557_11583 = state_11533__$1;(statearr_11557_11583[2] = inst_11524);
(statearr_11557_11583[1] = 14);
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
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11561 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11561[0] = state_machine__5573__auto__);
(statearr_11561[1] = 1);
return statearr_11561;
});
var state_machine__5573__auto____1 = (function (state_11533){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11533);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11562){if((e11562 instanceof Object))
{var ex__5576__auto__ = e11562;var statearr_11563_11584 = state_11533;(statearr_11563_11584[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11585 = state_11533;
state_11533 = G__11585;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11533){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11564 = f__5588__auto__.call(null);(statearr_11564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___11565);
return statearr_11564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan","chan",1016956612),out,new cljs.core.Keyword(null,"control","control",1965447375),control], null);
});
blog.utils.reactive.barrier = (function barrier(cs){var c__5587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11638){var state_val_11639 = (state_11638[1]);if((state_val_11639 === 7))
{var inst_11626 = (state_11638[7]);var inst_11623 = (state_11638[8]);var inst_11629 = (state_11638[2]);var inst_11630 = cljs.core.conj.call(null,inst_11623,inst_11629);var inst_11622 = inst_11626;var inst_11623__$1 = inst_11630;var state_11638__$1 = (function (){var statearr_11640 = state_11638;(statearr_11640[9] = inst_11622);
(statearr_11640[8] = inst_11623__$1);
return statearr_11640;
})();var statearr_11641_11656 = state_11638__$1;(statearr_11641_11656[2] = null);
(statearr_11641_11656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11639 === 6))
{var inst_11634 = (state_11638[2]);var state_11638__$1 = state_11638;var statearr_11642_11657 = state_11638__$1;(statearr_11642_11657[2] = inst_11634);
(statearr_11642_11657[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11639 === 5))
{var inst_11623 = (state_11638[8]);var state_11638__$1 = state_11638;var statearr_11643_11658 = state_11638__$1;(statearr_11643_11658[2] = inst_11623);
(statearr_11643_11658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11639 === 4))
{var inst_11622 = (state_11638[9]);var inst_11626 = cljs.core.next.call(null,inst_11622);var inst_11627 = cljs.core.first.call(null,inst_11622);var state_11638__$1 = (function (){var statearr_11644 = state_11638;(statearr_11644[7] = inst_11626);
return statearr_11644;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11638__$1,7,inst_11627);
} else
{if((state_val_11639 === 3))
{var inst_11636 = (state_11638[2]);var state_11638__$1 = state_11638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11638__$1,inst_11636);
} else
{if((state_val_11639 === 2))
{var inst_11622 = (state_11638[9]);var state_11638__$1 = state_11638;if(cljs.core.truth_(inst_11622))
{var statearr_11645_11659 = state_11638__$1;(statearr_11645_11659[1] = 4);
} else
{var statearr_11646_11660 = state_11638__$1;(statearr_11646_11660[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11639 === 1))
{var inst_11621 = cljs.core.seq.call(null,cs);var inst_11622 = inst_11621;var inst_11623 = cljs.core.PersistentVector.EMPTY;var state_11638__$1 = (function (){var statearr_11647 = state_11638;(statearr_11647[9] = inst_11622);
(statearr_11647[8] = inst_11623);
return statearr_11647;
})();var statearr_11648_11661 = state_11638__$1;(statearr_11648_11661[2] = null);
(statearr_11648_11661[1] = 2);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11652 = [null,null,null,null,null,null,null,null,null,null];(statearr_11652[0] = state_machine__5573__auto__);
(statearr_11652[1] = 1);
return statearr_11652;
});
var state_machine__5573__auto____1 = (function (state_11638){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11653){if((e11653 instanceof Object))
{var ex__5576__auto__ = e11653;var statearr_11654_11662 = state_11638;(statearr_11654_11662[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11663 = state_11638;
state_11638 = G__11663;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11638){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11655 = f__5588__auto__.call(null);(statearr_11655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto__);
return statearr_11655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return c__5587__auto__;
});
blog.utils.reactive.cyclic_barrier = (function cyclic_barrier(cs){var out = cljs.core.async.chan.call(null);var c__5587__auto___11708 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11696){var state_val_11697 = (state_11696[1]);if((state_val_11697 === 5))
{var inst_11689 = (state_11696[2]);var state_11696__$1 = state_11696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11696__$1,4,out,inst_11689);
} else
{if((state_val_11697 === 4))
{var inst_11691 = (state_11696[2]);var state_11696__$1 = (function (){var statearr_11698 = state_11696;(statearr_11698[7] = inst_11691);
return statearr_11698;
})();var statearr_11699_11709 = state_11696__$1;(statearr_11699_11709[2] = null);
(statearr_11699_11709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11697 === 3))
{var inst_11694 = (state_11696[2]);var state_11696__$1 = state_11696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11696__$1,inst_11694);
} else
{if((state_val_11697 === 2))
{var inst_11687 = blog.utils.reactive.barrier.call(null,cs);var state_11696__$1 = state_11696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11696__$1,5,inst_11687);
} else
{if((state_val_11697 === 1))
{var state_11696__$1 = state_11696;var statearr_11700_11710 = state_11696__$1;(statearr_11700_11710[2] = null);
(statearr_11700_11710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11704 = [null,null,null,null,null,null,null,null];(statearr_11704[0] = state_machine__5573__auto__);
(statearr_11704[1] = 1);
return statearr_11704;
});
var state_machine__5573__auto____1 = (function (state_11696){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11696);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11705){if((e11705 instanceof Object))
{var ex__5576__auto__ = e11705;var statearr_11706_11711 = state_11696;(statearr_11706_11711[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11712 = state_11696;
state_11696 = G__11712;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11696){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11707 = f__5588__auto__.call(null);(statearr_11707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___11708);
return statearr_11707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
blog.utils.reactive.mouse_enter = (function mouse_enter(el){var matcher = blog.utils.dom.el_matcher.call(null,el);return blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594)),blog.utils.reactive.filter.call(null,(function (e){var and__3454__auto__ = (el === e.target);if(and__3454__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3454__auto__;
}
}),blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963))));
});
blog.utils.reactive.mouse_leave = (function mouse_leave(el){var matcher = blog.utils.dom.el_matcher.call(null,el);return blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"leave","leave",1116750377)),blog.utils.reactive.filter.call(null,(function (e){var and__3454__auto__ = (el === e.target);if(and__3454__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3454__auto__;
}
}),blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));
});
blog.utils.reactive.hover = (function hover(el){return blog.utils.reactive.distinct.call(null,blog.utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.reactive.mouse_enter.call(null,el),blog.utils.reactive.mouse_leave.call(null,el)], null)));
});
blog.utils.reactive.hover_child = (function hover_child(el,tag){var matcher = blog.utils.dom.tag_match.call(null,tag);var over = blog.utils.reactive.map.call(null,((function (matcher){
return (function (p1__11714_SHARP_){return blog.utils.helpers.index_of.call(null,blog.utils.dom.by_tag_name.call(null,el,tag),p1__11714_SHARP_);
});})(matcher))
,blog.utils.reactive.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-match","no-match",570153515),null], null), null),blog.utils.reactive.map.call(null,((function (matcher){
return (function (p1__11713_SHARP_){var target = p1__11713_SHARP_.target;if(cljs.core.truth_(matcher.call(null,target)))
{return target;
} else
{var temp__4090__auto__ = goog.dom.getAncestor(target,matcher);if(cljs.core.truth_(temp__4090__auto__))
{var el__$1 = temp__4090__auto__;return el__$1;
} else
{return new cljs.core.Keyword(null,"no-match","no-match",570153515);
}
}
});})(matcher))
,blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963)))));var out = blog.utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"clear","clear",1108650431)),blog.utils.reactive.filter.call(null,((function (matcher,over){
return (function (e){var and__3454__auto__ = matcher.call(null,e.target);if(cljs.core.truth_(and__3454__auto__))
{var rel_target = e.relatedTarget;var rel_target__$1 = ((rel_target == null)) || (cljs.core.not.call(null,matcher.call(null,rel_target)));return rel_target__$1;
} else
{return and__3454__auto__;
}
});})(matcher,over))
,blog.utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));return blog.utils.reactive.distinct.call(null,blog.utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [over,out], null)));
});
blog.utils.reactive.jsonp = (function() {
var jsonp = null;
var jsonp__1 = (function (uri){return jsonp.call(null,cljs.core.async.chan.call(null),uri);
});
var jsonp__2 = (function (c,uri){var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));gjsonp.send(null,(function (p1__11715_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__11715_SHARP_);
}));
return c;
});
jsonp = function(c,uri){
switch(arguments.length){
case 1:
return jsonp__1.call(this,c);
case 2:
return jsonp__2.call(this,c,uri);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jsonp.cljs$core$IFn$_invoke$arity$1 = jsonp__1;
jsonp.cljs$core$IFn$_invoke$arity$2 = jsonp__2;
return jsonp;
})()
;
blog.utils.reactive.throttle_STAR_ = (function() {
var throttle_STAR_ = null;
var throttle_STAR___2 = (function (in$,msecs){return throttle_STAR_.call(null,in$,msecs,cljs.core.async.chan.call(null));
});
var throttle_STAR___3 = (function (in$,msecs,out){return throttle_STAR_.call(null,in$,msecs,out,cljs.core.async.chan.call(null));
});
var throttle_STAR___4 = (function (in$,msecs,out,control){var c__5587__auto___12000 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_11947){var state_val_11948 = (state_11947[1]);if((state_val_11948 === 1))
{var inst_11858 = [in$,control];var inst_11859 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11858,null));var inst_11860 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_11861 = null;var inst_11862 = inst_11859;var state_11947__$1 = (function (){var statearr_11949 = state_11947;(statearr_11949[7] = inst_11862);
(statearr_11949[8] = inst_11861);
(statearr_11949[9] = inst_11860);
return statearr_11949;
})();var statearr_11950_12001 = state_11947__$1;(statearr_11950_12001[2] = null);
(statearr_11950_12001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 2))
{var inst_11862 = (state_11947[7]);var inst_11865 = cljs.core.nth.call(null,inst_11862,0,null);var inst_11866 = cljs.core.nth.call(null,inst_11862,1,null);var inst_11867 = cljs.core.nth.call(null,inst_11862,2,null);var state_11947__$1 = (function (){var statearr_11951 = state_11947;(statearr_11951[10] = inst_11867);
(statearr_11951[11] = inst_11865);
(statearr_11951[12] = inst_11866);
return statearr_11951;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11947__$1,4,inst_11862);
} else
{if((state_val_11948 === 3))
{var inst_11945 = (state_11947[2]);var state_11947__$1 = state_11947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11947__$1,inst_11945);
} else
{if((state_val_11948 === 4))
{var inst_11872 = (state_11947[13]);var inst_11870 = (state_11947[2]);var inst_11871 = cljs.core.nth.call(null,inst_11870,0,null);var inst_11872__$1 = cljs.core.nth.call(null,inst_11870,1,null);var inst_11876 = cljs.core._EQ_.call(null,in$,inst_11872__$1);var state_11947__$1 = (function (){var statearr_11952 = state_11947;(statearr_11952[13] = inst_11872__$1);
(statearr_11952[14] = inst_11871);
return statearr_11952;
})();if(inst_11876)
{var statearr_11953_12002 = state_11947__$1;(statearr_11953_12002[1] = 5);
} else
{var statearr_11954_12003 = state_11947__$1;(statearr_11954_12003[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 5))
{var inst_11860 = (state_11947[9]);var inst_11881 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324),inst_11860);var state_11947__$1 = state_11947;if(inst_11881)
{var statearr_11955_12004 = state_11947__$1;(statearr_11955_12004[1] = 8);
} else
{var statearr_11956_12005 = state_11947__$1;(statearr_11956_12005[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 6))
{var inst_11867 = (state_11947[10]);var inst_11872 = (state_11947[13]);var inst_11907 = cljs.core._EQ_.call(null,inst_11867,inst_11872);var state_11947__$1 = state_11947;if(inst_11907)
{var statearr_11957_12006 = state_11947__$1;(statearr_11957_12006[1] = 17);
} else
{var statearr_11958_12007 = state_11947__$1;(statearr_11958_12007[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 7))
{var inst_11943 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11959_12008 = state_11947__$1;(statearr_11959_12008[2] = inst_11943);
(statearr_11959_12008[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 8))
{var inst_11871 = (state_11947[14]);var state_11947__$1 = state_11947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11947__$1,11,out,inst_11871);
} else
{if((state_val_11948 === 9))
{var inst_11860 = (state_11947[9]);var inst_11893 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","throttling","blog.utils.reactive/throttling",3340209363),inst_11860);var state_11947__$1 = state_11947;if(inst_11893)
{var statearr_11960_12009 = state_11947__$1;(statearr_11960_12009[1] = 13);
} else
{var statearr_11961_12010 = state_11947__$1;(statearr_11961_12010[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 10))
{var inst_11905 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11963_12011 = state_11947__$1;(statearr_11963_12011[2] = inst_11905);
(statearr_11963_12011[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 11))
{var inst_11871 = (state_11947[14]);var inst_11884 = (state_11947[2]);var inst_11885 = [new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890),inst_11871];var inst_11886 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11885,null));var state_11947__$1 = (function (){var statearr_11964 = state_11947;(statearr_11964[15] = inst_11884);
return statearr_11964;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11947__$1,12,out,inst_11886);
} else
{if((state_val_11948 === 12))
{var inst_11862 = (state_11947[7]);var inst_11861 = (state_11947[8]);var inst_11888 = (state_11947[2]);var inst_11889 = cljs.core.async.timeout.call(null,msecs);var inst_11890 = cljs.core.conj.call(null,inst_11862,inst_11889);var tmp11962 = inst_11861;var inst_11860 = new cljs.core.Keyword("blog.utils.reactive","throttling","blog.utils.reactive/throttling",3340209363);var inst_11861__$1 = tmp11962;var inst_11862__$1 = inst_11890;var state_11947__$1 = (function (){var statearr_11965 = state_11947;(statearr_11965[7] = inst_11862__$1);
(statearr_11965[8] = inst_11861__$1);
(statearr_11965[9] = inst_11860);
(statearr_11965[16] = inst_11888);
return statearr_11965;
})();var statearr_11966_12012 = state_11947__$1;(statearr_11966_12012[2] = null);
(statearr_11966_12012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 13))
{var inst_11871 = (state_11947[14]);var state_11947__$1 = state_11947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11947__$1,16,out,inst_11871);
} else
{if((state_val_11948 === 14))
{var inst_11860 = (state_11947[9]);var inst_11899 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_11860)].join('');var inst_11900 = (new Error(inst_11899));var inst_11901 = (function(){throw inst_11900})();var state_11947__$1 = state_11947;var statearr_11969_12013 = state_11947__$1;(statearr_11969_12013[2] = inst_11901);
(statearr_11969_12013[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 15))
{var inst_11903 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11970_12014 = state_11947__$1;(statearr_11970_12014[2] = inst_11903);
(statearr_11970_12014[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 16))
{var inst_11862 = (state_11947[7]);var inst_11860 = (state_11947[9]);var inst_11871 = (state_11947[14]);var inst_11896 = (state_11947[2]);var tmp11967 = inst_11862;var tmp11968 = inst_11860;var inst_11860__$1 = tmp11968;var inst_11861 = inst_11871;var inst_11862__$1 = tmp11967;var state_11947__$1 = (function (){var statearr_11971 = state_11947;(statearr_11971[17] = inst_11896);
(statearr_11971[7] = inst_11862__$1);
(statearr_11971[8] = inst_11861);
(statearr_11971[9] = inst_11860__$1);
return statearr_11971;
})();var statearr_11972_12015 = state_11947__$1;(statearr_11972_12015[2] = null);
(statearr_11972_12015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 17))
{var inst_11861 = (state_11947[8]);var state_11947__$1 = state_11947;if(cljs.core.truth_(inst_11861))
{var statearr_11973_12016 = state_11947__$1;(statearr_11973_12016[1] = 20);
} else
{var statearr_11974_12017 = state_11947__$1;(statearr_11974_12017[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 18))
{var inst_11872 = (state_11947[13]);var inst_11924 = cljs.core._EQ_.call(null,control,inst_11872);var state_11947__$1 = state_11947;if(inst_11924)
{var statearr_11975_12018 = state_11947__$1;(statearr_11975_12018[1] = 24);
} else
{var statearr_11976_12019 = state_11947__$1;(statearr_11976_12019[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 19))
{var inst_11941 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11978_12020 = state_11947__$1;(statearr_11978_12020[2] = inst_11941);
(statearr_11978_12020[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 20))
{var inst_11861 = (state_11947[8]);var inst_11910 = [new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890),inst_11861];var inst_11911 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11910,null));var state_11947__$1 = state_11947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11947__$1,23,out,inst_11911);
} else
{if((state_val_11948 === 21))
{var inst_11862 = (state_11947[7]);var inst_11861 = (state_11947[8]);var inst_11919 = cljs.core.pop.call(null,inst_11862);var tmp11977 = inst_11861;var inst_11860 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_11861__$1 = tmp11977;var inst_11862__$1 = inst_11919;var state_11947__$1 = (function (){var statearr_11980 = state_11947;(statearr_11980[7] = inst_11862__$1);
(statearr_11980[8] = inst_11861__$1);
(statearr_11980[9] = inst_11860);
return statearr_11980;
})();var statearr_11981_12021 = state_11947__$1;(statearr_11981_12021[2] = null);
(statearr_11981_12021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 22))
{var inst_11922 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11982_12022 = state_11947__$1;(statearr_11982_12022[2] = inst_11922);
(statearr_11982_12022[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 23))
{var inst_11862 = (state_11947[7]);var inst_11860 = (state_11947[9]);var inst_11913 = (state_11947[2]);var inst_11914 = cljs.core.pop.call(null,inst_11862);var inst_11915 = cljs.core.async.timeout.call(null,msecs);var inst_11916 = cljs.core.conj.call(null,inst_11914,inst_11915);var tmp11979 = inst_11860;var inst_11860__$1 = tmp11979;var inst_11861 = null;var inst_11862__$1 = inst_11916;var state_11947__$1 = (function (){var statearr_11983 = state_11947;(statearr_11983[7] = inst_11862__$1);
(statearr_11983[8] = inst_11861);
(statearr_11983[9] = inst_11860__$1);
(statearr_11983[18] = inst_11913);
return statearr_11983;
})();var statearr_11984_12023 = state_11947__$1;(statearr_11984_12023[2] = null);
(statearr_11984_12023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 24))
{var inst_11862 = (state_11947[7]);var inst_11926 = cljs.core.count.call(null,inst_11862);var inst_11927 = cljs.core._EQ_.call(null,inst_11926,3);var state_11947__$1 = state_11947;if(inst_11927)
{var statearr_11985_12024 = state_11947__$1;(statearr_11985_12024[1] = 27);
} else
{var statearr_11986_12025 = state_11947__$1;(statearr_11986_12025[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 25))
{var inst_11872 = (state_11947[13]);var inst_11935 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_11872)].join('');var inst_11936 = (new Error(inst_11935));var inst_11937 = (function(){throw inst_11936})();var state_11947__$1 = state_11947;var statearr_11987_12026 = state_11947__$1;(statearr_11987_12026[2] = inst_11937);
(statearr_11987_12026[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 26))
{var inst_11939 = (state_11947[2]);var state_11947__$1 = state_11947;var statearr_11988_12027 = state_11947__$1;(statearr_11988_12027[2] = inst_11939);
(statearr_11988_12027[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 27))
{var inst_11862 = (state_11947[7]);var inst_11929 = cljs.core.pop.call(null,inst_11862);var state_11947__$1 = state_11947;var statearr_11989_12028 = state_11947__$1;(statearr_11989_12028[2] = inst_11929);
(statearr_11989_12028[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 28))
{var inst_11862 = (state_11947[7]);var state_11947__$1 = state_11947;var statearr_11990_12029 = state_11947__$1;(statearr_11990_12029[2] = inst_11862);
(statearr_11990_12029[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11948 === 29))
{var inst_11932 = (state_11947[2]);var inst_11860 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_11861 = null;var inst_11862 = inst_11932;var state_11947__$1 = (function (){var statearr_11991 = state_11947;(statearr_11991[7] = inst_11862);
(statearr_11991[8] = inst_11861);
(statearr_11991[9] = inst_11860);
return statearr_11991;
})();var statearr_11992_12030 = state_11947__$1;(statearr_11992_12030[2] = null);
(statearr_11992_12030[1] = 2);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_11996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11996[0] = state_machine__5573__auto__);
(statearr_11996[1] = 1);
return statearr_11996;
});
var state_machine__5573__auto____1 = (function (state_11947){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_11947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e11997){if((e11997 instanceof Object))
{var ex__5576__auto__ = e11997;var statearr_11998_12031 = state_11947;(statearr_11998_12031[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12032 = state_11947;
state_11947 = G__12032;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_11947){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_11947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_11999 = f__5588__auto__.call(null);(statearr_11999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___12000);
return statearr_11999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
throttle_STAR_ = function(in$,msecs,out,control){
switch(arguments.length){
case 2:
return throttle_STAR___2.call(this,in$,msecs);
case 3:
return throttle_STAR___3.call(this,in$,msecs,out);
case 4:
return throttle_STAR___4.call(this,in$,msecs,out,control);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle_STAR_.cljs$core$IFn$_invoke$arity$2 = throttle_STAR___2;
throttle_STAR_.cljs$core$IFn$_invoke$arity$3 = throttle_STAR___3;
throttle_STAR_.cljs$core$IFn$_invoke$arity$4 = throttle_STAR___4;
return throttle_STAR_;
})()
;
blog.utils.reactive.throttle_msg_QMARK_ = (function throttle_msg_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890)));
});
blog.utils.reactive.throttle = (function() {
var throttle = null;
var throttle__2 = (function (in$,msecs){return throttle.call(null,in$,msecs,cljs.core.async.chan.call(null));
});
var throttle__3 = (function (in$,msecs,out){return blog.utils.reactive.map.call(null,cljs.core.second,blog.utils.reactive.filter.call(null,(function (p1__12033_SHARP_){return (cljs.core.vector_QMARK_.call(null,p1__12033_SHARP_)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__12033_SHARP_),new cljs.core.Keyword("blog.utils.reactive","throttle","blog.utils.reactive/throttle",1576111890)));
}),blog.utils.reactive.throttle_STAR_.call(null,in$,msecs,out)));
});
throttle = function(in$,msecs,out){
switch(arguments.length){
case 2:
return throttle__2.call(this,in$,msecs);
case 3:
return throttle__3.call(this,in$,msecs,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle.cljs$core$IFn$_invoke$arity$2 = throttle__2;
throttle.cljs$core$IFn$_invoke$arity$3 = throttle__3;
return throttle;
})()
;
blog.utils.reactive.debounce = (function() {
var debounce = null;
var debounce__2 = (function (source,msecs){return debounce.call(null,cljs.core.async.chan.call(null),source,msecs);
});
var debounce__3 = (function (out,source,msecs){var c__5587__auto___12220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_12186){var state_val_12187 = (state_12186[1]);if((state_val_12187 === 1))
{var inst_12127 = [source];var inst_12128 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12127,null));var inst_12129 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_12130 = inst_12128;var state_12186__$1 = (function (){var statearr_12188 = state_12186;(statearr_12188[7] = inst_12129);
(statearr_12188[8] = inst_12130);
return statearr_12188;
})();var statearr_12189_12221 = state_12186__$1;(statearr_12189_12221[2] = null);
(statearr_12189_12221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 2))
{var inst_12130 = (state_12186[8]);var inst_12133 = cljs.core.nth.call(null,inst_12130,0,null);var inst_12134 = cljs.core.nth.call(null,inst_12130,1,null);var state_12186__$1 = (function (){var statearr_12190 = state_12186;(statearr_12190[9] = inst_12134);
(statearr_12190[10] = inst_12133);
return statearr_12190;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12186__$1,4,inst_12130);
} else
{if((state_val_12187 === 3))
{var inst_12184 = (state_12186[2]);var state_12186__$1 = state_12186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12186__$1,inst_12184);
} else
{if((state_val_12187 === 4))
{var inst_12139 = (state_12186[11]);var inst_12137 = (state_12186[2]);var inst_12138 = cljs.core.nth.call(null,inst_12137,0,null);var inst_12139__$1 = cljs.core.nth.call(null,inst_12137,1,null);var inst_12143 = cljs.core._EQ_.call(null,source,inst_12139__$1);var state_12186__$1 = (function (){var statearr_12191 = state_12186;(statearr_12191[12] = inst_12138);
(statearr_12191[11] = inst_12139__$1);
return statearr_12191;
})();if(inst_12143)
{var statearr_12192_12222 = state_12186__$1;(statearr_12192_12222[1] = 5);
} else
{var statearr_12193_12223 = state_12186__$1;(statearr_12193_12223[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 5))
{var inst_12129 = (state_12186[7]);var inst_12148 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324),inst_12129);var state_12186__$1 = state_12186;if(inst_12148)
{var statearr_12194_12224 = state_12186__$1;(statearr_12194_12224[1] = 8);
} else
{var statearr_12195_12225 = state_12186__$1;(statearr_12195_12225[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 6))
{var inst_12139 = (state_12186[11]);var inst_12134 = (state_12186[9]);var inst_12171 = cljs.core._EQ_.call(null,inst_12134,inst_12139);var state_12186__$1 = state_12186;if(inst_12171)
{var statearr_12196_12226 = state_12186__$1;(statearr_12196_12226[1] = 15);
} else
{var statearr_12197_12227 = state_12186__$1;(statearr_12197_12227[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 7))
{var inst_12182 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12198_12228 = state_12186__$1;(statearr_12198_12228[2] = inst_12182);
(statearr_12198_12228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 8))
{var inst_12138 = (state_12186[12]);var state_12186__$1 = state_12186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12186__$1,11,out,inst_12138);
} else
{if((state_val_12187 === 9))
{var inst_12129 = (state_12186[7]);var inst_12156 = cljs.core._EQ_.call(null,new cljs.core.Keyword("blog.utils.reactive","debouncing","blog.utils.reactive/debouncing",1220316782),inst_12129);var state_12186__$1 = state_12186;if(inst_12156)
{var statearr_12199_12229 = state_12186__$1;(statearr_12199_12229[1] = 12);
} else
{var statearr_12200_12230 = state_12186__$1;(statearr_12200_12230[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 10))
{var inst_12169 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12202_12231 = state_12186__$1;(statearr_12202_12231[2] = inst_12169);
(statearr_12202_12231[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 11))
{var inst_12130 = (state_12186[8]);var inst_12151 = (state_12186[2]);var inst_12152 = cljs.core.async.timeout.call(null,msecs);var inst_12153 = cljs.core.conj.call(null,inst_12130,inst_12152);var inst_12129 = new cljs.core.Keyword("blog.utils.reactive","debouncing","blog.utils.reactive/debouncing",1220316782);var inst_12130__$1 = inst_12153;var state_12186__$1 = (function (){var statearr_12203 = state_12186;(statearr_12203[13] = inst_12151);
(statearr_12203[7] = inst_12129);
(statearr_12203[8] = inst_12130__$1);
return statearr_12203;
})();var statearr_12204_12232 = state_12186__$1;(statearr_12204_12232[2] = null);
(statearr_12204_12232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 12))
{var inst_12129 = (state_12186[7]);var inst_12130 = (state_12186[8]);var inst_12158 = cljs.core.pop.call(null,inst_12130);var inst_12159 = cljs.core.async.timeout.call(null,msecs);var inst_12160 = cljs.core.conj.call(null,inst_12158,inst_12159);var tmp12201 = inst_12129;var inst_12129__$1 = tmp12201;var inst_12130__$1 = inst_12160;var state_12186__$1 = (function (){var statearr_12205 = state_12186;(statearr_12205[7] = inst_12129__$1);
(statearr_12205[8] = inst_12130__$1);
return statearr_12205;
})();var statearr_12206_12233 = state_12186__$1;(statearr_12206_12233[2] = null);
(statearr_12206_12233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 13))
{var inst_12129 = (state_12186[7]);var inst_12163 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_12129)].join('');var inst_12164 = (new Error(inst_12163));var inst_12165 = (function(){throw inst_12164})();var state_12186__$1 = state_12186;var statearr_12207_12234 = state_12186__$1;(statearr_12207_12234[2] = inst_12165);
(statearr_12207_12234[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 14))
{var inst_12167 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12208_12235 = state_12186__$1;(statearr_12208_12235[2] = inst_12167);
(statearr_12208_12235[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 15))
{var inst_12130 = (state_12186[8]);var inst_12173 = cljs.core.pop.call(null,inst_12130);var inst_12129 = new cljs.core.Keyword("blog.utils.reactive","init","blog.utils.reactive/init",3048451324);var inst_12130__$1 = inst_12173;var state_12186__$1 = (function (){var statearr_12209 = state_12186;(statearr_12209[7] = inst_12129);
(statearr_12209[8] = inst_12130__$1);
return statearr_12209;
})();var statearr_12210_12236 = state_12186__$1;(statearr_12210_12236[2] = null);
(statearr_12210_12236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 16))
{var inst_12139 = (state_12186[11]);var inst_12176 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_12139)].join('');var inst_12177 = (new Error(inst_12176));var inst_12178 = (function(){throw inst_12177})();var state_12186__$1 = state_12186;var statearr_12211_12237 = state_12186__$1;(statearr_12211_12237[2] = inst_12178);
(statearr_12211_12237[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 17))
{var inst_12180 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12212_12238 = state_12186__$1;(statearr_12212_12238[2] = inst_12180);
(statearr_12212_12238[1] = 7);
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
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_12216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12216[0] = state_machine__5573__auto__);
(statearr_12216[1] = 1);
return statearr_12216;
});
var state_machine__5573__auto____1 = (function (state_12186){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_12186);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e12217){if((e12217 instanceof Object))
{var ex__5576__auto__ = e12217;var statearr_12218_12239 = state_12186;(statearr_12218_12239[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12240 = state_12186;
state_12186 = G__12240;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_12186){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_12186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_12219 = f__5588__auto__.call(null);(statearr_12219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___12220);
return statearr_12219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return out;
});
debounce = function(out,source,msecs){
switch(arguments.length){
case 2:
return debounce__2.call(this,out,source);
case 3:
return debounce__3.call(this,out,source,msecs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
debounce.cljs$core$IFn$_invoke$arity$2 = debounce__2;
debounce.cljs$core$IFn$_invoke$arity$3 = debounce__3;
return debounce;
})()
;
/**
* @param {...*} var_args
*/
blog.utils.reactive.run_task = (function() { 
var run_task__delegate = function (f,args){var out = cljs.core.async.chan.call(null);var cb = ((function (out){
return (function() { 
var G__12289__delegate = function (err,results){var c__5587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5587__auto__,out){
return (function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = ((function (c__5587__auto__,out){
return (function (state_12275){var state_val_12276 = (state_12275[1]);if((state_val_12276 === 6))
{var inst_12270 = (state_12275[2]);var state_12275__$1 = state_12275;var statearr_12277_12290 = state_12275__$1;(statearr_12277_12290[2] = inst_12270);
(statearr_12277_12290[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12276 === 5))
{var inst_12267 = (state_12275[2]);var state_12275__$1 = state_12275;var statearr_12278_12291 = state_12275__$1;(statearr_12278_12291[2] = inst_12267);
(statearr_12278_12291[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12276 === 4))
{var inst_12272 = (state_12275[2]);var inst_12273 = cljs.core.async.close_BANG_.call(null,out);var state_12275__$1 = (function (){var statearr_12279 = state_12275;(statearr_12279[7] = inst_12272);
return statearr_12279;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12275__$1,inst_12273);
} else
{if((state_val_12276 === 3))
{var state_12275__$1 = state_12275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12275__$1,6,out,results);
} else
{if((state_val_12276 === 2))
{var state_12275__$1 = state_12275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12275__$1,5,out,err);
} else
{if((state_val_12276 === 1))
{var state_12275__$1 = state_12275;if(cljs.core.truth_(err))
{var statearr_12280_12292 = state_12275__$1;(statearr_12280_12292[1] = 2);
} else
{var statearr_12281_12293 = state_12275__$1;(statearr_12281_12293[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
});})(c__5587__auto__,out))
;return ((function (switch__5572__auto__,c__5587__auto__,out){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_12285 = [null,null,null,null,null,null,null,null];(statearr_12285[0] = state_machine__5573__auto__);
(statearr_12285[1] = 1);
return statearr_12285;
});
var state_machine__5573__auto____1 = (function (state_12275){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_12275);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e12286){if((e12286 instanceof Object))
{var ex__5576__auto__ = e12286;var statearr_12287_12294 = state_12275;(statearr_12287_12294[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12295 = state_12275;
state_12275 = G__12295;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_12275){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_12275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__,c__5587__auto__,out))
})();var state__5589__auto__ = (function (){var statearr_12288 = f__5588__auto__.call(null);(statearr_12288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto__);
return statearr_12288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
});})(c__5587__auto__,out))
);
return c__5587__auto__;
};
var G__12289 = function (err,var_args){
var results = null;if (arguments.length > 1) {
  results = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__12289__delegate.call(this,err,results);};
G__12289.cljs$lang$maxFixedArity = 1;
G__12289.cljs$lang$applyTo = (function (arglist__12296){
var err = cljs.core.first(arglist__12296);
var results = cljs.core.rest(arglist__12296);
return G__12289__delegate(err,results);
});
G__12289.cljs$core$IFn$_invoke$arity$variadic = G__12289__delegate;
return G__12289;
})()
;})(out))
;cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb], null)));
return out;
};
var run_task = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return run_task__delegate.call(this,f,args);};
run_task.cljs$lang$maxFixedArity = 1;
run_task.cljs$lang$applyTo = (function (arglist__12297){
var f = cljs.core.first(arglist__12297);
var args = cljs.core.rest(arglist__12297);
return run_task__delegate(f,args);
});
run_task.cljs$core$IFn$_invoke$arity$variadic = run_task__delegate;
return run_task;
})()
;
/**
* @param {...*} var_args
*/
blog.utils.reactive.task = (function() { 
var task__delegate = function (args){return (function (){return cljs.core.apply.call(null,blog.utils.reactive.run_task,args);
});
};
var task = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return task__delegate.call(this,args);};
task.cljs$lang$maxFixedArity = 0;
task.cljs$lang$applyTo = (function (arglist__12298){
var args = cljs.core.seq(arglist__12298);
return task__delegate(args);
});
task.cljs$core$IFn$_invoke$arity$variadic = task__delegate;
return task;
})()
;

//# sourceMappingURL=reactive.js.map