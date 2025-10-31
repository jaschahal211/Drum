let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", function(evt) {
        console.log(evt.target);
        let buttonInnerHTML = evt.target.innerHTML;
        switch(buttonInnerHTML){
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;  
            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;  
            case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default: console.log(buttonInnerHTML);
        }
        animate(buttonInnerHTML)
    });
    
}
for (let button of buttons){
    document.addEventListener("keypress",function(evt){
        console.log(evt);
         console.log(evt.key);
         let key=evt.key;
         switch(key){
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3"); 
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;  
            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default: console.log(key);
         }      
          animate(key);
    })
};
const animate=(element)=>{
    let activebutton=document.querySelector("."+element);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);

};
