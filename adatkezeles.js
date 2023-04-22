export function osszeallit(lista) {
    let content = "";
    content += `<div class = "container">`;
    for (let index = 0; index < lista.length; index++) {
      //konzolra:
      for (const ghjghjg in lista[index]) {
       console.log("kulcs",ghjghjg);
       //console.log(lista[index]);
       console.log("érték",lista[index][ghjghjg]);
    
      }
     //html-be:
      content += `<div class= "kartya">`;
      content += `<h3>Regisztrált programok:</h3>`;
      for (const kulcs in lista[index]) {
        content += `<p>${kulcs}: ${lista[index][kulcs]}</p>`;
      }
      content += `</div>`;
    }
    content += `</div>`;
   return content;
}

export function osszeallit2(lista) {
    let content2 = "";
    content2 += `<div class = "container">`;
    content2 += `<table>`;
    //+fejléc
    for (let index = 0; index < lista.length; index++) {
        content2 += `<tr>`;
        for (const kulcs in lista[index]) {
            content2 += `<td>${kulcs}: ${lista[index][kulcs]}</td>`;
        }
        content2 += `</tr>`;
    }
    content2 += `</table>`;
    content2 += `</div>`;
    return content2;
}
