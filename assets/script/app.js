
var musicApp = {
    isPlaying: false ,
    currentIndex: 0,
    isRepeat: false ,
    isRandom: false ,
    songsRepeated: [] ,
    songs: [
        {
            name: 'Different World' ,
            artist: 'Alan Walker ft Sofia Carson' ,
            img : './assets/img/alan walker.jpg' ,
            path: './assets/mp3/Alan Walker Different World ft. Sofia Carson.mp3' 
        } ,
        {
            name: 'Faded' ,
            artist: 'Alan Walker' ,
            img : './assets/img/alan walker.jpg' ,
            path: './assets/mp3/Alan Walker Faded.mp3'
        } ,
        {
            name: 'Sweet but psycho' ,
            artist: 'Ava Max' ,
            img : './assets/img/ava max.jpg' ,
            path: './assets/mp3/Ava Max Sweet but Psycho.mp3'
        } ,
        {
            name: "We don't talk anymore" ,
            artist: 'Charlie Puth ft Selena Gomez' ,
            img : './assets/img/charlie puth.jpg' ,
            path: "./assets/mp3/Charlie Puth We Don't Talk Anymore (feat. Selena Gomez).mp3"
        } ,
        {
            name: "A thousand years" ,
            artist: 'Christina Perri' ,
            img : './assets/img/christina perri.jpg' ,
            path: "./assets/mp3/Christina Perri A Thousand Years.mp3"
        } , {
            name: "Freedom is yours" ,
            artist: 'Nano' ,
            img : './assets/img/nano.jpg' ,
            path: "./assets/mp3/Freedom Is Yours.mp3"
        } ,
        {
            name: "Ichinen Nikagetsu Hatsuka" ,
            artist: 'Bright' ,
            img : './assets/img/bright.jpg' ,
            path: "./assets/mp3/Ichinen Nikagetsu Hatsuka BRIGHT.mp3"
        } ,
        {
            name: "Monsters" ,
            artist: 'Katie Sky' ,
            img : './assets/img/katie sky monsters.jpg' ,
            path: "./assets/mp3/Monsters  Vocal Katie Sky.mp3"
        } ,
        {
            name: "Nevada" ,
            artist: 'Vicetone ft Cozi Zuehlsdorff' ,
            img : './assets/img/vicetone.jpg' ,
            path: "./assets/mp3/Nevada (Lyrics)  Vicetone feat Cozi Zuehlsdorff.mp3"
        } ,
        {
            name: "Sakura Anata ni Deaete Yokatta" ,
            artist: 'RSP' ,
            img : './assets/img/rsp.jpg' ,
            path: "./assets/mp3/Sakura Anata ni Deaete Yokatta.mp3"
        } ,
        {
            name: "Unstoppable" ,
            artist: 'Sia' ,
            img : './assets/img/sia.jpg' ,
            path: "./assets/mp3/Sia  Unstoppable.mp3"
        } ,
        {
            name: "Sugar" ,
            artist: 'Maroon 5' ,
            img : './assets/img/maroon 5.png' ,
            path: "./assets/mp3/Sugar  Maroon 5 (Lyrics).mp3"
        } ,
        {   
            name: "Unlasting" ,
            artist: 'Lisa' ,
            img : './assets/img/lisa.jpg' ,
            path: "./assets/mp3/unlasting Lisa.mp3"
        }
    ] ,
    loadCurrentSong: function () {
        var _this = this ;
        var playingPhoto = document.querySelector('.app__playing-photo') ;
        var playingSong = document.querySelector('.app__playing-name') ;
        var playingArtist = document.querySelector('.app__playing-artist') ;
        var audio = document.querySelector('.app__playing-song') ; 
        var listSongs = document.querySelectorAll('.app__song-box') ;
        var activedSong = document.querySelector('.app__song-box.song-active') ;
        var listBox = document.querySelector('.app__list-box'); 
        playingPhoto.style.backgroundImage = `url('${this.songs[this.currentIndex].img}')`
        playingSong.innerText = this.songs[this.currentIndex].name ; 
        playingArtist.innerText = this.songs[this.currentIndex].artist ;
        audio.src = this.songs[this.currentIndex].path ;
        if(activedSong) {
            activedSong.classList.remove('song-active') ;
        }

        listSongs[this.currentIndex].classList.add('song-active') ;
        activedSong = document.querySelector('.app__song-box.song-active') ;

        activedSong.scrollIntoView({
            block: 'center' ,
            behavior: 'smooth' ,
        }) ;

        Array.from(listSongs).forEach((song) => {
            song.querySelector('.app__song-name-text').style.position = 'relative' ;
        } ) ;
        
        var headingBoxWidth = activedSong.querySelector('.app__song-name-box').offsetWidth ;
        var headingTextWidth = activedSong.querySelector('.app__song-name-text').offsetWidth ;

        if(headingTextWidth >= headingBoxWidth - 2) {
            var x = headingTextWidth - headingBoxWidth ;
            var songName = activedSong.querySelector('.app__song-name-text') ;
            songName.style.position = ' absolute' ;
            songName.animate([
                {
                    transform: 'translateX(0)'
                } ,
                {
                    transform: `translateX(-${x}px)`
                },
                {
                    transform: 'translateX(0)'
                } 
            ] ,{
                duration: x / 6 * 1000 ,
                timing: 'linear',
                iterations: Infinity 
            })

        } ;

        
    } ,
    loadListSongs : function () {
        const listSongs = document.querySelector('.app__list-songs') ;
        var htmls =  this.songs.map((song,index) => {
            var songBox = `
            <li class="app__song-box" data="${index}"> 
            
            <div class="app__song-thumb">

                <div class="app__song-img" style="background-image:url('${song.img}')">
                </div>

            </div>
            
            <div class="app__song-info">         
            <h4 class="app__song-name-box">
                <span class="app__song-name-text">
                    ${song.name}
                </span>
            </h4>
            <div class="app__song-artist-box">
                <p class="app__song-artist-text">
                    ${song.artist}
                </p>
            </div>   
            </div>
            <button class="app__option">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
        </li>
        `
        return songBox
        }) ;

        listSongs.innerHTML = htmls.join('')

    } ,
    playRandom: function() {
        var _this = this ;
        var newSongs = [] ;
        var randomIndex ;
        _this.songsRepeated.push(_this.currentIndex) ;

        if(_this.songsRepeated.length === _this.songs.length) {
            _this.songsRepeated = [] ;
            _this.songsRepeated.push(_this.currentIndex) ;
        }

        for(var i in _this.songs) {
            i = Number.parseInt(i) 
            if(!_this.songsRepeated.includes(i)) {
                newSongs.push(i) ;
            }
        } ;

        randomIndex = Math.floor(Math.random() * newSongs.length) ;

        _this.currentIndex = newSongs[randomIndex] ;
        newSongs.splice(randomIndex,1) ;


    } ,
    nextSong: function() {
        var _this = this
        _this.isPlaying = false ;


        if(_this.isRandom) {
            _this.playRandom()
        } else {

            if(_this.currentIndex === _this.songs.length - 1) {
                _this.currentIndex = 0 ; 
            } else {
                _this.currentIndex += 1 ;
            } ;

        }

        this.loadCurrentSong();
        this.playSong() ;

    } ,
    previousSong: function() {
        var _this = this ;
        _this.isPlaying = false ;
    
        if(_this.isRandom) {
            _this.playRandom() ;
        } else {
            if(_this.currentIndex === 0 ) {
                _this.currentIndex = _this.songs.length - 1 ; 
            } else {
                _this.currentIndex -= 1 ;
            } ;
        }

        this.loadCurrentSong();
        this.playSong() ;
    } ,
    playSong: function () {

        var audio =  document.querySelector('.app__playing-song') ;
        var btnPlay = document.querySelector('.btn--play') ;
        var _this = this ;
        var timeBar = document.querySelector('.app__time-bar') ;  

        if(audio.currentTime === 0) {
            timeBar.value = 0 ;
        }
  
        if(_this.isPlaying) {
            audio.pause() ;
            btnPlay.innerHTML = `<i class="fa-solid fa-play"></i>` ;
            _this.isPlaying = false ;
        } else {
            audio.play() ;
            btnPlay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            _this.isPlaying = true ;

        }
    }
    ,
    timebarAnimated: function() {
        var timeBar = document.querySelector('.app__time-bar') ;
        var value = (timeBar.value - timeBar.min)/(timeBar.max - timeBar.min) * 100 ;
        

        timeBar.style.setProperty('--lightWidth',`${timeBar.value}%`)
        
        if(value < 25) {
            value += 1.5 ;
        } ;
        timeBar.style.background = `linear-gradient(to right,#fa2fc7 0% ,#b30452 ${value}% ,#636363 ${value}% ,#636363 100% )` ;
    } , 
    cdthumbAnimated: function() {
        var audio =  document.querySelector('.app__playing-song') ; 
        var cdThumb = document.querySelector('.app__playing-photo') ;
        var cdRotate = cdThumb.animate([
        {
            transform: 'rotate(0deg)'
        },
        {
            transform: 'rotate(360deg)' 
        } ], {
            duration: 10000 ,
            timing: 'linear',
            iterations: Infinity 
        }) ;

        return cdRotate ;
    } ,
    handle : function () {

        this.loadListSongs() ;
        this.loadCurrentSong() ;

        var _this = this  ;
        var audio =  document.querySelector('.app__playing-song') ; 
        var btnPlay = document.querySelector('.btn--play') ;
        var btnNext = document.querySelector('.app__forward') ;
        var btnBack = document.querySelector('.app__previous') ;
        var timeBar = document.querySelector('.app__time-bar') ; 
        var btnRepeat = document.querySelector('.app__repeat') ; 
        var btnRandom = document.querySelector('.app__random') ;       
        var cdRotate = _this.cdthumbAnimated() ; 
        var listSongs = document.querySelectorAll('.app__song-box') ;

        var timeBarUpdate = function() {
            _this.timebarAnimated();
            timeBar.value = audio.currentTime / audio.duration * 100 ;
        } ; 

        var timeBarChange = function() {
            _this.timebarAnimated() ;
            var currentTime = audio.duration / 100 * timeBar.value ;
            audio.currentTime = currentTime ;
            return audio.addEventListener('timeupdate' ,timeBarUpdate)
        } ;

        cdRotate.pause() ;
        _this.timebarAnimated() ;

        Array.from(listSongs).forEach((song ,i) => {
            song.onclick = function(e) {
                e.target.preventDefault ;
                var i = Number.parseInt(song.getAttribute('data'))  ;
                
                if(i != _this.currentIndex) {
                    _this.currentIndex = i ;
                    _this.loadCurrentSong(); 
                    cdRotate = _this.cdthumbAnimated();
                    audio.removeEventListener('timeupdate' ,timeBarUpdate);
                    timeBar.value = 0 ;
                    _this.timebarAnimated() ;
                    _this.isPlaying = false ;
                    btnPlay.click() ;
                    
                }
                
            }

        })


        audio.onplay = function() {
            cdRotate.play() ;
            audio.addEventListener('timeupdate' ,timeBarUpdate);

            timeBar.addEventListener('change',timeBarChange) ;

            timeBar.addEventListener('touchmove',function() {
                _this.timebarAnimated() ;
                audio.removeEventListener('timeupdate' ,timeBarUpdate) ;
            })

            timeBar.addEventListener('touchstart',function() {
                _this.timebarAnimated() ;
                audio.removeEventListener('timeupdate' ,timeBarUpdate) ;
            })
            

            timeBar.oninput = function() {
                _this.timebarAnimated()
            }


            timeBar.onmousedown = function() {
                _this.timebarAnimated() ;
                audio.removeEventListener('timeupdate' ,timeBarUpdate) ;
            }
    
            timeBar.onmouseup = function(e) {
                audio.addEventListener('timeupdate' ,timeBarUpdate) ;
            }
        }

        audio.onended = function() {
            if(_this.isRepeat) {
                _this.currentIndex -= 1 ;
            }
            btnNext.click() ;
        }
        
        audio.onpause = function() {
            cdRotate.pause()
        } ;

        btnPlay.onclick = function() {
            _this.playSong() ;
        } ;

        btnNext.onclick = function() {
            timeBar.style.background = `linear-gradient(to right,#fa2fc7 0% ,#b30452 0% ,#fff 0% ,#fff 100% )` ;
            audio.removeEventListener('timeupdate' ,timeBarUpdate) ;
            timeBar.value = 0 ;
            if(!_this.isRepeat) {
                cdRotate = _this.cdthumbAnimated() ;
            } ;
            _this.nextSong() ;
        }

        btnBack.onclick = function() { 
            timeBar.style.background = `linear-gradient(to right,#fa2fc7 0% ,#b30452 0% ,#fff 0% ,#fff 100% )` ;
            audio.removeEventListener('timeupdate' ,timeBarUpdate) ;
            timeBar.value = 0 ; 
            _this.previousSong() ;
            cdRotate = _this.cdthumbAnimated()
        };

        btnRepeat.onclick = function(e) {

            if(_this.isRepeat) {
                _this.isRepeat = false ;
                e.target.classList.remove('btn-active')
            } else {
                _this.isRepeat = true ;
                e.target.classList.add('btn-active') ;
                _this.isRandom = false ;
                btnRandom.classList.remove('btn-active')
            }

        } ;

        btnRandom.onclick = function(e) {

            if(_this.isRandom) {
                _this.isRandom = false ;
                e.target.classList.remove('btn-active') ;
                _this.songsRepeated = [] ;
            } else {
                _this.isRandom = true ;
                _this.isRepeat = false ;
                btnRepeat.classList.remove('btn-active')
                e.target.classList.add('btn-active')
            }
        } ;

    } ,
    start : function () {
        this.handle() ;
    }
}

musicApp.start() ;



