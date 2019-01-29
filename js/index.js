// Your code goes here

//1) Mouseover 
const logoHeading = document.querySelector(".logo-heading")
logoHeading.addEventListener("mouseover", event => {
    TweenMax.from(logoHeading, 3, {x:300, opacity:0, scale:0.5});
})

//2) Click on Sign-up buttons (Challenge: How to do this in a forEach?)
const buttonEl = document.querySelectorAll(".btn")
buttonEl[0].addEventListener("click", e => {
    e.stopPropagation();
    console.log(`this is my event: ${event}`)
})
buttonEl[1].addEventListener("click", e => {
    e.stopPropagation();
    console.log(`this is my event: ${event}`)
})
buttonEl[2].addEventListener("click", e => {
    e.stopPropagation();
    console.log(`this is my event: ${event}`)
})


//2) Event Prop -- Click anywhere in body
const bodyTest = document.querySelector("body")
bodyTest.addEventListener("click", event => {
    console.log("Body Test container event fired")
})

//3) Keydown on entire doc
document.addEventListener("keydown", event => {
    console.log('You just did a keydown!')
})

//4 Load on entire window
window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
})

//5 Mousedown on img
const funBusImg = document.querySelector("header img")

funBusImg.addEventListener("mousedown", function(event) {
    funBusImg.remove();
    console.log('The fun bus image was removed')
})

//6 Resize 
window.addEventListener("resize", event => {
    console.log("The window has been resized")
    
}, {once: true})

//7 Dblclick on copyright
const copyright = document.querySelector(".footer p")
window.addEventListener('dblclick', event => {
    copyright.style.color = 'red';
})

//8 Select on any text in P
const h2 = document.querySelector("h2") 
h2.addEventListener("onselect", event => {
    alert('Youve selected some text')
})

/*	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
    * [ ] `dblclick`
    * 
    * Using the 10 unique events, find ways to update the DOM 
    * in creative ways. For example you could change colors, animate 
    * objects, remove objects, etc.
    * 
    */