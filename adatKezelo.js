export const tablazatRendez = (lista, nevIrany) => {
  lista.sort((a, b) => {
    return a.nev.toUpperCase() > b.nev.toUpperCase()
      ? 1 * nevIrany
      : -1 * nevIrany;
  });
  return lista;
};

export const szuresNevSzerint = (lista, szurtSzoveg) => {
  const szurtLista = lista.filter((elem) => {
    return elem.nev.includes(szurtSzoveg);
  });
  return szurtLista;
};

export const sorTorles = (lista, index) => {
  lista.splice(index, 1);
  return lista;
};
