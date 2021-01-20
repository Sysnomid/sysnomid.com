---
title: 'Using Hyvor Talk Comments on 11ty'
excerpt: 'Getting Hyvor Talk Comments Setup on 11ty'
date: 2021-01-15
---

[Hyvor Talk](https://talk.hyvor.com) is a commenting system for websites, it supports CMS's like WordPress and Static Site Generators like Jekyll.

If you want to get setup with Hyvor Talk on 11ty, you should first sign up for Hyvor Talk at https://talk.hyvor.com and go to the console and register your domain name.

<img src="/assets/img/2021-01-17_17-52.png" alt="Hyvor Console" height="600" width="400" />

Then create a 11ty project, tutorial here [https://www.11ty.dev/docs/getting-started/](https://www.11ty.dev/docs/getting-started/). 

In the project, create a ``` _data ``` folder, and in it a ```site.json``` file with this in it,
     
     {

        "url": "https://example.com",

     } 

After that create a post layout ```.njk``` file in your ```_includes``` folder, and in the area you want comments put this 
```
<script type="text/javascript">
    var HYVOR_TALK_WEBSITE = 534; // DO NOT CHANGE THIS
    var HYVOR_TALK_CONFIG = {
        url: "{{data.url}}",
        id: "{{page.url}}"
    };
</script>
<script async type="text/javascript" src="//talk.hyvor.com/web-api/embed"></script> 
```

Then in your ```posts``` directory, make a ```posts.json``` file making all the files use the post layout njk file we made earlier,
```
{

    "layout": "posts",

}
```

And that's all! Now you have comments on your 11ty website courtesy of Hyvor Talk, all that's left is to make things people want to comment on. Get writing!
