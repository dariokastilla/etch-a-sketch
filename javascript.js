const container = document.getElementById("container");
const boton = document.getElementById("boton");
const btnReload = document.getElementById("btnReload");


for(let i = 0; i < 16 * 16; i++){ //meto el for dentro
    const div = document.createElement("div");
    div.classList.add("cuadro");
    container.appendChild(div);
    

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    })
}





boton.addEventListener("click", () => {
    let valor = prompt("Cuantos cuadrados quieres por lado? Máx. 100!");
    let size = parseInt(valor);

    if(size < 16 || size > 100 || isNaN(size)){
        alert("Por favor, introduce un número entre 16 y 100");
        return;
    }

    container.innerHTML = "";

    for(let i = 0; i < size * size; i++){
        //meto el for dentro
        const div = document.createElement("div");
        div.classList.add("cuadro");
        div.style.width = `${480 / size}px`;
        div.style.height = `${480 / size}px`;
        container.appendChild(div);
        
    
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
    }
    
})


btnReload.addEventListener("click", () => {
    container.innerHTML = "";
    for(let i = 0; i < 16 * 16; i++){ //meto el for dentro
        const div = document.createElement("div");
        div.classList.add("cuadro");
        container.appendChild(div);
        
    
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
    }

})



