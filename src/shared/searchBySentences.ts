import { cutText } from "./сut-text";

export const searchBySentences = (data: Article[], serach: string[]) => {
	const secondaryOrder: Article[] = [];

	const regex = new RegExp(
		serach.map((word) => `(?=.*${word})`).join("|"),
		"ig"
	);

	const primaryOrder = data?.filter((item) => {
		const cuttedSummary = cutText(item.summary, 100);
		!item.newsSite.match(regex) &&
			cuttedSummary.match(regex) &&
			secondaryOrder.push(item);

		return item.newsSite.match(regex);
	});

	return primaryOrder.concat(secondaryOrder);
};
