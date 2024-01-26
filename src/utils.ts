import {iAuthorItem} from "../src/data/bookData";

export const makeAuthorName = (author: iAuthorItem | undefined) => {
  const firstName = author?.name?.first ?? "";
  const middleName = author?.name?.middle ?? "";
  const lastName = author?.name?.last ?? "";

  return `${firstName} ${middleName} ${lastName}`;
};