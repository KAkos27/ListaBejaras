import emberekLista from "./adat.js";
import { tablazatRendez } from "./adatKezelo.js";
import { tablaazatOsszeallit, megjelenites } from "./fuggvenyek.js";

let nevIrany = 1;
init(emberekLista);

function init(lista) {
  const txt = tablaazatOsszeallit(emberekLista);
  megjelenites(txt);
  nevRendezEsemeny(lista);
}

function nevRendezEsemeny(lista) {
  const nevElem = $(".adatok th").eq(0);
  nevElem.on("click", () => {
    const ujLista = tablazatRendez(lista, nevIrany);
    nevIrany *= -1;
    init(ujLista);
  });
}
