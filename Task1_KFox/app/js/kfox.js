document.addEventListener('DOMContentLoaded', function () {

	'use strict';

	var hamburger = document.querySelector('#hamburger'),
		page = document.querySelector('body'),
		nav = document.querySelector('nav'),
		song = document.querySelector('#kfox-audio'),
		mobile = (window.innerWidth < 768) ? true : false,
		playBtn = document.querySelectorAll('.play'),
		stopBtn = document.querySelectorAll('.stop'),
		volBtn = document.querySelector('#kfox-volume'),
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
			playBtn[0].src = 'images/np_controlls_pause.png';
			playBtn[1].src = 'images/np_controlls_pause.png';
		} else {
			playBtn[0].src = 'images/np_controlls_play.png';
			playBtn[1].src = 'images/np_controlls_play.png';
		}
	}

	function stop() {
		song.pause();
		song.currentTime = 0;
		playBtn[0].src = 'images/np_controlls_play.png';
		playBtn[1].src = 'images/np_controlls_play.png';
	}

	function mute() {
		song.muted = !song.muted;
		volBtn.classList.toggle('icon-volume-up');
		volBtn.classList.toggle('icon-volume-off');
	}

	hamburger.addEventListener('click', function () {
		page.className = (page.className === '') ? 'menu-on' : '';
	});

	volBtn.addEventListener('click', mute);

	nav.addEventListener('click', function (e) {
		e = e || event;
		e.preventDefault();
		page.classList.toggle('menu-on');
		window.setTimeout(function () {
			window.location = e.target;
		}, 500);
	});

	if (mobile) {
		playBtn[1].addEventListener('click', play);
		stopBtn[1].addEventListener('click', stop);
	} else {
		playBtn[0].addEventListener('click', play);
		stopBtn[0].addEventListener('click', stop);
	}

	song.ontimeupdate = function () {
		if (!mobile) {
			slider.value = parseInt(this.currentTime, 10);
		}
	};

	window.addEventListener('resize', function () {

		var res = mobile;
		mobile = (window.innerWidth < 768) ? true : false;

		if (mobile !== res) {

			if (mobile) {
				playBtn[1].addEventListener('click', play);
				stopBtn[1].addEventListener('click', stop);
				playBtn[0].removeEventListener('click', play);
				stopBtn[0].removeEventListener('click', stop);

			} else {
				playBtn[0].addEventListener('click', play);
				stopBtn[0].addEventListener('click', stop);
				playBtn[1].removeEventListener('click', play);
				stopBtn[1].removeEventListener('click', stop);
			}
		}
	});
});
