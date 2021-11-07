let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('please tell me your name:');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Let me introduce h1, h2, h3, h4, h5, and h6 element for you,' + myName;
    }
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Let me introduce h1, h2, h3, h4, h5, and h6 element for you,' + storedName;
}


myButton.onclick = function() {
    setUserName();
};