---
layout: docs
drawer: true
title: Forms
files:
    - wireframe-framework/scss/components/forms/control.scss
    - wireframe-framework/scss/components/forms/buttons.scss
    - wireframe-framework/scss/components/forms/inputs.scss
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
    <button class="button"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
    <button class="button is-rounded">Rounded button</button>
    <button class="button is-outline">Outlined button</button>
    <button class="button is-invisible">Invisible button</button>
    <button class="button is-disabled">Disabled button</button>
    <button class="button is-full">Wull-width button</button>
</div>

{% highlight html %}
<button class="button"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
<button class="button is-rounded">Rounded button</button>
<button class="button is-outline">Outlined button</button>
<button class="button is-invisible">Invisible button</button>
<button class="button is-disabled">Disabled button</button>
<button class="button is-full">Wull-width button</button>
{% endhighlight %}

#### Mixed buttons:

<div class="control">
    <button class="button is-rounded is-outline"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
</div>

{% highlight html %}
<button class="button is-rounded is-outline"><i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i> Button</button>
{% endhighlight %}

#### Pilled buttons:

<ul class="list is-inline">
    <li><button class="button pill-left">Button</button></li>
    <li><button class="button">Button</button></li>
    <li><button class="button pill-right">Button</button></li>
</ul>

{% highlight html %}
<ul class="list is-inline">
    <li><button class="button pill-left">Button</button></li>
    <li><button class="button">Button</button></li>
    <li><button class="button pill-right">Button</button></li>
</ul>
{% endhighlight %}

#### State buttons:

<div class="control">
    <button class="button is-success">Button</button>
    <button class="button is-info">Button</button>
    <button class="button is-warning">Button</button>
    <button class="button is-danger">Button</button>
</div>

{% highlight html %}
<div class="control">
    <button class="button is-success">Button</button>
    <button class="button is-info">Button</button>
    <button class="button is-warning">Button</button>
    <button class="button is-danger">Button</button>
</div>
{% endhighlight %}

---

### Inputs

<div class="control is-small">
    <input class="input" placeholder="John" />
    <label class="label">First name</label>
</div>

<div class="control is-small">
    <input class="input" placeholder="Doe" />
    <label class="label">Last name</label>
</div>

<div class="control is-small">
    <input class="input" placeholder="john.doe@example.com" />
    <label class="label">Email</label>
</div>

<div class="control is-small">
    <select class="input">
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>
    </select>
    <label class="label">Select</label>
</div>

{% highlight html %}
<div class="control is-small">
    <input class="input" placeholder="John" />
    <label class="label">First name</label>
</div>

<div class="control is-small">
    <input class="input" placeholder="Doe" />
    <label class="label">Last name</label>
</div>

<div class="control is-small">
    <input class="input" placeholder="john.doe@example.com" />
    <label class="label">Email</label>
</div>

<div class="control is-small">
    <select class="input">
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>
    </select>

    <label class="label">Select</label>
</div>
{% endhighlight %}
