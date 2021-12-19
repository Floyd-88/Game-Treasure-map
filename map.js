let treasureRandom = function(size) {
	return Math.floor(Math.random() * size);
}    


let mapX = document.querySelector("#mapX");
let width = mapX.offsetWidth;
let height = mapX.offsetHeight;

mapX.addEventListener('click', func);

let result = document.querySelector("#result");
result.innerHTML = "";


let clicks = 0;
let c = 0;


let treasure = {
	x: treasureRandom(width),
	y: treasureRandom(height),
};




function func() {
clickFunc();
position(event);
hypotenuse();
check();
}

function clickFunc() {
		clicks = clicks + 1;

console.log(clicks);
}


function position(event) {
	posX = event.offsetX - treasure.x;
	posY = event.offsetY - treasure.y;
	console.log('x=[' + posX + '] y=[' + posY + ']'); 
}

function hypotenuse() {
	c = Math.sqrt((posX * posX) + (posY * posY));

}

function check() {
	(c > 300) ? result.innerHTML = `"Очень холодно" (осталось ${20 - clicks} попыток)`: 
	(c > 150) ? result.innerHTML = `"Холодно" (осталось ${20 - clicks} попыток)`:
	(c > 100) ? result.innerHTML = `"Теплее" (осталось ${20 - clicks} попыток)`:
	(c > 50) ? result.innerHTML = `"Горячо"(осталось ${20 - clicks} попыток)`:
	(c > 20) ? result.innerHTML = `"Обожжешься" (осталось ${20- clicks} попыток)`: result.innerHTML = "Поздравляем, Вы нашли клад!!!"; 

	if(clicks >= 20) {
	result.innerHTML = "Вы превысили кол-во попыток. Конец игры!";	
		}
}