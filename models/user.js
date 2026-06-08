import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    id: String,

    secret: String,

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.User ||
    mongoose.model("User", UserSchema);
    