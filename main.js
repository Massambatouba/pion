// creation du table
let cage = document.createElement('table');
cage.style.cssText = "border: 2px solid; border-collapse: collapse";
let pion = document.createElement('img');
pion.src = "pion.png";
//Boucle des rangées
for (let x = 0; x < 5; x++){
	let tr = cage.insertRow();
	for (let y = 0; y < 5; y++){
	let td = tr.insertCell();
	td.style.cssText = "border: 1px solid; width: 100px; height: 100px; font-size: 0 ";	
	}
}
let x = y = 2;
cage.rows[x].cells[y].appendChild(pion);
out.appendChild(cage);
window.addEventListener("keydown", evt => {
	console.log(evt.key);
	if(evt.key === "ArrowUp" && x > 0)
	x--;
	else if (evt.key === "ArrowDown" && x < 4)
	x++;
	if(evt.key === "ArrowLeft" && y > 0)
	y--;
	else if (evt.key === "ArrowRight" && y < 4)
	y++;
	cage.rows[x].cells[y].appendChild(pion);

}, false);
