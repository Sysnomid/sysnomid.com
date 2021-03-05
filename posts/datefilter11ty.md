---
title: 'Date Filter on 11ty'
date: 2021-03-03
excerpt: 'Creating a Readable Date filter with 11ty, Nunjucks, and Luxon'
---

Here's how you can make a Readable Data Nunjucks Filter in 11ty with Luxon.

First run:
``` npm install luxon ```

Then create a lib folder, and in that folder make a ```readableDate.js``` file

<code>
  const { DateTime } = require('luxon');

  module.exports = (date) => {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('d LLLL yyyy hh:mm a');
  };
</code>

After that add this to ```.eleventy.js```

  <code> module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('readableDate', require('./lib/readableDate'));
  }
  </code>

If you want to use this in your templates, do this

```{% raw %} {{ variable_name | readableDate }} {% endraw %}```

That turns this ``` 2021-03-03 ``` to this ``` 4 March 2020 ```


