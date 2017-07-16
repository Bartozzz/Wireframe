---
layout: docs
drawer: true
title: Tables
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Normal

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
            <td>johndoe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>lanek</td>
            <td>Bart</td>
            <td>Laniewski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>anon</td>
            <td>Frank</td>
            <td>Foo</td>
        </tr>
    </tbody>
</table>

## Striped

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
            <td>johndoe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>lanek</td>
            <td>Bart</td>
            <td>Laniewski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>anon</td>
            <td>Frank</td>
            <td>Foo</td>
        </tr>
    </tbody>
</table>

## Hoverable

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
            <td>johndoe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>lanek</td>
            <td>Bart</td>
            <td>Laniewski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>anon</td>
            <td>Frank</td>
            <td>Foo</td>
        </tr>
    </tbody>
</table>

## Fixed

`.is-fixed` forces all cells within a table to occupy the same width as each other. This also has performance benefits: because the browser does not need to (re)calculate cell dimensions based on content it discovers, the table can be rendered very quickly.

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
            <td>johndoe</td>
            <td>John</td>
            <td>Doe</td>
        </tr>

        <tr>
            <td>2</td>
            <td>lanek</td>
            <td>Bart</td>
            <td>Laniewski</td>
        </tr>

        <tr>
            <td>3</td>
            <td>anon</td>
            <td>Frank</td>
            <td>Foo</td>
        </tr>
    </tbody>
</table>
