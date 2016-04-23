# number-to-date
Get a month, a day from a number.

[![Build Status](https://travis-ci.org/cedced19/number-to-date.svg?branch=master)](https://travis-ci.org/cedced19/number-to-date)

```bash
npm install --save number-to-date
```

```javascript
var numberToDate = require('number-to-date');

// Get a month from a number
numberToDate(1, 'month'); // "January"

// Get a month from a number in French
numberToDate(1, 'month', 'fr'); // "Janvier"

// Get a day from a number
numberToDate(1, 'day'); // "Monday"

// Get a day from a number in French
numberToDate(1, 'day', 'fr'); // "Lundi"
```

Supported languages:
* English: _en_
* French: _fr_
* German: _de_

## Contribution

You can add language by creating a folder the in `i18l` which will contain two JSONs file.

It uses [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) codes.

Don't forget to add the language to the README.md file.
