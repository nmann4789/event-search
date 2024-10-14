type Question = {
  text: string;
  answer?: string;
  options?: EventType[];
}

type ActiveQuestion = {
  id: number;
  question: Question;
}

interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_events_url: string;
  raw_html_file: string;
  total_time_taken: number;
}

interface SearchParameters {
  q: string;
  engine: string;
}

interface SearchInformation {
  events_results_state: string;
}

interface EventDate {
  start_date: string;
  when: string;
}

interface TicketInfo {
  source: string;
  link: string;
  link_type: string;
}

interface Venue {
  name: string;
  rating: number;
  reviews: number;
  link: string;
}

interface EventLocationMap {
  image: string;
  link: string;
  serpapi_link: string;
}

interface EventResult {
  title: string;
  date: EventDate;
  address: string[];
  link: string;
  description: string;
  ticket_info: TicketInfo[];
  venue: Venue;
  thumbnail: string;
  event_location_map?: EventLocationMap;
}

interface GoogleEventsApiResponse {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  search_information: SearchInformation;
  events_results: EventResult[];
}

export { Question, ActiveQuestion, GoogleEventsApiResponse, EventResult }