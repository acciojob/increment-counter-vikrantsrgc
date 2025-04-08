//your JS code here. If required.
let counter = 0 ;

let displyCount = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn")


function UpdateDisplay() {
	displyCount.textContent = counter 
}

incrementBtn.addEventListener("click",()=>{
	counter++
	UpdateDisplay()
})
