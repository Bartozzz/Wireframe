---
layout: docs
drawer: true
title: Display
files:
    - wireframe-framework/scss/utils/display/flex.scss
    - wireframe-framework/scss/utils/display/rounded.scss
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<style>
.demo,
.demo-box {
    box-sizing: border-box;
    position: relative;

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

    display: flex;
    align-items: center;
    justify-content: center;
}

.demo-square {
    margin: 0 .5rem;

    width: 5rem;
    height: 5rem;

    background-color: rgba(90, 90, 90, .25);
}
</style>

## `.is-flex`

<div class="demo is-flex">
    <div class="demo-box">Flex child</div>
    <div class="demo-box">Flex child</div>
    <div class="demo-box">Flex child</div>
</div>

{% highlight html %}
<div class="is-flex">
    <div>Flex child</div>
    <div>Flex child</div>
    <div>Flex child</div>
</div>
{% endhighlight %}

## `.is-rounded`

<div class="demo is-flex align-center">
    <div class="demo-square"></div>
    <div class="demo-square is-rounded"></div>
</div>

{% highlight html %}
<div class="square"></div>
<div class="square is-rounded"></div>
{% endhighlight %}
