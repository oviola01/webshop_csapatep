

export function rendezBarmiSzerint(lista,kulcs, irany=1) {

  console.log(lista);
    lista.sort(function (a, b) {
    console.log(a.nev);
    console.log(b.nev);

    console.log("következő a, b");
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    ertek*=irany;
    return ertek;
  });
}

/*

export function szuresBarmiSzerint(lista, kulcs, feltetel){
  const szurtLista = lista.filter(szures);
  function szures(feltetel) {
    return (element) => element.toLowerCase().includes(feltetel.toLowerCase());
    const szurtLista = Object.keys(lista)
      .filter((kulcs) => kulcs.includes(feltetel))
      .reduce(object, kulcs) => {
        return Object.assign(object, {
          [kulcs]: szurtLista[kulcs]
        });
      };
  };

Sajnos ezt az internet segítségével sem tudtam megírni, nem is értem, hogy működik. :(

*/
