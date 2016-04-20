document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
	var hamburger = document.querySelector('#hamburger'),
		page = document.querySelector('body'),
		nav = document.querySelector('nav'),
		song = document.querySelector('#kfox-audio'),
        mobile = (window.innerWidth < 768) ? true : false,
        playBtn = (mobile) ? document.querySelectorAll('.play')[1] : document.querySelectorAll('.play')[0],
        stopBtn = (mobile) ? document.querySelectorAll('.stop')[1] : document.querySelectorAll('.stop')[0],
        volBtn = (mobile) ? document.querySelectorAll('.vol')[0] : document.querySelectorAll('.vol')[1],
        nextBtn = document.querySelector('#kfox-next'),
        slider = document.querySelector('#kfox-slider'),
        currtime;

    function play() {
        if (song.currentTime === 0) {
            song.play();
            slider.max = song.duration;
        } else if (song.paused) {
            song.play();
        } else {
			song.pause();
		}
		
        if (!song.paused) {
			this.src = 'images/np_controlls_pause.png';
		} else {
			this.src = 'images/np_controlls_play.png';
		}
    }
    
    function stop() {
        song.pause();
        song.currentTime = 0;
        playBtn.src = 'images/np_controlls_play.png';
    }
    
    function mute() {
        song.muted = !song.muted;
        if (song.muted) {
            if (mobile) {
				this.src = 'images/mute.png';
			} else {
				this.src = 'images/kfox_mute.png';
			}
        } else {
            if (mobile) {
				this.src = 'images/volume.png';
			} else {
				this.src = 'images/kfox_volume.png';
			}
        }
    }
	
	hamburger.addEventListener('click', function () {
        page.className = (page.className === '') ? 'menu-on' : '';
    });
    
    nav.addEventListener('click', function (e) {
        e = e || event;
        e.preventDefault();        
		page.classList.toggle('menu-on');
        window.setTimeout(function () {
            window.location = e.target;
        }, 500);
    });
	
    playBtn.addEventListener('click', play);
    stopBtn.addEventListener('click', stop);
    volBtn.addEventListener('click', mute);
    
    song.ontimeupdate = function () {
        if (!mobile) {
			slider.value = parseInt(this.currentTime, 10);
		}
    };
    
    window.addEventListener('resize', function () {
                
        var res = mobile;
        mobile = (window.innerWidth < 768) ? true : false;
        
        if (mobile !== res) {
			playBtn = (mobile) ? document.querySelectorAll('.play')[1] : document.querySelectorAll('.play')[0];
			stopBtn = (mobile) ? document.querySelectorAll('.stop')[1] : document.querySelectorAll('.stop')[0];
			volBtn = (mobile) ? document.querySelectorAll('.vol')[0] : document.querySelectorAll('.vol')[1];
            playBtn.addEventListener('click', play);
            stopBtn.addEventListener('click', stop);
            volBtn.addEventListener('click', mute);
        }
    });
});


