const par = document.querySelector('#gusi-lebedi')
const newElement=document.createElement('div')
const url = "../gusi-lebedi.json";
const req = new XMLHttpRequest();
req.open("GET", url);
req.responseType="json";
req.onload = () => {
    console.log(req.response);
    let arrMenu = req.response

    for(let i of arrMenu)
    {
        par.innerHTML += `
        <div class="card">
        <div class="img" style="background-image: url(../${i.image})"></div>
        <div class="block">
        <h1>${i.name}</h1>
        <p>Состав: ${i.description}</p>
        <p>Цена: ${i.price}</p>
        </div>
        </div>
        `
    }
}
req.send();