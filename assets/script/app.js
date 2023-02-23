


const app = {
    isPlaying : false ,
    isRepeat : false ,
    isRandom: false ,
    isShowingList: false ,
    currentIndex: 0 ,
    playedSongs : [] ,
    songs : [
        {
            name: 'Different world' ,
            artist: 'Alan Walker ft Sofia Carson' ,
            img: './assets/img/alan walker.jpg' ,
            path: './assets/mp3/Alan Walker Different World ft. Sofia Carson.mp3'
        } ,
        {
            name: 'Faded' ,
            artist: 'Alan Walker' ,
            img: './assets/img/alan walker.jpg' ,
            path: './assets/mp3/Alan Walker Faded.mp3'
        } ,
        {
            name: 'sweet but psycho' ,
            artist: 'ava max' ,
            img: './assets/img/ava max.jpg' ,
            path: './assets/mp3/Ava Max Sweet but Psycho.mp3'
        } ,
        {
            name: "We don't talk anymore" ,
            artist: 'Charlie puth ft Selena gomez' ,
            img: './assets/img/charlie puth.jpg' ,
            path: "./assets/mp3/Charlie Puth We Don't Talk Anymore (feat. Selena Gomez).mp3"
        } ,
        {
            name: "a thousand years" ,
            artist: 'Christina perri' ,
            img: './assets/img/christina perri.jpg' ,
            path: "./assets/mp3/Christina Perri A Thousand Years.mp3"
        } ,
        {
            name: "freedom is yours" ,
            artist: 'Nano' ,
            img: './assets/img/nano.jpg' ,
            path: "./assets/mp3/Freedom Is Yours.mp3"
        } ,
        {
            name: "Gurenge" ,
            artist: 'Lisa' ,
            img: './assets/img/lisa.jpg' ,
            path: "./assets/mp3/Gurenge Lisa.mp3"
        } ,
        {
            name: "Ichinen Nikagetsu Hatsuka" ,
            artist: 'bright' ,
            img: './assets/img/bright.jpg' ,
            path: "./assets/mp3/Ichinen Nikagetsu Hatsuka BRIGHT.mp3"
        } ,
        {
            name: "Monsters" ,
            artist: 'katie sky' ,
            img: './assets/img/katie sky monsters.jpg' ,
            path: "./assets/mp3/Monsters  Vocal Katie Sky.mp3"
        } ,
        {
            name: "Sakura Anata ni Deaete Yokatta" ,
            artist: 'rsp' ,
            img: './assets/img/rsp.jpg' ,
            path: "./assets/mp3/Sakura Anata ni Deaete Yokatta.mp3"
        } ,
        {
            name: "Sakura love you" ,
            artist: 'kana nishino' ,
            img: './assets/img/kana nishino.jpg',
            path: "./assets/mp3/Sakura love you KanaNishino.mp3"
        } ,
        {
            name: "Unstoppable" ,
            artist: 'sia' ,
            img: './assets/img/sia.jpg',
            path: "./assets/mp3/Sia  Unstoppable.mp3"
        } ,
        {
            name: "Sugar" ,
            artist: 'Maroon 5' ,
            img: './assets/img/maroon 5.png',
            path: "./assets/mp3/Sugar  Maroon 5 (Lyrics).mp3"
        } ,
        {
            name: "Umbrella" ,
            artist: 'kashitarou itou' ,
            img: './assets/img/kashitarouitou.png',
            path: "./assets/mp3/Umbrella KashitaroItomp3.mp3"
        } ,
        {
            name: "unlasting" ,
            artist: 'lisa' ,
            img: './assets/img/lisa.jpg',
            path: "./assets/mp3/unlasting Lisa.mp3"
        } ,
        {
            name: "wishing" ,
            artist: 'kana nishino' ,
            img: './assets/img/kana nishino.jpg',
            path: "./assets/mp3/Wishing KanaNishino .mp3"
        }     

    ] ,
    loadCurrentSong: function() {
        const _this = this ;
        const currentIndex = this.currentIndex ;
        const cdThumb = document.querySelector('.app__cd-thumb') ;
        const songName = document.querySelector('.app__playing-name') ;
        const artist = document.querySelector('.app__playing-artist') ;
        const audio = document.querySelector('.app__audio') ;
        const timebar = document.querySelector('.app__time-bar') ;
        const smallSongName = document.querySelector('.app__small-playing-name') ;
        const smallArtist = document.querySelector('.app__small-playing-artist') ;
        const smallThumb = document.querySelector('.app__small-photo') ;
        const smallTimeBar = document.querySelector('.app__small-time-bar') ;
        const listSong = document.querySelectorAll('.app__song-box') ;
        const activedSong = document.querySelector('.app__song-box.active') ;
        const btnPlay = document.querySelector('#play-button') ;

        cdThumb.style.backgroundImage = `url('${this.songs[currentIndex].img}')` ;
        songName.textContent = this.songs[currentIndex].name ;
        artist.textContent = this.songs[currentIndex].artist ;
        smallSongName.textContent = this.songs[currentIndex].name ;
        smallArtist.textContent = this.songs[currentIndex].artist  ;
        smallThumb.src = this.songs[currentIndex].img ;
        audio.src = this.songs[currentIndex].path ;
        timebar.value = 0 ;
        smallTimeBar.value = 0 ;

        if(activedSong) {
            activedSong.classList.remove('active') ;
        } ;

        Array.from(listSong).forEach((song,i) => {
            if(i === currentIndex) {
                song.classList.add('active') ;
                song.scrollIntoView({
                    block: 'center' ,
                    behavior: 'smooth'
                })
            } ;

        }) ;

    } ,
    loadListSongs: function() {
        const listSongs = this.songs.map((song,i) => {
            return `
            <li class="app__song-box">

            <div class="app__song-thumb">
                <div class="app__song-photo" style="background-image: url('${song.img}') ">
                </div>
            </div>

            <div class="app__song-info">

                <div class="app__info-text-box">
                    <h4 class="app__song-info-name">  
                        ${song.name}
                    </h4>
                </div>

                <div class="app__info-text-box">
                    <p class="app__song-info-artist">  
                        ${song.artist}
                    </p>
                </div>

            </div>

        </li>
        `
        }) ;
        const listBox = document.querySelector('.app__list-songs') ;
        
        listBox.innerHTML = listSongs.join('') ;

    } ,
    playSong : function() {
        const audio = document.querySelector('.app__audio') ;
        const icon = document.querySelector('#play-button i') ;
        const smallIcon = document.querySelector('.btn--play-small i') ;

        audio.play() ;
       
        icon.classList.remove("fa-play") ;
        icon.classList.add("fa-pause") ;
        smallIcon.classList.remove("fa-play") ;
        smallIcon.classList.add("fa-pause") ;

        this.isPlaying = true ;

    } ,
    pauseSong : function() {
        const audio = document.querySelector('.app__audio') ;
        const icon = document.querySelector('#play-button i') ;
        const smallIcon = document.querySelector('.btn--play-small i') ;

        icon.classList.add("fa-play") ;
        icon.classList.remove("fa-pause") ;
        smallIcon.classList.add("fa-play") ;
        smallIcon.classList.remove("fa-pause") ;

        audio.pause() ;
        this.isPlaying = false ;
    } ,
    nextSong : function () {
        const _this = this ;

        if(_this.isRandom) {
            
            var randomIndex ;
            _this.playedSongs.push(_this.currentIndex) ;

            if(_this.playedSongs.length === _this.songs.length) {
                _this.playedSongs = [] ;
            } ;

            do {
                randomIndex = Math.floor(Math.random() * _this.songs.length)
            } while (_this.playedSongs.includes(randomIndex)) ;
            _this.currentIndex = randomIndex ;

        } else if(!_this.isRepeat) {

            if(this.currentIndex < this.songs.length - 1) {
                this.currentIndex += 1 ;
            } else {
                this.currentIndex = 0 ;
            }

        } else {
            this.currentIndex ;
        }

        this.loadCurrentSong() ;
    } ,
    previewSong: function () {

        if(this.currentIndex === 0 ) {
            this.currentIndex = this.songs.length - 1
        } else {
            this.currentIndex -= 1 ;
        }

        this.loadCurrentSong() ;
    } ,
    cdRotate : function() {
        const cdThumb = document.querySelector('.app__cd-thumb') ;
        const cdAnimated = cdThumb.animate([
            {
                transform : 'rotate(360deg)' 
            }
        ], {
                duration : 10000 ,
                iterations : Infinity ,
                easing: 'linear'
            })
        return cdAnimated ;
        
    } ,
    showListSongs: function() { 
        const playingBox = document.querySelector('.app__playing-box') ;
        const listSongsBox = document.querySelector('.app__list-song-box') ;
        const navHeading = document.querySelector('.app__nav-heading-text') ;
        var playingBoxAnimated ;
        var listSongAnimated ;

        if(this.isShowingList) {
            navHeading.textContent = 'Playing List' ;
            playingBoxAnimated = playingBox.animate([{
                transform: 'translateX(0) scaleX(1)' ,
                opacity : 1 ,
                visibility: 'visible'
            },
            {   
                transform: 'translateX(-60%) scaleX(0)' ,
                opacity : 0 ,
                visibility: 'hidden'            
            }], {
                duration: 500 ,
                fill: 'forwards'
            }) ;

            listSongAnimated = listSongsBox.animate([{
                transform: 'translateX(60%) scaleX(0)' ,
                opacity: 0 ,
                visibility: 'hidden'

            }, {
                transform: 'translateX(0%) scaleX(1)' ,
                opacity : 1 ,
                visibility: 'visible'

            }],{    
                duration: 500 ,
                delay : 50 ,
                fill : 'forwards'
            }) ;

            this.isShowingList = false ;
        } else {
            navHeading.textContent = 'Now Playing' ;
            playingBoxAnimated = playingBox.animate([{
                transform: 'translateX(-60%) scaleX(0)' ,
                opacity : 0 ,
                visibility: 'visible'
            },
            {   
                transform: 'translateX(0) scaleX(1)' ,
                opacity : 1 ,
                visibility: 'visible'            
            }], {
                delay: 50 ,
                duration: 500 ,
                fill: 'forwards'
            }) ;

            listSongAnimated = listSongsBox.animate([{
                transform: 'translateX(0%) scaleX(1)' ,
                opacity: 1 ,
                visibility: 'visible'

            }, {
                transform: 'translateX(50%) scaleX(0)' ,
                opacity : 0 ,
                visibility: 'hidden'

            }],{    
                duration: 500 ,
                fill : 'forwards'
            }) ;
    
            listSongsBox.style.display = 'inline-block' ;
            this.isShowingList = true ;
        }

        playingBoxAnimated.play() ;
    } ,
    timeBarAnimated : function() {
        var timebar = document.querySelector('.app__time-bar') ;
        var smallTimeBar = document.querySelector('.app__small-time-bar') ;
        var timeMain = timebar.value ;
        var timeSub = smallTimeBar.value ; 

        timeMain *= 1 ;
        if(timeMain < 30) {
            timeMain += 2 ;
        } ;

        timeSub *= 1 ;
        if(timeSub < 30) {
            timeSub += 2 ;
        } ;

        smallTimeBar.style.setProperty('--width',`${timeMain}%`) ;
        timebar.style.setProperty('--width',`${timeMain}%`) ;
        timebar.style.backgroundImage = `linear-gradient(to right , 
            #8f63ba 0% ,
            #e11a9d ${timeMain}% ,
            #fff ${timeMain}% ,
            #fff 100% 
            )` ;
        
        smallTimeBar.style.backgroundImage = `linear-gradient(to right  ,
            #29d5ee  0% ,
            #8f63ba ${timeSub}% ,
            #fff ${timeSub}% ,
            #fff 100% 
                ` ;

    } ,
    handle : function () {
        this.loadListSongs() ;
        this.loadCurrentSong() ;
        this.showListSongs() ;
        const _this = this ;
        const btnPlay = document.querySelector('#play-button') ;
        const btnPreview = document.querySelector('#back-button') ;
        const btnNext = document.querySelector('#next-button') ;
        var cdThumb = _this.cdRotate() ; 
        const audio = document.querySelector('.app__audio') ;
        const menuBtn = document.querySelector('.app__btn-menu') ;
        const btnRepeat = document.querySelector('#repeat-button') ;
        const timebar = document.querySelector('.app__time-bar') ;
        const smallTimebar = document.querySelector('.app__small-time-bar') ;
        const btnRandom =  document.querySelector('#random-button') ;
        const smallBtnPlay = document.querySelector('.btn--play-small') ;
        const smallBtnNext = document.querySelector('.btn--next-s') ;
        const smallBtnPreview = document.querySelector('.btn--back-s') ;
        const timebarLoad = function() {
            const currentTime = audio.currentTime / audio.duration * 100 ;
            timebar.value = currentTime ;
            smallTimebar.value = currentTime ;
        } ;
        const timebarChange = function(e) {
            const timeChange = audio.duration / 100 * e.target.value ;
            audio.currentTime = timeChange ;
        } ;
        const handleChangeSong = function () {
            _this.isPlaying = false ;
            audio.removeEventListener('timeupdate',timebarLoad);
            btnPlay.click() ;
            cdThumb.cancel() ;
            cdThumb.play() ;
        } ;
        
        var songs = document.querySelectorAll('.app__song-box') ;

        cdThumb.pause() ;
        
        timebar.addEventListener('change',timebarChange) ;  
        timebar.addEventListener('input',_this.timeBarAnimated) ;
        smallTimebar.addEventListener('change',timebarChange) ;  
        smallTimebar.addEventListener('input',_this.timeBarAnimated) ;

        Array.from(songs).forEach(function(song,index) {
            song.onclick = function() {
                if(index !== _this.currentIndex) {
                    _this.currentIndex = index ;
                    _this.loadCurrentSong() ; 
                    handleChangeSong() ;
                }
            } ;

            song.ontouchstart = function() {
                if(index !== _this.currentIndex) {
                    _this.currentIndex = index ;
                    _this.loadCurrentSong() ; 
                    handleChangeSong() ;
                }
            } ;

        }) ;

        timebar.onmousedown = function(e) {
            audio.removeEventListener('timeupdate',timebarLoad) ;
        } ;

        timebar.onmouseup = function() { 
            audio.addEventListener('timeupdate',timebarLoad);
            if(!_this.isPlaying) {
                btnPlay.click() ;
            }
        } ;

        timebar.addEventListener('touchstart' ,function(e) {
            audio.removeEventListener('timeupdate',timebarLoad) ;
           
        }) ;

        timebar.addEventListener('touchend' ,function(e) {
            audio.addEventListener('timeupdate',timebarLoad);
            if(!_this.isPlaying) {
                btnPlay.click() ;
            }
        }) ;

        timebar.addEventListener('touchmove' ,function(e) {
            audio.removeEventListener('timeupdate',timebarLoad) ;
        }) ;

        smallTimebar.addEventListener('touchstart' ,function(e) {
            audio.removeEventListener('timeupdate',timebarLoad) ;
           
        }) ;

        smallTimebar.addEventListener('touchend' ,function(e) {
            audio.addEventListener('timeupdate',timebarLoad);
            if(!_this.isPlaying) {
                btnPlay.click() ;
            }
        }) ;

        smallTimebar.addEventListener('touchmove' ,function(e) {
            audio.removeEventListener('timeupdate',timebarLoad) ;
        }) ;

        smallTimebar.onmousedown = function() {
            audio.removeEventListener('timeupdate',timebarLoad) ;
        } ;

        smallTimebar.onmouseup = function() { 
            audio.addEventListener('timeupdate',timebarLoad);
            if(!_this.isPlaying) {
                btnPlay.click() ;
            }
        } ;

        audio.onplay = function() {
            audio.addEventListener('timeupdate',timebarLoad);
            audio.addEventListener('timeupdate',_this.timeBarAnimated);
            cdThumb.play() ;
        } ;

        audio.onpause = function() {
            cdThumb.pause() ;
        };

        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play() ;
            } else {
                btnNext.click() ;
            }
        } ;

        menuBtn.onclick = function() {
            _this.showListSongs() ;
        } ;

        menuBtn.ontouch = function() {
            _this.showListSongs() ;
        } ;

        btnPlay.onclick = function() {
            if(_this.isPlaying === false) {
                _this.playSong() ;
                _this.isPlaying = true ;
            } else {
                _this.pauseSong() ;
                _this.isPlaying = false ;
            }
        } ;
    
        smallBtnPlay.onclick = function() {
            if(_this.isPlaying === false) {
                _this.playSong() ;
                _this.isPlaying = true ;
            } else {
                _this.pauseSong() ;
                _this.isPlaying = false ;
            }

        } ;

        btnNext.onclick = function() {
            _this.nextSong() ;
            handleChangeSong() ;
        }; 

        smallBtnNext.onclick = function() {
            _this.nextSong() ;
            handleChangeSong() ;
        };

        smallBtnPreview.onclick = function() {
            _this.previewSong() ;
            handleChangeSong() ;
        } ;

        btnPreview.onclick = function() {
            _this.previewSong() ;
            handleChangeSong()
        } ;

        btnRepeat.onclick = function() {
            if(_this.isRepeat) {
                _this.isRepeat = false ;
                this.classList.remove('active-text') ;
            } else {
                _this.isRepeat = true ;    
                this.classList.add('active-text') ;

                if(_this.isRandom) {
                    _this.isRandom = false ;
                    btnRandom.classList.remove('active-text') ;
                }

            }
        } ;

        btnRandom.onclick = function() {
            if(_this.isRandom) {
                _this.isRandom = false ;
                this.classList.remove('active-text') ;
            } else {
                _this.isRandom = true ;
                this.classList.add('active-text') ;
                if(_this.isRepeat) {
                    _this.isRepeat = false ;
                    btnRepeat.classList.remove('active-text') ;
                }
            }

        } ;

    } ,
    start: function() {
        this.handle()
    }
}

app.start()


