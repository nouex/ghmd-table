"use strict";

/**
  * @api public
  * @param {Object} t Table instance
  * @return {String} markdown
  */
module.exports = function (t) {
  var entry, header, hadHeaders, ret = "";
  // headers
  for (var hx = 1; hx <= t.l; hx++) {
    hadHeaders = true;
    header = t.headers[hx -1] || {};
    ret += header.cont || "\u0000"; // asci nul
    // NOTE <= NOT <
    if (hx <= t.l) ret += "|";
  }

  if (hadHeaders) {
    ret += "\r\n";
    for (var hx2 = 1; hx2 <= t.l; hx2++) {
      header = t.headers[hx2 -1] || {};
      ret += header.align || "---";
      if (hx2 < t.l) ret += "|";
    }
    ret += "\r\n";
  }
  // body
  for (var curry = 1; curry <= t.h; curry++) {
    for (var currx = 1; currx <= t.l; currx++) {
      entry = t.entries[currx + ":" + curry];
      if (entry) {
        ret += entry.cont;
      } else {
        ret += "\u0000"; // asci nul
      }
      if (currx < (t.l)) ret += "|";
    }
    ret += "\r\n";
  }

  return ret;
};
