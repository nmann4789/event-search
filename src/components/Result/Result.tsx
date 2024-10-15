import {EventResult} from "../../types";

interface ResultProps {
  result: EventResult
}
export default function Result(props: ResultProps) {
  return (
    <div className="flex flex mb-2 pb-2">
      <div className="mr-2 min-w-36">
        <img src={props.result.thumbnail} className="min-w-36"/>
      </div>
      <div>
        <div className=""><a href={props.result.link} target="_blank"
                             className="text-lg font-semibold text-blue-500 hover:text-blue-700">{props.result.title}</a>
        </div>
        <div className="mb-2 text-slate-600">{props.result.address.join(", ")}</div>
        <div className="font-medium	mb-1">{props.result.date.when}</div>
        <div className=""><a className="underline text-blue-500 hover:text-blue-700"
                             href={props.result.ticket_info[0].link}>Tickets</a></div>
      </div>
    </div>
  )
}