// Your code goes here

//1) Mouseover 
const logoHeading = document.querySelector(".logo-heading")
logoHeading.addEventListener("mouseover", event => {
    TweenMax.from(logoHeading, 3, {x:300, opacity:0, scale:0.5});
})

//2) Click on Sign-up buttons (Challenge: How to do this in a forEach?)
const buttonEl = document.querySelectorAll(".btn")
buttonEl[0].addEventListener("click", e => {
    console.log(`this is my event: ${event}`)
})
buttonEl[1].addEventListener("click", e => {
    console.log(`this is my event: ${event}`)
})
buttonEl[2].addEventListener("click", e => {
    console.log(`this is my event: ${event}`)
})


//3) Keydown on entire doc
document.addEventListener("keydown", event => {
    console.log('You just did a keydown!')
})

//4 Load on entire window
window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
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