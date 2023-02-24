const cp = require('child_process');

let download = async function(uri, filename){
  let command = `curl -so ${filename} "${uri}"`;
  console.log(command);
  cp.execSync(command);
};

async function download_card(imgNumber, cardOrder, folder) {
  await download(`http://www-labs.iro.umontreal.ca/~reid/ift1146/E06/classic-cards/${imgNumber}.png`, `./${folder}/${cardOrder}.png`);
}

let folders = ["trefle", "pique", "coeur", "carreau"];
let cardsNumbers = ["1", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];

for(let i=1; i<=52; i++) {
  download_card(i, cardsNumbers[parseInt((i-1)/4)], folders[(i-1)%4]);
}
