// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t8747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8747 = (function (f,fn_handler,meta8748){
this.f = f;
this.fn_handler = fn_handler;
this.meta8748 = meta8748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8747.cljs$lang$type = true;
cljs.core.async.t8747.cljs$lang$ctorStr = "cljs.core.async/t8747";
cljs.core.async.t8747.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8747");
});
cljs.core.async.t8747.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t8747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t8747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8749){var self__ = this;
var _8749__$1 = this;return self__.meta8748;
});
cljs.core.async.t8747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8749,meta8748__$1){var self__ = this;
var _8749__$1 = this;return (new cljs.core.async.t8747(self__.f,self__.fn_handler,meta8748__$1));
});
cljs.core.async.__GT_t8747 = (function __GT_t8747(f__$1,fn_handler__$1,meta8748){return (new cljs.core.async.t8747(f__$1,fn_handler__$1,meta8748));
});
}
return (new cljs.core.async.t8747(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__8751 = buff;if(G__8751)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__8751.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__8751.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8751);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8751);
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
{var val_8752 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_8752);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_8752);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___8753 = n;var x_8754 = 0;while(true){
if((x_8754 < n__4291__auto___8753))
{(a[x_8754] = 0);
{
var G__8755 = (x_8754 + 1);
x_8754 = G__8755;
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
var G__8756 = (i + 1);
i = G__8756;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t8760 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8760 = (function (flag,alt_flag,meta8761){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta8761 = meta8761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8760.cljs$lang$type = true;
cljs.core.async.t8760.cljs$lang$ctorStr = "cljs.core.async/t8760";
cljs.core.async.t8760.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8760");
});
cljs.core.async.t8760.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t8760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t8760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8762){var self__ = this;
var _8762__$1 = this;return self__.meta8761;
});
cljs.core.async.t8760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8762,meta8761__$1){var self__ = this;
var _8762__$1 = this;return (new cljs.core.async.t8760(self__.flag,self__.alt_flag,meta8761__$1));
});
cljs.core.async.__GT_t8760 = (function __GT_t8760(flag__$1,alt_flag__$1,meta8761){return (new cljs.core.async.t8760(flag__$1,alt_flag__$1,meta8761));
});
}
return (new cljs.core.async.t8760(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t8766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8766 = (function (cb,flag,alt_handler,meta8767){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta8767 = meta8767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8766.cljs$lang$type = true;
cljs.core.async.t8766.cljs$lang$ctorStr = "cljs.core.async/t8766";
cljs.core.async.t8766.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8766");
});
cljs.core.async.t8766.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t8766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t8766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8768){var self__ = this;
var _8768__$1 = this;return self__.meta8767;
});
cljs.core.async.t8766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8768,meta8767__$1){var self__ = this;
var _8768__$1 = this;return (new cljs.core.async.t8766(self__.cb,self__.flag,self__.alt_handler,meta8767__$1));
});
cljs.core.async.__GT_t8766 = (function __GT_t8766(cb__$1,flag__$1,alt_handler__$1,meta8767){return (new cljs.core.async.t8766(cb__$1,flag__$1,alt_handler__$1,meta8767));
});
}
return (new cljs.core.async.t8766(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8769_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8769_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8770_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8770_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__8771 = (i + 1);
i = G__8771;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
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
var alts_BANG___delegate = function (ports,p__8772){var map__8774 = p__8772;var map__8774__$1 = ((cljs.core.seq_QMARK_.call(null,map__8774))?cljs.core.apply.call(null,cljs.core.hash_map,map__8774):map__8774);var opts = map__8774__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__8772 = null;if (arguments.length > 1) {
  p__8772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__8772);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__8775){
var ports = cljs.core.first(arglist__8775);
var p__8772 = cljs.core.rest(arglist__8775);
return alts_BANG___delegate(ports,p__8772);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t8783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8783 = (function (ch,f,map_LT_,meta8784){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8784 = meta8784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8783.cljs$lang$type = true;
cljs.core.async.t8783.cljs$lang$ctorStr = "cljs.core.async/t8783";
cljs.core.async.t8783.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8783");
});
cljs.core.async.t8783.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t8783.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t8786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8786 = (function (fn1,_,meta8784,ch,f,map_LT_,meta8787){
this.fn1 = fn1;
this._ = _;
this.meta8784 = meta8784;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8787 = meta8787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8786.cljs$lang$type = true;
cljs.core.async.t8786.cljs$lang$ctorStr = "cljs.core.async/t8786";
cljs.core.async.t8786.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8786");
});
cljs.core.async.t8786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t8786.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t8786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__8776_SHARP_){return f1.call(null,(((p1__8776_SHARP_ == null))?null:self__.f.call(null,p1__8776_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t8786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8788){var self__ = this;
var _8788__$1 = this;return self__.meta8787;
});
cljs.core.async.t8786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8788,meta8787__$1){var self__ = this;
var _8788__$1 = this;return (new cljs.core.async.t8786(self__.fn1,self__._,self__.meta8784,self__.ch,self__.f,self__.map_LT_,meta8787__$1));
});
cljs.core.async.__GT_t8786 = (function __GT_t8786(fn1__$1,___$2,meta8784__$1,ch__$2,f__$2,map_LT___$2,meta8787){return (new cljs.core.async.t8786(fn1__$1,___$2,meta8784__$1,ch__$2,f__$2,map_LT___$2,meta8787));
});
}
return (new cljs.core.async.t8786(fn1,___$1,self__.meta8784,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t8783.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t8783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8785){var self__ = this;
var _8785__$1 = this;return self__.meta8784;
});
cljs.core.async.t8783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8785,meta8784__$1){var self__ = this;
var _8785__$1 = this;return (new cljs.core.async.t8783(self__.ch,self__.f,self__.map_LT_,meta8784__$1));
});
cljs.core.async.__GT_t8783 = (function __GT_t8783(ch__$1,f__$1,map_LT___$1,meta8784){return (new cljs.core.async.t8783(ch__$1,f__$1,map_LT___$1,meta8784));
});
}
return (new cljs.core.async.t8783(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t8792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8792 = (function (ch,f,map_GT_,meta8793){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta8793 = meta8793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8792.cljs$lang$type = true;
cljs.core.async.t8792.cljs$lang$ctorStr = "cljs.core.async/t8792";
cljs.core.async.t8792.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8792");
});
cljs.core.async.t8792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t8792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8792.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8794){var self__ = this;
var _8794__$1 = this;return self__.meta8793;
});
cljs.core.async.t8792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8794,meta8793__$1){var self__ = this;
var _8794__$1 = this;return (new cljs.core.async.t8792(self__.ch,self__.f,self__.map_GT_,meta8793__$1));
});
cljs.core.async.__GT_t8792 = (function __GT_t8792(ch__$1,f__$1,map_GT___$1,meta8793){return (new cljs.core.async.t8792(ch__$1,f__$1,map_GT___$1,meta8793));
});
}
return (new cljs.core.async.t8792(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t8798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8798 = (function (ch,p,filter_GT_,meta8799){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta8799 = meta8799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8798.cljs$lang$type = true;
cljs.core.async.t8798.cljs$lang$ctorStr = "cljs.core.async/t8798";
cljs.core.async.t8798.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8798");
});
cljs.core.async.t8798.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t8798.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8798.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8798.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t8798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8800){var self__ = this;
var _8800__$1 = this;return self__.meta8799;
});
cljs.core.async.t8798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8800,meta8799__$1){var self__ = this;
var _8800__$1 = this;return (new cljs.core.async.t8798(self__.ch,self__.p,self__.filter_GT_,meta8799__$1));
});
cljs.core.async.__GT_t8798 = (function __GT_t8798(ch__$1,p__$1,filter_GT___$1,meta8799){return (new cljs.core.async.t8798(ch__$1,p__$1,filter_GT___$1,meta8799));
});
}
return (new cljs.core.async.t8798(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6160__auto___8883 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_8862){var state_val_8863 = (state_8862[1]);if((state_val_8863 === 1))
{var state_8862__$1 = state_8862;var statearr_8864_8884 = state_8862__$1;(statearr_8864_8884[2] = null);
(statearr_8864_8884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8863 === 2))
{var state_8862__$1 = state_8862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8862__$1,4,ch);
} else
{if((state_val_8863 === 3))
{var inst_8860 = (state_8862[2]);var state_8862__$1 = state_8862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8862__$1,inst_8860);
} else
{if((state_val_8863 === 4))
{var inst_8844 = (state_8862[7]);var inst_8844__$1 = (state_8862[2]);var inst_8845 = (inst_8844__$1 == null);var state_8862__$1 = (function (){var statearr_8865 = state_8862;(statearr_8865[7] = inst_8844__$1);
return statearr_8865;
})();if(cljs.core.truth_(inst_8845))
{var statearr_8866_8885 = state_8862__$1;(statearr_8866_8885[1] = 5);
} else
{var statearr_8867_8886 = state_8862__$1;(statearr_8867_8886[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8863 === 5))
{var inst_8847 = cljs.core.async.close_BANG_.call(null,out);var state_8862__$1 = state_8862;var statearr_8868_8887 = state_8862__$1;(statearr_8868_8887[2] = inst_8847);
(statearr_8868_8887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8863 === 6))
{var inst_8844 = (state_8862[7]);var inst_8849 = p.call(null,inst_8844);var state_8862__$1 = state_8862;if(cljs.core.truth_(inst_8849))
{var statearr_8869_8888 = state_8862__$1;(statearr_8869_8888[1] = 8);
} else
{var statearr_8870_8889 = state_8862__$1;(statearr_8870_8889[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8863 === 7))
{var inst_8858 = (state_8862[2]);var state_8862__$1 = state_8862;var statearr_8871_8890 = state_8862__$1;(statearr_8871_8890[2] = inst_8858);
(statearr_8871_8890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8863 === 8))
{var inst_8844 = (state_8862[7]);var state_8862__$1 = state_8862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8862__$1,11,out,inst_8844);
} else
{if((state_val_8863 === 9))
{var state_8862__$1 = state_8862;var statearr_8872_8891 = state_8862__$1;(statearr_8872_8891[2] = null);
(statearr_8872_8891[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8863 === 10))
{var inst_8855 = (state_8862[2]);var state_8862__$1 = (function (){var statearr_8873 = state_8862;(statearr_8873[8] = inst_8855);
return statearr_8873;
})();var statearr_8874_8892 = state_8862__$1;(statearr_8874_8892[2] = null);
(statearr_8874_8892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8863 === 11))
{var inst_8852 = (state_8862[2]);var state_8862__$1 = state_8862;var statearr_8875_8893 = state_8862__$1;(statearr_8875_8893[2] = inst_8852);
(statearr_8875_8893[1] = 10);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_8879 = [null,null,null,null,null,null,null,null,null];(statearr_8879[0] = state_machine__6146__auto__);
(statearr_8879[1] = 1);
return statearr_8879;
});
var state_machine__6146__auto____1 = (function (state_8862){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_8862);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e8880){if((e8880 instanceof Object))
{var ex__6149__auto__ = e8880;var statearr_8881_8894 = state_8862;(statearr_8881_8894[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8862);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8895 = state_8862;
state_8862 = G__8895;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_8862){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_8862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_8882 = f__6161__auto__.call(null);(statearr_8882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___8883);
return statearr_8882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6160__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_9061){var state_val_9062 = (state_9061[1]);if((state_val_9062 === 1))
{var state_9061__$1 = state_9061;var statearr_9063_9104 = state_9061__$1;(statearr_9063_9104[2] = null);
(statearr_9063_9104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 2))
{var state_9061__$1 = state_9061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9061__$1,4,in$);
} else
{if((state_val_9062 === 3))
{var inst_9059 = (state_9061[2]);var state_9061__$1 = state_9061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9061__$1,inst_9059);
} else
{if((state_val_9062 === 4))
{var inst_9002 = (state_9061[7]);var inst_9002__$1 = (state_9061[2]);var inst_9003 = (inst_9002__$1 == null);var state_9061__$1 = (function (){var statearr_9064 = state_9061;(statearr_9064[7] = inst_9002__$1);
return statearr_9064;
})();if(cljs.core.truth_(inst_9003))
{var statearr_9065_9105 = state_9061__$1;(statearr_9065_9105[1] = 5);
} else
{var statearr_9066_9106 = state_9061__$1;(statearr_9066_9106[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 5))
{var inst_9005 = cljs.core.async.close_BANG_.call(null,out);var state_9061__$1 = state_9061;var statearr_9067_9107 = state_9061__$1;(statearr_9067_9107[2] = inst_9005);
(statearr_9067_9107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 6))
{var inst_9002 = (state_9061[7]);var inst_9011 = f.call(null,inst_9002);var inst_9012 = cljs.core.seq.call(null,inst_9011);var inst_9013 = inst_9012;var inst_9014 = null;var inst_9015 = 0;var inst_9016 = 0;var state_9061__$1 = (function (){var statearr_9068 = state_9061;(statearr_9068[8] = inst_9015);
(statearr_9068[9] = inst_9016);
(statearr_9068[10] = inst_9014);
(statearr_9068[11] = inst_9013);
return statearr_9068;
})();var statearr_9069_9108 = state_9061__$1;(statearr_9069_9108[2] = null);
(statearr_9069_9108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 7))
{var inst_9057 = (state_9061[2]);var state_9061__$1 = state_9061;var statearr_9070_9109 = state_9061__$1;(statearr_9070_9109[2] = inst_9057);
(statearr_9070_9109[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 8))
{var inst_9015 = (state_9061[8]);var inst_9016 = (state_9061[9]);var inst_9018 = (inst_9016 < inst_9015);var inst_9019 = inst_9018;var state_9061__$1 = state_9061;if(cljs.core.truth_(inst_9019))
{var statearr_9071_9110 = state_9061__$1;(statearr_9071_9110[1] = 10);
} else
{var statearr_9072_9111 = state_9061__$1;(statearr_9072_9111[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 9))
{var inst_9049 = (state_9061[2]);var inst_9050 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_9061__$1 = (function (){var statearr_9073 = state_9061;(statearr_9073[12] = inst_9049);
return statearr_9073;
})();if(cljs.core.truth_(inst_9050))
{var statearr_9074_9112 = state_9061__$1;(statearr_9074_9112[1] = 21);
} else
{var statearr_9075_9113 = state_9061__$1;(statearr_9075_9113[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 10))
{var inst_9016 = (state_9061[9]);var inst_9014 = (state_9061[10]);var inst_9021 = cljs.core._nth.call(null,inst_9014,inst_9016);var state_9061__$1 = state_9061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9061__$1,13,out,inst_9021);
} else
{if((state_val_9062 === 11))
{var inst_9027 = (state_9061[13]);var inst_9013 = (state_9061[11]);var inst_9027__$1 = cljs.core.seq.call(null,inst_9013);var state_9061__$1 = (function (){var statearr_9079 = state_9061;(statearr_9079[13] = inst_9027__$1);
return statearr_9079;
})();if(inst_9027__$1)
{var statearr_9080_9114 = state_9061__$1;(statearr_9080_9114[1] = 14);
} else
{var statearr_9081_9115 = state_9061__$1;(statearr_9081_9115[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 12))
{var inst_9047 = (state_9061[2]);var state_9061__$1 = state_9061;var statearr_9082_9116 = state_9061__$1;(statearr_9082_9116[2] = inst_9047);
(statearr_9082_9116[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 13))
{var inst_9015 = (state_9061[8]);var inst_9016 = (state_9061[9]);var inst_9014 = (state_9061[10]);var inst_9013 = (state_9061[11]);var inst_9023 = (state_9061[2]);var inst_9024 = (inst_9016 + 1);var tmp9076 = inst_9015;var tmp9077 = inst_9014;var tmp9078 = inst_9013;var inst_9013__$1 = tmp9078;var inst_9014__$1 = tmp9077;var inst_9015__$1 = tmp9076;var inst_9016__$1 = inst_9024;var state_9061__$1 = (function (){var statearr_9083 = state_9061;(statearr_9083[14] = inst_9023);
(statearr_9083[8] = inst_9015__$1);
(statearr_9083[9] = inst_9016__$1);
(statearr_9083[10] = inst_9014__$1);
(statearr_9083[11] = inst_9013__$1);
return statearr_9083;
})();var statearr_9084_9117 = state_9061__$1;(statearr_9084_9117[2] = null);
(statearr_9084_9117[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 14))
{var inst_9027 = (state_9061[13]);var inst_9029 = cljs.core.chunked_seq_QMARK_.call(null,inst_9027);var state_9061__$1 = state_9061;if(inst_9029)
{var statearr_9085_9118 = state_9061__$1;(statearr_9085_9118[1] = 17);
} else
{var statearr_9086_9119 = state_9061__$1;(statearr_9086_9119[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 15))
{var state_9061__$1 = state_9061;var statearr_9087_9120 = state_9061__$1;(statearr_9087_9120[2] = null);
(statearr_9087_9120[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 16))
{var inst_9045 = (state_9061[2]);var state_9061__$1 = state_9061;var statearr_9088_9121 = state_9061__$1;(statearr_9088_9121[2] = inst_9045);
(statearr_9088_9121[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 17))
{var inst_9027 = (state_9061[13]);var inst_9031 = cljs.core.chunk_first.call(null,inst_9027);var inst_9032 = cljs.core.chunk_rest.call(null,inst_9027);var inst_9033 = cljs.core.count.call(null,inst_9031);var inst_9013 = inst_9032;var inst_9014 = inst_9031;var inst_9015 = inst_9033;var inst_9016 = 0;var state_9061__$1 = (function (){var statearr_9089 = state_9061;(statearr_9089[8] = inst_9015);
(statearr_9089[9] = inst_9016);
(statearr_9089[10] = inst_9014);
(statearr_9089[11] = inst_9013);
return statearr_9089;
})();var statearr_9090_9122 = state_9061__$1;(statearr_9090_9122[2] = null);
(statearr_9090_9122[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 18))
{var inst_9027 = (state_9061[13]);var inst_9036 = cljs.core.first.call(null,inst_9027);var state_9061__$1 = state_9061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9061__$1,20,out,inst_9036);
} else
{if((state_val_9062 === 19))
{var inst_9042 = (state_9061[2]);var state_9061__$1 = state_9061;var statearr_9091_9123 = state_9061__$1;(statearr_9091_9123[2] = inst_9042);
(statearr_9091_9123[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 20))
{var inst_9027 = (state_9061[13]);var inst_9038 = (state_9061[2]);var inst_9039 = cljs.core.next.call(null,inst_9027);var inst_9013 = inst_9039;var inst_9014 = null;var inst_9015 = 0;var inst_9016 = 0;var state_9061__$1 = (function (){var statearr_9092 = state_9061;(statearr_9092[15] = inst_9038);
(statearr_9092[8] = inst_9015);
(statearr_9092[9] = inst_9016);
(statearr_9092[10] = inst_9014);
(statearr_9092[11] = inst_9013);
return statearr_9092;
})();var statearr_9093_9124 = state_9061__$1;(statearr_9093_9124[2] = null);
(statearr_9093_9124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 21))
{var state_9061__$1 = state_9061;var statearr_9094_9125 = state_9061__$1;(statearr_9094_9125[2] = null);
(statearr_9094_9125[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 22))
{var state_9061__$1 = state_9061;var statearr_9095_9126 = state_9061__$1;(statearr_9095_9126[2] = null);
(statearr_9095_9126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9062 === 23))
{var inst_9055 = (state_9061[2]);var state_9061__$1 = state_9061;var statearr_9096_9127 = state_9061__$1;(statearr_9096_9127[2] = inst_9055);
(statearr_9096_9127[1] = 7);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_9100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9100[0] = state_machine__6146__auto__);
(statearr_9100[1] = 1);
return statearr_9100;
});
var state_machine__6146__auto____1 = (function (state_9061){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_9061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e9101){if((e9101 instanceof Object))
{var ex__6149__auto__ = e9101;var statearr_9102_9128 = state_9061;(statearr_9102_9128[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9129 = state_9061;
state_9061 = G__9129;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_9061){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_9061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_9103 = f__6161__auto__.call(null);(statearr_9103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto__);
return statearr_9103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
}));
return c__6160__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6160__auto___9224 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_9200){var state_val_9201 = (state_9200[1]);if((state_val_9201 === 1))
{var state_9200__$1 = state_9200;var statearr_9202_9225 = state_9200__$1;(statearr_9202_9225[2] = null);
(statearr_9202_9225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 2))
{var state_9200__$1 = state_9200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9200__$1,4,from);
} else
{if((state_val_9201 === 3))
{var inst_9198 = (state_9200[2]);var state_9200__$1 = state_9200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9200__$1,inst_9198);
} else
{if((state_val_9201 === 4))
{var inst_9179 = (state_9200[7]);var inst_9179__$1 = (state_9200[2]);var inst_9180 = (inst_9179__$1 == null);var state_9200__$1 = (function (){var statearr_9203 = state_9200;(statearr_9203[7] = inst_9179__$1);
return statearr_9203;
})();if(cljs.core.truth_(inst_9180))
{var statearr_9204_9226 = state_9200__$1;(statearr_9204_9226[1] = 5);
} else
{var statearr_9205_9227 = state_9200__$1;(statearr_9205_9227[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 5))
{var state_9200__$1 = state_9200;if(cljs.core.truth_(close_QMARK_))
{var statearr_9206_9228 = state_9200__$1;(statearr_9206_9228[1] = 8);
} else
{var statearr_9207_9229 = state_9200__$1;(statearr_9207_9229[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 6))
{var inst_9179 = (state_9200[7]);var state_9200__$1 = state_9200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9200__$1,11,to,inst_9179);
} else
{if((state_val_9201 === 7))
{var inst_9196 = (state_9200[2]);var state_9200__$1 = state_9200;var statearr_9208_9230 = state_9200__$1;(statearr_9208_9230[2] = inst_9196);
(statearr_9208_9230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 8))
{var inst_9183 = cljs.core.async.close_BANG_.call(null,to);var state_9200__$1 = state_9200;var statearr_9209_9231 = state_9200__$1;(statearr_9209_9231[2] = inst_9183);
(statearr_9209_9231[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 9))
{var state_9200__$1 = state_9200;var statearr_9210_9232 = state_9200__$1;(statearr_9210_9232[2] = null);
(statearr_9210_9232[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 10))
{var inst_9186 = (state_9200[2]);var state_9200__$1 = state_9200;var statearr_9211_9233 = state_9200__$1;(statearr_9211_9233[2] = inst_9186);
(statearr_9211_9233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 11))
{var inst_9189 = (state_9200[2]);var state_9200__$1 = state_9200;if(cljs.core.truth_(inst_9189))
{var statearr_9212_9234 = state_9200__$1;(statearr_9212_9234[1] = 12);
} else
{var statearr_9213_9235 = state_9200__$1;(statearr_9213_9235[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 12))
{var state_9200__$1 = state_9200;var statearr_9214_9236 = state_9200__$1;(statearr_9214_9236[2] = null);
(statearr_9214_9236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 13))
{var state_9200__$1 = state_9200;var statearr_9215_9237 = state_9200__$1;(statearr_9215_9237[2] = null);
(statearr_9215_9237[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9201 === 14))
{var inst_9194 = (state_9200[2]);var state_9200__$1 = state_9200;var statearr_9216_9238 = state_9200__$1;(statearr_9216_9238[2] = inst_9194);
(statearr_9216_9238[1] = 7);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_9220 = [null,null,null,null,null,null,null,null];(statearr_9220[0] = state_machine__6146__auto__);
(statearr_9220[1] = 1);
return statearr_9220;
});
var state_machine__6146__auto____1 = (function (state_9200){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_9200);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e9221){if((e9221 instanceof Object))
{var ex__6149__auto__ = e9221;var statearr_9222_9239 = state_9200;(statearr_9222_9239[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9240 = state_9200;
state_9200 = G__9240;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_9200){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_9200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_9223 = f__6161__auto__.call(null);(statearr_9223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___9224);
return statearr_9223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6160__auto___9341 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_9316){var state_val_9317 = (state_9316[1]);if((state_val_9317 === 1))
{var state_9316__$1 = state_9316;var statearr_9318_9342 = state_9316__$1;(statearr_9318_9342[2] = null);
(statearr_9318_9342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 2))
{var state_9316__$1 = state_9316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9316__$1,4,ch);
} else
{if((state_val_9317 === 3))
{var inst_9314 = (state_9316[2]);var state_9316__$1 = state_9316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9316__$1,inst_9314);
} else
{if((state_val_9317 === 4))
{var inst_9293 = (state_9316[7]);var inst_9293__$1 = (state_9316[2]);var inst_9294 = (inst_9293__$1 == null);var state_9316__$1 = (function (){var statearr_9319 = state_9316;(statearr_9319[7] = inst_9293__$1);
return statearr_9319;
})();if(cljs.core.truth_(inst_9294))
{var statearr_9320_9343 = state_9316__$1;(statearr_9320_9343[1] = 5);
} else
{var statearr_9321_9344 = state_9316__$1;(statearr_9321_9344[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 5))
{var inst_9296 = cljs.core.async.close_BANG_.call(null,tc);var inst_9297 = cljs.core.async.close_BANG_.call(null,fc);var state_9316__$1 = (function (){var statearr_9322 = state_9316;(statearr_9322[8] = inst_9296);
return statearr_9322;
})();var statearr_9323_9345 = state_9316__$1;(statearr_9323_9345[2] = inst_9297);
(statearr_9323_9345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 6))
{var inst_9293 = (state_9316[7]);var inst_9299 = p.call(null,inst_9293);var state_9316__$1 = state_9316;if(cljs.core.truth_(inst_9299))
{var statearr_9324_9346 = state_9316__$1;(statearr_9324_9346[1] = 9);
} else
{var statearr_9325_9347 = state_9316__$1;(statearr_9325_9347[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 7))
{var inst_9312 = (state_9316[2]);var state_9316__$1 = state_9316;var statearr_9326_9348 = state_9316__$1;(statearr_9326_9348[2] = inst_9312);
(statearr_9326_9348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 8))
{var inst_9305 = (state_9316[2]);var state_9316__$1 = state_9316;if(cljs.core.truth_(inst_9305))
{var statearr_9327_9349 = state_9316__$1;(statearr_9327_9349[1] = 12);
} else
{var statearr_9328_9350 = state_9316__$1;(statearr_9328_9350[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 9))
{var state_9316__$1 = state_9316;var statearr_9329_9351 = state_9316__$1;(statearr_9329_9351[2] = tc);
(statearr_9329_9351[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 10))
{var state_9316__$1 = state_9316;var statearr_9330_9352 = state_9316__$1;(statearr_9330_9352[2] = fc);
(statearr_9330_9352[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 11))
{var inst_9293 = (state_9316[7]);var inst_9303 = (state_9316[2]);var state_9316__$1 = state_9316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9316__$1,8,inst_9303,inst_9293);
} else
{if((state_val_9317 === 12))
{var state_9316__$1 = state_9316;var statearr_9331_9353 = state_9316__$1;(statearr_9331_9353[2] = null);
(statearr_9331_9353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 13))
{var state_9316__$1 = state_9316;var statearr_9332_9354 = state_9316__$1;(statearr_9332_9354[2] = null);
(statearr_9332_9354[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9317 === 14))
{var inst_9310 = (state_9316[2]);var state_9316__$1 = state_9316;var statearr_9333_9355 = state_9316__$1;(statearr_9333_9355[2] = inst_9310);
(statearr_9333_9355[1] = 7);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_9337 = [null,null,null,null,null,null,null,null,null];(statearr_9337[0] = state_machine__6146__auto__);
(statearr_9337[1] = 1);
return statearr_9337;
});
var state_machine__6146__auto____1 = (function (state_9316){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_9316);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e9338){if((e9338 instanceof Object))
{var ex__6149__auto__ = e9338;var statearr_9339_9356 = state_9316;(statearr_9339_9356[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9357 = state_9316;
state_9316 = G__9357;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_9316){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_9316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_9340 = f__6161__auto__.call(null);(statearr_9340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___9341);
return statearr_9340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6160__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_9404){var state_val_9405 = (state_9404[1]);if((state_val_9405 === 7))
{var inst_9400 = (state_9404[2]);var state_9404__$1 = state_9404;var statearr_9406_9422 = state_9404__$1;(statearr_9406_9422[2] = inst_9400);
(statearr_9406_9422[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9405 === 6))
{var inst_9390 = (state_9404[7]);var inst_9393 = (state_9404[8]);var inst_9397 = f.call(null,inst_9390,inst_9393);var inst_9390__$1 = inst_9397;var state_9404__$1 = (function (){var statearr_9407 = state_9404;(statearr_9407[7] = inst_9390__$1);
return statearr_9407;
})();var statearr_9408_9423 = state_9404__$1;(statearr_9408_9423[2] = null);
(statearr_9408_9423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9405 === 5))
{var inst_9390 = (state_9404[7]);var state_9404__$1 = state_9404;var statearr_9409_9424 = state_9404__$1;(statearr_9409_9424[2] = inst_9390);
(statearr_9409_9424[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9405 === 4))
{var inst_9393 = (state_9404[8]);var inst_9393__$1 = (state_9404[2]);var inst_9394 = (inst_9393__$1 == null);var state_9404__$1 = (function (){var statearr_9410 = state_9404;(statearr_9410[8] = inst_9393__$1);
return statearr_9410;
})();if(cljs.core.truth_(inst_9394))
{var statearr_9411_9425 = state_9404__$1;(statearr_9411_9425[1] = 5);
} else
{var statearr_9412_9426 = state_9404__$1;(statearr_9412_9426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9405 === 3))
{var inst_9402 = (state_9404[2]);var state_9404__$1 = state_9404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9404__$1,inst_9402);
} else
{if((state_val_9405 === 2))
{var state_9404__$1 = state_9404;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9404__$1,4,ch);
} else
{if((state_val_9405 === 1))
{var inst_9390 = init;var state_9404__$1 = (function (){var statearr_9413 = state_9404;(statearr_9413[7] = inst_9390);
return statearr_9413;
})();var statearr_9414_9427 = state_9404__$1;(statearr_9414_9427[2] = null);
(statearr_9414_9427[1] = 2);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_9418 = [null,null,null,null,null,null,null,null,null];(statearr_9418[0] = state_machine__6146__auto__);
(statearr_9418[1] = 1);
return statearr_9418;
});
var state_machine__6146__auto____1 = (function (state_9404){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_9404);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e9419){if((e9419 instanceof Object))
{var ex__6149__auto__ = e9419;var statearr_9420_9428 = state_9404;(statearr_9420_9428[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9404);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9429 = state_9404;
state_9404 = G__9429;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_9404){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_9404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_9421 = f__6161__auto__.call(null);(statearr_9421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto__);
return statearr_9421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
}));
return c__6160__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6160__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_9503){var state_val_9504 = (state_9503[1]);if((state_val_9504 === 1))
{var inst_9479 = cljs.core.seq.call(null,coll);var inst_9480 = inst_9479;var state_9503__$1 = (function (){var statearr_9505 = state_9503;(statearr_9505[7] = inst_9480);
return statearr_9505;
})();var statearr_9506_9528 = state_9503__$1;(statearr_9506_9528[2] = null);
(statearr_9506_9528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 2))
{var inst_9480 = (state_9503[7]);var state_9503__$1 = state_9503;if(cljs.core.truth_(inst_9480))
{var statearr_9507_9529 = state_9503__$1;(statearr_9507_9529[1] = 4);
} else
{var statearr_9508_9530 = state_9503__$1;(statearr_9508_9530[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 3))
{var inst_9501 = (state_9503[2]);var state_9503__$1 = state_9503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9503__$1,inst_9501);
} else
{if((state_val_9504 === 4))
{var inst_9480 = (state_9503[7]);var inst_9483 = cljs.core.first.call(null,inst_9480);var state_9503__$1 = state_9503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9503__$1,7,ch,inst_9483);
} else
{if((state_val_9504 === 5))
{var inst_9480 = (state_9503[7]);var state_9503__$1 = state_9503;var statearr_9509_9531 = state_9503__$1;(statearr_9509_9531[2] = inst_9480);
(statearr_9509_9531[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 6))
{var inst_9488 = (state_9503[2]);var state_9503__$1 = state_9503;if(cljs.core.truth_(inst_9488))
{var statearr_9510_9532 = state_9503__$1;(statearr_9510_9532[1] = 8);
} else
{var statearr_9511_9533 = state_9503__$1;(statearr_9511_9533[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 7))
{var inst_9485 = (state_9503[2]);var state_9503__$1 = state_9503;var statearr_9512_9534 = state_9503__$1;(statearr_9512_9534[2] = inst_9485);
(statearr_9512_9534[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 8))
{var inst_9480 = (state_9503[7]);var inst_9490 = cljs.core.next.call(null,inst_9480);var inst_9480__$1 = inst_9490;var state_9503__$1 = (function (){var statearr_9513 = state_9503;(statearr_9513[7] = inst_9480__$1);
return statearr_9513;
})();var statearr_9514_9535 = state_9503__$1;(statearr_9514_9535[2] = null);
(statearr_9514_9535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 9))
{var state_9503__$1 = state_9503;if(cljs.core.truth_(close_QMARK_))
{var statearr_9515_9536 = state_9503__$1;(statearr_9515_9536[1] = 11);
} else
{var statearr_9516_9537 = state_9503__$1;(statearr_9516_9537[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 10))
{var inst_9499 = (state_9503[2]);var state_9503__$1 = state_9503;var statearr_9517_9538 = state_9503__$1;(statearr_9517_9538[2] = inst_9499);
(statearr_9517_9538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 11))
{var inst_9494 = cljs.core.async.close_BANG_.call(null,ch);var state_9503__$1 = state_9503;var statearr_9518_9539 = state_9503__$1;(statearr_9518_9539[2] = inst_9494);
(statearr_9518_9539[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 12))
{var state_9503__$1 = state_9503;var statearr_9519_9540 = state_9503__$1;(statearr_9519_9540[2] = null);
(statearr_9519_9540[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9504 === 13))
{var inst_9497 = (state_9503[2]);var state_9503__$1 = state_9503;var statearr_9520_9541 = state_9503__$1;(statearr_9520_9541[2] = inst_9497);
(statearr_9520_9541[1] = 10);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_9524 = [null,null,null,null,null,null,null,null];(statearr_9524[0] = state_machine__6146__auto__);
(statearr_9524[1] = 1);
return statearr_9524;
});
var state_machine__6146__auto____1 = (function (state_9503){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_9503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e9525){if((e9525 instanceof Object))
{var ex__6149__auto__ = e9525;var statearr_9526_9542 = state_9503;(statearr_9526_9542[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9543 = state_9503;
state_9503 = G__9543;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_9503){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_9503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_9527 = f__6161__auto__.call(null);(statearr_9527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto__);
return statearr_9527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
}));
return c__6160__auto__;
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
cljs.core.async.Mux = (function (){var obj9545 = {};return obj9545;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9547 = {};return obj9547;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9769 = (function (cs,ch,mult,meta9770){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9770 = meta9770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9769.cljs$lang$type = true;
cljs.core.async.t9769.cljs$lang$ctorStr = "cljs.core.async/t9769";
cljs.core.async.t9769.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9769");
});})(cs))
;
cljs.core.async.t9769.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9769.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9769.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9769.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9769.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t9769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9771){var self__ = this;
var _9771__$1 = this;return self__.meta9770;
});})(cs))
;
cljs.core.async.t9769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9771,meta9770__$1){var self__ = this;
var _9771__$1 = this;return (new cljs.core.async.t9769(self__.cs,self__.ch,self__.mult,meta9770__$1));
});})(cs))
;
cljs.core.async.__GT_t9769 = ((function (cs){
return (function __GT_t9769(cs__$1,ch__$1,mult__$1,meta9770){return (new cljs.core.async.t9769(cs__$1,ch__$1,mult__$1,meta9770));
});})(cs))
;
}
return (new cljs.core.async.t9769(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6160__auto___9990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_9902){var state_val_9903 = (state_9902[1]);if((state_val_9903 === 32))
{var inst_9842 = (state_9902[7]);var inst_9843 = (state_9902[8]);var inst_9845 = (state_9902[9]);var inst_9844 = (state_9902[10]);var inst_9857 = (state_9902[2]);var inst_9858 = (inst_9845 + 1);var tmp9904 = inst_9842;var tmp9905 = inst_9843;var tmp9906 = inst_9844;var inst_9842__$1 = tmp9904;var inst_9843__$1 = tmp9905;var inst_9844__$1 = tmp9906;var inst_9845__$1 = inst_9858;var state_9902__$1 = (function (){var statearr_9907 = state_9902;(statearr_9907[7] = inst_9842__$1);
(statearr_9907[8] = inst_9843__$1);
(statearr_9907[11] = inst_9857);
(statearr_9907[9] = inst_9845__$1);
(statearr_9907[10] = inst_9844__$1);
return statearr_9907;
})();var statearr_9908_9991 = state_9902__$1;(statearr_9908_9991[2] = null);
(statearr_9908_9991[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 1))
{var state_9902__$1 = state_9902;var statearr_9909_9992 = state_9902__$1;(statearr_9909_9992[2] = null);
(statearr_9909_9992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 33))
{var inst_9861 = (state_9902[12]);var inst_9863 = cljs.core.chunked_seq_QMARK_.call(null,inst_9861);var state_9902__$1 = state_9902;if(inst_9863)
{var statearr_9910_9993 = state_9902__$1;(statearr_9910_9993[1] = 36);
} else
{var statearr_9911_9994 = state_9902__$1;(statearr_9911_9994[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 2))
{var state_9902__$1 = state_9902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9902__$1,4,ch);
} else
{if((state_val_9903 === 34))
{var state_9902__$1 = state_9902;var statearr_9912_9995 = state_9902__$1;(statearr_9912_9995[2] = null);
(statearr_9912_9995[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 3))
{var inst_9900 = (state_9902[2]);var state_9902__$1 = state_9902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9902__$1,inst_9900);
} else
{if((state_val_9903 === 35))
{var inst_9884 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9913_9996 = state_9902__$1;(statearr_9913_9996[2] = inst_9884);
(statearr_9913_9996[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 4))
{var inst_9774 = (state_9902[13]);var inst_9774__$1 = (state_9902[2]);var inst_9775 = (inst_9774__$1 == null);var state_9902__$1 = (function (){var statearr_9914 = state_9902;(statearr_9914[13] = inst_9774__$1);
return statearr_9914;
})();if(cljs.core.truth_(inst_9775))
{var statearr_9915_9997 = state_9902__$1;(statearr_9915_9997[1] = 5);
} else
{var statearr_9916_9998 = state_9902__$1;(statearr_9916_9998[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 36))
{var inst_9861 = (state_9902[12]);var inst_9865 = cljs.core.chunk_first.call(null,inst_9861);var inst_9866 = cljs.core.chunk_rest.call(null,inst_9861);var inst_9867 = cljs.core.count.call(null,inst_9865);var inst_9842 = inst_9866;var inst_9843 = inst_9865;var inst_9844 = inst_9867;var inst_9845 = 0;var state_9902__$1 = (function (){var statearr_9917 = state_9902;(statearr_9917[7] = inst_9842);
(statearr_9917[8] = inst_9843);
(statearr_9917[9] = inst_9845);
(statearr_9917[10] = inst_9844);
return statearr_9917;
})();var statearr_9918_9999 = state_9902__$1;(statearr_9918_9999[2] = null);
(statearr_9918_9999[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 5))
{var inst_9781 = cljs.core.deref.call(null,cs);var inst_9782 = cljs.core.seq.call(null,inst_9781);var inst_9783 = inst_9782;var inst_9784 = null;var inst_9785 = 0;var inst_9786 = 0;var state_9902__$1 = (function (){var statearr_9919 = state_9902;(statearr_9919[14] = inst_9785);
(statearr_9919[15] = inst_9786);
(statearr_9919[16] = inst_9784);
(statearr_9919[17] = inst_9783);
return statearr_9919;
})();var statearr_9920_10000 = state_9902__$1;(statearr_9920_10000[2] = null);
(statearr_9920_10000[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 37))
{var inst_9861 = (state_9902[12]);var inst_9870 = (state_9902[18]);var inst_9774 = (state_9902[13]);var inst_9870__$1 = cljs.core.first.call(null,inst_9861);var inst_9871 = cljs.core.async.put_BANG_.call(null,inst_9870__$1,inst_9774,done);var state_9902__$1 = (function (){var statearr_9921 = state_9902;(statearr_9921[18] = inst_9870__$1);
return statearr_9921;
})();if(cljs.core.truth_(inst_9871))
{var statearr_9922_10001 = state_9902__$1;(statearr_9922_10001[1] = 39);
} else
{var statearr_9923_10002 = state_9902__$1;(statearr_9923_10002[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 6))
{var inst_9834 = (state_9902[19]);var inst_9833 = cljs.core.deref.call(null,cs);var inst_9834__$1 = cljs.core.keys.call(null,inst_9833);var inst_9835 = cljs.core.count.call(null,inst_9834__$1);var inst_9836 = cljs.core.reset_BANG_.call(null,dctr,inst_9835);var inst_9841 = cljs.core.seq.call(null,inst_9834__$1);var inst_9842 = inst_9841;var inst_9843 = null;var inst_9844 = 0;var inst_9845 = 0;var state_9902__$1 = (function (){var statearr_9924 = state_9902;(statearr_9924[20] = inst_9836);
(statearr_9924[19] = inst_9834__$1);
(statearr_9924[7] = inst_9842);
(statearr_9924[8] = inst_9843);
(statearr_9924[9] = inst_9845);
(statearr_9924[10] = inst_9844);
return statearr_9924;
})();var statearr_9925_10003 = state_9902__$1;(statearr_9925_10003[2] = null);
(statearr_9925_10003[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 38))
{var inst_9881 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9926_10004 = state_9902__$1;(statearr_9926_10004[2] = inst_9881);
(statearr_9926_10004[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 7))
{var inst_9898 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9927_10005 = state_9902__$1;(statearr_9927_10005[2] = inst_9898);
(statearr_9927_10005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 39))
{var state_9902__$1 = state_9902;var statearr_9928_10006 = state_9902__$1;(statearr_9928_10006[2] = null);
(statearr_9928_10006[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 8))
{var inst_9785 = (state_9902[14]);var inst_9786 = (state_9902[15]);var inst_9788 = (inst_9786 < inst_9785);var inst_9789 = inst_9788;var state_9902__$1 = state_9902;if(cljs.core.truth_(inst_9789))
{var statearr_9929_10007 = state_9902__$1;(statearr_9929_10007[1] = 10);
} else
{var statearr_9930_10008 = state_9902__$1;(statearr_9930_10008[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 40))
{var inst_9870 = (state_9902[18]);var inst_9874 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9875 = cljs.core.async.untap_STAR_.call(null,m,inst_9870);var state_9902__$1 = (function (){var statearr_9931 = state_9902;(statearr_9931[21] = inst_9874);
return statearr_9931;
})();var statearr_9932_10009 = state_9902__$1;(statearr_9932_10009[2] = inst_9875);
(statearr_9932_10009[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 9))
{var inst_9831 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9933_10010 = state_9902__$1;(statearr_9933_10010[2] = inst_9831);
(statearr_9933_10010[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 41))
{var inst_9861 = (state_9902[12]);var inst_9877 = (state_9902[2]);var inst_9878 = cljs.core.next.call(null,inst_9861);var inst_9842 = inst_9878;var inst_9843 = null;var inst_9844 = 0;var inst_9845 = 0;var state_9902__$1 = (function (){var statearr_9934 = state_9902;(statearr_9934[22] = inst_9877);
(statearr_9934[7] = inst_9842);
(statearr_9934[8] = inst_9843);
(statearr_9934[9] = inst_9845);
(statearr_9934[10] = inst_9844);
return statearr_9934;
})();var statearr_9935_10011 = state_9902__$1;(statearr_9935_10011[2] = null);
(statearr_9935_10011[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 10))
{var inst_9786 = (state_9902[15]);var inst_9784 = (state_9902[16]);var inst_9792 = cljs.core._nth.call(null,inst_9784,inst_9786);var inst_9793 = cljs.core.nth.call(null,inst_9792,0,null);var inst_9794 = cljs.core.nth.call(null,inst_9792,1,null);var state_9902__$1 = (function (){var statearr_9936 = state_9902;(statearr_9936[23] = inst_9793);
return statearr_9936;
})();if(cljs.core.truth_(inst_9794))
{var statearr_9937_10012 = state_9902__$1;(statearr_9937_10012[1] = 13);
} else
{var statearr_9938_10013 = state_9902__$1;(statearr_9938_10013[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 42))
{var state_9902__$1 = state_9902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9902__$1,45,dchan);
} else
{if((state_val_9903 === 11))
{var inst_9783 = (state_9902[17]);var inst_9803 = (state_9902[24]);var inst_9803__$1 = cljs.core.seq.call(null,inst_9783);var state_9902__$1 = (function (){var statearr_9939 = state_9902;(statearr_9939[24] = inst_9803__$1);
return statearr_9939;
})();if(inst_9803__$1)
{var statearr_9940_10014 = state_9902__$1;(statearr_9940_10014[1] = 16);
} else
{var statearr_9941_10015 = state_9902__$1;(statearr_9941_10015[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 43))
{var state_9902__$1 = state_9902;var statearr_9942_10016 = state_9902__$1;(statearr_9942_10016[2] = null);
(statearr_9942_10016[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 12))
{var inst_9829 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9943_10017 = state_9902__$1;(statearr_9943_10017[2] = inst_9829);
(statearr_9943_10017[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 44))
{var inst_9895 = (state_9902[2]);var state_9902__$1 = (function (){var statearr_9944 = state_9902;(statearr_9944[25] = inst_9895);
return statearr_9944;
})();var statearr_9945_10018 = state_9902__$1;(statearr_9945_10018[2] = null);
(statearr_9945_10018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 13))
{var inst_9793 = (state_9902[23]);var inst_9796 = cljs.core.async.close_BANG_.call(null,inst_9793);var state_9902__$1 = state_9902;var statearr_9946_10019 = state_9902__$1;(statearr_9946_10019[2] = inst_9796);
(statearr_9946_10019[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 45))
{var inst_9892 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9950_10020 = state_9902__$1;(statearr_9950_10020[2] = inst_9892);
(statearr_9950_10020[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 14))
{var state_9902__$1 = state_9902;var statearr_9951_10021 = state_9902__$1;(statearr_9951_10021[2] = null);
(statearr_9951_10021[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 15))
{var inst_9785 = (state_9902[14]);var inst_9786 = (state_9902[15]);var inst_9784 = (state_9902[16]);var inst_9783 = (state_9902[17]);var inst_9799 = (state_9902[2]);var inst_9800 = (inst_9786 + 1);var tmp9947 = inst_9785;var tmp9948 = inst_9784;var tmp9949 = inst_9783;var inst_9783__$1 = tmp9949;var inst_9784__$1 = tmp9948;var inst_9785__$1 = tmp9947;var inst_9786__$1 = inst_9800;var state_9902__$1 = (function (){var statearr_9952 = state_9902;(statearr_9952[14] = inst_9785__$1);
(statearr_9952[15] = inst_9786__$1);
(statearr_9952[16] = inst_9784__$1);
(statearr_9952[17] = inst_9783__$1);
(statearr_9952[26] = inst_9799);
return statearr_9952;
})();var statearr_9953_10022 = state_9902__$1;(statearr_9953_10022[2] = null);
(statearr_9953_10022[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 16))
{var inst_9803 = (state_9902[24]);var inst_9805 = cljs.core.chunked_seq_QMARK_.call(null,inst_9803);var state_9902__$1 = state_9902;if(inst_9805)
{var statearr_9954_10023 = state_9902__$1;(statearr_9954_10023[1] = 19);
} else
{var statearr_9955_10024 = state_9902__$1;(statearr_9955_10024[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 17))
{var state_9902__$1 = state_9902;var statearr_9956_10025 = state_9902__$1;(statearr_9956_10025[2] = null);
(statearr_9956_10025[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 18))
{var inst_9827 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9957_10026 = state_9902__$1;(statearr_9957_10026[2] = inst_9827);
(statearr_9957_10026[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 19))
{var inst_9803 = (state_9902[24]);var inst_9807 = cljs.core.chunk_first.call(null,inst_9803);var inst_9808 = cljs.core.chunk_rest.call(null,inst_9803);var inst_9809 = cljs.core.count.call(null,inst_9807);var inst_9783 = inst_9808;var inst_9784 = inst_9807;var inst_9785 = inst_9809;var inst_9786 = 0;var state_9902__$1 = (function (){var statearr_9958 = state_9902;(statearr_9958[14] = inst_9785);
(statearr_9958[15] = inst_9786);
(statearr_9958[16] = inst_9784);
(statearr_9958[17] = inst_9783);
return statearr_9958;
})();var statearr_9959_10027 = state_9902__$1;(statearr_9959_10027[2] = null);
(statearr_9959_10027[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 20))
{var inst_9803 = (state_9902[24]);var inst_9813 = cljs.core.first.call(null,inst_9803);var inst_9814 = cljs.core.nth.call(null,inst_9813,0,null);var inst_9815 = cljs.core.nth.call(null,inst_9813,1,null);var state_9902__$1 = (function (){var statearr_9960 = state_9902;(statearr_9960[27] = inst_9814);
return statearr_9960;
})();if(cljs.core.truth_(inst_9815))
{var statearr_9961_10028 = state_9902__$1;(statearr_9961_10028[1] = 22);
} else
{var statearr_9962_10029 = state_9902__$1;(statearr_9962_10029[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 21))
{var inst_9824 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9963_10030 = state_9902__$1;(statearr_9963_10030[2] = inst_9824);
(statearr_9963_10030[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 22))
{var inst_9814 = (state_9902[27]);var inst_9817 = cljs.core.async.close_BANG_.call(null,inst_9814);var state_9902__$1 = state_9902;var statearr_9964_10031 = state_9902__$1;(statearr_9964_10031[2] = inst_9817);
(statearr_9964_10031[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 23))
{var state_9902__$1 = state_9902;var statearr_9965_10032 = state_9902__$1;(statearr_9965_10032[2] = null);
(statearr_9965_10032[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 24))
{var inst_9803 = (state_9902[24]);var inst_9820 = (state_9902[2]);var inst_9821 = cljs.core.next.call(null,inst_9803);var inst_9783 = inst_9821;var inst_9784 = null;var inst_9785 = 0;var inst_9786 = 0;var state_9902__$1 = (function (){var statearr_9966 = state_9902;(statearr_9966[28] = inst_9820);
(statearr_9966[14] = inst_9785);
(statearr_9966[15] = inst_9786);
(statearr_9966[16] = inst_9784);
(statearr_9966[17] = inst_9783);
return statearr_9966;
})();var statearr_9967_10033 = state_9902__$1;(statearr_9967_10033[2] = null);
(statearr_9967_10033[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 25))
{var inst_9845 = (state_9902[9]);var inst_9844 = (state_9902[10]);var inst_9847 = (inst_9845 < inst_9844);var inst_9848 = inst_9847;var state_9902__$1 = state_9902;if(cljs.core.truth_(inst_9848))
{var statearr_9968_10034 = state_9902__$1;(statearr_9968_10034[1] = 27);
} else
{var statearr_9969_10035 = state_9902__$1;(statearr_9969_10035[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 26))
{var inst_9834 = (state_9902[19]);var inst_9888 = (state_9902[2]);var inst_9889 = cljs.core.seq.call(null,inst_9834);var state_9902__$1 = (function (){var statearr_9970 = state_9902;(statearr_9970[29] = inst_9888);
return statearr_9970;
})();if(inst_9889)
{var statearr_9971_10036 = state_9902__$1;(statearr_9971_10036[1] = 42);
} else
{var statearr_9972_10037 = state_9902__$1;(statearr_9972_10037[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 27))
{var inst_9843 = (state_9902[8]);var inst_9774 = (state_9902[13]);var inst_9845 = (state_9902[9]);var inst_9850 = (state_9902[30]);var inst_9850__$1 = cljs.core._nth.call(null,inst_9843,inst_9845);var inst_9851 = cljs.core.async.put_BANG_.call(null,inst_9850__$1,inst_9774,done);var state_9902__$1 = (function (){var statearr_9973 = state_9902;(statearr_9973[30] = inst_9850__$1);
return statearr_9973;
})();if(cljs.core.truth_(inst_9851))
{var statearr_9974_10038 = state_9902__$1;(statearr_9974_10038[1] = 30);
} else
{var statearr_9975_10039 = state_9902__$1;(statearr_9975_10039[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 28))
{var inst_9861 = (state_9902[12]);var inst_9842 = (state_9902[7]);var inst_9861__$1 = cljs.core.seq.call(null,inst_9842);var state_9902__$1 = (function (){var statearr_9976 = state_9902;(statearr_9976[12] = inst_9861__$1);
return statearr_9976;
})();if(inst_9861__$1)
{var statearr_9977_10040 = state_9902__$1;(statearr_9977_10040[1] = 33);
} else
{var statearr_9978_10041 = state_9902__$1;(statearr_9978_10041[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 29))
{var inst_9886 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9979_10042 = state_9902__$1;(statearr_9979_10042[2] = inst_9886);
(statearr_9979_10042[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 30))
{var state_9902__$1 = state_9902;var statearr_9980_10043 = state_9902__$1;(statearr_9980_10043[2] = null);
(statearr_9980_10043[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 31))
{var inst_9850 = (state_9902[30]);var inst_9854 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9855 = cljs.core.async.untap_STAR_.call(null,m,inst_9850);var state_9902__$1 = (function (){var statearr_9981 = state_9902;(statearr_9981[31] = inst_9854);
return statearr_9981;
})();var statearr_9982_10044 = state_9902__$1;(statearr_9982_10044[2] = inst_9855);
(statearr_9982_10044[1] = 32);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_9986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9986[0] = state_machine__6146__auto__);
(statearr_9986[1] = 1);
return statearr_9986;
});
var state_machine__6146__auto____1 = (function (state_9902){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_9902);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e9987){if((e9987 instanceof Object))
{var ex__6149__auto__ = e9987;var statearr_9988_10045 = state_9902;(statearr_9988_10045[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10046 = state_9902;
state_9902 = G__10046;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_9902){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_9902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_9989 = f__6161__auto__.call(null);(statearr_9989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___9990);
return statearr_9989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
cljs.core.async.Mix = (function (){var obj10048 = {};return obj10048;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t10168 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10168 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10169){
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
this.meta10169 = meta10169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10168.cljs$lang$type = true;
cljs.core.async.t10168.cljs$lang$ctorStr = "cljs.core.async/t10168";
cljs.core.async.t10168.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10168");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10168.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10170){var self__ = this;
var _10170__$1 = this;return self__.meta10169;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10170,meta10169__$1){var self__ = this;
var _10170__$1 = this;return (new cljs.core.async.t10168(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10169__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10168 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10168(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10169){return (new cljs.core.async.t10168(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10169));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10168(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6160__auto___10287 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_10240){var state_val_10241 = (state_10240[1]);if((state_val_10241 === 1))
{var inst_10174 = (state_10240[7]);var inst_10174__$1 = calc_state.call(null);var inst_10175 = cljs.core.seq_QMARK_.call(null,inst_10174__$1);var state_10240__$1 = (function (){var statearr_10242 = state_10240;(statearr_10242[7] = inst_10174__$1);
return statearr_10242;
})();if(inst_10175)
{var statearr_10243_10288 = state_10240__$1;(statearr_10243_10288[1] = 2);
} else
{var statearr_10244_10289 = state_10240__$1;(statearr_10244_10289[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 2))
{var inst_10174 = (state_10240[7]);var inst_10177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10174);var state_10240__$1 = state_10240;var statearr_10245_10290 = state_10240__$1;(statearr_10245_10290[2] = inst_10177);
(statearr_10245_10290[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 3))
{var inst_10174 = (state_10240[7]);var state_10240__$1 = state_10240;var statearr_10246_10291 = state_10240__$1;(statearr_10246_10291[2] = inst_10174);
(statearr_10246_10291[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 4))
{var inst_10174 = (state_10240[7]);var inst_10180 = (state_10240[2]);var inst_10181 = cljs.core.get.call(null,inst_10180,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10182 = cljs.core.get.call(null,inst_10180,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10183 = cljs.core.get.call(null,inst_10180,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10184 = inst_10174;var state_10240__$1 = (function (){var statearr_10247 = state_10240;(statearr_10247[8] = inst_10183);
(statearr_10247[9] = inst_10184);
(statearr_10247[10] = inst_10182);
(statearr_10247[11] = inst_10181);
return statearr_10247;
})();var statearr_10248_10292 = state_10240__$1;(statearr_10248_10292[2] = null);
(statearr_10248_10292[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 5))
{var inst_10184 = (state_10240[9]);var inst_10187 = cljs.core.seq_QMARK_.call(null,inst_10184);var state_10240__$1 = state_10240;if(inst_10187)
{var statearr_10249_10293 = state_10240__$1;(statearr_10249_10293[1] = 7);
} else
{var statearr_10250_10294 = state_10240__$1;(statearr_10250_10294[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 6))
{var inst_10238 = (state_10240[2]);var state_10240__$1 = state_10240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10240__$1,inst_10238);
} else
{if((state_val_10241 === 7))
{var inst_10184 = (state_10240[9]);var inst_10189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10184);var state_10240__$1 = state_10240;var statearr_10251_10295 = state_10240__$1;(statearr_10251_10295[2] = inst_10189);
(statearr_10251_10295[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 8))
{var inst_10184 = (state_10240[9]);var state_10240__$1 = state_10240;var statearr_10252_10296 = state_10240__$1;(statearr_10252_10296[2] = inst_10184);
(statearr_10252_10296[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 9))
{var inst_10192 = (state_10240[12]);var inst_10192__$1 = (state_10240[2]);var inst_10193 = cljs.core.get.call(null,inst_10192__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10194 = cljs.core.get.call(null,inst_10192__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10195 = cljs.core.get.call(null,inst_10192__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10240__$1 = (function (){var statearr_10253 = state_10240;(statearr_10253[13] = inst_10194);
(statearr_10253[14] = inst_10195);
(statearr_10253[12] = inst_10192__$1);
return statearr_10253;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10240__$1,10,inst_10193);
} else
{if((state_val_10241 === 10))
{var inst_10200 = (state_10240[15]);var inst_10199 = (state_10240[16]);var inst_10198 = (state_10240[2]);var inst_10199__$1 = cljs.core.nth.call(null,inst_10198,0,null);var inst_10200__$1 = cljs.core.nth.call(null,inst_10198,1,null);var inst_10201 = (inst_10199__$1 == null);var inst_10202 = cljs.core._EQ_.call(null,inst_10200__$1,change);var inst_10203 = (inst_10201) || (inst_10202);var state_10240__$1 = (function (){var statearr_10254 = state_10240;(statearr_10254[15] = inst_10200__$1);
(statearr_10254[16] = inst_10199__$1);
return statearr_10254;
})();if(cljs.core.truth_(inst_10203))
{var statearr_10255_10297 = state_10240__$1;(statearr_10255_10297[1] = 11);
} else
{var statearr_10256_10298 = state_10240__$1;(statearr_10256_10298[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 11))
{var inst_10199 = (state_10240[16]);var inst_10205 = (inst_10199 == null);var state_10240__$1 = state_10240;if(cljs.core.truth_(inst_10205))
{var statearr_10257_10299 = state_10240__$1;(statearr_10257_10299[1] = 14);
} else
{var statearr_10258_10300 = state_10240__$1;(statearr_10258_10300[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 12))
{var inst_10200 = (state_10240[15]);var inst_10195 = (state_10240[14]);var inst_10214 = (state_10240[17]);var inst_10214__$1 = inst_10195.call(null,inst_10200);var state_10240__$1 = (function (){var statearr_10259 = state_10240;(statearr_10259[17] = inst_10214__$1);
return statearr_10259;
})();if(cljs.core.truth_(inst_10214__$1))
{var statearr_10260_10301 = state_10240__$1;(statearr_10260_10301[1] = 17);
} else
{var statearr_10261_10302 = state_10240__$1;(statearr_10261_10302[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 13))
{var inst_10236 = (state_10240[2]);var state_10240__$1 = state_10240;var statearr_10262_10303 = state_10240__$1;(statearr_10262_10303[2] = inst_10236);
(statearr_10262_10303[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 14))
{var inst_10200 = (state_10240[15]);var inst_10207 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10200);var state_10240__$1 = state_10240;var statearr_10263_10304 = state_10240__$1;(statearr_10263_10304[2] = inst_10207);
(statearr_10263_10304[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 15))
{var state_10240__$1 = state_10240;var statearr_10264_10305 = state_10240__$1;(statearr_10264_10305[2] = null);
(statearr_10264_10305[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 16))
{var inst_10210 = (state_10240[2]);var inst_10211 = calc_state.call(null);var inst_10184 = inst_10211;var state_10240__$1 = (function (){var statearr_10265 = state_10240;(statearr_10265[18] = inst_10210);
(statearr_10265[9] = inst_10184);
return statearr_10265;
})();var statearr_10266_10306 = state_10240__$1;(statearr_10266_10306[2] = null);
(statearr_10266_10306[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 17))
{var inst_10214 = (state_10240[17]);var state_10240__$1 = state_10240;var statearr_10267_10307 = state_10240__$1;(statearr_10267_10307[2] = inst_10214);
(statearr_10267_10307[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 18))
{var inst_10200 = (state_10240[15]);var inst_10194 = (state_10240[13]);var inst_10195 = (state_10240[14]);var inst_10217 = cljs.core.empty_QMARK_.call(null,inst_10195);var inst_10218 = inst_10194.call(null,inst_10200);var inst_10219 = cljs.core.not.call(null,inst_10218);var inst_10220 = (inst_10217) && (inst_10219);var state_10240__$1 = state_10240;var statearr_10268_10308 = state_10240__$1;(statearr_10268_10308[2] = inst_10220);
(statearr_10268_10308[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 19))
{var inst_10222 = (state_10240[2]);var state_10240__$1 = state_10240;if(cljs.core.truth_(inst_10222))
{var statearr_10269_10309 = state_10240__$1;(statearr_10269_10309[1] = 20);
} else
{var statearr_10270_10310 = state_10240__$1;(statearr_10270_10310[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 20))
{var inst_10199 = (state_10240[16]);var state_10240__$1 = state_10240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10240__$1,23,out,inst_10199);
} else
{if((state_val_10241 === 21))
{var inst_10192 = (state_10240[12]);var inst_10184 = inst_10192;var state_10240__$1 = (function (){var statearr_10271 = state_10240;(statearr_10271[9] = inst_10184);
return statearr_10271;
})();var statearr_10272_10311 = state_10240__$1;(statearr_10272_10311[2] = null);
(statearr_10272_10311[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 22))
{var inst_10234 = (state_10240[2]);var state_10240__$1 = state_10240;var statearr_10273_10312 = state_10240__$1;(statearr_10273_10312[2] = inst_10234);
(statearr_10273_10312[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 23))
{var inst_10225 = (state_10240[2]);var state_10240__$1 = state_10240;if(cljs.core.truth_(inst_10225))
{var statearr_10274_10313 = state_10240__$1;(statearr_10274_10313[1] = 24);
} else
{var statearr_10275_10314 = state_10240__$1;(statearr_10275_10314[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 24))
{var inst_10192 = (state_10240[12]);var inst_10184 = inst_10192;var state_10240__$1 = (function (){var statearr_10276 = state_10240;(statearr_10276[9] = inst_10184);
return statearr_10276;
})();var statearr_10277_10315 = state_10240__$1;(statearr_10277_10315[2] = null);
(statearr_10277_10315[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 25))
{var state_10240__$1 = state_10240;var statearr_10278_10316 = state_10240__$1;(statearr_10278_10316[2] = null);
(statearr_10278_10316[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10241 === 26))
{var inst_10230 = (state_10240[2]);var state_10240__$1 = state_10240;var statearr_10279_10317 = state_10240__$1;(statearr_10279_10317[2] = inst_10230);
(statearr_10279_10317[1] = 22);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_10283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10283[0] = state_machine__6146__auto__);
(statearr_10283[1] = 1);
return statearr_10283;
});
var state_machine__6146__auto____1 = (function (state_10240){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_10240);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e10284){if((e10284 instanceof Object))
{var ex__6149__auto__ = e10284;var statearr_10285_10318 = state_10240;(statearr_10285_10318[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10319 = state_10240;
state_10240 = G__10319;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_10240){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_10240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_10286 = f__6161__auto__.call(null);(statearr_10286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___10287);
return statearr_10286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
cljs.core.async.Pub = (function (){var obj10321 = {};return obj10321;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__10322_SHARP_){if(cljs.core.truth_(p1__10322_SHARP_.call(null,topic)))
{return p1__10322_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10322_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10445 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10446){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10446 = meta10446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10445.cljs$lang$type = true;
cljs.core.async.t10445.cljs$lang$ctorStr = "cljs.core.async/t10445";
cljs.core.async.t10445.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10445");
});})(mults,ensure_mult))
;
cljs.core.async.t10445.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10445.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10445.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10445.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10445.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10445.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10447){var self__ = this;
var _10447__$1 = this;return self__.meta10446;
});})(mults,ensure_mult))
;
cljs.core.async.t10445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10447,meta10446__$1){var self__ = this;
var _10447__$1 = this;return (new cljs.core.async.t10445(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10446__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10445 = ((function (mults,ensure_mult){
return (function __GT_t10445(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10446){return (new cljs.core.async.t10445(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10446));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10445(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6160__auto___10567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_10519){var state_val_10520 = (state_10519[1]);if((state_val_10520 === 1))
{var state_10519__$1 = state_10519;var statearr_10521_10568 = state_10519__$1;(statearr_10521_10568[2] = null);
(statearr_10521_10568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 2))
{var state_10519__$1 = state_10519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10519__$1,4,ch);
} else
{if((state_val_10520 === 3))
{var inst_10517 = (state_10519[2]);var state_10519__$1 = state_10519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10519__$1,inst_10517);
} else
{if((state_val_10520 === 4))
{var inst_10450 = (state_10519[7]);var inst_10450__$1 = (state_10519[2]);var inst_10451 = (inst_10450__$1 == null);var state_10519__$1 = (function (){var statearr_10522 = state_10519;(statearr_10522[7] = inst_10450__$1);
return statearr_10522;
})();if(cljs.core.truth_(inst_10451))
{var statearr_10523_10569 = state_10519__$1;(statearr_10523_10569[1] = 5);
} else
{var statearr_10524_10570 = state_10519__$1;(statearr_10524_10570[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 5))
{var inst_10457 = cljs.core.deref.call(null,mults);var inst_10458 = cljs.core.vals.call(null,inst_10457);var inst_10459 = cljs.core.seq.call(null,inst_10458);var inst_10460 = inst_10459;var inst_10461 = null;var inst_10462 = 0;var inst_10463 = 0;var state_10519__$1 = (function (){var statearr_10525 = state_10519;(statearr_10525[8] = inst_10460);
(statearr_10525[9] = inst_10461);
(statearr_10525[10] = inst_10463);
(statearr_10525[11] = inst_10462);
return statearr_10525;
})();var statearr_10526_10571 = state_10519__$1;(statearr_10526_10571[2] = null);
(statearr_10526_10571[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 6))
{var inst_10498 = (state_10519[12]);var inst_10450 = (state_10519[7]);var inst_10500 = (state_10519[13]);var inst_10498__$1 = topic_fn.call(null,inst_10450);var inst_10499 = cljs.core.deref.call(null,mults);var inst_10500__$1 = cljs.core.get.call(null,inst_10499,inst_10498__$1);var state_10519__$1 = (function (){var statearr_10527 = state_10519;(statearr_10527[12] = inst_10498__$1);
(statearr_10527[13] = inst_10500__$1);
return statearr_10527;
})();if(cljs.core.truth_(inst_10500__$1))
{var statearr_10528_10572 = state_10519__$1;(statearr_10528_10572[1] = 19);
} else
{var statearr_10529_10573 = state_10519__$1;(statearr_10529_10573[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 7))
{var inst_10515 = (state_10519[2]);var state_10519__$1 = state_10519;var statearr_10530_10574 = state_10519__$1;(statearr_10530_10574[2] = inst_10515);
(statearr_10530_10574[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 8))
{var inst_10463 = (state_10519[10]);var inst_10462 = (state_10519[11]);var inst_10465 = (inst_10463 < inst_10462);var inst_10466 = inst_10465;var state_10519__$1 = state_10519;if(cljs.core.truth_(inst_10466))
{var statearr_10534_10575 = state_10519__$1;(statearr_10534_10575[1] = 10);
} else
{var statearr_10535_10576 = state_10519__$1;(statearr_10535_10576[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 9))
{var inst_10496 = (state_10519[2]);var state_10519__$1 = state_10519;var statearr_10536_10577 = state_10519__$1;(statearr_10536_10577[2] = inst_10496);
(statearr_10536_10577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 10))
{var inst_10460 = (state_10519[8]);var inst_10461 = (state_10519[9]);var inst_10463 = (state_10519[10]);var inst_10462 = (state_10519[11]);var inst_10468 = cljs.core._nth.call(null,inst_10461,inst_10463);var inst_10469 = cljs.core.async.muxch_STAR_.call(null,inst_10468);var inst_10470 = cljs.core.async.close_BANG_.call(null,inst_10469);var inst_10471 = (inst_10463 + 1);var tmp10531 = inst_10460;var tmp10532 = inst_10461;var tmp10533 = inst_10462;var inst_10460__$1 = tmp10531;var inst_10461__$1 = tmp10532;var inst_10462__$1 = tmp10533;var inst_10463__$1 = inst_10471;var state_10519__$1 = (function (){var statearr_10537 = state_10519;(statearr_10537[8] = inst_10460__$1);
(statearr_10537[9] = inst_10461__$1);
(statearr_10537[14] = inst_10470);
(statearr_10537[10] = inst_10463__$1);
(statearr_10537[11] = inst_10462__$1);
return statearr_10537;
})();var statearr_10538_10578 = state_10519__$1;(statearr_10538_10578[2] = null);
(statearr_10538_10578[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 11))
{var inst_10460 = (state_10519[8]);var inst_10474 = (state_10519[15]);var inst_10474__$1 = cljs.core.seq.call(null,inst_10460);var state_10519__$1 = (function (){var statearr_10539 = state_10519;(statearr_10539[15] = inst_10474__$1);
return statearr_10539;
})();if(inst_10474__$1)
{var statearr_10540_10579 = state_10519__$1;(statearr_10540_10579[1] = 13);
} else
{var statearr_10541_10580 = state_10519__$1;(statearr_10541_10580[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 12))
{var inst_10494 = (state_10519[2]);var state_10519__$1 = state_10519;var statearr_10542_10581 = state_10519__$1;(statearr_10542_10581[2] = inst_10494);
(statearr_10542_10581[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 13))
{var inst_10474 = (state_10519[15]);var inst_10476 = cljs.core.chunked_seq_QMARK_.call(null,inst_10474);var state_10519__$1 = state_10519;if(inst_10476)
{var statearr_10543_10582 = state_10519__$1;(statearr_10543_10582[1] = 16);
} else
{var statearr_10544_10583 = state_10519__$1;(statearr_10544_10583[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 14))
{var state_10519__$1 = state_10519;var statearr_10545_10584 = state_10519__$1;(statearr_10545_10584[2] = null);
(statearr_10545_10584[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 15))
{var inst_10492 = (state_10519[2]);var state_10519__$1 = state_10519;var statearr_10546_10585 = state_10519__$1;(statearr_10546_10585[2] = inst_10492);
(statearr_10546_10585[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 16))
{var inst_10474 = (state_10519[15]);var inst_10478 = cljs.core.chunk_first.call(null,inst_10474);var inst_10479 = cljs.core.chunk_rest.call(null,inst_10474);var inst_10480 = cljs.core.count.call(null,inst_10478);var inst_10460 = inst_10479;var inst_10461 = inst_10478;var inst_10462 = inst_10480;var inst_10463 = 0;var state_10519__$1 = (function (){var statearr_10547 = state_10519;(statearr_10547[8] = inst_10460);
(statearr_10547[9] = inst_10461);
(statearr_10547[10] = inst_10463);
(statearr_10547[11] = inst_10462);
return statearr_10547;
})();var statearr_10548_10586 = state_10519__$1;(statearr_10548_10586[2] = null);
(statearr_10548_10586[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 17))
{var inst_10474 = (state_10519[15]);var inst_10483 = cljs.core.first.call(null,inst_10474);var inst_10484 = cljs.core.async.muxch_STAR_.call(null,inst_10483);var inst_10485 = cljs.core.async.close_BANG_.call(null,inst_10484);var inst_10486 = cljs.core.next.call(null,inst_10474);var inst_10460 = inst_10486;var inst_10461 = null;var inst_10462 = 0;var inst_10463 = 0;var state_10519__$1 = (function (){var statearr_10549 = state_10519;(statearr_10549[16] = inst_10485);
(statearr_10549[8] = inst_10460);
(statearr_10549[9] = inst_10461);
(statearr_10549[10] = inst_10463);
(statearr_10549[11] = inst_10462);
return statearr_10549;
})();var statearr_10550_10587 = state_10519__$1;(statearr_10550_10587[2] = null);
(statearr_10550_10587[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 18))
{var inst_10489 = (state_10519[2]);var state_10519__$1 = state_10519;var statearr_10551_10588 = state_10519__$1;(statearr_10551_10588[2] = inst_10489);
(statearr_10551_10588[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 19))
{var inst_10450 = (state_10519[7]);var inst_10500 = (state_10519[13]);var inst_10502 = cljs.core.async.muxch_STAR_.call(null,inst_10500);var state_10519__$1 = state_10519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10519__$1,22,inst_10502,inst_10450);
} else
{if((state_val_10520 === 20))
{var state_10519__$1 = state_10519;var statearr_10552_10589 = state_10519__$1;(statearr_10552_10589[2] = null);
(statearr_10552_10589[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 21))
{var inst_10512 = (state_10519[2]);var state_10519__$1 = (function (){var statearr_10553 = state_10519;(statearr_10553[17] = inst_10512);
return statearr_10553;
})();var statearr_10554_10590 = state_10519__$1;(statearr_10554_10590[2] = null);
(statearr_10554_10590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 22))
{var inst_10504 = (state_10519[2]);var state_10519__$1 = state_10519;if(cljs.core.truth_(inst_10504))
{var statearr_10555_10591 = state_10519__$1;(statearr_10555_10591[1] = 23);
} else
{var statearr_10556_10592 = state_10519__$1;(statearr_10556_10592[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 23))
{var state_10519__$1 = state_10519;var statearr_10557_10593 = state_10519__$1;(statearr_10557_10593[2] = null);
(statearr_10557_10593[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 24))
{var inst_10498 = (state_10519[12]);var inst_10507 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10498);var state_10519__$1 = state_10519;var statearr_10558_10594 = state_10519__$1;(statearr_10558_10594[2] = inst_10507);
(statearr_10558_10594[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10520 === 25))
{var inst_10509 = (state_10519[2]);var state_10519__$1 = state_10519;var statearr_10559_10595 = state_10519__$1;(statearr_10559_10595[2] = inst_10509);
(statearr_10559_10595[1] = 21);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_10563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10563[0] = state_machine__6146__auto__);
(statearr_10563[1] = 1);
return statearr_10563;
});
var state_machine__6146__auto____1 = (function (state_10519){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_10519);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e10564){if((e10564 instanceof Object))
{var ex__6149__auto__ = e10564;var statearr_10565_10596 = state_10519;(statearr_10565_10596[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10597 = state_10519;
state_10519 = G__10597;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_10519){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_10519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_10566 = f__6161__auto__.call(null);(statearr_10566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___10567);
return statearr_10566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
,cljs.core.range.call(null,cnt));var c__6160__auto___10734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_10704){var state_val_10705 = (state_10704[1]);if((state_val_10705 === 1))
{var state_10704__$1 = state_10704;var statearr_10706_10735 = state_10704__$1;(statearr_10706_10735[2] = null);
(statearr_10706_10735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 2))
{var inst_10667 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10668 = 0;var state_10704__$1 = (function (){var statearr_10707 = state_10704;(statearr_10707[7] = inst_10668);
(statearr_10707[8] = inst_10667);
return statearr_10707;
})();var statearr_10708_10736 = state_10704__$1;(statearr_10708_10736[2] = null);
(statearr_10708_10736[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 3))
{var inst_10702 = (state_10704[2]);var state_10704__$1 = state_10704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10704__$1,inst_10702);
} else
{if((state_val_10705 === 4))
{var inst_10668 = (state_10704[7]);var inst_10670 = (inst_10668 < cnt);var state_10704__$1 = state_10704;if(cljs.core.truth_(inst_10670))
{var statearr_10709_10737 = state_10704__$1;(statearr_10709_10737[1] = 6);
} else
{var statearr_10710_10738 = state_10704__$1;(statearr_10710_10738[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 5))
{var inst_10688 = (state_10704[2]);var state_10704__$1 = (function (){var statearr_10711 = state_10704;(statearr_10711[9] = inst_10688);
return statearr_10711;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10704__$1,12,dchan);
} else
{if((state_val_10705 === 6))
{var state_10704__$1 = state_10704;var statearr_10712_10739 = state_10704__$1;(statearr_10712_10739[2] = null);
(statearr_10712_10739[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 7))
{var state_10704__$1 = state_10704;var statearr_10713_10740 = state_10704__$1;(statearr_10713_10740[2] = null);
(statearr_10713_10740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 8))
{var inst_10686 = (state_10704[2]);var state_10704__$1 = state_10704;var statearr_10714_10741 = state_10704__$1;(statearr_10714_10741[2] = inst_10686);
(statearr_10714_10741[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 9))
{var inst_10668 = (state_10704[7]);var inst_10681 = (state_10704[2]);var inst_10682 = (inst_10668 + 1);var inst_10668__$1 = inst_10682;var state_10704__$1 = (function (){var statearr_10715 = state_10704;(statearr_10715[10] = inst_10681);
(statearr_10715[7] = inst_10668__$1);
return statearr_10715;
})();var statearr_10716_10742 = state_10704__$1;(statearr_10716_10742[2] = null);
(statearr_10716_10742[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 10))
{var inst_10672 = (state_10704[2]);var inst_10673 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10704__$1 = (function (){var statearr_10717 = state_10704;(statearr_10717[11] = inst_10672);
return statearr_10717;
})();var statearr_10718_10743 = state_10704__$1;(statearr_10718_10743[2] = inst_10673);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10704__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 11))
{var inst_10668 = (state_10704[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10704,10,Object,null,9);var inst_10677 = chs__$1.call(null,inst_10668);var inst_10678 = done.call(null,inst_10668);var inst_10679 = cljs.core.async.take_BANG_.call(null,inst_10677,inst_10678);var state_10704__$1 = state_10704;var statearr_10719_10744 = state_10704__$1;(statearr_10719_10744[2] = inst_10679);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10704__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 12))
{var inst_10690 = (state_10704[12]);var inst_10690__$1 = (state_10704[2]);var inst_10691 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10690__$1);var state_10704__$1 = (function (){var statearr_10720 = state_10704;(statearr_10720[12] = inst_10690__$1);
return statearr_10720;
})();if(cljs.core.truth_(inst_10691))
{var statearr_10721_10745 = state_10704__$1;(statearr_10721_10745[1] = 13);
} else
{var statearr_10722_10746 = state_10704__$1;(statearr_10722_10746[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 13))
{var inst_10693 = cljs.core.async.close_BANG_.call(null,out);var state_10704__$1 = state_10704;var statearr_10723_10747 = state_10704__$1;(statearr_10723_10747[2] = inst_10693);
(statearr_10723_10747[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 14))
{var inst_10690 = (state_10704[12]);var inst_10695 = cljs.core.apply.call(null,f,inst_10690);var state_10704__$1 = state_10704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10704__$1,16,out,inst_10695);
} else
{if((state_val_10705 === 15))
{var inst_10700 = (state_10704[2]);var state_10704__$1 = state_10704;var statearr_10724_10748 = state_10704__$1;(statearr_10724_10748[2] = inst_10700);
(statearr_10724_10748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10705 === 16))
{var inst_10697 = (state_10704[2]);var state_10704__$1 = (function (){var statearr_10725 = state_10704;(statearr_10725[13] = inst_10697);
return statearr_10725;
})();var statearr_10726_10749 = state_10704__$1;(statearr_10726_10749[2] = null);
(statearr_10726_10749[1] = 2);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_10730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10730[0] = state_machine__6146__auto__);
(statearr_10730[1] = 1);
return statearr_10730;
});
var state_machine__6146__auto____1 = (function (state_10704){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_10704);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e10731){if((e10731 instanceof Object))
{var ex__6149__auto__ = e10731;var statearr_10732_10750 = state_10704;(statearr_10732_10750[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10751 = state_10704;
state_10704 = G__10751;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_10704){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_10704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_10733 = f__6161__auto__.call(null);(statearr_10733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___10734);
return statearr_10733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6160__auto___10859 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_10835){var state_val_10836 = (state_10835[1]);if((state_val_10836 === 1))
{var inst_10806 = cljs.core.vec.call(null,chs);var inst_10807 = inst_10806;var state_10835__$1 = (function (){var statearr_10837 = state_10835;(statearr_10837[7] = inst_10807);
return statearr_10837;
})();var statearr_10838_10860 = state_10835__$1;(statearr_10838_10860[2] = null);
(statearr_10838_10860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10836 === 2))
{var inst_10807 = (state_10835[7]);var inst_10809 = cljs.core.count.call(null,inst_10807);var inst_10810 = (inst_10809 > 0);var state_10835__$1 = state_10835;if(cljs.core.truth_(inst_10810))
{var statearr_10839_10861 = state_10835__$1;(statearr_10839_10861[1] = 4);
} else
{var statearr_10840_10862 = state_10835__$1;(statearr_10840_10862[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10836 === 3))
{var inst_10833 = (state_10835[2]);var state_10835__$1 = state_10835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10835__$1,inst_10833);
} else
{if((state_val_10836 === 4))
{var inst_10807 = (state_10835[7]);var state_10835__$1 = state_10835;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10835__$1,7,inst_10807);
} else
{if((state_val_10836 === 5))
{var inst_10829 = cljs.core.async.close_BANG_.call(null,out);var state_10835__$1 = state_10835;var statearr_10841_10863 = state_10835__$1;(statearr_10841_10863[2] = inst_10829);
(statearr_10841_10863[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10836 === 6))
{var inst_10831 = (state_10835[2]);var state_10835__$1 = state_10835;var statearr_10842_10864 = state_10835__$1;(statearr_10842_10864[2] = inst_10831);
(statearr_10842_10864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10836 === 7))
{var inst_10814 = (state_10835[8]);var inst_10815 = (state_10835[9]);var inst_10814__$1 = (state_10835[2]);var inst_10815__$1 = cljs.core.nth.call(null,inst_10814__$1,0,null);var inst_10816 = cljs.core.nth.call(null,inst_10814__$1,1,null);var inst_10817 = (inst_10815__$1 == null);var state_10835__$1 = (function (){var statearr_10843 = state_10835;(statearr_10843[8] = inst_10814__$1);
(statearr_10843[9] = inst_10815__$1);
(statearr_10843[10] = inst_10816);
return statearr_10843;
})();if(cljs.core.truth_(inst_10817))
{var statearr_10844_10865 = state_10835__$1;(statearr_10844_10865[1] = 8);
} else
{var statearr_10845_10866 = state_10835__$1;(statearr_10845_10866[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10836 === 8))
{var inst_10814 = (state_10835[8]);var inst_10815 = (state_10835[9]);var inst_10816 = (state_10835[10]);var inst_10807 = (state_10835[7]);var inst_10819 = (function (){var c = inst_10816;var v = inst_10815;var vec__10812 = inst_10814;var cs = inst_10807;return ((function (c,v,vec__10812,cs,inst_10814,inst_10815,inst_10816,inst_10807,state_val_10836){
return (function (p1__10752_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10752_SHARP_);
});
;})(c,v,vec__10812,cs,inst_10814,inst_10815,inst_10816,inst_10807,state_val_10836))
})();var inst_10820 = cljs.core.filterv.call(null,inst_10819,inst_10807);var inst_10807__$1 = inst_10820;var state_10835__$1 = (function (){var statearr_10846 = state_10835;(statearr_10846[7] = inst_10807__$1);
return statearr_10846;
})();var statearr_10847_10867 = state_10835__$1;(statearr_10847_10867[2] = null);
(statearr_10847_10867[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10836 === 9))
{var inst_10815 = (state_10835[9]);var state_10835__$1 = state_10835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10835__$1,11,out,inst_10815);
} else
{if((state_val_10836 === 10))
{var inst_10827 = (state_10835[2]);var state_10835__$1 = state_10835;var statearr_10849_10868 = state_10835__$1;(statearr_10849_10868[2] = inst_10827);
(statearr_10849_10868[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10836 === 11))
{var inst_10807 = (state_10835[7]);var inst_10824 = (state_10835[2]);var tmp10848 = inst_10807;var inst_10807__$1 = tmp10848;var state_10835__$1 = (function (){var statearr_10850 = state_10835;(statearr_10850[11] = inst_10824);
(statearr_10850[7] = inst_10807__$1);
return statearr_10850;
})();var statearr_10851_10869 = state_10835__$1;(statearr_10851_10869[2] = null);
(statearr_10851_10869[1] = 2);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_10855 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10855[0] = state_machine__6146__auto__);
(statearr_10855[1] = 1);
return statearr_10855;
});
var state_machine__6146__auto____1 = (function (state_10835){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_10835);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e10856){if((e10856 instanceof Object))
{var ex__6149__auto__ = e10856;var statearr_10857_10870 = state_10835;(statearr_10857_10870[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10871 = state_10835;
state_10835 = G__10871;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_10835){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_10835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_10858 = f__6161__auto__.call(null);(statearr_10858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___10859);
return statearr_10858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6160__auto___10964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_10941){var state_val_10942 = (state_10941[1]);if((state_val_10942 === 1))
{var inst_10918 = 0;var state_10941__$1 = (function (){var statearr_10943 = state_10941;(statearr_10943[7] = inst_10918);
return statearr_10943;
})();var statearr_10944_10965 = state_10941__$1;(statearr_10944_10965[2] = null);
(statearr_10944_10965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 2))
{var inst_10918 = (state_10941[7]);var inst_10920 = (inst_10918 < n);var state_10941__$1 = state_10941;if(cljs.core.truth_(inst_10920))
{var statearr_10945_10966 = state_10941__$1;(statearr_10945_10966[1] = 4);
} else
{var statearr_10946_10967 = state_10941__$1;(statearr_10946_10967[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 3))
{var inst_10938 = (state_10941[2]);var inst_10939 = cljs.core.async.close_BANG_.call(null,out);var state_10941__$1 = (function (){var statearr_10947 = state_10941;(statearr_10947[8] = inst_10938);
return statearr_10947;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10941__$1,inst_10939);
} else
{if((state_val_10942 === 4))
{var state_10941__$1 = state_10941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10941__$1,7,ch);
} else
{if((state_val_10942 === 5))
{var state_10941__$1 = state_10941;var statearr_10948_10968 = state_10941__$1;(statearr_10948_10968[2] = null);
(statearr_10948_10968[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 6))
{var inst_10936 = (state_10941[2]);var state_10941__$1 = state_10941;var statearr_10949_10969 = state_10941__$1;(statearr_10949_10969[2] = inst_10936);
(statearr_10949_10969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 7))
{var inst_10923 = (state_10941[9]);var inst_10923__$1 = (state_10941[2]);var inst_10924 = (inst_10923__$1 == null);var inst_10925 = cljs.core.not.call(null,inst_10924);var state_10941__$1 = (function (){var statearr_10950 = state_10941;(statearr_10950[9] = inst_10923__$1);
return statearr_10950;
})();if(inst_10925)
{var statearr_10951_10970 = state_10941__$1;(statearr_10951_10970[1] = 8);
} else
{var statearr_10952_10971 = state_10941__$1;(statearr_10952_10971[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 8))
{var inst_10923 = (state_10941[9]);var state_10941__$1 = state_10941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10941__$1,11,out,inst_10923);
} else
{if((state_val_10942 === 9))
{var state_10941__$1 = state_10941;var statearr_10953_10972 = state_10941__$1;(statearr_10953_10972[2] = null);
(statearr_10953_10972[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 10))
{var inst_10933 = (state_10941[2]);var state_10941__$1 = state_10941;var statearr_10954_10973 = state_10941__$1;(statearr_10954_10973[2] = inst_10933);
(statearr_10954_10973[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10942 === 11))
{var inst_10918 = (state_10941[7]);var inst_10928 = (state_10941[2]);var inst_10929 = (inst_10918 + 1);var inst_10918__$1 = inst_10929;var state_10941__$1 = (function (){var statearr_10955 = state_10941;(statearr_10955[7] = inst_10918__$1);
(statearr_10955[10] = inst_10928);
return statearr_10955;
})();var statearr_10956_10974 = state_10941__$1;(statearr_10956_10974[2] = null);
(statearr_10956_10974[1] = 2);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_10960 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10960[0] = state_machine__6146__auto__);
(statearr_10960[1] = 1);
return statearr_10960;
});
var state_machine__6146__auto____1 = (function (state_10941){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_10941);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e10961){if((e10961 instanceof Object))
{var ex__6149__auto__ = e10961;var statearr_10962_10975 = state_10941;(statearr_10962_10975[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10976 = state_10941;
state_10941 = G__10976;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_10941){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_10941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_10963 = f__6161__auto__.call(null);(statearr_10963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___10964);
return statearr_10963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6160__auto___11073 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_11048){var state_val_11049 = (state_11048[1]);if((state_val_11049 === 1))
{var inst_11025 = null;var state_11048__$1 = (function (){var statearr_11050 = state_11048;(statearr_11050[7] = inst_11025);
return statearr_11050;
})();var statearr_11051_11074 = state_11048__$1;(statearr_11051_11074[2] = null);
(statearr_11051_11074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11049 === 2))
{var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11048__$1,4,ch);
} else
{if((state_val_11049 === 3))
{var inst_11045 = (state_11048[2]);var inst_11046 = cljs.core.async.close_BANG_.call(null,out);var state_11048__$1 = (function (){var statearr_11052 = state_11048;(statearr_11052[8] = inst_11045);
return statearr_11052;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11048__$1,inst_11046);
} else
{if((state_val_11049 === 4))
{var inst_11028 = (state_11048[9]);var inst_11028__$1 = (state_11048[2]);var inst_11029 = (inst_11028__$1 == null);var inst_11030 = cljs.core.not.call(null,inst_11029);var state_11048__$1 = (function (){var statearr_11053 = state_11048;(statearr_11053[9] = inst_11028__$1);
return statearr_11053;
})();if(inst_11030)
{var statearr_11054_11075 = state_11048__$1;(statearr_11054_11075[1] = 5);
} else
{var statearr_11055_11076 = state_11048__$1;(statearr_11055_11076[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11049 === 5))
{var inst_11025 = (state_11048[7]);var inst_11028 = (state_11048[9]);var inst_11032 = cljs.core._EQ_.call(null,inst_11028,inst_11025);var state_11048__$1 = state_11048;if(inst_11032)
{var statearr_11056_11077 = state_11048__$1;(statearr_11056_11077[1] = 8);
} else
{var statearr_11057_11078 = state_11048__$1;(statearr_11057_11078[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11049 === 6))
{var state_11048__$1 = state_11048;var statearr_11059_11079 = state_11048__$1;(statearr_11059_11079[2] = null);
(statearr_11059_11079[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11049 === 7))
{var inst_11043 = (state_11048[2]);var state_11048__$1 = state_11048;var statearr_11060_11080 = state_11048__$1;(statearr_11060_11080[2] = inst_11043);
(statearr_11060_11080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11049 === 8))
{var inst_11025 = (state_11048[7]);var tmp11058 = inst_11025;var inst_11025__$1 = tmp11058;var state_11048__$1 = (function (){var statearr_11061 = state_11048;(statearr_11061[7] = inst_11025__$1);
return statearr_11061;
})();var statearr_11062_11081 = state_11048__$1;(statearr_11062_11081[2] = null);
(statearr_11062_11081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11049 === 9))
{var inst_11028 = (state_11048[9]);var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11048__$1,11,out,inst_11028);
} else
{if((state_val_11049 === 10))
{var inst_11040 = (state_11048[2]);var state_11048__$1 = state_11048;var statearr_11063_11082 = state_11048__$1;(statearr_11063_11082[2] = inst_11040);
(statearr_11063_11082[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11049 === 11))
{var inst_11028 = (state_11048[9]);var inst_11037 = (state_11048[2]);var inst_11025 = inst_11028;var state_11048__$1 = (function (){var statearr_11064 = state_11048;(statearr_11064[7] = inst_11025);
(statearr_11064[10] = inst_11037);
return statearr_11064;
})();var statearr_11065_11083 = state_11048__$1;(statearr_11065_11083[2] = null);
(statearr_11065_11083[1] = 2);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_11069 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11069[0] = state_machine__6146__auto__);
(statearr_11069[1] = 1);
return statearr_11069;
});
var state_machine__6146__auto____1 = (function (state_11048){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_11048);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e11070){if((e11070 instanceof Object))
{var ex__6149__auto__ = e11070;var statearr_11071_11084 = state_11048;(statearr_11071_11084[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11048);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11085 = state_11048;
state_11048 = G__11085;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_11048){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_11048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_11072 = f__6161__auto__.call(null);(statearr_11072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___11073);
return statearr_11072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6160__auto___11220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_11190){var state_val_11191 = (state_11190[1]);if((state_val_11191 === 1))
{var inst_11153 = (new Array(n));var inst_11154 = inst_11153;var inst_11155 = 0;var state_11190__$1 = (function (){var statearr_11192 = state_11190;(statearr_11192[7] = inst_11154);
(statearr_11192[8] = inst_11155);
return statearr_11192;
})();var statearr_11193_11221 = state_11190__$1;(statearr_11193_11221[2] = null);
(statearr_11193_11221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 2))
{var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11190__$1,4,ch);
} else
{if((state_val_11191 === 3))
{var inst_11188 = (state_11190[2]);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11190__$1,inst_11188);
} else
{if((state_val_11191 === 4))
{var inst_11158 = (state_11190[9]);var inst_11158__$1 = (state_11190[2]);var inst_11159 = (inst_11158__$1 == null);var inst_11160 = cljs.core.not.call(null,inst_11159);var state_11190__$1 = (function (){var statearr_11194 = state_11190;(statearr_11194[9] = inst_11158__$1);
return statearr_11194;
})();if(inst_11160)
{var statearr_11195_11222 = state_11190__$1;(statearr_11195_11222[1] = 5);
} else
{var statearr_11196_11223 = state_11190__$1;(statearr_11196_11223[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 5))
{var inst_11154 = (state_11190[7]);var inst_11163 = (state_11190[10]);var inst_11158 = (state_11190[9]);var inst_11155 = (state_11190[8]);var inst_11162 = (inst_11154[inst_11155] = inst_11158);var inst_11163__$1 = (inst_11155 + 1);var inst_11164 = (inst_11163__$1 < n);var state_11190__$1 = (function (){var statearr_11197 = state_11190;(statearr_11197[11] = inst_11162);
(statearr_11197[10] = inst_11163__$1);
return statearr_11197;
})();if(cljs.core.truth_(inst_11164))
{var statearr_11198_11224 = state_11190__$1;(statearr_11198_11224[1] = 8);
} else
{var statearr_11199_11225 = state_11190__$1;(statearr_11199_11225[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 6))
{var inst_11155 = (state_11190[8]);var inst_11176 = (inst_11155 > 0);var state_11190__$1 = state_11190;if(cljs.core.truth_(inst_11176))
{var statearr_11201_11226 = state_11190__$1;(statearr_11201_11226[1] = 12);
} else
{var statearr_11202_11227 = state_11190__$1;(statearr_11202_11227[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 7))
{var inst_11186 = (state_11190[2]);var state_11190__$1 = state_11190;var statearr_11203_11228 = state_11190__$1;(statearr_11203_11228[2] = inst_11186);
(statearr_11203_11228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 8))
{var inst_11154 = (state_11190[7]);var inst_11163 = (state_11190[10]);var tmp11200 = inst_11154;var inst_11154__$1 = tmp11200;var inst_11155 = inst_11163;var state_11190__$1 = (function (){var statearr_11204 = state_11190;(statearr_11204[7] = inst_11154__$1);
(statearr_11204[8] = inst_11155);
return statearr_11204;
})();var statearr_11205_11229 = state_11190__$1;(statearr_11205_11229[2] = null);
(statearr_11205_11229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 9))
{var inst_11154 = (state_11190[7]);var inst_11168 = cljs.core.vec.call(null,inst_11154);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,11,out,inst_11168);
} else
{if((state_val_11191 === 10))
{var inst_11174 = (state_11190[2]);var state_11190__$1 = state_11190;var statearr_11206_11230 = state_11190__$1;(statearr_11206_11230[2] = inst_11174);
(statearr_11206_11230[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 11))
{var inst_11170 = (state_11190[2]);var inst_11171 = (new Array(n));var inst_11154 = inst_11171;var inst_11155 = 0;var state_11190__$1 = (function (){var statearr_11207 = state_11190;(statearr_11207[12] = inst_11170);
(statearr_11207[7] = inst_11154);
(statearr_11207[8] = inst_11155);
return statearr_11207;
})();var statearr_11208_11231 = state_11190__$1;(statearr_11208_11231[2] = null);
(statearr_11208_11231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 12))
{var inst_11154 = (state_11190[7]);var inst_11178 = cljs.core.vec.call(null,inst_11154);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,15,out,inst_11178);
} else
{if((state_val_11191 === 13))
{var state_11190__$1 = state_11190;var statearr_11209_11232 = state_11190__$1;(statearr_11209_11232[2] = null);
(statearr_11209_11232[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 14))
{var inst_11183 = (state_11190[2]);var inst_11184 = cljs.core.async.close_BANG_.call(null,out);var state_11190__$1 = (function (){var statearr_11210 = state_11190;(statearr_11210[13] = inst_11183);
return statearr_11210;
})();var statearr_11211_11233 = state_11190__$1;(statearr_11211_11233[2] = inst_11184);
(statearr_11211_11233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 15))
{var inst_11180 = (state_11190[2]);var state_11190__$1 = state_11190;var statearr_11212_11234 = state_11190__$1;(statearr_11212_11234[2] = inst_11180);
(statearr_11212_11234[1] = 14);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_11216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11216[0] = state_machine__6146__auto__);
(statearr_11216[1] = 1);
return statearr_11216;
});
var state_machine__6146__auto____1 = (function (state_11190){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_11190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e11217){if((e11217 instanceof Object))
{var ex__6149__auto__ = e11217;var statearr_11218_11235 = state_11190;(statearr_11218_11235[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11236 = state_11190;
state_11190 = G__11236;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_11219 = f__6161__auto__.call(null);(statearr_11219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___11220);
return statearr_11219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6160__auto___11379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6161__auto__ = (function (){var switch__6145__auto__ = (function (state_11349){var state_val_11350 = (state_11349[1]);if((state_val_11350 === 1))
{var inst_11308 = [];var inst_11309 = inst_11308;var inst_11310 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11349__$1 = (function (){var statearr_11351 = state_11349;(statearr_11351[7] = inst_11309);
(statearr_11351[8] = inst_11310);
return statearr_11351;
})();var statearr_11352_11380 = state_11349__$1;(statearr_11352_11380[2] = null);
(statearr_11352_11380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 2))
{var state_11349__$1 = state_11349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11349__$1,4,ch);
} else
{if((state_val_11350 === 3))
{var inst_11347 = (state_11349[2]);var state_11349__$1 = state_11349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11349__$1,inst_11347);
} else
{if((state_val_11350 === 4))
{var inst_11313 = (state_11349[9]);var inst_11313__$1 = (state_11349[2]);var inst_11314 = (inst_11313__$1 == null);var inst_11315 = cljs.core.not.call(null,inst_11314);var state_11349__$1 = (function (){var statearr_11353 = state_11349;(statearr_11353[9] = inst_11313__$1);
return statearr_11353;
})();if(inst_11315)
{var statearr_11354_11381 = state_11349__$1;(statearr_11354_11381[1] = 5);
} else
{var statearr_11355_11382 = state_11349__$1;(statearr_11355_11382[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 5))
{var inst_11317 = (state_11349[10]);var inst_11313 = (state_11349[9]);var inst_11310 = (state_11349[8]);var inst_11317__$1 = f.call(null,inst_11313);var inst_11318 = cljs.core._EQ_.call(null,inst_11317__$1,inst_11310);var inst_11319 = cljs.core.keyword_identical_QMARK_.call(null,inst_11310,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11320 = (inst_11318) || (inst_11319);var state_11349__$1 = (function (){var statearr_11356 = state_11349;(statearr_11356[10] = inst_11317__$1);
return statearr_11356;
})();if(cljs.core.truth_(inst_11320))
{var statearr_11357_11383 = state_11349__$1;(statearr_11357_11383[1] = 8);
} else
{var statearr_11358_11384 = state_11349__$1;(statearr_11358_11384[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 6))
{var inst_11309 = (state_11349[7]);var inst_11334 = inst_11309.length;var inst_11335 = (inst_11334 > 0);var state_11349__$1 = state_11349;if(cljs.core.truth_(inst_11335))
{var statearr_11360_11385 = state_11349__$1;(statearr_11360_11385[1] = 12);
} else
{var statearr_11361_11386 = state_11349__$1;(statearr_11361_11386[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 7))
{var inst_11345 = (state_11349[2]);var state_11349__$1 = state_11349;var statearr_11362_11387 = state_11349__$1;(statearr_11362_11387[2] = inst_11345);
(statearr_11362_11387[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 8))
{var inst_11309 = (state_11349[7]);var inst_11317 = (state_11349[10]);var inst_11313 = (state_11349[9]);var inst_11322 = inst_11309.push(inst_11313);var tmp11359 = inst_11309;var inst_11309__$1 = tmp11359;var inst_11310 = inst_11317;var state_11349__$1 = (function (){var statearr_11363 = state_11349;(statearr_11363[7] = inst_11309__$1);
(statearr_11363[11] = inst_11322);
(statearr_11363[8] = inst_11310);
return statearr_11363;
})();var statearr_11364_11388 = state_11349__$1;(statearr_11364_11388[2] = null);
(statearr_11364_11388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 9))
{var inst_11309 = (state_11349[7]);var inst_11325 = cljs.core.vec.call(null,inst_11309);var state_11349__$1 = state_11349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11349__$1,11,out,inst_11325);
} else
{if((state_val_11350 === 10))
{var inst_11332 = (state_11349[2]);var state_11349__$1 = state_11349;var statearr_11365_11389 = state_11349__$1;(statearr_11365_11389[2] = inst_11332);
(statearr_11365_11389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 11))
{var inst_11317 = (state_11349[10]);var inst_11313 = (state_11349[9]);var inst_11327 = (state_11349[2]);var inst_11328 = [];var inst_11329 = inst_11328.push(inst_11313);var inst_11309 = inst_11328;var inst_11310 = inst_11317;var state_11349__$1 = (function (){var statearr_11366 = state_11349;(statearr_11366[7] = inst_11309);
(statearr_11366[12] = inst_11327);
(statearr_11366[13] = inst_11329);
(statearr_11366[8] = inst_11310);
return statearr_11366;
})();var statearr_11367_11390 = state_11349__$1;(statearr_11367_11390[2] = null);
(statearr_11367_11390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 12))
{var inst_11309 = (state_11349[7]);var inst_11337 = cljs.core.vec.call(null,inst_11309);var state_11349__$1 = state_11349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11349__$1,15,out,inst_11337);
} else
{if((state_val_11350 === 13))
{var state_11349__$1 = state_11349;var statearr_11368_11391 = state_11349__$1;(statearr_11368_11391[2] = null);
(statearr_11368_11391[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 14))
{var inst_11342 = (state_11349[2]);var inst_11343 = cljs.core.async.close_BANG_.call(null,out);var state_11349__$1 = (function (){var statearr_11369 = state_11349;(statearr_11369[14] = inst_11342);
return statearr_11369;
})();var statearr_11370_11392 = state_11349__$1;(statearr_11370_11392[2] = inst_11343);
(statearr_11370_11392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11350 === 15))
{var inst_11339 = (state_11349[2]);var state_11349__$1 = state_11349;var statearr_11371_11393 = state_11349__$1;(statearr_11371_11393[2] = inst_11339);
(statearr_11371_11393[1] = 14);
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
});return ((function (switch__6145__auto__){
return (function() {
var state_machine__6146__auto__ = null;
var state_machine__6146__auto____0 = (function (){var statearr_11375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11375[0] = state_machine__6146__auto__);
(statearr_11375[1] = 1);
return statearr_11375;
});
var state_machine__6146__auto____1 = (function (state_11349){while(true){
var ret_value__6147__auto__ = (function (){try{while(true){
var result__6148__auto__ = switch__6145__auto__.call(null,state_11349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6148__auto__;
}
break;
}
}catch (e11376){if((e11376 instanceof Object))
{var ex__6149__auto__ = e11376;var statearr_11377_11394 = state_11349;(statearr_11377_11394[5] = ex__6149__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6147__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11395 = state_11349;
state_11349 = G__11395;
continue;
}
} else
{return ret_value__6147__auto__;
}
break;
}
});
state_machine__6146__auto__ = function(state_11349){
switch(arguments.length){
case 0:
return state_machine__6146__auto____0.call(this);
case 1:
return state_machine__6146__auto____1.call(this,state_11349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6146__auto____0;
state_machine__6146__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6146__auto____1;
return state_machine__6146__auto__;
})()
;})(switch__6145__auto__))
})();var state__6162__auto__ = (function (){var statearr_11378 = f__6161__auto__.call(null);(statearr_11378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6160__auto___11379);
return statearr_11378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6162__auto__);
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

//# sourceMappingURL=async.js.map