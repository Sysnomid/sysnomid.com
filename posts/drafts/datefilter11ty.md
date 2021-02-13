---
title: 'Date Filter on 11ty'
date: 2021-01-24
excerpt: 'Creating a Readable Date filter with 11ty, Nunjucks, and Luxon'
---

``` npm install luxon ```

lib/ folder

```

const { DateTime } = require('luxon');

module.exports = (date) => {
  return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('d LLLL yyyy hh:mm a');
};

```
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('readableDate', require('./lib/filters/readableDate'));
}
```