# Ember jQuery Mobile

This addon appears as a solution for working with jQuery Mobile on an Ember CLI application (Ember.js 2.x)

The addon is actually working with:

* Ember Data 2.1.0
* jQuery Mobile 1.4.5

This addon methodology is based on wrapping each one of the jQuery Mobile widgets in an Ember.js component.

These components can be used on any handlebars template as you normally do.

To see actual component list, please go to [implemented components](#implemented-components)

***

**Please note** This is an Ember CLI not an standalone Ember.js app. Here, you can see a [working example](https://github.com/albertogonper/ember-jqm-example)

***

## Implemented Components

This is the list of the available jQuery Mobile widgets (Ember.js Components) for now:

* `jqm-page`: main component, wraps a jQuery Mobile page. You should use this on each main template controller (for now). See [pages](http://demos.jquerymobile.com/1.4.5/pages/)
* `jqm-header`: wraps jQuery Mobile header, for jqm-pages. See [toolbar](http://demos.jquerymobile.com/1.4.5/toolbar/#Markup)
* `jqm-footer`: wraps jQuery Mobile footer, for jqm-pages. See [toolbar](http://demos.jquerymobile.com/1.4.5/toolbar/#Markup)
* `jqm-panel`: wraps jQuery Mobile side panel, special behavior look at the bottom of this list to get more information see [panel](http://demos.jquerymobile.com/1.4.5/panel/)
* `jqm-popup`: wraps jQuery Mobile modal popup, special behavior look at the bottom of this list to get more information see [popup](http://demos.jquerymobile.com/1.4.5/popup/#Dialog)
* `jqm-anchor`: wraps jQuery Mobile anchor (link). See [button-markup](http://demos.jquerymobile.com/1.4.5/button-markup/)
* `jqm-button`: wraps jQuery Mobile button. See [button-markup](http://demos.jquerymobile.com/1.4.5/button-markup/)
* `jqm-textinput`: wraps jQuery Mobile normal Text Input. This lets you create text inputs, checkboxes, radio buttons, file selectors, etc for more see [textinput](http://demos.jquerymobile.com/1.4.5/textinput/) **CAUTION! Do not use this to generate a text area, instead use jqm-textarea**. Extends Ember.TextField
* `jqm-textarea`: wraps jQuery Mobile text area (Text Input). See [textinput](http://demos.jquerymobile.com/1.4.5/textinput/). This extends Ember.TextArea, this is why both input components are detached
* `jqm-slider`: wraps jQuery Mobile Slider component, it maintains its special properties and behavior, see [slider](http://demos.jquerymobile.com/1.4.5/slider/). Also extends Ember.TextInput
* `jqm-select`: wraps jQuery Mobile select menu. See [selectmenu](http://demos.jquerymobile.com/1.4.5/selectmenu/)
* `jqm-datepicker`: wraps jQuery Mobile datepicker, this is a 3rd party component please check [datepicker](http://demos.jquerymobile.com/1.4.5/datepicker/)

More components will be implemented, if you want to help with this please see [contributing](./CONTRIBUTING.md)

For more info about how to use these handlebars components please check the [wiki pages](/wiki) *Not done yet* see the [working example](https://github.com/albertogonper/ember-jqm-example) instead

## Installation

* `git clone` this repository
* `npm install`
* `bower install --force-latest`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Issues

Feel free to submit issues and enhancement requests.

***

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
