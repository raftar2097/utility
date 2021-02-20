window.addEventListener("load",()=>{
    const input = document.querySelector("#input");
    const encode = document.querySelector("#btnInput");
    const decode = document.querySelector("#btnOutput");
    const output = document.querySelector("#output");
    input.addEventListener('change',event => {
        input.value = event.target.value;
    })
    encode.addEventListener('click', event => {
        console.log("clicked");
        output.value = encodeURIComponent(input.value);
    })
    decode.addEventListener('click', event => {
        output.value = decodeURIComponent(input.value);
    })
})