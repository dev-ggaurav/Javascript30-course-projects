// Get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector ('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll ('.player__slider');
const fullScreen = player.querySelector('.fullscreen__button');



//Build the functions


//function for the play/pause
function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//function for updating the play/pause button
function updateButton (){
    const icon = this.paused ? '►' : '⏸︎' ;
    toggle.textContent = icon;
} 


//function for skipping buttons
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}


//functions for volume and speed sliders
function handleRangeUpdate() {
    video[this.name] = this.value;
}


function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}


//function for scrubbing bar
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


//function for toggling fullscreen
function toggleFullScreen() {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
          video.msRequestFullscreen();
        }  
}



// Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);


skipButtons.forEach(button => button.addEventListener ('click', skip ));

ranges.forEach(range => range.addEventListener ('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener ('mousemove', handleRangeUpdate));

let mouseDown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown
 && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);

fullScreen.addEventListener('click' , toggleFullScreen);