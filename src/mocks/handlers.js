import { rest } from 'msw'
import { EVENT_SEARCH_PATH } from "../constants/routes";

export const handlers = [
  rest.get(`${process.env.REACT_APP_SERP_ENDPOINT}${EVENT_SEARCH_PATH}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({"events_results":[{
        title: "World Orphan Drug Congress USA 2025",
        date: {
          start_date: "Apr 22",
          when: "Apr 22, 2025, 9 AM – Apr 24, 2025, 5 PM"
        },
        address: [
          "Boston Convention and Exhibition Center, 415 Summer St",
          "Boston, MA"
        ],
        link: "https://rareparenting.com/venue/boston-convention-exhibition-center/",
        event_location_map: {
          image: "https://www.google.com/maps/vt/data=TCyg7totMI8dX1vK1mzTDlNHvbvcAIAkjUgANZ7L2MUoV9za_ycRpCi5ssr-i84YT7zy215-lAFKVB-Xs-ZN-TH2950ijjrevFJtK-XOqyBCz38SvJE",
          link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x89e37a817c440cf5:0x2c611a8552d64981?sa=X&ved=2ahUKEwiYmqfHwo6JAxX7KlkFHW-7Jm4Q9eIBegQIARAA",
          serpapi_link: "https://serpapi.com/search.json?data=%214m2%213m1%211s0x89e37a817c440cf5%3A0x2c611a8552d64981&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Show%2CApril%2CBoston%2CDay&type=place"
        },
        description: "The World Orphan Drug Congress brings together leaders from pharmaceutical and biotech companies, government and regulatory authorities, patient advocacy groups, payers, investors, and solution...",
        ticket_info: [
          {
            source: "Terrapinn",
            link: "https://www.terrapinn.com/conference/world-orphan-drug-congress-usa/index.stm",
            link_type: "more info"
          },
          {
            source: "Rare Parenting",
            link: "https://rareparenting.com/events/2025-04-22/",
            link_type: "more info"
          }
        ],
        venue: {
          name: "Boston Convention and Exhibition Center",
          rating: 4.5,
          reviews: 6134,
          link: "https://www.google.com/search?sca_esv=1c09b98d33921ce0&q=Boston+Convention+and+Exhibition+Center&ludocid=3197866370332510593&ibp=gwp%3B0,7"
        },
        thumbnail: "https://www.google.com/maps/vt/data=TCyg7totMI8dX1vK1mzTDlNHvbvcAIAkjUgANZ7L2MUoV9za_ycRpCi5ssr-i84YT7zy215-lAFKVB-Xs-ZN-TH2950ijjrevFJtK-XOqyBCz38SvJE"
      }
    ]}))
  }),
]