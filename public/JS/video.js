
  // รับอ้างอิงถึงวิดีโอและปุ่ม
  var video = document.getElementById('video');
  var playButton = document.getElementById('autoplay-toggle1');
  var playVideo = document.getElementById('play-icon1');
  var pauseVideo = document.getElementById('pause-icon1');

  // เมื่อวิดีโอได้รับการโหลดเสร็จสิ้น
  video.addEventListener('loadedmetadata', function() {
    // เปิดให้วิดีโอเล่นอัตโนมัติเมื่อได้รับการโหลด
    video.play();
    playVideo.style.display = 'none';
    pauseVideo.style.display = 'inline';

    // เพิ่มกฏอีเวนต์สำหรับปุ่มเล่น/หยุด
    playButton.addEventListener('click', function() {
      if (video.paused || video.ended) {
        video.play();
        playVideo.style.display = 'none';
        pauseVideo.style.display = 'inline';
      } else {
        video.pause();
        playVideo.style.display = 'inline';
        pauseVideo.style.display = 'none';
      }
    });

    // เพิ่มกฏอีเวนต์เมื่อวิดีโอจบการเล่น
    video.addEventListener('ended', function() {
      playVideo.style.display = 'inline';
      pauseVideo.style.display = 'none';
    });
  });

  // เพิ่มกฏอีเวนต์เมื่อวิดีโอเริ่มที่ช่วงเวลาเริ่มต้น
  video.addEventListener('timeupdate', function() {
    if (video.currentTime >= video.duration - 0.1) {
      // วิดีโอจะวนลูปหลังจากเล่นเสร็จสิ้น
      video.currentTime = 0;
    }
  });

