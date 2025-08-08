let guestnum = 0
let homenum = 0
document.getElementById("guestnumber").textContent = guestnum
document.getElementById("homenumber").textContent = homenum


//let guestCount = document.getElementById("guestnumber").textContent


function incrementGuestBy1 () {
    document.getElementById("guestnumber").textContent = guestnum
    guestnum = Number(document.getElementById("guestnumber").textContent)
    guestnum += 1
    document.getElementById("guestnumber").textContent = guestnum
    setnumcolor()
}

function incrementGuestBy2 () {
    document.getElementById("guestnumber").textContent = guestnum
    guestnum = Number(document.getElementById("guestnumber").textContent)
    guestnum += 2
    document.getElementById("guestnumber").textContent = guestnum    
    setnumcolor()
}

function incrementGuestBy3 () {
    document.getElementById("guestnumber").textContent = guestnum
    guestnum = Number(document.getElementById("guestnumber").textContent)
    guestnum += 3
    document.getElementById("guestnumber").textContent = guestnum        
    setnumcolor()
}

function incrementHomeBy1 () {
    document.getElementById("homenumber").textContent = homenum
    guestnum = Number(document.getElementById("homenumber").textContent)
    homenum += 1
    document.getElementById("homenumber").textContent = homenum        
    setnumcolor()
}

function incrementHomeBy2 () {
    document.getElementById("homenumber").textContent = homenum
    guestnum = Number(document.getElementById("homenumber").textContent)
    homenum += 2
    document.getElementById("homenumber").textContent = homenum        
    setnumcolor()
}

function incrementHomeBy3 () {
    document.getElementById("homenumber").textContent = homenum
    guestnum = Number(document.getElementById("homenumber").textContent)
    homenum += 3
    document.getElementById("homenumber").textContent = homenum            
    setnumcolor()
}

function reset () {
    document.getElementById("homenumber").textContent = 0
    document.getElementById("guestnumber").textContent = 0
    setnumcolor()
}

function setnumcolor () {
    homenum = Number(document.getElementById("homenumber").textContent)
    guestnum = Number(document.getElementById("guestnumber").textContent)
    
    if (homenum > guestnum) {
        document.getElementById("homenumber").style.color = "green";
        document.getElementById("guestnumber").style.color = "red";    
    } else if (guestnum > homenum) {
        document.getElementById("homenumber").style.color = "red";
        document.getElementById("guestnumber").style.color = "green";    
    } else {
        document.getElementById("guestnumber").style.color = "red";    
        document.getElementById("homenumber").style.color = "red";
    }
}

