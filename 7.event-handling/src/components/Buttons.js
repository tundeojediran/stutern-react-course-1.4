function Button({ children, onButtonClick, style }) {
    return (
        <button style={style} onClick={onButtonClick}>
            {children}
        </button>
    );
}


const UploadButton = () => {

    function handleUploadClick() {
        alert(`Uploading image`);
    }

    return (
        <Button onButtonClick={handleUploadClick}>
            Upload Picture
        </Button>
    )
}

const MovieButton = ({ movieName }) => {

    function handlePlayClick() {
        alert(`Playing ${movieName}`);
    }
    return (
        <Button movieName={movieName} onButtonClick={handlePlayClick}>
            Play Movie
        </Button>
    )
}



export default function Buttons() {
    return (
        <div>
            <MovieButton movieName={"Creed III"} />
            <UploadButton />
        </div>
    );
}
