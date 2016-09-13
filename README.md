# Circle Bars

>Circle Bars is a Jquery plugin which is used to add circular countdown timers or progress bars in your project easily.
It is less than 2KB when minified.


##How To use Circle Bars

It is very easy to install, just copy and paste the dist/circle.js in your js root folder and then initialize its path. Do same for circle.css
in your html file. It's better to initialize it in head tag.
```
<head>
 <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>

 <script src="path/to/circle-min.js"></script>
 <link rel="stylesheet" type="text/css" href="assets/circle.css">
</head>
```
    Dependency : It depends on jquery. So initialize jquery before circle-min.js

#General Notes

##Initialize
Option 1. -- By Creating a timer object.

Example use:
## With JS :
```
    var t1 = new timer({
        element : #timer-1,
        maxTime : 10,
        fontSize : 14px
    });

```
or
```
    new timer({
        element : .timer-2,
        maxTime : 300,
        fontSize : 2em
    });

```
## With JQuery :
```
    $("#circle-1").Circlebar({
        element : .timer-2,
        maxTime : 300,
        fontSize : 2em
    });

```

Option 2. -- By adding a .circlebar class to the element.

#Example
```
    <div class="circlebar"></div>
```

Enjoy and keep converting caffeine to code !!
:)


