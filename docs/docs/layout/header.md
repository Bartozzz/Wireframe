---
layout: docs
drawer: true
title: Header
files:
    - ~wireframe-framework/scss/layout/header
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<style>
.page {
    display: flex;

    height: 20vh;
    width: 100%;

    border-width: 1px;
    border-style: solid;
    border-color: #dfdfdf;
    border-radius: 3px;
}
</style>

## Default

Toggleable on mobiles.

<div class="page">
    <header class="header is-unselectable">
        <div class="content align-between">
            <div class="header-menu">
                <div class="drawer-toggle" aria-label="Drawer">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="header-menu-logo">
                    Logo
                </div>
            </div>

            <nav class="header-menu" role="menu">
                <ul>
                    <li class="header-menu-item is-active">Item 1</li>
                    <li class="header-menu-item">Item 2</li>
                </ul>
            </nav>
        </div>
    </header>
</div>

{% highlight html %}
<header class="header is-unselectable">
    <div class="content align-between">
        <div class="header-menu">
            <div class="drawer-toggle" aria-label="Drawer">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="header-menu-logo">
                Logo
            </div>
        </div>

        <nav class="header-menu" role="menu">
            <ul>
                <li class="header-menu-item is-active">Item 1</li>
                <li class="header-menu-item">Item 2</li>
            </ul>
        </nav>
    </div>
</header>
{% endhighlight %}

## Fluid `.is-fluid`

Scrollable on mobiles.

<div class="page">
    <header class="header align-end">
        <ul class="header-menu is-fluid" role="menu">
            <li class="button is-rounded">Sub-item 1</li>
            <li class="button is-rounded is-outline">Sub-item 2</li>
            <li class="button is-rounded is-outline">Sub-item 3</li>
            <li class="button is-rounded is-outline">Sub-item 4</li>
            <li class="button is-rounded is-outline">Sub-item 5</li>
        </ul>
    </header>
</div>

{% highlight html %}
<header class="header align-end">
    <ul class="header-menu is-fluid" role="menu">
        <li class="button is-rounded">Sub-item 1</li>
        <li class="button is-rounded is-outline">Sub-item 2</li>
        <li class="button is-rounded is-outline">Sub-item 3</li>
        <li class="button is-rounded is-outline">Sub-item 4</li>
        <li class="button is-rounded is-outline">Sub-item 5</li>
    </ul>
</header>
{% endhighlight %}
