---
layout: docs
drawer: true
title: Skeleton
files:
    - ~wireframe-framework/scss/layout/app
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<style>
.page {
    display: flex;

    height: 30vh;
    width: 100%;

    border-width: 1px;
    border-style: solid;
    border-color: #dfdfdf;
    border-radius: 3px;

    overflow-x: hidden;
    overflow-y: hidden;
}
</style>

## Normal header/footer

Header and footer will scroll with the rest of the content.

<div class="page">
    <div class="app">
        <main class="app-container">
            <div class="app-scroll">
                <header class="header is-unselectable">
                    <div class="content align-between">
                        <div class="header-menu">
                            <div class="drawer-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div class="header-menu-logo">
                                Logo
                            </div>
                        </div>

                        <nav class="header-menu">
                            <ul>
                                <li class="header-menu-item is-active">Item 1</li>
                                <li class="header-menu-item">Item 2</li>
                            </ul>
                        </nav>
                    </div>
                </header>

                …
            </div>
        </main>
    </div>
</div>

{% highlight html %}
<body class="app">
    <main class="app-container">
        <div class="app-scroll">
            <header class="header">
                …
            </header>

            …

            <footer class="footer">
                …
            </footer>
        </div>
    </main>
</body>
{% endhighlight %}

## Fixed header/footer

If you want your header or footer to be fixed (so it doesn't scroll with the rest of the content), put your static elements in `.app-container` and scrollable contant inside `.app-scroll`, like so:

<div class="page">
    <div class="app">
        <main class="app-container">
            <header class="header is-unselectable">
                <div class="content align-between">
                    <div class="header-menu">
                        <div class="drawer-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div class="header-menu-logo">
                            Logo
                        </div>
                    </div>

                    <nav class="header-menu">
                        <ul>
                            <li class="header-menu-item is-active">Item 1</li>
                            <li class="header-menu-item">Item 2</li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div class="app-scroll">
                …
            </div>
        </main>
    </div>
</div>

{% highlight html %}
<body class="app">
    <main class="app-container">
        <header class="header">
            …
        </header>

        <div class="app-scroll">
            …
        </div>

        <footer class="footer">
            …
        </footer>
    </main>
</body>
{% endhighlight %}

## Fixed drawer

<div class="page">
    <div class="app">
        <menu class="drawer is-unselectable">
            <header class="drawer-header">
                Drawer header
            </header>

            <ul class="drawer-content menu">
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

        <main class="app-container">
            <div class="app-scroll">
                …
            </div>
        </main>
    </div>
</div>

{% highlight html %}
<body class="app">
    <menu class="drawer">
        …
    </menu>

    <main class="app-container">
        <div class="app-scroll">
            …
        </div>
    </main>
</body>
{% endhighlight %}

## All-in-one

<div class="page">
    <div class="app">
        <menu class="drawer is-unselectable">
            <header class="drawer-header">
                Drawer header
            </header>

            <ul class="drawer-content menu">
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

        <main class="app-container">
            <header class="header is-unselectable">
                <div class="content align-between">
                    <div class="header-menu">
                        <div class="drawer-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div class="header-menu-logo">
                            Logo
                        </div>
                    </div>

                    <nav class="header-menu">
                        <ul>
                            <li class="header-menu-item is-active">Item 1</li>
                            <li class="header-menu-item">Item 2</li>
                        </ul>
                    </nav>
                </div>
            </header>

            <header class="header is-unselectable is-fluid align-end">
                <nav class="header-menu">
                    <ul>
                        <li class="button is-rounded is-outline">Item 1</li>
                        <li class="button is-rounded is-outline">Item 2</li>
                        <li class="button is-rounded is-outline">Item 3</li>
                        <li class="button is-rounded is-outline">Item 4</li>
                    </ul>
                </nav>
            </header>

            <div class="app-scroll">
                …
            </div>
        </main>
    </div>
</div>

{% highlight html %}
<body class="app">
    <menu class="drawer">
        …
    </menu>

    <main class="app-container">
        <header class="header">
            …
        </header>

        <header class="header is-fluid">
            …
        </header>

        <div class="app-scroll">
            …
        </div>

        <footer class="footer">
            …
        </footer>
    </main>
</body>
{% endhighlight %}
