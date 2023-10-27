// src/CitySelector.js
"use client";

import React, { useState } from "react";

const cities = [
	"Mumbai",
	"Delhi",
	"Bangalore",
	"Kolkata",
	"Chennai",
	"Hyderabad",
	"Pune",
	"Ahmedabad",
	"Jaipur",
	"Lucknow",
	"Chandigarh",
	"Bhopal",
];

function CitySelector() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedCity, setSelectedCity] = useState("");

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleCitySelect = (city: any) => {
		setSelectedCity(city);
		toggleDropdown();
	};

	const downArrow = () => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24">
				<path d="M12 14.172l-4.293-4.293-1.414 1.414L12 16l5.707-5.707-1.414-1.414z" />
			</svg>
		);
	};

	const upArrow = () => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24">
				<path d="M12 14.172l-4.293-4.293-1.414 1.414L12 16l5.707-5.707-1.414-1.414z" />
			</svg>
		);
	};

	return (
		<div className="relative">
			<button
				onClick={toggleDropdown}
				className="w-64 flex items-center bg-white border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500">
				{selectedCity || "Select a City"}
				<span className="absolute right-2 top-2 pointer-events-none">
					{isOpen ? upArrow() : downArrow()}
				</span>
			</button>
			{isOpen && (
				<div className="absolute z-10 w-64 mt-2 p-2 bg-white border border-gray-300 rounded-md shadow-lg">
					<div className="grid grid-cols-2 gap-2">
						{cities.map((city) => (
							<div
								key={city}
								onClick={() => handleCitySelect(city)}
								className="cursor-pointer p-2 hover:bg-blue-100 rounded-md">
								{city}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default CitySelector;
