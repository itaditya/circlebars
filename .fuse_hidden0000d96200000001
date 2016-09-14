jQuery Knob
=============
>Circle Bars is a Jquery plugin which is used to add circular countdown timers or progress bars in your project easily.

- implemented with css; no canvas, png or jpg sprites mess.
- highly customisable with various designed skins.
- less than 2KB when minified..

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

... or in the "Circlebar()" call :

```javascript
$("#circle-1").Circlebar({
    maxTime : 20,
    fontSize : "14px",
    triggerPercentage : true
});
```
- Note : The inline data attributes will overwrite the properties specified in the Circlebar() call .

The following options are supported :

Behaviors :
* time : starting time or value | default = 0 | integer 
* maxTime : the time till which it progresses | default = 60 | integer
* counter : the time in which progress increase by 1 | default = 1000 | integer (1000 == 1sec)
* triggerPercentage : should the circle alters according to progress level | default = true

UI :

* dialWidth : the thickness of the circular ring | default = 5 | integer
* fontSize : the font size of the text in center of circle | default = "20px" | string with unit also ( units can be px, em, rm, % etc.)
* fontColor : the font color of the text in center of circle | default = "rgb(135, 206, 235)" | string (unit can be HEX, rgb, rgba, hsla, hsv, etc.)
* skin : the name of the custom skin to include | default = " " | string
* size : the size of the whole circle bar | default = "150px" | string with unit also ( units can be px, % etc.)

Example
-------

```html
<div class="circles-container">
  <div id="circle-1" data-circle-dialWidth=10 data-circle-skin="white">
      <div class="loader-bg">
          <div class="text">00:00:00</div>
      </div>
</div>

$("#circle-1").Circlebar({
    maxTime : 20,
    fontSize : "14px",
    triggerPercentage : true
});
```
and 

```html
<div class="circlebar" data-circle-startTime=0 data-circle-dialWidth=20 data-circle-size="250px">
    <div class="loader-bg">
        <div class="text">00:00:00</div>
    </div>
</div>
```

Supported browser
-------

Tested on Chrome, Safari, Firefox.

