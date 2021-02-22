window.addEventListener("load",()=>{
    const input = document.querySelector("#input");
    const btnInput = document.querySelector("#btnInput");
    const LanguageGenerator = document.querySelector("#LanguageGenerator");
    const selectSourceOutput = document.querySelector("#selectSourceOutput");
    const selectSourceInput = document.querySelector("#selectSourceInput");
    function getData(item) {
        return item.translation
    }
    btnInput.addEventListener('click',event => {
        console.log(selectSourceOutput.value+selectSourceInput.value);
        fetch(`https://api.mymemory.translated.net/get?q=${input.value}&langpair=${selectSourceInput.value}|${selectSourceOutput.value}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            const output = data.matches;
            LanguageGenerator.innerHTML = output.map(getData);
        })
    })
})