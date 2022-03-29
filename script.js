const obtn = document.querySelector(".contenido"); 

function traerAPI(){
    fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data => {
        obtn.innerHTML=`<img src="${data.results["0"].picture.large}" width="200px" class="img-fluid rounded-circle" alt="imagen de perfil">
        <p>
        Email:${data.results["0"].email}<br>
        Nombre: ${data.results["0"].name.first}<br>
        Apellido: ${data.results["0"].name.last}<br>
        Cell:${data.results["0"].cell}
        </p>`
        console.log(data)
    }) 
    

    
}

