//---------------set time-out------------------// 
//task1
setTimeout(t1, 7000)
function t1 () {
    document.body.innerHTML += `<p id="task1">Ben Kilinski</p>`
}


//task 2
document.body.innerHTML += `<p id="myP">Bye</h1>`
setTimeout(t2, 5000)
function t2 () {
    document.body.innerHTML += `<p id="myP">Hello</p>`
}

//task 3 
setTimeout(printHour, 90000)
function printHour () {
    var now = new Date();
    var hour = now.getHours();
    document.body.innerHTML += `<p id="task3">${hour}</p>`
}

//task 4 
function task4() {
    document.body.innerHTML += `<p id="myP">I love timers</p>`
}
var tomeout = setTimeout(task4, 3000)
document.body.innerHTML += `<button id="cancelButton">delete</button>`
document.getElementById("cancelButton").addEventListener("click", clearTimOut)
function clearTimOut () {
    clearTimeout(tomeout)
}