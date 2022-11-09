const count = document.getElementById("visits");
incrementvisitscount();

function incrementvisitscount() {
    let visits;
    if(!localStorage.getItem("visits")) localStorage.setItem("visits",1);
    else{

    visits=+localStorage.getItem("visits");
    const incremented=visits+1

    localStorage.setItem("visits",incremented);
}

    count.innerText=localStorage.getItem("visits");
    
}