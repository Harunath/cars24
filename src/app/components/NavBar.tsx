// components/Navbar.tsx
"use client";

import Link from "next/link";
import CitySelector from "./CitySelector";
import { useState } from "react";

function Navbar() {
	const [login, setLogin] = useState(false);
	const [signup, setSignup] = useState(false);
	const openLogin = () => {
		return (
			<div className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-screen bg-opacity-70 bg-black">
				<div className=" relative bg-white p-8 rounded shadow-md shadow-black w-80">
					<div
						className=" absolute -top-6 -right-6 rounded-full opacity-50 hover:opacity-100"
						onClick={() => setLogin(false)}>
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
					</div>
					<h2 className="text-2xl font-semibold mb-4">Login</h2>
					<form>
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-600">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="password" className="block text-gray-600">
								Password
							</label>
							<input
								type="password"
								id="password"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<button
							type="submit"
							className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
							Login
						</button>
					</form>
					<div className="mt-4 text-center">
						<p>
							{" "}
							Dont have an account?{" "}
							<span
								onClick={() => {
									setLogin(false);
									setSignup(true);
								}}
								className="text-blue-500">
								Sign up
							</span>
						</p>
					</div>
				</div>
			</div>
		);
	};
	const openSignup = () => {
		return (
			<div className="flex justify-center items-center absolute top-0 left-0 h-screen w-screen bg-opacity-70 bg-black">
				<div className=" relative bg-white p-8 rounded shadow-md w-80">
					<div
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
					</div>
					<h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
					<form>
						<div className="mb-4">
							<label htmlFor="name" className="block text-gray-600">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-600">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="password" className="block text-gray-600">
								Password
							</label>
							<input
								type="password"
								id="password"
								className="w-full px-3 py-2 border rounded"
							/>
						</div>
						<button
							type="submit"
							className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
							Sign Up
						</button>
					</form>
					<div className="mt-4 text-center">
						<p>
							Already have an account?{" "}
							<span
								onClick={() => {
									setLogin(true);
									setSignup(false);
								}}
								className="text-blue-500">
								Login
							</span>
						</p>
					</div>
				</div>
			</div>
		);
	};
	return (
		<nav className=" absolute z-50 top-0 p-4 w-full h-[74px] bg-white bg-opacity-80">
			<div className="flex items-center gap-x-4">
				<Link href="/">
					<div className=" text-2xl font-semibold">App Logo</div>
				</Link>
				<CitySelector />
				<Link href="/buy">
					<p className=" hover:underline font-semibold">Buy Used Car</p>
				</Link>
				<Link href="/sell">
					<p className=" hover:underline font-semibold">Sell Used Car</p>
				</Link>
				<div className="grow shrink" />
				<div
					onClick={() => {
						signup
							? () => {
									setSignup(false);
									setLogin(true);
							  }
							: setLogin(true);
					}}>
					<p className=" hover:underline">Login</p>
				</div>
			</div>
			{/* login */}
			{login && openLogin()}
			{/* signup */}
			{signup && openSignup()}
		</nav>
	);
}

export default Navbar;
