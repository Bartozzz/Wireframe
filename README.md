# Wireframe

[Wireframe](http://laniewski.me/Wireframe) is a flexible, modular and highly-customizable SCSS framework for rapid webiste prototyping. It provides you with a solid architectural baseline upon which to complete your own work.

## Installation

**NPM:**

```bash
$ npm install wireframe-framework
```

**Copy/paste (not recommended):**

You can download Wireframe and save it into your project’s `css` directory. This method is not recommended because you lose the ability to easily and quickly manage and update Wireframe as a dependency.

## Getting started

Wireframe follows a specific folder structure, which you can follow as well in your own CSS directory:

- `configuration`: Global variables, site-wide settings, config.
- `components`: Discrete, complete parts of UI such as forms.
- `content`: Unclassed HTML elements, such as typography.
- `layout`: Very basic elements of your website skeleton.
- `resets`: Low-specificity, far-reaching rulesets.
- `utils`: Override, utility and helper classes.

```scss
@import "wireframe-framework/configuration/functions/split-str";
@import "wireframe-framework/configuration/functions/strip-units";
@import "wireframe-framework/configuration/functions/to-length";
@import "wireframe-framework/configuration/functions/to-number";
@import "wireframe-framework/configuration/mixins/typography";
@import "wireframe-framework/configuration/mixins/responsive";
@import "wireframe-framework/configuration/mixins/clearfix";
@import "wireframe-framework/configuration/typography";
@import "wireframe-framework/configuration/responsive";
@import "wireframe-framework/configuration/colors";

@import "wireframe-framework/utils/responsive/display";
@import "wireframe-framework/utils/prototype/grid";
@import "wireframe-framework/utils/display/flex";
@import "wireframe-framework/utils/display/rounded";
@import "wireframe-framework/utils/align/align-start";
@import "wireframe-framework/utils/align/align-center";
@import "wireframe-framework/utils/align/align-end";
@import "wireframe-framework/utils/align/align-top";
@import "wireframe-framework/utils/align/align-middle";
@import "wireframe-framework/utils/align/align-bottom";
@import "wireframe-framework/utils/align/align-around";
@import "wireframe-framework/utils/align/align-between";
@import "wireframe-framework/utils/is-unselectable";
@import "wireframe-framework/utils/is-reversed";

@import "wireframe-framework/resets/normalize";
@import "wireframe-framework/resets/highlight";
@import "wireframe-framework/resets/global";

@import "wireframe-framework/content/typography";
@import "wireframe-framework/content/table";
@import "wireframe-framework/content/list";

@import "wireframe-framework/layout/app";
@import "wireframe-framework/layout/block";
@import "wireframe-framework/layout/content";
@import "wireframe-framework/layout/drawer";
@import "wireframe-framework/layout/footer";
@import "wireframe-framework/layout/header";

@import "wireframe-framework/components/forms/control";
@import "wireframe-framework/components/forms/buttons";
@import "wireframe-framework/components/forms/inputs";
@import "wireframe-framework/components/box";
@import "wireframe-framework/components/grid";
@import "wireframe-framework/components/menu";
@import "wireframe-framework/components/alerts";
@import "wireframe-framework/components/badges";
```

## Contributing

### Bug reporting

Changes and improvements are more than welcome! Feel free to fork and open a pull request. If you have found any issues, please report them [here](https://github.com/Bartozzz/Wireframe/issues/new) - they are being tracked on [GitHub Issues](https://github.com/Bartozzz/Qilin/issues).

### Developing

```bash
$ npm run <command>
```

#### List of commands

| Command | Description                                                        |
|---------|--------------------------------------------------------------------|
| build   | Builds Wireframe                                                   |
| watch   | Rebuilds on changes, creates a live local server for documentation |
| clean   | Cleans the build folder                                            |
| docs    | Builds documentation                                               |
