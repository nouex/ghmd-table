# GitHub Markdown Table

## Description
Runtime representation of a GH markdown table and to-markdown conversion.

## Usage
```js
const gt = require("ghmd-table")

let t = new gt.Table(2, 2);
t.addHeader("Name")
t.addHeader("Age")
t.addEntry(1, 1, "Bill")
t.addEntry(2, 1, 57)
// or
let row2AddEntry = t.row(2)
row2AddEntry(1, "Spencer")
row2AddEntry(2, 19)
let md = gt.convert(t)
console.log(md)
```

outputs:

```sh
Name|Age|
---|---
Bill|57
Spencer|19
```
