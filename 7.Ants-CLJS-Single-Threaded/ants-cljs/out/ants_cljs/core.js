// Compiled by ClojureScript 0.0-2173
goog.provide('ants_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
ants_cljs.core.dim = 20;
ants_cljs.core.nants_sqrt = 3;
ants_cljs.core.food_places = 10;
ants_cljs.core.food_range = 100;
ants_cljs.core.pher_scale = 20.0;
ants_cljs.core.food_scale = 30.0;
ants_cljs.core.evap_rate = 0.99;
ants_cljs.core.animation_sleep_ms = 100;
ants_cljs.core.ant_sleep_ms = 40;
ants_cljs.core.evap_sleep_ms = 1000;
ants_cljs.core.is_running = false;
ants_cljs.core.log_flags = cljs.core.PersistentHashSet.EMPTY;
/**
* @param {...*} var_args
*/
ants_cljs.core.logj = (function() { 
var logj__delegate = function (flag,args){if(cljs.core.contains_QMARK_.call(null,ants_cljs.core.log_flags,flag))
{return console.log([cljs.core.str(args)].join(''));
} else
{return null;
}
};
var logj = function (flag,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return logj__delegate.call(this,flag,args);};
logj.cljs$lang$maxFixedArity = 1;
logj.cljs$lang$applyTo = (function (arglist__4793){
var flag = cljs.core.first(arglist__4793);
var args = cljs.core.rest(arglist__4793);
return logj__delegate(flag,args);
});
logj.cljs$core$IFn$_invoke$arity$variadic = logj__delegate;
return logj;
})()
;
ants_cljs.core.do_pause = (function do_pause(){if(cljs.core.truth_(ants_cljs.core.is_running))
{return ants_cljs.core.is_running = false;
} else
{return ants_cljs.core.is_running = true;
}
});

/**
* @constructor
* @param {*} food
* @param {*} pher
* @param {*} ant
* @param {*} home
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
ants_cljs.core.cell = (function (food,pher,ant,home,__meta,__extmap){
this.food = food;
this.pher = pher;
this.ant = ant;
this.home = home;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
ants_cljs.core.cell.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4024__auto__){var self__ = this;
var this__4024__auto____$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_imap.call(null,this__4024__auto____$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
ants_cljs.core.cell.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4029__auto__,k__4030__auto__){var self__ = this;
var this__4029__auto____$1 = this;return cljs.core._lookup.call(null,this__4029__auto____$1,k__4030__auto__,null);
});
ants_cljs.core.cell.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4031__auto__,k4795,else__4032__auto__){var self__ = this;
var this__4031__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k4795,new cljs.core.Keyword(null,"food","food",1017053136)))
{return self__.food;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4795,new cljs.core.Keyword(null,"pher","pher",1017344023)))
{return self__.pher;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4795,new cljs.core.Keyword(null,"ant","ant",1014000985)))
{return self__.ant;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4795,new cljs.core.Keyword(null,"home","home",1017112657)))
{return self__.home;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k4795,else__4032__auto__);
} else
{return null;
}
}
}
}
}
});
ants_cljs.core.cell.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4036__auto__,k__4037__auto__,G__4794){var self__ = this;
var this__4036__auto____$1 = this;var pred__4797 = cljs.core.keyword_identical_QMARK_;var expr__4798 = k__4037__auto__;if(cljs.core.truth_(pred__4797.call(null,new cljs.core.Keyword(null,"food","food",1017053136),expr__4798)))
{return (new ants_cljs.core.cell(G__4794,self__.pher,self__.ant,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__4797.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),expr__4798)))
{return (new ants_cljs.core.cell(self__.food,G__4794,self__.ant,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__4797.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985),expr__4798)))
{return (new ants_cljs.core.cell(self__.food,self__.pher,G__4794,self__.home,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__4797.call(null,new cljs.core.Keyword(null,"home","home",1017112657),expr__4798)))
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,G__4794,self__.__meta,self__.__extmap,null));
} else
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4037__auto__,G__4794),null));
}
}
}
}
});
ants_cljs.core.cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4043__auto__,writer__4044__auto__,opts__4045__auto__){var self__ = this;
var this__4043__auto____$1 = this;var pr_pair__4046__auto__ = (function (keyval__4047__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,cljs.core.pr_writer,""," ","",opts__4045__auto__,keyval__4047__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,pr_pair__4046__auto__,"#ants-cljs.core.cell{",", ","}",opts__4045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pher","pher",1017344023),self__.pher],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ant","ant",1014000985),self__.ant],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"home","home",1017112657),self__.home],null))], null),self__.__extmap));
});
ants_cljs.core.cell.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4034__auto__,entry__4035__auto__){var self__ = this;
var this__4034__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4035__auto__))
{return cljs.core._assoc.call(null,this__4034__auto____$1,cljs.core._nth.call(null,entry__4035__auto__,0),cljs.core._nth.call(null,entry__4035__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4034__auto____$1,entry__4035__auto__);
}
});
ants_cljs.core.cell.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4041__auto__){var self__ = this;
var this__4041__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pher","pher",1017344023),self__.pher],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ant","ant",1014000985),self__.ant],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"home","home",1017112657),self__.home],null))], null),self__.__extmap));
});
ants_cljs.core.cell.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
ants_cljs.core.cell.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4025__auto__,other__4026__auto__){var self__ = this;
var this__4025__auto____$1 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = other__4026__auto__;if(cljs.core.truth_(and__3431__auto__))
{return ((this__4025__auto____$1.constructor === other__4026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4025__auto____$1,other__4026__auto__));
} else
{return and__3431__auto__;
}
})()))
{return true;
} else
{return false;
}
});
ants_cljs.core.cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4028__auto__,G__4794){var self__ = this;
var this__4028__auto____$1 = this;return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,G__4794,self__.__extmap,self__.__hash));
});
ants_cljs.core.cell.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,self__.__meta,self__.__extmap,self__.__hash));
});
ants_cljs.core.cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4027__auto__){var self__ = this;
var this__4027__auto____$1 = this;return self__.__meta;
});
ants_cljs.core.cell.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4038__auto__,k__4039__auto__){var self__ = this;
var this__4038__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pher","pher",1017344023),null,new cljs.core.Keyword(null,"food","food",1017053136),null,new cljs.core.Keyword(null,"home","home",1017112657),null,new cljs.core.Keyword(null,"ant","ant",1014000985),null], null), null),k__4039__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4038__auto____$1),self__.__meta),k__4039__auto__);
} else
{return (new ants_cljs.core.cell(self__.food,self__.pher,self__.ant,self__.home,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4039__auto__)),null));
}
});
ants_cljs.core.cell.cljs$lang$type = true;
ants_cljs.core.cell.cljs$lang$ctorPrSeq = (function (this__4063__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ants-cljs.core/cell");
});
ants_cljs.core.cell.cljs$lang$ctorPrWriter = (function (this__4063__auto__,writer__4064__auto__){return cljs.core._write.call(null,writer__4064__auto__,"ants-cljs.core/cell");
});
ants_cljs.core.__GT_cell = (function __GT_cell(food,pher,ant,home){return (new ants_cljs.core.cell(food,pher,ant,home));
});
ants_cljs.core.map__GT_cell = (function map__GT_cell(G__4796){return (new ants_cljs.core.cell(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(G__4796),new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(G__4796),new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(G__4796),new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(G__4796),null,cljs.core.dissoc.call(null,G__4796,new cljs.core.Keyword(null,"food","food",1017053136),new cljs.core.Keyword(null,"pher","pher",1017344023),new cljs.core.Keyword(null,"ant","ant",1014000985),new cljs.core.Keyword(null,"home","home",1017112657))));
});
ants_cljs.core.world = cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (_){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (___$1){return cljs.core.atom.call(null,(new ants_cljs.core.cell(0,0,null,null)));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
ants_cljs.core.place = (function place(p__4800){var vec__4802 = p__4800;var x = cljs.core.nth.call(null,vec__4802,0,null);var y = cljs.core.nth.call(null,vec__4802,1,null);if(!((new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null) == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-1640531407,null),new cljs.core.Symbol(null,"y","y",-1640531406,null)], null)))))].join('')));
}
var _PERCENT_ = cljs.core.nth.call(null,cljs.core.nth.call(null,ants_cljs.core.world,x),y);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
return _PERCENT_;
});

/**
* @constructor
* @param {*} dir
* @param {*} id
* @param {*} food
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
ants_cljs.core.ant = (function (dir,id,food,__meta,__extmap){
this.dir = dir;
this.id = id;
this.food = food;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
ants_cljs.core.ant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4024__auto__){var self__ = this;
var this__4024__auto____$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_imap.call(null,this__4024__auto____$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
ants_cljs.core.ant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4029__auto__,k__4030__auto__){var self__ = this;
var this__4029__auto____$1 = this;return cljs.core._lookup.call(null,this__4029__auto____$1,k__4030__auto__,null);
});
ants_cljs.core.ant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4031__auto__,k4804,else__4032__auto__){var self__ = this;
var this__4031__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k4804,new cljs.core.Keyword(null,"dir","dir",1014003711)))
{return self__.dir;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4804,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k4804,new cljs.core.Keyword(null,"food","food",1017053136)))
{return self__.food;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k4804,else__4032__auto__);
} else
{return null;
}
}
}
}
});
ants_cljs.core.ant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4036__auto__,k__4037__auto__,G__4803){var self__ = this;
var this__4036__auto____$1 = this;var pred__4806 = cljs.core.keyword_identical_QMARK_;var expr__4807 = k__4037__auto__;if(cljs.core.truth_(pred__4806.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711),expr__4807)))
{return (new ants_cljs.core.ant(G__4803,self__.id,self__.food,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__4806.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__4807)))
{return (new ants_cljs.core.ant(self__.dir,G__4803,self__.food,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__4806.call(null,new cljs.core.Keyword(null,"food","food",1017053136),expr__4807)))
{return (new ants_cljs.core.ant(self__.dir,self__.id,G__4803,self__.__meta,self__.__extmap,null));
} else
{return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4037__auto__,G__4803),null));
}
}
}
});
ants_cljs.core.ant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4043__auto__,writer__4044__auto__,opts__4045__auto__){var self__ = this;
var this__4043__auto____$1 = this;var pr_pair__4046__auto__ = (function (keyval__4047__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,cljs.core.pr_writer,""," ","",opts__4045__auto__,keyval__4047__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4044__auto__,pr_pair__4046__auto__,"#ants-cljs.core.ant{",", ","}",opts__4045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dir","dir",1014003711),self__.dir],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null))], null),self__.__extmap));
});
ants_cljs.core.ant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4034__auto__,entry__4035__auto__){var self__ = this;
var this__4034__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4035__auto__))
{return cljs.core._assoc.call(null,this__4034__auto____$1,cljs.core._nth.call(null,entry__4035__auto__,0),cljs.core._nth.call(null,entry__4035__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4034__auto____$1,entry__4035__auto__);
}
});
ants_cljs.core.ant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4041__auto__){var self__ = this;
var this__4041__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dir","dir",1014003711),self__.dir],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"food","food",1017053136),self__.food],null))], null),self__.__extmap));
});
ants_cljs.core.ant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
ants_cljs.core.ant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4025__auto__,other__4026__auto__){var self__ = this;
var this__4025__auto____$1 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = other__4026__auto__;if(cljs.core.truth_(and__3431__auto__))
{return ((this__4025__auto____$1.constructor === other__4026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4025__auto____$1,other__4026__auto__));
} else
{return and__3431__auto__;
}
})()))
{return true;
} else
{return false;
}
});
ants_cljs.core.ant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4028__auto__,G__4803){var self__ = this;
var this__4028__auto____$1 = this;return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,G__4803,self__.__extmap,self__.__hash));
});
ants_cljs.core.ant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,self__.__meta,self__.__extmap,self__.__hash));
});
ants_cljs.core.ant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4027__auto__){var self__ = this;
var this__4027__auto____$1 = this;return self__.__meta;
});
ants_cljs.core.ant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4038__auto__,k__4039__auto__){var self__ = this;
var this__4038__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"food","food",1017053136),null,new cljs.core.Keyword(null,"dir","dir",1014003711),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),k__4039__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4038__auto____$1),self__.__meta),k__4039__auto__);
} else
{return (new ants_cljs.core.ant(self__.dir,self__.id,self__.food,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4039__auto__)),null));
}
});
ants_cljs.core.ant.cljs$lang$type = true;
ants_cljs.core.ant.cljs$lang$ctorPrSeq = (function (this__4063__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ants-cljs.core/ant");
});
ants_cljs.core.ant.cljs$lang$ctorPrWriter = (function (this__4063__auto__,writer__4064__auto__){return cljs.core._write.call(null,writer__4064__auto__,"ants-cljs.core/ant");
});
ants_cljs.core.__GT_ant = (function __GT_ant(dir,id,food){return (new ants_cljs.core.ant(dir,id,food));
});
ants_cljs.core.map__GT_ant = (function map__GT_ant(G__4805){return (new ants_cljs.core.ant(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(G__4805),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__4805),new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(G__4805),null,cljs.core.dissoc.call(null,G__4805,new cljs.core.Keyword(null,"dir","dir",1014003711),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"food","food",1017053136))));
});
/**
* create an ant at the location, returning an ant agent on the location
*/
ants_cljs.core.create_ant = (function create_ant(loc,dir,id){var p = ants_cljs.core.place.call(null,loc);var a = (new ants_cljs.core.ant(dir,id,null));cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),a);
ants_cljs.core.logj.call(null,"create-ant",[cljs.core.str("created ant: "),cljs.core.str(a),cljs.core.str(" at "),cljs.core.str(loc)].join(''));
return loc;
});
ants_cljs.core.pprint_map = (function pprint_map(cljs_map){var result = cljs.core.reduce.call(null,(function (lhs,p__4811){var vec__4812 = p__4811;var k = cljs.core.nth.call(null,vec__4812,0,null);var v = cljs.core.nth.call(null,vec__4812,1,null);return [cljs.core.str(lhs),cljs.core.str(" "),cljs.core.str(k),cljs.core.str(" "),cljs.core.str(v)].join('');
}),"",cljs_map);return [cljs.core.str("{"),cljs.core.str(result),cljs.core.str("}")].join('');
});
ants_cljs.core.pprint_vec = (function pprint_vec(cljs_vec){var result = cljs.core.reduce.call(null,(function (lhs,v){return [cljs.core.str(lhs),cljs.core.str(" "),cljs.core.str(v)].join('');
}),"",cljs_vec);return [cljs.core.str("["),cljs.core.str(result),cljs.core.str("]")].join('');
});
ants_cljs.core.pprint = (function pprint(cljs_obj){var type_name = cljs.core.type__GT_str.call(null,cljs.core.type.call(null,cljs_obj));var G__4814 = type_name;if(cljs.core._EQ_.call(null,"cljs.core/PersistentVector",G__4814))
{return ants_cljs.core.pprint_vec.call(null,cljs_obj);
} else
{if(cljs.core._EQ_.call(null,"cljs.core/PersistentArrayMap",G__4814))
{return ants_cljs.core.pprint_map.call(null,cljs_obj);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ants_cljs.core.logj.call(null,"pprint",[cljs.core.str("no pprint handler for "),cljs.core.str(type_name)].join(''));
} else
{return null;
}
}
}
});
ants_cljs.core.pprint_ant_record = (function pprint_ant_record(ant_rec){return [cljs.core.str("[ :dir "),cljs.core.str(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant_rec)),cljs.core.str(" :id "),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(ant_rec)),cljs.core.str(" :food "),cljs.core.str(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant_rec)),cljs.core.str("]")].join('');
});
ants_cljs.core.pprint_cell_record = (function pprint_cell_record(cell_rec){return [cljs.core.str("[ :food "),cljs.core.str(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cell_rec)),cljs.core.str(" :pher "),cljs.core.str(new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cell_rec)),cljs.core.str(" :ant "),cljs.core.str(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cell_rec)),cljs.core.str("]")].join('');
});
ants_cljs.core.home_off = (ants_cljs.core.dim / 4);
ants_cljs.core.home_range = cljs.core.range.call(null,ants_cljs.core.home_off,(ants_cljs.core.nants_sqrt + ants_cljs.core.home_off));
/**
* get coordinates of the locations of the ants from the main map
*/
ants_cljs.core.get_ant_coords = (function get_ant_coords(){return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (coord){if(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ants_cljs.core.place.call(null,coord)))))
{return coord;
} else
{return null;
}
}),(function (){var iter__4160__auto__ = (function iter__4821(s__4822){return (new cljs.core.LazySeq(null,(function (){var s__4822__$1 = s__4822;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4822__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var y = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__4822__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function iter__4823(s__4824){return (new cljs.core.LazySeq(null,((function (s__4822__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4824__$1 = s__4824;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4824__$1);if(temp__4092__auto____$1)
{var s__4824__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4824__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__4824__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__4826 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__4825 = 0;while(true){
if((i__4825 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__4825);cljs.core.chunk_append.call(null,b__4826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__4827 = (i__4825 + 1);
i__4825 = G__4827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4826),iter__4823.call(null,cljs.core.chunk_rest.call(null,s__4824__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4826),null);
}
} else
{var x = cljs.core.first.call(null,s__4824__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__4823.call(null,cljs.core.rest.call(null,s__4824__$2)));
}
} else
{return null;
}
break;
}
});})(s__4822__$1,y,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4822__$1,y,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__4821.call(null,cljs.core.rest.call(null,s__4822__$1)));
} else
{{
var G__4828 = cljs.core.rest.call(null,s__4822__$1);
s__4822__$1 = G__4828;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})()));
});
/**
* return an integer for the food the ant has at a coord
*/
ants_cljs.core.ant_food_count = (function ant_food_count(coord){var ant_atom = ants_cljs.core.place.call(null,coord);var ant = cljs.core.deref.call(null,ant_atom);ants_cljs.core.logj.call(null,"count",[cljs.core.str("food count ant: "),cljs.core.str(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant))].join(''));
if(!(cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant))))
{ants_cljs.core.logj.call(null,"count",ants_cljs.core.pprint_ant_record.call(null,ant));
ants_cljs.core.logj.call(null,"count","ant has food");
return 1;
} else
{return 0;
}
});
/**
* get a count of the ants with food
*/
ants_cljs.core.get_ant_food_count = (function get_ant_food_count(){var ant_coords = ants_cljs.core.get_ant_coords.call(null);var map_result = cljs.core.map.call(null,ants_cljs.core.ant_food_count,ant_coords);ants_cljs.core.logj.call(null,"count","map-result ",map_result);
return cljs.core.reduce.call(null,cljs.core._PLUS_,map_result);
});
/**
* places initial food and ants, returns seq of ant agents
*/
ants_cljs.core.setup = (function setup(){var n__4291__auto___4841 = ants_cljs.core.food_places;var i_4842 = 0;while(true){
if((i_4842 < n__4291__auto___4841))
{var p_4843 = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,ants_cljs.core.dim),cljs.core.rand_int.call(null,ants_cljs.core.dim)], null));cljs.core.swap_BANG_.call(null,p_4843,cljs.core.assoc,new cljs.core.Keyword(null,"food","food",1017053136),cljs.core.rand_int.call(null,ants_cljs.core.food_range));
{
var G__4844 = (i_4842 + 1);
i_4842 = G__4844;
continue;
}
} else
{}
break;
}
return cljs.core.doall.call(null,(function (){var iter__4160__auto__ = (function iter__4835(s__4836){return (new cljs.core.LazySeq(null,(function (){var s__4836__$1 = s__4836;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4836__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__4836__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__4837(s__4838){return (new cljs.core.LazySeq(null,((function (s__4836__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4838__$1 = s__4838;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4838__$1);if(temp__4092__auto____$1)
{var s__4838__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4838__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__4838__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__4840 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__4839 = 0;while(true){
if((i__4839 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__4839);cljs.core.chunk_append.call(null,b__4840,(function (){cljs.core.swap_BANG_.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.assoc,new cljs.core.Keyword(null,"home","home",1017112657),true);
ants_cljs.core.logj.call(null,"setup","setup - creating ant at ",x,y);
ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
return ants_cljs.core.logj.call(null,"setup",ants_cljs.core.get_ant_coords.call(null));
})());
{
var G__4845 = (i__4839 + 1);
i__4839 = G__4845;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4840),iter__4837.call(null,cljs.core.chunk_rest.call(null,s__4838__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4840),null);
}
} else
{var y = cljs.core.first.call(null,s__4838__$2);return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.assoc,new cljs.core.Keyword(null,"home","home",1017112657),true);
ants_cljs.core.logj.call(null,"setup","setup - creating ant at ",x,y);
ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
return ants_cljs.core.logj.call(null,"setup",ants_cljs.core.get_ant_coords.call(null));
})(),iter__4837.call(null,cljs.core.rest.call(null,s__4838__$2)));
}
} else
{return null;
}
break;
}
});})(s__4836__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4836__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,ants_cljs.core.home_range));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__4835.call(null,cljs.core.rest.call(null,s__4836__$1)));
} else
{{
var G__4846 = cljs.core.rest.call(null,s__4836__$1);
s__4836__$1 = G__4846;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,ants_cljs.core.home_range);
})());
});
ants_cljs.core.setup.call(null);
/**
* returns n wrapped into range 0-b
*/
ants_cljs.core.bound = (function bound(b,n){var n__$1 = cljs.core.rem.call(null,n,b);if((n__$1 < 0))
{return (n__$1 + b);
} else
{return n__$1;
}
});
/**
* given a vector of slice sizes, returns the index of a slice given a
* random spin of a roulette wheel with compartments proportional to
* slices.
*/
ants_cljs.core.wrand = (function wrand(slices){var total = cljs.core.reduce.call(null,cljs.core._PLUS_,slices);var r = cljs.core.rand.call(null,total);var result = (function (){var i = 0;var sum = 0;while(true){
if((r < (slices.call(null,i) + sum)))
{return i;
} else
{{
var G__4847 = (i + 1);
var G__4848 = (slices.call(null,i) + sum);
i = G__4847;
sum = G__4848;
continue;
}
}
break;
}
})();return result;
});
ants_cljs.core.dir_delta = new cljs.core.PersistentArrayMap(null, 8, [0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null),4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,1], null),6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),7,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,-1], null)], null);
/**
* returns the location one step in the given dir. Note the world is a torus
*/
ants_cljs.core.delta_loc = (function delta_loc(p__4849,dir){var vec__4852 = p__4849;var x = cljs.core.nth.call(null,vec__4852,0,null);var y = cljs.core.nth.call(null,vec__4852,1,null);var vec__4853 = ants_cljs.core.dir_delta.call(null,ants_cljs.core.bound.call(null,8,dir));var dx = cljs.core.nth.call(null,vec__4853,0,null);var dy = cljs.core.nth.call(null,vec__4853,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.bound.call(null,ants_cljs.core.dim,(x + dx)),ants_cljs.core.bound.call(null,ants_cljs.core.dim,(y + dy))], null);
});
/**
* turns the ant at the location by the given amount
*/
ants_cljs.core.turn = (function turn(loc,amt){var p_4854 = ants_cljs.core.place.call(null,loc);var ant_4855 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_4854));ants_cljs.core.logj.call(null,"turn","ant: ",ant_4855);
if((ant_4855 == null))
{ants_cljs.core.logj.call(null,"turn","error: no ant at this location");
throw (new Error("turn - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
ants_cljs.core.logj.call(null,"turn","location before turn: ",p_4854);
cljs.core.swap_BANG_.call(null,p_4854,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),cljs.core.assoc.call(null,ant_4855,new cljs.core.Keyword(null,"dir","dir",1014003711),ants_cljs.core.bound.call(null,8,(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant_4855) + amt))));
ants_cljs.core.logj.call(null,"turn","location after turn: ",p_4854);
return loc;
});
/**
* ensure the actual number of ants is the number expected
*/
ants_cljs.core.validate_expected_ants_count = (function validate_expected_ants_count(){var validated = cljs.core._EQ_.call(null,(ants_cljs.core.nants_sqrt * ants_cljs.core.nants_sqrt),cljs.core.count.call(null,ants_cljs.core.get_ant_coords.call(null)));return validated;
});
ants_cljs.core.move_check_preconditions = (function move_check_preconditions(oldp,ant,p){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [!((oldp == null)),!((ant == null)),!((p == null)),!((new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) == null))], null)], null);
});
/**
* moves the ant in the direction it is heading. Must be called in a
* transaction that has verified the way is clear
*/
ants_cljs.core.move = (function move(coord){if(ants_cljs.core.validate_expected_ants_count.call(null))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-expected-ants-count","validate-expected-ants-count",-439417819,null))))].join('')));
}
var _PERCENT_ = (function (){var oldp = ants_cljs.core.place.call(null,coord);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,oldp));var newloc = ants_cljs.core.delta_loc.call(null,coord,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant));var p = ants_cljs.core.place.call(null,newloc);ants_cljs.core.logj.call(null,"move","move: ",coord," to ",newloc);
ants_cljs.core.move_check_preconditions.call(null,oldp,ant,p);
if(!((new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) == null)))
{ants_cljs.core.logj.call(null,"move","already ant in new location!");
return coord;
} else
{cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"ant","ant",1014000985),ant);
if(!((new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) == null)))
{cljs.core.swap_BANG_.call(null,oldp,cljs.core.dissoc,new cljs.core.Keyword(null,"ant","ant",1014000985));
if(cljs.core.truth_(new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,oldp))))
{} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant)))
{cljs.core.swap_BANG_.call(null,oldp,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,oldp)) + 1));
} else
{}
}
ants_cljs.core.logj.call(null,"move",[cljs.core.str("moving: "),cljs.core.str(ants_cljs.core.get_ant_coords.call(null))].join(''));
return newloc;
} else
{return null;
}
}
})();if(ants_cljs.core.validate_expected_ants_count.call(null))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-expected-ants-count","validate-expected-ants-count",-439417819,null))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.take_food = (function take_food(loc){var p = ants_cljs.core.place.call(null,loc);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p));ants_cljs.core.logj.call(null,"take-food","take-food - did I go red? ",loc);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"food","food",1017053136),(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) - 1),new cljs.core.Keyword(null,"ant","ant",1014000985),cljs.core.assoc.call(null,ant,new cljs.core.Keyword(null,"food","food",1017053136),true));
return loc;
});
ants_cljs.core.drop_food = (function drop_food(loc){var p = ants_cljs.core.place.call(null,loc);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p));ants_cljs.core.logj.call(null,"drop-food","dropping food at: ",loc," food before",new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)),ant);
ants_cljs.core.logj.call(null,"drop-food","place before ",p);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"food","food",1017053136),(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) + 1),new cljs.core.Keyword(null,"ant","ant",1014000985),cljs.core.dissoc.call(null,ant,new cljs.core.Keyword(null,"food","food",1017053136)));
ants_cljs.core.logj.call(null,"drop-food","place after ",p);
ants_cljs.core.logj.call(null,"drop-food","ant dissoc food: ",cljs.core.dissoc.call(null,ant,new cljs.core.Keyword(null,"food","food",1017053136)));
ants_cljs.core.logj.call(null,"drop-food","dropping food at: ",loc," food after",new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)),ant);
return loc;
});
/**
* returns a map of xs to their 1-based rank when sorted by keyfn
*/
ants_cljs.core.rank_by = (function rank_by(keyfn,xs){var sorted = cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.float$,keyfn),xs);return cljs.core.reduce.call(null,(function (ret,i){return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,sorted,i),(i + 1));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,sorted)));
});
/**
* the main function for the ant agent
*/
ants_cljs.core.behave = (function behave(coord){var p = ants_cljs.core.place.call(null,coord);var ant = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p));var ahead = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant)));var ahead_left = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant) - 1)));var ahead_right = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,(new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant) + 1)));var places = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ahead,ahead_left,ahead_right], null);ants_cljs.core.logj.call(null,"behave","behave: ",ant);
if(cljs.core.truth_(new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant)))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))))
{ants_cljs.core.logj.call(null,"behave","has food - at home - dropping food");
return ants_cljs.core.turn.call(null,ants_cljs.core.drop_food.call(null,coord),4);
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(ahead);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(ahead));
} else
{return and__3431__auto__;
}
})()))
{ants_cljs.core.logj.call(null,"behave","has food - home ahead and no ant");
return ants_cljs.core.move.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,(function (p1__4856_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(p1__4856_SHARP_)))
{return 1;
} else
{return 0;
}
}),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),cljs.core.deref),places));new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__4857_SHARP_){return ants_cljs.core.turn.call(null,p1__4857_SHARP_,0);
}),(function (p1__4858_SHARP_){return ants_cljs.core.turn.call(null,p1__4858_SHARP_,-1);
}),(function (p1__4859_SHARP_){return ants_cljs.core.turn.call(null,p1__4859_SHARP_,1);
})], null).call(null,ants_cljs.core.wrand.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))?0:ranks.call(null,ahead)),ranks.call(null,ahead_left),ranks.call(null,ahead_right)], null))).call(null,coord);
return ants_cljs.core.move.call(null,coord);
} else
{return null;
}
}
}
} else
{if(((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)) > 0)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)))) && (!((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant) > 0))))
{return ants_cljs.core.turn.call(null,ants_cljs.core.take_food.call(null,coord),4);
} else
{if(((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)) > 0)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"home","home",1017112657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))))
{return ants_cljs.core.move.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"food","food",1017053136),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"pher","pher",1017344023),cljs.core.deref),places));ants_cljs.core.move_vec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.move,(function (p1__4860_SHARP_){return ants_cljs.core.turn.call(null,p1__4860_SHARP_,-1);
}),(function (p1__4861_SHARP_){return ants_cljs.core.turn.call(null,p1__4861_SHARP_,1);
})], null);
ants_cljs.core.wrand_func = ants_cljs.core.wrand.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ahead)))?0:ranks.call(null,ahead)),ranks.call(null,ahead_left),ranks.call(null,ahead_right)], null));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__4862_SHARP_){return ants_cljs.core.turn.call(null,p1__4862_SHARP_,0);
}),(function (p1__4863_SHARP_){return ants_cljs.core.turn.call(null,p1__4863_SHARP_,-1);
}),(function (p1__4864_SHARP_){return ants_cljs.core.turn.call(null,p1__4864_SHARP_,1);
})], null).call(null,ants_cljs.core.wrand_func).call(null,coord);
return ants_cljs.core.move.call(null,coord);
} else
{return null;
}
}
}
}
});
/**
* causes all the pheromones to evaporate a bit
*/
ants_cljs.core.evaporate = (function evaporate(){return cljs.core.dorun.call(null,(function (){var iter__4160__auto__ = (function iter__4871(s__4872){return (new cljs.core.LazySeq(null,(function (){var s__4872__$1 = s__4872;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4872__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__4872__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__4873(s__4874){return (new cljs.core.LazySeq(null,((function (s__4872__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4874__$1 = s__4874;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4874__$1);if(temp__4092__auto____$1)
{var s__4874__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4874__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__4874__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__4876 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__4875 = 0;while(true){
if((i__4875 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__4875);cljs.core.chunk_append.call(null,b__4876,(function (){var p = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));return cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(ants_cljs.core.evap_rate * new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));
})());
{
var G__4877 = (i__4875 + 1);
i__4875 = G__4877;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4876),iter__4873.call(null,cljs.core.chunk_rest.call(null,s__4874__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4876),null);
}
} else
{var y = cljs.core.first.call(null,s__4874__$2);return cljs.core.cons.call(null,(function (){var p = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));return cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pher","pher",1017344023),(ants_cljs.core.evap_rate * new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p))));
})(),iter__4873.call(null,cljs.core.rest.call(null,s__4874__$2)));
}
} else
{return null;
}
break;
}
});})(s__4872__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4872__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__4871.call(null,cljs.core.rest.call(null,s__4872__$1)));
} else
{{
var G__4878 = cljs.core.rest.call(null,s__4872__$1);
s__4872__$1 = G__4878;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})());
});
ants_cljs.core.scale = 5;
ants_cljs.core.fill_cell = (function fill_cell(ctx,x,y,colour){var G__4880_4881 = ctx;G__4880_4881.beginPath();
G__4880_4881.rect((x * ants_cljs.core.scale),(y * ants_cljs.core.scale),ants_cljs.core.scale,ants_cljs.core.scale);
ctx.fillStyle = colour;
return ctx.fill();
});
ants_cljs.core.render_ant = (function render_ant(ant,ctx,x,y){var vec__4884 = new cljs.core.PersistentArrayMap(null, 8, [0,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0,2,4], null),1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,0,0,4], null),2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,2,0,2], null),3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4,0,0], null),4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,4,2,0], null),5,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,4,4,0], null),6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2,4,2], null),7,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,4,4], null)], null).call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ant));var hx = cljs.core.nth.call(null,vec__4884,0,null);var hy = cljs.core.nth.call(null,vec__4884,1,null);var tx = cljs.core.nth.call(null,vec__4884,2,null);var ty = cljs.core.nth.call(null,vec__4884,3,null);ctx.beginPath();
if((!((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant) == null))) && (!(cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(ant)))))
{ctx.strokeStyle = "#ff0000";
ants_cljs.core.logj.call(null,"render-ant","drawing red");
} else
{ctx.strokeStyle = "black";
}
var G__4885 = ctx;G__4885.moveTo((hx + (x * ants_cljs.core.scale)),(hy + (y * ants_cljs.core.scale)));
G__4885.lineTo((tx + (x * ants_cljs.core.scale)),(ty + (y * ants_cljs.core.scale)));
G__4885.stroke();
return G__4885;
});
ants_cljs.core.render_place = (function render_place(ctx,p,x,y){if((new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(p) > 0))
{ants_cljs.core.fill_cell.call(null,ctx,x,y,[cljs.core.str("rgba(0,255,0,"),cljs.core.str((function (){var x__3757__auto__ = 1;var y__3758__auto__ = (new cljs.core.Keyword(null,"pher","pher",1017344023).cljs$core$IFn$_invoke$arity$1(p) / ants_cljs.core.pher_scale);return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})()),cljs.core.str(")")].join(''));
} else
{}
if((new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(p) > 0))
{ants_cljs.core.fill_cell.call(null,ctx,x,y,[cljs.core.str("rgba(255,0,0,"),cljs.core.str((function (){var x__3757__auto__ = 1;var y__3758__auto__ = (new cljs.core.Keyword(null,"food","food",1017053136).cljs$core$IFn$_invoke$arity$1(p) / ants_cljs.core.food_scale);return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})()),cljs.core.str(")")].join(''));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(p)))
{return ants_cljs.core.render_ant.call(null,new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(p),ctx,x,y);
} else
{return null;
}
});
ants_cljs.core.setup_context = (function setup_context(ctx){ctx.width = (ants_cljs.core.dim * ants_cljs.core.scale);
ctx.height = (ants_cljs.core.dim * ants_cljs.core.scale);
var G__4887_4888 = ctx;G__4887_4888.beginPath();
G__4887_4888.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_outside_box = (function draw_outside_box(ctx){var G__4890_4891 = ctx;G__4890_4891.beginPath();
G__4890_4891.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_home_box = (function draw_home_box(ctx){var G__4893_4894 = ctx;G__4893_4894.beginPath();
G__4893_4894.rect((ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt));
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
return ctx.stroke();
});
ants_cljs.core.render = (function render(ctx){var v = cljs.core.apply.call(null,cljs.core.vector,(function (){var iter__4160__auto__ = (function iter__4907(s__4908){return (new cljs.core.LazySeq(null,(function (){var s__4908__$1 = s__4908;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4908__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__4908__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__4909(s__4910){return (new cljs.core.LazySeq(null,((function (s__4908__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4910__$1 = s__4910;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4910__$1);if(temp__4092__auto____$1)
{var s__4910__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4910__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__4910__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__4912 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__4911 = 0;while(true){
if((i__4911 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__4911);cljs.core.chunk_append.call(null,b__4912,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
{
var G__4919 = (i__4911 + 1);
i__4911 = G__4919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4912),iter__4909.call(null,cljs.core.chunk_rest.call(null,s__4910__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4912),null);
}
} else
{var y = cljs.core.first.call(null,s__4910__$2);return cljs.core.cons.call(null,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),iter__4909.call(null,cljs.core.rest.call(null,s__4910__$2)));
}
} else
{return null;
}
break;
}
});})(s__4908__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4908__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__4907.call(null,cljs.core.rest.call(null,s__4908__$1)));
} else
{{
var G__4920 = cljs.core.rest.call(null,s__4908__$1);
s__4908__$1 = G__4920;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})());ants_cljs.core.setup_context.call(null,ctx);
cljs.core.dorun.call(null,(function (){var iter__4160__auto__ = (function iter__4913(s__4914){return (new cljs.core.LazySeq(null,(function (){var s__4914__$1 = s__4914;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4914__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__4914__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__4915(s__4916){return (new cljs.core.LazySeq(null,((function (s__4914__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4916__$1 = s__4916;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4916__$1);if(temp__4092__auto____$1)
{var s__4916__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4916__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__4916__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__4918 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__4917 = 0;while(true){
if((i__4917 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__4917);cljs.core.chunk_append.call(null,b__4918,ants_cljs.core.render_place.call(null,ctx,v.call(null,((x * ants_cljs.core.dim) + y)),x,y));
{
var G__4921 = (i__4917 + 1);
i__4917 = G__4921;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4918),iter__4915.call(null,cljs.core.chunk_rest.call(null,s__4916__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4918),null);
}
} else
{var y = cljs.core.first.call(null,s__4916__$2);return cljs.core.cons.call(null,ants_cljs.core.render_place.call(null,ctx,v.call(null,((x * ants_cljs.core.dim) + y)),x,y),iter__4915.call(null,cljs.core.rest.call(null,s__4916__$2)));
}
} else
{return null;
}
break;
}
});})(s__4914__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4914__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__4913.call(null,cljs.core.rest.call(null,s__4914__$1)));
} else
{{
var G__4922 = cljs.core.rest.call(null,s__4914__$1);
s__4914__$1 = G__4922;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
})());
ants_cljs.core.draw_outside_box.call(null,ctx);
return ants_cljs.core.draw_home_box.call(null,ctx);
});
/**
* Don't tell anyone this is actually just document.getElementById().
*/
ants_cljs.core.get_canvas = (function get_canvas(id){return document.getElementById(id);
});
ants_cljs.core.canvs = ants_cljs.core.get_canvas.call(null,"antcanvas");
ants_cljs.core.context = ants_cljs.core.canvs.getContext("2d");
ants_cljs.core.map_coords = (function map_coords(){var iter__4160__auto__ = (function iter__4929(s__4930){return (new cljs.core.LazySeq(null,(function (){var s__4930__$1 = s__4930;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4930__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var y = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__4930__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function iter__4931(s__4932){return (new cljs.core.LazySeq(null,((function (s__4930__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4932__$1 = s__4932;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4932__$1);if(temp__4092__auto____$1)
{var s__4932__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4932__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__4932__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__4934 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__4933 = 0;while(true){
if((i__4933 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__4933);cljs.core.chunk_append.call(null,b__4934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__4935 = (i__4933 + 1);
i__4933 = G__4935;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4934),iter__4931.call(null,cljs.core.chunk_rest.call(null,s__4932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4934),null);
}
} else
{var x = cljs.core.first.call(null,s__4932__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__4931.call(null,cljs.core.rest.call(null,s__4932__$2)));
}
} else
{return null;
}
break;
}
});})(s__4930__$1,y,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4930__$1,y,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__4929.call(null,cljs.core.rest.call(null,s__4930__$1)));
} else
{{
var G__4936 = cljs.core.rest.call(null,s__4930__$1);
s__4930__$1 = G__4936;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
});
ants_cljs.core.behave_ants = (function behave_ants(){var ant_coords = ants_cljs.core.get_ant_coords.call(null);ants_cljs.core.logj.call(null,"move",[cljs.core.str("get-ants-coords: "),cljs.core.str(ant_coords)].join(''));
ants_cljs.core.logj.call(null,"count",[cljs.core.str("get-ant-food-count "),cljs.core.str(ants_cljs.core.get_ant_food_count.call(null))].join(''));
return cljs.core.dorun.call(null,(function (){var iter__4160__auto__ = (function iter__4941(s__4942){return (new cljs.core.LazySeq(null,(function (){var s__4942__$1 = s__4942;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4942__$1);if(temp__4092__auto__)
{var s__4942__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4942__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__4942__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__4944 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__4943 = 0;while(true){
if((i__4943 < size__4159__auto__))
{var coord = cljs.core._nth.call(null,c__4158__auto__,i__4943);cljs.core.chunk_append.call(null,b__4944,(function (){var p_4945 = ants_cljs.core.place.call(null,coord);var ant_4946 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_4945));if((p_4945 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil p in behave-ants");
throw (new Error("behave-ants - no p at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
if((ant_4946 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil ant in behave-ants");
throw (new Error("behave-ants - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
return ants_cljs.core.behave.call(null,coord);
})());
{
var G__4947 = (i__4943 + 1);
i__4943 = G__4947;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4944),iter__4941.call(null,cljs.core.chunk_rest.call(null,s__4942__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4944),null);
}
} else
{var coord = cljs.core.first.call(null,s__4942__$2);return cljs.core.cons.call(null,(function (){var p_4948 = ants_cljs.core.place.call(null,coord);var ant_4949 = new cljs.core.Keyword(null,"ant","ant",1014000985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p_4948));if((p_4948 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil p in behave-ants");
throw (new Error("behave-ants - no p at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
if((ant_4949 == null))
{ants_cljs.core.logj.call(null,"behave-ants","nil ant in behave-ants");
throw (new Error("behave-ants - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
return ants_cljs.core.behave.call(null,coord);
})(),iter__4941.call(null,cljs.core.rest.call(null,s__4942__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,ant_coords);
})());
});
ants_cljs.core.send_off_animation = (function send_off_animation(){return ants_cljs.core.render.call(null,ants_cljs.core.context);
});
ants_cljs.core.run_loop = (function run_loop(){ants_cljs.core.send_off_animation.call(null);
ants_cljs.core.behave_ants.call(null);
return ants_cljs.core.evaporate.call(null);
});
ants_cljs.core.animate = (function animate(){if(cljs.core.truth_(ants_cljs.core.is_running))
{window.requestAnimationFrame(animate);
} else
{}
return ants_cljs.core.run_loop.call(null);
});
ants_cljs.core.animate.call(null);
goog.events.listen(goog.dom.getElement("clickMe"),"click",(function (){ants_cljs.core.do_pause.call(null);
return ants_cljs.core.animate.call(null);
}));

//# sourceMappingURL=core.js.map