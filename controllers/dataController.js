const Pokemon =require('../models/pokemon')

const dataController = {
    index ( req, res, next){
        Pokemon.find({}, (err,foundPokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            }
            else{
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    },
    destroy(req, res, next){
        Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon)=>{
            if(err){
                res.status(400).send({
                    mgs:err.message
                })
            }else{
                res.locals.data.fruit = deletedPokemon
                next()
            }
        })
    },
    update(req, res, next){
        Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPokemon)=>{
            if(err){
                res.status(400).send({
                    mgs:err.message
                })
            }
            else{
                res.locals.data.pokemon = updatedPokemon
                next()
            }
        })

    },
    create ( req, res, next){
        Pokemon.create(req.body, (err, createdPokemon)=>{
            if(err){
                res.status(400).send({
                    msg:err.message
                })
            }
            else{
                res.locals.data.pokemon = createdPokemon
                next()
            }
        })
    },
    //edit&show
    show ( req, res, next){
        Pokemon.findById(req.params.id, (err, foundPokemon)=>{
            if(err){
                res.status(400).send({
                    mgs:err.message,
                    output:'could not find pokemon with that ID'
                })
            }else{
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    }
}

module.exports = dataController