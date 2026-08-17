
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");



let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)

// --- GIFT BOX INTERACTIVITY LOGIC ---

let leftOpened = false;
let rightOpened = false;

const gw1 = document.getElementById('gw1');
const gw2 = document.getElementById('gw2');
const gw3 = document.getElementById('gw3');

const letterModal = document.getElementById('letter-modal');
const flowerModal = document.getElementById('flower-modal');
const letterText = document.getElementById('letter-text');

// Check if middle box should be unlocked
function checkUnlock() {
    if (leftOpened && rightOpened) {
        gw2.classList.remove('locked');
        gw2.classList.add('unlocked');
        gw2.querySelector('.bouncing-text').style.display = 'block';
    }
}

// Left Box Click
gw1.addEventListener('click', () => {
    gw1.querySelector('.bouncing-text').style.display = 'none';
    letterText.innerHTML = "<h2>Letter 1</h2><p>Write your first beautiful message here!</p>";
    letterModal.style.display = 'flex';
    leftOpened = true;
    checkUnlock();
});

// Right Box Click
gw3.addEventListener('click', () => {
    gw3.querySelector('.bouncing-text').style.display = 'none';
    letterText.innerHTML = "<h2>Letter 2</h2><p>Write your second beautiful message here!</p>";
    letterModal.style.display = 'flex';
    rightOpened = true;
    checkUnlock();
});

// Middle Box Click (Flower Animation)
gw2.addEventListener('click', () => {
    if (!gw2.classList.contains('locked')) {
        gw2.querySelector('.bouncing-text').style.display = 'none';
        flowerModal.style.display = 'flex';
        
        // Reset and trigger the blooming animation
        const flowerWrapper = document.getElementById('flower-wrapper');
        flowerWrapper.classList.add('not-loaded');
        
        setTimeout(() => {
            flowerWrapper.classList.remove('not-loaded');
        }, 1000);
    }
});

// Close Buttons
document.getElementById('close-letter').addEventListener('click', () => {
    letterModal.style.display = 'none';
});

document.getElementById('close-flower').addEventListener('click', () => {
    flowerModal.style.display = 'none';
});