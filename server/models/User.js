import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },

    lastname : {
        type : String
    },

    phoneno : {
        type : Number,
        length : 10,
        required : true
    },

    dob : {
        type: String,
        required: true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
        unique : true
    },

    companyname : {
        type : String,
    },

    studentProfile : {
        type : String,
    },

    role : {
        type : String,
        default : "student",
        required : true
    }
})

const userModel = new mongoose.model("User", userSchema);

export default userModel;