import { useState } from "react";

export const useDebounce = (dealy: number) => {
	const [tyoeTimemout, setTypeTimeout] = useState<NodeJS.Timeout | null>(null);

	const debounce = (...args: Function[]) => {
		clearTimeout(tyoeTimemout as NodeJS.Timeout);

		const timeout = setTimeout(() => args.map((fn) => fn()), dealy);

		setTypeTimeout(timeout);
	};

	return debounce;
};
