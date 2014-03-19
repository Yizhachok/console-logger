# Console logger

## Using

Sample usage example

```js
var log=require('console-logger');

// Config time format
log('MM.DD HH:mm:ss.SSS');

log.info('Hello');
```

Time format see in [moment docs](http://momentjs.com/docs/#/parsing/string-format/)

## API

- **log(...)**
- **info(...)**
- **error(...)**
- **warn(...)**