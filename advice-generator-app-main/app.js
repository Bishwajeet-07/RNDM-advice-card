const advice = document.querySelector(".advice-data")
const reload = document.querySelector(".five-icon")
const advNumber = document.querySelector(".adv-number")


let adviceData = fetch("https://api.adviceslip.com/advice")
.then((res)=>{
    return res.json();
}).then((data)=>{
    // console.log(data.slip);
    let zero = advice.innerText = `\" ${data.slip.advice}\ "`
    advNumber.innerText = `# ${data.slip.id}`
})

reload.addEventListener("click",(e)=>{
    // e.preventDefault();
    location.reload();
    // console.log("object");
})