'use strict'
import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        created:{
            type: Date,
            default: Date.now,
        },
        users: [{ type: Schema.Types.ObjectId, ref:'User' }]
    }
);
const Student = mongoose.model('Student', studentSchema);

export default Student;