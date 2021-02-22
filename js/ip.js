window.addEventListener("load",()=>{
   
    const btnInput = document.querySelector("#btnInput");
    const ipGenerator = document.querySelector("#ipGenerator");

    btnInput.addEventListener('click',event => {
        console.log("cliecked");
        fetch("https://api.ipify.org/?format=json")
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            ipGenerator.innerHTML = `The current IP ADDRESS is ${data.ip}`;
        })
    })
})