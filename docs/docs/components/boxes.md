---
layout: docs
drawer: true
title: Boxes
files:
    - ~wireframe-framework/scss/components/box
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Default

<div class="grid">
    <div class="lg-6 sm-12 xs-12">
        <div class="box prototype-grid">
            <p class="box-header">
                Pinned post
            </p>

            <div class="box-main">
                <div class="box-content">
                    <img src="http://placehold.it/50x50" alt="Placeholder" width="50px" height="50px">
                </div>

                <p class="box-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
            </div>

            <div class="box-footer align-end">
                <a class="button is-invisible">Like</a>
                <a class="button is-invisible">Comment</a>
                <a class="button is-invisible">Share</a>
            </div>
        </div>
    </div>

    <div class="lg-6 sm-12 xs-12">
        <div class="box prototype-grid">
            <div class="box-header">
                <div class="box-content">
                    <img class="is-rounded" src="http://placehold.it/32x32" alt="Placeholder" width="32px" height="32px">
                </div>

                <div class="box-content">
                    John Doe
                </div>
            </div>

            <div class="box-main">
                <p class="box-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
            </div>
        </div>
    </div>
</div>

{% highlight html %}
<div class="box">
    <p class="box-header">
        Pinned post
    </p>

    <div class="box-main">
        <div class="box-content">
            <img src="http://placehold.it/50x50" alt="Placeholder" width="50px" height="50px">
        </div>

        <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
    </div>

    <div class="box-footer align-end">
        <a class="button is-invisible">Like</a>
        <a class="button is-invisible">Comment</a>
        <a class="button is-invisible">Share</a>
    </div>
</div>
{% endhighlight %}

{% highlight html %}
<div class="box">
    <div class="box-header">
        <div class="box-content">
            <img class="is-rounded" src="http://placehold.it/32x32" alt="Placeholder" width="32px" height="32px">
        </div>

        <div class="box-content">
            John Doe
        </div>
    </div>

    <div class="box-main">
        <p class="box-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
    </div>
</div>
{% endhighlight %}

## Box as a container

<div class="box prototype-grid">
    <div class="box-main">
        <div class="box-content align-middle align-between">
            <div class="is-flex align-center">
                <div class="control is-small">
                    <input class="input" placeholder="Enter your username" />
                    <label class="label">Username</label>
                </div>

                <div class="control is-small">
                    <input class="input" placeholder="Enter your password" />
                    <label class="label">Password</label>
                </div>
            </div>

            <ul class="list is-inline align-center">
                <li><button class="button pill-left">Reset</button></li>
                <li><button class="button pill-right">Login</button></li>
            </ul>
        </div>
    </div>
</div>

{% highlight html %}
<div class="box prototype-grid">
    <div class="box-main">
        <div class="box-content align-middle align-between">
            <div class="is-flex align-center">
                <div class="control is-small">
                    <input class="input" placeholder="Enter your username" />
                    <label class="label">Username</label>
                </div>

                <div class="control is-small">
                    <input class="input" placeholder="Enter your password" />
                    <label class="label">Password</label>
                </div>
            </div>

            <ul class="list is-inline align-center">
                <li><button class="button pill-left">Reset</button></li>
                <li><button class="button pill-right">Login</button></li>
            </ul>
        </div>
    </div>
</div>
{% endhighlight %}
