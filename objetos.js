var celular = {
    marca : "samsung",
    modelo : "Note",
    encender: () => {
        console.log("Encendiendo...");
        return "Hola";
    }
}

console.log(celular.marca);
console.log(celular["modelo"]);
console.log(celular.encender());

for (const key in celular){
    console.log(key,celular[key]);
}

