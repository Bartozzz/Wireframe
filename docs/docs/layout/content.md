---
layout: docs
drawer: true
title: Content
files:
    - wireframe-framework/scss/layout/content.scss
    - wireframe-framework/scss/layout/block.scss
---

<style>
.page,
.page-big {
    display: flex;

    width: 100%;

    border-width: 1px;
    border-style: solid;
    border-color: #dfdfdf;
    border-radius: 3px;
}

.page-big {
    height: 30rem;
}

.page-bg {
    background-image: linear-gradient(white, #f5f5f5);
}
</style>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Content

### Default

Content with basic margins and paddings. Content is always centered horizontally and has a `max-width`.

<div class="page">
    <div class="content typo">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>

{% highlight html %}
<div class="content typo">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
{% endhighlight %}

### Full `.is-full`

Takes all the height available.

<div class="page-big">
    <div class="page-bg content is-full">
    </div>
</div>

{% highlight html %}
<div class="content is-full">
    <!-- … -->
</div>
{% endhighlight %}

## Block

Basically a `.content` without a `max-width`, so it fills all the space available. Margins are slightly different.

<div class="page">
    <div class="block typo">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>

{% highlight html %}
<div class="block typo">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
{% endhighlight %}
