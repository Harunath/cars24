import buyCar from "@/app/models/buyCarModel";
import connect from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

interface CarData {
	carNumber: string;
	carName: string;
	brand: string;
	price: number;
}

connect();

export async function POST(request: NextRequest) {
	try {
		const { carNumber, carName, brand, price }: CarData = await request.json();

		let car = await buyCar.findOne({ carNumber });
		if (car)
			return NextResponse.json({ msg: "Car already exist" }, { status: 401 });
		const newCar = new buyCar({
			carNumber,
			carName,
			brand,
			price,
		});
		car = await newCar.save();
	} catch (error) {
		return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
	}
}
