const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operators');
const display = document.querySelector('input[name="display"]');

//numbers
nums.forEach(btn => { 
    btn.addEventListener('click', function(e) {
    display.value += e.target.value;
    });
});

//Operators
operators.forEach(btn => { 
    btn.addEventListener('click', function(e) {
    display.value += e.target.value;
    });
});


// Special Character
// AC 
document.querySelector('input[value="AC"]').addEventListener('click',function(e) { 
    display.value="";
})
// DE 
document.querySelector('input[value="DE"]').addEventListener('click',function(e) { 
    display.value=display.value.slice(1,2);
})

// Equal 
document.querySelector('input[value="="]').addEventListener('click',function(e) { 
    try { 
        display.value =eval(display.value); 

    } catch { 
        display.value = "Error";
    }
});
