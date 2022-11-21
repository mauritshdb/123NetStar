function submitss() {
    var text = document.getElementById("exampleFormControlTextarea1").value;
    var komen = document.createElement("h5");
    komen.innerHTML = "- "+text;
    var parent = document.getElementById("zxcv");
    parent.appendChild(komen);
    document.getElementById("exampleFormControlTextarea1").value = "";
}

function tst(text) {
  alert('You clicked '+text);
}

var gambar = document.createElement('img');
gambar.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjknTYsaZDa0YHDQYvD0buEOoANvtwYB1F0QU9FKXt-wVYAoKi8iHYtsDnfPBOgCbyxh0BusdU3Rz07AYgFDzhC7zqQKhWeRSnPVTN0bGIt_HMUSr5e1n7m2YCWw9Bk_hKHJvVfieF8JWxGb7cfr6MqwqzGXkuI2uknHOm2hadBLnj6-InfjjGKW_Pa/s720/banner.gif';
gambar.style.width = "90%"
gambar.style.height = "128px"

var pparent = document.getElementById("divAd");
pparent.append(gambar)

function delAd(){
  if(pparent.lastElementChild !== null) {
    pparent.removeChild(gambar);
  } else {
    pparent.appendChild(gambar);
  }
}
