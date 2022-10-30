let prediction = Math.floor(Math.random() * 100)
let barWidth = prediction * 2
document.getElementById("quant-num").innerHTML = prediction + "%"
document.getElementById("bar").style.width = barWidth + "px";

var quoteContent = document.getElementById("quoteContent");

if (prediction < 50) {
    quoteContent.innerHTML = "Looks like the fridge is going to remain empty :("
} else {
    quoteContent.innerHTML = "There is a chance that he will be back to hug you <3"
}