import { PROGRAMLISTA, PROGRAMKULCS } from "./adat.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";
import { rendezBarmiSzerint } from "./rendezesSzures.js";

let ARTICLE;
let kartyak;
let tablazat;

$(function () {
    rendezBarmiSzerint(PROGRAMLISTA,"idopont",1); /**időpont szerint növekvő sorrendbe rendez */
    console.log(PROGRAMLISTA);

    ARTICLE = $("article");
    kartyak = $("section.kartyak");
    tablazat = $("section.tablazat");
    osszeAllitMind();
    const SUBMIT = $("#rogzites");
    SUBMIT.on("click", ujProgram);

    function osszeAllitMind() {
      $(kartyak).html(osszeallit(PROGRAMLISTA));
      $(tablazat).html(osszeallit2(PROGRAMLISTA));
      torlesGomb();
  }
  
  function torlesGomb() {
    const TR = $("tr");
    TR.append("<td><button>Törlés</button></td>");
    for (let index = 0; index < PROGRAMLISTA.length; index++) {
      $("button").eq(index).on("click", function () {
        torlesFunkcio(index);
      });
    }
  }
  
  function torlesFunkcio(index) {
    PROGRAMLISTA.splice(index, 1);
    osszeAllitMind();
  }
  
  
  function ujProgram() {
      let Program = {};
      let kuldheto = true;
      let hibauzenet="Legalább 5 fő részvétele szükséges!";
  
      Program.megnevezes = $("#pneve").value;
      Program.idopont = $("#pido").value;
      Program.helyszin = $("#phely").value;
      
      if ($("#presztv").value < 5) {
          kuldheto = false;
          $("#adathiba").append(hibauzenet);
      } else {
          Program.resztvevok = $("#presztv").value;
          kuldheto = true;
          $("#adathiba").append("");
      }
  
      if ($("#ivos").checked) {
        Program.alkohol = "igen";
      } else {
        Program.alkohol = "nem";
      }
    
      console.log(Program);
      if (kuldheto) {
        PROGRAMLISTA.push(Program);
        console.log(PROGRAMLISTA);
        osszeAllitMind();
      }
    }
  }
);


  
  