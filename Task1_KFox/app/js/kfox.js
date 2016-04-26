document.addEventListener('DOMContentLoaded', function () {

  'use strict';

  var hamburger = document.querySelector('#hamburger'),
    page = document.querySelector('body'),
    nav = document.querySelector('nav'),
    song = document.querySelector('#kfox-audio'),
    mobile = (window.innerWidth < 768) ? true : false,
    playBtn = document.querySelectorAll('.icon-play'),
    stopBtn = document.querySelectorAll('.icon-stop'),
    skipBtn = document.querySelectorAll('.icon-forward'),
    volBtn = document.querySelector('.icon-volume-up'),
    slider = document.querySelector('#kfox-slider');

  function play() {

    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }

    playBtn[0].classList.toggle('icon-play');
    playBtn[0].classList.toggle('icon-pause');
    playBtn[1].classList.toggle('icon-play');
    playBtn[1].classList.toggle('icon-pause');
  }

  function stop() {
    song.pause();
    song.currentTime = 0;

    playBtn[0].classList.add('icon-play');
    playBtn[1].classList.add('icon-play');

    playBtn[0].classList.remove('icon-pause');
    playBtn[1].classList.remove('icon-pause');
  }

  function mute() {
    song.muted = !song.muted;
    volBtn.classList.toggle('icon-volume-up');
    volBtn.classList.toggle('icon-volume-off');
  }

  function moveTo() {
    song.currentTime = slider.value;
  }

  function skip() {
    song.currentTime += 10;
    slider.value = song.currentTime;
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
    skipBtn[1].addEventListener('click', skip);
  } else {
    playBtn[0].addEventListener('click', play);
    stopBtn[0].addEventListener('click', stop);
    skipBtn[0].addEventListener('click', skip);
    slider.addEventListener('change', moveTo);
  }

  song.onloadedmetadata = function () {
    slider.max = this.duration;
  };

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
        skipBtn[1].addEventListener('click', moveTo);
        playBtn[0].removeEventListener('click', play);
        stopBtn[0].removeEventListener('click', stop);
        skipBtn[0].removeEventListener('click', skip);
        slider.removeEventListener('change', moveTo);

      } else {
        playBtn[0].addEventListener('click', play);
        stopBtn[0].addEventListener('click', stop);
        skipBtn[0].addEventListener('click', moveTo);
        playBtn[1].removeEventListener('click', play);
        stopBtn[1].removeEventListener('click', stop);
        skipBtn[1].removeEventListener('click', skip);
        slider.addEventListener('change', moveTo);
      }
    }
  });
});
