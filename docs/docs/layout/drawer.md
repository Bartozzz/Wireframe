---
layout: docs
drawer: true
title: Drawer
files:
    - ~wireframe-framework/scss/layout/drawer
    - ~wireframe-framework/scss/components/menu
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<style>
.page {
    display: flex;

    height: 70vh;
    width: 100%;

    border-width: 1px;
    border-style: solid;
    border-color: #dfdfdf;
    border-radius: 3px;
}
</style>

## Default

<div class="page">
    <menu class="drawer is-unselectable" role="navigation">
        <header class="drawer-header">
            Drawer header
        </header>

        <ul class="drawer-content menu" role="menu">
            <li class="menu-item is-title">
                <a href="#">Group title</a>
            </li>

            <li class="menu-item">
                <a href="#">Child 1</a>
            </li>

            <li class="menu-item">
                <a href="#">Child 2</a>
            </li>

            <li class="menu-item is-title">
                <a href="#">Group title</a>
            </li>

            <li class="menu-item">
                <a href="#">Child 1</a>
            </li>

            <li class="menu-item">
                <a href="#">Child 2</a>
            </li>
        </ul>

        <footer class="drawer-footer">
            Drawer footer
        </footer>
    </menu>
</div>

{% highlight html %}
<menu class="drawer is-unselectable" role="navigation">
    <header class="drawer-header">
        Drawer header
    </header>

    <ul class="drawer-content menu" role="menu">
        <li class="menu-item is-title">
            <a href="#">Group title</a>
        </li>

        <li class="menu-item">
            <a href="#">Child 1</a>
        </li>

        <li class="menu-item">
            <a href="#">Child 2</a>
        </li>

        <li class="menu-item is-title">
            <a href="#">Group title</a>
        </li>

        <li class="menu-item">
            <a href="#">Child 1</a>
        </li>

        <li class="menu-item">
            <a href="#">Child 2</a>
        </li>
    </ul>

    <footer class="drawer-footer">
        Drawer footer
    </footer>
</menu>
{% endhighlight %}
