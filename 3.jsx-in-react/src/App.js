import Countries from "./Countries";
import "./index.css"

// an App Component
function App() {

    const imageUrl = "https://dummyimage.com/400";
    const name = "Folakemi";

    return (
        <>
            <Countries />
            <Countries />
            <form className="bio-form">
                <div className="field">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div className="field">
                    <input type="radio" name="gender" value="male" />Male<br />
                    <input type="radio" name="gender" value="female" />Female<br />
                    <input type="radio" name="gender" value="other" />Other
                </div>

                <div className="field">
                    <input list="Options" />
                    <datalist id="Options">
                        <option value="Option1"></option>
                        <option value="Option2"></option>
                        <option value="Option3"></option>
                    </datalist>
                </div>

                <div className="field">
                    <input type="submit" value="Submit" />
                </div>

                <div className="field">
                    <input type="checkbox" name="correct" value="correct" />Correct
                </div>
            </form>
            <div>
                Hello {name}
            </div>
            <img src={imageUrl} alt="sample" />
        </>
    )
}

export default App;