var dias = ["lunes","martes"];
        dias.push("miercoles");
        console.log(dias);
        dias.pop();
        console.log(dias);
        dias.unshift("domingo");
        console.log(dias);
        dias.shift();
        console.log(dias);
        
        dias.push("miercoles");
        dias.push("jueves");

        console.log(dias);
        dias.splice(1,0,"nuevo","otro");
        console.log(dias);
        console.log(dias.slice(1,3));

        dias.forEach(
            (x,i) => // forEach retorna valor e indice
                console.log(x,i)   
        )