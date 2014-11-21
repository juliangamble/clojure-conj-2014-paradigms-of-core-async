// Compiled by ClojureScript 0.0-2173
goog.provide('ants_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
ants_cljs.core.dim = 80;
ants_cljs.core.nants_sqrt = 7;
ants_cljs.core.food_places = 35;
ants_cljs.core.food_range = 100;
ants_cljs.core.pher_scale = 20.0;
ants_cljs.core.food_scale = 30.0;
ants_cljs.core.evap_rate = 0.99;
ants_cljs.core.animation_sleep_ms = 100;
ants_cljs.core.ant_sleep_ms = 40;
ants_cljs.core.evap_sleep_ms = 1000;
ants_cljs.core.is_running = false;
ants_cljs.core.chan_timeout_duration = 10;
ants_cljs.core.do_pause = (function do_pause(){if(cljs.core.truth_(ants_cljs.core.is_running))
{return ants_cljs.core.is_running = false;
} else
{return ants_cljs.core.is_running = true;
}
});
ants_cljs.core.cell = (function cell(food,pher,ant,home){if(!((food == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"food","food",-1637382633,null)))))].join('')));
}
if(!((pher == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"pher","pher",-1637091746,null)))))].join('')));
}
if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(!((home == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"home","home",-1637323112,null)))))].join('')));
}
if((cljs.core._EQ_.call(null,false,ant)) || (cljs.core._EQ_.call(null,3,ant.length)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,new cljs.core.Symbol(null,"ant","ant",-1640434784,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null))))))].join('')));
}
if(typeof food === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"food","food",-1637382633,null))))].join('')));
}
if(typeof pher === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"pher","pher",-1637091746,null))))].join('')));
}
var cell__$1 = [null,null,null,null];(cell__$1[0] = food);
(cell__$1[1] = pher);
(cell__$1[2] = ant);
(cell__$1[3] = home);
return cell__$1;
});
ants_cljs.core.get_cell_food = (function get_cell_food(cell){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
var _PERCENT_ = (cell[0]);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
if(typeof _PERCENT_ === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"%","%",-1640531490,null))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.get_cell_pher = (function get_cell_pher(cell){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
var _PERCENT_ = (cell[1]);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
if(typeof _PERCENT_ === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"%","%",-1640531490,null))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.get_cell_ant = (function get_cell_ant(cell){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
var _PERCENT_ = (cell[2]);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.get_cell_home = (function get_cell_home(cell){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
var _PERCENT_ = (cell[3]);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.set_cell_food = (function set_cell_food(cell,food){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(!((food == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"food","food",-1637382633,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(typeof food === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"food","food",-1637382633,null))))].join('')));
}
(cell[0] = food);
return cell;
});
ants_cljs.core.set_cell_pher = (function set_cell_pher(cell,pher){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(!((pher == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"pher","pher",-1637091746,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(typeof pher === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"pher","pher",-1637091746,null))))].join('')));
}
(cell[1] = pher);
return cell;
});
ants_cljs.core.set_cell_ant = (function set_cell_ant(cell,ant){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if((cljs.core._EQ_.call(null,false,ant)) || (cljs.core._EQ_.call(null,3,ant.length)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,new cljs.core.Symbol(null,"ant","ant",-1640434784,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null))))))].join('')));
}
(cell[2] = ant);
return cell;
});
ants_cljs.core.set_cell_home = (function set_cell_home(cell,home){if(!((cell == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
if(!((home == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"home","home",-1637323112,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,4,cell.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"cell","cell",-1637481701,null)))))].join('')));
}
(cell[3] = home);
return cell;
});
ants_cljs.core.world = cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (_){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (___$1){return cljs.core.atom.call(null,ants_cljs.core.cell.call(null,0,0,false,false));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
}),cljs.core.range.call(null,ants_cljs.core.dim)));
ants_cljs.core.make_world = (function make_world(w,h){var world = (new Array(h));var y_14697 = 0;while(true){
if((y_14697 < h))
{var row_14698 = cljs.core.int_array.call(null,w);var x_14699 = 0;while(true){
if((x_14699 < w))
{(row_14698[x_14699] = cljs.core.atom.call(null,ants_cljs.core.cell.call(null,0,0,false,false)));
{
var G__14700 = (x_14699 + 1);
x_14699 = G__14700;
continue;
}
} else
{}
break;
}
(world[y_14697] = cljs.core.int_array.call(null,row_14698));
{
var G__14701 = (y_14697 + 1);
y_14697 = G__14701;
continue;
}
} else
{}
break;
}
return world;
});
ants_cljs.core.world = ants_cljs.core.make_world.call(null,ants_cljs.core.dim,ants_cljs.core.dim);
ants_cljs.core.place = (function place(p__14702){var vec__14704 = p__14702;var x = cljs.core.nth.call(null,vec__14704,0,null);var y = cljs.core.nth.call(null,vec__14704,1,null);if(!((new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null) == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-1640531407,null),new cljs.core.Symbol(null,"y","y",-1640531406,null)], null)))))].join('')));
}
var _PERCENT_ = cljs.core.nth.call(null,cljs.core.nth.call(null,ants_cljs.core.world,x),y);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.place = (function place(p__14705){var vec__14707 = p__14705;var x = cljs.core.nth.call(null,vec__14707,0,null);var y = cljs.core.nth.call(null,vec__14707,1,null);return (ants_cljs.core.world[x][y]);
});
/**
* make an array representing an ant
*/
ants_cljs.core.ant = (function ant(dir,id,food){if(!((dir == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"dir","dir",-1640432058,null)))))].join('')));
}
if(!((id == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"id","id",-1640528172,null)))))].join('')));
}
if(!((food == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"food","food",-1637382633,null)))))].join('')));
}
if(typeof dir === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"dir","dir",-1640432058,null))))].join('')));
}
if(typeof food === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"food","food",-1637382633,null))))].join('')));
}
var ant__$1 = [null,null,null];(ant__$1[0] = dir);
(ant__$1[1] = id);
(ant__$1[2] = food);
return ant__$1;
});
ants_cljs.core.get_ant_dir = (function get_ant_dir(ant){if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,3,ant.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
var _PERCENT_ = (ant[0]);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.get_ant_id = (function get_ant_id(ant){if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,3,ant.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
var _PERCENT_ = (ant[1]);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.get_ant_food = (function get_ant_food(ant){if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,3,ant.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
var _PERCENT_ = (ant[2]);if(!((_PERCENT_ == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)))))].join('')));
}
if(typeof _PERCENT_ === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"%","%",-1640531490,null))))].join('')));
}
return _PERCENT_;
});
ants_cljs.core.set_ant_dir = (function set_ant_dir(ant,dir){if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(!((dir == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"dir","dir",-1640432058,null)))))].join('')));
}
if(typeof dir === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"dir","dir",-1640432058,null))))].join('')));
}
if(cljs.core._EQ_.call(null,3,ant.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
(ant[0] = dir);
return ant;
});
ants_cljs.core.set_ant_id = (function set_ant_id(ant,id){if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(!((id == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"id","id",-1640528172,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,3,ant.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
(ant[1] = id);
return ant;
});
ants_cljs.core.set_ant_food = (function set_ant_food(ant,food){if(!((food == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"food","food",-1637382633,null)))))].join('')));
}
if(typeof food === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"food","food",-1637382633,null))))].join('')));
}
if(!((ant == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
if(cljs.core._EQ_.call(null,3,ant.length))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"alength","alength",1736583232,null),new cljs.core.Symbol(null,"ant","ant",-1640434784,null)))))].join('')));
}
(ant[2] = food);
return ant;
});
/**
* create an ant at the location, returning an ant agent on the location
*/
ants_cljs.core.create_ant = (function create_ant(loc,dir,id){var p = ants_cljs.core.place.call(null,loc);var a = ants_cljs.core.ant.call(null,dir,id,0);ants_cljs.core.set_cell_ant.call(null,cljs.core.deref.call(null,p),a);
return loc;
});
ants_cljs.core.home_off = (ants_cljs.core.dim / 4);
ants_cljs.core.home_range = cljs.core.range.call(null,ants_cljs.core.home_off,(ants_cljs.core.nants_sqrt + ants_cljs.core.home_off));
/**
* get coordinates of the locations of the ants from the main map
*/
ants_cljs.core.get_ant_coords = (function get_ant_coords(){var _PERCENT_ = (function (){var result = [(ants_cljs.core.nants_sqrt * ants_cljs.core.nants_sqrt)];var counter = [null];(counter[0] = 0);
var x_14708 = 0;while(true){
if((x_14708 < ants_cljs.core.dim))
{var y_14709 = 0;while(true){
if((y_14709 < ants_cljs.core.dim))
{var p_14710 = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_14708,y_14709], null));if(cljs.core.truth_(ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p_14710))))
{(result[counter] = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_14708,y_14709], null));
(counter[0] = ((counter[0]) + 1));
} else
{}
{
var G__14711 = (y_14709 + 1);
y_14709 = G__14711;
continue;
}
} else
{}
break;
}
{
var G__14712 = (x_14708 + 1);
x_14708 = G__14712;
continue;
}
} else
{}
break;
}
return cljs.core.js__GT_clj.call(null,result);
})();if(cljs.core.coll_QMARK_.call(null,_PERCENT_))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"coll?","coll?",-1545688948,null),new cljs.core.Symbol(null,"%","%",-1640531490,null))))].join('')));
}
return _PERCENT_;
});
/**
* return an integer for the food the ant has at a coord
*/
ants_cljs.core.ant_food_count = (function ant_food_count(coord){var p = ants_cljs.core.place.call(null,coord);var ant = ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p));if(!(cljs.core._EQ_.call(null,0,ants_cljs.core.get_ant_food.call(null,ant))))
{return 1;
} else
{return 0;
}
});
/**
* get a count of the ants with food
*/
ants_cljs.core.get_ant_food_count = (function get_ant_food_count(){var ant_coords = ants_cljs.core.get_ant_coords.call(null);var map_result = cljs.core.map.call(null,ants_cljs.core.ant_food_count,ant_coords);return cljs.core.reduce.call(null,cljs.core._PLUS_,map_result);
});
/**
* places initial food and ants, returns seq of ant agents
*/
ants_cljs.core.setup = (function setup(){var n__4323__auto___14725 = ants_cljs.core.food_places;var i_14726 = 0;while(true){
if((i_14726 < n__4323__auto___14725))
{var p_14727 = ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,ants_cljs.core.dim),cljs.core.rand_int.call(null,ants_cljs.core.dim)], null));ants_cljs.core.set_cell_food.call(null,cljs.core.deref.call(null,p_14727),cljs.core.rand_int.call(null,ants_cljs.core.food_range));
{
var G__14728 = (i_14726 + 1);
i_14726 = G__14728;
continue;
}
} else
{}
break;
}
return cljs.core.doall.call(null,(function (){var iter__4192__auto__ = (function iter__14719(s__14720){return (new cljs.core.LazySeq(null,(function (){var s__14720__$1 = s__14720;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14720__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4188__auto__ = ((function (s__14720__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__14721(s__14722){return (new cljs.core.LazySeq(null,((function (s__14720__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14722__$1 = s__14722;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14722__$1);if(temp__4092__auto____$1)
{var s__14722__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14722__$2))
{var c__4190__auto__ = cljs.core.chunk_first.call(null,s__14722__$2);var size__4191__auto__ = cljs.core.count.call(null,c__4190__auto__);var b__14724 = cljs.core.chunk_buffer.call(null,size__4191__auto__);if((function (){var i__14723 = 0;while(true){
if((i__14723 < size__4191__auto__))
{var y = cljs.core._nth.call(null,c__4190__auto__,i__14723);cljs.core.chunk_append.call(null,b__14724,(function (){ants_cljs.core.set_cell_home.call(null,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),true);
return ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
})());
{
var G__14729 = (i__14723 + 1);
i__14723 = G__14729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14724),iter__14721.call(null,cljs.core.chunk_rest.call(null,s__14722__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14724),null);
}
} else
{var y = cljs.core.first.call(null,s__14722__$2);return cljs.core.cons.call(null,(function (){ants_cljs.core.set_cell_home.call(null,cljs.core.deref.call(null,ants_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),true);
return ants_cljs.core.create_ant.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,8),[cljs.core.str(x),cljs.core.str("-"),cljs.core.str(y)].join(''));
})(),iter__14721.call(null,cljs.core.rest.call(null,s__14722__$2)));
}
} else
{return null;
}
break;
}
});})(s__14720__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14720__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4189__auto__ = cljs.core.seq.call(null,iterys__4188__auto__.call(null,ants_cljs.core.home_range));if(fs__4189__auto__)
{return cljs.core.concat.call(null,fs__4189__auto__,iter__14719.call(null,cljs.core.rest.call(null,s__14720__$1)));
} else
{{
var G__14730 = cljs.core.rest.call(null,s__14720__$1);
s__14720__$1 = G__14730;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4192__auto__.call(null,ants_cljs.core.home_range);
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
var G__14731 = (i + 1);
var G__14732 = (slices.call(null,i) + sum);
i = G__14731;
sum = G__14732;
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
ants_cljs.core.delta_loc = (function delta_loc(p__14733,dir){var vec__14736 = p__14733;var x = cljs.core.nth.call(null,vec__14736,0,null);var y = cljs.core.nth.call(null,vec__14736,1,null);var vec__14737 = ants_cljs.core.dir_delta.call(null,ants_cljs.core.bound.call(null,8,dir));var dx = cljs.core.nth.call(null,vec__14737,0,null);var dy = cljs.core.nth.call(null,vec__14737,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.bound.call(null,ants_cljs.core.dim,(x + dx)),ants_cljs.core.bound.call(null,ants_cljs.core.dim,(y + dy))], null);
});
/**
* turns the ant at the location by the given amount
*/
ants_cljs.core.turn = (function turn(loc,amt){var p_14738 = ants_cljs.core.place.call(null,loc);var ant_14739 = ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p_14738));if((ant_14739 == null))
{throw (new Error("turn - no ant at this location"));
ants_cljs.core.do_pause.call(null);
} else
{}
ants_cljs.core.set_cell_ant.call(null,cljs.core.deref.call(null,p_14738),ants_cljs.core.set_ant_dir.call(null,ant_14739,ants_cljs.core.bound.call(null,8,(ants_cljs.core.get_ant_dir.call(null,ant_14739) + amt))));
return loc;
});
/**
* ensure the actual number of ants is the number expected
*/
ants_cljs.core.validate_expected_ants_count = (function validate_expected_ants_count(){var validated = cljs.core._EQ_.call(null,(ants_cljs.core.nants_sqrt * ants_cljs.core.nants_sqrt),cljs.core.count.call(null,ants_cljs.core.get_ant_coords.call(null)));return validated;
});
/**
* moves the ant in the direction it is heading. Must be called in a
* transaction that has verified the way is clear
*/
ants_cljs.core.move = (function move(coord){var oldp = ants_cljs.core.place.call(null,coord);var ant = ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,oldp));var newloc = ants_cljs.core.delta_loc.call(null,coord,ants_cljs.core.get_ant_dir.call(null,ant));var p = ants_cljs.core.place.call(null,newloc);if(!(cljs.core._EQ_.call(null,false,ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p)))))
{return coord;
} else
{ants_cljs.core.set_cell_ant.call(null,cljs.core.deref.call(null,p),ant);
if(!((ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p)) == null)))
{ants_cljs.core.set_cell_ant.call(null,cljs.core.deref.call(null,oldp),false);
if(cljs.core.truth_(ants_cljs.core.get_cell_home.call(null,cljs.core.deref.call(null,oldp))))
{} else
{if(cljs.core.truth_(ants_cljs.core.get_ant_food.call(null,ant)))
{ants_cljs.core.set_cell_pher.call(null,cljs.core.deref.call(null,oldp),(ants_cljs.core.get_cell_pher.call(null,cljs.core.deref.call(null,oldp)) + 1));
} else
{}
}
return newloc;
} else
{return null;
}
}
});
ants_cljs.core.take_food = (function take_food(loc){var p = ants_cljs.core.place.call(null,loc);var ant = ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p));ants_cljs.core.set_cell_food.call(null,cljs.core.deref.call(null,p),(ants_cljs.core.get_cell_food.call(null,cljs.core.deref.call(null,p)) - 1));
ants_cljs.core.set_cell_ant.call(null,cljs.core.deref.call(null,p),ants_cljs.core.set_ant_food.call(null,ant,1));
return loc;
});
ants_cljs.core.drop_food = (function drop_food(loc){var p = ants_cljs.core.place.call(null,loc);var ant = ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p));ants_cljs.core.set_cell_food.call(null,cljs.core.deref.call(null,p),(ants_cljs.core.get_cell_food.call(null,cljs.core.deref.call(null,p)) + 1));
ants_cljs.core.set_cell_ant.call(null,cljs.core.deref.call(null,p),ants_cljs.core.set_ant_food.call(null,ant,0));
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
ants_cljs.core.behave = (function behave(coord){var p = ants_cljs.core.place.call(null,coord);var ant = ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,p));var ahead = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,ants_cljs.core.get_ant_dir.call(null,ant)));var ahead_left = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,(ants_cljs.core.get_ant_dir.call(null,ant) - 1)));var ahead_right = ants_cljs.core.place.call(null,ants_cljs.core.delta_loc.call(null,coord,(ants_cljs.core.get_ant_dir.call(null,ant) + 1)));var places = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ahead,ahead_left,ahead_right], null);if((ants_cljs.core.get_ant_food.call(null,ant) > 0))
{if(cljs.core.truth_(ants_cljs.core.get_cell_home.call(null,cljs.core.deref.call(null,p))))
{return ants_cljs.core.turn.call(null,ants_cljs.core.drop_food.call(null,coord),4);
} else
{if(cljs.core.truth_((function (){var and__3463__auto__ = ants_cljs.core.get_cell_home.call(null,cljs.core.deref.call(null,ahead));if(cljs.core.truth_(and__3463__auto__))
{return cljs.core.not.call(null,ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,ahead)));
} else
{return and__3463__auto__;
}
})()))
{return ants_cljs.core.move.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,(function (p1__14740_SHARP_){if(cljs.core.truth_(ants_cljs.core.get_cell_home.call(null,p1__14740_SHARP_)))
{return 1;
} else
{return 0;
}
}),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,(function (p1__14741_SHARP_){return ants_cljs.core.get_cell_pher.call(null,p1__14741_SHARP_);
}),cljs.core.deref),places));new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__14742_SHARP_){return ants_cljs.core.turn.call(null,p1__14742_SHARP_,0);
}),(function (p1__14743_SHARP_){return ants_cljs.core.turn.call(null,p1__14743_SHARP_,-1);
}),(function (p1__14744_SHARP_){return ants_cljs.core.turn.call(null,p1__14744_SHARP_,1);
})], null).call(null,ants_cljs.core.wrand.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,ahead)))?0:ranks.call(null,ahead)),ranks.call(null,ahead_left),ranks.call(null,ahead_right)], null))).call(null,coord);
return ants_cljs.core.move.call(null,coord);
} else
{return null;
}
}
}
} else
{if(((ants_cljs.core.get_cell_food.call(null,cljs.core.deref.call(null,p)) > 0)) && (cljs.core.not.call(null,ants_cljs.core.get_cell_home.call(null,cljs.core.deref.call(null,p)))) && (!((ants_cljs.core.get_ant_food.call(null,ant) > 0))))
{return ants_cljs.core.turn.call(null,ants_cljs.core.take_food.call(null,coord),4);
} else
{if(((ants_cljs.core.get_cell_food.call(null,cljs.core.deref.call(null,ahead)) > 0)) && (cljs.core.not.call(null,ants_cljs.core.get_cell_home.call(null,cljs.core.deref.call(null,ahead)))) && (cljs.core.not.call(null,ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,ahead)))))
{return ants_cljs.core.move.call(null,coord);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ranks = cljs.core.merge_with.call(null,cljs.core._PLUS_,ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,(function (p1__14745_SHARP_){return ants_cljs.core.get_cell_food.call(null,p1__14745_SHARP_);
}),cljs.core.deref),places),ants_cljs.core.rank_by.call(null,cljs.core.comp.call(null,(function (p1__14746_SHARP_){return ants_cljs.core.get_cell_pher.call(null,p1__14746_SHARP_);
}),cljs.core.deref),places));ants_cljs.core.move_vec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ants_cljs.core.move,(function (p1__14747_SHARP_){return ants_cljs.core.turn.call(null,p1__14747_SHARP_,-1);
}),(function (p1__14748_SHARP_){return ants_cljs.core.turn.call(null,p1__14748_SHARP_,1);
})], null);
ants_cljs.core.wrand_func = ants_cljs.core.wrand.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(ants_cljs.core.get_cell_ant.call(null,cljs.core.deref.call(null,ahead)))?0:ranks.call(null,ahead)),ranks.call(null,ahead_left),ranks.call(null,ahead_right)], null));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__14749_SHARP_){return ants_cljs.core.turn.call(null,p1__14749_SHARP_,0);
}),(function (p1__14750_SHARP_){return ants_cljs.core.turn.call(null,p1__14750_SHARP_,-1);
}),(function (p1__14751_SHARP_){return ants_cljs.core.turn.call(null,p1__14751_SHARP_,1);
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
ants_cljs.core.evaporate = (function evaporate(){var c__5611__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_14887){var state_val_14888 = (state_14887[1]);if((state_val_14888 === 1))
{var state_14887__$1 = state_14887;var statearr_14889_14924 = state_14887__$1;(statearr_14889_14924[2] = null);
(statearr_14889_14924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 2))
{var state_14887__$1 = state_14887;if(true)
{var statearr_14890_14925 = state_14887__$1;(statearr_14890_14925[1] = 4);
} else
{var statearr_14891_14926 = state_14887__$1;(statearr_14891_14926[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 3))
{var inst_14885 = (state_14887[2]);var state_14887__$1 = state_14887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14887__$1,inst_14885);
} else
{if((state_val_14888 === 4))
{var state_14887__$1 = state_14887;if(cljs.core.truth_(ants_cljs.core.is_running))
{var statearr_14892_14927 = state_14887__$1;(statearr_14892_14927[1] = 7);
} else
{var statearr_14893_14928 = state_14887__$1;(statearr_14893_14928[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 5))
{var state_14887__$1 = state_14887;var statearr_14894_14929 = state_14887__$1;(statearr_14894_14929[2] = null);
(statearr_14894_14929[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 6))
{var inst_14883 = (state_14887[2]);var state_14887__$1 = state_14887;var statearr_14895_14930 = state_14887__$1;(statearr_14895_14930[2] = inst_14883);
(statearr_14895_14930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 7))
{var inst_14841 = (new Date());var inst_14842 = inst_14841.getTime();var inst_14843 = 0;var state_14887__$1 = (function (){var statearr_14896 = state_14887;(statearr_14896[7] = inst_14843);
(statearr_14896[8] = inst_14842);
return statearr_14896;
})();var statearr_14897_14931 = state_14887__$1;(statearr_14897_14931[2] = null);
(statearr_14897_14931[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 8))
{var state_14887__$1 = state_14887;var statearr_14898_14932 = state_14887__$1;(statearr_14898_14932[2] = null);
(statearr_14898_14932[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 9))
{var inst_14876 = (state_14887[2]);var inst_14877 = cljs.core.async.timeout.call(null,ants_cljs.core.chan_timeout_duration);var state_14887__$1 = (function (){var statearr_14899 = state_14887;(statearr_14899[9] = inst_14876);
return statearr_14899;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14887__$1,20,inst_14877);
} else
{if((state_val_14888 === 10))
{var inst_14843 = (state_14887[7]);var inst_14845 = (inst_14843 < ants_cljs.core.dim);var state_14887__$1 = state_14887;if(cljs.core.truth_(inst_14845))
{var statearr_14900_14933 = state_14887__$1;(statearr_14900_14933[1] = 12);
} else
{var statearr_14901_14934 = state_14887__$1;(statearr_14901_14934[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 11))
{var inst_14872 = (state_14887[2]);var inst_14873 = cljs.core.dorun.call(null,inst_14872);var state_14887__$1 = state_14887;var statearr_14902_14935 = state_14887__$1;(statearr_14902_14935[2] = inst_14873);
(statearr_14902_14935[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 12))
{var inst_14847 = 0;var state_14887__$1 = (function (){var statearr_14903 = state_14887;(statearr_14903[10] = inst_14847);
return statearr_14903;
})();var statearr_14904_14936 = state_14887__$1;(statearr_14904_14936[2] = null);
(statearr_14904_14936[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 13))
{var state_14887__$1 = state_14887;var statearr_14905_14937 = state_14887__$1;(statearr_14905_14937[2] = null);
(statearr_14905_14937[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 14))
{var inst_14870 = (state_14887[2]);var state_14887__$1 = state_14887;var statearr_14906_14938 = state_14887__$1;(statearr_14906_14938[2] = inst_14870);
(statearr_14906_14938[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 15))
{var inst_14847 = (state_14887[10]);var inst_14849 = (inst_14847 < ants_cljs.core.dim);var state_14887__$1 = state_14887;if(cljs.core.truth_(inst_14849))
{var statearr_14907_14939 = state_14887__$1;(statearr_14907_14939[1] = 17);
} else
{var statearr_14908_14940 = state_14887__$1;(statearr_14908_14940[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 16))
{var inst_14843 = (state_14887[7]);var inst_14865 = (state_14887[2]);var inst_14866 = (inst_14843 + 1);var inst_14843__$1 = inst_14866;var state_14887__$1 = (function (){var statearr_14909 = state_14887;(statearr_14909[7] = inst_14843__$1);
(statearr_14909[11] = inst_14865);
return statearr_14909;
})();var statearr_14910_14941 = state_14887__$1;(statearr_14910_14941[2] = null);
(statearr_14910_14941[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 17))
{var inst_14847 = (state_14887[10]);var inst_14843 = (state_14887[7]);var inst_14851 = [inst_14843,inst_14847];var inst_14852 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14851,null));var inst_14853 = ants_cljs.core.place.call(null,inst_14852);var inst_14854 = cljs.core.deref.call(null,inst_14853);var inst_14855 = cljs.core.deref.call(null,inst_14853);var inst_14856 = ants_cljs.core.get_cell_pher.call(null,inst_14855);var inst_14857 = (ants_cljs.core.evap_rate * inst_14856);var inst_14858 = ants_cljs.core.set_cell_pher.call(null,inst_14854,inst_14857);var inst_14859 = (inst_14847 + 1);var inst_14847__$1 = inst_14859;var state_14887__$1 = (function (){var statearr_14911 = state_14887;(statearr_14911[10] = inst_14847__$1);
(statearr_14911[12] = inst_14858);
return statearr_14911;
})();var statearr_14912_14942 = state_14887__$1;(statearr_14912_14942[2] = null);
(statearr_14912_14942[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 18))
{var state_14887__$1 = state_14887;var statearr_14913_14943 = state_14887__$1;(statearr_14913_14943[2] = null);
(statearr_14913_14943[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 19))
{var inst_14863 = (state_14887[2]);var state_14887__$1 = state_14887;var statearr_14914_14944 = state_14887__$1;(statearr_14914_14944[2] = inst_14863);
(statearr_14914_14944[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14888 === 20))
{var inst_14879 = (state_14887[2]);var state_14887__$1 = (function (){var statearr_14915 = state_14887;(statearr_14915[13] = inst_14879);
return statearr_14915;
})();var statearr_14916_14945 = state_14887__$1;(statearr_14916_14945[2] = null);
(statearr_14916_14945[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_14920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14920[0] = state_machine__5597__auto__);
(statearr_14920[1] = 1);
return statearr_14920;
});
var state_machine__5597__auto____1 = (function (state_14887){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_14887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e14921){if((e14921 instanceof Object))
{var ex__5600__auto__ = e14921;var statearr_14922_14946 = state_14887;(statearr_14922_14946[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14947 = state_14887;
state_14887 = G__14947;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_14887){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_14887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_14923 = f__5612__auto__.call(null);(statearr_14923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto__);
return statearr_14923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
}));
return c__5611__auto__;
});
ants_cljs.core.scale = 5;
ants_cljs.core.fill_cell = (function fill_cell(ctx,x,y,colour){var G__14949_14950 = ctx;G__14949_14950.beginPath();
G__14949_14950.rect((x * ants_cljs.core.scale),(y * ants_cljs.core.scale),ants_cljs.core.scale,ants_cljs.core.scale);
ctx.fillStyle = colour;
return ctx.fill();
});
ants_cljs.core.render_ant = (function render_ant(ant,ctx,x,y){var vec__14953 = new cljs.core.PersistentArrayMap(null, 8, [0,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0,2,4], null),1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,0,0,4], null),2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,2,0,2], null),3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4,0,0], null),4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,4,2,0], null),5,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,4,4,0], null),6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2,4,2], null),7,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,4,4], null)], null).call(null,ants_cljs.core.get_ant_dir.call(null,ant));var hx = cljs.core.nth.call(null,vec__14953,0,null);var hy = cljs.core.nth.call(null,vec__14953,1,null);var tx = cljs.core.nth.call(null,vec__14953,2,null);var ty = cljs.core.nth.call(null,vec__14953,3,null);ctx.beginPath();
if((!((ants_cljs.core.get_ant_food.call(null,ant) == null))) && (!(cljs.core._EQ_.call(null,0,ants_cljs.core.get_ant_food.call(null,ant)))))
{ctx.strokeStyle = "#ff0000";
ctx.strokeStyle = "black";
} else
{}
var G__14954 = ctx;G__14954.moveTo((hx + (x * ants_cljs.core.scale)),(hy + (y * ants_cljs.core.scale)));
G__14954.lineTo((tx + (x * ants_cljs.core.scale)),(ty + (y * ants_cljs.core.scale)));
G__14954.stroke();
return G__14954;
});
ants_cljs.core.render_place = (function render_place(ctx,p,x,y){var cell_pher = ants_cljs.core.get_cell_pher.call(null,p);var cell_food = ants_cljs.core.get_cell_food.call(null,p);var cell_ant = ants_cljs.core.get_cell_ant.call(null,p);if((cell_pher > 0))
{ants_cljs.core.fill_cell.call(null,ctx,x,y,[cljs.core.str("rgba(0,255,0,"),cljs.core.str((function (){var x__3789__auto__ = 1;var y__3790__auto__ = (cell_pher / ants_cljs.core.pher_scale);return ((x__3789__auto__ < y__3790__auto__) ? x__3789__auto__ : y__3790__auto__);
})()),cljs.core.str(")")].join(''));
} else
{}
if((cell_food > 0))
{ants_cljs.core.fill_cell.call(null,ctx,x,y,[cljs.core.str("rgba(255,0,0,"),cljs.core.str((function (){var x__3789__auto__ = 1;var y__3790__auto__ = (cell_food / ants_cljs.core.food_scale);return ((x__3789__auto__ < y__3790__auto__) ? x__3789__auto__ : y__3790__auto__);
})()),cljs.core.str(")")].join(''));
} else
{}
if(cljs.core.truth_(cell_ant))
{return ants_cljs.core.render_ant.call(null,cell_ant,ctx,x,y);
} else
{return null;
}
});
ants_cljs.core.setup_context = (function setup_context(ctx){ctx.width = (ants_cljs.core.dim * ants_cljs.core.scale);
ctx.height = (ants_cljs.core.dim * ants_cljs.core.scale);
var G__14956_14957 = ctx;G__14956_14957.beginPath();
G__14956_14957.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_outside_box = (function draw_outside_box(ctx){var G__14959_14960 = ctx;G__14959_14960.beginPath();
G__14959_14960.rect(1,1,(ants_cljs.core.dim * ants_cljs.core.scale),(ants_cljs.core.dim * ants_cljs.core.scale));
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
return ctx.stroke();
});
ants_cljs.core.draw_home_box = (function draw_home_box(ctx){var G__14962_14963 = ctx;G__14962_14963.beginPath();
G__14962_14963.rect((ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.home_off),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt),(ants_cljs.core.scale * ants_cljs.core.nants_sqrt));
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
return ctx.stroke();
});
ants_cljs.core.render = (function render(ctx){var c__5611__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_15104){var state_val_15105 = (state_15104[1]);if((state_val_15105 === 1))
{var state_15104__$1 = state_15104;var statearr_15106_15142 = state_15104__$1;(statearr_15106_15142[2] = null);
(statearr_15106_15142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 2))
{var state_15104__$1 = state_15104;if(true)
{var statearr_15107_15143 = state_15104__$1;(statearr_15107_15143[1] = 4);
} else
{var statearr_15108_15144 = state_15104__$1;(statearr_15108_15144[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 3))
{var inst_15102 = (state_15104[2]);var state_15104__$1 = state_15104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15104__$1,inst_15102);
} else
{if((state_val_15105 === 4))
{var state_15104__$1 = state_15104;if(cljs.core.truth_(ants_cljs.core.is_running))
{var statearr_15109_15145 = state_15104__$1;(statearr_15109_15145[1] = 7);
} else
{var statearr_15110_15146 = state_15104__$1;(statearr_15110_15146[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 5))
{var state_15104__$1 = state_15104;var statearr_15111_15147 = state_15104__$1;(statearr_15111_15147[2] = null);
(statearr_15111_15147[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 6))
{var inst_15100 = (state_15104[2]);var state_15104__$1 = state_15104;var statearr_15112_15148 = state_15104__$1;(statearr_15112_15148[2] = inst_15100);
(statearr_15112_15148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 7))
{var inst_15056 = (new Date());var inst_15057 = inst_15056.getTime();var inst_15058 = ants_cljs.core.setup_context.call(null,ctx);var inst_15059 = 0;var state_15104__$1 = (function (){var statearr_15113 = state_15104;(statearr_15113[7] = inst_15058);
(statearr_15113[8] = inst_15059);
(statearr_15113[9] = inst_15057);
return statearr_15113;
})();var statearr_15114_15149 = state_15104__$1;(statearr_15114_15149[2] = null);
(statearr_15114_15149[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 8))
{var state_15104__$1 = state_15104;var statearr_15115_15150 = state_15104__$1;(statearr_15115_15150[2] = null);
(statearr_15115_15150[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 9))
{var inst_15093 = (state_15104[2]);var inst_15094 = cljs.core.async.timeout.call(null,ants_cljs.core.chan_timeout_duration);var state_15104__$1 = (function (){var statearr_15116 = state_15104;(statearr_15116[10] = inst_15093);
return statearr_15116;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15104__$1,20,inst_15094);
} else
{if((state_val_15105 === 10))
{var inst_15059 = (state_15104[8]);var inst_15061 = (inst_15059 < ants_cljs.core.dim);var state_15104__$1 = state_15104;if(cljs.core.truth_(inst_15061))
{var statearr_15117_15151 = state_15104__$1;(statearr_15117_15151[1] = 12);
} else
{var statearr_15118_15152 = state_15104__$1;(statearr_15118_15152[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 11))
{var inst_15085 = (state_15104[2]);var inst_15086 = cljs.core.dorun.call(null,inst_15085);var inst_15087 = ants_cljs.core.draw_outside_box.call(null,ctx);var inst_15088 = ants_cljs.core.draw_home_box.call(null,ctx);var inst_15089 = (new Date());var inst_15090 = inst_15089.getTime();var state_15104__$1 = (function (){var statearr_15119 = state_15104;(statearr_15119[11] = inst_15090);
(statearr_15119[12] = inst_15086);
(statearr_15119[13] = inst_15088);
(statearr_15119[14] = inst_15087);
return statearr_15119;
})();var statearr_15120_15153 = state_15104__$1;(statearr_15120_15153[2] = null);
(statearr_15120_15153[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 12))
{var inst_15063 = 0;var state_15104__$1 = (function (){var statearr_15121 = state_15104;(statearr_15121[15] = inst_15063);
return statearr_15121;
})();var statearr_15122_15154 = state_15104__$1;(statearr_15122_15154[2] = null);
(statearr_15122_15154[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 13))
{var state_15104__$1 = state_15104;var statearr_15123_15155 = state_15104__$1;(statearr_15123_15155[2] = null);
(statearr_15123_15155[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 14))
{var inst_15083 = (state_15104[2]);var state_15104__$1 = state_15104;var statearr_15124_15156 = state_15104__$1;(statearr_15124_15156[2] = inst_15083);
(statearr_15124_15156[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 15))
{var inst_15063 = (state_15104[15]);var inst_15065 = (inst_15063 < ants_cljs.core.dim);var state_15104__$1 = state_15104;if(cljs.core.truth_(inst_15065))
{var statearr_15125_15157 = state_15104__$1;(statearr_15125_15157[1] = 17);
} else
{var statearr_15126_15158 = state_15104__$1;(statearr_15126_15158[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 16))
{var inst_15059 = (state_15104[8]);var inst_15078 = (state_15104[2]);var inst_15079 = (inst_15059 + 1);var inst_15059__$1 = inst_15079;var state_15104__$1 = (function (){var statearr_15127 = state_15104;(statearr_15127[8] = inst_15059__$1);
(statearr_15127[16] = inst_15078);
return statearr_15127;
})();var statearr_15128_15159 = state_15104__$1;(statearr_15128_15159[2] = null);
(statearr_15128_15159[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 17))
{var inst_15059 = (state_15104[8]);var inst_15063 = (state_15104[15]);var inst_15067 = [inst_15059,inst_15063];var inst_15068 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_15067,null));var inst_15069 = ants_cljs.core.place.call(null,inst_15068);var inst_15070 = cljs.core.deref.call(null,inst_15069);var inst_15071 = ants_cljs.core.render_place.call(null,ctx,inst_15070,inst_15059,inst_15063);var inst_15072 = (inst_15063 + 1);var inst_15063__$1 = inst_15072;var state_15104__$1 = (function (){var statearr_15129 = state_15104;(statearr_15129[17] = inst_15071);
(statearr_15129[15] = inst_15063__$1);
return statearr_15129;
})();var statearr_15130_15160 = state_15104__$1;(statearr_15130_15160[2] = null);
(statearr_15130_15160[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 18))
{var state_15104__$1 = state_15104;var statearr_15131_15161 = state_15104__$1;(statearr_15131_15161[2] = null);
(statearr_15131_15161[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 19))
{var inst_15076 = (state_15104[2]);var state_15104__$1 = state_15104;var statearr_15132_15162 = state_15104__$1;(statearr_15132_15162[2] = inst_15076);
(statearr_15132_15162[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15105 === 20))
{var inst_15096 = (state_15104[2]);var state_15104__$1 = (function (){var statearr_15133 = state_15104;(statearr_15133[18] = inst_15096);
return statearr_15133;
})();var statearr_15134_15163 = state_15104__$1;(statearr_15134_15163[2] = null);
(statearr_15134_15163[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_15138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15138[0] = state_machine__5597__auto__);
(statearr_15138[1] = 1);
return statearr_15138;
});
var state_machine__5597__auto____1 = (function (state_15104){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_15104);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e15139){if((e15139 instanceof Object))
{var ex__5600__auto__ = e15139;var statearr_15140_15164 = state_15104;(statearr_15140_15164[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15104);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15165 = state_15104;
state_15104 = G__15165;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_15104){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_15104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_15141 = f__5612__auto__.call(null);(statearr_15141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto__);
return statearr_15141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
}));
return c__5611__auto__;
});
/**
* Don't tell anyone this is actually just document.getElementById().
*/
ants_cljs.core.get_canvas = (function get_canvas(id){return document.getElementById(id);
});
ants_cljs.core.canvs = ants_cljs.core.get_canvas.call(null,"antcanvas");
ants_cljs.core.context = ants_cljs.core.canvs.getContext("2d");
ants_cljs.core.map_coords = (function map_coords(){var iter__4192__auto__ = (function iter__15172(s__15173){return (new cljs.core.LazySeq(null,(function (){var s__15173__$1 = s__15173;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15173__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var y = cljs.core.first.call(null,xs__4579__auto__);var iterys__4188__auto__ = ((function (s__15173__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function iter__15174(s__15175){return (new cljs.core.LazySeq(null,((function (s__15173__$1,y,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__15175__$1 = s__15175;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__15175__$1);if(temp__4092__auto____$1)
{var s__15175__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15175__$2))
{var c__4190__auto__ = cljs.core.chunk_first.call(null,s__15175__$2);var size__4191__auto__ = cljs.core.count.call(null,c__4190__auto__);var b__15177 = cljs.core.chunk_buffer.call(null,size__4191__auto__);if((function (){var i__15176 = 0;while(true){
if((i__15176 < size__4191__auto__))
{var x = cljs.core._nth.call(null,c__4190__auto__,i__15176);cljs.core.chunk_append.call(null,b__15177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__15178 = (i__15176 + 1);
i__15176 = G__15178;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15177),iter__15174.call(null,cljs.core.chunk_rest.call(null,s__15175__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15177),null);
}
} else
{var x = cljs.core.first.call(null,s__15175__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__15174.call(null,cljs.core.rest.call(null,s__15175__$2)));
}
} else
{return null;
}
break;
}
});})(s__15173__$1,y,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__15173__$1,y,xs__4579__auto__,temp__4092__auto__))
;var fs__4189__auto__ = cljs.core.seq.call(null,iterys__4188__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim)));if(fs__4189__auto__)
{return cljs.core.concat.call(null,fs__4189__auto__,iter__15172.call(null,cljs.core.rest.call(null,s__15173__$1)));
} else
{{
var G__15179 = cljs.core.rest.call(null,s__15173__$1);
s__15173__$1 = G__15179;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4192__auto__.call(null,cljs.core.range.call(null,ants_cljs.core.dim));
});
ants_cljs.core.behave_ants = (function behave_ants(){var c__5611__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_15337){var state_val_15338 = (state_15337[1]);if((state_val_15338 === 1))
{var state_15337__$1 = state_15337;var statearr_15339_15378 = state_15337__$1;(statearr_15339_15378[2] = null);
(statearr_15339_15378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 2))
{var state_15337__$1 = state_15337;if(true)
{var statearr_15340_15379 = state_15337__$1;(statearr_15340_15379[1] = 4);
} else
{var statearr_15341_15380 = state_15337__$1;(statearr_15341_15380[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 3))
{var inst_15335 = (state_15337[2]);var state_15337__$1 = state_15337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15337__$1,inst_15335);
} else
{if((state_val_15338 === 4))
{var state_15337__$1 = state_15337;if(cljs.core.truth_(ants_cljs.core.is_running))
{var statearr_15342_15381 = state_15337__$1;(statearr_15342_15381[1] = 7);
} else
{var statearr_15343_15382 = state_15337__$1;(statearr_15343_15382[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 5))
{var state_15337__$1 = state_15337;var statearr_15344_15383 = state_15337__$1;(statearr_15344_15383[2] = null);
(statearr_15344_15383[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 6))
{var inst_15333 = (state_15337[2]);var state_15337__$1 = state_15337;var statearr_15345_15384 = state_15337__$1;(statearr_15345_15384[2] = inst_15333);
(statearr_15345_15384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 7))
{var inst_15284 = (state_15337[7]);var inst_15282 = (new Date());var inst_15283 = inst_15282.getTime();var inst_15284__$1 = ants_cljs.core.get_ant_coords.call(null);var inst_15285 = (new Date());var inst_15286 = inst_15285.getTime();var inst_15287 = (inst_15286 - inst_15283);var inst_15288 = [cljs.core.str("Elapsed time: "),cljs.core.str(inst_15287),cljs.core.str(" msecs")].join('');var inst_15289 = cljs.core.prn.call(null,inst_15288);var inst_15290 = cljs.core.count.call(null,inst_15284__$1);var inst_15291 = 0;var state_15337__$1 = (function (){var statearr_15346 = state_15337;(statearr_15346[8] = inst_15290);
(statearr_15346[9] = inst_15289);
(statearr_15346[10] = inst_15291);
(statearr_15346[7] = inst_15284__$1);
return statearr_15346;
})();var statearr_15347_15385 = state_15337__$1;(statearr_15347_15385[2] = null);
(statearr_15347_15385[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 8))
{var state_15337__$1 = state_15337;var statearr_15348_15386 = state_15337__$1;(statearr_15348_15386[2] = null);
(statearr_15348_15386[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 9))
{var inst_15326 = (state_15337[2]);var inst_15327 = cljs.core.async.timeout.call(null,ants_cljs.core.chan_timeout_duration);var state_15337__$1 = (function (){var statearr_15349 = state_15337;(statearr_15349[11] = inst_15326);
return statearr_15349;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15337__$1,21,inst_15327);
} else
{if((state_val_15338 === 10))
{var inst_15290 = (state_15337[8]);var inst_15291 = (state_15337[10]);var inst_15293 = (inst_15291 < inst_15290);var state_15337__$1 = state_15337;if(cljs.core.truth_(inst_15293))
{var statearr_15350_15387 = state_15337__$1;(statearr_15350_15387[1] = 12);
} else
{var statearr_15351_15388 = state_15337__$1;(statearr_15351_15388[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 11))
{var inst_15322 = (state_15337[2]);var inst_15323 = cljs.core.dorun.call(null,inst_15322);var state_15337__$1 = state_15337;var statearr_15352_15389 = state_15337__$1;(statearr_15352_15389[2] = inst_15323);
(statearr_15352_15389[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 12))
{var inst_15295 = (state_15337[12]);var inst_15291 = (state_15337[10]);var inst_15284 = (state_15337[7]);var inst_15295__$1 = cljs.core.nth.call(null,inst_15284,inst_15291);var inst_15296 = ants_cljs.core.place.call(null,inst_15295__$1);var inst_15297 = cljs.core.deref.call(null,inst_15296);var inst_15298 = ants_cljs.core.get_cell_ant.call(null,inst_15297);var inst_15299 = (inst_15296 == null);var state_15337__$1 = (function (){var statearr_15353 = state_15337;(statearr_15353[13] = inst_15298);
(statearr_15353[12] = inst_15295__$1);
return statearr_15353;
})();if(cljs.core.truth_(inst_15299))
{var statearr_15354_15390 = state_15337__$1;(statearr_15354_15390[1] = 15);
} else
{var statearr_15355_15391 = state_15337__$1;(statearr_15355_15391[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 13))
{var state_15337__$1 = state_15337;var statearr_15356_15392 = state_15337__$1;(statearr_15356_15392[2] = null);
(statearr_15356_15392[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 14))
{var inst_15320 = (state_15337[2]);var state_15337__$1 = state_15337;var statearr_15357_15393 = state_15337__$1;(statearr_15357_15393[2] = inst_15320);
(statearr_15357_15393[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 15))
{var inst_15301 = (new Error("behave-ants - no p at this location"));var inst_15302 = (function(){throw inst_15301})();var inst_15303 = ants_cljs.core.do_pause.call(null);var state_15337__$1 = (function (){var statearr_15358 = state_15337;(statearr_15358[14] = inst_15302);
return statearr_15358;
})();var statearr_15359_15394 = state_15337__$1;(statearr_15359_15394[2] = inst_15303);
(statearr_15359_15394[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 16))
{var state_15337__$1 = state_15337;var statearr_15360_15395 = state_15337__$1;(statearr_15360_15395[2] = null);
(statearr_15360_15395[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 17))
{var inst_15298 = (state_15337[13]);var inst_15306 = (state_15337[2]);var inst_15307 = (inst_15298 == null);var state_15337__$1 = (function (){var statearr_15361 = state_15337;(statearr_15361[15] = inst_15306);
return statearr_15361;
})();if(cljs.core.truth_(inst_15307))
{var statearr_15362_15396 = state_15337__$1;(statearr_15362_15396[1] = 18);
} else
{var statearr_15363_15397 = state_15337__$1;(statearr_15363_15397[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 18))
{var inst_15309 = (new Error("behave-ants - no ant at this location"));var inst_15310 = (function(){throw inst_15309})();var inst_15311 = ants_cljs.core.do_pause.call(null);var state_15337__$1 = (function (){var statearr_15364 = state_15337;(statearr_15364[16] = inst_15310);
return statearr_15364;
})();var statearr_15365_15398 = state_15337__$1;(statearr_15365_15398[2] = inst_15311);
(statearr_15365_15398[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 19))
{var state_15337__$1 = state_15337;var statearr_15366_15399 = state_15337__$1;(statearr_15366_15399[2] = null);
(statearr_15366_15399[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 20))
{var inst_15295 = (state_15337[12]);var inst_15291 = (state_15337[10]);var inst_15314 = (state_15337[2]);var inst_15315 = ants_cljs.core.behave.call(null,inst_15295);var inst_15316 = (inst_15291 + 1);var inst_15291__$1 = inst_15316;var state_15337__$1 = (function (){var statearr_15367 = state_15337;(statearr_15367[10] = inst_15291__$1);
(statearr_15367[17] = inst_15315);
(statearr_15367[18] = inst_15314);
return statearr_15367;
})();var statearr_15368_15400 = state_15337__$1;(statearr_15368_15400[2] = null);
(statearr_15368_15400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15338 === 21))
{var inst_15329 = (state_15337[2]);var state_15337__$1 = (function (){var statearr_15369 = state_15337;(statearr_15369[19] = inst_15329);
return statearr_15369;
})();var statearr_15370_15401 = state_15337__$1;(statearr_15370_15401[2] = null);
(statearr_15370_15401[1] = 2);
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
});return ((function (switch__5596__auto__){
return (function() {
var state_machine__5597__auto__ = null;
var state_machine__5597__auto____0 = (function (){var statearr_15374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15374[0] = state_machine__5597__auto__);
(statearr_15374[1] = 1);
return statearr_15374;
});
var state_machine__5597__auto____1 = (function (state_15337){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_15337);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e15375){if((e15375 instanceof Object))
{var ex__5600__auto__ = e15375;var statearr_15376_15402 = state_15337;(statearr_15376_15402[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15403 = state_15337;
state_15337 = G__15403;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_15337){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_15337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_15377 = f__5612__auto__.call(null);(statearr_15377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto__);
return statearr_15377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
}));
return c__5611__auto__;
});
ants_cljs.core.send_off_animation = (function send_off_animation(){return ants_cljs.core.render.call(null,ants_cljs.core.context);
});
ants_cljs.core.run_loop = (function run_loop(){ants_cljs.core.send_off_animation.call(null);
ants_cljs.core.behave_ants.call(null);
return ants_cljs.core.evaporate.call(null);
});
ants_cljs.core.animate = (function animate(){return ants_cljs.core.run_loop.call(null);
});
ants_cljs.core.animate.call(null);
ants_cljs.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
ants_cljs.core.init = (function init(){var clicks = ants_cljs.core.listen.call(null,goog.dom.getElement("clickMe"),"click");var c__5611__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5612__auto__ = (function (){var switch__5596__auto__ = (function (state_15446){var state_val_15447 = (state_15446[1]);if((state_val_15447 === 7))
{var inst_15436 = (state_15446[2]);var inst_15437 = ants_cljs.core.do_pause.call(null);var inst_15438 = ants_cljs.core.animate.call(null);var state_15446__$1 = (function (){var statearr_15448 = state_15446;(statearr_15448[7] = inst_15438);
(statearr_15448[8] = inst_15437);
(statearr_15448[9] = inst_15436);
return statearr_15448;
})();var statearr_15449_15462 = state_15446__$1;(statearr_15449_15462[2] = null);
(statearr_15449_15462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15447 === 6))
{var inst_15442 = (state_15446[2]);var state_15446__$1 = state_15446;var statearr_15450_15463 = state_15446__$1;(statearr_15450_15463[2] = inst_15442);
(statearr_15450_15463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15447 === 5))
{var state_15446__$1 = state_15446;var statearr_15451_15464 = state_15446__$1;(statearr_15451_15464[2] = null);
(statearr_15451_15464[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15447 === 4))
{var state_15446__$1 = state_15446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15446__$1,7,clicks);
} else
{if((state_val_15447 === 3))
{var inst_15444 = (state_15446[2]);var state_15446__$1 = state_15446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15446__$1,inst_15444);
} else
{if((state_val_15447 === 2))
{var state_15446__$1 = state_15446;if(true)
{var statearr_15452_15465 = state_15446__$1;(statearr_15452_15465[1] = 4);
} else
{var statearr_15453_15466 = state_15446__$1;(statearr_15453_15466[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15447 === 1))
{var state_15446__$1 = state_15446;var statearr_15454_15467 = state_15446__$1;(statearr_15454_15467[2] = null);
(statearr_15454_15467[1] = 2);
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
var state_machine__5597__auto____0 = (function (){var statearr_15458 = [null,null,null,null,null,null,null,null,null,null];(statearr_15458[0] = state_machine__5597__auto__);
(statearr_15458[1] = 1);
return statearr_15458;
});
var state_machine__5597__auto____1 = (function (state_15446){while(true){
var ret_value__5598__auto__ = (function (){try{while(true){
var result__5599__auto__ = switch__5596__auto__.call(null,state_15446);if(cljs.core.keyword_identical_QMARK_.call(null,result__5599__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5599__auto__;
}
break;
}
}catch (e15459){if((e15459 instanceof Object))
{var ex__5600__auto__ = e15459;var statearr_15460_15468 = state_15446;(statearr_15460_15468[5] = ex__5600__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15446);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5598__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15469 = state_15446;
state_15446 = G__15469;
continue;
}
} else
{return ret_value__5598__auto__;
}
break;
}
});
state_machine__5597__auto__ = function(state_15446){
switch(arguments.length){
case 0:
return state_machine__5597__auto____0.call(this);
case 1:
return state_machine__5597__auto____1.call(this,state_15446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5597__auto____0;
state_machine__5597__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5597__auto____1;
return state_machine__5597__auto__;
})()
;})(switch__5596__auto__))
})();var state__5613__auto__ = (function (){var statearr_15461 = f__5612__auto__.call(null);(statearr_15461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5611__auto__);
return statearr_15461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5613__auto__);
}));
return c__5611__auto__;
});
ants_cljs.core.init.call(null);

//# sourceMappingURL=core.js.map