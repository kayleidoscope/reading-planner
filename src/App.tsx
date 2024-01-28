import "./App.css";
import CurrentRead from "./components/CurrentRead";
import Calendar from "./components/Calendar";
import PageCalculator from "./components/PageCalculator";
import { makeSingleBookPlan, makeMultiBookPlan } from "./utils";
import { getBooksInSeriesFromSeriesId } from "./utils";
import { ToReadList } from "./data/personalData";

function App() {
  const bookPlan = makeMultiBookPlan(ToReadList, "1/17/2024", 175);
  const finalMonthInPlan = new Date(bookPlan[bookPlan.length - 1].date).getMonth();
  let currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const numberOfCalendars = (finalMonthInPlan - currentMonth) + 1;

  const calendars = [];
  for (let i = 1; i <= numberOfCalendars; i++) {
    calendars.push(<Calendar month={currentMonth} year={currentYear} bookPlan={bookPlan} />);
    currentMonth++;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>READ, KAY, READ!</h1>
        <CurrentRead />
        <PageCalculator />
        {calendars}
      </header>
    </div>
  );
}

export default App;
