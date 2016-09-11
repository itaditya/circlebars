$(document).ready(function(){
      // var t = new timer();
      // console.log(t);
});

function timer(prefs){
    prefs = JSON.parse(prefs);
    this.element = $(prefs.element);
    this.time = 0;
    this.maxTime = prefs.maxTime || 60;
    var percentage = 0;
    var that = this;
    var date = 0;
    this.timer = setInterval(function(){
        if(that.time < that.maxTime){
            that.time += 1;
            percentage = (that.time*100)/that.maxTime;
            that.renderProgress(percentage);
            date = new Date(null);
            date.setSeconds(that.time); // specify value for SECONDS here
            that.element.find(".text").html(date.toISOString().substr(11, 8));
            that.element.find(".text")[0].dataset.time = that.time;
        }
        else{
            clearInterval(that.timer);
        }
    },1000);
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