
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
    
    // Notice the backticks (`) used here instead of quotes!
    letterText.innerHTML = `
        <h2>Yooo Happy Birthdayy broo,</h2>
        
        <p>I know living in this world is not easy, huahahha, but you managed to survive for 25 whole years. You're one of the most hardworking and diligent people I've ever known, so I'm pretty sure you'll succeed in everything you work on.</p>
        
        <p>So yeah, happy birthday and wishing you all the best things in this world! May every good thing you pray for come true, and may you always be happy and surrounded by people who make you happy too.</p>

		<p> - Audrey - <p>
    `;
    
    letterModal.style.display = 'flex';
    leftOpened = true;
    checkUnlock();
});

// Right Box Click
gw3.addEventListener('click', () => {
    gw3.querySelector('.bouncing-text').style.display = 'none';
    
    // Notice the backticks (`) used here instead of quotes!
    letterText.innerHTML = `        
        <p>Thoughts and feelings are not something that can be easily expressed into words, even when written down. Yet, if not expressed, the receipient will never be able to properly understand what the other person wants to convey. I'm not someone who can clearly express my feelings, which is a core strength you have, so I'll write it in a more roundabout way.</p>
        
        <p>Therefore, Happy 25th Birthday to you, my dear sister. May the path you choose to walk in the future be illuminated by the sun, and your convictions stay strong and proud like a lion even in the midst of all the fog that blocks your path. Just as how the stars illuminate the sky at night, I hope that just as many as there are stars in the sky, there is an equal amount of people supporting you in every step of the way.</p>

        <p> - Andrew - <p>
    `;
    
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