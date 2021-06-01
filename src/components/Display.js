import '../css/Display.css';

function Display({name, title}) {

    return (
            <>
                <p className='name'>{ name }</p>
                <p className='title'>{ title }</p>
            </>
    );
};


export default Display;