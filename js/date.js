


window.addEventListener("load",()=>{
    let epoc = document.querySelector("#current_epoch");
    const dateButton = document.querySelector(".dateButton");
    const epocHuman = document.querySelector("#epocHuman");
    const inputEpoc = document.querySelector("#inputEpoc");
    const year = document.querySelector("#year");
    const month = document.querySelector("#month");
    const day = document.querySelector("#day");
    const hour = document.querySelector("#hour");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");
    const humanButton = document.querySelector("#humanButton");   
    const humanEpoc = document.querySelector("#humanEpoc"); 
    setInterval(() => {
        const currentDate = new Date();
        epoc.innerHTML = `The current Epoc is ${Math.floor(currentDate.getTime()/1000)}`; 
    }, 1000);
    dateButton.addEventListener('click',event => {
           const timeStamp = parseFloat(inputEpoc.value);
           epocHuman.innerHTML =   new Date(timeStamp*1000);
    })
    humanButton.addEventListener('click',event=>{
        const yearVal = parseFloat(year.value);
        const monthVal = parseFloat(month.value) - 1;
        const dayVal = parseFloat(day.value);
        const hourVal = parseFloat(hour.value);
        const minuteVal = parseFloat(minute.value);
        const secondVal = parseFloat(second.value);
        const humanDate = new Date(yearVal, monthVal, dayVal, hourVal, minuteVal, secondVal);
        humanEpoc.innerHTML  = `The converted time is ${humanDate / 1000}`;
    })
    
})
