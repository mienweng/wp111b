// 取得彈珠台、球、球拍的 DOM 元素
const gameContainer = document.querySelector('.game-container');
const ball = document.querySelector('#ball');
const paddle = document.querySelector('#paddle');

// 設定球的初始位置和速度
let ballX = 190;
let ballY = 50;
let ballSpeedX = 2;
let ballSpeedY = 2;

// 更新球的位置
function updateBallPosition() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // 檢查球是否超出邊界，若超出則反彈
    if (ballX <= 0 || ballX + ball.offsetWidth >= gameContainer.offsetWidth) {
        ballSpeedX *= -1;
    }

    if (ballY <= 0 || ballY + ball.offsetHeight >= gameContainer.offsetHeight) {
        ballSpeedY *= -1;
    }

    // 更新球的位置
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    // 每秒執行約 60 次
    requestAnimationFrame(updateBallPosition);
}

// 監聽鍵盤事件，控制球拍移動
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        // 向左移動
        paddle.style.left = Math.max(0, paddle.offsetLeft - 10) + 'px';
    } else if (event.key === 'ArrowRight') {
        // 向右移動
        paddle.style.left = Math.min(gameContainer.offsetWidth - paddle.offsetWidth, paddle.offsetLeft + 10) + 'px';
    }
});

// 啟動遊戲
updateBallPosition();
