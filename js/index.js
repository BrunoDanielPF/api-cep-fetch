var cep = document.querySelector("#cep")

const resultformat = (result) => {
    for(const campos in result){
        if(document.querySelector("#" + campos)){
            document.querySelector("#" + campos).value = result[campos]
        }
    }
}
cep.addEventListener("blur",(e) => { 
    let formatcep = cep.value.replace("-","")
    const configure = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    
    fetch(`https://viacep.com.br/ws/${formatcep}/json/`, configure)
    .then(response =>{ response.json().then(data => resultformat(data)) })
    .catch(e => console.log(e.message))
})