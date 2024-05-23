import React from "react";
import WhyBuyCard from "./WhyBuyCard";

const WhyBuy = () => {
	return (
		<div className=" mt-5 px-10">
			<p className=" text-2xl font-bold mt-5">Why buy from us?</p>
			<div className=" mt-5">
				<WhyBuyCard imageSrc={""} title="" description="" buttonText="" />
			</div>
		</div>
	);
};

export default WhyBuy;
