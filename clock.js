if (new Date().getHours()<12){
    document.getElementById("clock").textContent=`Good Morning PRIME  `;
}else if(new Date().getHours()<18){
        document.getElementById("clock").textContent=`Good Afternoon PRIME`;

}else{
            document.getElementById("clock").textContent=`Good Evening PRIME`;

};
if (new Date().getHours()>=22){
                document.getElementById("clock").textContent=`Good Nigth PRIME, have a beautiful night rest`;

}


function updateClock(){
    const now = new Date()
    var hours= now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2,"0")
    
    const ampm = hours >=12 ? "PM" : "AM"

    hours = hours % 12 || 12

    const timestring =  hours +":" + minutes  +":" + seconds
    // console.log (timestring)
    document.getElementById("time").textContent=`The time is  ${timestring}`


}
setInterval(updateClock, 1000)
updateClock()
new Date().getHours()