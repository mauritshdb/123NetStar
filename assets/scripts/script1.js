
function changeSubBtn() {
    let trgt = document.getElementById("subsBtn");
    if(trgt.innerHTML == "Subscribe"){
        trgt.innerHTML = "Subscribed"
    } else {
        trgt.innerHTML = "Subscribe"
    }
}

function tst(text) {
    alert('You clicked '+text);
}