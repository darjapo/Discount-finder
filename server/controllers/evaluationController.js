"use strict";
const evaluationModel = require("../models/evaluationModel");

const getEvaluation = async (req, res) => {
    const evaluation = await evaluationModel.getEvaluationById(res, req.params.postId);
    if (evaluation) {
        res.json(evaluation);
    } else {
        res.sendStatus(404);
    }
};

const createEvaluation = async (req, res) => { //I don't know if correct
    console.log('creating new evaluation:', req.body);
    const newEvaluation = req.body;
    const result = await evaluationModel.addEvaluation(req.user.userId, req.params.postId, newEvaluation, res);
    res.status(201).json({userId: result});
};


const deleteEvaluation = async (req, res) => {
    const result =  await evaluationModel.deleteEvaluationById(req.user.userId, req.post.postId, res);
    console.log ('user deleted', result);
    if (result.affectedRows > 0) {
        res.json({message: 'evaluation deleted'});
    } else  {
        res.status(404).json({message: 'evaluation was already deleted'});
    }
};

module.exports = {
    getEvaluation,
    createEvaluation,
    deleteEvaluation,
};
