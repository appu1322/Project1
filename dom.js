

let selectColor='';
init();
makeColor();

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition= new SpeechRecognition();

function init(){
let dots=document.querySelector("#dot");
for (let i = 0; i < dots.children.length; i++) {
    const cir=dots.children[i];
    cir.addEventListener("click", changeColor);
}
}

function makeColor(){
    let pallete=document.querySelector("#palette");
    let inputText=document.querySelector("#input");
    let mic=document.querySelector(".color color1");
    for (let i = 0; i < pallete.children.length; i++) {
        const Box=pallete.children[i];
        
        Box.addEventListener("click",function(e){
            inputText.innerText='listening..';
            recognition.start();
            recognition.addEventListener('result', e => {
                selectColor = e.results[0][0].transcript.replace(' ','');
                Box.style.backgroundColor=selectColor;
                inputText.textContent=selectColor;
            });
            recognition.addEventListener("end", e => {
                recognition.stop();
    
        });
    });
    }
}

function changeColor(e){

    e.target.style.backgroundColor= selectColor ;
}



   
    


