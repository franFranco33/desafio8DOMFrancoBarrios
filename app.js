class Cotizacion {
    constructor(id, nombre, precio, supply) {    
        this.id = id
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.supply = supply;
    }
}
const criptomoneda = []
criptomoneda.push(new Cotizacion('1', 'Bitcoin', '64000', '19000000'));
criptomoneda.push(new Cotizacion('2', 'Moc', '0.13', '1400000000'));
criptomoneda.push(new Cotizacion('3', 'Ether', '4000', '100000000'));
criptomoneda.push(new Cotizacion('4', 'Sol', '180', '400000000'));
criptomoneda.push(new Cotizacion('5', 'Sov', '25', '4200000'));
console.log(Cotizacion)
console.log(criptomoneda)

let seleccion = prompt("¡Too The Moon, su cotizador amigo! Conozca el precio en pesos argentinos de las siguientes criptomonedas: seleccione el número de la criptomeneda... \n 1 - Bitcoin \n 2 - Moc \n 3 - Ether \n 4 - Sol \n 5 - Sov");
for (let i = 0; i < criptomoneda.length; i++) {
    const cripto = criptomoneda [i];
    if (seleccion == cripto.id){
        let precio = cripto.precio * 200
        alert("$" + precio)
    } 
}

console.dir(document)
console.dir(document.head)
console.dir(document.body)

// Crear nodo de tipo Elemento, etiqueta div
let parrafo = document.createElement("div");
// Insertar HTML interno
parrafo.innerHTML = "<h3>Téngase presente: bitcoin es reserva de valor</h3>"; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo);



















/*
switch (seleccion) {
    case "1":
        alert("$" + 64000*200);
        break;
    case "2":
        alert("$" + 0.13*200);
        break;
    case "3":
        alert("$" + 4000*200);
        break;
    case "4":
        alert("$" + 180*200);
        break;
    case "5":
        alert("$" + 25*200);
        break;              
    default:
        break;
}
*/

/*function saludo() {
    alert("Desde Too the Moon le deseamos éxitos en sus finanzas. Un cordial saludo. ");
}
*/