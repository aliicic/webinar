// const { ref } = require("@hapi/joi/lib/compile");
const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    username: { type: String, lowercase: true },
    // token : { type : String, default: "" },
    mobile : {type : String, required : true, unique: true},
    email : {type : String, lowercase : true},
    password : {type : String},

}, {
    timestamps : true,
    toJSON : {
        virtuals : true
    }
});
module.exports = {
    UserModel : mongoose.model("user", UserSchema)
}