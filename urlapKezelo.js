import { init } from "./main.js";

const adatokListaba = (lista) => {
  let adat = {
    nev: "",
    kor: 0,
    nem: true,
  };

  const submitElem = $("#submit");

  submitElem.on("click", (event) => {
    event.preventDefault();

    const nevElem = $("#nev");
    const korElem = $("#kor");
    const nemElem = $("input[name='nem']:checked");

    adat = {
      nev: nevElem.val(),
      kor: korElem.val(),
      nem: nemElem.val() === "true" ? true : false,
    };

    const validElemek = $(".valid-feedback");
    if (
      validElemek.eq(0).css("display") === "block" &&
      validElemek.eq(0).css("display") === "block"
    ) {
      lista.push(adat);
      init(lista);
    }
  });
};

export default adatokListaba;
