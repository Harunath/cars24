"use client";
import Image from "next/image";
import car from "@/../../public/images/carbg.png";
import homeBanner2 from "@/../../public/images/homeBanner2.webp";
import homeBanner3 from "@/../../public/images/homeBanner3.webp";
import brands from "@/../../public/carBrands";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const TopSlider = () => {
	return (
		<div className="relative">
			<Splide
				options={{
					type: "loop",
					perPage: 1,
					autoplay: true,
					pauseOnHover: false,
					pauseOnFocus: false,
					interval: 3000,
					arrows: false,
				}}>
				<SplideSlide>
					<Image
						className="h-full w-full"
						height={2000}
						width={2000}
						src={car}
						alt="img"
					/>
				</SplideSlide>
				<SplideSlide>
					<Image
						className="h-full w-full"
						height={2000}
						width={2000}
						src={homeBanner2}
						alt="img"
					/>
				</SplideSlide>
				<SplideSlide>
					<Image
						className="h-full w-full"
						height={2000}
						width={2000}
						src={homeBanner3}
						alt="img"
					/>
				</SplideSlide>
			</Splide>
			<div className=" absolute z-20 top-0 flex flex-col justify-center h-full w-full pl-[calc(10%)]">
				<p className=" font-bold text-white text-3xl ">Certified cars with</p>
				<p className="font-bold text-white text-5xl">12-month Warranty</p>
				<div className="relative mt-10">
					<div className="w-1/2 relative flex items-center">
						<input
							type="text"
							placeholder="Search for your favorite cars"
							className="w-full py-2 pr-10 pl-4 border rounded-full focus:outline-none focus:ring focus:border-blue-500"
						/>
						<button
							onClick={() => console.log("clicked")}
							className=" absolute right-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M12.293 13.293a6 6 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<div className="flex mt-4 gap-x-4">
						{brands.map((item, index) => (
							<div key={index} className="p-2 bg-white w-fit rounded">
								<Image
									className="h-8 w-16"
									height={200}
									width={200}
									src={item}
									alt="brand"
								/>
							</div>
						))}
						<div className="p-4 bg-orange-600 rounded-xl my-auto">
							<p className=" font-semibold text-white text-sm text-center">
								VIEW ALL CARS
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopSlider;
