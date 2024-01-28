import { books, authors } from "../../data/bookData";
import {
  makeAuthorName,
  getDaysInMonth,
  makeSingleBookPlan,
  getBookDataFromBookId,
  getAuthorDataFromAuthorId,
  getMonthName,
} from "../../utils";
import { dailyData } from "../../data/personalData";
import * as S from "./index.styled";

interface iBookPlan {
  bookId: string;
  date: string;
  goalPage: number;
}

interface CalendarProps {
  month: number;
  year: number;
  bookPlan: iBookPlan[];
}

const Calendar = (props: CalendarProps) => {
  const { month, year, bookPlan } = props;

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOffset = new Date(year, month, 1).getDay();

  const dayCells = [];
  for (let i = 0; i < daysInMonth; i++) {
    const date = i + 1;
    const fullDate = `${month + 1}/${date}/${year}`;
    const dateInBookPlan = bookPlan.find(
      (dayInPlan) => dayInPlan.date === fullDate
    );

    const goalBookTitle = dateInBookPlan
      ? getBookDataFromBookId(dateInBookPlan?.bookId).title
      : "";
    const goalBookTitleAbbrev = dateInBookPlan
      ? getBookDataFromBookId(dateInBookPlan?.bookId).abbrev
      : "";
    const goalPageText =
      dateInBookPlan && dateInBookPlan.goalPage !== 4000000
        ? `pg. ${dateInBookPlan?.goalPage}`
        : "Finish book";

    const dayData = dailyData.find((data) => data.date === fullDate);
    const actualBookTitle = dayData
      ? getBookDataFromBookId(dayData?.bookId).title
      : "";
    const actualBookTitleAbbrev = dayData
      ? getBookDataFromBookId(dayData?.bookId).abbrev
      : "";
    const hasMetPageGoal =
      dayData && dateInBookPlan
        ? dayData?.pageNumber >= dateInBookPlan?.goalPage
        : undefined;

    const rainbowColor = i % 8;

    dayCells.push(
      <S.DayCell
        className={i === 0 ? "first-day" : ""}
        firstDayOffset={firstDayOffset}
      >
        <S.CellDate day={rainbowColor}>{date}</S.CellDate>
        {dateInBookPlan && (
          <>
            <S.CellSubheadAndData>
              <div>Goal:</div>
              <div>
                {goalBookTitleAbbrev}, {goalPageText}
              </div>
            </S.CellSubheadAndData>
            {dayData && (
              <S.CellSubheadAndData>
                <div>Actual:</div>
                <S.ActualData metGoal={hasMetPageGoal}>
                  {actualBookTitle}, {dayData.pageNumber}<S.Emoji metGoal={hasMetPageGoal} />
                </S.ActualData>
              </S.CellSubheadAndData>
            )}
          </>
        )}
      </S.DayCell>
    );
  }

  return (
    <>
      <div>{getMonthName(month)}</div>
      <S.Wrapper>
        <S.Cell>Monday</S.Cell>
        <S.Cell>Tuesday</S.Cell>
        <S.Cell>Wednesday</S.Cell>
        <S.Cell>Thursday</S.Cell>
        <S.Cell>Friday</S.Cell>
        <S.Cell>Saturday</S.Cell>
        <S.Cell>Sunday</S.Cell>

        {dayCells}
      </S.Wrapper>
    </>
  );
};

export default Calendar;
