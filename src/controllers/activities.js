const Sequelize = require("sequelize");
const db = require('../models');
const Activity = db.Activity;
const response = require('../helpers/response')

module.exports = {
    getAll: async function(req, res, next){
        await Activity.findAll({
            where: {
                deleted_at: null
            }
        }).then(data => {
            data ? response(req, res, 200, 'Success', 'Success', data) :
                response(req, res, 404, 'Not Found', 'No data available')
        }).catch(err=>{
            response(req, res, 500, "Something went wrong", err.message)
        })
    },
    getOne: async function(req, res, next){
        await Activity.findOne({
            where:{
                id: parseInt(req.params.id),
                deleted_at: null
            }
        }).then(data =>{
            data ? response(req, res, 200, 'Success', 'Success', data) :
                response(req, res, 404, 'Not Found', 'Activity with ID ' + req.params.id + ' Not Found')
        }).catch(err=>{
            response(req, res, 500, "Something went wrong", err.message)
        })
    },
    create: async function(req, res, next){
        if (!req.body.title){
            response(req, res, 400, 'Bad Request', 'title cannot be null');
        } else if (!req.body.email){
            response(req, res, 400, 'Bad Request', 'email cannot be null');
        } else {
            await Activity.create({
                email: req.body.email,
                title: req.body.title,
                created_at: new Date(),
                updated_at: new Date()
            }).then(data => {
                response(req, res, 201, 'Success', 'Success', data);
            }).catch(err=>{
                response(req, res, 500, "Something went wrong", err.message);
            })
        }
    },
    delete: async function(req, res, next){
        await Activity.update({
            deleted_at: new Date(),
        }, {
            where: {
                id: parseInt(req.params.id),
                deleted_at: null
            }
        }).then(data => {
            data[0]==1 ? response(req, res, 200, 'Success', 'Success') : response(req, res, 404, 'Not Found', 'Activity with ID ' + req.params.id + " Not Found")
        }).catch(err=>{
            response(req, res, 500, "Something went wrong", err.message);
        })
    },
    update: async function(req, res, next){
        if (!req.body.title){
            response(req, res, 400, 'Bad Request', 'title cannot be null');
        } else {
            await Activity.update({
                title: req.body.title,
                updated_at: new Date()
            }, {
                where: {
                    id: parseInt(req.params.id),
                    deleted_at: null,
                },
            }).then(data => {
                data[0]==1 ? 
                    Activity.findOne({
                        where:{
                            id: parseInt(req.params.id),
                            deleted_at: null
                        }
                    }).then(data =>{
                        data ? response(req, res, 200, 'Success', 'Success', data) :
                            response(req, res, 404, 'Not Found', 'Activity with ID ' + req.params.id + ' Not Found')
                    }).catch(err=>{
                        response(req, res, 500, "Something went wrong", err.message)
                    }) 
                : response(req, res, 404, 'Not Found', 'Activity with ID ' + req.params.id + " Not Found")
            }).catch(err=>{
                response(req, res, 500, "Something went wrong", err.message);
            })
        }
    },
}