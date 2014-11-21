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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13347 = (function (f,fn_handler,meta13348){
this.f = f;
this.fn_handler = fn_handler;
this.meta13348 = meta13348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13347.cljs$lang$type = true;
cljs.core.async.t13347.cljs$lang$ctorStr = "cljs.core.async/t13347";
cljs.core.async.t13347.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t13347");
});
cljs.core.async.t13347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13349){var self__ = this;
var _13349__$1 = this;return self__.meta13348;
});
cljs.core.async.t13347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13349,meta13348__$1){var self__ = this;
var _13349__$1 = this;return (new cljs.core.async.t13347(self__.f,self__.fn_handler,meta13348__$1));
});
cljs.core.async.__GT_t13347 = (function __GT_t13347(f__$1,fn_handler__$1,meta13348){return (new cljs.core.async.t13347(f__$1,fn_handler__$1,meta13348));
});
}
return (new cljs.core.async.t13347(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13351 = buff;if(G__13351)
{var bit__4116__auto__ = null;if(cljs.core.truth_((function (){var or__3466__auto__ = bit__4116__auto__;if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{return G__13351.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13351.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13351);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13351);
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
{var val_13352 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13352);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13352);
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
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3454__auto__ = ret;if(cljs.core.truth_(and__3454__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3454__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4314__auto___13353 = n;var x_13354 = 0;while(true){
if((x_13354 < n__4314__auto___13353))
{(a[x_13354] = 0);
{
var G__13355 = (x_13354 + 1);
x_13354 = G__13355;
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
var G__13356 = (i + 1);
i = G__13356;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13360 = (function (flag,alt_flag,meta13361){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13361 = meta13361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13360.cljs$lang$type = true;
cljs.core.async.t13360.cljs$lang$ctorStr = "cljs.core.async/t13360";
cljs.core.async.t13360.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t13360");
});
cljs.core.async.t13360.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13362){var self__ = this;
var _13362__$1 = this;return self__.meta13361;
});
cljs.core.async.t13360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13362,meta13361__$1){var self__ = this;
var _13362__$1 = this;return (new cljs.core.async.t13360(self__.flag,self__.alt_flag,meta13361__$1));
});
cljs.core.async.__GT_t13360 = (function __GT_t13360(flag__$1,alt_flag__$1,meta13361){return (new cljs.core.async.t13360(flag__$1,alt_flag__$1,meta13361));
});
}
return (new cljs.core.async.t13360(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13366 = (function (cb,flag,alt_handler,meta13367){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13367 = meta13367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13366.cljs$lang$type = true;
cljs.core.async.t13366.cljs$lang$ctorStr = "cljs.core.async/t13366";
cljs.core.async.t13366.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t13366");
});
cljs.core.async.t13366.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13368){var self__ = this;
var _13368__$1 = this;return self__.meta13367;
});
cljs.core.async.t13366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13368,meta13367__$1){var self__ = this;
var _13368__$1 = this;return (new cljs.core.async.t13366(self__.cb,self__.flag,self__.alt_handler,meta13367__$1));
});
cljs.core.async.__GT_t13366 = (function __GT_t13366(cb__$1,flag__$1,alt_handler__$1,meta13367){return (new cljs.core.async.t13366(cb__$1,flag__$1,alt_handler__$1,meta13367));
});
}
return (new cljs.core.async.t13366(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13369_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13369_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3466__auto__ = wport;if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13370 = (i + 1);
i = G__13370;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3466__auto__ = ret;if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3454__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3454__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3454__auto__;
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
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
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
var alts_BANG___delegate = function (ports,p__13371){var map__13373 = p__13371;var map__13373__$1 = ((cljs.core.seq_QMARK_.call(null,map__13373))?cljs.core.apply.call(null,cljs.core.hash_map,map__13373):map__13373);var opts = map__13373__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13371 = null;if (arguments.length > 1) {
  p__13371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13371);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13374){
var ports = cljs.core.first(arglist__13374);
var p__13371 = cljs.core.rest(arglist__13374);
return alts_BANG___delegate(ports,p__13371);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13382 = (function (ch,f,map_LT_,meta13383){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13383 = meta13383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13382.cljs$lang$type = true;
cljs.core.async.t13382.cljs$lang$ctorStr = "cljs.core.async/t13382";
cljs.core.async.t13382.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t13382");
});
cljs.core.async.t13382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13385 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13385 = (function (fn1,_,meta13383,ch,f,map_LT_,meta13386){
this.fn1 = fn1;
this._ = _;
this.meta13383 = meta13383;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13386 = meta13386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13385.cljs$lang$type = true;
cljs.core.async.t13385.cljs$lang$ctorStr = "cljs.core.async/t13385";
cljs.core.async.t13385.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t13385");
});
cljs.core.async.t13385.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13385.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13375_SHARP_){return f1.call(null,(((p1__13375_SHARP_ == null))?null:self__.f.call(null,p1__13375_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13387){var self__ = this;
var _13387__$1 = this;return self__.meta13386;
});
cljs.core.async.t13385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13387,meta13386__$1){var self__ = this;
var _13387__$1 = this;return (new cljs.core.async.t13385(self__.fn1,self__._,self__.meta13383,self__.ch,self__.f,self__.map_LT_,meta13386__$1));
});
cljs.core.async.__GT_t13385 = (function __GT_t13385(fn1__$1,___$2,meta13383__$1,ch__$2,f__$2,map_LT___$2,meta13386){return (new cljs.core.async.t13385(fn1__$1,___$2,meta13383__$1,ch__$2,f__$2,map_LT___$2,meta13386));
});
}
return (new cljs.core.async.t13385(fn1,___$1,self__.meta13383,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3454__auto__ = ret;if(cljs.core.truth_(and__3454__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3454__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13382.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13384){var self__ = this;
var _13384__$1 = this;return self__.meta13383;
});
cljs.core.async.t13382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13384,meta13383__$1){var self__ = this;
var _13384__$1 = this;return (new cljs.core.async.t13382(self__.ch,self__.f,self__.map_LT_,meta13383__$1));
});
cljs.core.async.__GT_t13382 = (function __GT_t13382(ch__$1,f__$1,map_LT___$1,meta13383){return (new cljs.core.async.t13382(ch__$1,f__$1,map_LT___$1,meta13383));
});
}
return (new cljs.core.async.t13382(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13391 = (function (ch,f,map_GT_,meta13392){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13392 = meta13392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13391.cljs$lang$type = true;
cljs.core.async.t13391.cljs$lang$ctorStr = "cljs.core.async/t13391";
cljs.core.async.t13391.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t13391");
});
cljs.core.async.t13391.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13391.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13391.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13393){var self__ = this;
var _13393__$1 = this;return self__.meta13392;
});
cljs.core.async.t13391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13393,meta13392__$1){var self__ = this;
var _13393__$1 = this;return (new cljs.core.async.t13391(self__.ch,self__.f,self__.map_GT_,meta13392__$1));
});
cljs.core.async.__GT_t13391 = (function __GT_t13391(ch__$1,f__$1,map_GT___$1,meta13392){return (new cljs.core.async.t13391(ch__$1,f__$1,map_GT___$1,meta13392));
});
}
return (new cljs.core.async.t13391(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13397 = (function (ch,p,filter_GT_,meta13398){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13398 = meta13398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13397.cljs$lang$type = true;
cljs.core.async.t13397.cljs$lang$ctorStr = "cljs.core.async/t13397";
cljs.core.async.t13397.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t13397");
});
cljs.core.async.t13397.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13397.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13397.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13399){var self__ = this;
var _13399__$1 = this;return self__.meta13398;
});
cljs.core.async.t13397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13399,meta13398__$1){var self__ = this;
var _13399__$1 = this;return (new cljs.core.async.t13397(self__.ch,self__.p,self__.filter_GT_,meta13398__$1));
});
cljs.core.async.__GT_t13397 = (function __GT_t13397(ch__$1,p__$1,filter_GT___$1,meta13398){return (new cljs.core.async.t13397(ch__$1,p__$1,filter_GT___$1,meta13398));
});
}
return (new cljs.core.async.t13397(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5587__auto___13482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_13461){var state_val_13462 = (state_13461[1]);if((state_val_13462 === 1))
{var state_13461__$1 = state_13461;var statearr_13463_13483 = state_13461__$1;(statearr_13463_13483[2] = null);
(statearr_13463_13483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 2))
{var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13461__$1,4,ch);
} else
{if((state_val_13462 === 3))
{var inst_13459 = (state_13461[2]);var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13461__$1,inst_13459);
} else
{if((state_val_13462 === 4))
{var inst_13443 = (state_13461[7]);var inst_13443__$1 = (state_13461[2]);var inst_13444 = (inst_13443__$1 == null);var state_13461__$1 = (function (){var statearr_13464 = state_13461;(statearr_13464[7] = inst_13443__$1);
return statearr_13464;
})();if(cljs.core.truth_(inst_13444))
{var statearr_13465_13484 = state_13461__$1;(statearr_13465_13484[1] = 5);
} else
{var statearr_13466_13485 = state_13461__$1;(statearr_13466_13485[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 5))
{var inst_13446 = cljs.core.async.close_BANG_.call(null,out);var state_13461__$1 = state_13461;var statearr_13467_13486 = state_13461__$1;(statearr_13467_13486[2] = inst_13446);
(statearr_13467_13486[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 6))
{var inst_13443 = (state_13461[7]);var inst_13448 = p.call(null,inst_13443);var state_13461__$1 = state_13461;if(cljs.core.truth_(inst_13448))
{var statearr_13468_13487 = state_13461__$1;(statearr_13468_13487[1] = 8);
} else
{var statearr_13469_13488 = state_13461__$1;(statearr_13469_13488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 7))
{var inst_13457 = (state_13461[2]);var state_13461__$1 = state_13461;var statearr_13470_13489 = state_13461__$1;(statearr_13470_13489[2] = inst_13457);
(statearr_13470_13489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 8))
{var inst_13443 = (state_13461[7]);var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13461__$1,11,out,inst_13443);
} else
{if((state_val_13462 === 9))
{var state_13461__$1 = state_13461;var statearr_13471_13490 = state_13461__$1;(statearr_13471_13490[2] = null);
(statearr_13471_13490[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 10))
{var inst_13454 = (state_13461[2]);var state_13461__$1 = (function (){var statearr_13472 = state_13461;(statearr_13472[8] = inst_13454);
return statearr_13472;
})();var statearr_13473_13491 = state_13461__$1;(statearr_13473_13491[2] = null);
(statearr_13473_13491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 11))
{var inst_13451 = (state_13461[2]);var state_13461__$1 = state_13461;var statearr_13474_13492 = state_13461__$1;(statearr_13474_13492[2] = inst_13451);
(statearr_13474_13492[1] = 10);
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
var state_machine__5573__auto____0 = (function (){var statearr_13478 = [null,null,null,null,null,null,null,null,null];(statearr_13478[0] = state_machine__5573__auto__);
(statearr_13478[1] = 1);
return statearr_13478;
});
var state_machine__5573__auto____1 = (function (state_13461){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_13461);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e13479){if((e13479 instanceof Object))
{var ex__5576__auto__ = e13479;var statearr_13480_13493 = state_13461;(statearr_13480_13493[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13494 = state_13461;
state_13461 = G__13494;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_13461){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_13461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_13481 = f__5588__auto__.call(null);(statearr_13481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___13482);
return statearr_13481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_13646){var state_val_13647 = (state_13646[1]);if((state_val_13647 === 1))
{var state_13646__$1 = state_13646;var statearr_13648_13685 = state_13646__$1;(statearr_13648_13685[2] = null);
(statearr_13648_13685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 2))
{var state_13646__$1 = state_13646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13646__$1,4,in$);
} else
{if((state_val_13647 === 3))
{var inst_13644 = (state_13646[2]);var state_13646__$1 = state_13646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13646__$1,inst_13644);
} else
{if((state_val_13647 === 4))
{var inst_13592 = (state_13646[7]);var inst_13592__$1 = (state_13646[2]);var inst_13593 = (inst_13592__$1 == null);var state_13646__$1 = (function (){var statearr_13649 = state_13646;(statearr_13649[7] = inst_13592__$1);
return statearr_13649;
})();if(cljs.core.truth_(inst_13593))
{var statearr_13650_13686 = state_13646__$1;(statearr_13650_13686[1] = 5);
} else
{var statearr_13651_13687 = state_13646__$1;(statearr_13651_13687[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 5))
{var inst_13595 = cljs.core.async.close_BANG_.call(null,out);var state_13646__$1 = state_13646;var statearr_13652_13688 = state_13646__$1;(statearr_13652_13688[2] = inst_13595);
(statearr_13652_13688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 6))
{var inst_13592 = (state_13646[7]);var inst_13597 = f.call(null,inst_13592);var inst_13602 = cljs.core.seq.call(null,inst_13597);var inst_13603 = inst_13602;var inst_13604 = null;var inst_13605 = 0;var inst_13606 = 0;var state_13646__$1 = (function (){var statearr_13653 = state_13646;(statearr_13653[8] = inst_13606);
(statearr_13653[9] = inst_13605);
(statearr_13653[10] = inst_13603);
(statearr_13653[11] = inst_13604);
return statearr_13653;
})();var statearr_13654_13689 = state_13646__$1;(statearr_13654_13689[2] = null);
(statearr_13654_13689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 7))
{var inst_13642 = (state_13646[2]);var state_13646__$1 = state_13646;var statearr_13655_13690 = state_13646__$1;(statearr_13655_13690[2] = inst_13642);
(statearr_13655_13690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 8))
{var inst_13606 = (state_13646[8]);var inst_13605 = (state_13646[9]);var inst_13608 = (inst_13606 < inst_13605);var inst_13609 = inst_13608;var state_13646__$1 = state_13646;if(cljs.core.truth_(inst_13609))
{var statearr_13656_13691 = state_13646__$1;(statearr_13656_13691[1] = 10);
} else
{var statearr_13657_13692 = state_13646__$1;(statearr_13657_13692[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 9))
{var inst_13639 = (state_13646[2]);var state_13646__$1 = (function (){var statearr_13658 = state_13646;(statearr_13658[12] = inst_13639);
return statearr_13658;
})();var statearr_13659_13693 = state_13646__$1;(statearr_13659_13693[2] = null);
(statearr_13659_13693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 10))
{var inst_13606 = (state_13646[8]);var inst_13604 = (state_13646[11]);var inst_13611 = cljs.core._nth.call(null,inst_13604,inst_13606);var state_13646__$1 = state_13646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13646__$1,13,out,inst_13611);
} else
{if((state_val_13647 === 11))
{var inst_13617 = (state_13646[13]);var inst_13603 = (state_13646[10]);var inst_13617__$1 = cljs.core.seq.call(null,inst_13603);var state_13646__$1 = (function (){var statearr_13663 = state_13646;(statearr_13663[13] = inst_13617__$1);
return statearr_13663;
})();if(inst_13617__$1)
{var statearr_13664_13694 = state_13646__$1;(statearr_13664_13694[1] = 14);
} else
{var statearr_13665_13695 = state_13646__$1;(statearr_13665_13695[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 12))
{var inst_13637 = (state_13646[2]);var state_13646__$1 = state_13646;var statearr_13666_13696 = state_13646__$1;(statearr_13666_13696[2] = inst_13637);
(statearr_13666_13696[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 13))
{var inst_13606 = (state_13646[8]);var inst_13605 = (state_13646[9]);var inst_13603 = (state_13646[10]);var inst_13604 = (state_13646[11]);var inst_13613 = (state_13646[2]);var inst_13614 = (inst_13606 + 1);var tmp13660 = inst_13605;var tmp13661 = inst_13603;var tmp13662 = inst_13604;var inst_13603__$1 = tmp13661;var inst_13604__$1 = tmp13662;var inst_13605__$1 = tmp13660;var inst_13606__$1 = inst_13614;var state_13646__$1 = (function (){var statearr_13667 = state_13646;(statearr_13667[8] = inst_13606__$1);
(statearr_13667[9] = inst_13605__$1);
(statearr_13667[14] = inst_13613);
(statearr_13667[10] = inst_13603__$1);
(statearr_13667[11] = inst_13604__$1);
return statearr_13667;
})();var statearr_13668_13697 = state_13646__$1;(statearr_13668_13697[2] = null);
(statearr_13668_13697[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 14))
{var inst_13617 = (state_13646[13]);var inst_13619 = cljs.core.chunked_seq_QMARK_.call(null,inst_13617);var state_13646__$1 = state_13646;if(inst_13619)
{var statearr_13669_13698 = state_13646__$1;(statearr_13669_13698[1] = 17);
} else
{var statearr_13670_13699 = state_13646__$1;(statearr_13670_13699[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 15))
{var state_13646__$1 = state_13646;var statearr_13671_13700 = state_13646__$1;(statearr_13671_13700[2] = null);
(statearr_13671_13700[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 16))
{var inst_13635 = (state_13646[2]);var state_13646__$1 = state_13646;var statearr_13672_13701 = state_13646__$1;(statearr_13672_13701[2] = inst_13635);
(statearr_13672_13701[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 17))
{var inst_13617 = (state_13646[13]);var inst_13621 = cljs.core.chunk_first.call(null,inst_13617);var inst_13622 = cljs.core.chunk_rest.call(null,inst_13617);var inst_13623 = cljs.core.count.call(null,inst_13621);var inst_13603 = inst_13622;var inst_13604 = inst_13621;var inst_13605 = inst_13623;var inst_13606 = 0;var state_13646__$1 = (function (){var statearr_13673 = state_13646;(statearr_13673[8] = inst_13606);
(statearr_13673[9] = inst_13605);
(statearr_13673[10] = inst_13603);
(statearr_13673[11] = inst_13604);
return statearr_13673;
})();var statearr_13674_13702 = state_13646__$1;(statearr_13674_13702[2] = null);
(statearr_13674_13702[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 18))
{var inst_13617 = (state_13646[13]);var inst_13626 = cljs.core.first.call(null,inst_13617);var state_13646__$1 = state_13646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13646__$1,20,out,inst_13626);
} else
{if((state_val_13647 === 19))
{var inst_13632 = (state_13646[2]);var state_13646__$1 = state_13646;var statearr_13675_13703 = state_13646__$1;(statearr_13675_13703[2] = inst_13632);
(statearr_13675_13703[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13647 === 20))
{var inst_13617 = (state_13646[13]);var inst_13628 = (state_13646[2]);var inst_13629 = cljs.core.next.call(null,inst_13617);var inst_13603 = inst_13629;var inst_13604 = null;var inst_13605 = 0;var inst_13606 = 0;var state_13646__$1 = (function (){var statearr_13676 = state_13646;(statearr_13676[8] = inst_13606);
(statearr_13676[9] = inst_13605);
(statearr_13676[15] = inst_13628);
(statearr_13676[10] = inst_13603);
(statearr_13676[11] = inst_13604);
return statearr_13676;
})();var statearr_13677_13704 = state_13646__$1;(statearr_13677_13704[2] = null);
(statearr_13677_13704[1] = 8);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_13681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13681[0] = state_machine__5573__auto__);
(statearr_13681[1] = 1);
return statearr_13681;
});
var state_machine__5573__auto____1 = (function (state_13646){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_13646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e13682){if((e13682 instanceof Object))
{var ex__5576__auto__ = e13682;var statearr_13683_13705 = state_13646;(statearr_13683_13705[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13706 = state_13646;
state_13646 = G__13706;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_13646){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_13646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_13684 = f__5588__auto__.call(null);(statearr_13684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto__);
return statearr_13684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return c__5587__auto__;
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
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5587__auto___13787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_13766){var state_val_13767 = (state_13766[1]);if((state_val_13767 === 1))
{var state_13766__$1 = state_13766;var statearr_13768_13788 = state_13766__$1;(statearr_13768_13788[2] = null);
(statearr_13768_13788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13767 === 2))
{var state_13766__$1 = state_13766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13766__$1,4,from);
} else
{if((state_val_13767 === 3))
{var inst_13764 = (state_13766[2]);var state_13766__$1 = state_13766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13766__$1,inst_13764);
} else
{if((state_val_13767 === 4))
{var inst_13749 = (state_13766[7]);var inst_13749__$1 = (state_13766[2]);var inst_13750 = (inst_13749__$1 == null);var state_13766__$1 = (function (){var statearr_13769 = state_13766;(statearr_13769[7] = inst_13749__$1);
return statearr_13769;
})();if(cljs.core.truth_(inst_13750))
{var statearr_13770_13789 = state_13766__$1;(statearr_13770_13789[1] = 5);
} else
{var statearr_13771_13790 = state_13766__$1;(statearr_13771_13790[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13767 === 5))
{var state_13766__$1 = state_13766;if(cljs.core.truth_(close_QMARK_))
{var statearr_13772_13791 = state_13766__$1;(statearr_13772_13791[1] = 8);
} else
{var statearr_13773_13792 = state_13766__$1;(statearr_13773_13792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13767 === 6))
{var inst_13749 = (state_13766[7]);var state_13766__$1 = state_13766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13766__$1,11,to,inst_13749);
} else
{if((state_val_13767 === 7))
{var inst_13762 = (state_13766[2]);var state_13766__$1 = state_13766;var statearr_13774_13793 = state_13766__$1;(statearr_13774_13793[2] = inst_13762);
(statearr_13774_13793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13767 === 8))
{var inst_13753 = cljs.core.async.close_BANG_.call(null,to);var state_13766__$1 = state_13766;var statearr_13775_13794 = state_13766__$1;(statearr_13775_13794[2] = inst_13753);
(statearr_13775_13794[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13767 === 9))
{var state_13766__$1 = state_13766;var statearr_13776_13795 = state_13766__$1;(statearr_13776_13795[2] = null);
(statearr_13776_13795[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13767 === 10))
{var inst_13756 = (state_13766[2]);var state_13766__$1 = state_13766;var statearr_13777_13796 = state_13766__$1;(statearr_13777_13796[2] = inst_13756);
(statearr_13777_13796[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13767 === 11))
{var inst_13759 = (state_13766[2]);var state_13766__$1 = (function (){var statearr_13778 = state_13766;(statearr_13778[8] = inst_13759);
return statearr_13778;
})();var statearr_13779_13797 = state_13766__$1;(statearr_13779_13797[2] = null);
(statearr_13779_13797[1] = 2);
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
var state_machine__5573__auto____0 = (function (){var statearr_13783 = [null,null,null,null,null,null,null,null,null];(statearr_13783[0] = state_machine__5573__auto__);
(statearr_13783[1] = 1);
return statearr_13783;
});
var state_machine__5573__auto____1 = (function (state_13766){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_13766);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e13784){if((e13784 instanceof Object))
{var ex__5576__auto__ = e13784;var statearr_13785_13798 = state_13766;(statearr_13785_13798[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13766);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13799 = state_13766;
state_13766 = G__13799;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_13766){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_13766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_13786 = f__5588__auto__.call(null);(statearr_13786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___13787);
return statearr_13786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5587__auto___13886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_13864){var state_val_13865 = (state_13864[1]);if((state_val_13865 === 1))
{var state_13864__$1 = state_13864;var statearr_13866_13887 = state_13864__$1;(statearr_13866_13887[2] = null);
(statearr_13866_13887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 2))
{var state_13864__$1 = state_13864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13864__$1,4,ch);
} else
{if((state_val_13865 === 3))
{var inst_13862 = (state_13864[2]);var state_13864__$1 = state_13864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13864__$1,inst_13862);
} else
{if((state_val_13865 === 4))
{var inst_13845 = (state_13864[7]);var inst_13845__$1 = (state_13864[2]);var inst_13846 = (inst_13845__$1 == null);var state_13864__$1 = (function (){var statearr_13867 = state_13864;(statearr_13867[7] = inst_13845__$1);
return statearr_13867;
})();if(cljs.core.truth_(inst_13846))
{var statearr_13868_13888 = state_13864__$1;(statearr_13868_13888[1] = 5);
} else
{var statearr_13869_13889 = state_13864__$1;(statearr_13869_13889[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 5))
{var inst_13848 = cljs.core.async.close_BANG_.call(null,tc);var inst_13849 = cljs.core.async.close_BANG_.call(null,fc);var state_13864__$1 = (function (){var statearr_13870 = state_13864;(statearr_13870[8] = inst_13848);
return statearr_13870;
})();var statearr_13871_13890 = state_13864__$1;(statearr_13871_13890[2] = inst_13849);
(statearr_13871_13890[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 6))
{var inst_13845 = (state_13864[7]);var inst_13851 = p.call(null,inst_13845);var state_13864__$1 = state_13864;if(cljs.core.truth_(inst_13851))
{var statearr_13872_13891 = state_13864__$1;(statearr_13872_13891[1] = 9);
} else
{var statearr_13873_13892 = state_13864__$1;(statearr_13873_13892[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 7))
{var inst_13860 = (state_13864[2]);var state_13864__$1 = state_13864;var statearr_13874_13893 = state_13864__$1;(statearr_13874_13893[2] = inst_13860);
(statearr_13874_13893[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 8))
{var inst_13857 = (state_13864[2]);var state_13864__$1 = (function (){var statearr_13875 = state_13864;(statearr_13875[9] = inst_13857);
return statearr_13875;
})();var statearr_13876_13894 = state_13864__$1;(statearr_13876_13894[2] = null);
(statearr_13876_13894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 9))
{var state_13864__$1 = state_13864;var statearr_13877_13895 = state_13864__$1;(statearr_13877_13895[2] = tc);
(statearr_13877_13895[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 10))
{var state_13864__$1 = state_13864;var statearr_13878_13896 = state_13864__$1;(statearr_13878_13896[2] = fc);
(statearr_13878_13896[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 11))
{var inst_13845 = (state_13864[7]);var inst_13855 = (state_13864[2]);var state_13864__$1 = state_13864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13864__$1,8,inst_13855,inst_13845);
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
var state_machine__5573__auto____0 = (function (){var statearr_13882 = [null,null,null,null,null,null,null,null,null,null];(statearr_13882[0] = state_machine__5573__auto__);
(statearr_13882[1] = 1);
return statearr_13882;
});
var state_machine__5573__auto____1 = (function (state_13864){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_13864);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e13883){if((e13883 instanceof Object))
{var ex__5576__auto__ = e13883;var statearr_13884_13897 = state_13864;(statearr_13884_13897[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13898 = state_13864;
state_13864 = G__13898;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_13864){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_13864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_13885 = f__5588__auto__.call(null);(statearr_13885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___13886);
return statearr_13885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_13945){var state_val_13946 = (state_13945[1]);if((state_val_13946 === 7))
{var inst_13941 = (state_13945[2]);var state_13945__$1 = state_13945;var statearr_13947_13963 = state_13945__$1;(statearr_13947_13963[2] = inst_13941);
(statearr_13947_13963[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13946 === 6))
{var inst_13931 = (state_13945[7]);var inst_13934 = (state_13945[8]);var inst_13938 = f.call(null,inst_13931,inst_13934);var inst_13931__$1 = inst_13938;var state_13945__$1 = (function (){var statearr_13948 = state_13945;(statearr_13948[7] = inst_13931__$1);
return statearr_13948;
})();var statearr_13949_13964 = state_13945__$1;(statearr_13949_13964[2] = null);
(statearr_13949_13964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13946 === 5))
{var inst_13931 = (state_13945[7]);var state_13945__$1 = state_13945;var statearr_13950_13965 = state_13945__$1;(statearr_13950_13965[2] = inst_13931);
(statearr_13950_13965[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13946 === 4))
{var inst_13934 = (state_13945[8]);var inst_13934__$1 = (state_13945[2]);var inst_13935 = (inst_13934__$1 == null);var state_13945__$1 = (function (){var statearr_13951 = state_13945;(statearr_13951[8] = inst_13934__$1);
return statearr_13951;
})();if(cljs.core.truth_(inst_13935))
{var statearr_13952_13966 = state_13945__$1;(statearr_13952_13966[1] = 5);
} else
{var statearr_13953_13967 = state_13945__$1;(statearr_13953_13967[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13946 === 3))
{var inst_13943 = (state_13945[2]);var state_13945__$1 = state_13945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13945__$1,inst_13943);
} else
{if((state_val_13946 === 2))
{var state_13945__$1 = state_13945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13945__$1,4,ch);
} else
{if((state_val_13946 === 1))
{var inst_13931 = init;var state_13945__$1 = (function (){var statearr_13954 = state_13945;(statearr_13954[7] = inst_13931);
return statearr_13954;
})();var statearr_13955_13968 = state_13945__$1;(statearr_13955_13968[2] = null);
(statearr_13955_13968[1] = 2);
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
var state_machine__5573__auto____0 = (function (){var statearr_13959 = [null,null,null,null,null,null,null,null,null];(statearr_13959[0] = state_machine__5573__auto__);
(statearr_13959[1] = 1);
return statearr_13959;
});
var state_machine__5573__auto____1 = (function (state_13945){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_13945);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e13960){if((e13960 instanceof Object))
{var ex__5576__auto__ = e13960;var statearr_13961_13969 = state_13945;(statearr_13961_13969[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13970 = state_13945;
state_13945 = G__13970;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_13945){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_13945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_13962 = f__5588__auto__.call(null);(statearr_13962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto__);
return statearr_13962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return c__5587__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_14032){var state_val_14033 = (state_14032[1]);if((state_val_14033 === 1))
{var inst_14012 = cljs.core.seq.call(null,coll);var inst_14013 = inst_14012;var state_14032__$1 = (function (){var statearr_14034 = state_14032;(statearr_14034[7] = inst_14013);
return statearr_14034;
})();var statearr_14035_14053 = state_14032__$1;(statearr_14035_14053[2] = null);
(statearr_14035_14053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14033 === 2))
{var inst_14013 = (state_14032[7]);var state_14032__$1 = state_14032;if(cljs.core.truth_(inst_14013))
{var statearr_14036_14054 = state_14032__$1;(statearr_14036_14054[1] = 4);
} else
{var statearr_14037_14055 = state_14032__$1;(statearr_14037_14055[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14033 === 3))
{var inst_14030 = (state_14032[2]);var state_14032__$1 = state_14032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14032__$1,inst_14030);
} else
{if((state_val_14033 === 4))
{var inst_14013 = (state_14032[7]);var inst_14016 = cljs.core.first.call(null,inst_14013);var state_14032__$1 = state_14032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14032__$1,7,ch,inst_14016);
} else
{if((state_val_14033 === 5))
{var state_14032__$1 = state_14032;if(cljs.core.truth_(close_QMARK_))
{var statearr_14038_14056 = state_14032__$1;(statearr_14038_14056[1] = 8);
} else
{var statearr_14039_14057 = state_14032__$1;(statearr_14039_14057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14033 === 6))
{var inst_14028 = (state_14032[2]);var state_14032__$1 = state_14032;var statearr_14040_14058 = state_14032__$1;(statearr_14040_14058[2] = inst_14028);
(statearr_14040_14058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14033 === 7))
{var inst_14013 = (state_14032[7]);var inst_14018 = (state_14032[2]);var inst_14019 = cljs.core.next.call(null,inst_14013);var inst_14013__$1 = inst_14019;var state_14032__$1 = (function (){var statearr_14041 = state_14032;(statearr_14041[8] = inst_14018);
(statearr_14041[7] = inst_14013__$1);
return statearr_14041;
})();var statearr_14042_14059 = state_14032__$1;(statearr_14042_14059[2] = null);
(statearr_14042_14059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14033 === 8))
{var inst_14023 = cljs.core.async.close_BANG_.call(null,ch);var state_14032__$1 = state_14032;var statearr_14043_14060 = state_14032__$1;(statearr_14043_14060[2] = inst_14023);
(statearr_14043_14060[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14033 === 9))
{var state_14032__$1 = state_14032;var statearr_14044_14061 = state_14032__$1;(statearr_14044_14061[2] = null);
(statearr_14044_14061[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14033 === 10))
{var inst_14026 = (state_14032[2]);var state_14032__$1 = state_14032;var statearr_14045_14062 = state_14032__$1;(statearr_14045_14062[2] = inst_14026);
(statearr_14045_14062[1] = 6);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_14049 = [null,null,null,null,null,null,null,null,null];(statearr_14049[0] = state_machine__5573__auto__);
(statearr_14049[1] = 1);
return statearr_14049;
});
var state_machine__5573__auto____1 = (function (state_14032){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_14032);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e14050){if((e14050 instanceof Object))
{var ex__5576__auto__ = e14050;var statearr_14051_14063 = state_14032;(statearr_14051_14063[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14064 = state_14032;
state_14032 = G__14064;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_14032){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_14032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_14052 = f__5588__auto__.call(null);(statearr_14052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto__);
return statearr_14052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
}));
return c__5587__auto__;
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
cljs.core.async.Mux = (function (){var obj14066 = {};return obj14066;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3454__auto__ = _;if(and__3454__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4093__auto__ = (((_ == null))?null:_);return (function (){var or__3466__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14068 = {};return obj14068;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14292 = (function (cs,ch,mult,meta14293){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14293 = meta14293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14292.cljs$lang$type = true;
cljs.core.async.t14292.cljs$lang$ctorStr = "cljs.core.async/t14292";
cljs.core.async.t14292.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t14292");
});})(cs))
;
cljs.core.async.t14292.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14292.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14294){var self__ = this;
var _14294__$1 = this;return self__.meta14293;
});})(cs))
;
cljs.core.async.t14292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14294,meta14293__$1){var self__ = this;
var _14294__$1 = this;return (new cljs.core.async.t14292(self__.cs,self__.ch,self__.mult,meta14293__$1));
});})(cs))
;
cljs.core.async.__GT_t14292 = ((function (cs){
return (function __GT_t14292(cs__$1,ch__$1,mult__$1,meta14293){return (new cljs.core.async.t14292(cs__$1,ch__$1,mult__$1,meta14293));
});})(cs))
;
}
return (new cljs.core.async.t14292(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5587__auto___14515 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_14429){var state_val_14430 = (state_14429[1]);if((state_val_14430 === 32))
{var inst_14297 = (state_14429[7]);var inst_14373 = (state_14429[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14429,31,Object,null,30);var inst_14380 = cljs.core.async.put_BANG_.call(null,inst_14373,inst_14297,done);var state_14429__$1 = state_14429;var statearr_14431_14516 = state_14429__$1;(statearr_14431_14516[2] = inst_14380);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14429__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 1))
{var state_14429__$1 = state_14429;var statearr_14432_14517 = state_14429__$1;(statearr_14432_14517[2] = null);
(statearr_14432_14517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 33))
{var inst_14386 = (state_14429[9]);var inst_14388 = cljs.core.chunked_seq_QMARK_.call(null,inst_14386);var state_14429__$1 = state_14429;if(inst_14388)
{var statearr_14433_14518 = state_14429__$1;(statearr_14433_14518[1] = 36);
} else
{var statearr_14434_14519 = state_14429__$1;(statearr_14434_14519[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 2))
{var state_14429__$1 = state_14429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14429__$1,4,ch);
} else
{if((state_val_14430 === 34))
{var state_14429__$1 = state_14429;var statearr_14435_14520 = state_14429__$1;(statearr_14435_14520[2] = null);
(statearr_14435_14520[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 3))
{var inst_14427 = (state_14429[2]);var state_14429__$1 = state_14429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14429__$1,inst_14427);
} else
{if((state_val_14430 === 35))
{var inst_14411 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14436_14521 = state_14429__$1;(statearr_14436_14521[2] = inst_14411);
(statearr_14436_14521[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 4))
{var inst_14297 = (state_14429[7]);var inst_14297__$1 = (state_14429[2]);var inst_14298 = (inst_14297__$1 == null);var state_14429__$1 = (function (){var statearr_14437 = state_14429;(statearr_14437[7] = inst_14297__$1);
return statearr_14437;
})();if(cljs.core.truth_(inst_14298))
{var statearr_14438_14522 = state_14429__$1;(statearr_14438_14522[1] = 5);
} else
{var statearr_14439_14523 = state_14429__$1;(statearr_14439_14523[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 36))
{var inst_14386 = (state_14429[9]);var inst_14390 = cljs.core.chunk_first.call(null,inst_14386);var inst_14391 = cljs.core.chunk_rest.call(null,inst_14386);var inst_14392 = cljs.core.count.call(null,inst_14390);var inst_14365 = inst_14391;var inst_14366 = inst_14390;var inst_14367 = inst_14392;var inst_14368 = 0;var state_14429__$1 = (function (){var statearr_14440 = state_14429;(statearr_14440[10] = inst_14365);
(statearr_14440[11] = inst_14366);
(statearr_14440[12] = inst_14368);
(statearr_14440[13] = inst_14367);
return statearr_14440;
})();var statearr_14441_14524 = state_14429__$1;(statearr_14441_14524[2] = null);
(statearr_14441_14524[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 5))
{var inst_14304 = cljs.core.deref.call(null,cs);var inst_14305 = cljs.core.seq.call(null,inst_14304);var inst_14306 = inst_14305;var inst_14307 = null;var inst_14308 = 0;var inst_14309 = 0;var state_14429__$1 = (function (){var statearr_14442 = state_14429;(statearr_14442[14] = inst_14309);
(statearr_14442[15] = inst_14306);
(statearr_14442[16] = inst_14307);
(statearr_14442[17] = inst_14308);
return statearr_14442;
})();var statearr_14443_14525 = state_14429__$1;(statearr_14443_14525[2] = null);
(statearr_14443_14525[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 37))
{var inst_14386 = (state_14429[9]);var inst_14395 = cljs.core.first.call(null,inst_14386);var state_14429__$1 = (function (){var statearr_14444 = state_14429;(statearr_14444[18] = inst_14395);
return statearr_14444;
})();var statearr_14445_14526 = state_14429__$1;(statearr_14445_14526[2] = null);
(statearr_14445_14526[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 6))
{var inst_14357 = (state_14429[19]);var inst_14356 = cljs.core.deref.call(null,cs);var inst_14357__$1 = cljs.core.keys.call(null,inst_14356);var inst_14358 = cljs.core.count.call(null,inst_14357__$1);var inst_14359 = cljs.core.reset_BANG_.call(null,dctr,inst_14358);var inst_14364 = cljs.core.seq.call(null,inst_14357__$1);var inst_14365 = inst_14364;var inst_14366 = null;var inst_14367 = 0;var inst_14368 = 0;var state_14429__$1 = (function (){var statearr_14446 = state_14429;(statearr_14446[10] = inst_14365);
(statearr_14446[11] = inst_14366);
(statearr_14446[12] = inst_14368);
(statearr_14446[13] = inst_14367);
(statearr_14446[20] = inst_14359);
(statearr_14446[19] = inst_14357__$1);
return statearr_14446;
})();var statearr_14447_14527 = state_14429__$1;(statearr_14447_14527[2] = null);
(statearr_14447_14527[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 38))
{var inst_14408 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14448_14528 = state_14429__$1;(statearr_14448_14528[2] = inst_14408);
(statearr_14448_14528[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 7))
{var inst_14425 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14449_14529 = state_14429__$1;(statearr_14449_14529[2] = inst_14425);
(statearr_14449_14529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 39))
{var inst_14386 = (state_14429[9]);var inst_14404 = (state_14429[2]);var inst_14405 = cljs.core.next.call(null,inst_14386);var inst_14365 = inst_14405;var inst_14366 = null;var inst_14367 = 0;var inst_14368 = 0;var state_14429__$1 = (function (){var statearr_14450 = state_14429;(statearr_14450[10] = inst_14365);
(statearr_14450[11] = inst_14366);
(statearr_14450[21] = inst_14404);
(statearr_14450[12] = inst_14368);
(statearr_14450[13] = inst_14367);
return statearr_14450;
})();var statearr_14451_14530 = state_14429__$1;(statearr_14451_14530[2] = null);
(statearr_14451_14530[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 8))
{var inst_14309 = (state_14429[14]);var inst_14308 = (state_14429[17]);var inst_14311 = (inst_14309 < inst_14308);var inst_14312 = inst_14311;var state_14429__$1 = state_14429;if(cljs.core.truth_(inst_14312))
{var statearr_14452_14531 = state_14429__$1;(statearr_14452_14531[1] = 10);
} else
{var statearr_14453_14532 = state_14429__$1;(statearr_14453_14532[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 40))
{var inst_14395 = (state_14429[18]);var inst_14396 = (state_14429[2]);var inst_14397 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14398 = cljs.core.async.untap_STAR_.call(null,m,inst_14395);var state_14429__$1 = (function (){var statearr_14454 = state_14429;(statearr_14454[22] = inst_14396);
(statearr_14454[23] = inst_14397);
return statearr_14454;
})();var statearr_14455_14533 = state_14429__$1;(statearr_14455_14533[2] = inst_14398);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14429__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 9))
{var inst_14354 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14456_14534 = state_14429__$1;(statearr_14456_14534[2] = inst_14354);
(statearr_14456_14534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 41))
{var inst_14297 = (state_14429[7]);var inst_14395 = (state_14429[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14429,40,Object,null,39);var inst_14402 = cljs.core.async.put_BANG_.call(null,inst_14395,inst_14297,done);var state_14429__$1 = state_14429;var statearr_14457_14535 = state_14429__$1;(statearr_14457_14535[2] = inst_14402);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14429__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 10))
{var inst_14309 = (state_14429[14]);var inst_14307 = (state_14429[16]);var inst_14315 = cljs.core._nth.call(null,inst_14307,inst_14309);var inst_14316 = cljs.core.nth.call(null,inst_14315,0,null);var inst_14317 = cljs.core.nth.call(null,inst_14315,1,null);var state_14429__$1 = (function (){var statearr_14458 = state_14429;(statearr_14458[24] = inst_14316);
return statearr_14458;
})();if(cljs.core.truth_(inst_14317))
{var statearr_14459_14536 = state_14429__$1;(statearr_14459_14536[1] = 13);
} else
{var statearr_14460_14537 = state_14429__$1;(statearr_14460_14537[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 42))
{var state_14429__$1 = state_14429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14429__$1,45,dchan);
} else
{if((state_val_14430 === 11))
{var inst_14326 = (state_14429[25]);var inst_14306 = (state_14429[15]);var inst_14326__$1 = cljs.core.seq.call(null,inst_14306);var state_14429__$1 = (function (){var statearr_14461 = state_14429;(statearr_14461[25] = inst_14326__$1);
return statearr_14461;
})();if(inst_14326__$1)
{var statearr_14462_14538 = state_14429__$1;(statearr_14462_14538[1] = 16);
} else
{var statearr_14463_14539 = state_14429__$1;(statearr_14463_14539[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 43))
{var state_14429__$1 = state_14429;var statearr_14464_14540 = state_14429__$1;(statearr_14464_14540[2] = null);
(statearr_14464_14540[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 12))
{var inst_14352 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14465_14541 = state_14429__$1;(statearr_14465_14541[2] = inst_14352);
(statearr_14465_14541[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 44))
{var inst_14422 = (state_14429[2]);var state_14429__$1 = (function (){var statearr_14466 = state_14429;(statearr_14466[26] = inst_14422);
return statearr_14466;
})();var statearr_14467_14542 = state_14429__$1;(statearr_14467_14542[2] = null);
(statearr_14467_14542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 13))
{var inst_14316 = (state_14429[24]);var inst_14319 = cljs.core.async.close_BANG_.call(null,inst_14316);var state_14429__$1 = state_14429;var statearr_14468_14543 = state_14429__$1;(statearr_14468_14543[2] = inst_14319);
(statearr_14468_14543[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 45))
{var inst_14419 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14472_14544 = state_14429__$1;(statearr_14472_14544[2] = inst_14419);
(statearr_14472_14544[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 14))
{var state_14429__$1 = state_14429;var statearr_14473_14545 = state_14429__$1;(statearr_14473_14545[2] = null);
(statearr_14473_14545[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 15))
{var inst_14309 = (state_14429[14]);var inst_14306 = (state_14429[15]);var inst_14307 = (state_14429[16]);var inst_14308 = (state_14429[17]);var inst_14322 = (state_14429[2]);var inst_14323 = (inst_14309 + 1);var tmp14469 = inst_14306;var tmp14470 = inst_14307;var tmp14471 = inst_14308;var inst_14306__$1 = tmp14469;var inst_14307__$1 = tmp14470;var inst_14308__$1 = tmp14471;var inst_14309__$1 = inst_14323;var state_14429__$1 = (function (){var statearr_14474 = state_14429;(statearr_14474[27] = inst_14322);
(statearr_14474[14] = inst_14309__$1);
(statearr_14474[15] = inst_14306__$1);
(statearr_14474[16] = inst_14307__$1);
(statearr_14474[17] = inst_14308__$1);
return statearr_14474;
})();var statearr_14475_14546 = state_14429__$1;(statearr_14475_14546[2] = null);
(statearr_14475_14546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 16))
{var inst_14326 = (state_14429[25]);var inst_14328 = cljs.core.chunked_seq_QMARK_.call(null,inst_14326);var state_14429__$1 = state_14429;if(inst_14328)
{var statearr_14476_14547 = state_14429__$1;(statearr_14476_14547[1] = 19);
} else
{var statearr_14477_14548 = state_14429__$1;(statearr_14477_14548[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 17))
{var state_14429__$1 = state_14429;var statearr_14478_14549 = state_14429__$1;(statearr_14478_14549[2] = null);
(statearr_14478_14549[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 18))
{var inst_14350 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14479_14550 = state_14429__$1;(statearr_14479_14550[2] = inst_14350);
(statearr_14479_14550[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 19))
{var inst_14326 = (state_14429[25]);var inst_14330 = cljs.core.chunk_first.call(null,inst_14326);var inst_14331 = cljs.core.chunk_rest.call(null,inst_14326);var inst_14332 = cljs.core.count.call(null,inst_14330);var inst_14306 = inst_14331;var inst_14307 = inst_14330;var inst_14308 = inst_14332;var inst_14309 = 0;var state_14429__$1 = (function (){var statearr_14480 = state_14429;(statearr_14480[14] = inst_14309);
(statearr_14480[15] = inst_14306);
(statearr_14480[16] = inst_14307);
(statearr_14480[17] = inst_14308);
return statearr_14480;
})();var statearr_14481_14551 = state_14429__$1;(statearr_14481_14551[2] = null);
(statearr_14481_14551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 20))
{var inst_14326 = (state_14429[25]);var inst_14336 = cljs.core.first.call(null,inst_14326);var inst_14337 = cljs.core.nth.call(null,inst_14336,0,null);var inst_14338 = cljs.core.nth.call(null,inst_14336,1,null);var state_14429__$1 = (function (){var statearr_14482 = state_14429;(statearr_14482[28] = inst_14337);
return statearr_14482;
})();if(cljs.core.truth_(inst_14338))
{var statearr_14483_14552 = state_14429__$1;(statearr_14483_14552[1] = 22);
} else
{var statearr_14484_14553 = state_14429__$1;(statearr_14484_14553[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 21))
{var inst_14347 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14485_14554 = state_14429__$1;(statearr_14485_14554[2] = inst_14347);
(statearr_14485_14554[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 22))
{var inst_14337 = (state_14429[28]);var inst_14340 = cljs.core.async.close_BANG_.call(null,inst_14337);var state_14429__$1 = state_14429;var statearr_14486_14555 = state_14429__$1;(statearr_14486_14555[2] = inst_14340);
(statearr_14486_14555[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 23))
{var state_14429__$1 = state_14429;var statearr_14487_14556 = state_14429__$1;(statearr_14487_14556[2] = null);
(statearr_14487_14556[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 24))
{var inst_14326 = (state_14429[25]);var inst_14343 = (state_14429[2]);var inst_14344 = cljs.core.next.call(null,inst_14326);var inst_14306 = inst_14344;var inst_14307 = null;var inst_14308 = 0;var inst_14309 = 0;var state_14429__$1 = (function (){var statearr_14488 = state_14429;(statearr_14488[14] = inst_14309);
(statearr_14488[29] = inst_14343);
(statearr_14488[15] = inst_14306);
(statearr_14488[16] = inst_14307);
(statearr_14488[17] = inst_14308);
return statearr_14488;
})();var statearr_14489_14557 = state_14429__$1;(statearr_14489_14557[2] = null);
(statearr_14489_14557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 25))
{var inst_14368 = (state_14429[12]);var inst_14367 = (state_14429[13]);var inst_14370 = (inst_14368 < inst_14367);var inst_14371 = inst_14370;var state_14429__$1 = state_14429;if(cljs.core.truth_(inst_14371))
{var statearr_14490_14558 = state_14429__$1;(statearr_14490_14558[1] = 27);
} else
{var statearr_14491_14559 = state_14429__$1;(statearr_14491_14559[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 26))
{var inst_14357 = (state_14429[19]);var inst_14415 = (state_14429[2]);var inst_14416 = cljs.core.seq.call(null,inst_14357);var state_14429__$1 = (function (){var statearr_14492 = state_14429;(statearr_14492[30] = inst_14415);
return statearr_14492;
})();if(inst_14416)
{var statearr_14493_14560 = state_14429__$1;(statearr_14493_14560[1] = 42);
} else
{var statearr_14494_14561 = state_14429__$1;(statearr_14494_14561[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 27))
{var inst_14366 = (state_14429[11]);var inst_14368 = (state_14429[12]);var inst_14373 = cljs.core._nth.call(null,inst_14366,inst_14368);var state_14429__$1 = (function (){var statearr_14495 = state_14429;(statearr_14495[8] = inst_14373);
return statearr_14495;
})();var statearr_14496_14562 = state_14429__$1;(statearr_14496_14562[2] = null);
(statearr_14496_14562[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 28))
{var inst_14365 = (state_14429[10]);var inst_14386 = (state_14429[9]);var inst_14386__$1 = cljs.core.seq.call(null,inst_14365);var state_14429__$1 = (function (){var statearr_14500 = state_14429;(statearr_14500[9] = inst_14386__$1);
return statearr_14500;
})();if(inst_14386__$1)
{var statearr_14501_14563 = state_14429__$1;(statearr_14501_14563[1] = 33);
} else
{var statearr_14502_14564 = state_14429__$1;(statearr_14502_14564[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 29))
{var inst_14413 = (state_14429[2]);var state_14429__$1 = state_14429;var statearr_14503_14565 = state_14429__$1;(statearr_14503_14565[2] = inst_14413);
(statearr_14503_14565[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 30))
{var inst_14365 = (state_14429[10]);var inst_14366 = (state_14429[11]);var inst_14368 = (state_14429[12]);var inst_14367 = (state_14429[13]);var inst_14382 = (state_14429[2]);var inst_14383 = (inst_14368 + 1);var tmp14497 = inst_14365;var tmp14498 = inst_14366;var tmp14499 = inst_14367;var inst_14365__$1 = tmp14497;var inst_14366__$1 = tmp14498;var inst_14367__$1 = tmp14499;var inst_14368__$1 = inst_14383;var state_14429__$1 = (function (){var statearr_14504 = state_14429;(statearr_14504[10] = inst_14365__$1);
(statearr_14504[11] = inst_14366__$1);
(statearr_14504[12] = inst_14368__$1);
(statearr_14504[13] = inst_14367__$1);
(statearr_14504[31] = inst_14382);
return statearr_14504;
})();var statearr_14505_14566 = state_14429__$1;(statearr_14505_14566[2] = null);
(statearr_14505_14566[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14430 === 31))
{var inst_14373 = (state_14429[8]);var inst_14374 = (state_14429[2]);var inst_14375 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14376 = cljs.core.async.untap_STAR_.call(null,m,inst_14373);var state_14429__$1 = (function (){var statearr_14506 = state_14429;(statearr_14506[32] = inst_14374);
(statearr_14506[33] = inst_14375);
return statearr_14506;
})();var statearr_14507_14567 = state_14429__$1;(statearr_14507_14567[2] = inst_14376);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14429__$1);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_14511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14511[0] = state_machine__5573__auto__);
(statearr_14511[1] = 1);
return statearr_14511;
});
var state_machine__5573__auto____1 = (function (state_14429){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_14429);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e14512){if((e14512 instanceof Object))
{var ex__5576__auto__ = e14512;var statearr_14513_14568 = state_14429;(statearr_14513_14568[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14429);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14569 = state_14429;
state_14429 = G__14569;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_14429){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_14429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_14514 = f__5588__auto__.call(null);(statearr_14514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___14515);
return statearr_14514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
cljs.core.async.Mix = (function (){var obj14571 = {};return obj14571;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t14681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14681 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14682){
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
this.meta14682 = meta14682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14681.cljs$lang$type = true;
cljs.core.async.t14681.cljs$lang$ctorStr = "cljs.core.async/t14681";
cljs.core.async.t14681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t14681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14683){var self__ = this;
var _14683__$1 = this;return self__.meta14682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14683,meta14682__$1){var self__ = this;
var _14683__$1 = this;return (new cljs.core.async.t14681(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14682){return (new cljs.core.async.t14681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14681(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5587__auto___14790 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_14748){var state_val_14749 = (state_14748[1]);if((state_val_14749 === 1))
{var inst_14687 = (state_14748[7]);var inst_14687__$1 = calc_state.call(null);var inst_14688 = cljs.core.seq_QMARK_.call(null,inst_14687__$1);var state_14748__$1 = (function (){var statearr_14750 = state_14748;(statearr_14750[7] = inst_14687__$1);
return statearr_14750;
})();if(inst_14688)
{var statearr_14751_14791 = state_14748__$1;(statearr_14751_14791[1] = 2);
} else
{var statearr_14752_14792 = state_14748__$1;(statearr_14752_14792[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 2))
{var inst_14687 = (state_14748[7]);var inst_14690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14687);var state_14748__$1 = state_14748;var statearr_14753_14793 = state_14748__$1;(statearr_14753_14793[2] = inst_14690);
(statearr_14753_14793[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 3))
{var inst_14687 = (state_14748[7]);var state_14748__$1 = state_14748;var statearr_14754_14794 = state_14748__$1;(statearr_14754_14794[2] = inst_14687);
(statearr_14754_14794[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 4))
{var inst_14687 = (state_14748[7]);var inst_14693 = (state_14748[2]);var inst_14694 = cljs.core.get.call(null,inst_14693,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14695 = cljs.core.get.call(null,inst_14693,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14696 = cljs.core.get.call(null,inst_14693,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14697 = inst_14687;var state_14748__$1 = (function (){var statearr_14755 = state_14748;(statearr_14755[8] = inst_14697);
(statearr_14755[9] = inst_14695);
(statearr_14755[10] = inst_14696);
(statearr_14755[11] = inst_14694);
return statearr_14755;
})();var statearr_14756_14795 = state_14748__$1;(statearr_14756_14795[2] = null);
(statearr_14756_14795[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 5))
{var inst_14697 = (state_14748[8]);var inst_14700 = cljs.core.seq_QMARK_.call(null,inst_14697);var state_14748__$1 = state_14748;if(inst_14700)
{var statearr_14757_14796 = state_14748__$1;(statearr_14757_14796[1] = 7);
} else
{var statearr_14758_14797 = state_14748__$1;(statearr_14758_14797[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 6))
{var inst_14746 = (state_14748[2]);var state_14748__$1 = state_14748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14748__$1,inst_14746);
} else
{if((state_val_14749 === 7))
{var inst_14697 = (state_14748[8]);var inst_14702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14697);var state_14748__$1 = state_14748;var statearr_14759_14798 = state_14748__$1;(statearr_14759_14798[2] = inst_14702);
(statearr_14759_14798[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 8))
{var inst_14697 = (state_14748[8]);var state_14748__$1 = state_14748;var statearr_14760_14799 = state_14748__$1;(statearr_14760_14799[2] = inst_14697);
(statearr_14760_14799[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 9))
{var inst_14705 = (state_14748[12]);var inst_14705__$1 = (state_14748[2]);var inst_14706 = cljs.core.get.call(null,inst_14705__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14707 = cljs.core.get.call(null,inst_14705__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14708 = cljs.core.get.call(null,inst_14705__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14748__$1 = (function (){var statearr_14761 = state_14748;(statearr_14761[12] = inst_14705__$1);
(statearr_14761[13] = inst_14708);
(statearr_14761[14] = inst_14707);
return statearr_14761;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14748__$1,10,inst_14706);
} else
{if((state_val_14749 === 10))
{var inst_14712 = (state_14748[15]);var inst_14713 = (state_14748[16]);var inst_14711 = (state_14748[2]);var inst_14712__$1 = cljs.core.nth.call(null,inst_14711,0,null);var inst_14713__$1 = cljs.core.nth.call(null,inst_14711,1,null);var inst_14714 = (inst_14712__$1 == null);var inst_14715 = cljs.core._EQ_.call(null,inst_14713__$1,change);var inst_14716 = (inst_14714) || (inst_14715);var state_14748__$1 = (function (){var statearr_14762 = state_14748;(statearr_14762[15] = inst_14712__$1);
(statearr_14762[16] = inst_14713__$1);
return statearr_14762;
})();if(cljs.core.truth_(inst_14716))
{var statearr_14763_14800 = state_14748__$1;(statearr_14763_14800[1] = 11);
} else
{var statearr_14764_14801 = state_14748__$1;(statearr_14764_14801[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 11))
{var inst_14712 = (state_14748[15]);var inst_14718 = (inst_14712 == null);var state_14748__$1 = state_14748;if(cljs.core.truth_(inst_14718))
{var statearr_14765_14802 = state_14748__$1;(statearr_14765_14802[1] = 14);
} else
{var statearr_14766_14803 = state_14748__$1;(statearr_14766_14803[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 12))
{var inst_14708 = (state_14748[13]);var inst_14713 = (state_14748[16]);var inst_14727 = (state_14748[17]);var inst_14727__$1 = inst_14708.call(null,inst_14713);var state_14748__$1 = (function (){var statearr_14767 = state_14748;(statearr_14767[17] = inst_14727__$1);
return statearr_14767;
})();if(cljs.core.truth_(inst_14727__$1))
{var statearr_14768_14804 = state_14748__$1;(statearr_14768_14804[1] = 17);
} else
{var statearr_14769_14805 = state_14748__$1;(statearr_14769_14805[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 13))
{var inst_14744 = (state_14748[2]);var state_14748__$1 = state_14748;var statearr_14770_14806 = state_14748__$1;(statearr_14770_14806[2] = inst_14744);
(statearr_14770_14806[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 14))
{var inst_14713 = (state_14748[16]);var inst_14720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14713);var state_14748__$1 = state_14748;var statearr_14771_14807 = state_14748__$1;(statearr_14771_14807[2] = inst_14720);
(statearr_14771_14807[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 15))
{var state_14748__$1 = state_14748;var statearr_14772_14808 = state_14748__$1;(statearr_14772_14808[2] = null);
(statearr_14772_14808[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 16))
{var inst_14723 = (state_14748[2]);var inst_14724 = calc_state.call(null);var inst_14697 = inst_14724;var state_14748__$1 = (function (){var statearr_14773 = state_14748;(statearr_14773[18] = inst_14723);
(statearr_14773[8] = inst_14697);
return statearr_14773;
})();var statearr_14774_14809 = state_14748__$1;(statearr_14774_14809[2] = null);
(statearr_14774_14809[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 17))
{var inst_14727 = (state_14748[17]);var state_14748__$1 = state_14748;var statearr_14775_14810 = state_14748__$1;(statearr_14775_14810[2] = inst_14727);
(statearr_14775_14810[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 18))
{var inst_14708 = (state_14748[13]);var inst_14707 = (state_14748[14]);var inst_14713 = (state_14748[16]);var inst_14730 = cljs.core.empty_QMARK_.call(null,inst_14708);var inst_14731 = inst_14707.call(null,inst_14713);var inst_14732 = cljs.core.not.call(null,inst_14731);var inst_14733 = (inst_14730) && (inst_14732);var state_14748__$1 = state_14748;var statearr_14776_14811 = state_14748__$1;(statearr_14776_14811[2] = inst_14733);
(statearr_14776_14811[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 19))
{var inst_14735 = (state_14748[2]);var state_14748__$1 = state_14748;if(cljs.core.truth_(inst_14735))
{var statearr_14777_14812 = state_14748__$1;(statearr_14777_14812[1] = 20);
} else
{var statearr_14778_14813 = state_14748__$1;(statearr_14778_14813[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 20))
{var inst_14712 = (state_14748[15]);var state_14748__$1 = state_14748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14748__$1,23,out,inst_14712);
} else
{if((state_val_14749 === 21))
{var state_14748__$1 = state_14748;var statearr_14779_14814 = state_14748__$1;(statearr_14779_14814[2] = null);
(statearr_14779_14814[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 22))
{var inst_14705 = (state_14748[12]);var inst_14741 = (state_14748[2]);var inst_14697 = inst_14705;var state_14748__$1 = (function (){var statearr_14780 = state_14748;(statearr_14780[8] = inst_14697);
(statearr_14780[19] = inst_14741);
return statearr_14780;
})();var statearr_14781_14815 = state_14748__$1;(statearr_14781_14815[2] = null);
(statearr_14781_14815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14749 === 23))
{var inst_14738 = (state_14748[2]);var state_14748__$1 = state_14748;var statearr_14782_14816 = state_14748__$1;(statearr_14782_14816[2] = inst_14738);
(statearr_14782_14816[1] = 22);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_14786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14786[0] = state_machine__5573__auto__);
(statearr_14786[1] = 1);
return statearr_14786;
});
var state_machine__5573__auto____1 = (function (state_14748){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_14748);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e14787){if((e14787 instanceof Object))
{var ex__5576__auto__ = e14787;var statearr_14788_14817 = state_14748;(statearr_14788_14817[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14748);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14818 = state_14748;
state_14748 = G__14818;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_14748){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_14748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_14789 = f__5588__auto__.call(null);(statearr_14789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___14790);
return statearr_14789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
cljs.core.async.Pub = (function (){var obj14820 = {};return obj14820;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
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
return (function (topic){var or__3466__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3466__auto__,mults){
return (function (p1__14821_SHARP_){if(cljs.core.truth_(p1__14821_SHARP_.call(null,topic)))
{return p1__14821_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14821_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3466__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14946 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14947){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14947 = meta14947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14946.cljs$lang$type = true;
cljs.core.async.t14946.cljs$lang$ctorStr = "cljs.core.async/t14946";
cljs.core.async.t14946.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t14946");
});})(mults,ensure_mult))
;
cljs.core.async.t14946.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14946.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14946.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14946.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14948){var self__ = this;
var _14948__$1 = this;return self__.meta14947;
});})(mults,ensure_mult))
;
cljs.core.async.t14946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14948,meta14947__$1){var self__ = this;
var _14948__$1 = this;return (new cljs.core.async.t14946(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14947__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14946 = ((function (mults,ensure_mult){
return (function __GT_t14946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14947){return (new cljs.core.async.t14946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14947));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14946(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5587__auto___15070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_15022){var state_val_15023 = (state_15022[1]);if((state_val_15023 === 1))
{var state_15022__$1 = state_15022;var statearr_15024_15071 = state_15022__$1;(statearr_15024_15071[2] = null);
(statearr_15024_15071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 2))
{var state_15022__$1 = state_15022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15022__$1,4,ch);
} else
{if((state_val_15023 === 3))
{var inst_15020 = (state_15022[2]);var state_15022__$1 = state_15022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15022__$1,inst_15020);
} else
{if((state_val_15023 === 4))
{var inst_14951 = (state_15022[7]);var inst_14951__$1 = (state_15022[2]);var inst_14952 = (inst_14951__$1 == null);var state_15022__$1 = (function (){var statearr_15025 = state_15022;(statearr_15025[7] = inst_14951__$1);
return statearr_15025;
})();if(cljs.core.truth_(inst_14952))
{var statearr_15026_15072 = state_15022__$1;(statearr_15026_15072[1] = 5);
} else
{var statearr_15027_15073 = state_15022__$1;(statearr_15027_15073[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 5))
{var inst_14958 = cljs.core.deref.call(null,mults);var inst_14959 = cljs.core.vals.call(null,inst_14958);var inst_14960 = cljs.core.seq.call(null,inst_14959);var inst_14961 = inst_14960;var inst_14962 = null;var inst_14963 = 0;var inst_14964 = 0;var state_15022__$1 = (function (){var statearr_15028 = state_15022;(statearr_15028[8] = inst_14964);
(statearr_15028[9] = inst_14963);
(statearr_15028[10] = inst_14962);
(statearr_15028[11] = inst_14961);
return statearr_15028;
})();var statearr_15029_15074 = state_15022__$1;(statearr_15029_15074[2] = null);
(statearr_15029_15074[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 6))
{var inst_14999 = (state_15022[12]);var inst_14951 = (state_15022[7]);var inst_15001 = (state_15022[13]);var inst_14999__$1 = topic_fn.call(null,inst_14951);var inst_15000 = cljs.core.deref.call(null,mults);var inst_15001__$1 = cljs.core.get.call(null,inst_15000,inst_14999__$1);var state_15022__$1 = (function (){var statearr_15030 = state_15022;(statearr_15030[12] = inst_14999__$1);
(statearr_15030[13] = inst_15001__$1);
return statearr_15030;
})();if(cljs.core.truth_(inst_15001__$1))
{var statearr_15031_15075 = state_15022__$1;(statearr_15031_15075[1] = 19);
} else
{var statearr_15032_15076 = state_15022__$1;(statearr_15032_15076[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 7))
{var inst_15018 = (state_15022[2]);var state_15022__$1 = state_15022;var statearr_15033_15077 = state_15022__$1;(statearr_15033_15077[2] = inst_15018);
(statearr_15033_15077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 8))
{var inst_14964 = (state_15022[8]);var inst_14963 = (state_15022[9]);var inst_14966 = (inst_14964 < inst_14963);var inst_14967 = inst_14966;var state_15022__$1 = state_15022;if(cljs.core.truth_(inst_14967))
{var statearr_15037_15078 = state_15022__$1;(statearr_15037_15078[1] = 10);
} else
{var statearr_15038_15079 = state_15022__$1;(statearr_15038_15079[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 9))
{var inst_14997 = (state_15022[2]);var state_15022__$1 = state_15022;var statearr_15039_15080 = state_15022__$1;(statearr_15039_15080[2] = inst_14997);
(statearr_15039_15080[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 10))
{var inst_14964 = (state_15022[8]);var inst_14963 = (state_15022[9]);var inst_14962 = (state_15022[10]);var inst_14961 = (state_15022[11]);var inst_14969 = cljs.core._nth.call(null,inst_14962,inst_14964);var inst_14970 = cljs.core.async.muxch_STAR_.call(null,inst_14969);var inst_14971 = cljs.core.async.close_BANG_.call(null,inst_14970);var inst_14972 = (inst_14964 + 1);var tmp15034 = inst_14963;var tmp15035 = inst_14962;var tmp15036 = inst_14961;var inst_14961__$1 = tmp15036;var inst_14962__$1 = tmp15035;var inst_14963__$1 = tmp15034;var inst_14964__$1 = inst_14972;var state_15022__$1 = (function (){var statearr_15040 = state_15022;(statearr_15040[14] = inst_14971);
(statearr_15040[8] = inst_14964__$1);
(statearr_15040[9] = inst_14963__$1);
(statearr_15040[10] = inst_14962__$1);
(statearr_15040[11] = inst_14961__$1);
return statearr_15040;
})();var statearr_15041_15081 = state_15022__$1;(statearr_15041_15081[2] = null);
(statearr_15041_15081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 11))
{var inst_14975 = (state_15022[15]);var inst_14961 = (state_15022[11]);var inst_14975__$1 = cljs.core.seq.call(null,inst_14961);var state_15022__$1 = (function (){var statearr_15042 = state_15022;(statearr_15042[15] = inst_14975__$1);
return statearr_15042;
})();if(inst_14975__$1)
{var statearr_15043_15082 = state_15022__$1;(statearr_15043_15082[1] = 13);
} else
{var statearr_15044_15083 = state_15022__$1;(statearr_15044_15083[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 12))
{var inst_14995 = (state_15022[2]);var state_15022__$1 = state_15022;var statearr_15045_15084 = state_15022__$1;(statearr_15045_15084[2] = inst_14995);
(statearr_15045_15084[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 13))
{var inst_14975 = (state_15022[15]);var inst_14977 = cljs.core.chunked_seq_QMARK_.call(null,inst_14975);var state_15022__$1 = state_15022;if(inst_14977)
{var statearr_15046_15085 = state_15022__$1;(statearr_15046_15085[1] = 16);
} else
{var statearr_15047_15086 = state_15022__$1;(statearr_15047_15086[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 14))
{var state_15022__$1 = state_15022;var statearr_15048_15087 = state_15022__$1;(statearr_15048_15087[2] = null);
(statearr_15048_15087[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 15))
{var inst_14993 = (state_15022[2]);var state_15022__$1 = state_15022;var statearr_15049_15088 = state_15022__$1;(statearr_15049_15088[2] = inst_14993);
(statearr_15049_15088[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 16))
{var inst_14975 = (state_15022[15]);var inst_14979 = cljs.core.chunk_first.call(null,inst_14975);var inst_14980 = cljs.core.chunk_rest.call(null,inst_14975);var inst_14981 = cljs.core.count.call(null,inst_14979);var inst_14961 = inst_14980;var inst_14962 = inst_14979;var inst_14963 = inst_14981;var inst_14964 = 0;var state_15022__$1 = (function (){var statearr_15050 = state_15022;(statearr_15050[8] = inst_14964);
(statearr_15050[9] = inst_14963);
(statearr_15050[10] = inst_14962);
(statearr_15050[11] = inst_14961);
return statearr_15050;
})();var statearr_15051_15089 = state_15022__$1;(statearr_15051_15089[2] = null);
(statearr_15051_15089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 17))
{var inst_14975 = (state_15022[15]);var inst_14984 = cljs.core.first.call(null,inst_14975);var inst_14985 = cljs.core.async.muxch_STAR_.call(null,inst_14984);var inst_14986 = cljs.core.async.close_BANG_.call(null,inst_14985);var inst_14987 = cljs.core.next.call(null,inst_14975);var inst_14961 = inst_14987;var inst_14962 = null;var inst_14963 = 0;var inst_14964 = 0;var state_15022__$1 = (function (){var statearr_15052 = state_15022;(statearr_15052[8] = inst_14964);
(statearr_15052[9] = inst_14963);
(statearr_15052[10] = inst_14962);
(statearr_15052[11] = inst_14961);
(statearr_15052[16] = inst_14986);
return statearr_15052;
})();var statearr_15053_15090 = state_15022__$1;(statearr_15053_15090[2] = null);
(statearr_15053_15090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 18))
{var inst_14990 = (state_15022[2]);var state_15022__$1 = state_15022;var statearr_15054_15091 = state_15022__$1;(statearr_15054_15091[2] = inst_14990);
(statearr_15054_15091[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 19))
{var state_15022__$1 = state_15022;var statearr_15055_15092 = state_15022__$1;(statearr_15055_15092[2] = null);
(statearr_15055_15092[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 20))
{var state_15022__$1 = state_15022;var statearr_15056_15093 = state_15022__$1;(statearr_15056_15093[2] = null);
(statearr_15056_15093[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 21))
{var inst_15015 = (state_15022[2]);var state_15022__$1 = (function (){var statearr_15057 = state_15022;(statearr_15057[17] = inst_15015);
return statearr_15057;
})();var statearr_15058_15094 = state_15022__$1;(statearr_15058_15094[2] = null);
(statearr_15058_15094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 22))
{var inst_15012 = (state_15022[2]);var state_15022__$1 = state_15022;var statearr_15059_15095 = state_15022__$1;(statearr_15059_15095[2] = inst_15012);
(statearr_15059_15095[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 23))
{var inst_14999 = (state_15022[12]);var inst_15003 = (state_15022[2]);var inst_15004 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14999);var state_15022__$1 = (function (){var statearr_15060 = state_15022;(statearr_15060[18] = inst_15003);
return statearr_15060;
})();var statearr_15061_15096 = state_15022__$1;(statearr_15061_15096[2] = inst_15004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15022__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15023 === 24))
{var inst_14951 = (state_15022[7]);var inst_15001 = (state_15022[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15022,23,Object,null,22);var inst_15008 = cljs.core.async.muxch_STAR_.call(null,inst_15001);var state_15022__$1 = state_15022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15022__$1,25,inst_15008,inst_14951);
} else
{if((state_val_15023 === 25))
{var inst_15010 = (state_15022[2]);var state_15022__$1 = state_15022;var statearr_15062_15097 = state_15022__$1;(statearr_15062_15097[2] = inst_15010);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15022__$1);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_15066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15066[0] = state_machine__5573__auto__);
(statearr_15066[1] = 1);
return statearr_15066;
});
var state_machine__5573__auto____1 = (function (state_15022){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_15022);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e15067){if((e15067 instanceof Object))
{var ex__5576__auto__ = e15067;var statearr_15068_15098 = state_15022;(statearr_15068_15098[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15099 = state_15022;
state_15022 = G__15099;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_15022){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_15022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_15069 = f__5588__auto__.call(null);(statearr_15069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___15070);
return statearr_15069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
,cljs.core.range.call(null,cnt));var c__5587__auto___15236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_15206){var state_val_15207 = (state_15206[1]);if((state_val_15207 === 1))
{var state_15206__$1 = state_15206;var statearr_15208_15237 = state_15206__$1;(statearr_15208_15237[2] = null);
(statearr_15208_15237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 2))
{var inst_15169 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15170 = 0;var state_15206__$1 = (function (){var statearr_15209 = state_15206;(statearr_15209[7] = inst_15169);
(statearr_15209[8] = inst_15170);
return statearr_15209;
})();var statearr_15210_15238 = state_15206__$1;(statearr_15210_15238[2] = null);
(statearr_15210_15238[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 3))
{var inst_15204 = (state_15206[2]);var state_15206__$1 = state_15206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15206__$1,inst_15204);
} else
{if((state_val_15207 === 4))
{var inst_15170 = (state_15206[8]);var inst_15172 = (inst_15170 < cnt);var state_15206__$1 = state_15206;if(cljs.core.truth_(inst_15172))
{var statearr_15211_15239 = state_15206__$1;(statearr_15211_15239[1] = 6);
} else
{var statearr_15212_15240 = state_15206__$1;(statearr_15212_15240[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 5))
{var inst_15190 = (state_15206[2]);var state_15206__$1 = (function (){var statearr_15213 = state_15206;(statearr_15213[9] = inst_15190);
return statearr_15213;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15206__$1,12,dchan);
} else
{if((state_val_15207 === 6))
{var state_15206__$1 = state_15206;var statearr_15214_15241 = state_15206__$1;(statearr_15214_15241[2] = null);
(statearr_15214_15241[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 7))
{var state_15206__$1 = state_15206;var statearr_15215_15242 = state_15206__$1;(statearr_15215_15242[2] = null);
(statearr_15215_15242[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 8))
{var inst_15188 = (state_15206[2]);var state_15206__$1 = state_15206;var statearr_15216_15243 = state_15206__$1;(statearr_15216_15243[2] = inst_15188);
(statearr_15216_15243[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 9))
{var inst_15170 = (state_15206[8]);var inst_15183 = (state_15206[2]);var inst_15184 = (inst_15170 + 1);var inst_15170__$1 = inst_15184;var state_15206__$1 = (function (){var statearr_15217 = state_15206;(statearr_15217[10] = inst_15183);
(statearr_15217[8] = inst_15170__$1);
return statearr_15217;
})();var statearr_15218_15244 = state_15206__$1;(statearr_15218_15244[2] = null);
(statearr_15218_15244[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 10))
{var inst_15174 = (state_15206[2]);var inst_15175 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15206__$1 = (function (){var statearr_15219 = state_15206;(statearr_15219[11] = inst_15174);
return statearr_15219;
})();var statearr_15220_15245 = state_15206__$1;(statearr_15220_15245[2] = inst_15175);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15206__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 11))
{var inst_15170 = (state_15206[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15206,10,Object,null,9);var inst_15179 = chs__$1.call(null,inst_15170);var inst_15180 = done.call(null,inst_15170);var inst_15181 = cljs.core.async.take_BANG_.call(null,inst_15179,inst_15180);var state_15206__$1 = state_15206;var statearr_15221_15246 = state_15206__$1;(statearr_15221_15246[2] = inst_15181);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15206__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 12))
{var inst_15192 = (state_15206[12]);var inst_15192__$1 = (state_15206[2]);var inst_15193 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15192__$1);var state_15206__$1 = (function (){var statearr_15222 = state_15206;(statearr_15222[12] = inst_15192__$1);
return statearr_15222;
})();if(cljs.core.truth_(inst_15193))
{var statearr_15223_15247 = state_15206__$1;(statearr_15223_15247[1] = 13);
} else
{var statearr_15224_15248 = state_15206__$1;(statearr_15224_15248[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 13))
{var inst_15195 = cljs.core.async.close_BANG_.call(null,out);var state_15206__$1 = state_15206;var statearr_15225_15249 = state_15206__$1;(statearr_15225_15249[2] = inst_15195);
(statearr_15225_15249[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 14))
{var inst_15192 = (state_15206[12]);var inst_15197 = cljs.core.apply.call(null,f,inst_15192);var state_15206__$1 = state_15206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15206__$1,16,out,inst_15197);
} else
{if((state_val_15207 === 15))
{var inst_15202 = (state_15206[2]);var state_15206__$1 = state_15206;var statearr_15226_15250 = state_15206__$1;(statearr_15226_15250[2] = inst_15202);
(statearr_15226_15250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15207 === 16))
{var inst_15199 = (state_15206[2]);var state_15206__$1 = (function (){var statearr_15227 = state_15206;(statearr_15227[13] = inst_15199);
return statearr_15227;
})();var statearr_15228_15251 = state_15206__$1;(statearr_15228_15251[2] = null);
(statearr_15228_15251[1] = 2);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_15232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15232[0] = state_machine__5573__auto__);
(statearr_15232[1] = 1);
return statearr_15232;
});
var state_machine__5573__auto____1 = (function (state_15206){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_15206);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e15233){if((e15233 instanceof Object))
{var ex__5576__auto__ = e15233;var statearr_15234_15252 = state_15206;(statearr_15234_15252[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15253 = state_15206;
state_15206 = G__15253;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_15206){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_15206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_15235 = f__5588__auto__.call(null);(statearr_15235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___15236);
return statearr_15235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5587__auto___15361 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_15337){var state_val_15338 = (state_15337[1]);if((state_val_15338 === 1))
{var inst_15308 = cljs.core.vec.call(null,chs);var inst_15309 = inst_15308;var state_15337__$1 = (function (){var statearr_15339 = state_15337;(statearr_15339[7] = inst_15309);
return statearr_15339;
})();var statearr_15340_15362 = state_15337__$1;(statearr_15340_15362[2] = null);
(statearr_15340_15362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 2))
{var inst_15309 = (state_15337[7]);var inst_15311 = cljs.core.count.call(null,inst_15309);var inst_15312 = (inst_15311 > 0);var state_15337__$1 = state_15337;if(cljs.core.truth_(inst_15312))
{var statearr_15341_15363 = state_15337__$1;(statearr_15341_15363[1] = 4);
} else
{var statearr_15342_15364 = state_15337__$1;(statearr_15342_15364[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 3))
{var inst_15335 = (state_15337[2]);var state_15337__$1 = state_15337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15337__$1,inst_15335);
} else
{if((state_val_15338 === 4))
{var inst_15309 = (state_15337[7]);var state_15337__$1 = state_15337;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15337__$1,7,inst_15309);
} else
{if((state_val_15338 === 5))
{var inst_15331 = cljs.core.async.close_BANG_.call(null,out);var state_15337__$1 = state_15337;var statearr_15343_15365 = state_15337__$1;(statearr_15343_15365[2] = inst_15331);
(statearr_15343_15365[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 6))
{var inst_15333 = (state_15337[2]);var state_15337__$1 = state_15337;var statearr_15344_15366 = state_15337__$1;(statearr_15344_15366[2] = inst_15333);
(statearr_15344_15366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 7))
{var inst_15317 = (state_15337[8]);var inst_15316 = (state_15337[9]);var inst_15316__$1 = (state_15337[2]);var inst_15317__$1 = cljs.core.nth.call(null,inst_15316__$1,0,null);var inst_15318 = cljs.core.nth.call(null,inst_15316__$1,1,null);var inst_15319 = (inst_15317__$1 == null);var state_15337__$1 = (function (){var statearr_15345 = state_15337;(statearr_15345[8] = inst_15317__$1);
(statearr_15345[10] = inst_15318);
(statearr_15345[9] = inst_15316__$1);
return statearr_15345;
})();if(cljs.core.truth_(inst_15319))
{var statearr_15346_15367 = state_15337__$1;(statearr_15346_15367[1] = 8);
} else
{var statearr_15347_15368 = state_15337__$1;(statearr_15347_15368[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 8))
{var inst_15317 = (state_15337[8]);var inst_15318 = (state_15337[10]);var inst_15316 = (state_15337[9]);var inst_15309 = (state_15337[7]);var inst_15321 = (function (){var c = inst_15318;var v = inst_15317;var vec__15314 = inst_15316;var cs = inst_15309;return ((function (c,v,vec__15314,cs,inst_15317,inst_15318,inst_15316,inst_15309,state_val_15338){
return (function (p1__15254_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15254_SHARP_);
});
;})(c,v,vec__15314,cs,inst_15317,inst_15318,inst_15316,inst_15309,state_val_15338))
})();var inst_15322 = cljs.core.filterv.call(null,inst_15321,inst_15309);var inst_15309__$1 = inst_15322;var state_15337__$1 = (function (){var statearr_15348 = state_15337;(statearr_15348[7] = inst_15309__$1);
return statearr_15348;
})();var statearr_15349_15369 = state_15337__$1;(statearr_15349_15369[2] = null);
(statearr_15349_15369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 9))
{var inst_15317 = (state_15337[8]);var state_15337__$1 = state_15337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15337__$1,11,out,inst_15317);
} else
{if((state_val_15338 === 10))
{var inst_15329 = (state_15337[2]);var state_15337__$1 = state_15337;var statearr_15351_15370 = state_15337__$1;(statearr_15351_15370[2] = inst_15329);
(statearr_15351_15370[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 11))
{var inst_15309 = (state_15337[7]);var inst_15326 = (state_15337[2]);var tmp15350 = inst_15309;var inst_15309__$1 = tmp15350;var state_15337__$1 = (function (){var statearr_15352 = state_15337;(statearr_15352[11] = inst_15326);
(statearr_15352[7] = inst_15309__$1);
return statearr_15352;
})();var statearr_15353_15371 = state_15337__$1;(statearr_15353_15371[2] = null);
(statearr_15353_15371[1] = 2);
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
var state_machine__5573__auto____0 = (function (){var statearr_15357 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15357[0] = state_machine__5573__auto__);
(statearr_15357[1] = 1);
return statearr_15357;
});
var state_machine__5573__auto____1 = (function (state_15337){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_15337);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e15358){if((e15358 instanceof Object))
{var ex__5576__auto__ = e15358;var statearr_15359_15372 = state_15337;(statearr_15359_15372[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15373 = state_15337;
state_15337 = G__15373;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_15337){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_15337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_15360 = f__5588__auto__.call(null);(statearr_15360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___15361);
return statearr_15360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5587__auto___15466 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_15443){var state_val_15444 = (state_15443[1]);if((state_val_15444 === 1))
{var inst_15420 = 0;var state_15443__$1 = (function (){var statearr_15445 = state_15443;(statearr_15445[7] = inst_15420);
return statearr_15445;
})();var statearr_15446_15467 = state_15443__$1;(statearr_15446_15467[2] = null);
(statearr_15446_15467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15444 === 2))
{var inst_15420 = (state_15443[7]);var inst_15422 = (inst_15420 < n);var state_15443__$1 = state_15443;if(cljs.core.truth_(inst_15422))
{var statearr_15447_15468 = state_15443__$1;(statearr_15447_15468[1] = 4);
} else
{var statearr_15448_15469 = state_15443__$1;(statearr_15448_15469[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15444 === 3))
{var inst_15440 = (state_15443[2]);var inst_15441 = cljs.core.async.close_BANG_.call(null,out);var state_15443__$1 = (function (){var statearr_15449 = state_15443;(statearr_15449[8] = inst_15440);
return statearr_15449;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15443__$1,inst_15441);
} else
{if((state_val_15444 === 4))
{var state_15443__$1 = state_15443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15443__$1,7,ch);
} else
{if((state_val_15444 === 5))
{var state_15443__$1 = state_15443;var statearr_15450_15470 = state_15443__$1;(statearr_15450_15470[2] = null);
(statearr_15450_15470[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15444 === 6))
{var inst_15438 = (state_15443[2]);var state_15443__$1 = state_15443;var statearr_15451_15471 = state_15443__$1;(statearr_15451_15471[2] = inst_15438);
(statearr_15451_15471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15444 === 7))
{var inst_15425 = (state_15443[9]);var inst_15425__$1 = (state_15443[2]);var inst_15426 = (inst_15425__$1 == null);var inst_15427 = cljs.core.not.call(null,inst_15426);var state_15443__$1 = (function (){var statearr_15452 = state_15443;(statearr_15452[9] = inst_15425__$1);
return statearr_15452;
})();if(inst_15427)
{var statearr_15453_15472 = state_15443__$1;(statearr_15453_15472[1] = 8);
} else
{var statearr_15454_15473 = state_15443__$1;(statearr_15454_15473[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15444 === 8))
{var inst_15425 = (state_15443[9]);var state_15443__$1 = state_15443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15443__$1,11,out,inst_15425);
} else
{if((state_val_15444 === 9))
{var state_15443__$1 = state_15443;var statearr_15455_15474 = state_15443__$1;(statearr_15455_15474[2] = null);
(statearr_15455_15474[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15444 === 10))
{var inst_15435 = (state_15443[2]);var state_15443__$1 = state_15443;var statearr_15456_15475 = state_15443__$1;(statearr_15456_15475[2] = inst_15435);
(statearr_15456_15475[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15444 === 11))
{var inst_15420 = (state_15443[7]);var inst_15430 = (state_15443[2]);var inst_15431 = (inst_15420 + 1);var inst_15420__$1 = inst_15431;var state_15443__$1 = (function (){var statearr_15457 = state_15443;(statearr_15457[7] = inst_15420__$1);
(statearr_15457[10] = inst_15430);
return statearr_15457;
})();var statearr_15458_15476 = state_15443__$1;(statearr_15458_15476[2] = null);
(statearr_15458_15476[1] = 2);
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
var state_machine__5573__auto____0 = (function (){var statearr_15462 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15462[0] = state_machine__5573__auto__);
(statearr_15462[1] = 1);
return statearr_15462;
});
var state_machine__5573__auto____1 = (function (state_15443){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_15443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e15463){if((e15463 instanceof Object))
{var ex__5576__auto__ = e15463;var statearr_15464_15477 = state_15443;(statearr_15464_15477[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15443);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15478 = state_15443;
state_15443 = G__15478;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_15443){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_15443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_15465 = f__5588__auto__.call(null);(statearr_15465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___15466);
return statearr_15465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5587__auto___15575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_15550){var state_val_15551 = (state_15550[1]);if((state_val_15551 === 1))
{var inst_15527 = null;var state_15550__$1 = (function (){var statearr_15552 = state_15550;(statearr_15552[7] = inst_15527);
return statearr_15552;
})();var statearr_15553_15576 = state_15550__$1;(statearr_15553_15576[2] = null);
(statearr_15553_15576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15551 === 2))
{var state_15550__$1 = state_15550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15550__$1,4,ch);
} else
{if((state_val_15551 === 3))
{var inst_15547 = (state_15550[2]);var inst_15548 = cljs.core.async.close_BANG_.call(null,out);var state_15550__$1 = (function (){var statearr_15554 = state_15550;(statearr_15554[8] = inst_15547);
return statearr_15554;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15550__$1,inst_15548);
} else
{if((state_val_15551 === 4))
{var inst_15530 = (state_15550[9]);var inst_15530__$1 = (state_15550[2]);var inst_15531 = (inst_15530__$1 == null);var inst_15532 = cljs.core.not.call(null,inst_15531);var state_15550__$1 = (function (){var statearr_15555 = state_15550;(statearr_15555[9] = inst_15530__$1);
return statearr_15555;
})();if(inst_15532)
{var statearr_15556_15577 = state_15550__$1;(statearr_15556_15577[1] = 5);
} else
{var statearr_15557_15578 = state_15550__$1;(statearr_15557_15578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15551 === 5))
{var inst_15530 = (state_15550[9]);var inst_15527 = (state_15550[7]);var inst_15534 = cljs.core._EQ_.call(null,inst_15530,inst_15527);var state_15550__$1 = state_15550;if(inst_15534)
{var statearr_15558_15579 = state_15550__$1;(statearr_15558_15579[1] = 8);
} else
{var statearr_15559_15580 = state_15550__$1;(statearr_15559_15580[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15551 === 6))
{var state_15550__$1 = state_15550;var statearr_15561_15581 = state_15550__$1;(statearr_15561_15581[2] = null);
(statearr_15561_15581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15551 === 7))
{var inst_15545 = (state_15550[2]);var state_15550__$1 = state_15550;var statearr_15562_15582 = state_15550__$1;(statearr_15562_15582[2] = inst_15545);
(statearr_15562_15582[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15551 === 8))
{var inst_15527 = (state_15550[7]);var tmp15560 = inst_15527;var inst_15527__$1 = tmp15560;var state_15550__$1 = (function (){var statearr_15563 = state_15550;(statearr_15563[7] = inst_15527__$1);
return statearr_15563;
})();var statearr_15564_15583 = state_15550__$1;(statearr_15564_15583[2] = null);
(statearr_15564_15583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15551 === 9))
{var inst_15530 = (state_15550[9]);var state_15550__$1 = state_15550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15550__$1,11,out,inst_15530);
} else
{if((state_val_15551 === 10))
{var inst_15542 = (state_15550[2]);var state_15550__$1 = state_15550;var statearr_15565_15584 = state_15550__$1;(statearr_15565_15584[2] = inst_15542);
(statearr_15565_15584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15551 === 11))
{var inst_15530 = (state_15550[9]);var inst_15539 = (state_15550[2]);var inst_15527 = inst_15530;var state_15550__$1 = (function (){var statearr_15566 = state_15550;(statearr_15566[10] = inst_15539);
(statearr_15566[7] = inst_15527);
return statearr_15566;
})();var statearr_15567_15585 = state_15550__$1;(statearr_15567_15585[2] = null);
(statearr_15567_15585[1] = 2);
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
var state_machine__5573__auto____0 = (function (){var statearr_15571 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15571[0] = state_machine__5573__auto__);
(statearr_15571[1] = 1);
return statearr_15571;
});
var state_machine__5573__auto____1 = (function (state_15550){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_15550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e15572){if((e15572 instanceof Object))
{var ex__5576__auto__ = e15572;var statearr_15573_15586 = state_15550;(statearr_15573_15586[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15587 = state_15550;
state_15550 = G__15587;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_15550){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_15550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_15574 = f__5588__auto__.call(null);(statearr_15574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___15575);
return statearr_15574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5587__auto___15722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_15692){var state_val_15693 = (state_15692[1]);if((state_val_15693 === 1))
{var inst_15655 = (new Array(n));var inst_15656 = inst_15655;var inst_15657 = 0;var state_15692__$1 = (function (){var statearr_15694 = state_15692;(statearr_15694[7] = inst_15657);
(statearr_15694[8] = inst_15656);
return statearr_15694;
})();var statearr_15695_15723 = state_15692__$1;(statearr_15695_15723[2] = null);
(statearr_15695_15723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 2))
{var state_15692__$1 = state_15692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15692__$1,4,ch);
} else
{if((state_val_15693 === 3))
{var inst_15690 = (state_15692[2]);var state_15692__$1 = state_15692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15692__$1,inst_15690);
} else
{if((state_val_15693 === 4))
{var inst_15660 = (state_15692[9]);var inst_15660__$1 = (state_15692[2]);var inst_15661 = (inst_15660__$1 == null);var inst_15662 = cljs.core.not.call(null,inst_15661);var state_15692__$1 = (function (){var statearr_15696 = state_15692;(statearr_15696[9] = inst_15660__$1);
return statearr_15696;
})();if(inst_15662)
{var statearr_15697_15724 = state_15692__$1;(statearr_15697_15724[1] = 5);
} else
{var statearr_15698_15725 = state_15692__$1;(statearr_15698_15725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 5))
{var inst_15665 = (state_15692[10]);var inst_15657 = (state_15692[7]);var inst_15656 = (state_15692[8]);var inst_15660 = (state_15692[9]);var inst_15664 = (inst_15656[inst_15657] = inst_15660);var inst_15665__$1 = (inst_15657 + 1);var inst_15666 = (inst_15665__$1 < n);var state_15692__$1 = (function (){var statearr_15699 = state_15692;(statearr_15699[10] = inst_15665__$1);
(statearr_15699[11] = inst_15664);
return statearr_15699;
})();if(cljs.core.truth_(inst_15666))
{var statearr_15700_15726 = state_15692__$1;(statearr_15700_15726[1] = 8);
} else
{var statearr_15701_15727 = state_15692__$1;(statearr_15701_15727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 6))
{var inst_15657 = (state_15692[7]);var inst_15678 = (inst_15657 > 0);var state_15692__$1 = state_15692;if(cljs.core.truth_(inst_15678))
{var statearr_15703_15728 = state_15692__$1;(statearr_15703_15728[1] = 12);
} else
{var statearr_15704_15729 = state_15692__$1;(statearr_15704_15729[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 7))
{var inst_15688 = (state_15692[2]);var state_15692__$1 = state_15692;var statearr_15705_15730 = state_15692__$1;(statearr_15705_15730[2] = inst_15688);
(statearr_15705_15730[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 8))
{var inst_15665 = (state_15692[10]);var inst_15656 = (state_15692[8]);var tmp15702 = inst_15656;var inst_15656__$1 = tmp15702;var inst_15657 = inst_15665;var state_15692__$1 = (function (){var statearr_15706 = state_15692;(statearr_15706[7] = inst_15657);
(statearr_15706[8] = inst_15656__$1);
return statearr_15706;
})();var statearr_15707_15731 = state_15692__$1;(statearr_15707_15731[2] = null);
(statearr_15707_15731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 9))
{var inst_15656 = (state_15692[8]);var inst_15670 = cljs.core.vec.call(null,inst_15656);var state_15692__$1 = state_15692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15692__$1,11,out,inst_15670);
} else
{if((state_val_15693 === 10))
{var inst_15676 = (state_15692[2]);var state_15692__$1 = state_15692;var statearr_15708_15732 = state_15692__$1;(statearr_15708_15732[2] = inst_15676);
(statearr_15708_15732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 11))
{var inst_15672 = (state_15692[2]);var inst_15673 = (new Array(n));var inst_15656 = inst_15673;var inst_15657 = 0;var state_15692__$1 = (function (){var statearr_15709 = state_15692;(statearr_15709[7] = inst_15657);
(statearr_15709[8] = inst_15656);
(statearr_15709[12] = inst_15672);
return statearr_15709;
})();var statearr_15710_15733 = state_15692__$1;(statearr_15710_15733[2] = null);
(statearr_15710_15733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 12))
{var inst_15656 = (state_15692[8]);var inst_15680 = cljs.core.vec.call(null,inst_15656);var state_15692__$1 = state_15692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15692__$1,15,out,inst_15680);
} else
{if((state_val_15693 === 13))
{var state_15692__$1 = state_15692;var statearr_15711_15734 = state_15692__$1;(statearr_15711_15734[2] = null);
(statearr_15711_15734[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 14))
{var inst_15685 = (state_15692[2]);var inst_15686 = cljs.core.async.close_BANG_.call(null,out);var state_15692__$1 = (function (){var statearr_15712 = state_15692;(statearr_15712[13] = inst_15685);
return statearr_15712;
})();var statearr_15713_15735 = state_15692__$1;(statearr_15713_15735[2] = inst_15686);
(statearr_15713_15735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15693 === 15))
{var inst_15682 = (state_15692[2]);var state_15692__$1 = state_15692;var statearr_15714_15736 = state_15692__$1;(statearr_15714_15736[2] = inst_15682);
(statearr_15714_15736[1] = 14);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_15718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15718[0] = state_machine__5573__auto__);
(statearr_15718[1] = 1);
return statearr_15718;
});
var state_machine__5573__auto____1 = (function (state_15692){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_15692);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e15719){if((e15719 instanceof Object))
{var ex__5576__auto__ = e15719;var statearr_15720_15737 = state_15692;(statearr_15720_15737[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15738 = state_15692;
state_15692 = G__15738;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_15692){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_15692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_15721 = f__5588__auto__.call(null);(statearr_15721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___15722);
return statearr_15721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5587__auto___15881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5588__auto__ = (function (){var switch__5572__auto__ = (function (state_15851){var state_val_15852 = (state_15851[1]);if((state_val_15852 === 1))
{var inst_15810 = [];var inst_15811 = inst_15810;var inst_15812 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15851__$1 = (function (){var statearr_15853 = state_15851;(statearr_15853[7] = inst_15812);
(statearr_15853[8] = inst_15811);
return statearr_15853;
})();var statearr_15854_15882 = state_15851__$1;(statearr_15854_15882[2] = null);
(statearr_15854_15882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 2))
{var state_15851__$1 = state_15851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15851__$1,4,ch);
} else
{if((state_val_15852 === 3))
{var inst_15849 = (state_15851[2]);var state_15851__$1 = state_15851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15851__$1,inst_15849);
} else
{if((state_val_15852 === 4))
{var inst_15815 = (state_15851[9]);var inst_15815__$1 = (state_15851[2]);var inst_15816 = (inst_15815__$1 == null);var inst_15817 = cljs.core.not.call(null,inst_15816);var state_15851__$1 = (function (){var statearr_15855 = state_15851;(statearr_15855[9] = inst_15815__$1);
return statearr_15855;
})();if(inst_15817)
{var statearr_15856_15883 = state_15851__$1;(statearr_15856_15883[1] = 5);
} else
{var statearr_15857_15884 = state_15851__$1;(statearr_15857_15884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 5))
{var inst_15812 = (state_15851[7]);var inst_15815 = (state_15851[9]);var inst_15819 = (state_15851[10]);var inst_15819__$1 = f.call(null,inst_15815);var inst_15820 = cljs.core._EQ_.call(null,inst_15819__$1,inst_15812);var inst_15821 = cljs.core.keyword_identical_QMARK_.call(null,inst_15812,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15822 = (inst_15820) || (inst_15821);var state_15851__$1 = (function (){var statearr_15858 = state_15851;(statearr_15858[10] = inst_15819__$1);
return statearr_15858;
})();if(cljs.core.truth_(inst_15822))
{var statearr_15859_15885 = state_15851__$1;(statearr_15859_15885[1] = 8);
} else
{var statearr_15860_15886 = state_15851__$1;(statearr_15860_15886[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 6))
{var inst_15811 = (state_15851[8]);var inst_15836 = inst_15811.length;var inst_15837 = (inst_15836 > 0);var state_15851__$1 = state_15851;if(cljs.core.truth_(inst_15837))
{var statearr_15862_15887 = state_15851__$1;(statearr_15862_15887[1] = 12);
} else
{var statearr_15863_15888 = state_15851__$1;(statearr_15863_15888[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 7))
{var inst_15847 = (state_15851[2]);var state_15851__$1 = state_15851;var statearr_15864_15889 = state_15851__$1;(statearr_15864_15889[2] = inst_15847);
(statearr_15864_15889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 8))
{var inst_15815 = (state_15851[9]);var inst_15811 = (state_15851[8]);var inst_15819 = (state_15851[10]);var inst_15824 = inst_15811.push(inst_15815);var tmp15861 = inst_15811;var inst_15811__$1 = tmp15861;var inst_15812 = inst_15819;var state_15851__$1 = (function (){var statearr_15865 = state_15851;(statearr_15865[7] = inst_15812);
(statearr_15865[8] = inst_15811__$1);
(statearr_15865[11] = inst_15824);
return statearr_15865;
})();var statearr_15866_15890 = state_15851__$1;(statearr_15866_15890[2] = null);
(statearr_15866_15890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 9))
{var inst_15811 = (state_15851[8]);var inst_15827 = cljs.core.vec.call(null,inst_15811);var state_15851__$1 = state_15851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15851__$1,11,out,inst_15827);
} else
{if((state_val_15852 === 10))
{var inst_15834 = (state_15851[2]);var state_15851__$1 = state_15851;var statearr_15867_15891 = state_15851__$1;(statearr_15867_15891[2] = inst_15834);
(statearr_15867_15891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 11))
{var inst_15815 = (state_15851[9]);var inst_15819 = (state_15851[10]);var inst_15829 = (state_15851[2]);var inst_15830 = [];var inst_15831 = inst_15830.push(inst_15815);var inst_15811 = inst_15830;var inst_15812 = inst_15819;var state_15851__$1 = (function (){var statearr_15868 = state_15851;(statearr_15868[12] = inst_15829);
(statearr_15868[7] = inst_15812);
(statearr_15868[8] = inst_15811);
(statearr_15868[13] = inst_15831);
return statearr_15868;
})();var statearr_15869_15892 = state_15851__$1;(statearr_15869_15892[2] = null);
(statearr_15869_15892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 12))
{var inst_15811 = (state_15851[8]);var inst_15839 = cljs.core.vec.call(null,inst_15811);var state_15851__$1 = state_15851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15851__$1,15,out,inst_15839);
} else
{if((state_val_15852 === 13))
{var state_15851__$1 = state_15851;var statearr_15870_15893 = state_15851__$1;(statearr_15870_15893[2] = null);
(statearr_15870_15893[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 14))
{var inst_15844 = (state_15851[2]);var inst_15845 = cljs.core.async.close_BANG_.call(null,out);var state_15851__$1 = (function (){var statearr_15871 = state_15851;(statearr_15871[14] = inst_15844);
return statearr_15871;
})();var statearr_15872_15894 = state_15851__$1;(statearr_15872_15894[2] = inst_15845);
(statearr_15872_15894[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15852 === 15))
{var inst_15841 = (state_15851[2]);var state_15851__$1 = state_15851;var statearr_15873_15895 = state_15851__$1;(statearr_15873_15895[2] = inst_15841);
(statearr_15873_15895[1] = 14);
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
});return ((function (switch__5572__auto__){
return (function() {
var state_machine__5573__auto__ = null;
var state_machine__5573__auto____0 = (function (){var statearr_15877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15877[0] = state_machine__5573__auto__);
(statearr_15877[1] = 1);
return statearr_15877;
});
var state_machine__5573__auto____1 = (function (state_15851){while(true){
var ret_value__5574__auto__ = (function (){try{while(true){
var result__5575__auto__ = switch__5572__auto__.call(null,state_15851);if(cljs.core.keyword_identical_QMARK_.call(null,result__5575__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5575__auto__;
}
break;
}
}catch (e15878){if((e15878 instanceof Object))
{var ex__5576__auto__ = e15878;var statearr_15879_15896 = state_15851;(statearr_15879_15896[5] = ex__5576__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5574__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15897 = state_15851;
state_15851 = G__15897;
continue;
}
} else
{return ret_value__5574__auto__;
}
break;
}
});
state_machine__5573__auto__ = function(state_15851){
switch(arguments.length){
case 0:
return state_machine__5573__auto____0.call(this);
case 1:
return state_machine__5573__auto____1.call(this,state_15851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5573__auto____0;
state_machine__5573__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5573__auto____1;
return state_machine__5573__auto__;
})()
;})(switch__5572__auto__))
})();var state__5589__auto__ = (function (){var statearr_15880 = f__5588__auto__.call(null);(statearr_15880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5587__auto___15881);
return statearr_15880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5589__auto__);
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