import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LSKey = 'videoplayer-current-time';

const onPlay = function ({ seconds }) {
  localStorage.setItem(LSKey, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(LSKey);
player.setCurrentTime(currentTime);
