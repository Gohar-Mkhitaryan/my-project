'use strict';

    import User  from '../schema/users.js';
class UserCtrl{
    
    static async getContactController(req, res){
        const users = await User.find();
        return res.send({
           data: users
        });
    }
    static async postContactController(req, res){
        const userBody = req.body;
        console.log('userBody', userBody);
        console.log('User', User);

        const saveData = await User.create(userBody);
        return res
        .status(201)
        .send({
            data: saveData     
          });
    }
    static async deleteContactController(req, res){
        const requestQuery = req.query;
              const result = await User.deleteOne({
                _id: requestQuery._id,
              });
        if(result.deletedCount === 0){
            return res
            .status(404)
            .send({message: 'user not found'}); 
        }
        return res
        .status(204)
        .send();
    
    }
    static async putContactController(req, res){
        const requestQuery = req.query;
        const requestBody = req.body;
              const result = await User.updateOne(
                {_id: requestQuery._id},
                {name:requestBody.name, isPublic:true }
              );
        if(result.modifiedCount===0){
            return res
            .status(404)
            .send({message: 'user not found'}); 
        }
        return res
        .status(201)
        .send({message:'Data was modified'});
    }
}

export {UserCtrl};