


function component()
{
    console.log('Component is called!');
    const node = document.getElementById('myHeading');

    console.dir(node);
    createElement();
}

function createElement()
{
    const newHeader = document.createElement('h2');
    newHeader.innerHTML = 'I am inner Html';
    console.dir(newHeader);
    document.body.appendChild(newHeader);
    
}

window.onload = component();

