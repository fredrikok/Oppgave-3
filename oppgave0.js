
//oppgave 1 lage en knapp som fjerner skrift

//Varibler for button og <p>
const noKnapp = document.getElementById("remove-btn");
const noTekst = document.getElementById("remove");

//eventlistener for å kalle på trykke funksjonen
noKnapp.addEventListener("click", fjernaTekst);

//Funksjonen som fjerner teksten 
function fjernaTekst(){
    noTekst.remove();
}





//oppgave 2 Endre skriften 

//samme som forrige oppgave bare med nye navn
const newKnapp = document.getElementById("change-btn")
//samme gamla vanliga
newKnapp.addEventListener("click", nyTekst);

//Funksjon hvor vi kaller idn til skriften og endrer den.
function nyTekst(){
    document.getElementById("change").innerHTML = "Jeg liker schnitzel, det er digg. rawr xd";
    document.getElementById("change").style.color = "#ff9100";

}



//oppgave 3 input til paragraf


const inputText = document.getElementById('input-text');
const input = document.getElementById('input');

const removeDefaultText = () => {
  inputText.innerHTML = null;
};

removeDefaultText();

const updateUi = (event) => {
  let letter = event.key;
  inputText.innerHTML += letter;
};

input.addEventListener('keyup', updateUi);



//oppgave 4

const minListe = ['en', 'to', 'tre'];

const ul = document.getElementById('ul');
const writeBtn = document.getElementById('write-list');

const createLi = () => {
  const liElements = minListe.map((listElement) => `<li>${listElement}</li>`);
  ul.innerHTML = liElements.join('');

};

writeBtn.addEventListener('click', createLi);




// Oppgave 5

const text = document.getElementById('text');
const createBtn = document.getElementById('create');
const select = document.getElementById('select');
const htmlPlaceHolder = document.getElementById('placeholder');

const createElement = () => {
  const htmlEl = select.value;
  const message = text.value;
  htmlPlaceHolder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
};

createBtn.addEventListener('click', createElement);




// Oppgave 6

const parentUl = document.getElementById('list');
const removeLiBtn = document.getElementById('remove-li');

const removeLiFromParent = () => {
  const lastElement = parentUl.lastElementChild;
  if (lastElement) {
    parentUl.removeChild(lastElement);
  }
};

removeLiBtn.addEventListener('click', removeLiFromParent);





// Oppgave 7

const inputName = document.getElementById('name');
const orderBtn = document.getElementById('order');

const handleKeyUp = () => {
  const name = inputName.value;
  if (name && name.length >= 4) {
    orderBtn.disabled = true;
    orderBtn.style = 'border: 1px solid red';
  } else {
    orderBtn.disabled = false;
    orderBtn.style = 'border: 1px solid black';
  }
};

inputName.addEventListener('keyup', handleKeyUp);




// Oppgave 8

const ulParent = document.querySelector('.children');
const ulParentChildren = ulParent.querySelectorAll('li');
const colorBtn = document.getElementById('color');

const addBorder = () => {
  Array.from(ulParentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = 'border: 1px solid pink; margin-bottom: 10px; padding: 5px;';
    } else {
      li.style = 'border: 1px solid green; margin-bottom: 10px; padding: 5px;';
    }
  });
};

colorBtn.addEventListener('click', addBorder);