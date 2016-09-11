# Circle Bars

>Circle Bars is a Jquery plugin which is used to add circular countdown timers or progress bars in your project easily.
It is less than 2KB when minified.


##How To use Vertical Scroller

It is very easy to install, just copy and paste the dist/circle-min.js in your js root folder and then initialize its path
in your html file. It's better to initialize it in head tag.
```
<head>
 <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>

 <script src="path/to/circle-min.js"></script>
</head>
```
    Dependency : It depends on jquery. So initialize jquery before circle-min.js

#General Notes

##Initialize
Option 1. -- By Creating a timer object.

Example use:
```
    var t1 = new timer('{"element" : "#timer-1","maxTime" : 10,"fontSize" : "14px"}');

```
or
```
    new timer('{"element" : ".timer-2","maxTime" : 300,"fontSize" : "2em"}');

```
    Note: the parameters provided must be in JSON

Option 2. -- By adding a .correctTimer class to the element.

#Example
```
    <div class="correctTimer"></div>
```

Enjoy and keep converting caffeine to code !!
:)


