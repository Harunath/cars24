"use client";
import React, { useState } from "react";
import axios from "axios";

function Sell() {
	const [car, setCar] = useState({
		carNumber: "",
		carName: "",
		brand: "",
		price: "",
	});
	const saveCar = async () => {
		let newCar = await axios.post("/api/buy/buyFomUs", car);
	};
	return (
		<div>
			<div className="flex justify-center items-center absolute top-0 left-0 h-screen w-screen bg-opacity-70 bg-black">
				<div className=" relative bg-white p-8 rounded shadow-md w-80">
					{/* <div
						className=" absolute -top-6 -right-6 rounded-full opacity-50 hover:opacity-100"
						onClick={() => setSignup(false)}>
						<svg
							className="text-white"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path
								fill="white"
								d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z"
							/>
						</svg>
					</div> */}
					<h2 className="text-2xl font-semibold mb-4">Register a car</h2>
					<div>
						<div className="mb-4">
							<label htmlFor="brand" className="block text-gray-600">
								Car Brand
							</label>
							<input
								type="text"
								id="brand"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="name" className="block text-gray-600">
								Car name
							</label>
							<input
								type="text"
								id="name"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="number" className="block text-gray-600">
								Car number
							</label>
							<input
								type="number"
								id="number"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>

						<div className="mb-4">
							<label htmlFor="price" className="block text-gray-600">
								Car Price
							</label>
							<input
								type="number"
								id="price"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<button
							type="submit"
							className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
							onClick={saveCar}>
							Register car
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sell;
