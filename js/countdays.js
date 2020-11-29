document.addEventListener('DOMContentLoaded', function() {
    // console.log("js running");
    var days = document.querySelector('.days span');
    var hour = document.querySelector('.hour');
    var min = document.querySelector('.min');
    var second = document.querySelector('.sec');
    
    var startDate = new Date(2020, 11, 20);

    console.log(startDate);
    console.log(days);
    
    days.innerText = Math.floor((new Date - startDate)/86400000);
    countTime();
    
    function countTime() {
        let today = new Date();
        let ms = (today - startDate) % 86400000;
        hour.innerText = Math.floor(ms / 3600000);
        min.innerText = Math.floor(ms % 3600000 / 60000);
        second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
    }
    
    setInterval(countTime, 1000);
    
}, false);