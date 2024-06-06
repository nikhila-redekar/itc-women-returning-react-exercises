/*import { useEffect, useState } from "react";

function Jeopardy(props) {

  let [score, setScore] = useState(0);
  let [jeopardyData, setJeopardyData] = useState({});

  //when the component mounts, get a the first question
  useEffect(()=> {
    getNewQuestion();
  },[])

  //get a new random question from the API and add it to the data object in state
  let getNewQuestion = () => {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/random-clue`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .then((data) => {
            
            //put the data in the console just so we can see it
            console.log("data from the api", data);

            //update state with the data from the API causing the page to re-render
            setJeopardyData(data);
        })
        //handle any errors/failures with getting data from the API
        .catch((error) => {
            console.log(error)
        });
  }

    //present the results to the user
    return (
      <div>
        {/* Displaying the question to help you get started }
        Question: {jeopardyData.question}
      </div>
    );
}

export default Jeopardy;*/

// src/components/jeopardy/Jeopardy.js
import React, { useEffect, useState } from "react";

function Jeopardy() {
  const [score, setScore] = useState(0);
  const [jeopardyData, setJeopardyData] = useState({});
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    getNewQuestion();
  }, []);

  const getNewQuestion = () => {
    fetch(`https://jservice.xyz/api/random-clue`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data from the api", data);
        setJeopardyData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAnswerSubmit = () => {
    // Check if the user's answer is correct (for demonstration purposes, just compare it with the answer from API)
    if (userAnswer.toLowerCase() === jeopardyData.answer.toLowerCase()) {
      // Correct answer, increase score
      setScore(score + jeopardyData.value);
    } else {
      // Incorrect answer, decrease score
      setScore(score - jeopardyData.value);
    }

    // Get a new question
    getNewQuestion();
    
    // Clear the input field
    setUserAnswer("");
  };

  return (
    <div>
      <h1>Jeopardy Game</h1>
      <div>
        <h3>Category: {jeopardyData.category && jeopardyData.category.title}</h3>
        <h4>Question: {jeopardyData.question}</h4>
        <h4>Point Value: {jeopardyData.value}</h4>
        <h4>Your Score: {score}</h4>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your Answer"
        />
        <button onClick={handleAnswerSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Jeopardy;
