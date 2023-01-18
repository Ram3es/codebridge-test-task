import { FC, FunctionComponent, SVGProps } from "react";

import { ReactComponent as calendar } from "../../assets/img/calendar.svg";
import { ReactComponent as arrowRight } from "../../assets/img/arrow-right.svg";
import { ReactComponent as arrowLeft } from "../../assets/img/arrow-left.svg";
import { ReactComponent as search } from "../../assets/img/search.svg";
const ICONS: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
	calendar,
	arrowRight,
	arrowLeft,
	search,
};

interface IIconProps {
	type: string;
}
export const Icon: FC<IIconProps> = (props) => {
	const NewIcon = ICONS[props.type];

	if (!NewIcon) return null;

	return <NewIcon {...props} />;
};
