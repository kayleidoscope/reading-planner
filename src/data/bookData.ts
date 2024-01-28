export interface iBooksItem {
  title: string;
	abbrev: string;
  bookId: string;
  authorId: string;
  allegedPages: number;
  actualPages: number | undefined;
	pubDate?: string;
  isbn: string | undefined;
	seriesId: string;
	seriesNum: number;
}

//TODO: add check that no two isbn is the same

export const books: iBooksItem[] = [
	{
		title: "Throne of Glass",
		abbrev: "TOG",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 432,
		actualPages: 404,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 1
	},
	{
		title: "Crown of Midnight",
		abbrev: "COM",
		bookId: "c89aebd5-d89c-4d0f-8430-ad04cd93e517",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 448,
		actualPages: 418,
		pubDate: undefined,
		isbn: "978-1-63973-097-1",
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 2
	},
	{
		title: "The Assassin's Blade",
		abbrev: "TAB",
		bookId: "d1351e32-8ad8-4d1d-96fe-2f4de2d123ac",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 464,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 3
	},
	{
		title: "Heir of Fire",
		abbrev: "HOF",
		bookId: "a9583c65-f983-4ac4-9cc4-c7940e76b99e",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 592,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 4
	},
	{
		title: "Queen of Shadows",
		abbrev: "QOS",
		bookId: "282bd5a9-7618-4149-9d1d-f008e0f6010d",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 672,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 5
	},
	{
		title: "Empire of Storms",
		abbrev: "EOS",
		bookId: "b8ad5cfe-7ddf-40ab-a205-0d7e4d95ad19",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 720,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 6
	},
	{
		title: "Tower of Dawn",
		abbrev: "TOD",
		bookId: "a8d0c8d5-2dd1-45f6-a1c0-c404e4b8c4e0",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 688,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 7
	},
	{
		title: "Kingdom of Ash",
		abbrev: "KOA",
		bookId: "56e0720c-5d6f-451a-8636-2bd67e8ddec8",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 992,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		seriesNum: 8
	},
	{
		title: "Crescent City",
		abbrev: "CC",
		bookId: "02b300da-179c-465c-8983-dfd1f1e974b1",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 816,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "7ec7fdbf-5b71-43ed-ac5a-4dfa7e98cb57",
		seriesNum: 1
	},
	{
		title: "House of Sky and Breath",
		abbrev: "HOSAB",
		bookId: "50943c7b-c48d-49fb-a08f-9847c71e76f8",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 768,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "7ec7fdbf-5b71-43ed-ac5a-4dfa7e98cb57",
		seriesNum: 2
	},
	{
		title: "House of Flame and Shadow",
		abbrev: "HOFAS",
		bookId: "4b770dad-96a7-4b37-a636-977af7818a0a",
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
		allegedPages: 848,
		actualPages: undefined,
		pubDate: undefined,
		isbn: undefined,
		seriesId: "7ec7fdbf-5b71-43ed-ac5a-4dfa7e98cb57",
		seriesNum: 3
	},
	// {
	// 	title: "FAKE BOOK",
	// 	bookId: "544fa2c9-332e-4d5d-a85f-4c58b9cfb453",
	// 	authorId: "306dacab-178f-43ff-a547-381ffbaa24a8",
	// 	allegedPages: 104,
	// 	actualPages: undefined,
	// 	pubDate: undefined,
	// 	isbn: undefined,
	// 	seriesId: "",
	// 	seriesNum: 0
	// },
];

export interface iAuthorItem {
  name: {
		first?: string | null;
		middle?: string;
		last?: string
	},
	authorId: string;
}

export const authors: iAuthorItem[] = [
	{
		name: {
			first: "Sarah",
			middle: "J.",
			last: "Maas"
		},
		authorId: "306dacab-178f-43ff-a547-381ffbaa24a8"
	}
];

interface iSeriesItem {
	title: string;
	abbrev: string;
	length: number;
	isComplete: boolean;
	seriesId: string;
}

export const series: iSeriesItem[] = [
	{
		title: "ACOTAR",
		abbrev: "ACOTAR",
		length: 5,
		isComplete: false,
		seriesId: "bc5c56fc-3fbb-4c04-a131-9d1e37dafc75"
	},
	{
		title: "Throne of Glass",
		abbrev: "TOG",
		length: 8,
		isComplete: true,
		seriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee"
	},
	{
		title: "Crescent City",
		abbrev: "CC",
		length: 3,
		isComplete: false,
		seriesId: "7ec7fdbf-5b71-43ed-ac5a-4dfa7e98cb57"
	}
];