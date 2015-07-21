var models=require('../models/models.js');

// Autoload - factoriza el codigo si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
	models.Quiz.find(quizId).then(
		function(quiz) {
			if (quiz) {
				req.quiz = quiz;
				next();				
			}
			else {next(new Error('No se ha encontrado quizId = ' + quizId));}
		}).catch(function(error) {next(error);});
};


// GET /quizes/question
exports.show = function(req, res) {
	res.render('quizes/show',{quiz:req.quiz});
};
//exports.question = function(req, res) {
//	models.Quiz.findAll().success(function(quiz) {
//		res.render('quizes/question',{pregunta:quiz[0].pregunta});	
//	})
//};


// GET /quizes/answer
exports.answer = function(req, res) {
	var resultado = "Incorrecto";
	if (req.query.respuesta === req.quiz.respuesta)	{
		resultado = "Correcto";
	}
	res.render('quizes/answer',{quiz:req.quiz, respuesta: resultado});
};
//exports.answer = function(req, res) {
//	models.Quiz.findAll().success(function(quiz) {
//	if (req.query.respuesta === quiz[0].respuesta)	{
//		res.render('quizes/answer',{respuesta:'Correcto'});
//	}
//	else
//	{
//		res.render('quizes/answer',{respuesta:'Incorrecto'});	
//	}
//})
//};

// GET /quizes
exports.index = function(req,res) {
	models.Quiz.findAll().then(function(quizes) {
		res.render('quizes/index.ejs',{quizes:quizes});
	}).catch(function(error) {next(error); })
};

