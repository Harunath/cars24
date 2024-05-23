import Image from "next/image";
import card1 from "@/../../public/images/homeCardImgs/card1.webp";
import card1Car from "@/../../public/images/homeCardImgs/card1Car.webp";
import HomeCard from "@/app/components/Home/HomeCard";

function TopHomeCards() {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  h-fit px-8 mt-10">
			<HomeCard image={card1}>
				<div className="flex flex-col z-10 text-white h-full p-4">
					<div className="flex">
						<div>
							<p className=" text-xl font-[900]">Need A Car Loan?</p>
							<p className=" text-lg">
								Answer a few questions to check EMI offers
							</p>
						</div>
						<Image src={card1Car} alt={"car"} />
					</div>
					<div className=" flex justify-between mt-4">
						<div>
							<div className=" flex basis-0">
								<span className="h-fit">₹</span>
								<span className=" text-2xl">0</span>
							</div>
							<p className=" text-sm font-bold">Down payment</p>
							<p className=" text-[0.5rem] font-extralight">T&C applied</p>
						</div>
						<div>
							<p className=" text-2xl">
								12<span className=" text-base">%</span>
							</p>
							<p className=" text-sm font-bold">Intrest rate</p>
						</div>
						<div>
							<p className=" text-2xl">72</p>
							<p className=" text-sm font-bold">Months EMI</p>
						</div>
					</div>
					<div className="mt-auto">
						<button className="text-black font-semibold bg-white rounded-xl py-2 px-6">
							CHECK ELIGIBILITY
						</button>
					</div>
				</div>
			</HomeCard>
			<HomeCard image={card1}>
				<div className="flex flex-col  z-10 text-black h-full p-4 bg-red-200">
					<div className=" mt-5">
						<p className=" text-orange-600 text-4xl font-extrabold">
							Your next car
						</p>
						<p className=" text-orange-600 text-4xl font-bold">
							now costs less
						</p>
					</div>
					<div className=" mt-4">
						<p>
							<span className=" font-semibold">10,000+ cars</span> to choose
							from.
						</p>
						<p>Which one are your taking home?</p>
					</div>
					<div className=" mt-auto">
						<button className="text-black font-bold bg-white rounded-xl py-2 px-6">
							EXPLORE NOW
						</button>
					</div>
				</div>
			</HomeCard>
			<HomeCard image={card1}>
				<div className="flex flex-col z-10 text-white h-full bg-slate-400 p-4 pt-8">
					<div className="flex">
						<div>
							<p className=" text-xl font-bold">Bored of your current car?</p>
							<p className=" text-xl font-bold">Upgrade now for just</p>
							<p className=" text-orange-700 text-xl font-bold">₹6,000/month</p>
						</div>
					</div>
					<div className=" mt-auto">
						<button className="text-black font-bold bg-white rounded-xl py-2 px-6">
							UPGRADE NOW
						</button>
					</div>
				</div>
			</HomeCard>
		</div>
	);
}

export default TopHomeCards;
