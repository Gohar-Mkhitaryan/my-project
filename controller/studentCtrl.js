'use strict';

    import Student from '../schema/students.js';
    import User from '../schema/users.js';

    class StudentCtrl{
    
    static async getOne(req, res){
        const {_id } = req.params;
        const students = ( await Student.find({ _id }).populate('users'));
        
        return res
        .status(200)
        .send({
           data: students[0],
        });
    }
    static async getMany(req, res){
        const { limit = 10, offset = 0 } = req.query;
        const students = await Student
                        .find()
                        .skip(offset)
                        .limit(limit);
        
       return res
       .status(200)
       .send({
           data: students,
        });
    }
    static async postOne(req, res){
        const { name, lastname, age, user } = req.body;
        const savedUser = await User.create({name: user.name, surname: user.surname, age: user.age, email: user.email, password: user.password })
    
         const student = await Student.create({ name, lastname, age, users: savedUser });
        return res
        .status(201)
        .send({
            data: student,     
          });
    }
    
    }

export {StudentCtrl};