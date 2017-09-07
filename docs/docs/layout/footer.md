---
layout: docs
drawer: true
title: Footer
files:
    - ~wireframe-framework/scss/layout/footer
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<style>
.page {
    display: flex;

    padding: 5rem 0 0 0;
    margin: 0;

    height: auto;
    width: 100%;

    border-width: 1px;
    border-style: solid;
    border-color: #dfdfdf;
    border-radius: 3px;
}
</style>

## Default

<div class="page">
    <footer class="footer">
        <ul class="list is-extended is-stacking">
            <li class="is-espaced"><a href="#">Informations</a></li>
            <li class="is-espaced"><a href="#">Terms of service</a></li>
            <li class="is-espaced"><a href="#">Press</a></li>
            <li class="is-espaced"><a href="#">Autors</a></li>
            <li class="is-espaced"><a href="#">Jobs</a></li>
        </ul>

        <p>Developed with love by your friends at…</p>
    </footer>
</div>

{% highlight html %}
<footer class="footer">
    <ul class="list is-extended is-stacking">
        <li class="is-espaced"><a href="#">Informations</a></li>
        <li class="is-espaced"><a href="#">Terms of service</a></li>
        <li class="is-espaced"><a href="#">Press</a></li>
        <li class="is-espaced"><a href="#">Autors</a></li>
        <li class="is-espaced"><a href="#">Jobs</a></li>
    </ul>

    <p>Developed with love by your friends at…</p>
</footer>
{% endhighlight %}


## Menu `.is-menu`

<div class="page">
    <footer class="footer is-menu">
        <ul class="footer-icons">
            <li><a href="#"><i class="fa fa-user"></i></a></li>
            <li><a href="#"><i class="fa fa-book"></i></a></li>
            <li><a href="#"><i class="fa fa-bell"></i></a></li>
            <li><a href="#"><i class="fa fa-bomb"></i></a></li>
            <li><a href="#"><i class="fa fa-bolt"></i></a></li>
        </ul>
    </footer>
</div>

{% highlight html %}
<footer class="footer is-menu">
    <ul class="footer-icons">
        <li><a href="#"><i class="fa fa-user"></i></a></li>
        <li><a href="#"><i class="fa fa-book"></i></a></li>
        <li><a href="#"><i class="fa fa-bell"></i></a></li>
        <li><a href="#"><i class="fa fa-bomb"></i></a></li>
        <li><a href="#"><i class="fa fa-bolt"></i></a></li>
    </ul>
</footer>
{% endhighlight %}
