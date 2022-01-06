const Sequelize = require("sequelize");
const db = require('../models');
const Todo = db.Todo;
const Activity = db.Activity;
const response = require('../helpers/response')

module.exports = {
    getAll: async function(req, res, next){
        const filters = {deleted_at: null, '$Activity.deleted_at$': null};
        if (req.query.activity_group_id){
            filters.activity_group_id = req.query.activity_group_id;
        } 
        await Todo.findAll({
            include: {model: Activity, attributes: []},
            where: filters
        }).then(data => {
            data.length!=0 ? response(req, res, 200, 'Success', 'Success', data) :
                response(req, res, 404, 'Not Found', 'No data available')
        }).catch(err=>{
            response(req, res, 500, "Something went wrong", err.message)
        })
    },
    getOne: async function(req, res, next){
        await Todo.findOne({
            include: {model: Activity, attributes: []},
            where:{
                id: parseInt(req.params.id),
                deleted_at: null,
                '$Activity.deleted_at$': null
            }
        }).then(data =>{
            data ? response(req, res, 200, 'Success', 'Success', data) :
                response(req, res, 404, 'Not Found', 'Todo with ID ' + req.params.id + ' Not Found')
        }).catch(err=>{
            response(req, res, 500, "Something went wrong", err.message)
        })
    },
    create: async function(req, res, next){
        if (!req.body.title){
            response(req, res, 400, 'Bad Request', 'title cannot be null');
        } else if (!req.body.activity_group_id){
            response(req, res, 400, 'Bad Request', 'activity_group_id cannot be null');
        } else {
            await Todo.create({
                activity_group_id: req.body.activity_group_id,
                title: req.body.title,
                is_active: true,
                priority: 'very-high',
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
        await Todo.update({
            deleted_at: new Date(),
        }, {
            where: {
                id: parseInt(req.params.id),
                deleted_at: null,
            }
        }).then(data => {
            data[0]==1 ? response(req, res, 200, 'Success', 'Success') : response(req, res, 404, 'Not Found', 'Todo with ID ' + req.params.id + " Not Found")
        }).catch(err=>{
            response(req, res, 500, "Something went wrong", err.message);
        })
    },
    update: async function(req, res, next){
        if (!req.body.title && req.body.is_active!=false && req.body.is_active!=true){
            response(req, res, 400, 'Bad Request', 'title or status cannot be null');
        } else {
            const updt = {updated_at: new Date()};
            if (req.body.title){
                updt.title = req.body.title;
            } 
            if (req.body.is_active == false){
                updt.is_active = '0';
            } 
            if (req.body.is_active == true){
                updt.is_active = '1';
            } 
            await Todo.update(updt, {
                where: {
                    id: parseInt(req.params.id),
                    deleted_at: null
                },
            }).then(data => {
                data[0]==1 ? 
                    Todo.findOne({
                        where:{
                            id: parseInt(req.params.id),
                            deleted_at: null
                        }
                    }).then(data =>{
                        data ? response(req, res, 200, 'Success', 'Success', data) :
                            response(req, res, 404, 'Not Found', 'Todo with ID ' + req.params.id + ' Not Found')
                    }).catch(err=>{
                        response(req, res, 500, "Something went wrong", err.message)
                    }) 
                : response(req, res, 404, 'Not Found', 'Todo with ID ' + req.params.id + " Not Found")
            }).catch(err=>{
                response(req, res, 500, "Something went wrong", err.message);
            })
        }
    },
}