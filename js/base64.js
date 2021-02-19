window.addEventListener("load",()=>{
    const input = document.querySelector("#input");
    const encode = document.querySelector("#btnInput");
    const decode = document.querySelector("#btnOutput");
    const output = document.querySelector("#output");
    const outputdiv = document.querySelector("#outputdiv");
    input.addEventListener('change',event => {
        input.value = event.target.value;
    })
    encode.addEventListener('click', event => {
        console.log(input.value);
        output.value =  btoa(input.value);
        console.log(output.value)
        outputdiv.style.visibility = "visible";

    })
    decode.addEventListener('click', event => {
        output.value = atob(input.value);
        outputdiv.style.visibility="visible"
    })
})
