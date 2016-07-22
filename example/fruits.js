"use strict";

var Table = require("../table.js");
var convert = require("../convert.js");

var t = new Table(3, 4);

t.addHeader("Fruit Name", "right");
t.addHeader("Rating", "left");
t.addHeader("Color", "center");

t.addEntry(1, 1, "Apple");
t.addEntry(2,1, "7");
t.addEntry(3, 1, "Red");

t.addEntry(1, 2, "Orange");
t.addEntry(2, 2, "8");
t.addEntry(3, 2, "Orange");

t.addEntry(1, 3, "Pear");
t.addEntry(2, 3, "5");
t.addEntry(3, 3, "Brown");

t.addEntry(1, 4, "Strawberry");
t.addEntry(2, 4, "10");
t.addEntry(3, 4, "Red");
// exceed the initial table size and be fine with it
// length
t.addEntry(4, 4, "favorite");
t.addEntry(5, 4, "favorite");
// height
t.addEntry(1, 5, "outer");
t.addEntry(6, 6, "space");


var c = convert(t);

console.log(c);
