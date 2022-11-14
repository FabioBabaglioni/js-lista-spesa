
// data una lista della spesa nota stampa i prodotti 

let listaSpesa = ["Patate", "Carote", "Latte", "spinaci", "bagno schiuma"];

// ciclo for per stampare i prodotti singoli
// for(let i = 0; i < listaSpesa.length; i++){

//     console.log(listaSpesa[i]);
// };

// ciclo while per stampare i prodotti singoli

let i = 0

while(i < listaSpesa.length){
    const list = document.createElement("li");
    const prodotti = document.createTextNode(`${listaSpesa[i]}`);
    list.appendChild(prodotti);
    document.getElementById("lista").appendChild(list);

    i++
}