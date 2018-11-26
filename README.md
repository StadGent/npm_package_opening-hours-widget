# Opening Hours API wrapper
This library serves as a wrapper for the openingsuren.gent.be API. This 

## Installation
```bash
npm install opening-hours-api
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

