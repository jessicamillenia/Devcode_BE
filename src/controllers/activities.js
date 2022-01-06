const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require('../models');
const Activity = db.Activity;

module.exports = {
    getAll: async function(req, res, next){
        // try {
            let data = await Activity.findAll();

            res.send({
                status: 'Success',
                message: 'Success',
                data: data
            })
        // } catch (error){
        //     res.status(400).send({
        //         status: 'Failed',
        //         message: error,
        //         data: {}
        //     })
        // }
    },
    //Course Detail - MainApp
    // getCourseById: async function(req, res, next){
    //     try {
    //         //detail card
    //         let CourseID = req.params.id;
    //         const CourseDetail = await MasterCourse.findOne({
    //             attributes: ['title','flag','cover','description'],
    //             include: [
    //                 { 
    //                     model: CourseCard,
    //                     attributes: ['card_photo', 'description'] 
    //                 },
    //                 {
    //                     model: CoursePrice,
    //                     attributes: ['category','price_per_session']
    //                 }
    //             ],
    //             where: {
    //                 id: {
    //                     [Op.eq]: CourseID
    //                 },
    //               },
    //         })
                
    //         logActivity(req, 'course', 'access');

    //         // Return result             
    //         if (CourseDetail.length==0){
    //             res.status(400).send({
    //                 status: 'failed',
    //                 message: 'No data available'
    //             })
    //         } else {
    //             res.send({
    //                 status: 'success',
    //                 message: 'Here the courses details',
    //                 data: CourseDetail
    //             })
    //         }
    //     } catch (error){
    //         res.status(400).send({
    //             status: 'failed',
    //             message: 'No data available'
    //         })
    //     }
    // }
}