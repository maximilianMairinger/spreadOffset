# Spread offset

Spread missing offset properties to keyframes with interpolated values.

This is a similar implementation to the programatical offset interpolatgion used in the native `ELement.prototype.animate()` method. Useing keyframes parsed and not parsed by spread offset in an `animation` will result in the same results. This is just usefull for customt tween animation engines or if youd like to inject something at a spesific offset prior to running an `animation`.

## Example

Offsets must be given in incrementing sequence, spanning between 0 .. 1.

```js
import spreadOffset from "spread-offset"

let r = spreadOffset([
  {value: "val"},
  {value: "val"},
  {value: "val"},
  {value: "val"}
])

// results to

r = [
  {value: "val", offset: 0},
  {value: "val", offset: 0.333333333333},
  {value: "val", offset: 0.666666666666},
  {value: "val", offset: 1}
]
```

Spread offset respects existing offset declarations, and interpolates around them.

```js
let r = spreadOffset([
  {value: "val"},
  {value: "val"},
  {value: "val", offset: 0.5},
  {value: "val"}
])

// results to

r = [
  {value: "val", offset: 0},
  {value: "val", offset: 0.25},
  {value: "val", offset: 0.5},
  {value: "val", offset: 1}
]
```


## Conribute

All feedback is appreciated. Create a pull request or write an issue.
