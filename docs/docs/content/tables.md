---
layout: docs
drawer: true
title: Tables
files:
    - ~wireframe-framework/scss/content/table
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Default

<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>john_doe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>jan_kowalski</td>
            <td>Jan</td>
            <td>Kowalski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>jean_pierre</td>
            <td>Jean</td>
            <td>Pierre</td>
        </tr>
    </tbody>
</table>

{% highlight html %}
<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>john_doe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>jan_kowalski</td>
            <td>Jan</td>
            <td>Kowalski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>jean_pierre</td>
            <td>Jean</td>
            <td>Pierre</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

## Striped `.is-striped`

<table class="table is-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>john_doe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>jan_kowalski</td>
            <td>Jan</td>
            <td>Kowalski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>jean_pierre</td>
            <td>Jean</td>
            <td>Pierre</td>
        </tr>
    </tbody>
</table>

## Hoverable `.is-hoverable`

<table class="table is-hoverable">
    <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>john_doe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>jan_kowalski</td>
            <td>Jan</td>
            <td>Kowalski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>jean_pierre</td>
            <td>Jean</td>
            <td>Pierre</td>
        </tr>
    </tbody>
</table>

## Fixed `.is-fixed`

`.is-fixed` forces all cells within a table to occupy the same width as each other. This also has performance benefits because the browser does not need to (re)calculate cell dimensions based on content it discovers, the table can be rendered very quickly.

<table class="table is-fixed">
    <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>john_doe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>jan_kowalski</td>
            <td>Jan</td>
            <td>Kowalski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>jean_pierre</td>
            <td>Jean</td>
            <td>Pierre</td>
        </tr>
    </tbody>
</table>
