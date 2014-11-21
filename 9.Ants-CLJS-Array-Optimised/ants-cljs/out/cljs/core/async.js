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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11167 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11167 = (function (f,fn_handler,meta11168){
this.f = f;
this.fn_handler = fn_handler;
this.meta11168 = meta11168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11167.cljs$lang$type = true;
cljs.core.async.t11167.cljs$lang$ctorStr = "cljs.core.async/t11167";
cljs.core.async.t11167.cljs$lang$ctorPrWriter = (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t11167");
});
cljs.core.async.t11167.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11169){var self__ = this;
var _11169__$1 = this;return self__.meta11168;
});
cljs.core.async.t11167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11169,meta11168__$1){var self__ = this;
var _11169__$1 = this;return (new cljs.core.async.t11167(self__.f,self__.fn_handler,meta11168__$1));
});
cljs.core.async.__GT_t11167 = (function __GT_t11167(f__$1,fn_handler__$1,meta11168){return (new cljs.core.async.t11167(f__$1,fn_handler__$1,meta11168));
});
}
return (new cljs.core.async.t11167(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11171 = buff;if(G__11171)
{var bit__4125__auto__ = null;if(cljs.core.truth_((function (){var or__3475__auto__ = bit__4125__auto__;if(cljs.core.truth_(or__3475__auto__))
{return or__3475__auto__;
} else
{return G__11171.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11171.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11171);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11171);
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
{var val_11172 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11172);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11172);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4323__auto___11173 = n;var x_11174 = 0;while(true){
if((x_11174 < n__4323__auto___11173))
{(a[x_11174] = 0);
{
var G__11175 = (x_11174 + 1);
x_11174 = G__11175;
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
var G__11176 = (i + 1);
i = G__11176;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11180 = (function (flag,alt_flag,meta11181){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11181 = meta11181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11180.cljs$lang$type = true;
cljs.core.async.t11180.cljs$lang$ctorStr = "cljs.core.async/t11180";
cljs.core.async.t11180.cljs$lang$ctorPrWriter = (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t11180");
});
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11182){var self__ = this;
var _11182__$1 = this;return self__.meta11181;
});
cljs.core.async.t11180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11182,meta11181__$1){var self__ = this;
var _11182__$1 = this;return (new cljs.core.async.t11180(self__.flag,self__.alt_flag,meta11181__$1));
});
cljs.core.async.__GT_t11180 = (function __GT_t11180(flag__$1,alt_flag__$1,meta11181){return (new cljs.core.async.t11180(flag__$1,alt_flag__$1,meta11181));
});
}
return (new cljs.core.async.t11180(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11186 = (function (cb,flag,alt_handler,meta11187){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11187 = meta11187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11186.cljs$lang$type = true;
cljs.core.async.t11186.cljs$lang$ctorStr = "cljs.core.async/t11186";
cljs.core.async.t11186.cljs$lang$ctorPrWriter = (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t11186");
});
cljs.core.async.t11186.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11188){var self__ = this;
var _11188__$1 = this;return self__.meta11187;
});
cljs.core.async.t11186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11188,meta11187__$1){var self__ = this;
var _11188__$1 = this;return (new cljs.core.async.t11186(self__.cb,self__.flag,self__.alt_handler,meta11187__$1));
});
cljs.core.async.__GT_t11186 = (function __GT_t11186(cb__$1,flag__$1,alt_handler__$1,meta11187){return (new cljs.core.async.t11186(cb__$1,flag__$1,alt_handler__$1,meta11187));
});
}
return (new cljs.core.async.t11186(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11189_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11189_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11190_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11190_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3475__auto__ = wport;if(cljs.core.truth_(or__3475__auto__))
{return or__3475__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11191 = (i + 1);
i = G__11191;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3475__auto__ = ret;if(cljs.core.truth_(or__3475__auto__))
{return or__3475__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3463__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3463__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3463__auto__;
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
var alts_BANG___delegate = function (ports,p__11192){var map__11194 = p__11192;var map__11194__$1 = ((cljs.core.seq_QMARK_.call(null,map__11194))?cljs.core.apply.call(null,cljs.core.hash_map,map__11194):map__11194);var opts = map__11194__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11192 = null;if (arguments.length > 1) {
  p__11192 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11192);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11195){
var ports = cljs.core.first(arglist__11195);
var p__11192 = cljs.core.rest(arglist__11195);
return alts_BANG___delegate(ports,p__11192);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11203 = (function (ch,f,map_LT_,meta11204){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11204 = meta11204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11203.cljs$lang$type = true;
cljs.core.async.t11203.cljs$lang$ctorStr = "cljs.core.async/t11203";
cljs.core.async.t11203.cljs$lang$ctorPrWriter = (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t11203");
});
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11206 = (function (fn1,_,meta11204,ch,f,map_LT_,meta11207){
this.fn1 = fn1;
this._ = _;
this.meta11204 = meta11204;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11207 = meta11207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11206.cljs$lang$type = true;
cljs.core.async.t11206.cljs$lang$ctorStr = "cljs.core.async/t11206";
cljs.core.async.t11206.cljs$lang$ctorPrWriter = (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t11206");
});
cljs.core.async.t11206.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11206.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11196_SHARP_){return f1.call(null,(((p1__11196_SHARP_ == null))?null:self__.f.call(null,p1__11196_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11208){var self__ = this;
var _11208__$1 = this;return self__.meta11207;
});
cljs.core.async.t11206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11208,meta11207__$1){var self__ = this;
var _11208__$1 = this;return (new cljs.core.async.t11206(self__.fn1,self__._,self__.meta11204,self__.ch,self__.f,self__.map_LT_,meta11207__$1));
});
cljs.core.async.__GT_t11206 = (function __GT_t11206(fn1__$1,___$2,meta11204__$1,ch__$2,f__$2,map_LT___$2,meta11207){return (new cljs.core.async.t11206(fn1__$1,___$2,meta11204__$1,ch__$2,f__$2,map_LT___$2,meta11207));
});
}
return (new cljs.core.async.t11206(fn1,___$1,self__.meta11204,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3463__auto__ = ret;if(cljs.core.truth_(and__3463__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3463__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11205){var self__ = this;
var _11205__$1 = this;return self__.meta11204;
});
cljs.core.async.t11203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11205,meta11204__$1){var self__ = this;
var _11205__$1 = this;return (new cljs.core.async.t11203(self__.ch,self__.f,self__.map_LT_,meta11204__$1));
});
cljs.core.async.__GT_t11203 = (function __GT_t11203(ch__$1,f__$1,map_LT___$1,meta11204){return (new cljs.core.async.t11203(ch__$1,f__$1,map_LT___$1,meta11204));
});
}
return (new cljs.core.async.t11203(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11212 = (function (ch,f,map_GT_,meta11213){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11213 = meta11213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11212.cljs$lang$type = true;
cljs.core.async.t11212.cljs$lang$ctorStr = "cljs.core.async/t11212";
cljs.core.async.t11212.cljs$lang$ctorPrWriter = (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t11212");
});
cljs.core.async.t11212.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11212.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11214){var self__ = this;
var _11214__$1 = this;return self__.meta11213;
});
cljs.core.async.t11212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11214,meta11213__$1){var self__ = this;
var _11214__$1 = this;return (new cljs.core.async.t11212(self__.ch,self__.f,self__.map_GT_,meta11213__$1));
});
cljs.core.async.__GT_t11212 = (function __GT_t11212(ch__$1,f__$1,map_GT___$1,meta11213){return (new cljs.core.async.t11212(ch__$1,f__$1,map_GT___$1,meta11213));
});
}
return (new cljs.core.async.t11212(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11218 = (function (ch,p,filter_GT_,meta11219){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11219 = meta11219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11218.cljs$lang$type = true;
cljs.core.async.t11218.cljs$lang$ctorStr = "cljs.core.async/t11218";
cljs.core.async.t11218.cljs$lang$ctorPrWriter = (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t11218");
});
cljs.core.async.t11218.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11218.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11220){var self__ = this;
var _11220__$1 = this;return self__.meta11219;
});
cljs.core.async.t11218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11220,meta11219__$1){var self__ = this;
var _11220__$1 = this;return (new cljs.core.async.t11218(self__.ch,self__.p,self__.filter_GT_,meta11219__$1));
});
cljs.core.async.__GT_t11218 = (function __GT_t11218(ch__$1,p__$1,filter_GT___$1,meta11219){return (new cljs.core.async.t11218(ch__$1,p__$1,filter_GT___$1,meta11219));
});
}
return (new cljs.core.async.t11218(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5611__auto___11303 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_11282){var state_val_11283 = (state_11282[1]);if((state_val_11283 === 1))
{var state_11282__$1 = state_11282;var statearr_11284_11304 = state_11282__$1;(statearr_11284_11304[2] = null);
(statearr_11284_11304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11283 === 2))
{var state_11282__$1 = state_11282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11282__$1,4,ch);
} else
{if((state_val_11283 === 3))
{var inst_11280 = (state_11282[2]);var state_11282__$1 = state_11282;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11282__$1,inst_11280);
} else
{if((state_val_11283 === 4))
{var inst_11264 = (state_11282[7]);var inst_11264__$1 = (state_11282[2]);var inst_11265 = (inst_11264__$1 == null);var state_11282__$1 = (function (){var statearr_11285 = state_11282;(statearr_11285[7] = inst_11264__$1);
return statearr_11285;
})();if(cljs.core.truth_(inst_11265))
{var statearr_11286_11305 = state_11282__$1;(statearr_11286_11305[1] = 5);
} else
{var statearr_11287_11306 = state_11282__$1;(statearr_11287_11306[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11283 === 5))
{var inst_11267 = cljs.core.async.close_BANG_.call(null,out);var state_11282__$1 = state_11282;var statearr_11288_11307 = state_11282__$1;(statearr_11288_11307[2] = inst_11267);
(statearr_11288_11307[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11283 === 6))
{var inst_11264 = (state_11282[7]);var inst_11269 = p.call(null,inst_11264);var state_11282__$1 = state_11282;if(cljs.core.truth_(inst_11269))
{var statearr_11289_11308 = state_11282__$1;(statearr_11289_11308[1] = 8);
} else
{var statearr_11290_11309 = state_11282__$1;(statearr_11290_11309[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11283 === 7))
{var inst_11278 = (state_11282[2]);var state_11282__$1 = state_11282;var statearr_11291_11310 = state_11282__$1;(statearr_11291_11310[2] = inst_11278);
(statearr_11291_11310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11283 === 8))
{var inst_11264 = (state_11282[7]);var state_11282__$1 = state_11282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11282__$1,11,out,inst_11264);
} else
{if((state_val_11283 === 9))
{var state_11282__$1 = state_11282;var statearr_11292_11311 = state_11282__$1;(statearr_11292_11311[2] = null);
(statearr_11292_11311[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11283 === 10))
{var inst_11275 = (state_11282[2]);var state_11282__$1 = (function (){var statearr_11293 = state_11282;(statearr_11293[8] = inst_11275);
return statearr_11293;
})();var statearr_11294_11312 = state_11282__$1;(statearr_11294_11312[2] = null);
(statearr_11294_11312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11283 === 11))
{var inst_11272 = (state_11282[2]);var state_11282__$1 = state_11282;var statearr_11295_11313 = state_11282__$1;(statearr_11295_11313[2] = inst_11272);
(statearr_11295_11313[1] = 10);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_11299 = [null,null,null,null,null,null,null,null,null];(statearr_11299[0] = state_machine__5597__auto__);
(statearr_11299[1] = 1);
return statearr_11299;
});
var state_machine__5597__auto____1 = (function (state_11282){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_11282);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e11300){if((e11300 instanceof Object))
{var ex__5600__auto__ = e11300;var statearr_11301_11314 = state_11282;(statearr_11301_11314[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11282);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11315 = state_11282;
state_11282 = G__11315;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_11282){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_11282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_11302 = f__5612__auto__.call(null);(statearr_11302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___11303);
return statearr_11302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5611__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_11481){var state_val_11482 = (state_11481[1]);if((state_val_11482 === 1))
{var state_11481__$1 = state_11481;var statearr_11483_11524 = state_11481__$1;(statearr_11483_11524[2] = null);
(statearr_11483_11524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 2))
{var state_11481__$1 = state_11481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11481__$1,4,in$);
} else
{if((state_val_11482 === 3))
{var inst_11479 = (state_11481[2]);var state_11481__$1 = state_11481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11481__$1,inst_11479);
} else
{if((state_val_11482 === 4))
{var inst_11422 = (state_11481[7]);var inst_11422__$1 = (state_11481[2]);var inst_11423 = (inst_11422__$1 == null);var state_11481__$1 = (function (){var statearr_11484 = state_11481;(statearr_11484[7] = inst_11422__$1);
return statearr_11484;
})();if(cljs.core.truth_(inst_11423))
{var statearr_11485_11525 = state_11481__$1;(statearr_11485_11525[1] = 5);
} else
{var statearr_11486_11526 = state_11481__$1;(statearr_11486_11526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 5))
{var inst_11425 = cljs.core.async.close_BANG_.call(null,out);var state_11481__$1 = state_11481;var statearr_11487_11527 = state_11481__$1;(statearr_11487_11527[2] = inst_11425);
(statearr_11487_11527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 6))
{var inst_11422 = (state_11481[7]);var inst_11431 = f.call(null,inst_11422);var inst_11432 = cljs.core.seq.call(null,inst_11431);var inst_11433 = inst_11432;var inst_11434 = null;var inst_11435 = 0;var inst_11436 = 0;var state_11481__$1 = (function (){var statearr_11488 = state_11481;(statearr_11488[8] = inst_11434);
(statearr_11488[9] = inst_11435);
(statearr_11488[10] = inst_11436);
(statearr_11488[11] = inst_11433);
return statearr_11488;
})();var statearr_11489_11528 = state_11481__$1;(statearr_11489_11528[2] = null);
(statearr_11489_11528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 7))
{var inst_11477 = (state_11481[2]);var state_11481__$1 = state_11481;var statearr_11490_11529 = state_11481__$1;(statearr_11490_11529[2] = inst_11477);
(statearr_11490_11529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 8))
{var inst_11435 = (state_11481[9]);var inst_11436 = (state_11481[10]);var inst_11438 = (inst_11436 < inst_11435);var inst_11439 = inst_11438;var state_11481__$1 = state_11481;if(cljs.core.truth_(inst_11439))
{var statearr_11491_11530 = state_11481__$1;(statearr_11491_11530[1] = 10);
} else
{var statearr_11492_11531 = state_11481__$1;(statearr_11492_11531[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 9))
{var inst_11469 = (state_11481[2]);var inst_11470 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11481__$1 = (function (){var statearr_11493 = state_11481;(statearr_11493[12] = inst_11469);
return statearr_11493;
})();if(cljs.core.truth_(inst_11470))
{var statearr_11494_11532 = state_11481__$1;(statearr_11494_11532[1] = 21);
} else
{var statearr_11495_11533 = state_11481__$1;(statearr_11495_11533[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 10))
{var inst_11434 = (state_11481[8]);var inst_11436 = (state_11481[10]);var inst_11441 = cljs.core._nth.call(null,inst_11434,inst_11436);var state_11481__$1 = state_11481;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11481__$1,13,out,inst_11441);
} else
{if((state_val_11482 === 11))
{var inst_11447 = (state_11481[13]);var inst_11433 = (state_11481[11]);var inst_11447__$1 = cljs.core.seq.call(null,inst_11433);var state_11481__$1 = (function (){var statearr_11499 = state_11481;(statearr_11499[13] = inst_11447__$1);
return statearr_11499;
})();if(inst_11447__$1)
{var statearr_11500_11534 = state_11481__$1;(statearr_11500_11534[1] = 14);
} else
{var statearr_11501_11535 = state_11481__$1;(statearr_11501_11535[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 12))
{var inst_11467 = (state_11481[2]);var state_11481__$1 = state_11481;var statearr_11502_11536 = state_11481__$1;(statearr_11502_11536[2] = inst_11467);
(statearr_11502_11536[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 13))
{var inst_11434 = (state_11481[8]);var inst_11435 = (state_11481[9]);var inst_11436 = (state_11481[10]);var inst_11433 = (state_11481[11]);var inst_11443 = (state_11481[2]);var inst_11444 = (inst_11436 + 1);var tmp11496 = inst_11434;var tmp11497 = inst_11435;var tmp11498 = inst_11433;var inst_11433__$1 = tmp11498;var inst_11434__$1 = tmp11496;var inst_11435__$1 = tmp11497;var inst_11436__$1 = inst_11444;var state_11481__$1 = (function (){var statearr_11503 = state_11481;(statearr_11503[8] = inst_11434__$1);
(statearr_11503[9] = inst_11435__$1);
(statearr_11503[14] = inst_11443);
(statearr_11503[10] = inst_11436__$1);
(statearr_11503[11] = inst_11433__$1);
return statearr_11503;
})();var statearr_11504_11537 = state_11481__$1;(statearr_11504_11537[2] = null);
(statearr_11504_11537[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 14))
{var inst_11447 = (state_11481[13]);var inst_11449 = cljs.core.chunked_seq_QMARK_.call(null,inst_11447);var state_11481__$1 = state_11481;if(inst_11449)
{var statearr_11505_11538 = state_11481__$1;(statearr_11505_11538[1] = 17);
} else
{var statearr_11506_11539 = state_11481__$1;(statearr_11506_11539[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 15))
{var state_11481__$1 = state_11481;var statearr_11507_11540 = state_11481__$1;(statearr_11507_11540[2] = null);
(statearr_11507_11540[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 16))
{var inst_11465 = (state_11481[2]);var state_11481__$1 = state_11481;var statearr_11508_11541 = state_11481__$1;(statearr_11508_11541[2] = inst_11465);
(statearr_11508_11541[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 17))
{var inst_11447 = (state_11481[13]);var inst_11451 = cljs.core.chunk_first.call(null,inst_11447);var inst_11452 = cljs.core.chunk_rest.call(null,inst_11447);var inst_11453 = cljs.core.count.call(null,inst_11451);var inst_11433 = inst_11452;var inst_11434 = inst_11451;var inst_11435 = inst_11453;var inst_11436 = 0;var state_11481__$1 = (function (){var statearr_11509 = state_11481;(statearr_11509[8] = inst_11434);
(statearr_11509[9] = inst_11435);
(statearr_11509[10] = inst_11436);
(statearr_11509[11] = inst_11433);
return statearr_11509;
})();var statearr_11510_11542 = state_11481__$1;(statearr_11510_11542[2] = null);
(statearr_11510_11542[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 18))
{var inst_11447 = (state_11481[13]);var inst_11456 = cljs.core.first.call(null,inst_11447);var state_11481__$1 = state_11481;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11481__$1,20,out,inst_11456);
} else
{if((state_val_11482 === 19))
{var inst_11462 = (state_11481[2]);var state_11481__$1 = state_11481;var statearr_11511_11543 = state_11481__$1;(statearr_11511_11543[2] = inst_11462);
(statearr_11511_11543[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 20))
{var inst_11447 = (state_11481[13]);var inst_11458 = (state_11481[2]);var inst_11459 = cljs.core.next.call(null,inst_11447);var inst_11433 = inst_11459;var inst_11434 = null;var inst_11435 = 0;var inst_11436 = 0;var state_11481__$1 = (function (){var statearr_11512 = state_11481;(statearr_11512[15] = inst_11458);
(statearr_11512[8] = inst_11434);
(statearr_11512[9] = inst_11435);
(statearr_11512[10] = inst_11436);
(statearr_11512[11] = inst_11433);
return statearr_11512;
})();var statearr_11513_11544 = state_11481__$1;(statearr_11513_11544[2] = null);
(statearr_11513_11544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 21))
{var state_11481__$1 = state_11481;var statearr_11514_11545 = state_11481__$1;(statearr_11514_11545[2] = null);
(statearr_11514_11545[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 22))
{var state_11481__$1 = state_11481;var statearr_11515_11546 = state_11481__$1;(statearr_11515_11546[2] = null);
(statearr_11515_11546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11482 === 23))
{var inst_11475 = (state_11481[2]);var state_11481__$1 = state_11481;var statearr_11516_11547 = state_11481__$1;(statearr_11516_11547[2] = inst_11475);
(statearr_11516_11547[1] = 7);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_11520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11520[0] = state_machine__5597__auto__);
(statearr_11520[1] = 1);
return statearr_11520;
});
var state_machine__5597__auto____1 = (function (state_11481){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_11481);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e11521){if((e11521 instanceof Object))
{var ex__5600__auto__ = e11521;var statearr_11522_11548 = state_11481;(statearr_11522_11548[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11481);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11549 = state_11481;
state_11481 = G__11549;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_11481){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_11481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_11523 = f__5612__auto__.call(null);(statearr_11523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto__);
return statearr_11523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
}));
return c__5611__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5611__auto___11644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_11620){var state_val_11621 = (state_11620[1]);if((state_val_11621 === 1))
{var state_11620__$1 = state_11620;var statearr_11622_11645 = state_11620__$1;(statearr_11622_11645[2] = null);
(statearr_11622_11645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 2))
{var state_11620__$1 = state_11620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11620__$1,4,from);
} else
{if((state_val_11621 === 3))
{var inst_11618 = (state_11620[2]);var state_11620__$1 = state_11620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11620__$1,inst_11618);
} else
{if((state_val_11621 === 4))
{var inst_11599 = (state_11620[7]);var inst_11599__$1 = (state_11620[2]);var inst_11600 = (inst_11599__$1 == null);var state_11620__$1 = (function (){var statearr_11623 = state_11620;(statearr_11623[7] = inst_11599__$1);
return statearr_11623;
})();if(cljs.core.truth_(inst_11600))
{var statearr_11624_11646 = state_11620__$1;(statearr_11624_11646[1] = 5);
} else
{var statearr_11625_11647 = state_11620__$1;(statearr_11625_11647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 5))
{var state_11620__$1 = state_11620;if(cljs.core.truth_(close_QMARK_))
{var statearr_11626_11648 = state_11620__$1;(statearr_11626_11648[1] = 8);
} else
{var statearr_11627_11649 = state_11620__$1;(statearr_11627_11649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 6))
{var inst_11599 = (state_11620[7]);var state_11620__$1 = state_11620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11620__$1,11,to,inst_11599);
} else
{if((state_val_11621 === 7))
{var inst_11616 = (state_11620[2]);var state_11620__$1 = state_11620;var statearr_11628_11650 = state_11620__$1;(statearr_11628_11650[2] = inst_11616);
(statearr_11628_11650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 8))
{var inst_11603 = cljs.core.async.close_BANG_.call(null,to);var state_11620__$1 = state_11620;var statearr_11629_11651 = state_11620__$1;(statearr_11629_11651[2] = inst_11603);
(statearr_11629_11651[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 9))
{var state_11620__$1 = state_11620;var statearr_11630_11652 = state_11620__$1;(statearr_11630_11652[2] = null);
(statearr_11630_11652[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 10))
{var inst_11606 = (state_11620[2]);var state_11620__$1 = state_11620;var statearr_11631_11653 = state_11620__$1;(statearr_11631_11653[2] = inst_11606);
(statearr_11631_11653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 11))
{var inst_11609 = (state_11620[2]);var state_11620__$1 = state_11620;if(cljs.core.truth_(inst_11609))
{var statearr_11632_11654 = state_11620__$1;(statearr_11632_11654[1] = 12);
} else
{var statearr_11633_11655 = state_11620__$1;(statearr_11633_11655[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 12))
{var state_11620__$1 = state_11620;var statearr_11634_11656 = state_11620__$1;(statearr_11634_11656[2] = null);
(statearr_11634_11656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 13))
{var state_11620__$1 = state_11620;var statearr_11635_11657 = state_11620__$1;(statearr_11635_11657[2] = null);
(statearr_11635_11657[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 14))
{var inst_11614 = (state_11620[2]);var state_11620__$1 = state_11620;var statearr_11636_11658 = state_11620__$1;(statearr_11636_11658[2] = inst_11614);
(statearr_11636_11658[1] = 7);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_11640 = [null,null,null,null,null,null,null,null];(statearr_11640[0] = state_machine__5597__auto__);
(statearr_11640[1] = 1);
return statearr_11640;
});
var state_machine__5597__auto____1 = (function (state_11620){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_11620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e11641){if((e11641 instanceof Object))
{var ex__5600__auto__ = e11641;var statearr_11642_11659 = state_11620;(statearr_11642_11659[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11660 = state_11620;
state_11620 = G__11660;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_11620){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_11620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_11643 = f__5612__auto__.call(null);(statearr_11643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___11644);
return statearr_11643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5611__auto___11761 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_11736){var state_val_11737 = (state_11736[1]);if((state_val_11737 === 1))
{var state_11736__$1 = state_11736;var statearr_11738_11762 = state_11736__$1;(statearr_11738_11762[2] = null);
(statearr_11738_11762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 2))
{var state_11736__$1 = state_11736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11736__$1,4,ch);
} else
{if((state_val_11737 === 3))
{var inst_11734 = (state_11736[2]);var state_11736__$1 = state_11736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11736__$1,inst_11734);
} else
{if((state_val_11737 === 4))
{var inst_11713 = (state_11736[7]);var inst_11713__$1 = (state_11736[2]);var inst_11714 = (inst_11713__$1 == null);var state_11736__$1 = (function (){var statearr_11739 = state_11736;(statearr_11739[7] = inst_11713__$1);
return statearr_11739;
})();if(cljs.core.truth_(inst_11714))
{var statearr_11740_11763 = state_11736__$1;(statearr_11740_11763[1] = 5);
} else
{var statearr_11741_11764 = state_11736__$1;(statearr_11741_11764[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 5))
{var inst_11716 = cljs.core.async.close_BANG_.call(null,tc);var inst_11717 = cljs.core.async.close_BANG_.call(null,fc);var state_11736__$1 = (function (){var statearr_11742 = state_11736;(statearr_11742[8] = inst_11716);
return statearr_11742;
})();var statearr_11743_11765 = state_11736__$1;(statearr_11743_11765[2] = inst_11717);
(statearr_11743_11765[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 6))
{var inst_11713 = (state_11736[7]);var inst_11719 = p.call(null,inst_11713);var state_11736__$1 = state_11736;if(cljs.core.truth_(inst_11719))
{var statearr_11744_11766 = state_11736__$1;(statearr_11744_11766[1] = 9);
} else
{var statearr_11745_11767 = state_11736__$1;(statearr_11745_11767[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 7))
{var inst_11732 = (state_11736[2]);var state_11736__$1 = state_11736;var statearr_11746_11768 = state_11736__$1;(statearr_11746_11768[2] = inst_11732);
(statearr_11746_11768[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 8))
{var inst_11725 = (state_11736[2]);var state_11736__$1 = state_11736;if(cljs.core.truth_(inst_11725))
{var statearr_11747_11769 = state_11736__$1;(statearr_11747_11769[1] = 12);
} else
{var statearr_11748_11770 = state_11736__$1;(statearr_11748_11770[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 9))
{var state_11736__$1 = state_11736;var statearr_11749_11771 = state_11736__$1;(statearr_11749_11771[2] = tc);
(statearr_11749_11771[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 10))
{var state_11736__$1 = state_11736;var statearr_11750_11772 = state_11736__$1;(statearr_11750_11772[2] = fc);
(statearr_11750_11772[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 11))
{var inst_11713 = (state_11736[7]);var inst_11723 = (state_11736[2]);var state_11736__$1 = state_11736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11736__$1,8,inst_11723,inst_11713);
} else
{if((state_val_11737 === 12))
{var state_11736__$1 = state_11736;var statearr_11751_11773 = state_11736__$1;(statearr_11751_11773[2] = null);
(statearr_11751_11773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 13))
{var state_11736__$1 = state_11736;var statearr_11752_11774 = state_11736__$1;(statearr_11752_11774[2] = null);
(statearr_11752_11774[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11737 === 14))
{var inst_11730 = (state_11736[2]);var state_11736__$1 = state_11736;var statearr_11753_11775 = state_11736__$1;(statearr_11753_11775[2] = inst_11730);
(statearr_11753_11775[1] = 7);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_11757 = [null,null,null,null,null,null,null,null,null];(statearr_11757[0] = state_machine__5597__auto__);
(statearr_11757[1] = 1);
return statearr_11757;
});
var state_machine__5597__auto____1 = (function (state_11736){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_11736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e11758){if((e11758 instanceof Object))
{var ex__5600__auto__ = e11758;var statearr_11759_11776 = state_11736;(statearr_11759_11776[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11777 = state_11736;
state_11736 = G__11777;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_11736){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_11736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_11760 = f__5612__auto__.call(null);(statearr_11760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___11761);
return statearr_11760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5611__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_11824){var state_val_11825 = (state_11824[1]);if((state_val_11825 === 7))
{var inst_11820 = (state_11824[2]);var state_11824__$1 = state_11824;var statearr_11826_11842 = state_11824__$1;(statearr_11826_11842[2] = inst_11820);
(statearr_11826_11842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11825 === 6))
{var inst_11810 = (state_11824[7]);var inst_11813 = (state_11824[8]);var inst_11817 = f.call(null,inst_11810,inst_11813);var inst_11810__$1 = inst_11817;var state_11824__$1 = (function (){var statearr_11827 = state_11824;(statearr_11827[7] = inst_11810__$1);
return statearr_11827;
})();var statearr_11828_11843 = state_11824__$1;(statearr_11828_11843[2] = null);
(statearr_11828_11843[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11825 === 5))
{var inst_11810 = (state_11824[7]);var state_11824__$1 = state_11824;var statearr_11829_11844 = state_11824__$1;(statearr_11829_11844[2] = inst_11810);
(statearr_11829_11844[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11825 === 4))
{var inst_11813 = (state_11824[8]);var inst_11813__$1 = (state_11824[2]);var inst_11814 = (inst_11813__$1 == null);var state_11824__$1 = (function (){var statearr_11830 = state_11824;(statearr_11830[8] = inst_11813__$1);
return statearr_11830;
})();if(cljs.core.truth_(inst_11814))
{var statearr_11831_11845 = state_11824__$1;(statearr_11831_11845[1] = 5);
} else
{var statearr_11832_11846 = state_11824__$1;(statearr_11832_11846[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11825 === 3))
{var inst_11822 = (state_11824[2]);var state_11824__$1 = state_11824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11824__$1,inst_11822);
} else
{if((state_val_11825 === 2))
{var state_11824__$1 = state_11824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11824__$1,4,ch);
} else
{if((state_val_11825 === 1))
{var inst_11810 = init;var state_11824__$1 = (function (){var statearr_11833 = state_11824;(statearr_11833[7] = inst_11810);
return statearr_11833;
})();var statearr_11834_11847 = state_11824__$1;(statearr_11834_11847[2] = null);
(statearr_11834_11847[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_11838 = [null,null,null,null,null,null,null,null,null];(statearr_11838[0] = state_machine__5597__auto__);
(statearr_11838[1] = 1);
return statearr_11838;
});
var state_machine__5597__auto____1 = (function (state_11824){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_11824);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e11839){if((e11839 instanceof Object))
{var ex__5600__auto__ = e11839;var statearr_11840_11848 = state_11824;(statearr_11840_11848[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11824);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11849 = state_11824;
state_11824 = G__11849;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_11824){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_11824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_11841 = f__5612__auto__.call(null);(statearr_11841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto__);
return statearr_11841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
}));
return c__5611__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5611__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_11923){var state_val_11924 = (state_11923[1]);if((state_val_11924 === 1))
{var inst_11899 = cljs.core.seq.call(null,coll);var inst_11900 = inst_11899;var state_11923__$1 = (function (){var statearr_11925 = state_11923;(statearr_11925[7] = inst_11900);
return statearr_11925;
})();var statearr_11926_11948 = state_11923__$1;(statearr_11926_11948[2] = null);
(statearr_11926_11948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 2))
{var inst_11900 = (state_11923[7]);var state_11923__$1 = state_11923;if(cljs.core.truth_(inst_11900))
{var statearr_11927_11949 = state_11923__$1;(statearr_11927_11949[1] = 4);
} else
{var statearr_11928_11950 = state_11923__$1;(statearr_11928_11950[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 3))
{var inst_11921 = (state_11923[2]);var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11923__$1,inst_11921);
} else
{if((state_val_11924 === 4))
{var inst_11900 = (state_11923[7]);var inst_11903 = cljs.core.first.call(null,inst_11900);var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11923__$1,7,ch,inst_11903);
} else
{if((state_val_11924 === 5))
{var inst_11900 = (state_11923[7]);var state_11923__$1 = state_11923;var statearr_11929_11951 = state_11923__$1;(statearr_11929_11951[2] = inst_11900);
(statearr_11929_11951[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 6))
{var inst_11908 = (state_11923[2]);var state_11923__$1 = state_11923;if(cljs.core.truth_(inst_11908))
{var statearr_11930_11952 = state_11923__$1;(statearr_11930_11952[1] = 8);
} else
{var statearr_11931_11953 = state_11923__$1;(statearr_11931_11953[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 7))
{var inst_11905 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11932_11954 = state_11923__$1;(statearr_11932_11954[2] = inst_11905);
(statearr_11932_11954[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 8))
{var inst_11900 = (state_11923[7]);var inst_11910 = cljs.core.next.call(null,inst_11900);var inst_11900__$1 = inst_11910;var state_11923__$1 = (function (){var statearr_11933 = state_11923;(statearr_11933[7] = inst_11900__$1);
return statearr_11933;
})();var statearr_11934_11955 = state_11923__$1;(statearr_11934_11955[2] = null);
(statearr_11934_11955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 9))
{var state_11923__$1 = state_11923;if(cljs.core.truth_(close_QMARK_))
{var statearr_11935_11956 = state_11923__$1;(statearr_11935_11956[1] = 11);
} else
{var statearr_11936_11957 = state_11923__$1;(statearr_11936_11957[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 10))
{var inst_11919 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11937_11958 = state_11923__$1;(statearr_11937_11958[2] = inst_11919);
(statearr_11937_11958[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 11))
{var inst_11914 = cljs.core.async.close_BANG_.call(null,ch);var state_11923__$1 = state_11923;var statearr_11938_11959 = state_11923__$1;(statearr_11938_11959[2] = inst_11914);
(statearr_11938_11959[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 12))
{var state_11923__$1 = state_11923;var statearr_11939_11960 = state_11923__$1;(statearr_11939_11960[2] = null);
(statearr_11939_11960[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 13))
{var inst_11917 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11940_11961 = state_11923__$1;(statearr_11940_11961[2] = inst_11917);
(statearr_11940_11961[1] = 10);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_11944 = [null,null,null,null,null,null,null,null];(statearr_11944[0] = state_machine__5597__auto__);
(statearr_11944[1] = 1);
return statearr_11944;
});
var state_machine__5597__auto____1 = (function (state_11923){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_11923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e11945){if((e11945 instanceof Object))
{var ex__5600__auto__ = e11945;var statearr_11946_11962 = state_11923;(statearr_11946_11962[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11963 = state_11923;
state_11923 = G__11963;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_11923){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_11923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_11947 = f__5612__auto__.call(null);(statearr_11947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto__);
return statearr_11947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
}));
return c__5611__auto__;
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
cljs.core.async.Mux = (function (){var obj11965 = {};return obj11965;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3463__auto__ = _;if(and__3463__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3463__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4102__auto__ = (((_ == null))?null:_);return (function (){var or__3475__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11967 = {};return obj11967;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12189 = (function (cs,ch,mult,meta12190){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12190 = meta12190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12189.cljs$lang$type = true;
cljs.core.async.t12189.cljs$lang$ctorStr = "cljs.core.async/t12189";
cljs.core.async.t12189.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t12189");
});})(cs))
;
cljs.core.async.t12189.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12189.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12189.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12189.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12189.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12191){var self__ = this;
var _12191__$1 = this;return self__.meta12190;
});})(cs))
;
cljs.core.async.t12189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12191,meta12190__$1){var self__ = this;
var _12191__$1 = this;return (new cljs.core.async.t12189(self__.cs,self__.ch,self__.mult,meta12190__$1));
});})(cs))
;
cljs.core.async.__GT_t12189 = ((function (cs){
return (function __GT_t12189(cs__$1,ch__$1,mult__$1,meta12190){return (new cljs.core.async.t12189(cs__$1,ch__$1,mult__$1,meta12190));
});})(cs))
;
}
return (new cljs.core.async.t12189(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5611__auto___12410 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_12322){var state_val_12323 = (state_12322[1]);if((state_val_12323 === 32))
{var inst_12264 = (state_12322[7]);var inst_12265 = (state_12322[8]);var inst_12262 = (state_12322[9]);var inst_12263 = (state_12322[10]);var inst_12277 = (state_12322[2]);var inst_12278 = (inst_12265 + 1);var tmp12324 = inst_12264;var tmp12325 = inst_12262;var tmp12326 = inst_12263;var inst_12262__$1 = tmp12325;var inst_12263__$1 = tmp12326;var inst_12264__$1 = tmp12324;var inst_12265__$1 = inst_12278;var state_12322__$1 = (function (){var statearr_12327 = state_12322;(statearr_12327[7] = inst_12264__$1);
(statearr_12327[8] = inst_12265__$1);
(statearr_12327[9] = inst_12262__$1);
(statearr_12327[10] = inst_12263__$1);
(statearr_12327[11] = inst_12277);
return statearr_12327;
})();var statearr_12328_12411 = state_12322__$1;(statearr_12328_12411[2] = null);
(statearr_12328_12411[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 1))
{var state_12322__$1 = state_12322;var statearr_12329_12412 = state_12322__$1;(statearr_12329_12412[2] = null);
(statearr_12329_12412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 33))
{var inst_12281 = (state_12322[12]);var inst_12283 = cljs.core.chunked_seq_QMARK_.call(null,inst_12281);var state_12322__$1 = state_12322;if(inst_12283)
{var statearr_12330_12413 = state_12322__$1;(statearr_12330_12413[1] = 36);
} else
{var statearr_12331_12414 = state_12322__$1;(statearr_12331_12414[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 2))
{var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12322__$1,4,ch);
} else
{if((state_val_12323 === 34))
{var state_12322__$1 = state_12322;var statearr_12332_12415 = state_12322__$1;(statearr_12332_12415[2] = null);
(statearr_12332_12415[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 3))
{var inst_12320 = (state_12322[2]);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12322__$1,inst_12320);
} else
{if((state_val_12323 === 35))
{var inst_12304 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12333_12416 = state_12322__$1;(statearr_12333_12416[2] = inst_12304);
(statearr_12333_12416[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 4))
{var inst_12194 = (state_12322[13]);var inst_12194__$1 = (state_12322[2]);var inst_12195 = (inst_12194__$1 == null);var state_12322__$1 = (function (){var statearr_12334 = state_12322;(statearr_12334[13] = inst_12194__$1);
return statearr_12334;
})();if(cljs.core.truth_(inst_12195))
{var statearr_12335_12417 = state_12322__$1;(statearr_12335_12417[1] = 5);
} else
{var statearr_12336_12418 = state_12322__$1;(statearr_12336_12418[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 36))
{var inst_12281 = (state_12322[12]);var inst_12285 = cljs.core.chunk_first.call(null,inst_12281);var inst_12286 = cljs.core.chunk_rest.call(null,inst_12281);var inst_12287 = cljs.core.count.call(null,inst_12285);var inst_12262 = inst_12286;var inst_12263 = inst_12285;var inst_12264 = inst_12287;var inst_12265 = 0;var state_12322__$1 = (function (){var statearr_12337 = state_12322;(statearr_12337[7] = inst_12264);
(statearr_12337[8] = inst_12265);
(statearr_12337[9] = inst_12262);
(statearr_12337[10] = inst_12263);
return statearr_12337;
})();var statearr_12338_12419 = state_12322__$1;(statearr_12338_12419[2] = null);
(statearr_12338_12419[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 5))
{var inst_12201 = cljs.core.deref.call(null,cs);var inst_12202 = cljs.core.seq.call(null,inst_12201);var inst_12203 = inst_12202;var inst_12204 = null;var inst_12205 = 0;var inst_12206 = 0;var state_12322__$1 = (function (){var statearr_12339 = state_12322;(statearr_12339[14] = inst_12204);
(statearr_12339[15] = inst_12205);
(statearr_12339[16] = inst_12206);
(statearr_12339[17] = inst_12203);
return statearr_12339;
})();var statearr_12340_12420 = state_12322__$1;(statearr_12340_12420[2] = null);
(statearr_12340_12420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 37))
{var inst_12290 = (state_12322[18]);var inst_12194 = (state_12322[13]);var inst_12281 = (state_12322[12]);var inst_12290__$1 = cljs.core.first.call(null,inst_12281);var inst_12291 = cljs.core.async.put_BANG_.call(null,inst_12290__$1,inst_12194,done);var state_12322__$1 = (function (){var statearr_12341 = state_12322;(statearr_12341[18] = inst_12290__$1);
return statearr_12341;
})();if(cljs.core.truth_(inst_12291))
{var statearr_12342_12421 = state_12322__$1;(statearr_12342_12421[1] = 39);
} else
{var statearr_12343_12422 = state_12322__$1;(statearr_12343_12422[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 6))
{var inst_12254 = (state_12322[19]);var inst_12253 = cljs.core.deref.call(null,cs);var inst_12254__$1 = cljs.core.keys.call(null,inst_12253);var inst_12255 = cljs.core.count.call(null,inst_12254__$1);var inst_12256 = cljs.core.reset_BANG_.call(null,dctr,inst_12255);var inst_12261 = cljs.core.seq.call(null,inst_12254__$1);var inst_12262 = inst_12261;var inst_12263 = null;var inst_12264 = 0;var inst_12265 = 0;var state_12322__$1 = (function (){var statearr_12344 = state_12322;(statearr_12344[7] = inst_12264);
(statearr_12344[8] = inst_12265);
(statearr_12344[9] = inst_12262);
(statearr_12344[10] = inst_12263);
(statearr_12344[20] = inst_12256);
(statearr_12344[19] = inst_12254__$1);
return statearr_12344;
})();var statearr_12345_12423 = state_12322__$1;(statearr_12345_12423[2] = null);
(statearr_12345_12423[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 38))
{var inst_12301 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12346_12424 = state_12322__$1;(statearr_12346_12424[2] = inst_12301);
(statearr_12346_12424[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 7))
{var inst_12318 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12347_12425 = state_12322__$1;(statearr_12347_12425[2] = inst_12318);
(statearr_12347_12425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 39))
{var state_12322__$1 = state_12322;var statearr_12348_12426 = state_12322__$1;(statearr_12348_12426[2] = null);
(statearr_12348_12426[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 8))
{var inst_12205 = (state_12322[15]);var inst_12206 = (state_12322[16]);var inst_12208 = (inst_12206 < inst_12205);var inst_12209 = inst_12208;var state_12322__$1 = state_12322;if(cljs.core.truth_(inst_12209))
{var statearr_12349_12427 = state_12322__$1;(statearr_12349_12427[1] = 10);
} else
{var statearr_12350_12428 = state_12322__$1;(statearr_12350_12428[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 40))
{var inst_12290 = (state_12322[18]);var inst_12294 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12295 = cljs.core.async.untap_STAR_.call(null,m,inst_12290);var state_12322__$1 = (function (){var statearr_12351 = state_12322;(statearr_12351[21] = inst_12294);
return statearr_12351;
})();var statearr_12352_12429 = state_12322__$1;(statearr_12352_12429[2] = inst_12295);
(statearr_12352_12429[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 9))
{var inst_12251 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12353_12430 = state_12322__$1;(statearr_12353_12430[2] = inst_12251);
(statearr_12353_12430[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 41))
{var inst_12281 = (state_12322[12]);var inst_12297 = (state_12322[2]);var inst_12298 = cljs.core.next.call(null,inst_12281);var inst_12262 = inst_12298;var inst_12263 = null;var inst_12264 = 0;var inst_12265 = 0;var state_12322__$1 = (function (){var statearr_12354 = state_12322;(statearr_12354[7] = inst_12264);
(statearr_12354[8] = inst_12265);
(statearr_12354[9] = inst_12262);
(statearr_12354[10] = inst_12263);
(statearr_12354[22] = inst_12297);
return statearr_12354;
})();var statearr_12355_12431 = state_12322__$1;(statearr_12355_12431[2] = null);
(statearr_12355_12431[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 10))
{var inst_12204 = (state_12322[14]);var inst_12206 = (state_12322[16]);var inst_12212 = cljs.core._nth.call(null,inst_12204,inst_12206);var inst_12213 = cljs.core.nth.call(null,inst_12212,0,null);var inst_12214 = cljs.core.nth.call(null,inst_12212,1,null);var state_12322__$1 = (function (){var statearr_12356 = state_12322;(statearr_12356[23] = inst_12213);
return statearr_12356;
})();if(cljs.core.truth_(inst_12214))
{var statearr_12357_12432 = state_12322__$1;(statearr_12357_12432[1] = 13);
} else
{var statearr_12358_12433 = state_12322__$1;(statearr_12358_12433[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 42))
{var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12322__$1,45,dchan);
} else
{if((state_val_12323 === 11))
{var inst_12223 = (state_12322[24]);var inst_12203 = (state_12322[17]);var inst_12223__$1 = cljs.core.seq.call(null,inst_12203);var state_12322__$1 = (function (){var statearr_12359 = state_12322;(statearr_12359[24] = inst_12223__$1);
return statearr_12359;
})();if(inst_12223__$1)
{var statearr_12360_12434 = state_12322__$1;(statearr_12360_12434[1] = 16);
} else
{var statearr_12361_12435 = state_12322__$1;(statearr_12361_12435[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 43))
{var state_12322__$1 = state_12322;var statearr_12362_12436 = state_12322__$1;(statearr_12362_12436[2] = null);
(statearr_12362_12436[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 12))
{var inst_12249 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12363_12437 = state_12322__$1;(statearr_12363_12437[2] = inst_12249);
(statearr_12363_12437[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 44))
{var inst_12315 = (state_12322[2]);var state_12322__$1 = (function (){var statearr_12364 = state_12322;(statearr_12364[25] = inst_12315);
return statearr_12364;
})();var statearr_12365_12438 = state_12322__$1;(statearr_12365_12438[2] = null);
(statearr_12365_12438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 13))
{var inst_12213 = (state_12322[23]);var inst_12216 = cljs.core.async.close_BANG_.call(null,inst_12213);var state_12322__$1 = state_12322;var statearr_12366_12439 = state_12322__$1;(statearr_12366_12439[2] = inst_12216);
(statearr_12366_12439[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 45))
{var inst_12312 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12370_12440 = state_12322__$1;(statearr_12370_12440[2] = inst_12312);
(statearr_12370_12440[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 14))
{var state_12322__$1 = state_12322;var statearr_12371_12441 = state_12322__$1;(statearr_12371_12441[2] = null);
(statearr_12371_12441[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 15))
{var inst_12204 = (state_12322[14]);var inst_12205 = (state_12322[15]);var inst_12206 = (state_12322[16]);var inst_12203 = (state_12322[17]);var inst_12219 = (state_12322[2]);var inst_12220 = (inst_12206 + 1);var tmp12367 = inst_12204;var tmp12368 = inst_12205;var tmp12369 = inst_12203;var inst_12203__$1 = tmp12369;var inst_12204__$1 = tmp12367;var inst_12205__$1 = tmp12368;var inst_12206__$1 = inst_12220;var state_12322__$1 = (function (){var statearr_12372 = state_12322;(statearr_12372[26] = inst_12219);
(statearr_12372[14] = inst_12204__$1);
(statearr_12372[15] = inst_12205__$1);
(statearr_12372[16] = inst_12206__$1);
(statearr_12372[17] = inst_12203__$1);
return statearr_12372;
})();var statearr_12373_12442 = state_12322__$1;(statearr_12373_12442[2] = null);
(statearr_12373_12442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 16))
{var inst_12223 = (state_12322[24]);var inst_12225 = cljs.core.chunked_seq_QMARK_.call(null,inst_12223);var state_12322__$1 = state_12322;if(inst_12225)
{var statearr_12374_12443 = state_12322__$1;(statearr_12374_12443[1] = 19);
} else
{var statearr_12375_12444 = state_12322__$1;(statearr_12375_12444[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 17))
{var state_12322__$1 = state_12322;var statearr_12376_12445 = state_12322__$1;(statearr_12376_12445[2] = null);
(statearr_12376_12445[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 18))
{var inst_12247 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12377_12446 = state_12322__$1;(statearr_12377_12446[2] = inst_12247);
(statearr_12377_12446[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 19))
{var inst_12223 = (state_12322[24]);var inst_12227 = cljs.core.chunk_first.call(null,inst_12223);var inst_12228 = cljs.core.chunk_rest.call(null,inst_12223);var inst_12229 = cljs.core.count.call(null,inst_12227);var inst_12203 = inst_12228;var inst_12204 = inst_12227;var inst_12205 = inst_12229;var inst_12206 = 0;var state_12322__$1 = (function (){var statearr_12378 = state_12322;(statearr_12378[14] = inst_12204);
(statearr_12378[15] = inst_12205);
(statearr_12378[16] = inst_12206);
(statearr_12378[17] = inst_12203);
return statearr_12378;
})();var statearr_12379_12447 = state_12322__$1;(statearr_12379_12447[2] = null);
(statearr_12379_12447[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 20))
{var inst_12223 = (state_12322[24]);var inst_12233 = cljs.core.first.call(null,inst_12223);var inst_12234 = cljs.core.nth.call(null,inst_12233,0,null);var inst_12235 = cljs.core.nth.call(null,inst_12233,1,null);var state_12322__$1 = (function (){var statearr_12380 = state_12322;(statearr_12380[27] = inst_12234);
return statearr_12380;
})();if(cljs.core.truth_(inst_12235))
{var statearr_12381_12448 = state_12322__$1;(statearr_12381_12448[1] = 22);
} else
{var statearr_12382_12449 = state_12322__$1;(statearr_12382_12449[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 21))
{var inst_12244 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12383_12450 = state_12322__$1;(statearr_12383_12450[2] = inst_12244);
(statearr_12383_12450[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 22))
{var inst_12234 = (state_12322[27]);var inst_12237 = cljs.core.async.close_BANG_.call(null,inst_12234);var state_12322__$1 = state_12322;var statearr_12384_12451 = state_12322__$1;(statearr_12384_12451[2] = inst_12237);
(statearr_12384_12451[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 23))
{var state_12322__$1 = state_12322;var statearr_12385_12452 = state_12322__$1;(statearr_12385_12452[2] = null);
(statearr_12385_12452[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 24))
{var inst_12223 = (state_12322[24]);var inst_12240 = (state_12322[2]);var inst_12241 = cljs.core.next.call(null,inst_12223);var inst_12203 = inst_12241;var inst_12204 = null;var inst_12205 = 0;var inst_12206 = 0;var state_12322__$1 = (function (){var statearr_12386 = state_12322;(statearr_12386[28] = inst_12240);
(statearr_12386[14] = inst_12204);
(statearr_12386[15] = inst_12205);
(statearr_12386[16] = inst_12206);
(statearr_12386[17] = inst_12203);
return statearr_12386;
})();var statearr_12387_12453 = state_12322__$1;(statearr_12387_12453[2] = null);
(statearr_12387_12453[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 25))
{var inst_12264 = (state_12322[7]);var inst_12265 = (state_12322[8]);var inst_12267 = (inst_12265 < inst_12264);var inst_12268 = inst_12267;var state_12322__$1 = state_12322;if(cljs.core.truth_(inst_12268))
{var statearr_12388_12454 = state_12322__$1;(statearr_12388_12454[1] = 27);
} else
{var statearr_12389_12455 = state_12322__$1;(statearr_12389_12455[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 26))
{var inst_12254 = (state_12322[19]);var inst_12308 = (state_12322[2]);var inst_12309 = cljs.core.seq.call(null,inst_12254);var state_12322__$1 = (function (){var statearr_12390 = state_12322;(statearr_12390[29] = inst_12308);
return statearr_12390;
})();if(inst_12309)
{var statearr_12391_12456 = state_12322__$1;(statearr_12391_12456[1] = 42);
} else
{var statearr_12392_12457 = state_12322__$1;(statearr_12392_12457[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 27))
{var inst_12265 = (state_12322[8]);var inst_12263 = (state_12322[10]);var inst_12270 = (state_12322[30]);var inst_12194 = (state_12322[13]);var inst_12270__$1 = cljs.core._nth.call(null,inst_12263,inst_12265);var inst_12271 = cljs.core.async.put_BANG_.call(null,inst_12270__$1,inst_12194,done);var state_12322__$1 = (function (){var statearr_12393 = state_12322;(statearr_12393[30] = inst_12270__$1);
return statearr_12393;
})();if(cljs.core.truth_(inst_12271))
{var statearr_12394_12458 = state_12322__$1;(statearr_12394_12458[1] = 30);
} else
{var statearr_12395_12459 = state_12322__$1;(statearr_12395_12459[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 28))
{var inst_12262 = (state_12322[9]);var inst_12281 = (state_12322[12]);var inst_12281__$1 = cljs.core.seq.call(null,inst_12262);var state_12322__$1 = (function (){var statearr_12396 = state_12322;(statearr_12396[12] = inst_12281__$1);
return statearr_12396;
})();if(inst_12281__$1)
{var statearr_12397_12460 = state_12322__$1;(statearr_12397_12460[1] = 33);
} else
{var statearr_12398_12461 = state_12322__$1;(statearr_12398_12461[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 29))
{var inst_12306 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12399_12462 = state_12322__$1;(statearr_12399_12462[2] = inst_12306);
(statearr_12399_12462[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 30))
{var state_12322__$1 = state_12322;var statearr_12400_12463 = state_12322__$1;(statearr_12400_12463[2] = null);
(statearr_12400_12463[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 31))
{var inst_12270 = (state_12322[30]);var inst_12274 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12275 = cljs.core.async.untap_STAR_.call(null,m,inst_12270);var state_12322__$1 = (function (){var statearr_12401 = state_12322;(statearr_12401[31] = inst_12274);
return statearr_12401;
})();var statearr_12402_12464 = state_12322__$1;(statearr_12402_12464[2] = inst_12275);
(statearr_12402_12464[1] = 32);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_12406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12406[0] = state_machine__5597__auto__);
(statearr_12406[1] = 1);
return statearr_12406;
});
var state_machine__5597__auto____1 = (function (state_12322){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_12322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e12407){if((e12407 instanceof Object))
{var ex__5600__auto__ = e12407;var statearr_12408_12465 = state_12322;(statearr_12408_12465[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12466 = state_12322;
state_12322 = G__12466;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_12322){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_12322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_12409 = f__5612__auto__.call(null);(statearr_12409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___12410);
return statearr_12409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
cljs.core.async.Mix = (function (){var obj12468 = {};return obj12468;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3463__auto__ = m;if(and__3463__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3463__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4102__auto__ = (((m == null))?null:m);return (function (){var or__3475__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12588 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12589){
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
this.meta12589 = meta12589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12588.cljs$lang$type = true;
cljs.core.async.t12588.cljs$lang$ctorStr = "cljs.core.async/t12588";
cljs.core.async.t12588.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t12588");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12588.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12590){var self__ = this;
var _12590__$1 = this;return self__.meta12589;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12590,meta12589__$1){var self__ = this;
var _12590__$1 = this;return (new cljs.core.async.t12588(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12589__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12588 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12588(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12589){return (new cljs.core.async.t12588(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12589));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12588(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5611__auto___12707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_12660){var state_val_12661 = (state_12660[1]);if((state_val_12661 === 1))
{var inst_12594 = (state_12660[7]);var inst_12594__$1 = calc_state.call(null);var inst_12595 = cljs.core.seq_QMARK_.call(null,inst_12594__$1);var state_12660__$1 = (function (){var statearr_12662 = state_12660;(statearr_12662[7] = inst_12594__$1);
return statearr_12662;
})();if(inst_12595)
{var statearr_12663_12708 = state_12660__$1;(statearr_12663_12708[1] = 2);
} else
{var statearr_12664_12709 = state_12660__$1;(statearr_12664_12709[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 2))
{var inst_12594 = (state_12660[7]);var inst_12597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12594);var state_12660__$1 = state_12660;var statearr_12665_12710 = state_12660__$1;(statearr_12665_12710[2] = inst_12597);
(statearr_12665_12710[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 3))
{var inst_12594 = (state_12660[7]);var state_12660__$1 = state_12660;var statearr_12666_12711 = state_12660__$1;(statearr_12666_12711[2] = inst_12594);
(statearr_12666_12711[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 4))
{var inst_12594 = (state_12660[7]);var inst_12600 = (state_12660[2]);var inst_12601 = cljs.core.get.call(null,inst_12600,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12602 = cljs.core.get.call(null,inst_12600,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12603 = cljs.core.get.call(null,inst_12600,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12604 = inst_12594;var state_12660__$1 = (function (){var statearr_12667 = state_12660;(statearr_12667[8] = inst_12604);
(statearr_12667[9] = inst_12601);
(statearr_12667[10] = inst_12602);
(statearr_12667[11] = inst_12603);
return statearr_12667;
})();var statearr_12668_12712 = state_12660__$1;(statearr_12668_12712[2] = null);
(statearr_12668_12712[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 5))
{var inst_12604 = (state_12660[8]);var inst_12607 = cljs.core.seq_QMARK_.call(null,inst_12604);var state_12660__$1 = state_12660;if(inst_12607)
{var statearr_12669_12713 = state_12660__$1;(statearr_12669_12713[1] = 7);
} else
{var statearr_12670_12714 = state_12660__$1;(statearr_12670_12714[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 6))
{var inst_12658 = (state_12660[2]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else
{if((state_val_12661 === 7))
{var inst_12604 = (state_12660[8]);var inst_12609 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12604);var state_12660__$1 = state_12660;var statearr_12671_12715 = state_12660__$1;(statearr_12671_12715[2] = inst_12609);
(statearr_12671_12715[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 8))
{var inst_12604 = (state_12660[8]);var state_12660__$1 = state_12660;var statearr_12672_12716 = state_12660__$1;(statearr_12672_12716[2] = inst_12604);
(statearr_12672_12716[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 9))
{var inst_12612 = (state_12660[12]);var inst_12612__$1 = (state_12660[2]);var inst_12613 = cljs.core.get.call(null,inst_12612__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12614 = cljs.core.get.call(null,inst_12612__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12615 = cljs.core.get.call(null,inst_12612__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12660__$1 = (function (){var statearr_12673 = state_12660;(statearr_12673[12] = inst_12612__$1);
(statearr_12673[13] = inst_12614);
(statearr_12673[14] = inst_12615);
return statearr_12673;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12660__$1,10,inst_12613);
} else
{if((state_val_12661 === 10))
{var inst_12620 = (state_12660[15]);var inst_12619 = (state_12660[16]);var inst_12618 = (state_12660[2]);var inst_12619__$1 = cljs.core.nth.call(null,inst_12618,0,null);var inst_12620__$1 = cljs.core.nth.call(null,inst_12618,1,null);var inst_12621 = (inst_12619__$1 == null);var inst_12622 = cljs.core._EQ_.call(null,inst_12620__$1,change);var inst_12623 = (inst_12621) || (inst_12622);var state_12660__$1 = (function (){var statearr_12674 = state_12660;(statearr_12674[15] = inst_12620__$1);
(statearr_12674[16] = inst_12619__$1);
return statearr_12674;
})();if(cljs.core.truth_(inst_12623))
{var statearr_12675_12717 = state_12660__$1;(statearr_12675_12717[1] = 11);
} else
{var statearr_12676_12718 = state_12660__$1;(statearr_12676_12718[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 11))
{var inst_12619 = (state_12660[16]);var inst_12625 = (inst_12619 == null);var state_12660__$1 = state_12660;if(cljs.core.truth_(inst_12625))
{var statearr_12677_12719 = state_12660__$1;(statearr_12677_12719[1] = 14);
} else
{var statearr_12678_12720 = state_12660__$1;(statearr_12678_12720[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 12))
{var inst_12620 = (state_12660[15]);var inst_12615 = (state_12660[14]);var inst_12634 = (state_12660[17]);var inst_12634__$1 = inst_12615.call(null,inst_12620);var state_12660__$1 = (function (){var statearr_12679 = state_12660;(statearr_12679[17] = inst_12634__$1);
return statearr_12679;
})();if(cljs.core.truth_(inst_12634__$1))
{var statearr_12680_12721 = state_12660__$1;(statearr_12680_12721[1] = 17);
} else
{var statearr_12681_12722 = state_12660__$1;(statearr_12681_12722[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 13))
{var inst_12656 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12682_12723 = state_12660__$1;(statearr_12682_12723[2] = inst_12656);
(statearr_12682_12723[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 14))
{var inst_12620 = (state_12660[15]);var inst_12627 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12620);var state_12660__$1 = state_12660;var statearr_12683_12724 = state_12660__$1;(statearr_12683_12724[2] = inst_12627);
(statearr_12683_12724[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 15))
{var state_12660__$1 = state_12660;var statearr_12684_12725 = state_12660__$1;(statearr_12684_12725[2] = null);
(statearr_12684_12725[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 16))
{var inst_12630 = (state_12660[2]);var inst_12631 = calc_state.call(null);var inst_12604 = inst_12631;var state_12660__$1 = (function (){var statearr_12685 = state_12660;(statearr_12685[18] = inst_12630);
(statearr_12685[8] = inst_12604);
return statearr_12685;
})();var statearr_12686_12726 = state_12660__$1;(statearr_12686_12726[2] = null);
(statearr_12686_12726[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 17))
{var inst_12634 = (state_12660[17]);var state_12660__$1 = state_12660;var statearr_12687_12727 = state_12660__$1;(statearr_12687_12727[2] = inst_12634);
(statearr_12687_12727[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 18))
{var inst_12620 = (state_12660[15]);var inst_12614 = (state_12660[13]);var inst_12615 = (state_12660[14]);var inst_12637 = cljs.core.empty_QMARK_.call(null,inst_12615);var inst_12638 = inst_12614.call(null,inst_12620);var inst_12639 = cljs.core.not.call(null,inst_12638);var inst_12640 = (inst_12637) && (inst_12639);var state_12660__$1 = state_12660;var statearr_12688_12728 = state_12660__$1;(statearr_12688_12728[2] = inst_12640);
(statearr_12688_12728[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 19))
{var inst_12642 = (state_12660[2]);var state_12660__$1 = state_12660;if(cljs.core.truth_(inst_12642))
{var statearr_12689_12729 = state_12660__$1;(statearr_12689_12729[1] = 20);
} else
{var statearr_12690_12730 = state_12660__$1;(statearr_12690_12730[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 20))
{var inst_12619 = (state_12660[16]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12660__$1,23,out,inst_12619);
} else
{if((state_val_12661 === 21))
{var inst_12612 = (state_12660[12]);var inst_12604 = inst_12612;var state_12660__$1 = (function (){var statearr_12691 = state_12660;(statearr_12691[8] = inst_12604);
return statearr_12691;
})();var statearr_12692_12731 = state_12660__$1;(statearr_12692_12731[2] = null);
(statearr_12692_12731[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 22))
{var inst_12654 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12693_12732 = state_12660__$1;(statearr_12693_12732[2] = inst_12654);
(statearr_12693_12732[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 23))
{var inst_12645 = (state_12660[2]);var state_12660__$1 = state_12660;if(cljs.core.truth_(inst_12645))
{var statearr_12694_12733 = state_12660__$1;(statearr_12694_12733[1] = 24);
} else
{var statearr_12695_12734 = state_12660__$1;(statearr_12695_12734[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 24))
{var inst_12612 = (state_12660[12]);var inst_12604 = inst_12612;var state_12660__$1 = (function (){var statearr_12696 = state_12660;(statearr_12696[8] = inst_12604);
return statearr_12696;
})();var statearr_12697_12735 = state_12660__$1;(statearr_12697_12735[2] = null);
(statearr_12697_12735[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 25))
{var state_12660__$1 = state_12660;var statearr_12698_12736 = state_12660__$1;(statearr_12698_12736[2] = null);
(statearr_12698_12736[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 26))
{var inst_12650 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12699_12737 = state_12660__$1;(statearr_12699_12737[2] = inst_12650);
(statearr_12699_12737[1] = 22);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_12703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12703[0] = state_machine__5597__auto__);
(statearr_12703[1] = 1);
return statearr_12703;
});
var state_machine__5597__auto____1 = (function (state_12660){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_12660);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e12704){if((e12704 instanceof Object))
{var ex__5600__auto__ = e12704;var statearr_12705_12738 = state_12660;(statearr_12705_12738[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12739 = state_12660;
state_12660 = G__12739;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_12706 = f__5612__auto__.call(null);(statearr_12706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___12707);
return statearr_12706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
cljs.core.async.Pub = (function (){var obj12741 = {};return obj12741;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3463__auto__ = p;if(and__3463__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3463__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4102__auto__ = (((p == null))?null:p);return (function (){var or__3475__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3463__auto__ = p;if(and__3463__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3463__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4102__auto__ = (((p == null))?null:p);return (function (){var or__3475__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3463__auto__ = p;if(and__3463__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3463__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4102__auto__ = (((p == null))?null:p);return (function (){var or__3475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3463__auto__ = p;if(and__3463__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3463__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4102__auto__ = (((p == null))?null:p);return (function (){var or__3475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4102__auto__)]);if(or__3475__auto__)
{return or__3475__auto__;
} else
{var or__3475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3475__auto____$1)
{return or__3475__auto____$1;
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
return (function (topic){var or__3475__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3475__auto__))
{return or__3475__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3475__auto__,mults){
return (function (p1__12742_SHARP_){if(cljs.core.truth_(p1__12742_SHARP_.call(null,topic)))
{return p1__12742_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12742_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3475__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12865 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12866){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12866 = meta12866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12865.cljs$lang$type = true;
cljs.core.async.t12865.cljs$lang$ctorStr = "cljs.core.async/t12865";
cljs.core.async.t12865.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4042__auto__,writer__4043__auto__,opt__4044__auto__){return cljs.core._write.call(null,writer__4043__auto__,"cljs.core.async/t12865");
});})(mults,ensure_mult))
;
cljs.core.async.t12865.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12865.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12867){var self__ = this;
var _12867__$1 = this;return self__.meta12866;
});})(mults,ensure_mult))
;
cljs.core.async.t12865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12867,meta12866__$1){var self__ = this;
var _12867__$1 = this;return (new cljs.core.async.t12865(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12866__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12865 = ((function (mults,ensure_mult){
return (function __GT_t12865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12866){return (new cljs.core.async.t12865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12866));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12865(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5611__auto___12987 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_12939){var state_val_12940 = (state_12939[1]);if((state_val_12940 === 1))
{var state_12939__$1 = state_12939;var statearr_12941_12988 = state_12939__$1;(statearr_12941_12988[2] = null);
(statearr_12941_12988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 2))
{var state_12939__$1 = state_12939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12939__$1,4,ch);
} else
{if((state_val_12940 === 3))
{var inst_12937 = (state_12939[2]);var state_12939__$1 = state_12939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12939__$1,inst_12937);
} else
{if((state_val_12940 === 4))
{var inst_12870 = (state_12939[7]);var inst_12870__$1 = (state_12939[2]);var inst_12871 = (inst_12870__$1 == null);var state_12939__$1 = (function (){var statearr_12942 = state_12939;(statearr_12942[7] = inst_12870__$1);
return statearr_12942;
})();if(cljs.core.truth_(inst_12871))
{var statearr_12943_12989 = state_12939__$1;(statearr_12943_12989[1] = 5);
} else
{var statearr_12944_12990 = state_12939__$1;(statearr_12944_12990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 5))
{var inst_12877 = cljs.core.deref.call(null,mults);var inst_12878 = cljs.core.vals.call(null,inst_12877);var inst_12879 = cljs.core.seq.call(null,inst_12878);var inst_12880 = inst_12879;var inst_12881 = null;var inst_12882 = 0;var inst_12883 = 0;var state_12939__$1 = (function (){var statearr_12945 = state_12939;(statearr_12945[8] = inst_12880);
(statearr_12945[9] = inst_12881);
(statearr_12945[10] = inst_12883);
(statearr_12945[11] = inst_12882);
return statearr_12945;
})();var statearr_12946_12991 = state_12939__$1;(statearr_12946_12991[2] = null);
(statearr_12946_12991[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 6))
{var inst_12918 = (state_12939[12]);var inst_12870 = (state_12939[7]);var inst_12920 = (state_12939[13]);var inst_12918__$1 = topic_fn.call(null,inst_12870);var inst_12919 = cljs.core.deref.call(null,mults);var inst_12920__$1 = cljs.core.get.call(null,inst_12919,inst_12918__$1);var state_12939__$1 = (function (){var statearr_12947 = state_12939;(statearr_12947[12] = inst_12918__$1);
(statearr_12947[13] = inst_12920__$1);
return statearr_12947;
})();if(cljs.core.truth_(inst_12920__$1))
{var statearr_12948_12992 = state_12939__$1;(statearr_12948_12992[1] = 19);
} else
{var statearr_12949_12993 = state_12939__$1;(statearr_12949_12993[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 7))
{var inst_12935 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12950_12994 = state_12939__$1;(statearr_12950_12994[2] = inst_12935);
(statearr_12950_12994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 8))
{var inst_12883 = (state_12939[10]);var inst_12882 = (state_12939[11]);var inst_12885 = (inst_12883 < inst_12882);var inst_12886 = inst_12885;var state_12939__$1 = state_12939;if(cljs.core.truth_(inst_12886))
{var statearr_12954_12995 = state_12939__$1;(statearr_12954_12995[1] = 10);
} else
{var statearr_12955_12996 = state_12939__$1;(statearr_12955_12996[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 9))
{var inst_12916 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12956_12997 = state_12939__$1;(statearr_12956_12997[2] = inst_12916);
(statearr_12956_12997[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 10))
{var inst_12880 = (state_12939[8]);var inst_12881 = (state_12939[9]);var inst_12883 = (state_12939[10]);var inst_12882 = (state_12939[11]);var inst_12888 = cljs.core._nth.call(null,inst_12881,inst_12883);var inst_12889 = cljs.core.async.muxch_STAR_.call(null,inst_12888);var inst_12890 = cljs.core.async.close_BANG_.call(null,inst_12889);var inst_12891 = (inst_12883 + 1);var tmp12951 = inst_12880;var tmp12952 = inst_12881;var tmp12953 = inst_12882;var inst_12880__$1 = tmp12951;var inst_12881__$1 = tmp12952;var inst_12882__$1 = tmp12953;var inst_12883__$1 = inst_12891;var state_12939__$1 = (function (){var statearr_12957 = state_12939;(statearr_12957[8] = inst_12880__$1);
(statearr_12957[9] = inst_12881__$1);
(statearr_12957[14] = inst_12890);
(statearr_12957[10] = inst_12883__$1);
(statearr_12957[11] = inst_12882__$1);
return statearr_12957;
})();var statearr_12958_12998 = state_12939__$1;(statearr_12958_12998[2] = null);
(statearr_12958_12998[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 11))
{var inst_12880 = (state_12939[8]);var inst_12894 = (state_12939[15]);var inst_12894__$1 = cljs.core.seq.call(null,inst_12880);var state_12939__$1 = (function (){var statearr_12959 = state_12939;(statearr_12959[15] = inst_12894__$1);
return statearr_12959;
})();if(inst_12894__$1)
{var statearr_12960_12999 = state_12939__$1;(statearr_12960_12999[1] = 13);
} else
{var statearr_12961_13000 = state_12939__$1;(statearr_12961_13000[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 12))
{var inst_12914 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12962_13001 = state_12939__$1;(statearr_12962_13001[2] = inst_12914);
(statearr_12962_13001[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 13))
{var inst_12894 = (state_12939[15]);var inst_12896 = cljs.core.chunked_seq_QMARK_.call(null,inst_12894);var state_12939__$1 = state_12939;if(inst_12896)
{var statearr_12963_13002 = state_12939__$1;(statearr_12963_13002[1] = 16);
} else
{var statearr_12964_13003 = state_12939__$1;(statearr_12964_13003[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 14))
{var state_12939__$1 = state_12939;var statearr_12965_13004 = state_12939__$1;(statearr_12965_13004[2] = null);
(statearr_12965_13004[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 15))
{var inst_12912 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12966_13005 = state_12939__$1;(statearr_12966_13005[2] = inst_12912);
(statearr_12966_13005[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 16))
{var inst_12894 = (state_12939[15]);var inst_12898 = cljs.core.chunk_first.call(null,inst_12894);var inst_12899 = cljs.core.chunk_rest.call(null,inst_12894);var inst_12900 = cljs.core.count.call(null,inst_12898);var inst_12880 = inst_12899;var inst_12881 = inst_12898;var inst_12882 = inst_12900;var inst_12883 = 0;var state_12939__$1 = (function (){var statearr_12967 = state_12939;(statearr_12967[8] = inst_12880);
(statearr_12967[9] = inst_12881);
(statearr_12967[10] = inst_12883);
(statearr_12967[11] = inst_12882);
return statearr_12967;
})();var statearr_12968_13006 = state_12939__$1;(statearr_12968_13006[2] = null);
(statearr_12968_13006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 17))
{var inst_12894 = (state_12939[15]);var inst_12903 = cljs.core.first.call(null,inst_12894);var inst_12904 = cljs.core.async.muxch_STAR_.call(null,inst_12903);var inst_12905 = cljs.core.async.close_BANG_.call(null,inst_12904);var inst_12906 = cljs.core.next.call(null,inst_12894);var inst_12880 = inst_12906;var inst_12881 = null;var inst_12882 = 0;var inst_12883 = 0;var state_12939__$1 = (function (){var statearr_12969 = state_12939;(statearr_12969[8] = inst_12880);
(statearr_12969[9] = inst_12881);
(statearr_12969[10] = inst_12883);
(statearr_12969[16] = inst_12905);
(statearr_12969[11] = inst_12882);
return statearr_12969;
})();var statearr_12970_13007 = state_12939__$1;(statearr_12970_13007[2] = null);
(statearr_12970_13007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 18))
{var inst_12909 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12971_13008 = state_12939__$1;(statearr_12971_13008[2] = inst_12909);
(statearr_12971_13008[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 19))
{var inst_12870 = (state_12939[7]);var inst_12920 = (state_12939[13]);var inst_12922 = cljs.core.async.muxch_STAR_.call(null,inst_12920);var state_12939__$1 = state_12939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12939__$1,22,inst_12922,inst_12870);
} else
{if((state_val_12940 === 20))
{var state_12939__$1 = state_12939;var statearr_12972_13009 = state_12939__$1;(statearr_12972_13009[2] = null);
(statearr_12972_13009[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 21))
{var inst_12932 = (state_12939[2]);var state_12939__$1 = (function (){var statearr_12973 = state_12939;(statearr_12973[17] = inst_12932);
return statearr_12973;
})();var statearr_12974_13010 = state_12939__$1;(statearr_12974_13010[2] = null);
(statearr_12974_13010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 22))
{var inst_12924 = (state_12939[2]);var state_12939__$1 = state_12939;if(cljs.core.truth_(inst_12924))
{var statearr_12975_13011 = state_12939__$1;(statearr_12975_13011[1] = 23);
} else
{var statearr_12976_13012 = state_12939__$1;(statearr_12976_13012[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 23))
{var state_12939__$1 = state_12939;var statearr_12977_13013 = state_12939__$1;(statearr_12977_13013[2] = null);
(statearr_12977_13013[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 24))
{var inst_12918 = (state_12939[12]);var inst_12927 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12918);var state_12939__$1 = state_12939;var statearr_12978_13014 = state_12939__$1;(statearr_12978_13014[2] = inst_12927);
(statearr_12978_13014[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 25))
{var inst_12929 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12979_13015 = state_12939__$1;(statearr_12979_13015[2] = inst_12929);
(statearr_12979_13015[1] = 21);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_12983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12983[0] = state_machine__5597__auto__);
(statearr_12983[1] = 1);
return statearr_12983;
});
var state_machine__5597__auto____1 = (function (state_12939){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_12939);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e12984){if((e12984 instanceof Object))
{var ex__5600__auto__ = e12984;var statearr_12985_13016 = state_12939;(statearr_12985_13016[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13017 = state_12939;
state_12939 = G__13017;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_12939){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_12939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_12986 = f__5612__auto__.call(null);(statearr_12986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___12987);
return statearr_12986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
,cljs.core.range.call(null,cnt));var c__5611__auto___13154 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_13124){var state_val_13125 = (state_13124[1]);if((state_val_13125 === 1))
{var state_13124__$1 = state_13124;var statearr_13126_13155 = state_13124__$1;(statearr_13126_13155[2] = null);
(statearr_13126_13155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 2))
{var inst_13087 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13088 = 0;var state_13124__$1 = (function (){var statearr_13127 = state_13124;(statearr_13127[7] = inst_13087);
(statearr_13127[8] = inst_13088);
return statearr_13127;
})();var statearr_13128_13156 = state_13124__$1;(statearr_13128_13156[2] = null);
(statearr_13128_13156[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 3))
{var inst_13122 = (state_13124[2]);var state_13124__$1 = state_13124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13124__$1,inst_13122);
} else
{if((state_val_13125 === 4))
{var inst_13088 = (state_13124[8]);var inst_13090 = (inst_13088 < cnt);var state_13124__$1 = state_13124;if(cljs.core.truth_(inst_13090))
{var statearr_13129_13157 = state_13124__$1;(statearr_13129_13157[1] = 6);
} else
{var statearr_13130_13158 = state_13124__$1;(statearr_13130_13158[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 5))
{var inst_13108 = (state_13124[2]);var state_13124__$1 = (function (){var statearr_13131 = state_13124;(statearr_13131[9] = inst_13108);
return statearr_13131;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13124__$1,12,dchan);
} else
{if((state_val_13125 === 6))
{var state_13124__$1 = state_13124;var statearr_13132_13159 = state_13124__$1;(statearr_13132_13159[2] = null);
(statearr_13132_13159[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 7))
{var state_13124__$1 = state_13124;var statearr_13133_13160 = state_13124__$1;(statearr_13133_13160[2] = null);
(statearr_13133_13160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 8))
{var inst_13106 = (state_13124[2]);var state_13124__$1 = state_13124;var statearr_13134_13161 = state_13124__$1;(statearr_13134_13161[2] = inst_13106);
(statearr_13134_13161[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 9))
{var inst_13088 = (state_13124[8]);var inst_13101 = (state_13124[2]);var inst_13102 = (inst_13088 + 1);var inst_13088__$1 = inst_13102;var state_13124__$1 = (function (){var statearr_13135 = state_13124;(statearr_13135[8] = inst_13088__$1);
(statearr_13135[10] = inst_13101);
return statearr_13135;
})();var statearr_13136_13162 = state_13124__$1;(statearr_13136_13162[2] = null);
(statearr_13136_13162[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 10))
{var inst_13092 = (state_13124[2]);var inst_13093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13124__$1 = (function (){var statearr_13137 = state_13124;(statearr_13137[11] = inst_13092);
return statearr_13137;
})();var statearr_13138_13163 = state_13124__$1;(statearr_13138_13163[2] = inst_13093);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13124__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 11))
{var inst_13088 = (state_13124[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13124,10,Object,null,9);var inst_13097 = chs__$1.call(null,inst_13088);var inst_13098 = done.call(null,inst_13088);var inst_13099 = cljs.core.async.take_BANG_.call(null,inst_13097,inst_13098);var state_13124__$1 = state_13124;var statearr_13139_13164 = state_13124__$1;(statearr_13139_13164[2] = inst_13099);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13124__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 12))
{var inst_13110 = (state_13124[12]);var inst_13110__$1 = (state_13124[2]);var inst_13111 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13110__$1);var state_13124__$1 = (function (){var statearr_13140 = state_13124;(statearr_13140[12] = inst_13110__$1);
return statearr_13140;
})();if(cljs.core.truth_(inst_13111))
{var statearr_13141_13165 = state_13124__$1;(statearr_13141_13165[1] = 13);
} else
{var statearr_13142_13166 = state_13124__$1;(statearr_13142_13166[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 13))
{var inst_13113 = cljs.core.async.close_BANG_.call(null,out);var state_13124__$1 = state_13124;var statearr_13143_13167 = state_13124__$1;(statearr_13143_13167[2] = inst_13113);
(statearr_13143_13167[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 14))
{var inst_13110 = (state_13124[12]);var inst_13115 = cljs.core.apply.call(null,f,inst_13110);var state_13124__$1 = state_13124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13124__$1,16,out,inst_13115);
} else
{if((state_val_13125 === 15))
{var inst_13120 = (state_13124[2]);var state_13124__$1 = state_13124;var statearr_13144_13168 = state_13124__$1;(statearr_13144_13168[2] = inst_13120);
(statearr_13144_13168[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13125 === 16))
{var inst_13117 = (state_13124[2]);var state_13124__$1 = (function (){var statearr_13145 = state_13124;(statearr_13145[13] = inst_13117);
return statearr_13145;
})();var statearr_13146_13169 = state_13124__$1;(statearr_13146_13169[2] = null);
(statearr_13146_13169[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_13150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13150[0] = state_machine__5597__auto__);
(statearr_13150[1] = 1);
return statearr_13150;
});
var state_machine__5597__auto____1 = (function (state_13124){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_13124);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e13151){if((e13151 instanceof Object))
{var ex__5600__auto__ = e13151;var statearr_13152_13170 = state_13124;(statearr_13152_13170[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13124);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13171 = state_13124;
state_13124 = G__13171;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_13124){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_13124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_13153 = f__5612__auto__.call(null);(statearr_13153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___13154);
return statearr_13153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5611__auto___13279 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_13255){var state_val_13256 = (state_13255[1]);if((state_val_13256 === 1))
{var inst_13226 = cljs.core.vec.call(null,chs);var inst_13227 = inst_13226;var state_13255__$1 = (function (){var statearr_13257 = state_13255;(statearr_13257[7] = inst_13227);
return statearr_13257;
})();var statearr_13258_13280 = state_13255__$1;(statearr_13258_13280[2] = null);
(statearr_13258_13280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 2))
{var inst_13227 = (state_13255[7]);var inst_13229 = cljs.core.count.call(null,inst_13227);var inst_13230 = (inst_13229 > 0);var state_13255__$1 = state_13255;if(cljs.core.truth_(inst_13230))
{var statearr_13259_13281 = state_13255__$1;(statearr_13259_13281[1] = 4);
} else
{var statearr_13260_13282 = state_13255__$1;(statearr_13260_13282[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 3))
{var inst_13253 = (state_13255[2]);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13255__$1,inst_13253);
} else
{if((state_val_13256 === 4))
{var inst_13227 = (state_13255[7]);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13255__$1,7,inst_13227);
} else
{if((state_val_13256 === 5))
{var inst_13249 = cljs.core.async.close_BANG_.call(null,out);var state_13255__$1 = state_13255;var statearr_13261_13283 = state_13255__$1;(statearr_13261_13283[2] = inst_13249);
(statearr_13261_13283[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 6))
{var inst_13251 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13262_13284 = state_13255__$1;(statearr_13262_13284[2] = inst_13251);
(statearr_13262_13284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 7))
{var inst_13235 = (state_13255[8]);var inst_13234 = (state_13255[9]);var inst_13234__$1 = (state_13255[2]);var inst_13235__$1 = cljs.core.nth.call(null,inst_13234__$1,0,null);var inst_13236 = cljs.core.nth.call(null,inst_13234__$1,1,null);var inst_13237 = (inst_13235__$1 == null);var state_13255__$1 = (function (){var statearr_13263 = state_13255;(statearr_13263[10] = inst_13236);
(statearr_13263[8] = inst_13235__$1);
(statearr_13263[9] = inst_13234__$1);
return statearr_13263;
})();if(cljs.core.truth_(inst_13237))
{var statearr_13264_13285 = state_13255__$1;(statearr_13264_13285[1] = 8);
} else
{var statearr_13265_13286 = state_13255__$1;(statearr_13265_13286[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 8))
{var inst_13227 = (state_13255[7]);var inst_13236 = (state_13255[10]);var inst_13235 = (state_13255[8]);var inst_13234 = (state_13255[9]);var inst_13239 = (function (){var c = inst_13236;var v = inst_13235;var vec__13232 = inst_13234;var cs = inst_13227;return ((function (c,v,vec__13232,cs,inst_13227,inst_13236,inst_13235,inst_13234,state_val_13256){
return (function (p1__13172_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13172_SHARP_);
});
;})(c,v,vec__13232,cs,inst_13227,inst_13236,inst_13235,inst_13234,state_val_13256))
})();var inst_13240 = cljs.core.filterv.call(null,inst_13239,inst_13227);var inst_13227__$1 = inst_13240;var state_13255__$1 = (function (){var statearr_13266 = state_13255;(statearr_13266[7] = inst_13227__$1);
return statearr_13266;
})();var statearr_13267_13287 = state_13255__$1;(statearr_13267_13287[2] = null);
(statearr_13267_13287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 9))
{var inst_13235 = (state_13255[8]);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13255__$1,11,out,inst_13235);
} else
{if((state_val_13256 === 10))
{var inst_13247 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13269_13288 = state_13255__$1;(statearr_13269_13288[2] = inst_13247);
(statearr_13269_13288[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 11))
{var inst_13227 = (state_13255[7]);var inst_13244 = (state_13255[2]);var tmp13268 = inst_13227;var inst_13227__$1 = tmp13268;var state_13255__$1 = (function (){var statearr_13270 = state_13255;(statearr_13270[11] = inst_13244);
(statearr_13270[7] = inst_13227__$1);
return statearr_13270;
})();var statearr_13271_13289 = state_13255__$1;(statearr_13271_13289[2] = null);
(statearr_13271_13289[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_13275 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13275[0] = state_machine__5597__auto__);
(statearr_13275[1] = 1);
return statearr_13275;
});
var state_machine__5597__auto____1 = (function (state_13255){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_13255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e13276){if((e13276 instanceof Object))
{var ex__5600__auto__ = e13276;var statearr_13277_13290 = state_13255;(statearr_13277_13290[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13291 = state_13255;
state_13255 = G__13291;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_13255){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_13255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_13278 = f__5612__auto__.call(null);(statearr_13278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___13279);
return statearr_13278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5611__auto___13384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_13361){var state_val_13362 = (state_13361[1]);if((state_val_13362 === 1))
{var inst_13338 = 0;var state_13361__$1 = (function (){var statearr_13363 = state_13361;(statearr_13363[7] = inst_13338);
return statearr_13363;
})();var statearr_13364_13385 = state_13361__$1;(statearr_13364_13385[2] = null);
(statearr_13364_13385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13362 === 2))
{var inst_13338 = (state_13361[7]);var inst_13340 = (inst_13338 < n);var state_13361__$1 = state_13361;if(cljs.core.truth_(inst_13340))
{var statearr_13365_13386 = state_13361__$1;(statearr_13365_13386[1] = 4);
} else
{var statearr_13366_13387 = state_13361__$1;(statearr_13366_13387[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13362 === 3))
{var inst_13358 = (state_13361[2]);var inst_13359 = cljs.core.async.close_BANG_.call(null,out);var state_13361__$1 = (function (){var statearr_13367 = state_13361;(statearr_13367[8] = inst_13358);
return statearr_13367;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13361__$1,inst_13359);
} else
{if((state_val_13362 === 4))
{var state_13361__$1 = state_13361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13361__$1,7,ch);
} else
{if((state_val_13362 === 5))
{var state_13361__$1 = state_13361;var statearr_13368_13388 = state_13361__$1;(statearr_13368_13388[2] = null);
(statearr_13368_13388[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13362 === 6))
{var inst_13356 = (state_13361[2]);var state_13361__$1 = state_13361;var statearr_13369_13389 = state_13361__$1;(statearr_13369_13389[2] = inst_13356);
(statearr_13369_13389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13362 === 7))
{var inst_13343 = (state_13361[9]);var inst_13343__$1 = (state_13361[2]);var inst_13344 = (inst_13343__$1 == null);var inst_13345 = cljs.core.not.call(null,inst_13344);var state_13361__$1 = (function (){var statearr_13370 = state_13361;(statearr_13370[9] = inst_13343__$1);
return statearr_13370;
})();if(inst_13345)
{var statearr_13371_13390 = state_13361__$1;(statearr_13371_13390[1] = 8);
} else
{var statearr_13372_13391 = state_13361__$1;(statearr_13372_13391[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13362 === 8))
{var inst_13343 = (state_13361[9]);var state_13361__$1 = state_13361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13361__$1,11,out,inst_13343);
} else
{if((state_val_13362 === 9))
{var state_13361__$1 = state_13361;var statearr_13373_13392 = state_13361__$1;(statearr_13373_13392[2] = null);
(statearr_13373_13392[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13362 === 10))
{var inst_13353 = (state_13361[2]);var state_13361__$1 = state_13361;var statearr_13374_13393 = state_13361__$1;(statearr_13374_13393[2] = inst_13353);
(statearr_13374_13393[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13362 === 11))
{var inst_13338 = (state_13361[7]);var inst_13348 = (state_13361[2]);var inst_13349 = (inst_13338 + 1);var inst_13338__$1 = inst_13349;var state_13361__$1 = (function (){var statearr_13375 = state_13361;(statearr_13375[10] = inst_13348);
(statearr_13375[7] = inst_13338__$1);
return statearr_13375;
})();var statearr_13376_13394 = state_13361__$1;(statearr_13376_13394[2] = null);
(statearr_13376_13394[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_13380 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13380[0] = state_machine__5597__auto__);
(statearr_13380[1] = 1);
return statearr_13380;
});
var state_machine__5597__auto____1 = (function (state_13361){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_13361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e13381){if((e13381 instanceof Object))
{var ex__5600__auto__ = e13381;var statearr_13382_13395 = state_13361;(statearr_13382_13395[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13396 = state_13361;
state_13361 = G__13396;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_13361){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_13361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_13383 = f__5612__auto__.call(null);(statearr_13383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___13384);
return statearr_13383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5611__auto___13493 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_13468){var state_val_13469 = (state_13468[1]);if((state_val_13469 === 1))
{var inst_13445 = null;var state_13468__$1 = (function (){var statearr_13470 = state_13468;(statearr_13470[7] = inst_13445);
return statearr_13470;
})();var statearr_13471_13494 = state_13468__$1;(statearr_13471_13494[2] = null);
(statearr_13471_13494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 2))
{var state_13468__$1 = state_13468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13468__$1,4,ch);
} else
{if((state_val_13469 === 3))
{var inst_13465 = (state_13468[2]);var inst_13466 = cljs.core.async.close_BANG_.call(null,out);var state_13468__$1 = (function (){var statearr_13472 = state_13468;(statearr_13472[8] = inst_13465);
return statearr_13472;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13468__$1,inst_13466);
} else
{if((state_val_13469 === 4))
{var inst_13448 = (state_13468[9]);var inst_13448__$1 = (state_13468[2]);var inst_13449 = (inst_13448__$1 == null);var inst_13450 = cljs.core.not.call(null,inst_13449);var state_13468__$1 = (function (){var statearr_13473 = state_13468;(statearr_13473[9] = inst_13448__$1);
return statearr_13473;
})();if(inst_13450)
{var statearr_13474_13495 = state_13468__$1;(statearr_13474_13495[1] = 5);
} else
{var statearr_13475_13496 = state_13468__$1;(statearr_13475_13496[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 5))
{var inst_13445 = (state_13468[7]);var inst_13448 = (state_13468[9]);var inst_13452 = cljs.core._EQ_.call(null,inst_13448,inst_13445);var state_13468__$1 = state_13468;if(inst_13452)
{var statearr_13476_13497 = state_13468__$1;(statearr_13476_13497[1] = 8);
} else
{var statearr_13477_13498 = state_13468__$1;(statearr_13477_13498[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 6))
{var state_13468__$1 = state_13468;var statearr_13479_13499 = state_13468__$1;(statearr_13479_13499[2] = null);
(statearr_13479_13499[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 7))
{var inst_13463 = (state_13468[2]);var state_13468__$1 = state_13468;var statearr_13480_13500 = state_13468__$1;(statearr_13480_13500[2] = inst_13463);
(statearr_13480_13500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 8))
{var inst_13445 = (state_13468[7]);var tmp13478 = inst_13445;var inst_13445__$1 = tmp13478;var state_13468__$1 = (function (){var statearr_13481 = state_13468;(statearr_13481[7] = inst_13445__$1);
return statearr_13481;
})();var statearr_13482_13501 = state_13468__$1;(statearr_13482_13501[2] = null);
(statearr_13482_13501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 9))
{var inst_13448 = (state_13468[9]);var state_13468__$1 = state_13468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13468__$1,11,out,inst_13448);
} else
{if((state_val_13469 === 10))
{var inst_13460 = (state_13468[2]);var state_13468__$1 = state_13468;var statearr_13483_13502 = state_13468__$1;(statearr_13483_13502[2] = inst_13460);
(statearr_13483_13502[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 11))
{var inst_13448 = (state_13468[9]);var inst_13457 = (state_13468[2]);var inst_13445 = inst_13448;var state_13468__$1 = (function (){var statearr_13484 = state_13468;(statearr_13484[7] = inst_13445);
(statearr_13484[10] = inst_13457);
return statearr_13484;
})();var statearr_13485_13503 = state_13468__$1;(statearr_13485_13503[2] = null);
(statearr_13485_13503[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_13489 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13489[0] = state_machine__5597__auto__);
(statearr_13489[1] = 1);
return statearr_13489;
});
var state_machine__5597__auto____1 = (function (state_13468){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_13468);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e13490){if((e13490 instanceof Object))
{var ex__5600__auto__ = e13490;var statearr_13491_13504 = state_13468;(statearr_13491_13504[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13505 = state_13468;
state_13468 = G__13505;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_13468){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_13468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_13492 = f__5612__auto__.call(null);(statearr_13492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___13493);
return statearr_13492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5611__auto___13640 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_13610){var state_val_13611 = (state_13610[1]);if((state_val_13611 === 1))
{var inst_13573 = (new Array(n));var inst_13574 = inst_13573;var inst_13575 = 0;var state_13610__$1 = (function (){var statearr_13612 = state_13610;(statearr_13612[7] = inst_13574);
(statearr_13612[8] = inst_13575);
return statearr_13612;
})();var statearr_13613_13641 = state_13610__$1;(statearr_13613_13641[2] = null);
(statearr_13613_13641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 2))
{var state_13610__$1 = state_13610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13610__$1,4,ch);
} else
{if((state_val_13611 === 3))
{var inst_13608 = (state_13610[2]);var state_13610__$1 = state_13610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13610__$1,inst_13608);
} else
{if((state_val_13611 === 4))
{var inst_13578 = (state_13610[9]);var inst_13578__$1 = (state_13610[2]);var inst_13579 = (inst_13578__$1 == null);var inst_13580 = cljs.core.not.call(null,inst_13579);var state_13610__$1 = (function (){var statearr_13614 = state_13610;(statearr_13614[9] = inst_13578__$1);
return statearr_13614;
})();if(inst_13580)
{var statearr_13615_13642 = state_13610__$1;(statearr_13615_13642[1] = 5);
} else
{var statearr_13616_13643 = state_13610__$1;(statearr_13616_13643[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 5))
{var inst_13574 = (state_13610[7]);var inst_13583 = (state_13610[10]);var inst_13578 = (state_13610[9]);var inst_13575 = (state_13610[8]);var inst_13582 = (inst_13574[inst_13575] = inst_13578);var inst_13583__$1 = (inst_13575 + 1);var inst_13584 = (inst_13583__$1 < n);var state_13610__$1 = (function (){var statearr_13617 = state_13610;(statearr_13617[11] = inst_13582);
(statearr_13617[10] = inst_13583__$1);
return statearr_13617;
})();if(cljs.core.truth_(inst_13584))
{var statearr_13618_13644 = state_13610__$1;(statearr_13618_13644[1] = 8);
} else
{var statearr_13619_13645 = state_13610__$1;(statearr_13619_13645[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 6))
{var inst_13575 = (state_13610[8]);var inst_13596 = (inst_13575 > 0);var state_13610__$1 = state_13610;if(cljs.core.truth_(inst_13596))
{var statearr_13621_13646 = state_13610__$1;(statearr_13621_13646[1] = 12);
} else
{var statearr_13622_13647 = state_13610__$1;(statearr_13622_13647[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 7))
{var inst_13606 = (state_13610[2]);var state_13610__$1 = state_13610;var statearr_13623_13648 = state_13610__$1;(statearr_13623_13648[2] = inst_13606);
(statearr_13623_13648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 8))
{var inst_13574 = (state_13610[7]);var inst_13583 = (state_13610[10]);var tmp13620 = inst_13574;var inst_13574__$1 = tmp13620;var inst_13575 = inst_13583;var state_13610__$1 = (function (){var statearr_13624 = state_13610;(statearr_13624[7] = inst_13574__$1);
(statearr_13624[8] = inst_13575);
return statearr_13624;
})();var statearr_13625_13649 = state_13610__$1;(statearr_13625_13649[2] = null);
(statearr_13625_13649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 9))
{var inst_13574 = (state_13610[7]);var inst_13588 = cljs.core.vec.call(null,inst_13574);var state_13610__$1 = state_13610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13610__$1,11,out,inst_13588);
} else
{if((state_val_13611 === 10))
{var inst_13594 = (state_13610[2]);var state_13610__$1 = state_13610;var statearr_13626_13650 = state_13610__$1;(statearr_13626_13650[2] = inst_13594);
(statearr_13626_13650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 11))
{var inst_13590 = (state_13610[2]);var inst_13591 = (new Array(n));var inst_13574 = inst_13591;var inst_13575 = 0;var state_13610__$1 = (function (){var statearr_13627 = state_13610;(statearr_13627[12] = inst_13590);
(statearr_13627[7] = inst_13574);
(statearr_13627[8] = inst_13575);
return statearr_13627;
})();var statearr_13628_13651 = state_13610__$1;(statearr_13628_13651[2] = null);
(statearr_13628_13651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 12))
{var inst_13574 = (state_13610[7]);var inst_13598 = cljs.core.vec.call(null,inst_13574);var state_13610__$1 = state_13610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13610__$1,15,out,inst_13598);
} else
{if((state_val_13611 === 13))
{var state_13610__$1 = state_13610;var statearr_13629_13652 = state_13610__$1;(statearr_13629_13652[2] = null);
(statearr_13629_13652[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 14))
{var inst_13603 = (state_13610[2]);var inst_13604 = cljs.core.async.close_BANG_.call(null,out);var state_13610__$1 = (function (){var statearr_13630 = state_13610;(statearr_13630[13] = inst_13603);
return statearr_13630;
})();var statearr_13631_13653 = state_13610__$1;(statearr_13631_13653[2] = inst_13604);
(statearr_13631_13653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13611 === 15))
{var inst_13600 = (state_13610[2]);var state_13610__$1 = state_13610;var statearr_13632_13654 = state_13610__$1;(statearr_13632_13654[2] = inst_13600);
(statearr_13632_13654[1] = 14);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_13636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13636[0] = state_machine__5597__auto__);
(statearr_13636[1] = 1);
return statearr_13636;
});
var state_machine__5597__auto____1 = (function (state_13610){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_13610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e13637){if((e13637 instanceof Object))
{var ex__5600__auto__ = e13637;var statearr_13638_13655 = state_13610;(statearr_13638_13655[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13656 = state_13610;
state_13610 = G__13656;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_13610){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_13610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_13639 = f__5612__auto__.call(null);(statearr_13639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___13640);
return statearr_13639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5611__auto___13799 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_13769){var state_val_13770 = (state_13769[1]);if((state_val_13770 === 1))
{var inst_13728 = [];var inst_13729 = inst_13728;var inst_13730 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13769__$1 = (function (){var statearr_13771 = state_13769;(statearr_13771[7] = inst_13729);
(statearr_13771[8] = inst_13730);
return statearr_13771;
})();var statearr_13772_13800 = state_13769__$1;(statearr_13772_13800[2] = null);
(statearr_13772_13800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 2))
{var state_13769__$1 = state_13769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13769__$1,4,ch);
} else
{if((state_val_13770 === 3))
{var inst_13767 = (state_13769[2]);var state_13769__$1 = state_13769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13769__$1,inst_13767);
} else
{if((state_val_13770 === 4))
{var inst_13733 = (state_13769[9]);var inst_13733__$1 = (state_13769[2]);var inst_13734 = (inst_13733__$1 == null);var inst_13735 = cljs.core.not.call(null,inst_13734);var state_13769__$1 = (function (){var statearr_13773 = state_13769;(statearr_13773[9] = inst_13733__$1);
return statearr_13773;
})();if(inst_13735)
{var statearr_13774_13801 = state_13769__$1;(statearr_13774_13801[1] = 5);
} else
{var statearr_13775_13802 = state_13769__$1;(statearr_13775_13802[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 5))
{var inst_13737 = (state_13769[10]);var inst_13733 = (state_13769[9]);var inst_13730 = (state_13769[8]);var inst_13737__$1 = f.call(null,inst_13733);var inst_13738 = cljs.core._EQ_.call(null,inst_13737__$1,inst_13730);var inst_13739 = cljs.core.keyword_identical_QMARK_.call(null,inst_13730,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13740 = (inst_13738) || (inst_13739);var state_13769__$1 = (function (){var statearr_13776 = state_13769;(statearr_13776[10] = inst_13737__$1);
return statearr_13776;
})();if(cljs.core.truth_(inst_13740))
{var statearr_13777_13803 = state_13769__$1;(statearr_13777_13803[1] = 8);
} else
{var statearr_13778_13804 = state_13769__$1;(statearr_13778_13804[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 6))
{var inst_13729 = (state_13769[7]);var inst_13754 = inst_13729.length;var inst_13755 = (inst_13754 > 0);var state_13769__$1 = state_13769;if(cljs.core.truth_(inst_13755))
{var statearr_13780_13805 = state_13769__$1;(statearr_13780_13805[1] = 12);
} else
{var statearr_13781_13806 = state_13769__$1;(statearr_13781_13806[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 7))
{var inst_13765 = (state_13769[2]);var state_13769__$1 = state_13769;var statearr_13782_13807 = state_13769__$1;(statearr_13782_13807[2] = inst_13765);
(statearr_13782_13807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 8))
{var inst_13729 = (state_13769[7]);var inst_13737 = (state_13769[10]);var inst_13733 = (state_13769[9]);var inst_13742 = inst_13729.push(inst_13733);var tmp13779 = inst_13729;var inst_13729__$1 = tmp13779;var inst_13730 = inst_13737;var state_13769__$1 = (function (){var statearr_13783 = state_13769;(statearr_13783[7] = inst_13729__$1);
(statearr_13783[11] = inst_13742);
(statearr_13783[8] = inst_13730);
return statearr_13783;
})();var statearr_13784_13808 = state_13769__$1;(statearr_13784_13808[2] = null);
(statearr_13784_13808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 9))
{var inst_13729 = (state_13769[7]);var inst_13745 = cljs.core.vec.call(null,inst_13729);var state_13769__$1 = state_13769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13769__$1,11,out,inst_13745);
} else
{if((state_val_13770 === 10))
{var inst_13752 = (state_13769[2]);var state_13769__$1 = state_13769;var statearr_13785_13809 = state_13769__$1;(statearr_13785_13809[2] = inst_13752);
(statearr_13785_13809[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 11))
{var inst_13737 = (state_13769[10]);var inst_13733 = (state_13769[9]);var inst_13747 = (state_13769[2]);var inst_13748 = [];var inst_13749 = inst_13748.push(inst_13733);var inst_13729 = inst_13748;var inst_13730 = inst_13737;var state_13769__$1 = (function (){var statearr_13786 = state_13769;(statearr_13786[7] = inst_13729);
(statearr_13786[12] = inst_13747);
(statearr_13786[13] = inst_13749);
(statearr_13786[8] = inst_13730);
return statearr_13786;
})();var statearr_13787_13810 = state_13769__$1;(statearr_13787_13810[2] = null);
(statearr_13787_13810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 12))
{var inst_13729 = (state_13769[7]);var inst_13757 = cljs.core.vec.call(null,inst_13729);var state_13769__$1 = state_13769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13769__$1,15,out,inst_13757);
} else
{if((state_val_13770 === 13))
{var state_13769__$1 = state_13769;var statearr_13788_13811 = state_13769__$1;(statearr_13788_13811[2] = null);
(statearr_13788_13811[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 14))
{var inst_13762 = (state_13769[2]);var inst_13763 = cljs.core.async.close_BANG_.call(null,out);var state_13769__$1 = (function (){var statearr_13789 = state_13769;(statearr_13789[14] = inst_13762);
return statearr_13789;
})();var statearr_13790_13812 = state_13769__$1;(statearr_13790_13812[2] = inst_13763);
(statearr_13790_13812[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13770 === 15))
{var inst_13759 = (state_13769[2]);var state_13769__$1 = state_13769;var statearr_13791_13813 = state_13769__$1;(statearr_13791_13813[2] = inst_13759);
(statearr_13791_13813[1] = 14);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_13795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13795[0] = state_machine__5597__auto__);
(statearr_13795[1] = 1);
return statearr_13795;
});
var state_machine__5597__auto____1 = (function (state_13769){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_13769);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e13796){if((e13796 instanceof Object))
{var ex__5600__auto__ = e13796;var statearr_13797_13814 = state_13769;(statearr_13797_13814[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13769);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13815 = state_13769;
state_13769 = G__13815;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_13769){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_13769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_13798 = f__5612__auto__.call(null);(statearr_13798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto___13799);
return statearr_13798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
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