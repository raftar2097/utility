
window.addEventListener("load",()=>{
    const input = document.querySelector("#input");
    const encode = document.querySelector("#btnInput");
    const output = document.querySelector("#output");
    const outputdiv = document.querySelector("#outputdiv");
    input.addEventListener('change',event => {
        input.value = event.target.value;
    })
    encode.addEventListener('click', event => {
        console.log(input.value);
        output.value =  CryptoJS.SHA256(input.value);
        console.log(output.value)
        outputdiv.style.visibility = "visible";

    })
})
