import './style.css';

const Flags = ({ team }) => {
    //adds a space to replace the -, and make it Uppercase
    const formattedClass = team.replaceAll(' ', '-').toUpperCase();

    return (
        <div>
            <div className={formattedClass}></div>
        </div>
    )
}

export default Flags