export const tablaazatOsszeallit = (lista) => {
  let txt = "";
  txt += `<table class='table table-striped'>`;
  txt += `<tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>`;

  lista.forEach((ember, i) => {
    txt += `<tr>`;
    for (const key in ember) {
      txt += `<td>${ember[key]}</td>`;
    }
    txt += `<td id="${i}" class="kuka">❌</td> 
            </tr>`;
  });
  txt += `</table>`;
  return txt;
};

export const megjelenites = (txt) => {
  const adtokElem = $(".adatok");
  adtokElem.html(txt);
};
