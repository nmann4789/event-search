import { ActiveQuestion } from "../../types";
import {useEffect} from "react";

interface QuestionnaireProps {
  questions: ActiveQuestion[];
  onAnswerChange: (question: ActiveQuestion) => void
  onSubmit: () => void
  isLoading: boolean
}
export default function Questionnaire(props: QuestionnaireProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl mb-6">Fill in the following form to see recommendations</h3>
      {props.questions.map((item) => (
        <div key={item.id} className="flex flex-col mb-2 pb-2">
          <label className="question-label mb-2" htmlFor={`question-${item.id}`}>{item.question.text}</label>
          <input
            className="question-answer border-2 p-2 rounded"
            name={`question-${item.id}`}
            id={`question-${item.id}`}
            value={item.question.answer}
            onChange={(e) => {
              let updatedQuestion = item.question;
              updatedQuestion = {
                ...updatedQuestion,
                "answer": e.target.value
              }
              props.onAnswerChange({
                ...item,
                "question": updatedQuestion
              })
            }}/>
        </div>
      ))}
      <div>
        {!props.isLoading ? (
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 rounded-md p-3"
            data-testid="show-results-button"
            onClick={() => props.onSubmit()}
          >Show Results</button>
        ) : <div>Loading...</div>}
      </div>
    </div>
  );
}