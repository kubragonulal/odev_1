let isim=prompt("İsminizi girin:");
document.getElementById("myName").innerText=isim;
function showTime(){
    let zaman=new Date();

    let saat=zaman.getHours();
    let dakika=zaman.getMinutes();
    let saniye=zaman.getSeconds();

    saat= saat < "10" ? "0" + saat : saat;
    dakika= dakika < "10" ? "0" + dakika : dakika;
    saniye= saniye < "10" ? "0" + saniye : saniye;

    document.getElementById("myClock").innerHTML = saat + ":" + dakika + ":" + saniye;
}
setInterval(showTime, 1000);