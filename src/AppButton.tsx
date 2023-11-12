import './App.css';

function AppButton() {
    function handleClick () {
        console.log("button clicked!")
    }

    return (
        <button onClick={handleClick}>Button</button>
    )
}

export default AppButton