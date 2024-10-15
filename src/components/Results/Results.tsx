import {EventResult} from "../../types";
import {useEffect, useState} from "react";
import Result from "../Result/Result";

interface ResultsProps {
  results: EventResult[]
}
export default function Results(props: ResultsProps) {
  const [filter, setFilter] = useState<string>("")
  const [filteredResults, setFilteredResults] = useState<EventResult[]>([])

  useEffect(() => {
    setFilteredResults(
      props.results.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
    )
  }, [filter]);

  return (
    <div className="flex flex-col result" data-testid="results-region">
      <h3 className="text-2xl mb-6">Results</h3>
      <div className="flex border-2 rounded p-2 mb-2">
        <div className="mr-2">Filter By Name: </div>
        <input
          type="text"
          name="title-filter"
          className="border-2 rounded mr-2"
          onChange={(e) => setFilter(e.target.value)}
        />
        <div>{filteredResults.length == 0 ? "Showing All" : `${filteredResults.length} Found`}</div>
      </div>
      {filteredResults.length > 0 ? filteredResults.map((item, index) =>
        <Result key={index} result={item}/>
      ) : props.results.map((item, index) => (
        <Result key={index} result={item}/>
      ))}
    </div>
  )
}