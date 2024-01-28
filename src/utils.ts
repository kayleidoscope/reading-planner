import {
  books,
  authors,
  iAuthorItem,
  iBooksItem,
  series,
} from "../src/data/bookData";
import { iToReadList, ToReadList, GoalPagesPerDay } from "./data/personalData";
import { monthNames } from "./assets/en-us";

//
//TIME UTILS
//

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getTomorrow = (today: Date) => {
  const todayDate = today;
  return new Date(todayDate.setDate(todayDate.getDate() + 1));
};

export const getMonthName = (month: number) => {
  return monthNames[month];
};

//
//AUTHOR UTILS
//

export const makeAuthorName = (author: iAuthorItem | undefined) => {
  const firstName = author?.name?.first ?? "";
  const middleName = author?.name?.middle ?? "";
  const lastName = author?.name?.last ?? "";

  return `${firstName} ${middleName} ${lastName}`;
};

export const getAuthorDataFromAuthorId = (authorId: string) => {
  return authors.find((author) => author.authorId === authorId);
};

//
//BOOK UTILS
//

export const getBookDataFromBookId = (bookId: string) => {
  const data = books.find((book) => book.bookId === bookId);
  return data ?? 	{
		title: "FAKE BOOK",
    abbrev: "FOO",
		bookId: "",
		authorId: "",
		allegedPages: 0,
		actualPages: 0,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "",
		seriesNum: 0
	};
};

const getPagesInBook = (bookData: iBooksItem) => {
  return bookData.actualPages ?? bookData.allegedPages;
};

const getGoalPagesPerBook = (book: iBooksItem) => {
  const bookId = book.bookId;
  const seriesId = book.seriesId;

  const bookGoal = GoalPagesPerDay.find(
    (item) => item.bookOrSeriesId === bookId
  )?.goalPagesPerDay;
  const seriesGoal = GoalPagesPerDay.find(
    (item) => item.bookOrSeriesId === seriesId
  )?.goalPagesPerDay;

  return bookGoal ?? seriesGoal;
};

//
//BOOK PLAN UTILS
//

export const makeSingleBookPlan = (
  startPage: number,
  goalPagesPerDay: number,
  pagesInBook: number,
  startDate: string,
  bookId: string
) => {
  const bookPlan = [];
  let date = new Date(startDate);

  for (
    let i = startPage + goalPagesPerDay;
    i < pagesInBook;
    i += goalPagesPerDay
  ) {
    bookPlan.push({
      bookId: bookId,
      date: date.toLocaleDateString(),
      goalPage: i,
    });
    date = getTomorrow(date);
  }

  bookPlan.push({
    bookId: bookId,
    date: date.toLocaleDateString(),
    goalPage: 4000000,
  });
  return bookPlan;
};

export const makeMultiBookPlan = (
  toReadList: iToReadList[],
  startDateOfRead: string,
  startPageOfFirstBook: number,
  goalPagesPerBook = 25
) => {
  //put all books from To Read List in a single array, including finding individual book names for series
  const bookList = toReadList.map((item) => {
    if (item.isSeries) {
      return getBooksInSeriesFromSeriesId(item.bookOrSeriesId);
    } else {
      return getBookDataFromBookId(item.bookOrSeriesId);
    }
  });
  const books = bookList.flat();

  //make a plan for each book
  let bookStartDate = startDateOfRead;
  const bookPlan = books.map((book) => {
    const plan = makeSingleBookPlan(
      startPageOfFirstBook,
      getGoalPagesPerBook(book) ?? goalPagesPerBook,
      book?.actualPages ?? book.allegedPages,
      bookStartDate,
      book.bookId
    );
    bookStartDate = getTomorrow(
      new Date(plan[plan.length - 1].date)
    ).toString();
    return plan;
  });
  return bookPlan.flat();
};

//
//SERIES UTILS
//

export const getBooksInSeriesFromSeriesId = (seriesId: string) => {
  //TODO: Make special sorter for different reading order re: TOG

  const booksInSeries = books.filter((book) => book.seriesId === seriesId);
  booksInSeries.sort((a, b) => a.seriesNum - b.seriesNum);
  return booksInSeries;
};

const getSeriesDatafromSeriesId = (seriesId: string) => {
  return series.find((series) => series.seriesId === seriesId);
};
