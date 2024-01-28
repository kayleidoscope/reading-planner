// import { books, authors } from "../../data/bookData";
// import { makeAuthorName } from "../../utils";
// import { ToRead } from "../../data/personalData";

const PageCalculator = () => {
  const startPageNumber = 14;
  const goalPagesPerDay = 25;

  return (
    <div>
      <div>What page are you on?</div>
      <div>{startPageNumber}</div>
      <div>How many page do you want to read per day?</div>
      <div>{goalPagesPerDay}</div>
      <button>Plan my read</button>
    </div>
  );
};

export default PageCalculator;