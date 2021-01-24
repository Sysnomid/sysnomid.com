---
title: 'Nunjucks in Markdown Code Blocks'
date: 2021-01-24
excerpt: 'Use escaped Nunjucks in a Markdown code block'
---

Nunjucks is the templating langauge commonly used in the 11ty SSG.

If you want to have a Nunjucks statement in a Markdown code block, you wrap it in a ``` {% raw %} {% raw %} {% endraw %}``` block.

## Example 
```
{% raw %}
    {{ page.url }}
{% endraw %}
```

This returns the raw contents of the text, and not the parsed Nunjucks. 

If you didn't use the ``` {% raw %} {% raw %} {% endraw %}``` block, ```{% raw %} {{ page.url }} {% endraw %}``` would show up as ```/posts/nunjucksinmd/``` in the code block.