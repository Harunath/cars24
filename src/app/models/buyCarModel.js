import mongoose from "mongoose";

const buyCarSchema = new mongoose.Schema({
	carNumber: {
		type: String,
		required: [true, "please provide a username"],
		unique: true,
	},
	carName: {
		type: String,
		required: [true, "please provide a username"],
	},
	brand: {
		type: String,
		required: [true, "please provide a username"],
	},
	price: {
		type: Number,
		required: [true, "please provide a username"],
	},
});

const buyCar = mongoose.model.users || mongoose.model("buyCar", userSchema);

export default buyCar;
