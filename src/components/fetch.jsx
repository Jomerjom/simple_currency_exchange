import { useState, useEffect } from "react";

export const Fetch = () => {
  const [data, setData] = useState(null);
  const rates = data?.rates;
  const currencies = Object.keys(rates || {});
  const [convertedValue, setConvertedValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  useEffect(() => {
    fetch(
      // "http://data.fixer.io/api/latest?access_key=55a1dffac9be5b10fdccf4f8ccc7ed90&base=EUR"
      process.env.REACT_APP_API_URL
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const selectedRate = rates[selectedCurrency];
    const convertedValue = (Number((event.target.value * selectedRate).toFixed(2)));
    setConvertedValue(convertedValue);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    const selectedRate = rates[event.target.value];
    const convertedValue = (Number((inputValue * selectedRate).toFixed(2)));
    setConvertedValue(convertedValue);
  };

  return (
    <div className="flex flex-col gap-2 p-4 rounded bg-[#202124] w-fit text-[#bdc1c6]">
      <p className="text-[#9aa0a6]">1 Euro equals</p>
      <p className="text-[#e8eaed] text-4xl pb-3">{selectedCurrency && rates[selectedCurrency]?.toFixed(2)} {selectedCurrency}</p>
      <div className="flex gap-2 rounded border border-[#bdc1c6] px-4 py-2">
        <input
          type="number"
          placeholder="0"
          className="bg-[#202124] flex w-20"
          value={inputValue}
          onChange={handleInputChange}
        />
        <vr className="bg-[#bdc1c6] w-[1px]" />
        <h1 className="flex font-bold">EUR</h1>
      </div>
      <div className="flex gap-2 rounded border border-[#bdc1c6] px-4 py-2">
        <p className="flex w-20">{convertedValue}</p>
        <vr className="bg-[#bdc1c6] w-[1px]" />
        <select
          className="bg-[#202124] flex font-bold"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
