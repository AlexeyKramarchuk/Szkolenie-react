import { useState } from "react";


function Form() {
  const [taste, setTaste] = useState();
  const [amount, setAmount] = useState(1);
  const [comments, setComments] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault(); // zatrzymujemy propagację eventu
    console.log("liczba: ", amount); // wyświetlamy wartości w konsoli
    console.log("wybrany smak: ", taste);
    console.log("uwagi", comments);
  };
  const handleTasteChange = (event) => { // handler zmiany smaku
    console.log(event.target.value);
    setTaste(event.target.value);
  };
  const handleAmountChange = (event) => { // handler zmiany ilości
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  const handleCommentsChange = (event) => { // handler zmiany komentarza
    console.log(event.target.value);
    setComments(event.target.value);
  };


  return (
    <div>
      <h1>Zamowienie</h1>
      <form onSubmit={handleSubmit}>  
       {/* podpinamy handler do onSubmit */}
        <label>Ilosc</label>
        <input type="number" onChange={handleAmountChange}></input>
        <label>Sok</label>
        <select value={taste} onChange={handleTasteChange}>
          <option value="grejpfrutowy">Grejpfrutowy</option>
          <option value="limonkowy">Limonkowy</option>
          <option selected value="kokosowy">
            Kokosowy
          </option>
          <option value="mango">Mango</option>
        </select>
        <label>Uwagi</label>
        <input type="text" onChange={handleCommentsChange}></input>
        <button type="submit">Zamów</button> 
        {/* aby wysłać formularz potrzebujemy buttona lub inputa z typem submit */}
      </form>
    </div>
  );
}


export default Form;