var pianoKey = document.getElementById("piano");
// mouse near with key or on the key

pianoKey.addEventListener("mousedown", cursorDown);
pianoKey.addEventListener("mouseup", cursorUp);


function cursorDown(event) {
    pianoKey.addEventListener("mouseover", cursorOver);
    pianoKey.addEventListener("mouseout", cursorOut);

    event.target.className = classHandler(event.target.className)

    event.preventDefault()
}

function cursorUp(event) {
    pianoKey.removeEventListener("mouseover", cursorOver)
    pianoKey.removeEventListener("mouseout", cursorOut)

    event.target.className = classHandler(event.target.className)

    event.preventDefault()
}

function cursorOver(event) {
    event.target.click()
    event.target.className = classHandler(event.target.className)
    event.preventDefault()
}

function cursorOut(event) {
    event.target.className = classHandler(event.target.className)
    event.preventDefault()
}


const classHandler = (name) => {
    let returnName;
    if (name.includes("active")) {
        name === "piano-key active"
            ? returnName = "piano-key"
            : name === "piano-key sharp active-black"
                ? returnName = "piano-key sharp"
                : returnName = name
    } else {
        name === "piano-key"
            ? returnName = "piano-key active"
            : name === "piano-key sharp"
                ? returnName = "piano-key sharp active-black"
                : returnName = name
    }
    return returnName
}

// keyup keydown
// press on the клавишу на диезы

pianoKey.addEventListener("click", SoundGo);

function SoundGo(event) {
    event.preventDefault()
    const letter = event.target.dataset.letter

    const audioHandler = (audi, isWhite) => {
        var audio = new Audio();
        audio.src = audi;
        audio.autoplay = true;
        event.target.className = isWhite ? "piano-key" : "piano-key sharp";
    }

    switch (letter) {
        case "R":
            audioHandler("assets/audio/cdiez.mp3")
            break
        case "T":
            audioHandler("assets/audio/ddiez.mp3")
            break
        case "U":
            audioHandler("assets/audio/fdiez.mp3")
            break
        case "I":
            audioHandler("assets/audio/gdiez.mp3")
            break
        case "O":
            audioHandler("assets/audio/adiez.mp3")
            break
        case "D":
            audioHandler("assets/audio/c.mp3", true)
            break
        case "F":
            audioHandler('assets/audio/d.mp3', true)
            break
        case "G":
            audioHandler('assets/audio/e.mp3', true)
            break
        case "H":
            audioHandler('assets/audio/f.mp3', true)
            break
        case "J":
            audioHandler('assets/audio/g.mp3', true)
            break
        case "K":
            audioHandler('assets/audio/a.mp3', true)
            break
        case "L":
            audioHandler('assets/audio/b.mp3', true)
            break
        default:
            break
    }
}


// press on the button

var buttonNotes = document.getElementById("notes");
var buttonLetters = document.getElementById("letters");


buttonNotes.addEventListener("click", personalChooseN);
buttonLetters.addEventListener("click", personalChooseL);


function personalChooseN() {
    buttonNotes.className = "btn-active";
    buttonLetters.className = "btn btn-lettes";


}

function personalChooseL(event) {
    buttonLetters.className ="btn-active";
    buttonNotes.className = "btn btn-notes";
    // pianoKey.className=".piano-key.letter-active::before ,.piano-key.letter-active::after ";
    
}



//fullscreen



document.addEventListener ("click", fullscreen);

function fullscreen (event){
if (!event.target.hasAttribute ("data-toggle-fullscreen")) {return};
if (document.fullscreenElement) {
document.exitFullscreen ();}
else {
    document.documentElement.requestFullscreen ();
}
false};


 













