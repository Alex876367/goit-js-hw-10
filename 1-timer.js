import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as r}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".date-input"),t=document.querySelector(".start-btn"),m=document.querySelectorAll(".value"),h=document.querySelector(".days"),f=document.querySelector(".hours"),b=document.querySelector(".minutes"),p=document.querySelector(".seconds");let n;l(".date-input",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]-new Date<=0?(r.show({message:"Please choose a date in the future",messageColor:"white",messageSize:"30",backgroundColor:"red",theme:"light"}),s.classList.add("error"),t.setAttribute("disabled",""),t.classList.add("disabled")):(t.removeAttribute("disabled",""),t.classList.remove("disabled"),s.classList.remove("error"),n=e[0])}});const a={interval:null,start(){t.setAttribute("disabled",""),t.classList.add("disabled"),s.setAttribute("disabled",""),this.interval=setInterval(()=>{const e=n-Date.now();if(e<=0){a.stop(),s.removeAttribute("disabled",""),s.classList.remove("error"),r.show({message:"Time is out!🎉",messageColor:"white",messageSize:"30",backgroundColor:"green",theme:"light"});return}const o=this.convertMs(e);h.textContent=this.padFunc(Math.floor(o.days)),f.textContent=this.padFunc(Math.floor(o.hours)),b.textContent=this.padFunc(Math.floor(o.minutes)),p.textContent=this.padFunc(Math.floor(o.seconds))},1e3)},convertMs(e){const i=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:c,seconds:d}},padFunc(e){return String(e).padStart(2,0)},stop(){clearInterval(this.interval),m.forEach(e=>{e.value="00"})}};t.addEventListener("click",()=>{a.start()});
//# sourceMappingURL=1-timer.js.map
