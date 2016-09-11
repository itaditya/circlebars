$(document).ready(function(){
      var t = new timer();
      console.log(t);
});

function timer(){
    this.time = 0;
    this.maxTime = 60;
    var percentage = 0;
    var that = this;
    this.timer = setInterval(function(){
        if(that.time < that.maxTime){
            that.time += 1;
            percentage = (that.time*100)/that.maxTime;
            that.renderProgress(percentage);
        }
        else{
            clearInterval(that.timer);
        }
    },1000);
    this.renderProgress = function(progress) {
        progress = Math.floor(progress);
        if(progress<25){
            var angle = -90 + (progress/100)*360;
            $(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
        }
        else if(progress>=25 && progress<50){
            var angle = -90 + ((progress-25)/100)*360;
            $(".animate-0-25-b").css("transform","rotate(0deg)");
            $(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
        }
        else if(progress>=50 && progress<75){
            var angle = -90 + ((progress-50)/100)*360;
            $(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
            $(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
        }
        else if(progress>=75 && progress<=100){
            var angle = -90 + ((progress-75)/100)*360;
            $(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b")
                                                  .css("transform","rotate(0deg)");
            $(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
        }
        $(".text").html(progress+"%");
    };
}