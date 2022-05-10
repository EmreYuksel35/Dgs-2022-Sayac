function sayac(){
    var tarih = new Date();
    var finish = new Date(2022,06,03,10,15,0);
    var fark , month , day , hours , minutes;
    fark = finish - tarih ;
    fark = fark/1000/60/60/24/30;
    month = Number((fark).toFixed(1));
    day = Number((fark * 30).toFixed(0)) ;
    hours = day * 24 ;
    minutes = hours * 60; 
    document.getElementById("sure").innerText = "Month : " + month + " Day : "+ day + " Hours : " + hours + " Minutes : "+ minutes; 
}