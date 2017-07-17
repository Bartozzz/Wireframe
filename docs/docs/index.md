---
layout: docs
drawer: true
title: Documentation
---

[Wireframe](http://laniewski.me/Wireframe) is a flexible, modular and highly-customizable SCSS framework for rapid webiste prototyping. It provides you with a solid architectural baseline upon which to complete your own work. We are trying to limit the amount of design coming out of the box and focusing on giving you a solid base to work on and express your own, unique style.

## Installation

The best and probably the easiest way to install Wireframe is using a package manager. Right now, it is only available on Node Package Manager, accessible as `wireframe-framework`.

{% highlight bash %}
$ npm install wireframe-framework
{% endhighlight %}

You can also download Wireframe and save it into your project’s `css` directory. This method is not recommended because you lose the ability to easily and quickly manage and update Wireframe as a dependency and, thus, you have to include the entire bundle instead of only the components you really need.

## Getting started

Wireframe follows a specific folder structure, which you can follow as well in your own CSS directory:

{% highlight plain %}
wireframe-framework/
├── css/
│   └── index.css         -- compiled bundle (all-in-one)
└── scss/
│   ├── configuration/    -- global variables, site-wide settings, config
│   ├── components/       -- discrete, complete parts of UI such as forms
│   ├── content/          -- unclassed HTML elements, such as typography
│   ├── layout/           -- very basic elements of your website skeleton
│   ├── resets/           -- low-specificity, far-reaching rulesets
│   ├── utils/            -- override, utility and helper classes
│   └── index.scss        -- main file (glues all parts together)
└── docs/
    └── …
{% endhighlight %}

{% highlight scss %}
// Configuration, basic functions and mixins:
@import "wireframe-framework/scss/configuration/functions/split-str";
@import "wireframe-framework/scss/configuration/functions/strip-units";
@import "wireframe-framework/scss/configuration/functions/to-length";
@import "wireframe-framework/scss/configuration/functions/to-number";
@import "wireframe-framework/scss/configuration/mixins/typography";
@import "wireframe-framework/scss/configuration/mixins/responsive";
@import "wireframe-framework/scss/configuration/mixins/clearfix";
@import "wireframe-framework/scss/configuration/typography";
@import "wireframe-framework/scss/configuration/responsive";
@import "wireframe-framework/scss/configuration/colors";

// Utils:
@import "wireframe-framework/scss/utils/responsive/display";
@import "wireframe-framework/scss/utils/prototype/grid";
@import "wireframe-framework/scss/utils/display/flex";
@import "wireframe-framework/scss/utils/display/rounded";
@import "wireframe-framework/scss/utils/align/align-start";
@import "wireframe-framework/scss/utils/align/align-center";
@import "wireframe-framework/scss/utils/align/align-end";
@import "wireframe-framework/scss/utils/align/align-top";
@import "wireframe-framework/scss/utils/align/align-middle";
@import "wireframe-framework/scss/utils/align/align-bottom";
@import "wireframe-framework/scss/utils/align/align-around";
@import "wireframe-framework/scss/utils/align/align-between";
@import "wireframe-framework/scss/utils/is-unselectable";
@import "wireframe-framework/scss/utils/is-reversed";

// Resets:
@import "wireframe-framework/scss/resets/normalize";
@import "wireframe-framework/scss/resets/highlight";
@import "wireframe-framework/scss/resets/global";

// Content:
@import "wireframe-framework/scss/content/typography";
@import "wireframe-framework/scss/content/table";
@import "wireframe-framework/scss/content/list";

// Layout:
@import "wireframe-framework/scss/layout/app";
@import "wireframe-framework/scss/layout/block";
@import "wireframe-framework/scss/layout/content";
@import "wireframe-framework/scss/layout/drawer";
@import "wireframe-framework/scss/layout/footer";
@import "wireframe-framework/scss/layout/header";

// Components:
@import "wireframe-framework/scss/components/forms/control";
@import "wireframe-framework/scss/components/forms/buttons";
@import "wireframe-framework/scss/components/forms/inputs";
@import "wireframe-framework/scss/components/box";
@import "wireframe-framework/scss/components/grid";
@import "wireframe-framework/scss/components/menu";
@import "wireframe-framework/scss/components/alerts";
@import "wireframe-framework/scss/components/badges";
{% endhighlight %}

## Contributing

Changes and improvements are more than welcome! Feel free to fork and open a pull request. If you have found any issues, please report them [here](https://github.com/Bartozzz/Wireframe/issues/new) - they are being tracked on [GitHub Issues](https://github.com/Bartozzz/Qilin/issues).

### Developing

{% highlight bash %}
$ npm run <command>
{% endhighlight %}

#### List of commands

| Command | Description                                                        |
|---------|--------------------------------------------------------------------|
| `build` | Compiles Wireframe and creates a CSS bundle at `css/index.css`     |
| `watch` | Rebuilds on changes, creates a live local server for documentation |
| `clean` | Cleans the build folder                                            |
| `docs`  | Builds documentation                                               |
