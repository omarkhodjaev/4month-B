'use strict'
const containerEl = document.querySelector(".container");

(() => {
        fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>render(json))
    }
)()

    function render(data){
    data.map(({image,price,title,id}) => {
        const divEl = document.createElement("div");
        divEl.className = "user-card";
        divEl.innerHTML = `
        <i data-user-id="${id}" class="fas fa-trash"></i>
        <img src="${image}" width="200px" height="200px" /> 
        <h5>Price: ${price}</h5>
        <h5>Title: ${title}</h5>
        `
        containerEl.appendChild(divEl)
    })
  }

    containerEl.addEventListener('click', (e) => {
        if(e.target.matches("i")){
            const userId = e.target.dataset.userId 
            fetch(`https://fakestoreapi.com/products/${userId}`,
            {
                method: "DELETE"
            }
            )
            .then(response => {
                if(response.status == 204){
                    alert("salom");
                }
            });
        }
    })
