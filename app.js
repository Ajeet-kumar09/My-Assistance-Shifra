let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

const video = document.querySelector("#myVideo");
video.muted = true;


function speak(text){
    let text_speech = new SpeechSynthesisUtterance(text);
    text_speech.rate=0.9;
    text_speech.pitch=1;
    text_speech.volume=1;
    text_speech.lang="hi-GB";
    window.speechSynthesis.speak(text_speech);
}

function wishMe(){
    let day = new Date();
    let hours = day.getHours();
    if(hours >= 0 && hours<=11){
        speak("Good Morning Sir");
    }
    else if(hours >=12 && hours <=14){
        speak("Good afternoon sir");
    }
    else if(hours >14 && hours <=18){
        speak("Good Evening Sir");
    }
    else if(hours >18 && hours <=24){
        speak("Good Night Sir ");
        console.log("Ajeet kumar");
        
    }
}

window.addEventListener('load',()=>{
    wishMe();
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recoginition = new speechRecognition;
recoginition.onresult=(event)=>{
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase());
};




btn.addEventListener("click",()=>{
    recoginition.start();
    video.play();
    
    btn.style.display="none";
    video.style.display="block";
    
})

function takeCommand(message){
    btn.style.display="flex";
    video.style.display="none";
    if(message.includes("hello") || message.includes("hii")){
        speak("     Hello! Yes,I am here, who can I help you today ");
    }
    else if(message.includes(" kya ham hindi mein baat kar sakte hai")){
        speak("  Jii bilkul mein hindi mee baat kar saktii huu aapko kiss bare me baat karni hai");
    }    
    else if(message.includes("tum kaun ho")){
        speak(" Main Shifra hoon jisko Ajeet banaye hai jo aapki madad ke lihe bani hoon");
    }    
    else if(message.includes("tum kya kya kar sakti ho")){
        speak("   Aaapke sawal ka jawab dena");
        speak("   Padhai me help karna");
        speak("   General knowledge aur daily life ke doubts clear karna");
        speak("  Aap mujhe apna digital dost samajh sakte ho Aab batao aaj kis baare me baat karein");
    }
    else if(message.includes("main kaun hun")){
        speak(" Aap  ek acche aur seekhne wale insaan ho");
    }
    else if(message.includes("open youtube")){
        speak("  Opening youtube");
        window.open("https://www.youtube.com/");
    }
    else if(message.includes("open calculator ")){
        speak("  opening calculator");
        window.open("Calculator://");
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        speak(date);
    }
    else{
        let finaltext="this is i found on internet regarding"+message.replace("shipra","") || message.replace("shifra","");
        speak(finaltext);
        window.open(`https://www.bing.com/search?pglt=419&q=${message}`);
    }
};




