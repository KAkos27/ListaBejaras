import emberekLista from "./adat.js";
import { szuresNevSzerint, tablazatRendez, sorTorles } from "./adatKezelo.js";
import { tablaazatOsszeallit, megjelenites } from "./fuggvenyek.js";
import adatokListaba from "./urlapKezelo.js";

let nevIrany = 1;
init(emberekLista);
nevSzuresEsemeny();
adatokListaba(emberekLista);

export function init(lista) {
  const txt = tablaazatOsszeallit(emberekLista);
  megjelenites(txt);
  nevRendezEsemeny(lista);
  sorTorlesElj(lista);
}

function nevRendezEsemeny(lista) {
  const nevElem = $(".adatok th").eq(0);
  nevElem.on("click", () => {
    const ujLista = tablazatRendez(lista, nevIrany);
    nevIrany *= -1;
    init(ujLista);
  });
}

function nevSzuresEsemeny() {
  const szuroElem = $("#kereses");
  szuroElem.on("keyup", () => {
    let szuroSzoveg = szuroElem.val();
    const ujLista = szuresNevSzerint(emberekLista, szuroSzoveg);
    init(ujLista);
  });
}

function sorTorlesElj() {
  const kuka = $(".kuka");
  kuka.on("click", (event) => {
    let index = event.target.id;
    const ujlista = sorTorles(emberekLista, index);
    init(ujlista);
  });
}
