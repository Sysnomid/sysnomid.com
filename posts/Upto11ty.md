---
title: Using Up To 11ty
excerpt: 'How to use my new, fast, and minimal 11ty theme'
date: 2021-01-30
---

Here is the full setup for my 11ty theme, **UpTo11ty** that powers sysnomid.com

Demo: [https://upto11ty.netlify.app/](https://upto11ty.netlify.app/)

Github: [https://github.com/Sysnomid/UpTo11ty](https://github.com/Sysnomid/UpTo11ty)

**UpTo11ty is a highly configurable, performant, and minimal theme.**

![Lighthouse Score](https://sysnomid.com/assets/img/2021-01-30_19-36.png)

Let's Get Started!

## Installation
Start with running:

        git clone https://github.com/Sysnomid/UpTo11ty.git
        npm install 

 Then, to start the theme in a development server use ```npm run dev``` or for production ```npm run build```.

## Configuration

### Site Details
To change the title, url, and other data, go to ```_data/site.json``` in the theme folder.

``` _data/site.json ```     

     {
        "title": "Up To 11ty",
        "name": "Up To 11ty",
        "url": "https://upto11ty.netlify.app",
        "bio": "A minimal, performant 11ty theme",
        "email": "email@example.com",
        "github": "https://github.com/example",
        "sitemap": "/sitemap.xml",
        "weight": 500,
        "robots": "/robots.txt"
    }
    

Now edit all of the JSON fields to your liking.

### Site Look
If you want to change the color, fonts, sizings, and styles of the site, edit ``` assets/css/main.css ```

    Theme Global CSS Block:
        ``` /* Global Styling - Theme, Font, Overflow, Padding, Word-Wrap, etc */
        html, 
        body {
            color: #c5c5c5;
            background-color: #282c35;
            font-family: 'Merriweather';
            padding-left: 2%;
            padding-right: 2%;
            word-wrap: break-word;
            overflow-x: hidden;
            font-display: block;
        }
        ```

## Content 

### Partials
The ``` _includes ``` directory contains 6 files.

     _includes
            |-- footer.njk
            |-- head.njk
            |-- layout.njk
            |-- menu.njk
            |-- page.njk
            |-- posts.njk

Straightforwardly, you edit:

 ``` layout.njk ``` for the base layout 

 ``` menu.njk ``` for navigation (which on the stock theme is set to the bio, although you can change it to a series of links) 

 ``` footer.njk ``` for the footer 

 ``` page.njk ``` for pages 

 ``` post.njk ``` for posts

 ``` head.njk ``` to handle the html <head> of the page.

### Posts
Making posts is the same as any other 11ty theme, go to ``` posts ```, and create a Markdown file with the appropriate frontmatter at the top of the page.

        ---
        title: Example
        excerpt: 'Post'
        date: 2021-01-01
        ---
            
        
The ``` posts ``` directory has all the files set to the ``` post ``` layout in ``` posts.json ```, but you can edit that to whatever layout you would want. 

posts/posts.json

        {
            "layout": "posts",
            "tags": ["posts"]
        }

## Pages
If you want to make standard page, make a Markdown file in ``` pages ``` and use the page.njk layout.

    ---
    permalink: example
    layout: page
    title: title
    ---

### Images
    You can add images to ``` assets/img ```.
    You can also change drop whatever favicon and apple-touch-icon.png file as well into the ``` assets folder ```

### Adding Comments
You can add any commenting system to the theme, just drop its embed code into the specified area in ``` _includes/posts.njk ```.

_includes/posts.njk

```    
{% raw %}
    ---
    layout: layout    
    ---

    <!DOCTYPE html>
    <html lang="en">
    <body>
        <div class="margin-main pt-1vh">
            <div class="lg underline u-red">{{ title }}</div>
            <p class="center date pb"><strong>{{ date | readableDate}}</strong></p>
        <div class="date content">{{ content | safe }}</div>
        
        <!-- 
            Comments go Here
        -->
        
        <div class="back-link">
            <a href="/">← Back</a>
        </div>
        </div>
    </body>
    </html>
{% endraw %} 
```

### 404 Page
404 is handled in ``` 404.html ```. 

If you use ``` eleventy --serve ```, [check out this page on the 11ty docs](https://www.11ty.dev/docs/quicktips/not-found/) to get 404 routing.



## Other Stuff

### Date Filter
This theme uses a Nunjucks filter to make readable post dates with Luxon.

lib/filters/readableDate.js

    const { DateTime } = require('luxon');

    module.exports = (date) => {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('d LLLL yyyy hh:mm a');
    };

### Image Optimization
Eleventy-img is used to create optimized images.

.eleventy.js Image Optimization config

    const Image = require("@11ty/eleventy-img");

    async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [300],
        formats: ["avif", "jpeg"]
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
    }

### .eleventy.js Config 

Implemented Nunjucks Readable Date Filter, Image Optimization, and assets folder PassthroughCopy.

.eleventy.js module.exports

        module.exports = function(eleventyConfig) {
            eleventyConfig.addFilter('readableDate', require('./lib/filters/readableDate'));
            eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
            eleventyConfig.addLiquidShortcode("image", imageShortcode);
            eleventyConfig.addJavaScriptFunction("image", imageShortcode);
            eleventyConfig.addPassthroughCopy('assets')
            eleventyConfig.addPassthroughCopy('img')
            return {
                passthroughFileCopy: true
            }
        }

### robots.txt and sitemap.xml
robots.txt and sitemap.xml templates located in ``` pages/robots.txt.njk ``` and ``` pages/sitemap.njk ```.

<br />

Now that you are now done setting up, its time to turn your SSG experience **Up to 11ty**.










