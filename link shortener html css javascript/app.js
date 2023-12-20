let button = document.getElementById("btn");

button.addEventListener('click', short);

async function short(){
    let url = document.getElementById("longurl").value;
    // let shorturl = document.getElementById("shorturl");

    let headers = {
        "content-Type": "application/json",
        "apikey": ""  //enter your api key that are given once u signed in rebrandedly
    }

    let linkRequest = {
        destination:url,
        domain: "rebrand.ly"
    }
    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("shorturl");
            inputUrl.value = json.shortUrl;
        });

}

let x = document.getElementById("shorturl");
let butn = document.getElementById("copubtn");

butn.onclick = () =>{
    x.select();
    alert(`URL copied: ${x.value}`);
    window.navigator.clipboard.writeText(x.value);
}



