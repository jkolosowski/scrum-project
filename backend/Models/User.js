const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    role: {
        type: String,
        required: [true, "Role is required!"],
        validate: {
            validator: function (v) {
                return v === "admin" || v === "user";
            },
        },
    },
    firstName: {
        type: String,
        required: [true, "First name is required!"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
    },
    admin_id: {
        type: String,
        validate: {
            validator: function (v) {
                return this.role === "admin";
            },
        },
        unique: true,
        match: /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/ // uuidv4 format
    },
    pesel: {
        type: String,
        required: [true, "PESEL number is required!"],
        match: /^[0-9]{11}$/, // Only digits and 11 length
        unique: true
    },
    password: {
        type: String,
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/ // At least 1 lowercase, 1 uppercase, 1 digit, 1 special character, min 8 length
    }
});

module.exports = model("User", userSchema);
