
function Countries() {
    const countries = [ 'Namibia', 'Kenya', 'Egypt'];
    return (
        <ul>
            <li>Nigeria</li>
            <li>South Africa</li>
            <li>Ghana</li>
            <li>Niger</li>
            <li>Botswana</li>
            {countries.map((country, index) => {
                return (
                    <li key={index}>{country}</li>
                )
            })}
        </ul>
    )
}

export default Countries;