'use strict';



/**
 * all music information
 */

const musicData = [
   {
    "backgroundImage": "./assets/images/poster1.jpg",
    "posterUrl": "./assets/images/poster1.jpg",
    "title": "Heaven",
    "album": "Heaven",
    "year": 2017,
    "artist": "Austin Patten",
    "musicPath": "./assets/music/music1.mp3"
  },
  {
    "backgroundImage": "./assets/images/posterTS.jpg",
    "posterUrl": "./assets/images/posterTS.jpg",
    "title": "All I Do",
    "album": "Therapy Session",
    "year": 2016,
    "artist": "NF",
    "musicPath": "./assets/music/music2.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster3.jpg",
    "posterUrl": "./assets/images/poster3.jpg",
    "title": "2 Of Amerikaz Most Wanted (feat. Snoop Dogg)",
    "album": "All eyes on me",
    "year": 1996,
    "artist": "2Pac",
    "musicPath": "./assets/music/music3.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster4.jpg",
    "posterUrl": "./assets/images/poster4.jpg",
    "title": "Big Poppa",
    "album": "Ready to Die",
    "year": 1994,
    "artist": "The Notorious B.I.G.",
    "musicPath": "./assets/music/music4.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster5.jpg",
    "posterUrl": "./assets/images/poster5.jpg",
    "title": "Can You Hold Me",
    "album": "Mansoin",
    "year": 2015,
    "artist": "NF",
    "musicPath": "./assets/music/music5.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster6.jpg",
    "posterUrl": "./assets/images/thesearch.jpg",
    "title": "Change",
    "album": "The Search",
    "year": 2019,
    "artist": "NF",
    "musicPath": "./assets/music/music6.mp3"
  },
  {
    "backgroundImage": "./assets/images/posterClouds.jpg",
    "posterUrl": "./assets/images/posterClouds.jpg",
    "title": "Clouds",
    "album": "Clouds",
    "year": 2021,
    "artist": "NF",
    "musicPath": "./assets/music/music7.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster8.jpg",
    "posterUrl": "./assets/images/poster8.jpg",
    "title": "RIP",
    "album": "RIP",
    "year": 2020,
    "artist": "Croosh",
    "musicPath": "./assets/music/music8.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster9.jpg",
    "posterUrl": "./assets/images/poster9.jpg",
    "title": "Dreams",
    "album": "Perception",
    "year": 2017,
    "artist": "NF",
    "musicPath": "./assets/music/music9.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster10.jpg",
    "posterUrl": "./assets/images/poster10.jpg",
    "title": "Gangsta Bop",
    "album": "Konvicted",
    "year": 2006,
    "artist": "Akon",
    "musicPath": "./assets/music/music10.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster11.jpg",
    "posterUrl": "./assets/images/poster11.jpg",
    "title": "Gangsta Nation",
    "album": "Terrorist Threats",
    "year": 2003,
    "artist": "Westside Connection",
    "musicPath": "./assets/music/music11.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster12.jpg",
    "posterUrl": "./assets/images/poster12.jpg",
    "title": "Gangsta Rap Made Me Do It",
    "album": "Raw Footage",
    "year": 2008,
    "artist": "Ice Cube",
    "musicPath": "./assets/music/music12.mp3"
  },
  {
    "backgroundImage": "./assets/images/posterTS.jpg",
    "posterUrl": "./assets/images/posterTS.jpg",
    "title": "How Could You Leave Us",
    "album": "Therapy Session",
    "year": 2016,
    "artist": "NF",
    "musicPath": "./assets/music/music13.mp3"
  },
  {
    "backgroundImage": "./assets/images/posterTS.jpg",
    "posterUrl": "./assets/images/posterTS.jpg",
    "title": "I Just Wanna Know",
    "album": "Therapy Session",
    "year": 2016,
    "artist": "NF",
    "musicPath": "./assets/music/music14.mp3"
  },
  {
    "backgroundImage": "./assets/images/thesearch.jpg",
    "posterUrl": "./assets/images/thesearch.jpg",
    "title": "I Miss The Days",
    "album": "The Search",
    "year": 2019,
    "artist": "NF",
    "musicPath": "./assets/music/music15.mp3"
  },
  {
    "backgroundImage": "./assets/images/nf-perception.jpg",
    "posterUrl": "./assets/images/nf-perception.jpg",
    "title": "If you Want Love",
    "album": "Perception",
    "year": 2017,
    "artist": "NF",
    "musicPath": "./assets/music/music16.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster17.jpg",
    "posterUrl": "./assets/images/poster17.jpg",
    "title": "Just Clownin’",
    "album": "The Shadiest One",
    "year": 1998,
    "artist": "WC",
    "musicPath": "./assets/music/music17.mp3"
  },
  {
    "backgroundImage": "./assets/images/posterClouds.jpg",
    "posterUrl": "./assets/images/posterClouds.jpg",
    "title": "Just Like You",
    "album": "Clouds",
    "year": 2021,
    "artist": "NF",
    "musicPath": "./assets/music/music18.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster19.jpg",
    "posterUrl": "./assets/images/poster19.jpg",
    "title": "Song Title 1",
    "album": "Album Name 1",
    "year": 2000,
    "artist": "Artist Name 1",
    "musicPath": "./assets/music/music19.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster20.jpg",
    "posterUrl": "./assets/images/poster20.jpg",
    "title": "Song Title 2",
    "album": "Album Name 2",
    "year": 2001,
    "artist": "Artist Name 2",
    "musicPath": "./assets/music/music20.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster21.jpg",
    "posterUrl": "./assets/images/poster22.jpg",
    "title": "Song Title 3",
    "album": "Album Name 3",
    "year": 2002,
    "artist": "Artist Name 3",
    "musicPath": "./assets/music/music23.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster24.jpg",
    "posterUrl": "./assets/images/poster24.jpg",
    "title": "Song Title 4",
    "album": "Album Name 4",
    "year": 2003,
    "artist": "Artist Name 4",
    "musicPath": "./assets/music/music24.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster25.jpg",
    "posterUrl": "./assets/images/poster25.jpg",
    "title": "Song Title 5",
    "album": "Album Name 5",
    "year": 2004,
    "artist": "Artist Name 5",
    "musicPath": "./assets/music/music25.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster26.jpg",
    "posterUrl": "./assets/images/poster26.jpg",
    "title": "Song Title 6",
    "album": "Album Name 6",
    "year": 2005,
    "artist": "Artist Name 6",
    "musicPath": "./assets/music/music26.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster27.jpg",
    "posterUrl": "./assets/images/poster27.jpg",
    "title": "Song Title 7",
    "album": "Album Name 7",
    "year": 2006,
    "artist": "Artist Name 7",
    "musicPath": "./assets/music/music27.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster28.jpg",
    "posterUrl": "./assets/images/poster28.jpg",
    "title": "Song Title 8",
    "album": "Album Name 8",
    "year": 2007,
    "artist": "Artist Name 8",
    "musicPath": "./assets/music/music28.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster29.jpg",
    "posterUrl": "./assets/images/poster29.jpg",
    "title": "Song Title 9",
    "album": "Album Name 9",
    "year": 2008,
    "artist": "Artist Name 9",
    "musicPath": "./assets/music/music29.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster30.jpg",
    "posterUrl": "./assets/images/poster30.jpg",
    "title": "Song Title 10",
    "album": "Album Name 10",
    "year": 2009,
    "artist": "Artist Name 10",
    "musicPath": "./assets/music/music30.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster31.jpg",
    "posterUrl": "./assets/images/poster31.jpg",
    "title": "Song Title 11",
    "album": "Album Name 11",
    "year": 2010,
    "artist": "Artist Name 11",
    "musicPath": "./assets/music/music31.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster32.jpg",
    "posterUrl": "./assets/images/poster32.jpg",
    "title": "Song Title 12",
    "album": "Album Name 12",
    "year": 2011,
    "artist": "Artist Name 12",
    "musicPath": "./assets/music/music32.mp3"
  },
  
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);