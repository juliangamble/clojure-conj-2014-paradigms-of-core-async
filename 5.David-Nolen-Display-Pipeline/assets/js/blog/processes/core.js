// Compiled by ClojureScript 0.0-2173
goog.provide('blog.processes.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('blog.utils.dom');
goog.require('blog.utils.dom');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
blog.processes.core.width = 100;
blog.processes.core.height = 100;
blog.processes.core.gen_ui = (function gen_ui(){var arr = [];var y_8389 = 0;while(true){
if((y_8389 < blog.processes.core.height))
{arr.push("<tr>");
var x_8390 = 0;while(true){
if((x_8390 < blog.processes.core.width))
{arr.push([cljs.core.str("<td id='cell-")].join(''),(x_8390 + (y_8389 * blog.processes.core.width)),"'>0</td>");
{
var G__8391 = (x_8390 + 1);
x_8390 = G__8391;
continue;
}
} else
{}
break;
}
arr.push("</tr>");
{
var G__8392 = (y_8389 + 1);
y_8389 = G__8392;
continue;
}
} else
{}
break;
}
return blog.utils.dom.set_html_BANG_.call(null,blog.utils.dom.by_id.call(null,"big-table"),arr.join(""));
});
blog.processes.core.gen_ui.call(null);
blog.processes.core.group = cljs.core.atom.call(null,0);
blog.processes.core.render_BANG_ = (function render_BANG_(queue){var g = [cljs.core.str("group"),cljs.core.str(cljs.core.deref.call(null,blog.processes.core.group))].join('');var seq__8399_8405 = cljs.core.seq.call(null,queue);var chunk__8400_8406 = null;var count__8401_8407 = 0;var i__8402_8408 = 0;while(true){
if((i__8402_8408 < count__8401_8407))
{var vec__8403_8409 = cljs.core._nth.call(null,chunk__8400_8406,i__8402_8408);var idx_8410 = cljs.core.nth.call(null,vec__8403_8409,0,null);var v_8411 = cljs.core.nth.call(null,vec__8403_8409,1,null);var cell_8412 = blog.utils.dom.by_id.call(null,[cljs.core.str("cell-"),cljs.core.str(idx_8410)].join(''));blog.utils.dom.set_html_BANG_.call(null,cell_8412,v_8411);
blog.utils.dom.set_class_BANG_.call(null,cell_8412,g);
{
var G__8413 = seq__8399_8405;
var G__8414 = chunk__8400_8406;
var G__8415 = count__8401_8407;
var G__8416 = (i__8402_8408 + 1);
seq__8399_8405 = G__8413;
chunk__8400_8406 = G__8414;
count__8401_8407 = G__8415;
i__8402_8408 = G__8416;
continue;
}
} else
{var temp__4092__auto___8417 = cljs.core.seq.call(null,seq__8399_8405);if(temp__4092__auto___8417)
{var seq__8399_8418__$1 = temp__4092__auto___8417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8399_8418__$1))
{var c__4214__auto___8419 = cljs.core.chunk_first.call(null,seq__8399_8418__$1);{
var G__8420 = cljs.core.chunk_rest.call(null,seq__8399_8418__$1);
var G__8421 = c__4214__auto___8419;
var G__8422 = cljs.core.count.call(null,c__4214__auto___8419);
var G__8423 = 0;
seq__8399_8405 = G__8420;
chunk__8400_8406 = G__8421;
count__8401_8407 = G__8422;
i__8402_8408 = G__8423;
continue;
}
} else
{var vec__8404_8424 = cljs.core.first.call(null,seq__8399_8418__$1);var idx_8425 = cljs.core.nth.call(null,vec__8404_8424,0,null);var v_8426 = cljs.core.nth.call(null,vec__8404_8424,1,null);var cell_8427 = blog.utils.dom.by_id.call(null,[cljs.core.str("cell-"),cljs.core.str(idx_8425)].join(''));blog.utils.dom.set_html_BANG_.call(null,cell_8427,v_8426);
blog.utils.dom.set_class_BANG_.call(null,cell_8427,g);
{
var G__8428 = cljs.core.next.call(null,seq__8399_8418__$1);
var G__8429 = null;
var G__8430 = 0;
var G__8431 = 0;
seq__8399_8405 = G__8428;
chunk__8400_8406 = G__8429;
count__8401_8407 = G__8430;
i__8402_8408 = G__8431;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.swap_BANG_.call(null,blog.processes.core.group,(function (g__$1){return cljs.core.mod.call(null,(g__$1 + 1),5);
}));
});
blog.processes.core.render_loop = (function render_loop(rate){var in$ = cljs.core.async.chan.call(null,1000);var c__5587__auto___8558 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_8533){var state_val_8534 = (state_8533[1]);if((state_val_8534 === 1))
{var inst_8495 = cljs.core.async.timeout.call(null,rate);var inst_8496 = inst_8495;var inst_8497 = cljs.core.PersistentVector.EMPTY;var state_8533__$1 = (function (){var statearr_8535 = state_8533;(statearr_8535[7] = inst_8497);
(statearr_8535[8] = inst_8496);
return statearr_8535;
})();var statearr_8536_8559 = state_8533__$1;(statearr_8536_8559[2] = null);
(statearr_8536_8559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8534 === 2))
{var inst_8496 = (state_8533[8]);var inst_8500 = [inst_8496,in$];var inst_8501 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8500,null));var state_8533__$1 = state_8533;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_8533__$1,4,inst_8501);
} else
{if((state_val_8534 === 3))
{var inst_8531 = (state_8533[2]);var state_8533__$1 = state_8533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8533__$1,inst_8531);
} else
{if((state_val_8534 === 4))
{var inst_8505 = (state_8533[9]);var inst_8496 = (state_8533[8]);var inst_8503 = (state_8533[2]);var inst_8504 = cljs.core.nth.call(null,inst_8503,0,null);var inst_8505__$1 = cljs.core.nth.call(null,inst_8503,1,null);var inst_8509 = cljs.core._EQ_.call(null,inst_8496,inst_8505__$1);var state_8533__$1 = (function (){var statearr_8537 = state_8533;(statearr_8537[9] = inst_8505__$1);
(statearr_8537[10] = inst_8504);
return statearr_8537;
})();if(inst_8509)
{var statearr_8538_8560 = state_8533__$1;(statearr_8538_8560[1] = 5);
} else
{var statearr_8539_8561 = state_8533__$1;(statearr_8539_8561[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8534 === 5))
{var inst_8497 = (state_8533[7]);var inst_8511 = blog.processes.core.render_BANG_.call(null,inst_8497);var inst_8512 = cljs.core.async.timeout.call(null,0);var state_8533__$1 = (function (){var statearr_8540 = state_8533;(statearr_8540[11] = inst_8511);
return statearr_8540;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8533__$1,8,inst_8512);
} else
{if((state_val_8534 === 6))
{var inst_8505 = (state_8533[9]);var inst_8518 = cljs.core._EQ_.call(null,in$,inst_8505);var state_8533__$1 = state_8533;if(inst_8518)
{var statearr_8541_8562 = state_8533__$1;(statearr_8541_8562[1] = 9);
} else
{var statearr_8542_8563 = state_8533__$1;(statearr_8542_8563[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8534 === 7))
{var inst_8529 = (state_8533[2]);var state_8533__$1 = state_8533;var statearr_8544_8564 = state_8533__$1;(statearr_8544_8564[2] = inst_8529);
(statearr_8544_8564[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8534 === 8))
{var inst_8514 = (state_8533[2]);var inst_8515 = cljs.core.async.timeout.call(null,rate);var inst_8496 = inst_8515;var inst_8497 = cljs.core.PersistentVector.EMPTY;var state_8533__$1 = (function (){var statearr_8545 = state_8533;(statearr_8545[7] = inst_8497);
(statearr_8545[8] = inst_8496);
(statearr_8545[12] = inst_8514);
return statearr_8545;
})();var statearr_8546_8565 = state_8533__$1;(statearr_8546_8565[2] = null);
(statearr_8546_8565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8534 === 9))
{var inst_8504 = (state_8533[10]);var inst_8497 = (state_8533[7]);var inst_8496 = (state_8533[8]);var inst_8520 = cljs.core.conj.call(null,inst_8497,inst_8504);var tmp8543 = inst_8496;var inst_8496__$1 = tmp8543;var inst_8497__$1 = inst_8520;var state_8533__$1 = (function (){var statearr_8547 = state_8533;(statearr_8547[7] = inst_8497__$1);
(statearr_8547[8] = inst_8496__$1);
return statearr_8547;
})();var statearr_8548_8566 = state_8533__$1;(statearr_8548_8566[2] = null);
(statearr_8548_8566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8534 === 10))
{var inst_8505 = (state_8533[9]);var inst_8523 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_8505)].join('');var inst_8524 = (new Error(inst_8523));var inst_8525 = (function(){throw inst_8524})();var state_8533__$1 = state_8533;var statearr_8549_8567 = state_8533__$1;(statearr_8549_8567[2] = inst_8525);
(statearr_8549_8567[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8534 === 11))
{var inst_8527 = (state_8533[2]);var state_8533__$1 = state_8533;var statearr_8550_8568 = state_8533__$1;(statearr_8550_8568[2] = inst_8527);
(statearr_8550_8568[1] = 7);
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
var state_machine__5573__auto____0 = (function (){var statearr_8554 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8554[0] = state_machine__5573__auto__);
(statearr_8554[1] = 1);
return statearr_8554;
});
var state_machine__5573__auto____1 = (function (state_8533){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_8533);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e8555){if((e8555 instanceof Object))
{var ex__5576__auto__ = e8555;var statearr_8556_8569 = state_8533;(statearr_8556_8569[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8570 = state_8533;
state_8533 = G__8570;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_8533){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_8533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_8557 = f__5588__auto__.call(null);(statearr_8557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___8558);
return statearr_8557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return in$;
});
var render_8606 = blog.processes.core.render_loop.call(null,40);var i_8607 = 0;while(true){
if((i_8607 < (blog.processes.core.width * blog.processes.core.height)))
{var c__5587__auto___8608 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (i_8607,c__5587__auto___8608){
return (function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = ((function (i_8607,c__5587__auto___8608){
return (function (state_8589){var state_val_8590 = (state_8589[1]);if((state_val_8590 === 8))
{var inst_8581 = (state_8589[2]);var state_8589__$1 = (function (){var statearr_8591 = state_8589;(statearr_8591[7] = inst_8581);
return statearr_8591;
})();var statearr_8592_8609 = state_8589__$1;(statearr_8592_8609[2] = null);
(statearr_8592_8609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8590 === 7))
{var inst_8575 = (state_8589[2]);var inst_8576 = cljs.core.rand_int.call(null,10000);var inst_8577 = cljs.core.rand_int.call(null,10);var inst_8578 = [inst_8576,inst_8577];var inst_8579 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8578,null));var state_8589__$1 = (function (){var statearr_8593 = state_8589;(statearr_8593[8] = inst_8575);
return statearr_8593;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8589__$1,8,render_8606,inst_8579);
} else
{if((state_val_8590 === 6))
{var inst_8585 = (state_8589[2]);var state_8589__$1 = state_8589;var statearr_8594_8610 = state_8589__$1;(statearr_8594_8610[2] = inst_8585);
(statearr_8594_8610[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8590 === 5))
{var state_8589__$1 = state_8589;var statearr_8595_8611 = state_8589__$1;(statearr_8595_8611[2] = null);
(statearr_8595_8611[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8590 === 4))
{var inst_8573 = cljs.core.async.timeout.call(null,10000);var state_8589__$1 = state_8589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8589__$1,7,inst_8573);
} else
{if((state_val_8590 === 3))
{var inst_8587 = (state_8589[2]);var state_8589__$1 = state_8589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8589__$1,inst_8587);
} else
{if((state_val_8590 === 2))
{var state_8589__$1 = state_8589;if(true)
{var statearr_8596_8612 = state_8589__$1;(statearr_8596_8612[1] = 4);
} else
{var statearr_8597_8613 = state_8589__$1;(statearr_8597_8613[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8590 === 1))
{var state_8589__$1 = state_8589;var statearr_8598_8614 = state_8589__$1;(statearr_8598_8614[2] = null);
(statearr_8598_8614[1] = 2);
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
});})(i_8607,c__5587__auto___8608))
;return ((function (i_8607,switch__5572__auto__,c__5587__auto___8608){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_8602 = [null,null,null,null,null,null,null,null,null];(statearr_8602[0] = state_machine__5573__auto__);
(statearr_8602[1] = 1);
return statearr_8602;
});
var state_machine__5573__auto____1 = (function (state_8589){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_8589);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e8603){if((e8603 instanceof Object))
{var ex__5576__auto__ = e8603;var statearr_8604_8615 = state_8589;(statearr_8604_8615[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8616 = state_8589;
state_8589 = G__8616;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_8589){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_8589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(i_8607,switch__5572__auto__,c__5587__auto___8608))
})();var state__5589__auto__ = (function (){var statearr_8605 = f__5588__auto__.call(null);(statearr_8605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___8608);
return statearr_8605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
});})(i_8607,c__5587__auto___8608))
);
{
var G__8617 = (i_8607 + 1);
i_8607 = G__8617;
continue;
}
} else
{}
break;
}

//# sourceMappingURL=core.js.map