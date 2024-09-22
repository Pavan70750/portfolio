function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// for Typewriter effect

const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "DESIGNER"
]

let speed = 100;

const textElements = document.querySelector(".section_bg_content_contianer")

let textIndex = 0;
let charcterIndex = 0;

function section_bg_content_contianer() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(section_bg_content_contianer, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(section_bg_content_contianer,500)
    }
}