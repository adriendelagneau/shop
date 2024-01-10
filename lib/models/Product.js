import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            minlength: 6,
            maxlength: 32,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: [String],
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            min: 0,
            required: true,
        },
        oldPrice: {
            type: Number,
            min: 0,
            required: true,
        },

    },
    { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.Product || mongoose.model("Product", productSchema);