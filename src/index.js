let heroi = ["Ganksmann", 0]
let nivelHeroi = null;

heroi[1] = (12000 * Math.random())

if (heroi[1] <= 1000) nivelHeroi = "Ferro"
else if (heroi[1] > 1000 && heroi[1] <= 2000) nivelHeroi = "Bronze"
else if (heroi[1] > 2000 && heroi[1] <= 3000) nivelHeroi = "Prata"
else if (heroi[1] > 3000 && heroi[1] <= 4000) nivelHeroi = "Ouro"
else if (heroi[1] > 4000 && heroi[1] <= 5000) nivelHeroi = "Platina"
else if (heroi[1] > 5000 && heroi[1] <= 6000) nivelHeroi = "Diamante"
else if (heroi[1] > 6000 && heroi[1] <= 8000) nivelHeroi = "Ascendente"
else if (heroi[1] > 8000 && heroi[1] < 10000) nivelHeroi = "Imortal"
else if (heroi[1] > 10000) nivelHeroi = "Radiante"

console.log("O herói de nome " + heroi[0] + " está no nível " + "'" + nivelHeroi + "'")