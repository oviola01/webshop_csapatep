import { PROGRAMLISTA, PROGRAMKULCS } from "./adat.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";
import { rendezBarmiSzerint } from "./rendezesSzures.js";
//import { szuresBarmiSzerint } from "./rendezesSzures.js";

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

  /*
  ezt itt nem tudtam megcsinálni :(

    function szuroAktiv() {
      $("th").on("click", szuresBarmiSzerint(PROGRAMLISTA, feltetel));
      osszeAllitMind();
    }

    */


  function torlesGomb() {
    const TR = $("tr.row");
    TR.each(function (index) {
      const deleteButton = $('<td class="del"><button>Törlés</button></td>');
      $(this).append(deleteButton);
      deleteButton.on("click", function () {
        $(this).closest("tr").remove();
        PROGRAMLISTA.splice(index, 1);
      });
    });
  }

  /*function torlesGomb() {
    const TR = $("tr");
    TR.append('<td class="del"><button>Törlés</button></td>');
    PROGRAMLISTA.splice(index, 1);
    osszeAllitMind();
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
  */
 
  
  function ujProgram() {
      const Program = {};
      let kuldheto = true;
      let hibauzenet="Legalább 5 fő részvétele szükséges!";
  
      Program.megnevezes = $("#pneve").val();
      Program.idopont = $("#pido").val();
      Program.helyszin = $("#phely").val();
      
      if ($("#presztv").val() < 5) {
          kuldheto = false;
          $("#adathiba").append(hibauzenet);
      } else {
          Program.resztvevok = $("#presztv").val();
          kuldheto = true;
          $("#adathiba").append("");
      }
  
      if ($("#ivos").is(":checked")) {
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


  
  