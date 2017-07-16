---
layout: docs
drawer: true
title: Lists
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Block lists

All lists are `<ul>` filled with `<li>` elements, optionally containing link or icons. By default, lists are vertically oriented. They don't contain any list style, nor extra margins or padding for consistency reasons.

<ul class="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

{% highlight html %}
<ul class="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
{% endhighlight %}

## Inline lists

<ul class="list is-inline">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

{% highlight html %}
<ul class="list is-inline">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
{% endhighlight %}

## Expanded lists

<ul class="list is-expanded is-inline">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

{% highlight html %}
<ul class="list is-expanded is-inline">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
{% endhighlight %}

## Stacking lists

Stacking lists are basically `.is-inline` lists which stacks on mobiles.

<ul class="list is-expanded is-stacking">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

{% highlight html %}
<ul class="list is-expanded is-stacking">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
{% endhighlight %}

# Mixing lists with other components

<ul class="list is-expanded is-inline">
    <li><a class="button is-full">Button group</a></li>
    <li><a class="button is-full">Button group</a></li>
    <li><a class="button is-full">Button group</a></li>
</ul>

{% highlight html %}
<ul class="list is-expanded is-stacking">
    <li><a class="button is-full">Button group</a></li>
    <li><a class="button is-full">Button group</a></li>
    <li><a class="button is-full">Button group</a></li>
</ul>
{% endhighlight %}
