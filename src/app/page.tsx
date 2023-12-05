import Image from "next/image";
import car from "../../public/images/carbg.png";
import brands from "../../public/carBrands";

export default function Home() {
	return (
		<main className="h-full">
			<div className="h-2/3 relative">
				<Image
					className=" absolute z-10 top-0 h-full w-full"
					height={2000}
					width={2000}
					src={car}
					alt="img"
				/>
				<div className=" relative z-20 flex flex-col justify-center h-full pl-[calc(10%)]">
					<p className=" font-bold text-white text-3xl ">Certified cars with</p>
					<p className="font-bold text-white text-5xl">12-month Warranty</p>
					<div className="relative w-1/2 mt-10">
						<div className="flex flex-col items-center justify-center">
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
						</div>
						<input
							type="text"
							placeholder="Search for your favorite cars"
							className="w-full py-2 pr-10 pl-4 border rounded-full focus:outline-none focus:ring focus:border-blue-500"
						/>
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
						</div>
					</div>
				</div>
			</div>
			<div className="h-full bg-gradient-to-bl from-teal-500 to-white">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
					vero est recusandae reprehenderit soluta facilis voluptatum alias
					exercitationem! Placeat earum voluptatum corporis et itaque, ullam
					nulla perspiciatis assumenda molestias consectetur?
				</p>
			</div>
		</main>
	);
}
