const form = document.getElementById('add');
var doList = document.getElementById('things');

form.addEventListener('submit', addDo);
doList.addEventListener('click', removeDo)
    //Add song
function addDo(e) {
    e.preventDefault();
    //getValue
    var newDo = document.getElementById('thing').value;
    //Create li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newDo));
    // Create Delete
    var delbutton = document.createElement('button');
    delbutton.className = 'btn btn-danger btn-sm float-right delete';
    // Append text
    delbutton.appendChild(document.createTextNode('Delete'));
    //Append li and button
    li.appendChild(delbutton);
    doList.appendChild(li);
    form.reset();
}

function removeDo(e) {
    if(e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        doList.removeChild(li);
    }
}