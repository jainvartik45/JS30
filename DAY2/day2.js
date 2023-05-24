function functionBlur(){
    var inputvalue = document.getElementById("blur").value;
    console.log(inputvalue)
    
    const myElement = document.getElementById("img1");
    myElement.style.filter = `blur(${inputvalue}px)`

}

function functionSpace(){
    var inputvalue = document.getElementById("spacing").value;
    console.log(inputvalue)
    const myElement = document.getElementById("output");
    myElement.style.padding = `${inputvalue}px`

}

function functionColor(){
    var inputvalue = document.getElementById("bscolor").value;
    console.log(inputvalue);
    const myElement = document.getElementById("output");
    myElement.style.backgroundColor = inputvalue;

}