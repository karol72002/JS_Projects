
function addNote(){
    let txtVal = document.getElementById('txtVal').value;
    listNode = document.getElementById('list');
    liNode = document.createElement("LI");
    txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}

// Listener
const confirmButton = document.getElementById('confirm_btn');
confirmButton.addEventListener('click', addNote);