export const Converter = () => {

    return (
        <div id="converter">
            <h1>Converter</h1>
            <div id="converter__container">
                <div id="converter__container__input">
                    <input type="number" placeholder="0" />
                    <select>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <div className="converter__container__output">
                    <input type="number" placeholder="0" />
                    <select>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
            </div>
        </div>
    )
}