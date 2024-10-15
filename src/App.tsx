import React, {useEffect, useState} from 'react';
import './App.css';
import { BaseTemplate } from "../src/templates/BaseTemplate"
import Questionnaire from "./components/Questionnaire/Questionnaire";
import {question1, question2, question3, question4} from "./constants/questions";
import {ActiveQuestion, EventResult, GoogleEventsApiResponse} from "./types";
import {EVENT_SEARCH_PATH} from "./constants/routes";
import Results from "./components/Results/Results";

export default function App() {
  const [questionnaire, setQuestionnaire] = useState<ActiveQuestion[]>([
    {id: 1, question: question4},
    {id: 2, question: question2},
    {id: 3, question: question1},
    {id: 4, question: question3},
  ])
  const [events, setEvents] = useState<EventResult[]>([]);
  const [loading, setLoading] = useState<boolean>( false )
  const queryParams = new URLSearchParams({
    engine:'google_events',
    q: buildSearchQuery(),
    gl: "us",
    hl: "en",
    api_key: process.env.REACT_APP_SERP_API_KEY ?? ''
  });

  //Load Previous Answers
  useEffect(() => {
    const stored = localStorage.getItem("questionnaire")
    if (stored) {
      const list: ActiveQuestion[] = JSON.parse(stored)
      const loadedList = questionnaire.map(aq => {
        const found = list.find(q => q.question.text === aq.question.text)
        if (found) {
          return found
        }
        return aq
      })
      setQuestionnaire(loadedList)
    }
  }, []);

  function buildSearchQuery(): string {
    return questionnaire.map(aq =>
      aq.question.answer
    ).toString()
  }

  async function findEvents(){
    try {
      const endpoint = `${process.env.REACT_APP_SERP_ENDPOINT}${EVENT_SEARCH_PATH}?${queryParams.toString()}`
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: GoogleEventsApiResponse = await response.json();
      if (data.error) {
        throw new Error(`API Response Error! Status: ${data.error}`)
      }
      setEvents(data.events_results)
      localStorage.setItem("questionnaire", JSON.stringify(questionnaire))
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  return (
    <BaseTemplate
      title={"Event Search App"}
      leftNav={<></>}
      rightNav={<></>}
    >
      <div className="w-full grid grid-cols-4 gap-4 mb-4" data-testid="test-div">
        <div className="col-span-4 p-4 border-2 rounded">
          <Questionnaire
            questions={questionnaire}
            onAnswerChange={(activeQuestion: ActiveQuestion): void => {
              setQuestionnaire(questionnaire => questionnaire.map(item =>
                item.id === activeQuestion.id ? {...item, question: activeQuestion.question} : item
              ))
            }}
            onSubmit={() => {
              setLoading(true)
              findEvents().then(r => setLoading(false))
            }}
            isLoading={loading}
          />
        </div>
      </div>
      {events.length > 0 ? (
      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-span-4 p-4 border-2 rounded">
          <Results
            results={events}
          />
        </div>
      </div>) : null}
    </BaseTemplate>
  );
}
