// 1. Bikin kotak div dan atur gayanya
const containerDiv = document.createElement('div');
containerDiv.style.border = '1px solid black';
containerDiv.style.backgroundColor = 'pink';

// 2. Bikin h1 dan p untuk isi di dalam kotak
const divH1 = document.createElement('h1');
divH1.textContent = "I'm in a div";

const divP = document.createElement('p');
divP.textContent = "ME TOO!";

// 3. Masukkan h1 dan p KE DALAM div (bukan ke body)
containerDiv.appendChild(divH1);
containerDiv.appendChild(divP);

// 4. Baru tempelkan div utuh tersebut ke body
document.body.appendChild(containerDiv);

// 1. Paragraf Merah
const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';
document.body.appendChild(redP);

// 2. H3 Biru
const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue';
document.body.appendChild(blueH3);