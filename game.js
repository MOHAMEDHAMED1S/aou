const player = document.getElementById('player');
const obstacle = document.createElement('div');
obstacle.setAttribute('id', 'obstacle');
document.getElementById('game').appendChild(obstacle);
const message = document.getElementById('message');
const gameOverMsg = document.getElementById('game-over-msg');
const restartBtn = document.getElementById('restart-btn');
const currentScoreElem = document.getElementById('current-score');
const highScoreElem = document.getElementById('high-score');

let isJumping = false;
let isGameOver = false;
let currentScore = 0;
let highScore = 0;
const subjects = [
    'El-97', 'El-98', 'El-99', 'El-111', 'El-112', 'FR101', 'GR 112', 'GR 118', 'GR 131', 'GR 111', 'GR101', 'Gb 102', 'AR 113', 'SL 101', 'GT101', 'M269', 'Ms102', 'Tm240', 'T216-A', 'T216_B', '_Tm129', 'Tm471_B', 'Tm471_A', 'Tm340', 'Tm356', 'M238', 'Tm260', 'Mt395', 'M140', 'Tm254', 'T316', 'T318', 'Tm352', 'Tm275', 'Tm291', 'M109(1)', 'M109. (2)', 'Tm112', 'Tm354', 'Tm351', 'Tm256', 'Tm298', 'Mt141', 'Mt101', 'Mst224', 'M218', 'Tm103', 'M110', 'Tm270', 'Tm105', 'Tt284', 'M251', 'Mt132', 'TM358', 'Mst129', 'MT129', 'Mt131', 'Mt131', 'Eco101', 'Bus110', 'Bus102', 'Bus310', 'B205A', 'Mkt111', 'Buc111', 'LB170', 'B327', 'Mkt331', 'Bus115', 'B122', 'MGT111', 'B123', 'B392', 'B207B', 'Eco102', 'B124', 'B291', 'Bus101', 'ACT111', 'B292', 'B207a', 'FIN342', 'FIN341', 'B324', 'FIN240', 'FIN340', 'B628', 'B325', 'ACC302', 'B326', 'ACC300', 'B205B', 'B829', 'B839', 'El122', 'El121', 'El120', 'El119', 'El118', 'El117', 'EA300A', 'EA300B', 'ED256', 'E302A', 'E302B', 'E304A', 'E304B', 'U214A', 'U214B', 'AA100T', 'AA100A', 'AA100B', 'A10012A', 'A10012B', 'A10012T', 'A230A', 'A230B', 'A335A', 'A335B', 'TR102', 'TR103', 'TR301', 'TR302', 'TR303', 'TR304', 'TR305', 'TR306', 'TR307', 'TR308', 'Ge104', 'Ge201', 'Ge202', 'Ge301', 'Gm101', 'Gm102', 'Gm301', '4vc012', '4vc013', '4vc014', '4vc015', '4vc016', '5vc012', '5vc013', '5vc015', '5vc017', '5vc019', '6vc012', '6vc015', '6vc018', '6vc019', '4AD010', '5AD008', '6AD001', '6AD002', 'Mgn101', 'Mgn102', 'Mgn103', 'Mgn104', 'Mgn105', 'Mgn106', 'Mgn107', 'Mgn108', 'Mgn109', 'Mgn110', 'Mgn111', 'Mgn112', 'Mgn113', 'Mgn114', 'Mgn115', 'Mgn116', 'Mgn117', 'Mgn118', 'MC101', 'RTV201', 'RTV202', 'RTV203', 'RTV204', 'RTV205', 'RTV206', 'RTV207', 'RTV301', 'RTV302', 'RTV303', 'RTV304', 'RTV305', 'RTV306', 'Rtv307', 'RTV308', 'RTV309', 'RTV310', 'RTV311', 'Rtv312', 'RTV401', 'RTV402', 'RTV403', 'RTV404', 'RTV405', 'RTV406', 'Rtv407', 'RTV408', 'RTV409', 'RTV410', 'PRA201', 'PRA202', 'PRA203', 'PRA204', 'PRA205', 'PRA206', 'PRA207', 'PRA301', 'PRA302', 'PRA303', 'PRA304', 'PRA305', 'PRA306', 'PRA307', 'PRA308'];
let currentSubject = 'M110';
let obstacleSpeed = 3000;

function jump() {
    // تحقق مما إذا كان اللاعب في حالة قفز أو إذا كانت اللعبة قد انتهت
    if (isJumping || isGameOver) return;
    
    isJumping = true; // تعيين حالة القفز إلى true
    let position = 0; // تعيين موضع اللاعب إلى الصفر

    // تعيين موضع البداية ليكون أعلى من 0
    const startPosition = 10; // أو أي قيمة تناسبك
    player.style.bottom = startPosition + 'px'; // تعيين موضع اللاعب

    // وظيفة لرفع اللاعب
    const upInterval = setInterval(() => {
        if (position >= 150) { // إذا وصل اللاعب لأعلى نقطة
            clearInterval(upInterval); // إيقاف رفع اللاعب
            
            // وظيفة لخفض اللاعب
            const downInterval = setInterval(() => {
                if (position <= 0) { // إذا عاد اللاعب إلى الأرض
                    clearInterval(downInterval); // إيقاف خفض اللاعب
                    isJumping = false; // تعيين حالة القفز إلى false
                }
                position -= 10; // خفض الموضع
                player.style.bottom = startPosition + position + 'px'; // تحديث موضع اللاعب
            }, 20);
        }
        position += 10; // رفع الموضع
        player.style.bottom = startPosition + position + 'px'; // تحديث موضع اللاعب
    }, 20);
}


// إعداد العقبة بشكل عشوائي
function setRandomSubject() {
    const randomIndex = Math.floor(Math.random() * subjects.length);
    currentSubject = subjects[randomIndex];
    obstacle.innerHTML = currentSubject;
}

// تحديث السكور
function updateScore() {
    currentScore++;
    currentScoreElem.textContent = `Score: ${currentScore}`;
    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreElem.textContent = `High Score: ${highScore}`;
    }
}

// كشف الاصطدام
function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.bottom > obstacleRect.top
    ) {
        gameOver();
    }
}

// إنهاء اللعبة
function gameOver() {
    isGameOver = true;
    obstacle.style.animationPlayState = 'paused';
    gameOverMsg.textContent = `  ${currentSubject} خسرت!   هتشيل المادة دي يبرو: `;
    message.style.display = 'block';
}

// إعادة تشغيل اللعبة
function restartGame() {
    isGameOver = false;
    currentScore = 0;
    player.style.bottom = 100 + 'px';
    currentScoreElem.textContent = `Score: 0`;
    obstacle.style.animationPlayState = 'running';
    message.style.display = 'none';
    setRandomSubject();

    // إخفاء العقبة لمدة 3 ثوانٍ
    obstacle.style.display = 'none'; // إخفاء العقبة
    setTimeout(() => {
        obstacle.style.display = 'block'; // عرض العقبة مرة أخرى بعد 3 ثوانٍ
    }, 1000);
}


// الاستماع لضغط الشاشة أو المسافات
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' && !isGameOver) {
        jump();
    }
});

document.addEventListener('click', () => {
    if (!isGameOver) {
        jump();
    }
});

// إعداد العقبة والسكور
setInterval(() => {
    if (!isGameOver) {
        setRandomSubject();
        updateScore();
    }
}, obstacleSpeed);

// فحص الاصطدام
setInterval(checkCollision, 50);