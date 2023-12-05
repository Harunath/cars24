import buyCar from "../../../models/buyCarModel";
import connect from "../../../dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
	try {
		const { carNumber, carName, brand, price } = await request.json();

		let car = await buyCar.findOne({ carNumber });
		if (car)
			return NextResponse.json({ msg: "Car already exist" }, { status: 401 });
		const newCar = new buyCar({
			carNumber,
			carName,
			brand,
			price,
		});
		car = await newCar.save({ carNumber, carName, brand, price });
	} catch (error) {
		return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
	}
}
