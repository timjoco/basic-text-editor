function updateText(){
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}

function makeBold(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

function makeUnderline(elem){
    elem.classList.toggle('active');
    let text = document.getElementById('text-output');
    if(text.classList.contains('underline')) {
      text.classList.remove('underline');
    } else {
      text.classList.add('underline');
    }

}

// Used to align text in the Formatted Text box. Uses a For Loop to select which text align type is currently active
function alignText(elem, alignType){
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName('align');
  for(let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].classList.remove('active');
  }
  elem.classList.add('active');
}