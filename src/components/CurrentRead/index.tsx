import { dailyData } from "../../data/personalData";
import { books, authors } from "../../data/bookData";
import { makeAuthorName } from "../../utils";

const CurrentRead = () => {
  const currentRead = dailyData[dailyData.length - 1];
  const currentBookId = currentRead.bookId;

  const currentBook = books.find((book) => book.bookId === currentBookId);

  const currentBookTitle = currentBook?.title;

  const currentBookAuthorId = currentBook?.authorId;
  const currentBookAuthor = authors.find(
    (author) => author.authorId === currentBookAuthorId
  );
  const currentBookAuthorName = makeAuthorName(currentBookAuthor);

  const currentPage = currentRead.pageNumber;

  return (
    <div>
      <div>Current Read</div>
      <div>
        {currentBookTitle} by {currentBookAuthorName}
      </div>
      <div>I am on page {currentPage}.</div>
    </div>
  );
};

export default CurrentRead;
