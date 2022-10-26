const randColor = () =>{
    let color = "#";
    for(let i =0; i <6 ; i++){
        color += Math.ceil(Math.random()*9);
    }
    return color;
}

const changeHeading = () => {
    clearInterval(intId);
    const heading = document.getElementById("heading");
    heading.innerHTML = "<marquee>Contact</marquee>"
    heading.style.color = randColor();
}

let intId = "";

const timeInterval = () => {
    intId = setInterval(()=>{
        const date = new Date();
        let hours = date.getHours();
        let AF = "AM";
        if (hours > 12){
            hours -= 12;
            AF = "PM";
        }
        heading.innerHTML = hours +":"+ date.getMinutes()+":" + date.getSeconds()+" "+AF;
    },100)
}

const startClock = () =>{
    const heading = document.getElementById("heading");
    timeInterval();
}

const getLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
        alert(`latitude ${position.coords.latitude} longitude ${position.coords.longitude}` )
    },console.error);
}

const timeHeading = () => {
    clearInterval(intId);
    let date = document.getElementById("date").value;
    date = date.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, '$2-$3-$1');
    document.getElementById("heading").innerHTML = date;
}