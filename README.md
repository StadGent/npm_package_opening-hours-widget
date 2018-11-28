# Opening Hours API wrapper
This library serves as a wrapper for the [openingsuren.gent.be](http://openingsuren.gent.be) API. 

## Installation
Install the dependencies 
```bash
npm install @digipolis-gent/opening-hours-api
``` 

## Usage
### CommonJS
```javascript
const OpeningHoursApi = require('@digipolis-gent/opening-hours-api').default;

let api = new OpeningHoursApi(options);
```
### ES Imports
```javascript
import OpeningHoursApi from '@digipolis-gent/opening-hours-api';

let api = new OpeningHoursApi(options);
```

### Browser
**HTML**:
```html
<script src="node_modules/@digipolis-gent/opening-hours-api/dist/opening-hours-api.js"></script>
```
**JS**:
```js
let api = new OpeningHoursApi(options);
```

## Development
### Setup
If you'd like to make adjustments to the source code, you can set up this project locally. 

To clone the repo and install dependencies:
```bash
$ git clone git@github.com:StadGent/npm_package_opening-hours-api.git
$ cd npm_package_opening-hours-api
$ npm install
```

### Watch 
```shell
$ npm start
```
will run tests on files every time a change is saved. 

### Test 
We use [Jest](https://jestjs.io/) for testing. 

```shell
$ npm test
```
will run all tests 

## Built With
- [EcmaScript 2017](https://www.ecma-international.org/ecma-262/8.0/index.html) - The programming language used
- [Babel](https://babeljs.io/) - JavaScript Transpiler
- [NPM](https://www.npmjs.com/) - Dependency Management


## Contributing
Thanks for your interest in contributing! [Get started here](CONTRIBUTING.md).

## Authors
- Helena Standaert - *Initial work* - [GitHub](https://github.com/hstandaert)
