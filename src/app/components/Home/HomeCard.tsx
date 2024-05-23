import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface HomeCardProps {
	children: ReactNode;
	image?: string | StaticImageData;
}

const HomeCard: React.FC<HomeCardProps> = ({ children, image }) => {
	return (
		<div
			className={
				" relative h-1/2 min-h-[280px] min-w-[360px] border shadow-lg rounded-xl overflow-hidden"
			}>
			{image ? <Image src={image} className=" absolute -z-10" alt="bg" /> : ""}
			{children}
		</div>
	);
};

export default HomeCard;
