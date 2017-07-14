---
layout: docs
drawer: true
title: Forms
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Control

Every form element should be wrapped by a `.control` element.

{% highlight html %}
<div class="control">
    <!-- Form elements… -->
</div>
{% endhighlight %}

### Buttons

<div class="control">
    <button class="button">Button</button>
    <button class="button"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
    <button class="button is-outline">Outlined button outline</button>
    <button class="button is-invisible">Invisible button</button>
    <button class="button is-full">Wull-width button</button>
</div>

<div class="control">
    <button class="button is-rounded">Button</button>
    <button class="button is-rounded"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
    <button class="button is-rounded is-outline">Outlined button outline</button>
    <button class="button is-rounded is-invisible">Invisible button</button>
    <button class="button is-rounded is-full">Wull-width button</button>
</div>

{% highlight html %}
<div class="control">
    <button class="button">Button</button>
    <button class="button"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
    <button class="button is-outline">Outlined button outline</button>
    <button class="button is-invisible">Invisible button</button>
    <button class="button is-full">Wull-width button</button>
</div>

<div class="control">
    <button class="button is-rounded">Button</button>
    <button class="button is-rounded"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
    <button class="button is-rounded is-outline">Outlined button outline</button>
    <button class="button is-rounded is-invisible">Invisible button</button>
    <button class="button is-rounded is-full">Wull-width button</button>
</div>
{% endhighlight %}

### Inputs

<div class="control is-small">
    <input class="input" placeholder="John" />
    <label class="label">First name</label>

    <p class="control-error">Input required!</p>
</div>

<div class="control is-small">
    <input class="input" placeholder="Doe" />
    <label class="label">Last name</label>

    <p class="control-error">Input required!</p>
</div>

<div class="control is-small">
    <input class="input" placeholder="john.doe@example.com" />
    <label class="label">Email</label>

    <p class="control-error">Please, enter a valid e-mail!</p>
</div>
