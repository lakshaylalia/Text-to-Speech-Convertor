
function speak(text) {
    const speech = new SpeechSynthesisUtterance(`${text}`);
    const voices = speechSynthesis.getVoices();
    speech.voice = voices[0]; // Choose a specific voice
    speechSynthesis.speak(speech);
  }

  let btn=document.querySelector("button")
  btn.addEventListener("click",()=>{
    let text=document.getElementById("text").value
    console.log(text);
    speak(text)
  });