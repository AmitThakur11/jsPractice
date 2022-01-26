const countTiles = document.querySelectorAll(".timeTiles span");
const inputDate = document.querySelector('.inputDate');
 
let futureDate = null; 

inputDate.addEventListener('change',function(e){
    futureDate = new Date(e.target.value)
    console.log(futureDate)
})




function countDownFn() {
  let futureDate = new Date(2022, 0, 25, 21, 45, 0);

  let futureTime = futureDate.getTime();
  let currentDate = new Date();
  let currentTime = currentDate.getTime();
  let remainingTime = futureTime - currentTime;
  if (remainingTime < 0) {
    clearInterval(countdown);
  }

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHr = 60 * 60 * 1000;
  let oneMin = 60 * 1000;
  let oneSec = 1000;
  
  let dayRemains = remainingTime / oneDay;
  dayRemains = Math.floor(dayRemains);
  let hrsRemain = Math.floor((remainingTime % oneDay) / oneHr);
  let minsRemain = Math.floor((remainingTime % oneHr) / oneMin);
  let secRemain = Math.floor((remainingTime % oneMin) / oneSec);

  const counter = [dayRemains,hrsRemain,minsRemain,secRemain]

  countTiles.forEach(function(tile,index){

    tile.textContent = counter[index]

    
})



}


    let countdown = setInterval(() => {
        countDownFn();
      }, 1000);
      


    
