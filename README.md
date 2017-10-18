Circle Bars
=============
>Circle Bars is a Jquery plugin which is used to add circular countdown timers or progress bars in your project easily.

[![npm](https://img.shields.io/npm/dm/circlebars.svg?style=flat-square)](https://www.npmjs.com/package/circlebars)
[![npm](https://img.shields.io/npm/v/circlebars.svg?style=flat-square)](https://www.npmjs.com/package/circlebars)
[![Github Releases](https://img.shields.io/github/downloads/ncs-jss/circlebars/total.svg?style=flat-square)](https://github.com/ncs-jss/circlebars)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0d0d04c60ab844e3a9039c4ba9062e36)](https://www.codacy.com/app/adityaa803/circlebars?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ncs-jss/circlebars&amp;utm_campaign=Badge_Grade)

<p align="center">
  <img src="demo.gif" alt="demo circlebars gif">
</p>

- implemented with css; no canvas, png or jpg sprites messing around.
- highly customisable with various designed skins.
- less than 2KB when minified.
- optimised and production ready code in dist/ folder. 
- SASS support also.
- CDN provided at [unpkg](https://unpkg.com/circlebars@1.0.3/dist/)
- Cross browser functionality

What to include
-------
Include jQuery first and then follow up.

1) By CDN
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/circlebars@1.0.3/dist/circle.css">
<script src="https://unpkg.com/circlebars@1.0.3/dist/circle.js"></script>
<!-- Optionally add this to use a skin : -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/circlebars@1.0.3/dist/skins/whitecircle.css">
```

1) By downloading the package

* first install with `npm install circlebars` 
* then include these files in your html.

```html
<link rel="stylesheet" type="text/css" href="node-modules/circlebars/dist/circle.css">
<script src="node-modules/circlebars/dist/circle.js"></script>
<!-- Optionally add this to use a skin : -->
<link rel="stylesheet" type="text/css" href="node-modules/circlebars/dist/skins/whitecircle.css">
```


Example
-------

```html

<div id="circle-1">
    <div class="loader-bg">
        <div class="text">00:00:00</div>
    </div>
</div>

<script>
    new Circlebar({
        element : "#circle-1"
    });
</script>
```
or

```html

<div class="circle-2">
    <div class="loader-bg">
        <div class="text">00:00:00</div>
    </div>
</div>

<script>
    $(".circle-2").Circlebar({
</script>
```
or
```html

<div class="circlebar">
    <div class="loader-bg">
        <div class="text">00:00:00</div>
    </div>
</div>
```

Options
-------

Options are provided as attributes 'data-circle-option':

```html
<div id="circle-1" data-circle-dialWidth=10 data-circle-skin="white"></div>
```

 or in the "Circlebar()" call :

```javascript
$("#circle-1").Circlebar({
    maxValue : 20,
    fontSize : "14px",
    triggerPercentage : true
});
```
- Note : The inline data attributes will overwrite the properties specified in the Circlebar() call .

The following options are supported :

- Note : value and maxValue options are common for both (timer and progressbar) but vary slightly in essence to both.

Behaviors :
* startValue : starting time for timer or initial value of progressbar | default = 0 | integer 
* maxValue : the max time for timer to display or the value till which circlebar progresses | default = 60 | integer
* counter : the time in which timer increase by 1s | default = 1000 | integer (1000 == 1sec)
* triggerPercentage : should the circles styling alters according to progress level | default = false | boolean
* type : type of circlebar can be timer, progress or manual | default = "timer"

UI :

* dialWidth : the thickness of the circular ring | default = 5 | integer
* fontSize : the font size of the text in center of circle | default = "20px" | string with unit also ( units can be px, em, rm, % etc.)
* fontColor : the font color of the text in center of circle | default = "rgb(135, 206, 235)" | string (unit can be HEX, rgb, rgba, hsla, hsv, etc.)
* skin : the name of the custom skin to include | default = " " | string
* size : the size of the whole circle bar | default = "150px" | string with unit also ( units can be px, % etc.)

Avaliable skins
-------

All Skins are located in the [`dist/skins`](https://github.com/itaditya/circlebars/tree/master/dist/skins) folder. Here are the ones currently avaliable:

* [Blue](https://github.com/itaditya/circlebars/blob/master/dist/skins/bluecircle.css)
* [Cobalt](https://github.com/itaditya/circlebars/blob/master/dist/skins/cobaltcircle.css)
* [Fire](https://github.com/itaditya/circlebars/blob/master/dist/skins/firecircle.css)
* [Matte Black](https://github.com/itaditya/circlebars/blob/master/assets/skins/matteblackcircle.css)
* [Purple](https://github.com/itaditya/circlebars/blob/master/dist/skins/purplecircle.css)
* [Simple](https://github.com/itaditya/circlebars/blob/master/dist/skins/simplecircle.css)
* [White](https://github.com/itaditya/circlebars/blob/master/dist/skins/whitecircle.css)
* [Yellow](https://github.com/itaditya/circlebars/blob/master/dist/skins/yellowcircle.css)

To use a skin, first include it as a css file.

```html
<link rel="stylesheet" type="text/css" href="path/to/skins/bluecircle.css">
```

Then, you can set the custom skin name with the `skin` option when creating your circebar instance.

```javascript
$("#circle-1").Circlebar({
    skin: "blue"
});
```

Or, as a data attribute when using a DOM element.
```html
<div id="circle-1" data-circle-skin="blue"></div>
```

To make your own skin, use one of the included ones and edit the css to your specification.

Example
-------

```html
 <div id="circle-1" data-circle-dialWidth=10 data-circle-skin="white">
    <div class="loader-bg">
      <div class="text">00:00:00</div>
    </div>
</div>

$("#circle-1").Circlebar({
    maxValue : 20,
    fontSize : "14px",
    triggerPercentage : true,
    type: "progress"
});
```
and 

```html
<div class="circlebar" data-circle-startValue=0 data-circle-dialWidth=20 data-circle-size="250px">
    <div class="loader-bg">
        <div class="text">00:00:00</div>
    </div>
</div>
```


> Note that you can put any content inside` <div class="text"></div> ` like text, icons, images, etc. 

Demo also available at  [Codepen](http://codepen.io/itaditya/pen/QKExjL)

Supported browser
-------

Tested on Chrome, Safari, Firefox.

