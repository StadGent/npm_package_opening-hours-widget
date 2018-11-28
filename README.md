# Opening Hours API wrapper
This library serves as a wrapper for the [openingsuren.gent.be](http://openingsuren.gent.be) API. 

## Installation
```bash
npm install opening-hours-api
``` 

## Development
```bash
npm start
``` 

Extensive API documentation can be found on the [wiki]().

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

## Contributing
Thanks for your interest in contributing! [Get started here](CONTRIBUTING.md).
