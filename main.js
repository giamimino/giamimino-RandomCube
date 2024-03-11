var player = document.getElementById('player');
var Score = document.getElementById('score');
var Timer = document.getElementById('timer');
var RealScore = 0;
var RealTimer = 20;
var IntervalCounter = 400;
var EasyMode = document.getElementById('easy-mode')
var NormalMode = document.getElementById('easy-normal')
var HardMode = document.getElementById('easy-hard')
var Interval = setInterval(StartTimer, IntervalCounter);
var ClickedTimer = 5;
var Shop = document.querySelector('.shop')
var ShopWrapper = document.querySelector('.shop-wrapper')
var Coins = document.getElementById('scorecoin')


if (Shop) {
Shop.addEventListener('click', ()=> {
    ShopWrapper.classList.add('active')
    Shop.style.display = "none";
});
}else {
    console.log('not working!')
}


EasyMode.addEventListener('click', ()=> {
    RealTimer = 40;
    RealScore = 0;
    Score.textContent = 'Score'+ ' ' + RealScore;
    ClickedTimer = 5;
});

NormalMode.addEventListener('click', ()=> {
    RealTimer = 20;
    RealScore = 0;
    Score.textContent = 'Score'+ ' ' + RealScore;
    ClickedTimer = 2;
});

HardMode.addEventListener('click', ()=> {
    RealTimer = 5;
    RealScore = 0;
    Score.textContent = 'Score'+ ' ' + RealScore;
    ClickedTimer = 1;
});



player.addEventListener('click', ()=> {
    var RandomPosX = Math.floor(Math.random() * 400);
    var RandomPosY = Math.floor(Math.random() * 500);
    var RandomScale = Math.floor(Math.random() * 60);


    if (RandomScale < 10) {
        RandomScale = 20;        
    }

    RealScore++;
    Score.textContent = 'Score' + ' ' + RealScore;

    RealTimer += ClickedTimer;
    Timer.textContent = RealTimer;



    player.style.marginLeft = RandomPosX + 'px';
    player.style.marginTop = RandomPosY + 'px';
    player.style.width = RandomScale + 'px';
    player.style.height = RandomScale + 'px';
});

function StartTimer() {
    RealTimer--;
    Timer.textContent = RealTimer;
    if(RealTimer < 1) {
        EndGame();
        StopTimer();
    }
}

function StopTimer() {
    clearInterval(Interval);
}

function EndGame() {
    swal.fire('ops time out, you lose' + ' ' + 'your score is' + ' ' + RealScore)
}