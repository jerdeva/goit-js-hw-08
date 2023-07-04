import Player from '@vimeo/player';
import _ from 'lodash';

console.log(Player);

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', _.throttle(onPlay, 1000));

const LS = localStorage.getItem('videoplayer-current-time');

console.log(LS);

player
  .setCurrentTime(LS)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
