'use strict'
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        surname:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
           // default:1,
        },
        // gender: {
        //     type: String,
        //     enum: ["male", "female"]
        // },
        email:{
            type: String,
            required: true
        },
        // phone:{
        //     type: String
        // },
        // province:{
        //     type: String
        // },
        password:{
            type: String,
            required: true
        },
        isPublic:{
            type: Boolean,
            default: false, 
        },
       
        created:{
            type: Date,
            default: Date.now,
        }
    }
);
const User = mongoose.model('User', userSchema);

export default User;