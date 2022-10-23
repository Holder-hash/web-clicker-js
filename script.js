let money = -1;
let moneyinSec = 1;
let byOneBut = 100;
let zeClick = 0;
let startLeftBox = 0;
let newStartSpawn = 0;

var playerName = prompt("Введите свой ник", "Vladosik333222111")

let stopStartSpawn = 1;

let userHp = 15;
let hpEnemy = 50;
let hpPrise = 30;

let enemyDied = 0;
let enemySpawn = 10;

let damageUser = 1;
let damageEnemy = 1;

let StartTime = 0;

//Лист со звуками
var zvClick2 = new Audio(); //Смерть
    zvClick2.src = "ripUser.wav";

var zvClick = new Audio(); //Смерть врага
    zvClick.src = "ripEmeny.wav";

var zvIn = new Audio(); //Наведение
    zvIn.src = "In.wav";

var zvOut = new Audio(); //Уведение
    zvOut.src = "Out.wav";
    
//Основная кнопка
const buttons = document.getElementById("buttons");

// ты!
buttons.addEventListener('mouseover', () => {
    zvIn.play(); 
    document.querySelector(".prompterText").style.color = "#00aeff";
    document.querySelector(".prompterText").innerHTML = playerName;
    document.querySelector(".prompterText").style.animation = "prompterTextIn 0.75s ease";
    document.querySelector(".prompterText").style.animationFillMode = "forwards";
});

buttons.addEventListener('mouseout', () => {
    zvOut.play();
    document.querySelector(".prompterText").style.color = "#00aeff";
    document.querySelector(".prompterText").innerHTML = playerName;
    document.querySelector(".prompterText").style.animation = "prompterTextOut 0.5s ease";
    document.querySelector(".prompterText").style.animationFillMode = "forwards";
});

// враг!
buttonsEnemy.addEventListener('mouseover', () => { 
    document.querySelector(".prompterText").style.color = "#ff0077";
    document.querySelector(".prompterText").innerHTML = "Enemy";
    document.querySelector(".prompterText").style.animation = "prompterTextIn 0.75s ease";
    document.querySelector(".prompterText").style.animationFillMode = "forwards";
});

buttonsEnemy.addEventListener('mouseout', () => {
    document.querySelector(".prompterText").style.color = "#ff0077";
    document.querySelector(".prompterText").innerHTML = "Enemy";
    document.querySelector(".prompterText").style.animation = "prompterTextOut 0.5s ease";
    document.querySelector(".prompterText").style.animationFillMode = "forwards";
});
function inClicksAnimate() {
    document.getElementById("outMoney").style.animation = "moneSize 0.5s ease infinite";
}

moneyClickDiv.addEventListener('mouseup', () => 
{
    document.getElementById("moneyClick").innerHTML = "trhfrth";
;});

//клики по основной кнопке
function inClicks() {
    //стартовое нажатие с появлением меню

    if (startLeftBox == 0){
        startLeftBox = startLeftBox + 1;
       
        setTimeout( () => {
            document.querySelector(".cubs").style.animation = "cubsIn 1.75s ease";
            document.querySelector(".cubs").style.animationFillMode = "forwards";
        }, 400);
        
        setTimeout( () => {
            document.querySelector(".buTwoMoney").style.animation = "buTwoMoneyIn 1.75s ease";
            document.querySelector(".buTwoMoney").style.animationFillMode = "forwards";
        }, 800);

        setTimeout( () => {
            document.querySelector(".shopEatOne").style.animation = "shopEatOneIn 1.75s ease";
            document.querySelector(".shopEatOne").style.animationFillMode = "forwards";
        }, 800);

        setTimeout( () => {
            document.querySelector(".cubsUsetHpBox").style.animation = "UserHpIn 1.75s ease";
            document.querySelector(".cubsUsetHpBox").style.animationFillMode = "forwards";
        }, 1200);
       
        setTimeout( () => {
            document.querySelector(".moneyClickDiv").style.animation = "moneyClickDivIn 1.75s ease";
            document.querySelector(".moneyClickDiv").style.animationFillMode = "forwards";
        }, 1200);
    }

    //считывание кликов по кнопке и прибавление денег
    if (startLeftBox == 1) {
        money = money + moneyinSec;
        console.log(money);
        document.getElementById("outMoney").innerHTML = money + " $";
        zeClick++;
        newStartSpawn = newStartSpawn + stopStartSpawn;

        //рандом появления врага

        let randomNumber = Math.random() * 150;
        randomNumber = Math.ceil(randomNumber);
        if (randomNumber >= 40)
        {
            enemySpawn = randomNumber;
            console.log(enemySpawn);
        }

        //появление врага

        // lvl 2 врага 
       if (moneyinSec >=3 && userHp >= 20){
            hpEnemy = 100;
           damageEnemy = 2;
        }
        if (newStartSpawn >= enemySpawn){
            enemyDied = 0;
            StartTime = StartTime + 1;
            MonsterDiedStopTime = 1;
            newStartSpawn = 0;

            StartHp();

            document.getElementById("outHpEnemy").innerHTML = hpEnemy + "hp-enemy";
            document.getElementById("damageBoxEnemyText").innerHTML = "Damage- " + damageEnemy;

            buttonsEnemy.style = "display: block";
            document.querySelector(".cubsEmeny").style.animation = "hpBarEnemy 1.5s ease";
            document.querySelector(".cubsEmeny").style.animationFillMode = "forwards";
            
            setTimeout( () => {
            document.querySelector(".damageBoxEnemy").style.animation = "damageBoxEnemyIn 1.5s ease";
            document.querySelector(".damageBoxEnemy").style.animationFillMode = "forwards";
            }, 200);
        }

        //тряска денег (анимация)

        inClicksAnimate();

    }
inClicks.play();
}

//считывание кликов по врагу
function inClicksEnemy() {
    hpEnemy = hpEnemy - damageUser;
    document.getElementById("outHpEnemy").innerHTML = hpEnemy + "hp-enemy";

    //проверка врага на смерть

    if(hpEnemy <= 0){
        enemyDied = 1;
        newStartSpawn = 0;
        console.log(buttonsEnemy)
        buttonsEnemy.style = "display: none";
        hpEnemy = hpEnemy + 50;
        document.getElementById("outHpEnemy").innerHTML = "Destroyed!";
        document.getElementById("damageBoxEnemyText").innerHTML = "Destroyed!";
        StartTime = StartTime - 1;

        zvClick.play();

        //скрытие меню врага при его смерти

        setTimeout( () => {
            document.querySelector(".cubsEmeny").style.animation = "hpBarEnemyCloses 1.5s ease";
            document.querySelector(".cubsEmeny").style.animationFillMode = "forwards";
        }, 1000);

        setTimeout( () => {
        document.querySelector(".damageBoxEnemy").style.animation = "damageBoxEnemyOut 1.5s ease";
        document.querySelector(".damageBoxEnemy").style.animationFillMode = "forwards";
        }, 1200);

        setTimeout( () => {
            document.getElementById("outHpEnemy").innerHTML = hpEnemy + "hp-enemy";
        }, 3000);

        setTimeout( () => {
            document.getElementById("damageBoxEnemyText").innerHTML = "Damage- " + damageEnemy;
        }, 3000);
    }
}

//покупка первой прокачки (+2$ за клик)
function buttonsByOnClickOne() {
if (money >= byOneBut)
    {
        money = money - byOneBut;
        byOneBut = byOneBut + 10;
        moneyinSec = moneyinSec + 2;
        document.getElementById("monInClickBy").innerHTML = "+2$ in clicl/" + byOneBut + "$";
        document.getElementById("moneyClick").innerHTML = moneyinSec + "$/click";
        document.getElementById("outMoney").innerHTML = money + " $";
    }
}

//Урон по игроку
function StartHp() {
    intervalID = setInterval(() => {
        if (money > 0){
            money = money - 1;
        }
        if (userHp > 0){
            userHp = userHp - damageEnemy;
        }
        document.getElementById("outMoney").innerHTML = money + " $";
        document.getElementById("outUserHpBox").innerHTML = "You HP - " + userHp;
        console.log(userHp);

        //смерть игрока (((
        if (userHp <= 0){
            console.log("Player is dead")
            clearInterval(intervalID);
            document.getElementById("outMoney").innerHTML = "You died!!!";
            document.getElementById("outHpEnemy").innerHTML = "ENEMY WIN!";
            moneyinSec = 0;
            money = 0;
            stopStartSpawn = 0;
            damageUser = 0;
            zvClick2.play();

            //скрытие меню при смерти игрока
            setTimeout( () => {
                document.querySelector(".buTwoMoney").style.animation = "buTwoMoneyOut 1.75s ease";
                document.querySelector(".buTwoMoney").style.animationFillMode = "forwards";
            }, 1200);
           
            setTimeout( () => {
                document.querySelector(".moneyClickDiv").style.animation = "moneyClickDivOut 1.75s ease";
                document.querySelector(".moneyClickDiv").style.animationFillMode = "forwards";
            }, 800);

            setTimeout( () => {
                document.querySelector(".cubsUsetHpBox").style.animation = "UserHpOut 1.75s ease";
                document.querySelector(".cubsUsetHpBox").style.animationFillMode = "forwards";
            }, 800);

            setTimeout( () => {
                document.querySelector(".shopEatOne").style.animation = "shopEatOneOut 2.25s ease";
                document.querySelector(".shopEatOne").style.animationFillMode = "forwards";
            }, 1200);

            setTimeout( () => {
                document.querySelector(".damageBoxEnemy").style.animation = "damageBoxEnemyOut 1.5s ease";
                document.querySelector(".damageBoxEnemy").style.animationFillMode = "forwards";
            }, 800);

            document.getElementById("outMoney").style.animation = "moneSizeStop 0.5s ease ";
            document.getElementById("outHpEnemy").style.animation = "moneSize 0.5s ease infinite";
        }

        //победа игрока!!!
        if (enemyDied == 1){
            clearInterval(intervalID);
            document.getElementById("outMoney").innerHTML = "YOU WIN!!!";
        }
    }, 1000);
}

//покупка здоровья
function shopEatOneClick() {

    if (money >= hpPrise){
        money = money - hpPrise
        hpPrise = hpPrise + 2;
        userHp = userHp + 5;
        document.getElementById("shopEatOneText").innerHTML = "+5hp " + hpPrise + "$";
        document.getElementById("outUserHpBox").innerHTML = "You HP - " + userHp;
        document.getElementById("outMoney").innerHTML = money + " $";
    }

}

window.addEventListener('beforeunload', (event) => {
    event.returnValue = "";
});