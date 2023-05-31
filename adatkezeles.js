export function osszeallit(lista) {
    let content = "";
    for (let index = 0; index < lista.length; index++) {
      content += `<div class= "card">`;
      content += `<h3>Program:</h3>`;
      for (const kulcs in lista[index]) {
        content += `<p>${kulcs}: ${lista[index][kulcs]}</p>`;
      }
      content += `</div>`;
    }
   return content;
}

export function osszeallit2(lista) {
    let content2 = "";
    content2 += `<div class = "list">`;
    content2 += `<table>`;
    //fejléc
    content2 += `<thead>`;
    for (let index = 0; index < 1; index++) {
      content2 += `<tr>`;
      for (const kulcs2 in lista[index]) {
          content2 += `<th>${kulcs2}</th>`;
      }
      content2 += `</tr>`;
    }
    content2 += `<thead>`;
    //tartalom
    content2 += `<tbody>`
    for (let index = 0; index < lista.length; index++) {
        content2 += `<tr class = "row">`;
        for (const kulcs2 in lista[index]) {
            content2 += `<td class="rowElement">${lista[index][kulcs2]}</td>`;
        }
        content2 += `</tr>`;
    }
    content2 += `</tbody>`
    content2 += `</table>`;
    content2 += `</div>`;
    return content2;
}
