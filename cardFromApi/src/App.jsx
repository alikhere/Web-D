import { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    let data = await response.json();
    setCards(data.results); // Access the 'results' field of the API response
  };



  return (
    <>
      <button onClick={fetchCards} className='bg-gray-900 text-white justify-center align-middle'>Get Data</button>
      <div className='flex flex-wrap justify-evenly  border-gray-900'>
        {cards.map((card) => {
          return (
            <div key={card.correct_answer} className=' rounded-2xl text-black w-96 h-40 my-4 border-solid border-blue-600 border-spacing-4 bg-slate-500 p-4'>
              <h3>Question: {card.question}</h3>
              <h3>Correct Answer: {card.correct_answer}</h3>
              <h3>Difficulty: {card.difficulty}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
