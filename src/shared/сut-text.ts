export const cutText = (text: string, limit: number): string => {
	const startIdx = 0;
	return text.length > limit ? text.slice(startIdx, limit).concat("...") : text;
};
