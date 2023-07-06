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
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
