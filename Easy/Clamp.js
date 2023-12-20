/**
* @param {number} value The number to clamp.
* @param {number} lower The lower bound.
* @param {number} upper The upper bound.
* @returns {number} Returns the clamped number.
*/
function clamp(value, lower, upper) {
    // if(value<lower) return lower
    // else if (value>upper) return upper
    // else return value;

    return Math.min(Math.max(lower,value) , upper)
}

clickHandler =() =>{
    document.getElementById('demo').innerHTML=clamp(15,-3, 5);
}


/**
// Within the bounds, return as-is.
clamp(3, 0, 5); // => 3

// Smaller than the lower bound.
clamp(-10, -3, 5); // => -3

// Bigger than the upper bound.
clamp(10, -5, 5); // => 5
 */