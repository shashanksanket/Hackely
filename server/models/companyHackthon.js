import mongoose from "mongoose";

const companyHackthonSchema = new mongoose.Schema({
    hackthonname : {
        type : String,
        required : true
    },

    htdesc : {
        type : String,
        required : true
    },

    htregisstartdate : {
        type : String,
        required : true
    },

    htregisenddate : {
        type : String,
        required : true
    },

    htstartdate : {
        type : String,
        required : true
    },

    prizes : {
        type : String,
        default : "0"
    },

    problemStatement : {
        type : String,
        required : true
    },

    registeredStudents : {
        type : Array,
        default : []
    }
})

const companyHackthonModel = new mongoose.model("companyHackthon", companyHackthonSchema);

export default companyHackthonModel;