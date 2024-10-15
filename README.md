# Event Search

### Abstract

Build an application that does the following
1. Asks users 3-5 questions about their interests.
2. Uses their answers to execute a search using a 3rd party event API.
3. Renders the results of that search in a table view.

### Introduction

To put together this POC there were a few key decisions to make early. In the interest of time I decided to use the 
`create-react-app` boilerplate with Typescript. Additionally, to minimize the custom CSS for this work I have 
implemented basic Tailwind CSS components for styling.

**IMPORTANT** - I wanted to choose a relatively standard API library, so within this implementation you will see I call the Google SERP 
API. Due to CORS issues with hitting this API from `localhost`, and to avoid building a Node.js proxy server for these 
requests, there is a nice little Chrome extension that will bypass these CORS issues for the sake of this POC. Here is a 
link if you don't already have something similar:

[Cors Control Chrome Extension](https://chromewebstore.google.com/detail/moesif-origincors-changer/digfbfaphojjndkpccljibejjbppifbc)

With those basic assumptions made, began the implementation. Starting from `index.tsx`, you will see an implementation 
of an `ErrorBoundary`for all runtime errors to be surfaced.

```js
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

Moving into the `App` component you will see how a questionnaire can be organized from a set of pre-built questions:

```js
const [questionnaire, setQuestionnaire] = useState<ActiveQuestion[]>([
  {id: 1, question: question4},
  {id: 2, question: question2},
  {id: 3, question: question1},
  {id: 4, question: question3},
])
```

Just a couple other things to note in the `App.tsx`

1. We load environment variables from a `.env` file. (Which has only been committed to save time reviewing the POC)
2. A `BaseTemplate` component wraps everything on this page, with the ability to pass it navigation components.
3. The execution of the Event API happens within `App.tsx`

Moving to the `Questionnaire.tsx` component. You will see how the questions are presented, and changes to the state will
be stored in `localStorage` upon hitting "Show Results". This allows those previously input answers to be surfaced on
page load. You will also see that you can re-order the questions from `App.tsx` and that will determine the order to
which they are presented to the user.

When "Show Results" is clicked, and the API request is made, all results will be loaded into the `Results.tsx` component.
There is basic filtering here based on event name, which will update the results with each keypress. If no results are 
found, the UI will show all results for the query with a message saying "Showing All".

### Testing Strategy

When building a test plan for an application like this I would bucket them into 3 groups:

1. Happy Path - Ensure All Components work correctly when loaded
2. Variants - Any distinct UI based on state or conditions should be tested against those conditions
3. Error Handling - All exception scenarios and failure points should be verified to fail gracefully, and alter as
necessary.

We would mock all API responses and verify all UI and state updates correctly based on those responses. 

I have added an example test which uses `msw` to mock the API response and verify the browser updates correctly. Prior 
to ever pushing this live, more test would be added to get the overall coverage to about ~85%.


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**



