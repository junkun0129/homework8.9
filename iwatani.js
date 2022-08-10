let x = 0;
let y = 0;
let counter = 0;
const iwatani = document.getElementById("iwatani");
window.addEventListener("keydown", move);

function move(event){

    

    switch(event.key){
        case "s":
            counter+= 2;
            console.log(counter);
            y+=10;
            iwatani.style.top = y+"px";
            iwatani.style.width = y+"px";
            iwatani.style.height = y+"px";
            
            if(counter < 6){
                iwatani.src = "char/down1.png";
            }else if(counter < 12){
                iwatani.src = "char/down2.png";
            }
            if(counter >12){
                counter = 0;
            }
            

        break;
        case "w":
            
            counter+=2;
            y-=10;
            iwatani.style.top = y+"px";
            iwatani.style.width = y+"px";
            iwatani.style.height = y+"px";
            
            if(counter < 6){
                iwatani.src = "char/up1.png";
            }else if(counter <12){
                iwatani.src = "char/up2.png";
            }
            if(counter >12){
                counter = 0;
            }
        break;
        case "a":
            counter+=2;
            x-=10;
            iwatani.style.left = x+"px";
            if(counter < 6){
                iwatani.src = "char/left1.png";
            }else if(counter <12){
                iwatani.src = "char/left2.png";
            }
            if(counter >12){
                counter = 0;
            }
        break;
        case "d":
            counter+=2;
            x+=10;
            iwatani.style.left = x+"px";
            if(counter < 6){
                iwatani.src = "char/right1.png";
            }else if(counter <12){
                iwatani.src = "char/right2.png";
            }
            if(counter >12){
                counter = 0;
            }
        break;
        default:
            break;
        
    }
}



    

document.getElementById("bell").onclick = function(){
    location.href = "https://www.youtube.com/watch?v=SW3GGXbLDv4&t=1s"
}
// const iwatani = document.getElementById("iwatani");

// document.getElementById("button1").onclick = function(){
//     console.log(";aslkd");
// }
