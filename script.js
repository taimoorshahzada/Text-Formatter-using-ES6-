updateText = () => {
    let text = document.getElementById("inputtext").value;
    document.getElementById("outputtext").innerHTML = text;
}

turnBold = (elem) => {
    elem.classList.toggle('active');
    document.getElementById("outputtext").classList.toggle("boldc")
}
turnItalic = (elem) => {
    elem.classList.toggle('active');
    document.getElementById("outputtext").classList.toggle("italicc")
}
turnUnderline = (elem) => {
    elem.classList.toggle('active');
    document.getElementById("outputtext").classList.toggle("underlinec")
}
turnAlign = (elem, align) => {
    document.getElementById("outputtext").style.textAlign = align;
    let btn = document.getElementsByClassName("align");
    for(let i of btn){
        i.classList.remove('active');
    }
    elem.classList.add('active');
}
