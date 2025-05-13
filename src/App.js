import React from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "./survey_theme.css"; // This should include SurveyJS CSS
import 'survey-core/survey-core.css';


const surveyJson = {
  title: "🧠 Basic Computer Science Quiz",
  description: "Test your fundamental computer knowledge with 5 quick questions.",
  showProgressBar: "top",
  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: `
            <h3>Welcome to the Basic Computer Quiz</h3>
            <p>This is a quick quiz to test your computer knowledge.</p>
            <p>Click <b>Start Quiz</b> when you're ready.</p>
          `
        }
      ]
    },
    {
      title: "Computer Basics",
      elements: [
        {
          type: "radiogroup",
          name: "q1",
          title: "1. What does CPU stand for?",
          isRequired: true,
          choices: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processing Unit",
            "Control Processing Unit"
          ],
          correctAnswer: "Central Processing Unit"
        },
        {
          type: "radiogroup",
          name: "q2",
          title: "2. Which of the following is an input device?",
          isRequired: true,
          choices: ["Monitor", "Printer", "Keyboard", "Speaker"],
          correctAnswer: "Keyboard"
        },
        {
          type: "radiogroup",
          name: "q3",
          title: "3. What type of memory is RAM?",
          isRequired: true,
          choices: ["Non-volatile", "Permanent", "Volatile", "Optical"],
          correctAnswer: "Volatile"
        },
        {
          type: "radiogroup",
          name: "q4",
          title: "4. What does HTML stand for?",
          isRequired: true,
          choices: [
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Multi Language"
          ],
          correctAnswer: "Hyper Text Markup Language"
        },
        {
          type: "radiogroup",
          name: "q5",
          title: "5. Which company developed the Windows operating system?",
          isRequired: true,
          choices: ["Google", "Apple", "IBM", "Microsoft"],
          correctAnswer: "Microsoft"
        }
      ]
    }
  ]
};

function App() {
  const survey = new Model(surveyJson);

  survey.onComplete.add((sender) => {
    console.log("Quiz Results:", sender.data);
    alert("Quiz submitted successfully! See console for your answers.");
  });

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <Survey model={survey} />
    </div>
  );
}

export default App;
