import { ActiveQuestion } from "../../types";

interface QuestionnaireProps{
  questions: ActiveQuestion[];
  onAnswerChange: (question: ActiveQuestion) => void
  onSubmit: () => void
}
export default function Questionnaire(props: QuestionnaireProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl mb-6">Fill in the following form to see recommendations</h3>
      {props.questions.map((item) => (
        <div key={item.id} className="flex flex-col mb-2 pb-2">
          <label className="question-label mb-2">{item.question.text}</label>
          <input
            className="question-answer border-2 p-2 rounded"
            name={`question-${item.id}`}
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
        <button
          className="text-white bg-blue-500 hover:bg-blue-700 rounded-md p-3"
          onClick={() => props.onSubmit()}
        >Show Results</button>
      </div>
    </div>
  );
}