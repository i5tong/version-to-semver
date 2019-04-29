# version-to-semver
version to semver

> Sort an array of versions.

## Usage

This module sort an array or array object.
To use it just call the module as a function.

```js
const sort = require('version-to-semver');
const data = [ '2.4.20', '2.4.2', '1.1.0', '1.1.4' ];
sort.sortArray(data); // [ '2.4.20', '2.4.2', '1.1.4', '1.1.0' ]
```

```js
const sort = require('version-to-semver');
const data = [
  { version: '2.2.1' },
  { version: '1.2.1' },
  { version: '1.2.3' },
  { version: '3.2.1' },
];
sort.sortArrayObj(data, { key: 'version', order: -1 }); // [ { version: '3.2.1' }, { version: '2.2.1' }, { version: '1.2.3' }, { version: '1.2.1' } ]

```

### Options

```js
var results = sort.sortArrayObj(data, options);
options: { order: 1 }
options: { order: -1 }
```


```js
var results = sort.sortArray(data, options);
options: { key: 'version', order: 1 }
options: { key: 'version', order: -1 }
```

## Installation

```bat
npm install --save version-to-semver
```
