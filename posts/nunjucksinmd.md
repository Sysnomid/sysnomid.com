---
title: 'Nunjucks in Markdown Code Blocks'
date: 2021-01-24
excerpt: 'Use escaped Nunjucks in a Markdown code block'
---

Nunjucks is the templating langauge commonly used in the 11ty SSG.

If you want to have an escaped Nunjucks statement in a Markdown code block, you wrap it in a ``` {% raw %} {% raw %} {% endraw %}``` block.

## Example 
```
{% raw %}
{% raw %}
    {{ page.url }}
{% raw %}
{% endraw %}
```

This returns the raw contents of the text, and not the parsed Nunjucks. 

If you didn't use the ``` {% raw %} {% raw %} {% endraw %}``` block, ```{% raw %} {{ page.url }} {% endraw %}``` by itself would show up as ```/posts/nunjucksinmd/``` in the code block.