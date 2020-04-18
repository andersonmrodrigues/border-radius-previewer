function radius() {
    console.log('caiu');
    var inputLeftTop = document.getElementById("inputLeftTop").value;
    var inputLeftBottom = document.getElementById("inputLeftBottom").value;
    var inputRightTop = document.getElementById("inputRightTop").value;
    var inputRightBottom = document.getElementById("inputRightBottom").value;

    document.getElementById("box").style.borderTopLeftRadius = inputLeftTop + "px"
    document.getElementById("box").style.borderBottomLeftRadius = inputLeftBottom + "px"
    document.getElementById("box").style.borderTopRightRadius = inputRightTop + "px"
    document.getElementById("box").style.borderBottomRightRadius = inputRightBottom + "px"

    document.getElementById("box").style.webkitborderborderTopLeftRadius = inputLeftTop + "px"
    document.getElementById("box").style.webkitborderborderBottomLeftRadius = inputLeftBottom + "px"
    document.getElementById("box").style.webkitborderborderTopRightRadius = inputRightTop + "px"
    document.getElementById("box").style.webkitborderborderBottomRightRadius = inputRightBottom + "px"

    document.getElementById('textArea').value = 'border-radius: ' + inputLeftTop + 'px ' + inputRightTop + 'px ' + inputRightBottom + 'px ' + inputLeftBottom + 'px;\n-webkit-border-radius: ' + inputLeftTop + 'px ' + inputRightTop + 'px ' + inputRightBottom + 'px ' + inputLeftBottom + 'px;';
}

// function box() {
//     var height = document.getElementById("height").value;
//     var width = document.getElementById("width").value;
//     document.getElementById("box").style.height = height + 'px';
//     document.getElementById("box").style.width = width + 'px';
// }

function copy() {
    var copyText = document.getElementById("textArea");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}