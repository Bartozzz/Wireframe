---
layout: docs
drawer: true
title: Align
files:
    - wireframe-framework/scss/utils/align/align-around.scss
    - wireframe-framework/scss/utils/align/align-between.scss
    - wireframe-framework/scss/utils/align/align-bottom.scss
    - wireframe-framework/scss/utils/align/align-center.scss
    - wireframe-framework/scss/utils/align/align-end.scss
    - wireframe-framework/scss/utils/align/align-middle.scss
    - wireframe-framework/scss/utils/align/align-start.scss
    - wireframe-framework/scss/utils/align/align-top.scss
---

<style>
.demo,
.demo-box {
    box-sizing: border-box;
    position: relative;
    display: flex;

    margin: .5rem;
    padding: .5rem 2rem;

    background-color: rgba(90, 90, 90, .25);
    border-radius: 3px;

    text-align: center;
    color: #000000;

    overflow-x: hidden;
    overflow-y: hidden;
}

.demo-box {
    height: 3rem;

    align-items: center;
    justify-content: center;
}

.demo-big {
    height: 8rem;
}
</style>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## `.align-around`

<div class="demo align-around">
    <div class="demo-box">Item 1</div>
    <div class="demo-box">Item 2</div>
    <div class="demo-box">Item 3</div>
</div>

{% highlight html %}
<div class="align-around">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
{% endhighlight %}

## `.align-between`

<div class="demo align-between">
    <div class="demo-box">Item 1</div>
    <div class="demo-box">Item 2</div>
    <div class="demo-box">Item 3</div>
</div>

{% highlight html %}
<div class="align-between">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
{% endhighlight %}

## `.align-start`, `.align-center`, `.align-end`

<div class="demo align-start">
    <div class="demo-box">Item 1</div>
</div>

<div class="demo align-center">
    <div class="demo-box">Item 1</div>
</div>

<div class="demo align-end">
    <div class="demo-box">Item 1</div>
</div>

{% highlight html %}
<div class="align-start">
    <div>Item 1</div>
</div>

<div class="align-center">
    <div>Item 1</div>
</div>

<div class="align-end">
    <div>Item 1</div>
</div>
{% endhighlight %}

## `.align-top`, `.align-middle`, `.align-bottom`

<div class="demo demo-big align-top">
    <div class="demo-box">Item 1</div>
</div>

<div class="demo demo-big align-middle">
    <div class="demo-box">Item 1</div>
</div>

<div class="demo demo-big align-bottom">
    <div class="demo-box">Item 1</div>
</div>

{% highlight html %}
<div class="align-top">
    <div>Item 1</div>
</div>

<div class="align-middle">
    <div>Item 1</div>
</div>

<div class="align-bottom">
    <div>Item 1</div>
</div>
{% endhighlight %}
