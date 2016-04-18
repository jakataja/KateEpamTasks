window.onload = function () {
    
    "use strict";
    
    document.getElementById("hamburger").addEventListener("click", function () {
        var menu = document.getElementsByTagName("body")[0];        
        menu.className = (menu.className === "") ? "menu-on" : "" ;
    });
    
    document.getElementsByTagName("nav")[0].addEventListener("click", function (e) {
        e = e || event;
        e.preventDefault();
        var menu = document.getElementsByTagName("body")[0];        
        menu.className = (menu.className === "") ? "menu-on" : "" ;
    });
    
            
    var song = document.getElementById("kfox_audio"),
        mobile = (window.innerWidth < 768) ? true : false,        
        playBtn = (mobile) ? document.getElementById("np_play") : document.getElementById("kfox_play"),        
        stopBtn = (mobile) ? document.getElementById("np_stop") : document.getElementById("kfox_stop"),             
        volBtn = (mobile) ? document.getElementById("volume") : document.getElementById("kfox_volume"),
        nextBtn = document.getElementById("kfox_next"),
        slider = document.getElementById("kfox_slider"),
        currtime;
            
    function play() {                
        if (song.currentTime === 0){            
            song.play();        
            slider.setAttribute("max", song.duration);
        } else if (song.paused) {    
            song.play();
        } else song.pause();
        
        if(!song.paused) this.src = "images/np_controlls_pause.png";
        else this.src = "images/np_controlls_play.png";        
    };
    
    function stop() {
        song.pause();
        song.currentTime = 0;
        playBtn.src = "images/np_controlls_play.png";        
    };
    
    function mute() {
        song.muted = !song.muted;
        if(song.muted) {            
            if(mobile) this.src = "images/mute.png";
            else this.src = "images/kfox_mute.png";                
        } else {
            if(mobile) this.src = "images/volume.png"; 
            else this.src = "images/kfox_volume.png";        
        }        
    };
    
    playBtn.addEventListener("click", play);
    stopBtn.addEventListener("click", stop);     
    volBtn.addEventListener("click", mute);
    
    song.ontimeupdate = function() {                
        if(!mobile) slider.value = parseInt(this.currentTime, 10);
    };
    
    
    
    window.addEventListener("resize", function(volBtn){
        
        mobile = (window.innerWidth < 768) ? true : false;        
        playBtn = (mobile) ? document.getElementById("np_play") : document.getElementById("kfox_play");        stopBtn = (mobile) ? document.getElementById("np_stop") : document.getElementById("kfox_stop");
        volBtn = (mobile) ? document.getElementById("volume") : document.getElementById("kfox_volume");
        playBtn.addEventListener("click", play);
        stopBtn.addEventListener("click", stop);     
        volBtn.addEventListener("click", mute);
    });
};


