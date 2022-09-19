
// Starting the counter with initial value of 0
let count = 0;

// Disable submit button after a click
function disable(x)
{
    x.disabled = true;
}

// Decrease button in counter
document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

// Reset button in counter 
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

// Increase button in counter
document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

// Fetch API and display in webpage
fetch('https://swapi.dev/api/people').then((data)=>{
    
let dataname = document.getElementById('root')
    return data.json();
}).then((completedata)=>{
    console.log(completedata)
    window.print(completedata)
    document.querySelector("apidata").innerHTML = completedata;
    // console.log(completedata.height)
    
});
