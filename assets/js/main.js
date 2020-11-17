let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
// creation de constante pour les boutons
const bold = document.getElementById("bold");

const color = document.getElementById("color");

const enlarge =document.getElementById("enlarge");
// creation de fonction fléché  ---= (parametre)=> argument
bold.onclick = () => p1.style.fontWeight ='bold';

color.onclick = () => p2.style.color ='orange';

enlarge.onclick = () => p2.style.fontSize = "30px";


