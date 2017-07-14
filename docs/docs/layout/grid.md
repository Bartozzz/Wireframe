---
layout: docs
drawer: true
title: Grid
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Dynamic columns

Dynamic columns will fit all the remaining space inside `.grid`. Those are created using `.auto` class name. Beware, auto-sized columns are not responsive by default by Wireframe. Therefore, you have to handle different breakpoints yourself. We encourage you to use sized columns for a better user-experience.

<div class="grid prototype-grid-vertical">
    <div class="auto">
        <div class="box"><div class="box-main align-center">Auto-sized tile</div></div>
    </div>

    <div class="auto">
        <div class="box"><div class="box-main align-center">Auto-sized tile</div></div>
    </div>

    <div class="auto">
        <div class="box"><div class="box-main align-center">Auto-sized tile</div></div>
    </div>
</div>

<div class="grid prototype-grid-vertical">
    <div class="auto">
        <div class="box"><div class="box-main align-center">Auto-sized tile</div></div>
    </div>

    <div class="auto">
        <div class="box"><div class="box-main align-center">Auto-sized tile</div></div>
    </div>
</div>

{% highlight html %}
<div class="grid">
    <div class="auto">
        <!-- … -->
    </div>

    <div class="auto">
        <!-- … -->
    </div>

    <div class="auto">
        <!-- … -->
    </div>
</div>
{% endhighlight %}

## Sized columns

Sized columns occupe a predefined percentage of their parent element. Those are named using one of three prefixed for each viewport: `.lg-n`, `.sm-n`, `.xs-n` for respectively desktops, tablets and mobiles, where n is the amount of columns. By default, the grid system can handle 12 columns for a row. This arbitrary value can be modified by changing the `$grid-columns-amount` value.

<div class="grid prototype-grid-vertical">
    <div class="lg-1">
        <div class="box"><div class="box-main align-center">1</div></div>
    </div>

    <div class="lg-11">
        <div class="box"><div class="box-main align-center">11</div></div>
    </div>
</div>

<div class="grid prototype-grid-vertical">
    <div class="lg-2">
        <div class="box"><div class="box-main align-center">2</div></div>
    </div>

    <div class="lg-10">
        <div class="box"><div class="box-main align-center">10</div></div>
    </div>
</div>

<div class="grid prototype-grid-vertical">
    <div class="lg-3">
        <div class="box"><div class="box-main align-center">3</div></div>
    </div>

    <div class="lg-9">
        <div class="box"><div class="box-main align-center">9</div></div>
    </div>
</div>

<div class="grid prototype-grid-vertical">
    <div class="lg-4">
        <div class="box"><div class="box-main align-center">4</div></div>
    </div>

    <div class="lg-8">
        <div class="box"><div class="box-main align-center">8</div></div>
    </div>
</div>

<div class="grid prototype-grid-vertical">
    <div class="lg-5">
        <div class="box"><div class="box-main align-center">5</div></div>
    </div>

    <div class="lg-7">
        <div class="box"><div class="box-main align-center">7</div></div>
    </div>
</div>

<div class="grid prototype-grid">
    <div class="lg-6">
        <div class="box"><div class="box-main align-center">6</div></div>
    </div>

    <div class="lg-6">
        <div class="box"><div class="box-main align-center">6</div></div>
    </div>
</div>

{% highlight html %}
<div class="grid">
    <div class="lg-4 sm-6 xs-12">
        <!-- … -->
    </div>

    <div class="lg-4 sm-6 xs-12">
        <!-- … -->
    </div>

    <div class="lg-4 sm-6 xs-12">
        <!-- … -->
    </div>
</div>
{% endhighlight %}

## Grid offsets

You can specify column offsets identically as you specify its size: `.lg-o-n`, `.sm-o-n`, `.xs-o-n`, where n represents the amount of columns to offset from the left.

<div class="grid prototype-grid-vertical">
    <div class="lg-5">
        <div class="box"><div class="box-main align-center">5</div></div>
    </div>

    <div class="lg-5 lg-o-2">
        <div class="box"><div class="box-main align-center">5</div></div>
    </div>

    <div class="lg-10 lg-o-1">
        <div class="box"><div class="box-main align-center">10</div></div>
    </div>
</div>

{% highlight html %}
<div class="grid">
    <div class="lg-5 sm-3 sm-o-1">
        <!-- … -->
    </div>

    <div class="lg-5 lg-o-2 sm-3 sm-o-1">
        <!-- … -->
    </div>

    <div class="lg-10 lg-o-1 sm-3 sm-o-1">
        <!-- … -->
    </div>
</div>
{% endhighlight %}
