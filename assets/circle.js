$(document).ready(function(){
    var prefs = {
        element : ".circlebar"
    };
    $('.circlebar').each(function () {
        new Circlebar(prefs);
    });
});
function Circlebar(prefs){
    this.element = $(prefs.element);
    this.element.append('<div class="spinner-holder-one animate-0-25-a"><div class="spinner-holder-two animate-0-25-b"><div class="loader-spinner" style=""></div></div></div><div class="spinner-holder-one animate-25-50-a"><div class="spinner-holder-two animate-25-50-b"><div class="loader-spinner"></div></div></div><div class="spinner-holder-one animate-50-75-a"><div class="spinner-holder-two animate-50-75-b"><div class="loader-spinner"></div></div></div><div class="spinner-holder-one animate-75-100-a"><div class="spinner-holder-two animate-75-100-b"><div class="loader-spinner"></div></div></div>');
    this.time = 0;
    this.maxTime = 60;
    this.counter = 1000;
    this.dialWidth = 5;
    this.size = 150;
    this.fontSize = 20;
    this.fontColor = "rgb(135, 206, 235)";
    this.skin = "";
    var percentage = 0, that = this, date = 0;
    // var attribs = this.element.find("div")[0].parentNode.dataset;
    var attribs = this.element[0].dataset;
    this.initialise = function(){
        that.time = parseInt(attribs.circleStarttime) || parseInt(prefs.startTime) || 0;
        that.maxTime = parseInt(attribs.circleMaxtime) || parseInt(prefs.maxTime) || 60;
        that.counter = parseInt(attribs.circleCounter) || parseInt(prefs.counter) || 1000;
        that.dialWidth = parseInt(attribs.circleDialwidth) || parseInt(prefs.dialWidth) || 5;
        that.size = attribs.circleSize || prefs.size || "150px";
        that.fontSize = attribs.circleFontsize || prefs.fontSize || "20px";
        that.fontColor = attribs.circleFontcolor || prefs.fontColor || "rgb(135, 206, 235)";
        that.skin = attribs.circleSkin || prefs.skin || " ";

        that.element.find(".loader-bg").css("border-width",that.dialWidth+"px");
        that.element.find(".loader-spinner").css("border-width",that.dialWidth+"px");
        that.element.css({"width":that.size,"height":that.size});
        that.element.find(".loader-bg .text")
            .css({"font-size":that.fontSize,"color":that.fontColor});
        that.element.addClass(that.skin);
    };
    this.initialise();
    this.timer = setInterval(function(){
        if(that.time < that.maxTime){
            that.time += parseInt(that.counter/1000);
            percentage = (that.time*100)/that.maxTime;
            that.renderProgress(percentage);
            date = new Date(null);
            date.setSeconds(that.time); // specify value for seconds here
            that.element.find(".text").html(date.toISOString().substr(11, 8));
            that.element.find(".text")[0].dataset.time = that.time;
        }
        else{
            clearInterval(that.timer);
        }
    },(this.counter));
    this.renderProgress = function(progress) {
        progress = Math.floor(progress);
        var angle = 0;
        if(progress<25){
            angle = -90 + (progress/100)*360;
            that.element.find(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
        }
        else if(progress>=25 && progress<50){
            angle = -90 + ((progress-25)/100)*360;
            that.element.find(".animate-0-25-b").css("transform","rotate(0deg)");
            that.element.find(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
        }
        else if(progress>=50 && progress<75){
            angle = -90 + ((progress-50)/100)*360;
            that.element.find(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
            that.element.find(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
        }
        else if(progress>=75 && progress<=100){
            angle = -90 + ((progress-75)/100)*360;
            that.element.find(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b")
                                                  .css("transform","rotate(0deg)");
            that.element.find(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
        }
    };
}

(function( $ ){
   $.fn.Circlebar = function(options) {
        options.element = this.selector;
        console.log(options);
        new Circlebar(options);
   };
})( jQuery );