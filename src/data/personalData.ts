export const dailyData = [
	{
		date: "1/17/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 215,
		reread: false,
	},
	{
		date: "1/18/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 215,
		reread: false,
	},
	{
		date: "1/19/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 235,
		reread: false,
	},
	{
		date: "1/20/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 240,
		reread: false,
	},
	{
		date: "1/21/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 240,
		reread: false,
	},
	{
		date: "1/22/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 338,
		reread: false,
	},
	{
		date: "1/23/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 372,
		reread: false,
	},
	{
		date: "1/24/2024",
		bookId: "484bed5d-90f2-4600-b447-459ab78970b6",
		pageNumber: 405,
		reread: false,
	},
	{
		date: "1/25/2024",
		bookId: "c89aebd5-d89c-4d0f-8430-ad04cd93e517",
		pageNumber: 14,
		reread: false,
	},
	{
		date: "1/26/2024",
		bookId: "c89aebd5-d89c-4d0f-8430-ad04cd93e517",
		pageNumber: 14,
		reread: false,
	}
];

export const GoalPagesPerDay = [
	{
		bookOrSeriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		goalPagesPerDay: 25,
	},
	{
		bookOrSeriesId: "7ec7fdbf-5b71-43ed-ac5a-4dfa7e98cb57",
		goalPagesPerDay: 20,
	},
	{
		bookOrSeriesId: "484bed5d-90f2-4600-b447-459ab78970b6",
		goalPagesPerDay: 20,
	},
	{
		bookOrSeriesId: "c89aebd5-d89c-4d0f-8430-ad04cd93e517",
		goalPagesPerDay: 23,
	},
	{
		bookOrSeriesId: "d1351e32-8ad8-4d1d-96fe-2f4de2d123ac",
		goalPagesPerDay: 23,
	},
	{
		bookOrSeriesId: "a9583c65-f983-4ac4-9cc4-c7940e76b99e",
		goalPagesPerDay: 26,
	},
	{
		bookOrSeriesId: "282bd5a9-7618-4149-9d1d-f008e0f6010d",
		goalPagesPerDay: 23,
	},
	{
		bookOrSeriesId: "b8ad5cfe-7ddf-40ab-a205-0d7e4d95ad19",
		goalPagesPerDay: 23,
	},
	{
		bookOrSeriesId: "a8d0c8d5-2dd1-45f6-a1c0-c404e4b8c4e0",
		goalPagesPerDay: 23,
	},
	{
		bookOrSeriesId: "56e0720c-5d6f-451a-8636-2bd67e8ddec8",
		goalPagesPerDay: 23,
	},
	{
		bookOrSeriesId: "02b300da-179c-465c-8983-dfd1f1e974b1",
		goalPagesPerDay: 23,
	},
	{
		bookOrSeriesId: "50943c7b-c48d-49fb-a08f-9847c71e76f8",
		goalPagesPerDay: 23,
	},
];

export interface iToReadList {
	bookOrSeriesId: string;
	isSeries: boolean;
	onBook: number | null;
	startDate: string | null;
	order: number;
}


export const ToReadList: iToReadList[] = [
	{
		bookOrSeriesId: "5a7635b6-563b-4452-a65c-1b5c28988bee",
		isSeries: true,
		onBook: 2,
		startDate: "1/10/2024",
		order: 1
	},
	{
		bookOrSeriesId: "7ec7fdbf-5b71-43ed-ac5a-4dfa7e98cb57",
		isSeries: true,
		onBook: null,
		startDate: null,
		order: 2
	},
	// {
	// 	bookOrSeriesId: "544fa2c9-332e-4d5d-a85f-4c58b9cfb453",
	// 	isSeries: false,
	// 	onBook: null,
	// 	startDate: null,
	// 	order: 3
	// }
];