import mongoose from "mongoose";

const buyCarSchema = new mongoose.Schema({
	carNumber: {
		type: String,
		required: [true, "please provide a car nunmber"],
		unique: true,
	},
	carName: {
		type: String,
		required: [true, "please provide a car name"],
	},
	brand: {
		type: String,
		required: [true, "please provide a car brand"],
	},
	price: {
		type: Number,
		required: [true, "please provide a car price"],
	},
});

const buyCar = mongoose.model("buyCar", buyCarSchema);

export default buyCar;
