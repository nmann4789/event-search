import React, {useEffect, useState} from 'react';
import './App.css';
import { BaseTemplate } from "../src/templates/BaseTemplate"
import Questionnaire from "./components/Questionnaire/Questionnaire";
import {question1, question2, question3, question4} from "./constants/questions";
import {ActiveQuestion, EventResult, GoogleEventsApiResponse} from "./types";
import {EVENT_SEARCH_PATH} from "./constants/routes";

export default function App() {
  const [questionnaire, setQuestionnaire] = useState<ActiveQuestion[]>([
    {id: 1, question: question4},
    {id: 2, question: question1},
    {id: 3, question: question2},
    {id: 4, question: question3},
  ])
  const [events, setEvents] = useState<EventResult[] | null>(null);

  const queryParams = new URLSearchParams({
    engine:'google_events',
    q: 'events in austin',
    gl: "us",
    hl: "en",
    api_key: process.env.REACT_APP_SERP_API_KEY ?? ''
  });

  async function findEvents(){
    const { getJson } = require("serpapi")
    const json = await getJson({
      q: "events in Austin",
      google_domain: "google.com",
      gl: "us",
      hl: "en",
      api_key: "556069c257a3f4ca92ab295c3b2adf43736284508ace1fb9be7cd56ef7594285"
    });
    console.log(json)
    // try {
    //   const endpoint = `${process.env.REACT_APP_SERP_ENDPOINT}${EVENT_SEARCH_PATH}?${queryParams.toString()}`
    //   const response = await fetch(endpoint, {
    //     mode: "no-cors",
    //   });
    //   console.log(await response.text())
    //   //setEvents(data.events_results)
    //   //console.log(data.events_results)
    // } catch (error) {
    //   console.error('Error fetching events:', error)
    // }
  }

  useEffect(() => {
    console.log(process.env)
  }, []);
  return (
    <BaseTemplate
      title={"Event Search App"}
      leftNav={<></>}
      rightNav={<></>}
    >
      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-span-4 p-4 border-2 rounded">
          <Questionnaire
            questions={questionnaire}
            onAnswerChange={(activeQuestion: ActiveQuestion): void => {
              setQuestionnaire(questionnaire => questionnaire.map(item =>
                item.id === activeQuestion.id ? {...item, question: activeQuestion.question} : item
              ))
            }}
            onSubmit={() => findEvents()}
          />
        </div>
      </div>
    </BaseTemplate>
  );
}
