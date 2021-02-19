
window.addEventListener("load",()=>{
    const red = document.querySelector("#red");
    const green = document.querySelector("#green");
    const blue = document.querySelector("#blue");
    const encode = document.querySelector("#btnInput");
    const output = document.querySelector("#output");
    const outputdiv = document.querySelector("#outputdiv");
    red.addEventListener('change',event => {
        red.value = event.target.value;
    })
    green.addEventListener('change',event => {
        green.value = event.target.value;
    })
    blue.addEventListener('change',event => {
        blue.value = event.target.value;
    })
    encode.addEventListener('click', event => {
        output.value =  rgbToHex(red.value,green.value,blue.value);
        console.log(output.value)
        outputdiv.style.visibility = "visible";

    })
})

function decToHexa(val){
    return changer(val,10,16);
}

function changer(num,from,to){
    return parseInt(num,from).toString(to);
}

function rgbToHex(red,green,blue){
    let r = decToHexa(red);
    let g = decToHexa(green);
    let b = decToHexa(blue);
    r = r.length<2?'0'+r:r;
    g = g.length<2?'0'+g:g;
    b = b.length<2?'0'+b:b;
    return "#"+r+g+b;
}



