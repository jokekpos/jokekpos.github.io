const persona='{"nombre":"Wanda","apellido":"Morgan","edad":"42","email":"wanda.morgan@example.com","direccion":"Los Ceibos 1242","nacimiento":"5/7/1950","telefono":"(342)5416135"}';
const obj=JSON.parse(persona);
console.log(obj)
document.getElementById("nombre").innerHTML= obj.nombre+" "+obj.apellido;
document.getElementById("direccion").innerHTML= "Dirección: "+obj.direccion;
document.getElementById("email").innerHTML= "E-mail: "+obj.email;
document.getElementById("telefono").innerHTML= "Teléfono: "+obj.telefono;


document.getElementById("boton").addEventListener("click",function(){
    let lugar1= "Estudio Jurídico Ríos y Asociados (2000-2012)"
    let direccion1= "Colón N° 440, E3100 Paraná, Entre Ríos"
    let telefono1= "0343 15-516-9758"
    let lugar2= "Estudio Jurídico Gabioud (2013-2022)"
    let direccion2= "Gral. Justo José de Urquiza Nº 1280 Dpto. 16, E3100 Paraná, Entre Ríos"
    let telefono2= "0343 465-0520"

document.getElementById("datosreferencia").innerHTML= lugar1+"<br>"+"Dirección: "+direccion1+"<br>"+"Teléfono: "+telefono1;
document.getElementById("datosreferencia2").innerHTML= lugar2+"<br>"+"Dirección: "+direccion2+"<br>"+"Teléfono: "+telefono2;

document.getElementById("referencias").style.display="block";
})