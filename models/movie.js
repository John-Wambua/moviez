const mongoose=require('mongoose');
const Joi=require('joi');
const {genreSchema}=require('./genre');

const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255
    },
    genre: {
        type:genreSchema,
    },
    numberInStock: {
        type:Number,
        required:true,
        min:0,
        max:255
    },
    dailyRentalRate:{
        type:Number,
        required:true,
        min:0,
        max:255
    }
});

const Movie=mongoose.model('Movie',movieSchema);

const validateMovie=movie=> {
    const schema = Joi.object({
        title: Joi.string().min(5).max(255).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate:Joi.number().min(0).required(),
    });

    return schema.validate(movie);
}


module.exports.Movie=Movie;
module.exports.validate=validateMovie;