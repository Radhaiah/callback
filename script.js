let countdown = document.querySelector("#countdown");
var time=10;
countdown.innerHTML=time--;
setTimeout(()=>{
  countdown.innerHTML=time--;
  setTimeout(()=>{
    countdown.innerHTML=time--;
    setTimeout(()=>{
      countdown.innerHTML=time--;
      setTimeout(()=>{
        countdown.innerHTML=time--;
        setTimeout(()=>{
          countdown.innerHTML=time--;
          setTimeout(()=>{
            countdown.innerHTML=time--;
            setTimeout(()=>{
              countdown.innerHTML=time--;
              setTimeout(()=>{
                countdown.innerHTML=time--;
                setTimeout(()=>{
                  countdown.innerHTML=time--;
                  setTimeout(()=>{
                      countdown.innerHTML="happy independence day";
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000);
        },1000);
      },1000);
    },1000);
  },1000);
},1000);
