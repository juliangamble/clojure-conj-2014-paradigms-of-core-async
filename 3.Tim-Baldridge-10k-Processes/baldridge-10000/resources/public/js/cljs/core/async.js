// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t8491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8491 = (function (f,fn_handler,meta8492){
this.f = f;
this.fn_handler = fn_handler;
this.meta8492 = meta8492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8491.cljs$lang$type = true;
cljs.core.async.t8491.cljs$lang$ctorStr = "cljs.core.async/t8491";
cljs.core.async.t8491.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t8491");
});
cljs.core.async.t8491.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t8491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t8491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8493){var self__ = this;
var _8493__$1 = this;return self__.meta8492;
});
cljs.core.async.t8491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8493,meta8492__$1){var self__ = this;
var _8493__$1 = this;return (new cljs.core.async.t8491(self__.f,self__.fn_handler,meta8492__$1));
});
cljs.core.async.__GT_t8491 = (function __GT_t8491(f__$1,fn_handler__$1,meta8492){return (new cljs.core.async.t8491(f__$1,fn_handler__$1,meta8492));
});
}
return (new cljs.core.async.t8491(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__8495 = buff;if(G__8495)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__8495.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__8495.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8495);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8495);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_8496 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_8496);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_8496);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___8497 = n;var x_8498 = 0;while(true){
if((x_8498 < n__4251__auto___8497))
{(a[x_8498] = 0);
{
var G__8499 = (x_8498 + 1);
x_8498 = G__8499;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__8500 = (i + 1);
i = G__8500;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t8504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8504 = (function (flag,alt_flag,meta8505){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta8505 = meta8505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8504.cljs$lang$type = true;
cljs.core.async.t8504.cljs$lang$ctorStr = "cljs.core.async/t8504";
cljs.core.async.t8504.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t8504");
});
cljs.core.async.t8504.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t8504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t8504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8506){var self__ = this;
var _8506__$1 = this;return self__.meta8505;
});
cljs.core.async.t8504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8506,meta8505__$1){var self__ = this;
var _8506__$1 = this;return (new cljs.core.async.t8504(self__.flag,self__.alt_flag,meta8505__$1));
});
cljs.core.async.__GT_t8504 = (function __GT_t8504(flag__$1,alt_flag__$1,meta8505){return (new cljs.core.async.t8504(flag__$1,alt_flag__$1,meta8505));
});
}
return (new cljs.core.async.t8504(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t8510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8510 = (function (cb,flag,alt_handler,meta8511){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta8511 = meta8511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8510.cljs$lang$type = true;
cljs.core.async.t8510.cljs$lang$ctorStr = "cljs.core.async/t8510";
cljs.core.async.t8510.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t8510");
});
cljs.core.async.t8510.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t8510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t8510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8512){var self__ = this;
var _8512__$1 = this;return self__.meta8511;
});
cljs.core.async.t8510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8512,meta8511__$1){var self__ = this;
var _8512__$1 = this;return (new cljs.core.async.t8510(self__.cb,self__.flag,self__.alt_handler,meta8511__$1));
});
cljs.core.async.__GT_t8510 = (function __GT_t8510(cb__$1,flag__$1,alt_handler__$1,meta8511){return (new cljs.core.async.t8510(cb__$1,flag__$1,alt_handler__$1,meta8511));
});
}
return (new cljs.core.async.t8510(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8513_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8513_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8514_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8514_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__8515 = (i + 1);
i = G__8515;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__8516){var map__8518 = p__8516;var map__8518__$1 = ((cljs.core.seq_QMARK_.call(null,map__8518))?cljs.core.apply.call(null,cljs.core.hash_map,map__8518):map__8518);var opts = map__8518__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__8516 = null;if (arguments.length > 1) {
  p__8516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__8516);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__8519){
var ports = cljs.core.first(arglist__8519);
var p__8516 = cljs.core.rest(arglist__8519);
return alts_BANG___delegate(ports,p__8516);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t8527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8527 = (function (ch,f,map_LT_,meta8528){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8528 = meta8528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8527.cljs$lang$type = true;
cljs.core.async.t8527.cljs$lang$ctorStr = "cljs.core.async/t8527";
cljs.core.async.t8527.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t8527");
});
cljs.core.async.t8527.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t8527.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t8530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8530 = (function (fn1,_,meta8528,ch,f,map_LT_,meta8531){
this.fn1 = fn1;
this._ = _;
this.meta8528 = meta8528;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8531 = meta8531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8530.cljs$lang$type = true;
cljs.core.async.t8530.cljs$lang$ctorStr = "cljs.core.async/t8530";
cljs.core.async.t8530.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t8530");
});
cljs.core.async.t8530.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t8530.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t8530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__8520_SHARP_){return f1.call(null,(((p1__8520_SHARP_ == null))?null:self__.f.call(null,p1__8520_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t8530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8532){var self__ = this;
var _8532__$1 = this;return self__.meta8531;
});
cljs.core.async.t8530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8532,meta8531__$1){var self__ = this;
var _8532__$1 = this;return (new cljs.core.async.t8530(self__.fn1,self__._,self__.meta8528,self__.ch,self__.f,self__.map_LT_,meta8531__$1));
});
cljs.core.async.__GT_t8530 = (function __GT_t8530(fn1__$1,___$2,meta8528__$1,ch__$2,f__$2,map_LT___$2,meta8531){return (new cljs.core.async.t8530(fn1__$1,___$2,meta8528__$1,ch__$2,f__$2,map_LT___$2,meta8531));
});
}
return (new cljs.core.async.t8530(fn1,___$1,self__.meta8528,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t8527.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t8527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8529){var self__ = this;
var _8529__$1 = this;return self__.meta8528;
});
cljs.core.async.t8527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8529,meta8528__$1){var self__ = this;
var _8529__$1 = this;return (new cljs.core.async.t8527(self__.ch,self__.f,self__.map_LT_,meta8528__$1));
});
cljs.core.async.__GT_t8527 = (function __GT_t8527(ch__$1,f__$1,map_LT___$1,meta8528){return (new cljs.core.async.t8527(ch__$1,f__$1,map_LT___$1,meta8528));
});
}
return (new cljs.core.async.t8527(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t8536 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8536 = (function (ch,f,map_GT_,meta8537){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta8537 = meta8537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8536.cljs$lang$type = true;
cljs.core.async.t8536.cljs$lang$ctorStr = "cljs.core.async/t8536";
cljs.core.async.t8536.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t8536");
});
cljs.core.async.t8536.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t8536.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8536.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8538){var self__ = this;
var _8538__$1 = this;return self__.meta8537;
});
cljs.core.async.t8536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8538,meta8537__$1){var self__ = this;
var _8538__$1 = this;return (new cljs.core.async.t8536(self__.ch,self__.f,self__.map_GT_,meta8537__$1));
});
cljs.core.async.__GT_t8536 = (function __GT_t8536(ch__$1,f__$1,map_GT___$1,meta8537){return (new cljs.core.async.t8536(ch__$1,f__$1,map_GT___$1,meta8537));
});
}
return (new cljs.core.async.t8536(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t8542 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8542 = (function (ch,p,filter_GT_,meta8543){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta8543 = meta8543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8542.cljs$lang$type = true;
cljs.core.async.t8542.cljs$lang$ctorStr = "cljs.core.async/t8542";
cljs.core.async.t8542.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t8542");
});
cljs.core.async.t8542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t8542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8542.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8542.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t8542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8544){var self__ = this;
var _8544__$1 = this;return self__.meta8543;
});
cljs.core.async.t8542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8544,meta8543__$1){var self__ = this;
var _8544__$1 = this;return (new cljs.core.async.t8542(self__.ch,self__.p,self__.filter_GT_,meta8543__$1));
});
cljs.core.async.__GT_t8542 = (function __GT_t8542(ch__$1,p__$1,filter_GT___$1,meta8543){return (new cljs.core.async.t8542(ch__$1,p__$1,filter_GT___$1,meta8543));
});
}
return (new cljs.core.async.t8542(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___8627 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_8606){var state_val_8607 = (state_8606[1]);if((state_val_8607 === 1))
{var state_8606__$1 = state_8606;var statearr_8608_8628 = state_8606__$1;(statearr_8608_8628[2] = null);
(statearr_8608_8628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8607 === 2))
{var state_8606__$1 = state_8606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8606__$1,4,ch);
} else
{if((state_val_8607 === 3))
{var inst_8604 = (state_8606[2]);var state_8606__$1 = state_8606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8606__$1,inst_8604);
} else
{if((state_val_8607 === 4))
{var inst_8588 = (state_8606[7]);var inst_8588__$1 = (state_8606[2]);var inst_8589 = (inst_8588__$1 == null);var state_8606__$1 = (function (){var statearr_8609 = state_8606;(statearr_8609[7] = inst_8588__$1);
return statearr_8609;
})();if(cljs.core.truth_(inst_8589))
{var statearr_8610_8629 = state_8606__$1;(statearr_8610_8629[1] = 5);
} else
{var statearr_8611_8630 = state_8606__$1;(statearr_8611_8630[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8607 === 5))
{var inst_8591 = cljs.core.async.close_BANG_.call(null,out);var state_8606__$1 = state_8606;var statearr_8612_8631 = state_8606__$1;(statearr_8612_8631[2] = inst_8591);
(statearr_8612_8631[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8607 === 6))
{var inst_8588 = (state_8606[7]);var inst_8593 = p.call(null,inst_8588);var state_8606__$1 = state_8606;if(cljs.core.truth_(inst_8593))
{var statearr_8613_8632 = state_8606__$1;(statearr_8613_8632[1] = 8);
} else
{var statearr_8614_8633 = state_8606__$1;(statearr_8614_8633[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8607 === 7))
{var inst_8602 = (state_8606[2]);var state_8606__$1 = state_8606;var statearr_8615_8634 = state_8606__$1;(statearr_8615_8634[2] = inst_8602);
(statearr_8615_8634[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8607 === 8))
{var inst_8588 = (state_8606[7]);var state_8606__$1 = state_8606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8606__$1,11,out,inst_8588);
} else
{if((state_val_8607 === 9))
{var state_8606__$1 = state_8606;var statearr_8616_8635 = state_8606__$1;(statearr_8616_8635[2] = null);
(statearr_8616_8635[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8607 === 10))
{var inst_8599 = (state_8606[2]);var state_8606__$1 = (function (){var statearr_8617 = state_8606;(statearr_8617[8] = inst_8599);
return statearr_8617;
})();var statearr_8618_8636 = state_8606__$1;(statearr_8618_8636[2] = null);
(statearr_8618_8636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8607 === 11))
{var inst_8596 = (state_8606[2]);var state_8606__$1 = state_8606;var statearr_8619_8637 = state_8606__$1;(statearr_8619_8637[2] = inst_8596);
(statearr_8619_8637[1] = 10);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_8623 = [null,null,null,null,null,null,null,null,null];(statearr_8623[0] = state_machine__5525__auto__);
(statearr_8623[1] = 1);
return statearr_8623;
});
var state_machine__5525__auto____1 = (function (state_8606){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_8606);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e8624){if((e8624 instanceof Object))
{var ex__5528__auto__ = e8624;var statearr_8625_8638 = state_8606;(statearr_8625_8638[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8639 = state_8606;
state_8606 = G__8639;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_8606){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_8606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_8626 = f__5540__auto__.call(null);(statearr_8626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___8627);
return statearr_8626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_8805){var state_val_8806 = (state_8805[1]);if((state_val_8806 === 1))
{var state_8805__$1 = state_8805;var statearr_8807_8848 = state_8805__$1;(statearr_8807_8848[2] = null);
(statearr_8807_8848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 2))
{var state_8805__$1 = state_8805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8805__$1,4,in$);
} else
{if((state_val_8806 === 3))
{var inst_8803 = (state_8805[2]);var state_8805__$1 = state_8805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8805__$1,inst_8803);
} else
{if((state_val_8806 === 4))
{var inst_8746 = (state_8805[7]);var inst_8746__$1 = (state_8805[2]);var inst_8747 = (inst_8746__$1 == null);var state_8805__$1 = (function (){var statearr_8808 = state_8805;(statearr_8808[7] = inst_8746__$1);
return statearr_8808;
})();if(cljs.core.truth_(inst_8747))
{var statearr_8809_8849 = state_8805__$1;(statearr_8809_8849[1] = 5);
} else
{var statearr_8810_8850 = state_8805__$1;(statearr_8810_8850[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 5))
{var inst_8749 = cljs.core.async.close_BANG_.call(null,out);var state_8805__$1 = state_8805;var statearr_8811_8851 = state_8805__$1;(statearr_8811_8851[2] = inst_8749);
(statearr_8811_8851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 6))
{var inst_8746 = (state_8805[7]);var inst_8755 = f.call(null,inst_8746);var inst_8756 = cljs.core.seq.call(null,inst_8755);var inst_8757 = inst_8756;var inst_8758 = null;var inst_8759 = 0;var inst_8760 = 0;var state_8805__$1 = (function (){var statearr_8812 = state_8805;(statearr_8812[8] = inst_8759);
(statearr_8812[9] = inst_8758);
(statearr_8812[10] = inst_8757);
(statearr_8812[11] = inst_8760);
return statearr_8812;
})();var statearr_8813_8852 = state_8805__$1;(statearr_8813_8852[2] = null);
(statearr_8813_8852[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 7))
{var inst_8801 = (state_8805[2]);var state_8805__$1 = state_8805;var statearr_8814_8853 = state_8805__$1;(statearr_8814_8853[2] = inst_8801);
(statearr_8814_8853[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 8))
{var inst_8759 = (state_8805[8]);var inst_8760 = (state_8805[11]);var inst_8762 = (inst_8760 < inst_8759);var inst_8763 = inst_8762;var state_8805__$1 = state_8805;if(cljs.core.truth_(inst_8763))
{var statearr_8815_8854 = state_8805__$1;(statearr_8815_8854[1] = 10);
} else
{var statearr_8816_8855 = state_8805__$1;(statearr_8816_8855[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 9))
{var inst_8793 = (state_8805[2]);var inst_8794 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_8805__$1 = (function (){var statearr_8817 = state_8805;(statearr_8817[12] = inst_8793);
return statearr_8817;
})();if(cljs.core.truth_(inst_8794))
{var statearr_8818_8856 = state_8805__$1;(statearr_8818_8856[1] = 21);
} else
{var statearr_8819_8857 = state_8805__$1;(statearr_8819_8857[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 10))
{var inst_8758 = (state_8805[9]);var inst_8760 = (state_8805[11]);var inst_8765 = cljs.core._nth.call(null,inst_8758,inst_8760);var state_8805__$1 = state_8805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8805__$1,13,out,inst_8765);
} else
{if((state_val_8806 === 11))
{var inst_8771 = (state_8805[13]);var inst_8757 = (state_8805[10]);var inst_8771__$1 = cljs.core.seq.call(null,inst_8757);var state_8805__$1 = (function (){var statearr_8823 = state_8805;(statearr_8823[13] = inst_8771__$1);
return statearr_8823;
})();if(inst_8771__$1)
{var statearr_8824_8858 = state_8805__$1;(statearr_8824_8858[1] = 14);
} else
{var statearr_8825_8859 = state_8805__$1;(statearr_8825_8859[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 12))
{var inst_8791 = (state_8805[2]);var state_8805__$1 = state_8805;var statearr_8826_8860 = state_8805__$1;(statearr_8826_8860[2] = inst_8791);
(statearr_8826_8860[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 13))
{var inst_8759 = (state_8805[8]);var inst_8758 = (state_8805[9]);var inst_8757 = (state_8805[10]);var inst_8760 = (state_8805[11]);var inst_8767 = (state_8805[2]);var inst_8768 = (inst_8760 + 1);var tmp8820 = inst_8759;var tmp8821 = inst_8758;var tmp8822 = inst_8757;var inst_8757__$1 = tmp8822;var inst_8758__$1 = tmp8821;var inst_8759__$1 = tmp8820;var inst_8760__$1 = inst_8768;var state_8805__$1 = (function (){var statearr_8827 = state_8805;(statearr_8827[8] = inst_8759__$1);
(statearr_8827[14] = inst_8767);
(statearr_8827[9] = inst_8758__$1);
(statearr_8827[10] = inst_8757__$1);
(statearr_8827[11] = inst_8760__$1);
return statearr_8827;
})();var statearr_8828_8861 = state_8805__$1;(statearr_8828_8861[2] = null);
(statearr_8828_8861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 14))
{var inst_8771 = (state_8805[13]);var inst_8773 = cljs.core.chunked_seq_QMARK_.call(null,inst_8771);var state_8805__$1 = state_8805;if(inst_8773)
{var statearr_8829_8862 = state_8805__$1;(statearr_8829_8862[1] = 17);
} else
{var statearr_8830_8863 = state_8805__$1;(statearr_8830_8863[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 15))
{var state_8805__$1 = state_8805;var statearr_8831_8864 = state_8805__$1;(statearr_8831_8864[2] = null);
(statearr_8831_8864[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 16))
{var inst_8789 = (state_8805[2]);var state_8805__$1 = state_8805;var statearr_8832_8865 = state_8805__$1;(statearr_8832_8865[2] = inst_8789);
(statearr_8832_8865[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 17))
{var inst_8771 = (state_8805[13]);var inst_8775 = cljs.core.chunk_first.call(null,inst_8771);var inst_8776 = cljs.core.chunk_rest.call(null,inst_8771);var inst_8777 = cljs.core.count.call(null,inst_8775);var inst_8757 = inst_8776;var inst_8758 = inst_8775;var inst_8759 = inst_8777;var inst_8760 = 0;var state_8805__$1 = (function (){var statearr_8833 = state_8805;(statearr_8833[8] = inst_8759);
(statearr_8833[9] = inst_8758);
(statearr_8833[10] = inst_8757);
(statearr_8833[11] = inst_8760);
return statearr_8833;
})();var statearr_8834_8866 = state_8805__$1;(statearr_8834_8866[2] = null);
(statearr_8834_8866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 18))
{var inst_8771 = (state_8805[13]);var inst_8780 = cljs.core.first.call(null,inst_8771);var state_8805__$1 = state_8805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8805__$1,20,out,inst_8780);
} else
{if((state_val_8806 === 19))
{var inst_8786 = (state_8805[2]);var state_8805__$1 = state_8805;var statearr_8835_8867 = state_8805__$1;(statearr_8835_8867[2] = inst_8786);
(statearr_8835_8867[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 20))
{var inst_8771 = (state_8805[13]);var inst_8782 = (state_8805[2]);var inst_8783 = cljs.core.next.call(null,inst_8771);var inst_8757 = inst_8783;var inst_8758 = null;var inst_8759 = 0;var inst_8760 = 0;var state_8805__$1 = (function (){var statearr_8836 = state_8805;(statearr_8836[15] = inst_8782);
(statearr_8836[8] = inst_8759);
(statearr_8836[9] = inst_8758);
(statearr_8836[10] = inst_8757);
(statearr_8836[11] = inst_8760);
return statearr_8836;
})();var statearr_8837_8868 = state_8805__$1;(statearr_8837_8868[2] = null);
(statearr_8837_8868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 21))
{var state_8805__$1 = state_8805;var statearr_8838_8869 = state_8805__$1;(statearr_8838_8869[2] = null);
(statearr_8838_8869[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 22))
{var state_8805__$1 = state_8805;var statearr_8839_8870 = state_8805__$1;(statearr_8839_8870[2] = null);
(statearr_8839_8870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8806 === 23))
{var inst_8799 = (state_8805[2]);var state_8805__$1 = state_8805;var statearr_8840_8871 = state_8805__$1;(statearr_8840_8871[2] = inst_8799);
(statearr_8840_8871[1] = 7);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_8844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8844[0] = state_machine__5525__auto__);
(statearr_8844[1] = 1);
return statearr_8844;
});
var state_machine__5525__auto____1 = (function (state_8805){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_8805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e8845){if((e8845 instanceof Object))
{var ex__5528__auto__ = e8845;var statearr_8846_8872 = state_8805;(statearr_8846_8872[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8873 = state_8805;
state_8805 = G__8873;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_8805){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_8805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_8847 = f__5540__auto__.call(null);(statearr_8847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_8847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5539__auto___8968 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_8944){var state_val_8945 = (state_8944[1]);if((state_val_8945 === 1))
{var state_8944__$1 = state_8944;var statearr_8946_8969 = state_8944__$1;(statearr_8946_8969[2] = null);
(statearr_8946_8969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 2))
{var state_8944__$1 = state_8944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8944__$1,4,from);
} else
{if((state_val_8945 === 3))
{var inst_8942 = (state_8944[2]);var state_8944__$1 = state_8944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8944__$1,inst_8942);
} else
{if((state_val_8945 === 4))
{var inst_8923 = (state_8944[7]);var inst_8923__$1 = (state_8944[2]);var inst_8924 = (inst_8923__$1 == null);var state_8944__$1 = (function (){var statearr_8947 = state_8944;(statearr_8947[7] = inst_8923__$1);
return statearr_8947;
})();if(cljs.core.truth_(inst_8924))
{var statearr_8948_8970 = state_8944__$1;(statearr_8948_8970[1] = 5);
} else
{var statearr_8949_8971 = state_8944__$1;(statearr_8949_8971[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 5))
{var state_8944__$1 = state_8944;if(cljs.core.truth_(close_QMARK_))
{var statearr_8950_8972 = state_8944__$1;(statearr_8950_8972[1] = 8);
} else
{var statearr_8951_8973 = state_8944__$1;(statearr_8951_8973[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 6))
{var inst_8923 = (state_8944[7]);var state_8944__$1 = state_8944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8944__$1,11,to,inst_8923);
} else
{if((state_val_8945 === 7))
{var inst_8940 = (state_8944[2]);var state_8944__$1 = state_8944;var statearr_8952_8974 = state_8944__$1;(statearr_8952_8974[2] = inst_8940);
(statearr_8952_8974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 8))
{var inst_8927 = cljs.core.async.close_BANG_.call(null,to);var state_8944__$1 = state_8944;var statearr_8953_8975 = state_8944__$1;(statearr_8953_8975[2] = inst_8927);
(statearr_8953_8975[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 9))
{var state_8944__$1 = state_8944;var statearr_8954_8976 = state_8944__$1;(statearr_8954_8976[2] = null);
(statearr_8954_8976[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 10))
{var inst_8930 = (state_8944[2]);var state_8944__$1 = state_8944;var statearr_8955_8977 = state_8944__$1;(statearr_8955_8977[2] = inst_8930);
(statearr_8955_8977[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 11))
{var inst_8933 = (state_8944[2]);var state_8944__$1 = state_8944;if(cljs.core.truth_(inst_8933))
{var statearr_8956_8978 = state_8944__$1;(statearr_8956_8978[1] = 12);
} else
{var statearr_8957_8979 = state_8944__$1;(statearr_8957_8979[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 12))
{var state_8944__$1 = state_8944;var statearr_8958_8980 = state_8944__$1;(statearr_8958_8980[2] = null);
(statearr_8958_8980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 13))
{var state_8944__$1 = state_8944;var statearr_8959_8981 = state_8944__$1;(statearr_8959_8981[2] = null);
(statearr_8959_8981[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8945 === 14))
{var inst_8938 = (state_8944[2]);var state_8944__$1 = state_8944;var statearr_8960_8982 = state_8944__$1;(statearr_8960_8982[2] = inst_8938);
(statearr_8960_8982[1] = 7);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_8964 = [null,null,null,null,null,null,null,null];(statearr_8964[0] = state_machine__5525__auto__);
(statearr_8964[1] = 1);
return statearr_8964;
});
var state_machine__5525__auto____1 = (function (state_8944){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_8944);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e8965){if((e8965 instanceof Object))
{var ex__5528__auto__ = e8965;var statearr_8966_8983 = state_8944;(statearr_8966_8983[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8944);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8984 = state_8944;
state_8944 = G__8984;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_8944){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_8944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_8967 = f__5540__auto__.call(null);(statearr_8967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___8968);
return statearr_8967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5539__auto___9085 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_9060){var state_val_9061 = (state_9060[1]);if((state_val_9061 === 1))
{var state_9060__$1 = state_9060;var statearr_9062_9086 = state_9060__$1;(statearr_9062_9086[2] = null);
(statearr_9062_9086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 2))
{var state_9060__$1 = state_9060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9060__$1,4,ch);
} else
{if((state_val_9061 === 3))
{var inst_9058 = (state_9060[2]);var state_9060__$1 = state_9060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9060__$1,inst_9058);
} else
{if((state_val_9061 === 4))
{var inst_9037 = (state_9060[7]);var inst_9037__$1 = (state_9060[2]);var inst_9038 = (inst_9037__$1 == null);var state_9060__$1 = (function (){var statearr_9063 = state_9060;(statearr_9063[7] = inst_9037__$1);
return statearr_9063;
})();if(cljs.core.truth_(inst_9038))
{var statearr_9064_9087 = state_9060__$1;(statearr_9064_9087[1] = 5);
} else
{var statearr_9065_9088 = state_9060__$1;(statearr_9065_9088[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 5))
{var inst_9040 = cljs.core.async.close_BANG_.call(null,tc);var inst_9041 = cljs.core.async.close_BANG_.call(null,fc);var state_9060__$1 = (function (){var statearr_9066 = state_9060;(statearr_9066[8] = inst_9040);
return statearr_9066;
})();var statearr_9067_9089 = state_9060__$1;(statearr_9067_9089[2] = inst_9041);
(statearr_9067_9089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 6))
{var inst_9037 = (state_9060[7]);var inst_9043 = p.call(null,inst_9037);var state_9060__$1 = state_9060;if(cljs.core.truth_(inst_9043))
{var statearr_9068_9090 = state_9060__$1;(statearr_9068_9090[1] = 9);
} else
{var statearr_9069_9091 = state_9060__$1;(statearr_9069_9091[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 7))
{var inst_9056 = (state_9060[2]);var state_9060__$1 = state_9060;var statearr_9070_9092 = state_9060__$1;(statearr_9070_9092[2] = inst_9056);
(statearr_9070_9092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 8))
{var inst_9049 = (state_9060[2]);var state_9060__$1 = state_9060;if(cljs.core.truth_(inst_9049))
{var statearr_9071_9093 = state_9060__$1;(statearr_9071_9093[1] = 12);
} else
{var statearr_9072_9094 = state_9060__$1;(statearr_9072_9094[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 9))
{var state_9060__$1 = state_9060;var statearr_9073_9095 = state_9060__$1;(statearr_9073_9095[2] = tc);
(statearr_9073_9095[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 10))
{var state_9060__$1 = state_9060;var statearr_9074_9096 = state_9060__$1;(statearr_9074_9096[2] = fc);
(statearr_9074_9096[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 11))
{var inst_9037 = (state_9060[7]);var inst_9047 = (state_9060[2]);var state_9060__$1 = state_9060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9060__$1,8,inst_9047,inst_9037);
} else
{if((state_val_9061 === 12))
{var state_9060__$1 = state_9060;var statearr_9075_9097 = state_9060__$1;(statearr_9075_9097[2] = null);
(statearr_9075_9097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 13))
{var state_9060__$1 = state_9060;var statearr_9076_9098 = state_9060__$1;(statearr_9076_9098[2] = null);
(statearr_9076_9098[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9061 === 14))
{var inst_9054 = (state_9060[2]);var state_9060__$1 = state_9060;var statearr_9077_9099 = state_9060__$1;(statearr_9077_9099[2] = inst_9054);
(statearr_9077_9099[1] = 7);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_9081 = [null,null,null,null,null,null,null,null,null];(statearr_9081[0] = state_machine__5525__auto__);
(statearr_9081[1] = 1);
return statearr_9081;
});
var state_machine__5525__auto____1 = (function (state_9060){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_9060);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e9082){if((e9082 instanceof Object))
{var ex__5528__auto__ = e9082;var statearr_9083_9100 = state_9060;(statearr_9083_9100[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9060);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9101 = state_9060;
state_9060 = G__9101;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_9060){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_9060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_9084 = f__5540__auto__.call(null);(statearr_9084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___9085);
return statearr_9084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_9148){var state_val_9149 = (state_9148[1]);if((state_val_9149 === 7))
{var inst_9144 = (state_9148[2]);var state_9148__$1 = state_9148;var statearr_9150_9166 = state_9148__$1;(statearr_9150_9166[2] = inst_9144);
(statearr_9150_9166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9149 === 6))
{var inst_9137 = (state_9148[7]);var inst_9134 = (state_9148[8]);var inst_9141 = f.call(null,inst_9134,inst_9137);var inst_9134__$1 = inst_9141;var state_9148__$1 = (function (){var statearr_9151 = state_9148;(statearr_9151[8] = inst_9134__$1);
return statearr_9151;
})();var statearr_9152_9167 = state_9148__$1;(statearr_9152_9167[2] = null);
(statearr_9152_9167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9149 === 5))
{var inst_9134 = (state_9148[8]);var state_9148__$1 = state_9148;var statearr_9153_9168 = state_9148__$1;(statearr_9153_9168[2] = inst_9134);
(statearr_9153_9168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9149 === 4))
{var inst_9137 = (state_9148[7]);var inst_9137__$1 = (state_9148[2]);var inst_9138 = (inst_9137__$1 == null);var state_9148__$1 = (function (){var statearr_9154 = state_9148;(statearr_9154[7] = inst_9137__$1);
return statearr_9154;
})();if(cljs.core.truth_(inst_9138))
{var statearr_9155_9169 = state_9148__$1;(statearr_9155_9169[1] = 5);
} else
{var statearr_9156_9170 = state_9148__$1;(statearr_9156_9170[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9149 === 3))
{var inst_9146 = (state_9148[2]);var state_9148__$1 = state_9148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9148__$1,inst_9146);
} else
{if((state_val_9149 === 2))
{var state_9148__$1 = state_9148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9148__$1,4,ch);
} else
{if((state_val_9149 === 1))
{var inst_9134 = init;var state_9148__$1 = (function (){var statearr_9157 = state_9148;(statearr_9157[8] = inst_9134);
return statearr_9157;
})();var statearr_9158_9171 = state_9148__$1;(statearr_9158_9171[2] = null);
(statearr_9158_9171[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_9162 = [null,null,null,null,null,null,null,null,null];(statearr_9162[0] = state_machine__5525__auto__);
(statearr_9162[1] = 1);
return statearr_9162;
});
var state_machine__5525__auto____1 = (function (state_9148){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_9148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e9163){if((e9163 instanceof Object))
{var ex__5528__auto__ = e9163;var statearr_9164_9172 = state_9148;(statearr_9164_9172[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9173 = state_9148;
state_9148 = G__9173;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_9148){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_9148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_9165 = f__5540__auto__.call(null);(statearr_9165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_9165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_9247){var state_val_9248 = (state_9247[1]);if((state_val_9248 === 1))
{var inst_9223 = cljs.core.seq.call(null,coll);var inst_9224 = inst_9223;var state_9247__$1 = (function (){var statearr_9249 = state_9247;(statearr_9249[7] = inst_9224);
return statearr_9249;
})();var statearr_9250_9272 = state_9247__$1;(statearr_9250_9272[2] = null);
(statearr_9250_9272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 2))
{var inst_9224 = (state_9247[7]);var state_9247__$1 = state_9247;if(cljs.core.truth_(inst_9224))
{var statearr_9251_9273 = state_9247__$1;(statearr_9251_9273[1] = 4);
} else
{var statearr_9252_9274 = state_9247__$1;(statearr_9252_9274[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 3))
{var inst_9245 = (state_9247[2]);var state_9247__$1 = state_9247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9247__$1,inst_9245);
} else
{if((state_val_9248 === 4))
{var inst_9224 = (state_9247[7]);var inst_9227 = cljs.core.first.call(null,inst_9224);var state_9247__$1 = state_9247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9247__$1,7,ch,inst_9227);
} else
{if((state_val_9248 === 5))
{var inst_9224 = (state_9247[7]);var state_9247__$1 = state_9247;var statearr_9253_9275 = state_9247__$1;(statearr_9253_9275[2] = inst_9224);
(statearr_9253_9275[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 6))
{var inst_9232 = (state_9247[2]);var state_9247__$1 = state_9247;if(cljs.core.truth_(inst_9232))
{var statearr_9254_9276 = state_9247__$1;(statearr_9254_9276[1] = 8);
} else
{var statearr_9255_9277 = state_9247__$1;(statearr_9255_9277[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 7))
{var inst_9229 = (state_9247[2]);var state_9247__$1 = state_9247;var statearr_9256_9278 = state_9247__$1;(statearr_9256_9278[2] = inst_9229);
(statearr_9256_9278[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 8))
{var inst_9224 = (state_9247[7]);var inst_9234 = cljs.core.next.call(null,inst_9224);var inst_9224__$1 = inst_9234;var state_9247__$1 = (function (){var statearr_9257 = state_9247;(statearr_9257[7] = inst_9224__$1);
return statearr_9257;
})();var statearr_9258_9279 = state_9247__$1;(statearr_9258_9279[2] = null);
(statearr_9258_9279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 9))
{var state_9247__$1 = state_9247;if(cljs.core.truth_(close_QMARK_))
{var statearr_9259_9280 = state_9247__$1;(statearr_9259_9280[1] = 11);
} else
{var statearr_9260_9281 = state_9247__$1;(statearr_9260_9281[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 10))
{var inst_9243 = (state_9247[2]);var state_9247__$1 = state_9247;var statearr_9261_9282 = state_9247__$1;(statearr_9261_9282[2] = inst_9243);
(statearr_9261_9282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 11))
{var inst_9238 = cljs.core.async.close_BANG_.call(null,ch);var state_9247__$1 = state_9247;var statearr_9262_9283 = state_9247__$1;(statearr_9262_9283[2] = inst_9238);
(statearr_9262_9283[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 12))
{var state_9247__$1 = state_9247;var statearr_9263_9284 = state_9247__$1;(statearr_9263_9284[2] = null);
(statearr_9263_9284[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9248 === 13))
{var inst_9241 = (state_9247[2]);var state_9247__$1 = state_9247;var statearr_9264_9285 = state_9247__$1;(statearr_9264_9285[2] = inst_9241);
(statearr_9264_9285[1] = 10);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_9268 = [null,null,null,null,null,null,null,null];(statearr_9268[0] = state_machine__5525__auto__);
(statearr_9268[1] = 1);
return statearr_9268;
});
var state_machine__5525__auto____1 = (function (state_9247){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_9247);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e9269){if((e9269 instanceof Object))
{var ex__5528__auto__ = e9269;var statearr_9270_9286 = state_9247;(statearr_9270_9286[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9287 = state_9247;
state_9247 = G__9287;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_9247){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_9247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_9271 = f__5540__auto__.call(null);(statearr_9271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_9271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9289 = {};return obj9289;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9291 = {};return obj9291;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9513 = (function (cs,ch,mult,meta9514){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9514 = meta9514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9513.cljs$lang$type = true;
cljs.core.async.t9513.cljs$lang$ctorStr = "cljs.core.async/t9513";
cljs.core.async.t9513.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9513");
});})(cs))
;
cljs.core.async.t9513.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9513.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9513.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9513.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9513.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t9513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9515){var self__ = this;
var _9515__$1 = this;return self__.meta9514;
});})(cs))
;
cljs.core.async.t9513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9515,meta9514__$1){var self__ = this;
var _9515__$1 = this;return (new cljs.core.async.t9513(self__.cs,self__.ch,self__.mult,meta9514__$1));
});})(cs))
;
cljs.core.async.__GT_t9513 = ((function (cs){
return (function __GT_t9513(cs__$1,ch__$1,mult__$1,meta9514){return (new cljs.core.async.t9513(cs__$1,ch__$1,mult__$1,meta9514));
});})(cs))
;
}
return (new cljs.core.async.t9513(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5539__auto___9734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_9646){var state_val_9647 = (state_9646[1]);if((state_val_9647 === 32))
{var inst_9589 = (state_9646[7]);var inst_9587 = (state_9646[8]);var inst_9588 = (state_9646[9]);var inst_9586 = (state_9646[10]);var inst_9601 = (state_9646[2]);var inst_9602 = (inst_9589 + 1);var tmp9648 = inst_9587;var tmp9649 = inst_9588;var tmp9650 = inst_9586;var inst_9586__$1 = tmp9650;var inst_9587__$1 = tmp9648;var inst_9588__$1 = tmp9649;var inst_9589__$1 = inst_9602;var state_9646__$1 = (function (){var statearr_9651 = state_9646;(statearr_9651[7] = inst_9589__$1);
(statearr_9651[8] = inst_9587__$1);
(statearr_9651[9] = inst_9588__$1);
(statearr_9651[10] = inst_9586__$1);
(statearr_9651[11] = inst_9601);
return statearr_9651;
})();var statearr_9652_9735 = state_9646__$1;(statearr_9652_9735[2] = null);
(statearr_9652_9735[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 1))
{var state_9646__$1 = state_9646;var statearr_9653_9736 = state_9646__$1;(statearr_9653_9736[2] = null);
(statearr_9653_9736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 33))
{var inst_9605 = (state_9646[12]);var inst_9607 = cljs.core.chunked_seq_QMARK_.call(null,inst_9605);var state_9646__$1 = state_9646;if(inst_9607)
{var statearr_9654_9737 = state_9646__$1;(statearr_9654_9737[1] = 36);
} else
{var statearr_9655_9738 = state_9646__$1;(statearr_9655_9738[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 2))
{var state_9646__$1 = state_9646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9646__$1,4,ch);
} else
{if((state_val_9647 === 34))
{var state_9646__$1 = state_9646;var statearr_9656_9739 = state_9646__$1;(statearr_9656_9739[2] = null);
(statearr_9656_9739[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 3))
{var inst_9644 = (state_9646[2]);var state_9646__$1 = state_9646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9646__$1,inst_9644);
} else
{if((state_val_9647 === 35))
{var inst_9628 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9657_9740 = state_9646__$1;(statearr_9657_9740[2] = inst_9628);
(statearr_9657_9740[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 4))
{var inst_9518 = (state_9646[13]);var inst_9518__$1 = (state_9646[2]);var inst_9519 = (inst_9518__$1 == null);var state_9646__$1 = (function (){var statearr_9658 = state_9646;(statearr_9658[13] = inst_9518__$1);
return statearr_9658;
})();if(cljs.core.truth_(inst_9519))
{var statearr_9659_9741 = state_9646__$1;(statearr_9659_9741[1] = 5);
} else
{var statearr_9660_9742 = state_9646__$1;(statearr_9660_9742[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 36))
{var inst_9605 = (state_9646[12]);var inst_9609 = cljs.core.chunk_first.call(null,inst_9605);var inst_9610 = cljs.core.chunk_rest.call(null,inst_9605);var inst_9611 = cljs.core.count.call(null,inst_9609);var inst_9586 = inst_9610;var inst_9587 = inst_9609;var inst_9588 = inst_9611;var inst_9589 = 0;var state_9646__$1 = (function (){var statearr_9661 = state_9646;(statearr_9661[7] = inst_9589);
(statearr_9661[8] = inst_9587);
(statearr_9661[9] = inst_9588);
(statearr_9661[10] = inst_9586);
return statearr_9661;
})();var statearr_9662_9743 = state_9646__$1;(statearr_9662_9743[2] = null);
(statearr_9662_9743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 5))
{var inst_9525 = cljs.core.deref.call(null,cs);var inst_9526 = cljs.core.seq.call(null,inst_9525);var inst_9527 = inst_9526;var inst_9528 = null;var inst_9529 = 0;var inst_9530 = 0;var state_9646__$1 = (function (){var statearr_9663 = state_9646;(statearr_9663[14] = inst_9529);
(statearr_9663[15] = inst_9528);
(statearr_9663[16] = inst_9527);
(statearr_9663[17] = inst_9530);
return statearr_9663;
})();var statearr_9664_9744 = state_9646__$1;(statearr_9664_9744[2] = null);
(statearr_9664_9744[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 37))
{var inst_9614 = (state_9646[18]);var inst_9518 = (state_9646[13]);var inst_9605 = (state_9646[12]);var inst_9614__$1 = cljs.core.first.call(null,inst_9605);var inst_9615 = cljs.core.async.put_BANG_.call(null,inst_9614__$1,inst_9518,done);var state_9646__$1 = (function (){var statearr_9665 = state_9646;(statearr_9665[18] = inst_9614__$1);
return statearr_9665;
})();if(cljs.core.truth_(inst_9615))
{var statearr_9666_9745 = state_9646__$1;(statearr_9666_9745[1] = 39);
} else
{var statearr_9667_9746 = state_9646__$1;(statearr_9667_9746[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 6))
{var inst_9578 = (state_9646[19]);var inst_9577 = cljs.core.deref.call(null,cs);var inst_9578__$1 = cljs.core.keys.call(null,inst_9577);var inst_9579 = cljs.core.count.call(null,inst_9578__$1);var inst_9580 = cljs.core.reset_BANG_.call(null,dctr,inst_9579);var inst_9585 = cljs.core.seq.call(null,inst_9578__$1);var inst_9586 = inst_9585;var inst_9587 = null;var inst_9588 = 0;var inst_9589 = 0;var state_9646__$1 = (function (){var statearr_9668 = state_9646;(statearr_9668[7] = inst_9589);
(statearr_9668[8] = inst_9587);
(statearr_9668[9] = inst_9588);
(statearr_9668[10] = inst_9586);
(statearr_9668[19] = inst_9578__$1);
(statearr_9668[20] = inst_9580);
return statearr_9668;
})();var statearr_9669_9747 = state_9646__$1;(statearr_9669_9747[2] = null);
(statearr_9669_9747[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 38))
{var inst_9625 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9670_9748 = state_9646__$1;(statearr_9670_9748[2] = inst_9625);
(statearr_9670_9748[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 7))
{var inst_9642 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9671_9749 = state_9646__$1;(statearr_9671_9749[2] = inst_9642);
(statearr_9671_9749[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 39))
{var state_9646__$1 = state_9646;var statearr_9672_9750 = state_9646__$1;(statearr_9672_9750[2] = null);
(statearr_9672_9750[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 8))
{var inst_9529 = (state_9646[14]);var inst_9530 = (state_9646[17]);var inst_9532 = (inst_9530 < inst_9529);var inst_9533 = inst_9532;var state_9646__$1 = state_9646;if(cljs.core.truth_(inst_9533))
{var statearr_9673_9751 = state_9646__$1;(statearr_9673_9751[1] = 10);
} else
{var statearr_9674_9752 = state_9646__$1;(statearr_9674_9752[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 40))
{var inst_9614 = (state_9646[18]);var inst_9618 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9619 = cljs.core.async.untap_STAR_.call(null,m,inst_9614);var state_9646__$1 = (function (){var statearr_9675 = state_9646;(statearr_9675[21] = inst_9618);
return statearr_9675;
})();var statearr_9676_9753 = state_9646__$1;(statearr_9676_9753[2] = inst_9619);
(statearr_9676_9753[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 9))
{var inst_9575 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9677_9754 = state_9646__$1;(statearr_9677_9754[2] = inst_9575);
(statearr_9677_9754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 41))
{var inst_9605 = (state_9646[12]);var inst_9621 = (state_9646[2]);var inst_9622 = cljs.core.next.call(null,inst_9605);var inst_9586 = inst_9622;var inst_9587 = null;var inst_9588 = 0;var inst_9589 = 0;var state_9646__$1 = (function (){var statearr_9678 = state_9646;(statearr_9678[7] = inst_9589);
(statearr_9678[8] = inst_9587);
(statearr_9678[9] = inst_9588);
(statearr_9678[22] = inst_9621);
(statearr_9678[10] = inst_9586);
return statearr_9678;
})();var statearr_9679_9755 = state_9646__$1;(statearr_9679_9755[2] = null);
(statearr_9679_9755[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 10))
{var inst_9528 = (state_9646[15]);var inst_9530 = (state_9646[17]);var inst_9536 = cljs.core._nth.call(null,inst_9528,inst_9530);var inst_9537 = cljs.core.nth.call(null,inst_9536,0,null);var inst_9538 = cljs.core.nth.call(null,inst_9536,1,null);var state_9646__$1 = (function (){var statearr_9680 = state_9646;(statearr_9680[23] = inst_9537);
return statearr_9680;
})();if(cljs.core.truth_(inst_9538))
{var statearr_9681_9756 = state_9646__$1;(statearr_9681_9756[1] = 13);
} else
{var statearr_9682_9757 = state_9646__$1;(statearr_9682_9757[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 42))
{var state_9646__$1 = state_9646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9646__$1,45,dchan);
} else
{if((state_val_9647 === 11))
{var inst_9547 = (state_9646[24]);var inst_9527 = (state_9646[16]);var inst_9547__$1 = cljs.core.seq.call(null,inst_9527);var state_9646__$1 = (function (){var statearr_9683 = state_9646;(statearr_9683[24] = inst_9547__$1);
return statearr_9683;
})();if(inst_9547__$1)
{var statearr_9684_9758 = state_9646__$1;(statearr_9684_9758[1] = 16);
} else
{var statearr_9685_9759 = state_9646__$1;(statearr_9685_9759[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 43))
{var state_9646__$1 = state_9646;var statearr_9686_9760 = state_9646__$1;(statearr_9686_9760[2] = null);
(statearr_9686_9760[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 12))
{var inst_9573 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9687_9761 = state_9646__$1;(statearr_9687_9761[2] = inst_9573);
(statearr_9687_9761[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 44))
{var inst_9639 = (state_9646[2]);var state_9646__$1 = (function (){var statearr_9688 = state_9646;(statearr_9688[25] = inst_9639);
return statearr_9688;
})();var statearr_9689_9762 = state_9646__$1;(statearr_9689_9762[2] = null);
(statearr_9689_9762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 13))
{var inst_9537 = (state_9646[23]);var inst_9540 = cljs.core.async.close_BANG_.call(null,inst_9537);var state_9646__$1 = state_9646;var statearr_9690_9763 = state_9646__$1;(statearr_9690_9763[2] = inst_9540);
(statearr_9690_9763[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 45))
{var inst_9636 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9694_9764 = state_9646__$1;(statearr_9694_9764[2] = inst_9636);
(statearr_9694_9764[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 14))
{var state_9646__$1 = state_9646;var statearr_9695_9765 = state_9646__$1;(statearr_9695_9765[2] = null);
(statearr_9695_9765[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 15))
{var inst_9529 = (state_9646[14]);var inst_9528 = (state_9646[15]);var inst_9527 = (state_9646[16]);var inst_9530 = (state_9646[17]);var inst_9543 = (state_9646[2]);var inst_9544 = (inst_9530 + 1);var tmp9691 = inst_9529;var tmp9692 = inst_9528;var tmp9693 = inst_9527;var inst_9527__$1 = tmp9693;var inst_9528__$1 = tmp9692;var inst_9529__$1 = tmp9691;var inst_9530__$1 = inst_9544;var state_9646__$1 = (function (){var statearr_9696 = state_9646;(statearr_9696[26] = inst_9543);
(statearr_9696[14] = inst_9529__$1);
(statearr_9696[15] = inst_9528__$1);
(statearr_9696[16] = inst_9527__$1);
(statearr_9696[17] = inst_9530__$1);
return statearr_9696;
})();var statearr_9697_9766 = state_9646__$1;(statearr_9697_9766[2] = null);
(statearr_9697_9766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 16))
{var inst_9547 = (state_9646[24]);var inst_9549 = cljs.core.chunked_seq_QMARK_.call(null,inst_9547);var state_9646__$1 = state_9646;if(inst_9549)
{var statearr_9698_9767 = state_9646__$1;(statearr_9698_9767[1] = 19);
} else
{var statearr_9699_9768 = state_9646__$1;(statearr_9699_9768[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 17))
{var state_9646__$1 = state_9646;var statearr_9700_9769 = state_9646__$1;(statearr_9700_9769[2] = null);
(statearr_9700_9769[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 18))
{var inst_9571 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9701_9770 = state_9646__$1;(statearr_9701_9770[2] = inst_9571);
(statearr_9701_9770[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 19))
{var inst_9547 = (state_9646[24]);var inst_9551 = cljs.core.chunk_first.call(null,inst_9547);var inst_9552 = cljs.core.chunk_rest.call(null,inst_9547);var inst_9553 = cljs.core.count.call(null,inst_9551);var inst_9527 = inst_9552;var inst_9528 = inst_9551;var inst_9529 = inst_9553;var inst_9530 = 0;var state_9646__$1 = (function (){var statearr_9702 = state_9646;(statearr_9702[14] = inst_9529);
(statearr_9702[15] = inst_9528);
(statearr_9702[16] = inst_9527);
(statearr_9702[17] = inst_9530);
return statearr_9702;
})();var statearr_9703_9771 = state_9646__$1;(statearr_9703_9771[2] = null);
(statearr_9703_9771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 20))
{var inst_9547 = (state_9646[24]);var inst_9557 = cljs.core.first.call(null,inst_9547);var inst_9558 = cljs.core.nth.call(null,inst_9557,0,null);var inst_9559 = cljs.core.nth.call(null,inst_9557,1,null);var state_9646__$1 = (function (){var statearr_9704 = state_9646;(statearr_9704[27] = inst_9558);
return statearr_9704;
})();if(cljs.core.truth_(inst_9559))
{var statearr_9705_9772 = state_9646__$1;(statearr_9705_9772[1] = 22);
} else
{var statearr_9706_9773 = state_9646__$1;(statearr_9706_9773[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 21))
{var inst_9568 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9707_9774 = state_9646__$1;(statearr_9707_9774[2] = inst_9568);
(statearr_9707_9774[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 22))
{var inst_9558 = (state_9646[27]);var inst_9561 = cljs.core.async.close_BANG_.call(null,inst_9558);var state_9646__$1 = state_9646;var statearr_9708_9775 = state_9646__$1;(statearr_9708_9775[2] = inst_9561);
(statearr_9708_9775[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 23))
{var state_9646__$1 = state_9646;var statearr_9709_9776 = state_9646__$1;(statearr_9709_9776[2] = null);
(statearr_9709_9776[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 24))
{var inst_9547 = (state_9646[24]);var inst_9564 = (state_9646[2]);var inst_9565 = cljs.core.next.call(null,inst_9547);var inst_9527 = inst_9565;var inst_9528 = null;var inst_9529 = 0;var inst_9530 = 0;var state_9646__$1 = (function (){var statearr_9710 = state_9646;(statearr_9710[14] = inst_9529);
(statearr_9710[28] = inst_9564);
(statearr_9710[15] = inst_9528);
(statearr_9710[16] = inst_9527);
(statearr_9710[17] = inst_9530);
return statearr_9710;
})();var statearr_9711_9777 = state_9646__$1;(statearr_9711_9777[2] = null);
(statearr_9711_9777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 25))
{var inst_9589 = (state_9646[7]);var inst_9588 = (state_9646[9]);var inst_9591 = (inst_9589 < inst_9588);var inst_9592 = inst_9591;var state_9646__$1 = state_9646;if(cljs.core.truth_(inst_9592))
{var statearr_9712_9778 = state_9646__$1;(statearr_9712_9778[1] = 27);
} else
{var statearr_9713_9779 = state_9646__$1;(statearr_9713_9779[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 26))
{var inst_9578 = (state_9646[19]);var inst_9632 = (state_9646[2]);var inst_9633 = cljs.core.seq.call(null,inst_9578);var state_9646__$1 = (function (){var statearr_9714 = state_9646;(statearr_9714[29] = inst_9632);
return statearr_9714;
})();if(inst_9633)
{var statearr_9715_9780 = state_9646__$1;(statearr_9715_9780[1] = 42);
} else
{var statearr_9716_9781 = state_9646__$1;(statearr_9716_9781[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 27))
{var inst_9589 = (state_9646[7]);var inst_9587 = (state_9646[8]);var inst_9594 = (state_9646[30]);var inst_9518 = (state_9646[13]);var inst_9594__$1 = cljs.core._nth.call(null,inst_9587,inst_9589);var inst_9595 = cljs.core.async.put_BANG_.call(null,inst_9594__$1,inst_9518,done);var state_9646__$1 = (function (){var statearr_9717 = state_9646;(statearr_9717[30] = inst_9594__$1);
return statearr_9717;
})();if(cljs.core.truth_(inst_9595))
{var statearr_9718_9782 = state_9646__$1;(statearr_9718_9782[1] = 30);
} else
{var statearr_9719_9783 = state_9646__$1;(statearr_9719_9783[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 28))
{var inst_9586 = (state_9646[10]);var inst_9605 = (state_9646[12]);var inst_9605__$1 = cljs.core.seq.call(null,inst_9586);var state_9646__$1 = (function (){var statearr_9720 = state_9646;(statearr_9720[12] = inst_9605__$1);
return statearr_9720;
})();if(inst_9605__$1)
{var statearr_9721_9784 = state_9646__$1;(statearr_9721_9784[1] = 33);
} else
{var statearr_9722_9785 = state_9646__$1;(statearr_9722_9785[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 29))
{var inst_9630 = (state_9646[2]);var state_9646__$1 = state_9646;var statearr_9723_9786 = state_9646__$1;(statearr_9723_9786[2] = inst_9630);
(statearr_9723_9786[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 30))
{var state_9646__$1 = state_9646;var statearr_9724_9787 = state_9646__$1;(statearr_9724_9787[2] = null);
(statearr_9724_9787[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9647 === 31))
{var inst_9594 = (state_9646[30]);var inst_9598 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9599 = cljs.core.async.untap_STAR_.call(null,m,inst_9594);var state_9646__$1 = (function (){var statearr_9725 = state_9646;(statearr_9725[31] = inst_9598);
return statearr_9725;
})();var statearr_9726_9788 = state_9646__$1;(statearr_9726_9788[2] = inst_9599);
(statearr_9726_9788[1] = 32);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_9730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9730[0] = state_machine__5525__auto__);
(statearr_9730[1] = 1);
return statearr_9730;
});
var state_machine__5525__auto____1 = (function (state_9646){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_9646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e9731){if((e9731 instanceof Object))
{var ex__5528__auto__ = e9731;var statearr_9732_9789 = state_9646;(statearr_9732_9789[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9790 = state_9646;
state_9646 = G__9790;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_9646){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_9646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_9733 = f__5540__auto__.call(null);(statearr_9733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___9734);
return statearr_9733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj9792 = {};return obj9792;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t9912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9912 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta9913){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta9913 = meta9913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9912.cljs$lang$type = true;
cljs.core.async.t9912.cljs$lang$ctorStr = "cljs.core.async/t9912";
cljs.core.async.t9912.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9912");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t9912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9914){var self__ = this;
var _9914__$1 = this;return self__.meta9913;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9914,meta9913__$1){var self__ = this;
var _9914__$1 = this;return (new cljs.core.async.t9912(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta9913__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t9912 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t9912(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9913){return (new cljs.core.async.t9912(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9913));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t9912(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5539__auto___10031 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_9984){var state_val_9985 = (state_9984[1]);if((state_val_9985 === 1))
{var inst_9918 = (state_9984[7]);var inst_9918__$1 = calc_state.call(null);var inst_9919 = cljs.core.seq_QMARK_.call(null,inst_9918__$1);var state_9984__$1 = (function (){var statearr_9986 = state_9984;(statearr_9986[7] = inst_9918__$1);
return statearr_9986;
})();if(inst_9919)
{var statearr_9987_10032 = state_9984__$1;(statearr_9987_10032[1] = 2);
} else
{var statearr_9988_10033 = state_9984__$1;(statearr_9988_10033[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 2))
{var inst_9918 = (state_9984[7]);var inst_9921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9918);var state_9984__$1 = state_9984;var statearr_9989_10034 = state_9984__$1;(statearr_9989_10034[2] = inst_9921);
(statearr_9989_10034[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 3))
{var inst_9918 = (state_9984[7]);var state_9984__$1 = state_9984;var statearr_9990_10035 = state_9984__$1;(statearr_9990_10035[2] = inst_9918);
(statearr_9990_10035[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 4))
{var inst_9918 = (state_9984[7]);var inst_9924 = (state_9984[2]);var inst_9925 = cljs.core.get.call(null,inst_9924,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9926 = cljs.core.get.call(null,inst_9924,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9927 = cljs.core.get.call(null,inst_9924,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_9928 = inst_9918;var state_9984__$1 = (function (){var statearr_9991 = state_9984;(statearr_9991[8] = inst_9925);
(statearr_9991[9] = inst_9926);
(statearr_9991[10] = inst_9927);
(statearr_9991[11] = inst_9928);
return statearr_9991;
})();var statearr_9992_10036 = state_9984__$1;(statearr_9992_10036[2] = null);
(statearr_9992_10036[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 5))
{var inst_9928 = (state_9984[11]);var inst_9931 = cljs.core.seq_QMARK_.call(null,inst_9928);var state_9984__$1 = state_9984;if(inst_9931)
{var statearr_9993_10037 = state_9984__$1;(statearr_9993_10037[1] = 7);
} else
{var statearr_9994_10038 = state_9984__$1;(statearr_9994_10038[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 6))
{var inst_9982 = (state_9984[2]);var state_9984__$1 = state_9984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9984__$1,inst_9982);
} else
{if((state_val_9985 === 7))
{var inst_9928 = (state_9984[11]);var inst_9933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9928);var state_9984__$1 = state_9984;var statearr_9995_10039 = state_9984__$1;(statearr_9995_10039[2] = inst_9933);
(statearr_9995_10039[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 8))
{var inst_9928 = (state_9984[11]);var state_9984__$1 = state_9984;var statearr_9996_10040 = state_9984__$1;(statearr_9996_10040[2] = inst_9928);
(statearr_9996_10040[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 9))
{var inst_9936 = (state_9984[12]);var inst_9936__$1 = (state_9984[2]);var inst_9937 = cljs.core.get.call(null,inst_9936__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9938 = cljs.core.get.call(null,inst_9936__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9939 = cljs.core.get.call(null,inst_9936__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_9984__$1 = (function (){var statearr_9997 = state_9984;(statearr_9997[12] = inst_9936__$1);
(statearr_9997[13] = inst_9938);
(statearr_9997[14] = inst_9939);
return statearr_9997;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9984__$1,10,inst_9937);
} else
{if((state_val_9985 === 10))
{var inst_9944 = (state_9984[15]);var inst_9943 = (state_9984[16]);var inst_9942 = (state_9984[2]);var inst_9943__$1 = cljs.core.nth.call(null,inst_9942,0,null);var inst_9944__$1 = cljs.core.nth.call(null,inst_9942,1,null);var inst_9945 = (inst_9943__$1 == null);var inst_9946 = cljs.core._EQ_.call(null,inst_9944__$1,change);var inst_9947 = (inst_9945) || (inst_9946);var state_9984__$1 = (function (){var statearr_9998 = state_9984;(statearr_9998[15] = inst_9944__$1);
(statearr_9998[16] = inst_9943__$1);
return statearr_9998;
})();if(cljs.core.truth_(inst_9947))
{var statearr_9999_10041 = state_9984__$1;(statearr_9999_10041[1] = 11);
} else
{var statearr_10000_10042 = state_9984__$1;(statearr_10000_10042[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 11))
{var inst_9943 = (state_9984[16]);var inst_9949 = (inst_9943 == null);var state_9984__$1 = state_9984;if(cljs.core.truth_(inst_9949))
{var statearr_10001_10043 = state_9984__$1;(statearr_10001_10043[1] = 14);
} else
{var statearr_10002_10044 = state_9984__$1;(statearr_10002_10044[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 12))
{var inst_9944 = (state_9984[15]);var inst_9939 = (state_9984[14]);var inst_9958 = (state_9984[17]);var inst_9958__$1 = inst_9939.call(null,inst_9944);var state_9984__$1 = (function (){var statearr_10003 = state_9984;(statearr_10003[17] = inst_9958__$1);
return statearr_10003;
})();if(cljs.core.truth_(inst_9958__$1))
{var statearr_10004_10045 = state_9984__$1;(statearr_10004_10045[1] = 17);
} else
{var statearr_10005_10046 = state_9984__$1;(statearr_10005_10046[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 13))
{var inst_9980 = (state_9984[2]);var state_9984__$1 = state_9984;var statearr_10006_10047 = state_9984__$1;(statearr_10006_10047[2] = inst_9980);
(statearr_10006_10047[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 14))
{var inst_9944 = (state_9984[15]);var inst_9951 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9944);var state_9984__$1 = state_9984;var statearr_10007_10048 = state_9984__$1;(statearr_10007_10048[2] = inst_9951);
(statearr_10007_10048[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 15))
{var state_9984__$1 = state_9984;var statearr_10008_10049 = state_9984__$1;(statearr_10008_10049[2] = null);
(statearr_10008_10049[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 16))
{var inst_9954 = (state_9984[2]);var inst_9955 = calc_state.call(null);var inst_9928 = inst_9955;var state_9984__$1 = (function (){var statearr_10009 = state_9984;(statearr_10009[18] = inst_9954);
(statearr_10009[11] = inst_9928);
return statearr_10009;
})();var statearr_10010_10050 = state_9984__$1;(statearr_10010_10050[2] = null);
(statearr_10010_10050[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 17))
{var inst_9958 = (state_9984[17]);var state_9984__$1 = state_9984;var statearr_10011_10051 = state_9984__$1;(statearr_10011_10051[2] = inst_9958);
(statearr_10011_10051[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 18))
{var inst_9938 = (state_9984[13]);var inst_9944 = (state_9984[15]);var inst_9939 = (state_9984[14]);var inst_9961 = cljs.core.empty_QMARK_.call(null,inst_9939);var inst_9962 = inst_9938.call(null,inst_9944);var inst_9963 = cljs.core.not.call(null,inst_9962);var inst_9964 = (inst_9961) && (inst_9963);var state_9984__$1 = state_9984;var statearr_10012_10052 = state_9984__$1;(statearr_10012_10052[2] = inst_9964);
(statearr_10012_10052[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 19))
{var inst_9966 = (state_9984[2]);var state_9984__$1 = state_9984;if(cljs.core.truth_(inst_9966))
{var statearr_10013_10053 = state_9984__$1;(statearr_10013_10053[1] = 20);
} else
{var statearr_10014_10054 = state_9984__$1;(statearr_10014_10054[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 20))
{var inst_9943 = (state_9984[16]);var state_9984__$1 = state_9984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9984__$1,23,out,inst_9943);
} else
{if((state_val_9985 === 21))
{var inst_9936 = (state_9984[12]);var inst_9928 = inst_9936;var state_9984__$1 = (function (){var statearr_10015 = state_9984;(statearr_10015[11] = inst_9928);
return statearr_10015;
})();var statearr_10016_10055 = state_9984__$1;(statearr_10016_10055[2] = null);
(statearr_10016_10055[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 22))
{var inst_9978 = (state_9984[2]);var state_9984__$1 = state_9984;var statearr_10017_10056 = state_9984__$1;(statearr_10017_10056[2] = inst_9978);
(statearr_10017_10056[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 23))
{var inst_9969 = (state_9984[2]);var state_9984__$1 = state_9984;if(cljs.core.truth_(inst_9969))
{var statearr_10018_10057 = state_9984__$1;(statearr_10018_10057[1] = 24);
} else
{var statearr_10019_10058 = state_9984__$1;(statearr_10019_10058[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 24))
{var inst_9936 = (state_9984[12]);var inst_9928 = inst_9936;var state_9984__$1 = (function (){var statearr_10020 = state_9984;(statearr_10020[11] = inst_9928);
return statearr_10020;
})();var statearr_10021_10059 = state_9984__$1;(statearr_10021_10059[2] = null);
(statearr_10021_10059[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 25))
{var state_9984__$1 = state_9984;var statearr_10022_10060 = state_9984__$1;(statearr_10022_10060[2] = null);
(statearr_10022_10060[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9985 === 26))
{var inst_9974 = (state_9984[2]);var state_9984__$1 = state_9984;var statearr_10023_10061 = state_9984__$1;(statearr_10023_10061[2] = inst_9974);
(statearr_10023_10061[1] = 22);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_10027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10027[0] = state_machine__5525__auto__);
(statearr_10027[1] = 1);
return statearr_10027;
});
var state_machine__5525__auto____1 = (function (state_9984){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_9984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e10028){if((e10028 instanceof Object))
{var ex__5528__auto__ = e10028;var statearr_10029_10062 = state_9984;(statearr_10029_10062[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10063 = state_9984;
state_9984 = G__10063;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_9984){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_9984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_10030 = f__5540__auto__.call(null);(statearr_10030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___10031);
return statearr_10030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10065 = {};return obj10065;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__10066_SHARP_){if(cljs.core.truth_(p1__10066_SHARP_.call(null,topic)))
{return p1__10066_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10066_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10189 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10190){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10190 = meta10190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10189.cljs$lang$type = true;
cljs.core.async.t10189.cljs$lang$ctorStr = "cljs.core.async/t10189";
cljs.core.async.t10189.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10189");
});})(mults,ensure_mult))
;
cljs.core.async.t10189.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10189.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10191){var self__ = this;
var _10191__$1 = this;return self__.meta10190;
});})(mults,ensure_mult))
;
cljs.core.async.t10189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10191,meta10190__$1){var self__ = this;
var _10191__$1 = this;return (new cljs.core.async.t10189(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10190__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10189 = ((function (mults,ensure_mult){
return (function __GT_t10189(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10190){return (new cljs.core.async.t10189(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10190));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10189(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5539__auto___10311 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_10263){var state_val_10264 = (state_10263[1]);if((state_val_10264 === 1))
{var state_10263__$1 = state_10263;var statearr_10265_10312 = state_10263__$1;(statearr_10265_10312[2] = null);
(statearr_10265_10312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 2))
{var state_10263__$1 = state_10263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10263__$1,4,ch);
} else
{if((state_val_10264 === 3))
{var inst_10261 = (state_10263[2]);var state_10263__$1 = state_10263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10263__$1,inst_10261);
} else
{if((state_val_10264 === 4))
{var inst_10194 = (state_10263[7]);var inst_10194__$1 = (state_10263[2]);var inst_10195 = (inst_10194__$1 == null);var state_10263__$1 = (function (){var statearr_10266 = state_10263;(statearr_10266[7] = inst_10194__$1);
return statearr_10266;
})();if(cljs.core.truth_(inst_10195))
{var statearr_10267_10313 = state_10263__$1;(statearr_10267_10313[1] = 5);
} else
{var statearr_10268_10314 = state_10263__$1;(statearr_10268_10314[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 5))
{var inst_10201 = cljs.core.deref.call(null,mults);var inst_10202 = cljs.core.vals.call(null,inst_10201);var inst_10203 = cljs.core.seq.call(null,inst_10202);var inst_10204 = inst_10203;var inst_10205 = null;var inst_10206 = 0;var inst_10207 = 0;var state_10263__$1 = (function (){var statearr_10269 = state_10263;(statearr_10269[8] = inst_10204);
(statearr_10269[9] = inst_10205);
(statearr_10269[10] = inst_10207);
(statearr_10269[11] = inst_10206);
return statearr_10269;
})();var statearr_10270_10315 = state_10263__$1;(statearr_10270_10315[2] = null);
(statearr_10270_10315[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 6))
{var inst_10244 = (state_10263[12]);var inst_10242 = (state_10263[13]);var inst_10194 = (state_10263[7]);var inst_10242__$1 = topic_fn.call(null,inst_10194);var inst_10243 = cljs.core.deref.call(null,mults);var inst_10244__$1 = cljs.core.get.call(null,inst_10243,inst_10242__$1);var state_10263__$1 = (function (){var statearr_10271 = state_10263;(statearr_10271[12] = inst_10244__$1);
(statearr_10271[13] = inst_10242__$1);
return statearr_10271;
})();if(cljs.core.truth_(inst_10244__$1))
{var statearr_10272_10316 = state_10263__$1;(statearr_10272_10316[1] = 19);
} else
{var statearr_10273_10317 = state_10263__$1;(statearr_10273_10317[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 7))
{var inst_10259 = (state_10263[2]);var state_10263__$1 = state_10263;var statearr_10274_10318 = state_10263__$1;(statearr_10274_10318[2] = inst_10259);
(statearr_10274_10318[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 8))
{var inst_10207 = (state_10263[10]);var inst_10206 = (state_10263[11]);var inst_10209 = (inst_10207 < inst_10206);var inst_10210 = inst_10209;var state_10263__$1 = state_10263;if(cljs.core.truth_(inst_10210))
{var statearr_10278_10319 = state_10263__$1;(statearr_10278_10319[1] = 10);
} else
{var statearr_10279_10320 = state_10263__$1;(statearr_10279_10320[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 9))
{var inst_10240 = (state_10263[2]);var state_10263__$1 = state_10263;var statearr_10280_10321 = state_10263__$1;(statearr_10280_10321[2] = inst_10240);
(statearr_10280_10321[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 10))
{var inst_10204 = (state_10263[8]);var inst_10205 = (state_10263[9]);var inst_10207 = (state_10263[10]);var inst_10206 = (state_10263[11]);var inst_10212 = cljs.core._nth.call(null,inst_10205,inst_10207);var inst_10213 = cljs.core.async.muxch_STAR_.call(null,inst_10212);var inst_10214 = cljs.core.async.close_BANG_.call(null,inst_10213);var inst_10215 = (inst_10207 + 1);var tmp10275 = inst_10204;var tmp10276 = inst_10205;var tmp10277 = inst_10206;var inst_10204__$1 = tmp10275;var inst_10205__$1 = tmp10276;var inst_10206__$1 = tmp10277;var inst_10207__$1 = inst_10215;var state_10263__$1 = (function (){var statearr_10281 = state_10263;(statearr_10281[8] = inst_10204__$1);
(statearr_10281[9] = inst_10205__$1);
(statearr_10281[10] = inst_10207__$1);
(statearr_10281[11] = inst_10206__$1);
(statearr_10281[14] = inst_10214);
return statearr_10281;
})();var statearr_10282_10322 = state_10263__$1;(statearr_10282_10322[2] = null);
(statearr_10282_10322[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 11))
{var inst_10218 = (state_10263[15]);var inst_10204 = (state_10263[8]);var inst_10218__$1 = cljs.core.seq.call(null,inst_10204);var state_10263__$1 = (function (){var statearr_10283 = state_10263;(statearr_10283[15] = inst_10218__$1);
return statearr_10283;
})();if(inst_10218__$1)
{var statearr_10284_10323 = state_10263__$1;(statearr_10284_10323[1] = 13);
} else
{var statearr_10285_10324 = state_10263__$1;(statearr_10285_10324[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 12))
{var inst_10238 = (state_10263[2]);var state_10263__$1 = state_10263;var statearr_10286_10325 = state_10263__$1;(statearr_10286_10325[2] = inst_10238);
(statearr_10286_10325[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 13))
{var inst_10218 = (state_10263[15]);var inst_10220 = cljs.core.chunked_seq_QMARK_.call(null,inst_10218);var state_10263__$1 = state_10263;if(inst_10220)
{var statearr_10287_10326 = state_10263__$1;(statearr_10287_10326[1] = 16);
} else
{var statearr_10288_10327 = state_10263__$1;(statearr_10288_10327[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 14))
{var state_10263__$1 = state_10263;var statearr_10289_10328 = state_10263__$1;(statearr_10289_10328[2] = null);
(statearr_10289_10328[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 15))
{var inst_10236 = (state_10263[2]);var state_10263__$1 = state_10263;var statearr_10290_10329 = state_10263__$1;(statearr_10290_10329[2] = inst_10236);
(statearr_10290_10329[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 16))
{var inst_10218 = (state_10263[15]);var inst_10222 = cljs.core.chunk_first.call(null,inst_10218);var inst_10223 = cljs.core.chunk_rest.call(null,inst_10218);var inst_10224 = cljs.core.count.call(null,inst_10222);var inst_10204 = inst_10223;var inst_10205 = inst_10222;var inst_10206 = inst_10224;var inst_10207 = 0;var state_10263__$1 = (function (){var statearr_10291 = state_10263;(statearr_10291[8] = inst_10204);
(statearr_10291[9] = inst_10205);
(statearr_10291[10] = inst_10207);
(statearr_10291[11] = inst_10206);
return statearr_10291;
})();var statearr_10292_10330 = state_10263__$1;(statearr_10292_10330[2] = null);
(statearr_10292_10330[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 17))
{var inst_10218 = (state_10263[15]);var inst_10227 = cljs.core.first.call(null,inst_10218);var inst_10228 = cljs.core.async.muxch_STAR_.call(null,inst_10227);var inst_10229 = cljs.core.async.close_BANG_.call(null,inst_10228);var inst_10230 = cljs.core.next.call(null,inst_10218);var inst_10204 = inst_10230;var inst_10205 = null;var inst_10206 = 0;var inst_10207 = 0;var state_10263__$1 = (function (){var statearr_10293 = state_10263;(statearr_10293[8] = inst_10204);
(statearr_10293[9] = inst_10205);
(statearr_10293[16] = inst_10229);
(statearr_10293[10] = inst_10207);
(statearr_10293[11] = inst_10206);
return statearr_10293;
})();var statearr_10294_10331 = state_10263__$1;(statearr_10294_10331[2] = null);
(statearr_10294_10331[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 18))
{var inst_10233 = (state_10263[2]);var state_10263__$1 = state_10263;var statearr_10295_10332 = state_10263__$1;(statearr_10295_10332[2] = inst_10233);
(statearr_10295_10332[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 19))
{var inst_10244 = (state_10263[12]);var inst_10194 = (state_10263[7]);var inst_10246 = cljs.core.async.muxch_STAR_.call(null,inst_10244);var state_10263__$1 = state_10263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10263__$1,22,inst_10246,inst_10194);
} else
{if((state_val_10264 === 20))
{var state_10263__$1 = state_10263;var statearr_10296_10333 = state_10263__$1;(statearr_10296_10333[2] = null);
(statearr_10296_10333[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 21))
{var inst_10256 = (state_10263[2]);var state_10263__$1 = (function (){var statearr_10297 = state_10263;(statearr_10297[17] = inst_10256);
return statearr_10297;
})();var statearr_10298_10334 = state_10263__$1;(statearr_10298_10334[2] = null);
(statearr_10298_10334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 22))
{var inst_10248 = (state_10263[2]);var state_10263__$1 = state_10263;if(cljs.core.truth_(inst_10248))
{var statearr_10299_10335 = state_10263__$1;(statearr_10299_10335[1] = 23);
} else
{var statearr_10300_10336 = state_10263__$1;(statearr_10300_10336[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 23))
{var state_10263__$1 = state_10263;var statearr_10301_10337 = state_10263__$1;(statearr_10301_10337[2] = null);
(statearr_10301_10337[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 24))
{var inst_10242 = (state_10263[13]);var inst_10251 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10242);var state_10263__$1 = state_10263;var statearr_10302_10338 = state_10263__$1;(statearr_10302_10338[2] = inst_10251);
(statearr_10302_10338[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10264 === 25))
{var inst_10253 = (state_10263[2]);var state_10263__$1 = state_10263;var statearr_10303_10339 = state_10263__$1;(statearr_10303_10339[2] = inst_10253);
(statearr_10303_10339[1] = 21);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_10307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10307[0] = state_machine__5525__auto__);
(statearr_10307[1] = 1);
return statearr_10307;
});
var state_machine__5525__auto____1 = (function (state_10263){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_10263);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e10308){if((e10308 instanceof Object))
{var ex__5528__auto__ = e10308;var statearr_10309_10340 = state_10263;(statearr_10309_10340[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10341 = state_10263;
state_10263 = G__10341;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_10263){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_10263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_10310 = f__5540__auto__.call(null);(statearr_10310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___10311);
return statearr_10310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5539__auto___10478 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_10448){var state_val_10449 = (state_10448[1]);if((state_val_10449 === 1))
{var state_10448__$1 = state_10448;var statearr_10450_10479 = state_10448__$1;(statearr_10450_10479[2] = null);
(statearr_10450_10479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 2))
{var inst_10411 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10412 = 0;var state_10448__$1 = (function (){var statearr_10451 = state_10448;(statearr_10451[7] = inst_10411);
(statearr_10451[8] = inst_10412);
return statearr_10451;
})();var statearr_10452_10480 = state_10448__$1;(statearr_10452_10480[2] = null);
(statearr_10452_10480[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 3))
{var inst_10446 = (state_10448[2]);var state_10448__$1 = state_10448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10448__$1,inst_10446);
} else
{if((state_val_10449 === 4))
{var inst_10412 = (state_10448[8]);var inst_10414 = (inst_10412 < cnt);var state_10448__$1 = state_10448;if(cljs.core.truth_(inst_10414))
{var statearr_10453_10481 = state_10448__$1;(statearr_10453_10481[1] = 6);
} else
{var statearr_10454_10482 = state_10448__$1;(statearr_10454_10482[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 5))
{var inst_10432 = (state_10448[2]);var state_10448__$1 = (function (){var statearr_10455 = state_10448;(statearr_10455[9] = inst_10432);
return statearr_10455;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10448__$1,12,dchan);
} else
{if((state_val_10449 === 6))
{var state_10448__$1 = state_10448;var statearr_10456_10483 = state_10448__$1;(statearr_10456_10483[2] = null);
(statearr_10456_10483[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 7))
{var state_10448__$1 = state_10448;var statearr_10457_10484 = state_10448__$1;(statearr_10457_10484[2] = null);
(statearr_10457_10484[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 8))
{var inst_10430 = (state_10448[2]);var state_10448__$1 = state_10448;var statearr_10458_10485 = state_10448__$1;(statearr_10458_10485[2] = inst_10430);
(statearr_10458_10485[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 9))
{var inst_10412 = (state_10448[8]);var inst_10425 = (state_10448[2]);var inst_10426 = (inst_10412 + 1);var inst_10412__$1 = inst_10426;var state_10448__$1 = (function (){var statearr_10459 = state_10448;(statearr_10459[10] = inst_10425);
(statearr_10459[8] = inst_10412__$1);
return statearr_10459;
})();var statearr_10460_10486 = state_10448__$1;(statearr_10460_10486[2] = null);
(statearr_10460_10486[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 10))
{var inst_10416 = (state_10448[2]);var inst_10417 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10448__$1 = (function (){var statearr_10461 = state_10448;(statearr_10461[11] = inst_10416);
return statearr_10461;
})();var statearr_10462_10487 = state_10448__$1;(statearr_10462_10487[2] = inst_10417);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10448__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 11))
{var inst_10412 = (state_10448[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10448,10,Object,null,9);var inst_10421 = chs__$1.call(null,inst_10412);var inst_10422 = done.call(null,inst_10412);var inst_10423 = cljs.core.async.take_BANG_.call(null,inst_10421,inst_10422);var state_10448__$1 = state_10448;var statearr_10463_10488 = state_10448__$1;(statearr_10463_10488[2] = inst_10423);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10448__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 12))
{var inst_10434 = (state_10448[12]);var inst_10434__$1 = (state_10448[2]);var inst_10435 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10434__$1);var state_10448__$1 = (function (){var statearr_10464 = state_10448;(statearr_10464[12] = inst_10434__$1);
return statearr_10464;
})();if(cljs.core.truth_(inst_10435))
{var statearr_10465_10489 = state_10448__$1;(statearr_10465_10489[1] = 13);
} else
{var statearr_10466_10490 = state_10448__$1;(statearr_10466_10490[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 13))
{var inst_10437 = cljs.core.async.close_BANG_.call(null,out);var state_10448__$1 = state_10448;var statearr_10467_10491 = state_10448__$1;(statearr_10467_10491[2] = inst_10437);
(statearr_10467_10491[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 14))
{var inst_10434 = (state_10448[12]);var inst_10439 = cljs.core.apply.call(null,f,inst_10434);var state_10448__$1 = state_10448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10448__$1,16,out,inst_10439);
} else
{if((state_val_10449 === 15))
{var inst_10444 = (state_10448[2]);var state_10448__$1 = state_10448;var statearr_10468_10492 = state_10448__$1;(statearr_10468_10492[2] = inst_10444);
(statearr_10468_10492[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10449 === 16))
{var inst_10441 = (state_10448[2]);var state_10448__$1 = (function (){var statearr_10469 = state_10448;(statearr_10469[13] = inst_10441);
return statearr_10469;
})();var statearr_10470_10493 = state_10448__$1;(statearr_10470_10493[2] = null);
(statearr_10470_10493[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_10474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10474[0] = state_machine__5525__auto__);
(statearr_10474[1] = 1);
return statearr_10474;
});
var state_machine__5525__auto____1 = (function (state_10448){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_10448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e10475){if((e10475 instanceof Object))
{var ex__5528__auto__ = e10475;var statearr_10476_10494 = state_10448;(statearr_10476_10494[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10495 = state_10448;
state_10448 = G__10495;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_10448){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_10448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_10477 = f__5540__auto__.call(null);(statearr_10477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___10478);
return statearr_10477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___10603 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_10579){var state_val_10580 = (state_10579[1]);if((state_val_10580 === 1))
{var inst_10550 = cljs.core.vec.call(null,chs);var inst_10551 = inst_10550;var state_10579__$1 = (function (){var statearr_10581 = state_10579;(statearr_10581[7] = inst_10551);
return statearr_10581;
})();var statearr_10582_10604 = state_10579__$1;(statearr_10582_10604[2] = null);
(statearr_10582_10604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 2))
{var inst_10551 = (state_10579[7]);var inst_10553 = cljs.core.count.call(null,inst_10551);var inst_10554 = (inst_10553 > 0);var state_10579__$1 = state_10579;if(cljs.core.truth_(inst_10554))
{var statearr_10583_10605 = state_10579__$1;(statearr_10583_10605[1] = 4);
} else
{var statearr_10584_10606 = state_10579__$1;(statearr_10584_10606[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 3))
{var inst_10577 = (state_10579[2]);var state_10579__$1 = state_10579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10579__$1,inst_10577);
} else
{if((state_val_10580 === 4))
{var inst_10551 = (state_10579[7]);var state_10579__$1 = state_10579;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10579__$1,7,inst_10551);
} else
{if((state_val_10580 === 5))
{var inst_10573 = cljs.core.async.close_BANG_.call(null,out);var state_10579__$1 = state_10579;var statearr_10585_10607 = state_10579__$1;(statearr_10585_10607[2] = inst_10573);
(statearr_10585_10607[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 6))
{var inst_10575 = (state_10579[2]);var state_10579__$1 = state_10579;var statearr_10586_10608 = state_10579__$1;(statearr_10586_10608[2] = inst_10575);
(statearr_10586_10608[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 7))
{var inst_10559 = (state_10579[8]);var inst_10558 = (state_10579[9]);var inst_10558__$1 = (state_10579[2]);var inst_10559__$1 = cljs.core.nth.call(null,inst_10558__$1,0,null);var inst_10560 = cljs.core.nth.call(null,inst_10558__$1,1,null);var inst_10561 = (inst_10559__$1 == null);var state_10579__$1 = (function (){var statearr_10587 = state_10579;(statearr_10587[10] = inst_10560);
(statearr_10587[8] = inst_10559__$1);
(statearr_10587[9] = inst_10558__$1);
return statearr_10587;
})();if(cljs.core.truth_(inst_10561))
{var statearr_10588_10609 = state_10579__$1;(statearr_10588_10609[1] = 8);
} else
{var statearr_10589_10610 = state_10579__$1;(statearr_10589_10610[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 8))
{var inst_10560 = (state_10579[10]);var inst_10559 = (state_10579[8]);var inst_10558 = (state_10579[9]);var inst_10551 = (state_10579[7]);var inst_10563 = (function (){var c = inst_10560;var v = inst_10559;var vec__10556 = inst_10558;var cs = inst_10551;return ((function (c,v,vec__10556,cs,inst_10560,inst_10559,inst_10558,inst_10551,state_val_10580){
return (function (p1__10496_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10496_SHARP_);
});
;})(c,v,vec__10556,cs,inst_10560,inst_10559,inst_10558,inst_10551,state_val_10580))
})();var inst_10564 = cljs.core.filterv.call(null,inst_10563,inst_10551);var inst_10551__$1 = inst_10564;var state_10579__$1 = (function (){var statearr_10590 = state_10579;(statearr_10590[7] = inst_10551__$1);
return statearr_10590;
})();var statearr_10591_10611 = state_10579__$1;(statearr_10591_10611[2] = null);
(statearr_10591_10611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 9))
{var inst_10559 = (state_10579[8]);var state_10579__$1 = state_10579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10579__$1,11,out,inst_10559);
} else
{if((state_val_10580 === 10))
{var inst_10571 = (state_10579[2]);var state_10579__$1 = state_10579;var statearr_10593_10612 = state_10579__$1;(statearr_10593_10612[2] = inst_10571);
(statearr_10593_10612[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 11))
{var inst_10551 = (state_10579[7]);var inst_10568 = (state_10579[2]);var tmp10592 = inst_10551;var inst_10551__$1 = tmp10592;var state_10579__$1 = (function (){var statearr_10594 = state_10579;(statearr_10594[11] = inst_10568);
(statearr_10594[7] = inst_10551__$1);
return statearr_10594;
})();var statearr_10595_10613 = state_10579__$1;(statearr_10595_10613[2] = null);
(statearr_10595_10613[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_10599 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10599[0] = state_machine__5525__auto__);
(statearr_10599[1] = 1);
return statearr_10599;
});
var state_machine__5525__auto____1 = (function (state_10579){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_10579);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e10600){if((e10600 instanceof Object))
{var ex__5528__auto__ = e10600;var statearr_10601_10614 = state_10579;(statearr_10601_10614[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10615 = state_10579;
state_10579 = G__10615;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_10579){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_10579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_10602 = f__5540__auto__.call(null);(statearr_10602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___10603);
return statearr_10602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___10708 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_10685){var state_val_10686 = (state_10685[1]);if((state_val_10686 === 1))
{var inst_10662 = 0;var state_10685__$1 = (function (){var statearr_10687 = state_10685;(statearr_10687[7] = inst_10662);
return statearr_10687;
})();var statearr_10688_10709 = state_10685__$1;(statearr_10688_10709[2] = null);
(statearr_10688_10709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10686 === 2))
{var inst_10662 = (state_10685[7]);var inst_10664 = (inst_10662 < n);var state_10685__$1 = state_10685;if(cljs.core.truth_(inst_10664))
{var statearr_10689_10710 = state_10685__$1;(statearr_10689_10710[1] = 4);
} else
{var statearr_10690_10711 = state_10685__$1;(statearr_10690_10711[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10686 === 3))
{var inst_10682 = (state_10685[2]);var inst_10683 = cljs.core.async.close_BANG_.call(null,out);var state_10685__$1 = (function (){var statearr_10691 = state_10685;(statearr_10691[8] = inst_10682);
return statearr_10691;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10685__$1,inst_10683);
} else
{if((state_val_10686 === 4))
{var state_10685__$1 = state_10685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10685__$1,7,ch);
} else
{if((state_val_10686 === 5))
{var state_10685__$1 = state_10685;var statearr_10692_10712 = state_10685__$1;(statearr_10692_10712[2] = null);
(statearr_10692_10712[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10686 === 6))
{var inst_10680 = (state_10685[2]);var state_10685__$1 = state_10685;var statearr_10693_10713 = state_10685__$1;(statearr_10693_10713[2] = inst_10680);
(statearr_10693_10713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10686 === 7))
{var inst_10667 = (state_10685[9]);var inst_10667__$1 = (state_10685[2]);var inst_10668 = (inst_10667__$1 == null);var inst_10669 = cljs.core.not.call(null,inst_10668);var state_10685__$1 = (function (){var statearr_10694 = state_10685;(statearr_10694[9] = inst_10667__$1);
return statearr_10694;
})();if(inst_10669)
{var statearr_10695_10714 = state_10685__$1;(statearr_10695_10714[1] = 8);
} else
{var statearr_10696_10715 = state_10685__$1;(statearr_10696_10715[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10686 === 8))
{var inst_10667 = (state_10685[9]);var state_10685__$1 = state_10685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10685__$1,11,out,inst_10667);
} else
{if((state_val_10686 === 9))
{var state_10685__$1 = state_10685;var statearr_10697_10716 = state_10685__$1;(statearr_10697_10716[2] = null);
(statearr_10697_10716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10686 === 10))
{var inst_10677 = (state_10685[2]);var state_10685__$1 = state_10685;var statearr_10698_10717 = state_10685__$1;(statearr_10698_10717[2] = inst_10677);
(statearr_10698_10717[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10686 === 11))
{var inst_10662 = (state_10685[7]);var inst_10672 = (state_10685[2]);var inst_10673 = (inst_10662 + 1);var inst_10662__$1 = inst_10673;var state_10685__$1 = (function (){var statearr_10699 = state_10685;(statearr_10699[10] = inst_10672);
(statearr_10699[7] = inst_10662__$1);
return statearr_10699;
})();var statearr_10700_10718 = state_10685__$1;(statearr_10700_10718[2] = null);
(statearr_10700_10718[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_10704 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10704[0] = state_machine__5525__auto__);
(statearr_10704[1] = 1);
return statearr_10704;
});
var state_machine__5525__auto____1 = (function (state_10685){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_10685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e10705){if((e10705 instanceof Object))
{var ex__5528__auto__ = e10705;var statearr_10706_10719 = state_10685;(statearr_10706_10719[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10720 = state_10685;
state_10685 = G__10720;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_10685){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_10685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_10707 = f__5540__auto__.call(null);(statearr_10707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___10708);
return statearr_10707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___10817 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_10792){var state_val_10793 = (state_10792[1]);if((state_val_10793 === 1))
{var inst_10769 = null;var state_10792__$1 = (function (){var statearr_10794 = state_10792;(statearr_10794[7] = inst_10769);
return statearr_10794;
})();var statearr_10795_10818 = state_10792__$1;(statearr_10795_10818[2] = null);
(statearr_10795_10818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 2))
{var state_10792__$1 = state_10792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10792__$1,4,ch);
} else
{if((state_val_10793 === 3))
{var inst_10789 = (state_10792[2]);var inst_10790 = cljs.core.async.close_BANG_.call(null,out);var state_10792__$1 = (function (){var statearr_10796 = state_10792;(statearr_10796[8] = inst_10789);
return statearr_10796;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10792__$1,inst_10790);
} else
{if((state_val_10793 === 4))
{var inst_10772 = (state_10792[9]);var inst_10772__$1 = (state_10792[2]);var inst_10773 = (inst_10772__$1 == null);var inst_10774 = cljs.core.not.call(null,inst_10773);var state_10792__$1 = (function (){var statearr_10797 = state_10792;(statearr_10797[9] = inst_10772__$1);
return statearr_10797;
})();if(inst_10774)
{var statearr_10798_10819 = state_10792__$1;(statearr_10798_10819[1] = 5);
} else
{var statearr_10799_10820 = state_10792__$1;(statearr_10799_10820[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 5))
{var inst_10772 = (state_10792[9]);var inst_10769 = (state_10792[7]);var inst_10776 = cljs.core._EQ_.call(null,inst_10772,inst_10769);var state_10792__$1 = state_10792;if(inst_10776)
{var statearr_10800_10821 = state_10792__$1;(statearr_10800_10821[1] = 8);
} else
{var statearr_10801_10822 = state_10792__$1;(statearr_10801_10822[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 6))
{var state_10792__$1 = state_10792;var statearr_10803_10823 = state_10792__$1;(statearr_10803_10823[2] = null);
(statearr_10803_10823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 7))
{var inst_10787 = (state_10792[2]);var state_10792__$1 = state_10792;var statearr_10804_10824 = state_10792__$1;(statearr_10804_10824[2] = inst_10787);
(statearr_10804_10824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 8))
{var inst_10769 = (state_10792[7]);var tmp10802 = inst_10769;var inst_10769__$1 = tmp10802;var state_10792__$1 = (function (){var statearr_10805 = state_10792;(statearr_10805[7] = inst_10769__$1);
return statearr_10805;
})();var statearr_10806_10825 = state_10792__$1;(statearr_10806_10825[2] = null);
(statearr_10806_10825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 9))
{var inst_10772 = (state_10792[9]);var state_10792__$1 = state_10792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10792__$1,11,out,inst_10772);
} else
{if((state_val_10793 === 10))
{var inst_10784 = (state_10792[2]);var state_10792__$1 = state_10792;var statearr_10807_10826 = state_10792__$1;(statearr_10807_10826[2] = inst_10784);
(statearr_10807_10826[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 11))
{var inst_10772 = (state_10792[9]);var inst_10781 = (state_10792[2]);var inst_10769 = inst_10772;var state_10792__$1 = (function (){var statearr_10808 = state_10792;(statearr_10808[7] = inst_10769);
(statearr_10808[10] = inst_10781);
return statearr_10808;
})();var statearr_10809_10827 = state_10792__$1;(statearr_10809_10827[2] = null);
(statearr_10809_10827[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_10813 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10813[0] = state_machine__5525__auto__);
(statearr_10813[1] = 1);
return statearr_10813;
});
var state_machine__5525__auto____1 = (function (state_10792){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_10792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e10814){if((e10814 instanceof Object))
{var ex__5528__auto__ = e10814;var statearr_10815_10828 = state_10792;(statearr_10815_10828[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10829 = state_10792;
state_10792 = G__10829;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_10792){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_10792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_10816 = f__5540__auto__.call(null);(statearr_10816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___10817);
return statearr_10816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___10964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_10934){var state_val_10935 = (state_10934[1]);if((state_val_10935 === 1))
{var inst_10897 = (new Array(n));var inst_10898 = inst_10897;var inst_10899 = 0;var state_10934__$1 = (function (){var statearr_10936 = state_10934;(statearr_10936[7] = inst_10899);
(statearr_10936[8] = inst_10898);
return statearr_10936;
})();var statearr_10937_10965 = state_10934__$1;(statearr_10937_10965[2] = null);
(statearr_10937_10965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 2))
{var state_10934__$1 = state_10934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10934__$1,4,ch);
} else
{if((state_val_10935 === 3))
{var inst_10932 = (state_10934[2]);var state_10934__$1 = state_10934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10934__$1,inst_10932);
} else
{if((state_val_10935 === 4))
{var inst_10902 = (state_10934[9]);var inst_10902__$1 = (state_10934[2]);var inst_10903 = (inst_10902__$1 == null);var inst_10904 = cljs.core.not.call(null,inst_10903);var state_10934__$1 = (function (){var statearr_10938 = state_10934;(statearr_10938[9] = inst_10902__$1);
return statearr_10938;
})();if(inst_10904)
{var statearr_10939_10966 = state_10934__$1;(statearr_10939_10966[1] = 5);
} else
{var statearr_10940_10967 = state_10934__$1;(statearr_10940_10967[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 5))
{var inst_10899 = (state_10934[7]);var inst_10907 = (state_10934[10]);var inst_10902 = (state_10934[9]);var inst_10898 = (state_10934[8]);var inst_10906 = (inst_10898[inst_10899] = inst_10902);var inst_10907__$1 = (inst_10899 + 1);var inst_10908 = (inst_10907__$1 < n);var state_10934__$1 = (function (){var statearr_10941 = state_10934;(statearr_10941[10] = inst_10907__$1);
(statearr_10941[11] = inst_10906);
return statearr_10941;
})();if(cljs.core.truth_(inst_10908))
{var statearr_10942_10968 = state_10934__$1;(statearr_10942_10968[1] = 8);
} else
{var statearr_10943_10969 = state_10934__$1;(statearr_10943_10969[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 6))
{var inst_10899 = (state_10934[7]);var inst_10920 = (inst_10899 > 0);var state_10934__$1 = state_10934;if(cljs.core.truth_(inst_10920))
{var statearr_10945_10970 = state_10934__$1;(statearr_10945_10970[1] = 12);
} else
{var statearr_10946_10971 = state_10934__$1;(statearr_10946_10971[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 7))
{var inst_10930 = (state_10934[2]);var state_10934__$1 = state_10934;var statearr_10947_10972 = state_10934__$1;(statearr_10947_10972[2] = inst_10930);
(statearr_10947_10972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 8))
{var inst_10907 = (state_10934[10]);var inst_10898 = (state_10934[8]);var tmp10944 = inst_10898;var inst_10898__$1 = tmp10944;var inst_10899 = inst_10907;var state_10934__$1 = (function (){var statearr_10948 = state_10934;(statearr_10948[7] = inst_10899);
(statearr_10948[8] = inst_10898__$1);
return statearr_10948;
})();var statearr_10949_10973 = state_10934__$1;(statearr_10949_10973[2] = null);
(statearr_10949_10973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 9))
{var inst_10898 = (state_10934[8]);var inst_10912 = cljs.core.vec.call(null,inst_10898);var state_10934__$1 = state_10934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10934__$1,11,out,inst_10912);
} else
{if((state_val_10935 === 10))
{var inst_10918 = (state_10934[2]);var state_10934__$1 = state_10934;var statearr_10950_10974 = state_10934__$1;(statearr_10950_10974[2] = inst_10918);
(statearr_10950_10974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 11))
{var inst_10914 = (state_10934[2]);var inst_10915 = (new Array(n));var inst_10898 = inst_10915;var inst_10899 = 0;var state_10934__$1 = (function (){var statearr_10951 = state_10934;(statearr_10951[7] = inst_10899);
(statearr_10951[12] = inst_10914);
(statearr_10951[8] = inst_10898);
return statearr_10951;
})();var statearr_10952_10975 = state_10934__$1;(statearr_10952_10975[2] = null);
(statearr_10952_10975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 12))
{var inst_10898 = (state_10934[8]);var inst_10922 = cljs.core.vec.call(null,inst_10898);var state_10934__$1 = state_10934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10934__$1,15,out,inst_10922);
} else
{if((state_val_10935 === 13))
{var state_10934__$1 = state_10934;var statearr_10953_10976 = state_10934__$1;(statearr_10953_10976[2] = null);
(statearr_10953_10976[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 14))
{var inst_10927 = (state_10934[2]);var inst_10928 = cljs.core.async.close_BANG_.call(null,out);var state_10934__$1 = (function (){var statearr_10954 = state_10934;(statearr_10954[13] = inst_10927);
return statearr_10954;
})();var statearr_10955_10977 = state_10934__$1;(statearr_10955_10977[2] = inst_10928);
(statearr_10955_10977[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10935 === 15))
{var inst_10924 = (state_10934[2]);var state_10934__$1 = state_10934;var statearr_10956_10978 = state_10934__$1;(statearr_10956_10978[2] = inst_10924);
(statearr_10956_10978[1] = 14);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_10960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10960[0] = state_machine__5525__auto__);
(statearr_10960[1] = 1);
return statearr_10960;
});
var state_machine__5525__auto____1 = (function (state_10934){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_10934);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e10961){if((e10961 instanceof Object))
{var ex__5528__auto__ = e10961;var statearr_10962_10979 = state_10934;(statearr_10962_10979[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10934);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10980 = state_10934;
state_10934 = G__10980;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_10934){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_10934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_10963 = f__5540__auto__.call(null);(statearr_10963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___10964);
return statearr_10963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___11123 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_11093){var state_val_11094 = (state_11093[1]);if((state_val_11094 === 1))
{var inst_11052 = [];var inst_11053 = inst_11052;var inst_11054 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11093__$1 = (function (){var statearr_11095 = state_11093;(statearr_11095[7] = inst_11054);
(statearr_11095[8] = inst_11053);
return statearr_11095;
})();var statearr_11096_11124 = state_11093__$1;(statearr_11096_11124[2] = null);
(statearr_11096_11124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 2))
{var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11093__$1,4,ch);
} else
{if((state_val_11094 === 3))
{var inst_11091 = (state_11093[2]);var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11093__$1,inst_11091);
} else
{if((state_val_11094 === 4))
{var inst_11057 = (state_11093[9]);var inst_11057__$1 = (state_11093[2]);var inst_11058 = (inst_11057__$1 == null);var inst_11059 = cljs.core.not.call(null,inst_11058);var state_11093__$1 = (function (){var statearr_11097 = state_11093;(statearr_11097[9] = inst_11057__$1);
return statearr_11097;
})();if(inst_11059)
{var statearr_11098_11125 = state_11093__$1;(statearr_11098_11125[1] = 5);
} else
{var statearr_11099_11126 = state_11093__$1;(statearr_11099_11126[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 5))
{var inst_11054 = (state_11093[7]);var inst_11057 = (state_11093[9]);var inst_11061 = (state_11093[10]);var inst_11061__$1 = f.call(null,inst_11057);var inst_11062 = cljs.core._EQ_.call(null,inst_11061__$1,inst_11054);var inst_11063 = cljs.core.keyword_identical_QMARK_.call(null,inst_11054,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11064 = (inst_11062) || (inst_11063);var state_11093__$1 = (function (){var statearr_11100 = state_11093;(statearr_11100[10] = inst_11061__$1);
return statearr_11100;
})();if(cljs.core.truth_(inst_11064))
{var statearr_11101_11127 = state_11093__$1;(statearr_11101_11127[1] = 8);
} else
{var statearr_11102_11128 = state_11093__$1;(statearr_11102_11128[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 6))
{var inst_11053 = (state_11093[8]);var inst_11078 = inst_11053.length;var inst_11079 = (inst_11078 > 0);var state_11093__$1 = state_11093;if(cljs.core.truth_(inst_11079))
{var statearr_11104_11129 = state_11093__$1;(statearr_11104_11129[1] = 12);
} else
{var statearr_11105_11130 = state_11093__$1;(statearr_11105_11130[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 7))
{var inst_11089 = (state_11093[2]);var state_11093__$1 = state_11093;var statearr_11106_11131 = state_11093__$1;(statearr_11106_11131[2] = inst_11089);
(statearr_11106_11131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 8))
{var inst_11053 = (state_11093[8]);var inst_11057 = (state_11093[9]);var inst_11061 = (state_11093[10]);var inst_11066 = inst_11053.push(inst_11057);var tmp11103 = inst_11053;var inst_11053__$1 = tmp11103;var inst_11054 = inst_11061;var state_11093__$1 = (function (){var statearr_11107 = state_11093;(statearr_11107[7] = inst_11054);
(statearr_11107[8] = inst_11053__$1);
(statearr_11107[11] = inst_11066);
return statearr_11107;
})();var statearr_11108_11132 = state_11093__$1;(statearr_11108_11132[2] = null);
(statearr_11108_11132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 9))
{var inst_11053 = (state_11093[8]);var inst_11069 = cljs.core.vec.call(null,inst_11053);var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11093__$1,11,out,inst_11069);
} else
{if((state_val_11094 === 10))
{var inst_11076 = (state_11093[2]);var state_11093__$1 = state_11093;var statearr_11109_11133 = state_11093__$1;(statearr_11109_11133[2] = inst_11076);
(statearr_11109_11133[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 11))
{var inst_11057 = (state_11093[9]);var inst_11061 = (state_11093[10]);var inst_11071 = (state_11093[2]);var inst_11072 = [];var inst_11073 = inst_11072.push(inst_11057);var inst_11053 = inst_11072;var inst_11054 = inst_11061;var state_11093__$1 = (function (){var statearr_11110 = state_11093;(statearr_11110[7] = inst_11054);
(statearr_11110[8] = inst_11053);
(statearr_11110[12] = inst_11071);
(statearr_11110[13] = inst_11073);
return statearr_11110;
})();var statearr_11111_11134 = state_11093__$1;(statearr_11111_11134[2] = null);
(statearr_11111_11134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 12))
{var inst_11053 = (state_11093[8]);var inst_11081 = cljs.core.vec.call(null,inst_11053);var state_11093__$1 = state_11093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11093__$1,15,out,inst_11081);
} else
{if((state_val_11094 === 13))
{var state_11093__$1 = state_11093;var statearr_11112_11135 = state_11093__$1;(statearr_11112_11135[2] = null);
(statearr_11112_11135[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 14))
{var inst_11086 = (state_11093[2]);var inst_11087 = cljs.core.async.close_BANG_.call(null,out);var state_11093__$1 = (function (){var statearr_11113 = state_11093;(statearr_11113[14] = inst_11086);
return statearr_11113;
})();var statearr_11114_11136 = state_11093__$1;(statearr_11114_11136[2] = inst_11087);
(statearr_11114_11136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11094 === 15))
{var inst_11083 = (state_11093[2]);var state_11093__$1 = state_11093;var statearr_11115_11137 = state_11093__$1;(statearr_11115_11137[2] = inst_11083);
(statearr_11115_11137[1] = 14);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_11119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11119[0] = state_machine__5525__auto__);
(statearr_11119[1] = 1);
return statearr_11119;
});
var state_machine__5525__auto____1 = (function (state_11093){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_11093);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e11120){if((e11120 instanceof Object))
{var ex__5528__auto__ = e11120;var statearr_11121_11138 = state_11093;(statearr_11121_11138[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11139 = state_11093;
state_11093 = G__11139;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_11093){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_11093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_11122 = f__5540__auto__.call(null);(statearr_11122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___11123);
return statearr_11122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
