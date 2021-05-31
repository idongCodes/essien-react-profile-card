const Display = () => {
    return (
        <>
            <div id='display'>Hola</div>
        </>        
    )
}

function Buttons() {    
    return (
        <div>
            <button id='name-btn'>Name</button>
            <button id='skills-btn'>Skills</button>
        </div>
    );
};


export {
    Buttons,
    Display
};

const name = 'Idong';
const skills = 'Front-End Developer';
const display = document.getElementById('display');

let btnName = document.getElementById('name-btn');
let btnSkills = document.getElementById('skills-btn');
console.log('LOG', btnName, btnSkills);

btnName.addEventListener('click', () => {
    const nameParaElement = document.createElement('p');
    nameParaElement.innerHTML = `<h3>My name is ${ name }.</h3>`;
    display.appendChild(nameParaElement);
})
