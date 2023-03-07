const obtn = document.querySelector(".contenido"); 

/* function traerAPI(){
    fetch('https://www.garantiascomunitarias.com/wp-json/wp/v2/posts')
    .then(data => data.json())
    .then(data => {
        obtn.innerHTML=`<img src="${data.content}" width="200px" class="img-fluid rounded-circle" alt="imagen de perfil">
        <p>
        imagen: ${data.content}
       
        </p>`
        console.log(data)
    }) 
    

    
} */

fetch("https://www.garantiascomunitarias.com/wp-json/wp/v2/posts")
.then(res=>res.json())
.then(content=>{console.log(content.rendered)})