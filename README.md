Circle Bars
=============
>Circle Bars is a Jquery plugin which is used to add circular countdown timers or progress bars in your project easily.

[![npm](https://img.shields.io/npm/dm/circlebars.svg?style=flat-square)](https://www.npmjs.com/package/circlebars)
[![npm](https://img.shields.io/npm/v/circlebars.svg?style=flat-square)](https://www.npmjs.com/package/circlebars)
[![Github Releases](https://img.shields.io/github/downloads/ncs-jss/circlebars/total.svg?style=flat-square)](https://github.com/ncs-jss/circlebars)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0d0d04c60ab844e3a9039c4ba9062e36)](https://www.codacy.com/app/adityaa803/circlebars?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ncs-jss/circlebars&amp;utm_campaign=Badge_Grade)


- implemented with css; no canvas, png or jpg sprites mess.
- highly customisable with various designed skins.
- less than 2KB when minified.
- optimised and production ready code in dist/ folder. 
- SASS support also.

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

UI :

* dialWidth : the thickness of the circular ring | default = 5 | integer
* fontSize : the font size of the text in center of circle | default = "20px" | string with unit also ( units can be px, em, rm, % etc.)
* fontColor : the font color of the text in center of circle | default = "rgb(135, 206, 235)" | string (unit can be HEX, rgb, rgba, hsla, hsv, etc.)
* skin : the name of the custom skin to include | default = " " | string
* size : the size of the whole circle bar | default = "150px" | string with unit also ( units can be px, % etc.)

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
    triggerPercentage : true
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

Supported browser
-------

Tested on Chrome, Safari, Firefox.

