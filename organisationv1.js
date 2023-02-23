let cubes = [
    ["billeder/photo1.png", "Formand", "Peter Christensen", "Mail: Formand@kbm-museum.dk"],
    ["billeder/photo2.png", "Næstrmand", "Henriette Schøn", "Mail: Naestformand@kbm-museum.dk"],  
    ["billeder/photo3.png", "Kasserer", "Sonja Hansen", "Mail: kasserer@kbm-museum.dk"],   
    ["billeder/photo4.png", "Sekretær", "Palle Birk Hansen", "Mail: sekretaer@kbm-museum.dk"],   
    ["billeder/photo5.png", "Bestyrelsesmedlem", "Inge-Lise Frost", "Mail:bf@bfv.dk"],    
    ["billeder/photo67.png", "Bestyrelsesmedlem", "Mona Eilschou", "Mail.: monaeilschoujensen@gmail.com"],   
    ["billeder/photo67.png", "Bestyrelsesmedlem", "Bjarne Ditlevsen", "Mail: katdit@live.dk"],    
    ["billeder/photo8.png", "Suppleant", "Frank Sørensen", "Mail: franks@post9.tele.dk"],    
    ["billeder/photo9.png", "Suppleant -og webmaster", "Willy Christiansen", "Mail: wilchris@mail.dk"],     
    ["billeder/photo10.png", "Revisor", "Alfred Olsen", "Mail: a-go@live.dk"],  
    ["billeder/photo11.png", "Bilagskontrollant", "Lis Laugesen", "mail ukendt"],    
    ["billeder/photo12.png", "Bilagskontrollant suppleant", "Jakob Kildebrønde", "Mail: kildeberg@outlook.com"] 
   ];
   let select_element = document.getElementById("mainkontakt");
   for(let i = 0; i < cubes.length; i++) {
        
       let cube = cubes[i];
       select_element.innerHTML +="<div class='photo' > <img class='billeder'  src='"+ cubes[i][0]+"' ></a><p>"+ cubes[i][1]+"</p>  "+ cubes[i][2]+" "+ cubes[i][3]+" </div>";
   }

