// References to certain field elements
var input = document.getElementById('text-field'); // the text input field
var paramsContainer = document.getElementById("parameters-container"); // the container in which we will show the available parameters
var paramsObj = fieldProperties.PARAMETERS; // the array of available parameters, specified in the form definition


// loop through each parameter
for(var i = 0; i < paramsObj.length; i++) {
    var prop = paramsObj[i];
    var listItem = '<li>Property found. <strong>' + prop.key + ' = ' + prop.value + '</strong></li>'
    paramsContainer.insertAdjacentHTML('beforeend', listItem); // add the current parameter to the list
    
    // if there is a color parameter, use it to color the label text
    if(prop.key == "color"){
        document.getElementsByClassName('label')[0].style.color = prop.value;
    }
}


// the rest of this document just deals with the normal functionality of a text field


// Define what happens when the user attempts to clear the response
function clearAnswer() {
    input.value = '';
} 

// If the field is not marked readonly, then focus on the field and show the on-screen keyboard (for mobile devices)
function setFocus() {
    if(!fieldProperties.READONLY){
        input.focus();
        if (window.showSoftKeyboard) {
            window.showSoftKeyboard();
        }
    }
}

// Save the user's response (update the current answer)
input.oninput = function() {
    setAnswer(input.value);
}



