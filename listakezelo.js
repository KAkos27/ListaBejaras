import emberekLista from "./adat.js";

const listakezelo = () => {
  for (let index = 0; index < emberekLista.length; index++) {
    const elem = emberekLista[index];
    console.log(elem);
  }

  emberekLista.forEach((ember, i) => {
    console.log(ember, i);
  });

  const ferfiak = emberekLista.filter((ember) => {
    return ember.nem === false;
  });

  console.log(ferfiak);

  const fiatalok = emberekLista.filter((ember) => {
    return ember.kor < 20;
  });

  console.log(fiatalok);

  const oregFerfiak = emberekLista.filter((ember) => {
    return ember.kor > 20 && !ember.nem;
  });

  console.log(oregFerfiak);

  emberekLista.sort((a, b) => {
    return b.kor - a.kor;
  });

  console.log(emberekLista);

  emberekLista.sort((a, b) => {
    return Math.random() * 10 - 5;
  });

  console.log(emberekLista);
};

export default listakezelo;
