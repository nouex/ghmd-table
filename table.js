"use strict";

module.exports = Table;

function Table (l, h) {
  this.l = +l || 0;
  this.h = +h || 0;
  this.headers = [];
  this.entries = {};
}

/**
  * @api public
  * @param {String} cont
  * @param {String} [align] How the column should align (center, left, right)
  * @return {void}
  * Headers appear in order of which they were added.
  */
Table.prototype.addHeader = function (cont, align) {
  var headers = this.headers;

  switch (align) {
    case "center":
    align = ":---:";
    break;

    case "left":
    align = ":---";
    break;

    case "right":
    align = "---:";
    break;

    default:
    align = "---";
  }

  bumpSize(this, headers.length, 0);
  headers.push(
    {
      cont: cont,
      align: align
    }
  );

  return void(null);
};

/**
  * @api public
  * @param {Number} x in terms of quadrant 4
  * @param {Number} y in terms of quadrant 4
  * @return {void}
  */
Table.prototype.addEntry = function (x, y, cont) {
  var key = String(x) + ":" + String(y);

  bumpSize(this, x, y);
  this.entries[key] = {
    x: x,
    y: y,
    cont: cont
  }
};

function bumpSize (t, x, y) {
  t.l = Math.max(x, t.l);
  t.h = Math.max(y, t.h);
}

/**
  * @api public
  * @param {Number} y row to edit
  * @param {Number} x column to edit
  */
Table.prototype.row = function (y) {
  var self = this;
  return function (x, cont) {
    self.addEntry(x, y, cont);
  };
};

/**
  * @api public
  * @param {Number} x column to edit
  * @param {Number} y row to edit
  */
Table.prototype.column = function (x) {
  var self = this;
  return function (y, cont) {
    self.addEntry(x, y, cont);
  };
};
