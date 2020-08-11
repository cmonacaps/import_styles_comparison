# import_styles_comparison

## two apps:

* generated using `npx create-react-app`
* having equivalent behavior
* having the same code, except for the imports from `ramda`

![Screen Shot 2020-08-11 at 1 11 21 PM](https://user-images.githubusercontent.com/50930812/89927329-2cd61a00-dbd4-11ea-98ac-412dd2d85d9e.png)

### cra_import_star

This is the idiomatic way to import from `ramda`.

```js
import * as R from 'ramda';
```

### cra_import_used_by_name

This is a local recommendation.

```js
import { add, apply, chain, compose, curryN, flatten, flip, groupBy, head,
  juxt, lensIndex, lensProp, map, mergeLeft, multiply, objOf, omit, over,
  prop, repeat, set, times, transpose, values, view } from 'ramda';

const R = { add, apply, chain, compose, curryN, flatten, flip, groupBy, head,
  juxt, lensIndex, lensProp, map, mergeLeft, multiply, objOf, omit, over,
  prop, repeat, set, times, transpose, values, view }
```

### impact to production build

| file | import * | import { named } |
|------|----------|------------------|
|logo512.png|9664|9664|
|logo192.png|5347|5347|
|favicon.ico|3150|3150|
|index.html|2217|2217|
|service-worker.js|1181|1181|
|asset-manifest.json|1035|1035|
|precache-manifest.HASH.js|657|657|
|manifest.json|492|492|
|robots.txt|67|67|
|static/js/2.HASH.chunk.js.map|409641|409640|
|static/js/2.HASH.chunk.js|146460|146460|
|static/js/main.HASH.chunk.js.map|9250|10367|
|static/js/runtime-main.HASH.js.map|8276|8276|
|static/js/main.HASH.chunk.js|1855|2320|
|static/js/runtime-main.HASH.js|1557|1557|
|static/js/2.HASH.chunk.js.LICENSE.txt|790|790|

#### `import * as`

![import_star](https://user-images.githubusercontent.com/50930812/89927821-e46b2c00-dbd4-11ea-8c53-0d244c5c79c4.png)

#### `import { named }`

![import_named](https://user-images.githubusercontent.com/50930812/89927838-ecc36700-dbd4-11ea-87ce-67fe8ff2454a.png)

