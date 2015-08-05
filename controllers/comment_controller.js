var models=require('../models/models.js');

// Autoload - factoriza el codigo si ruta incluye :quizId
//exports.load = function(req, res, next, quizId) {
//	models.Quiz.find(quizId).then(
//		function(quiz) {
//			if (quiz) {
//				req.quiz = quiz;
//				next();				
//			}
//			else {next(new Error('No se ha encontrado quizId = ' + quizId));}
//		}).catch(function(error) {next(error);});
//};


// GET /quizes/question
//exports.show = function(req, res) {
//	res.render('quizes/show',{quiz:req.quiz, errors: []});
//};
//exports.question = function(req, res) {
//	models.Quiz.findAll().success(function(quiz) {
//		res.render('quizes/question',{pregunta:quiz[0].pregunta});	
//	})
//};


// exports.index = function(req, res, next) {

// 	var search = (req.query.search || "");
// 	var searchTrue = search;

// 	if (search === "")  // si no hay pregunta o viene en blanco, sacamos la lista completa. Es como buscar con %
// 	{
// 		models.Quiz.findAll().then(function(quizes) {
// 			res.render('quizes/index.ejs',{quizes:quizes, errors: []});
// 		}).catch(function(error) {next(error); })
// 	}
// 	else
// 	{
// 		search = '%' + search.replace(/\s/g,'%') + '%';
// 		models.Quiz.findAll({
// 			where: {
// 				pregunta: {
// 					like: search
// 				}
// 			},
// 			order: [['pregunta','ASC']]
// 		}).then(function(quizes) {
// 			if (quizes.length === 0) // si no hay resultados muestra un mensaje
// 			{	
// 				res.render('quizes/index.ejs',{quizes:quizes, criterio:searchTrue, errors: []});
// 			}
// 			else
// 			{
// 				res.render('quizes/index.ejs',{quizes:quizes, criterio:'' , errors: []});
// 			}
// 		}).catch(function(error) {next(error);})
// 	}
// };


// Get /quizes/:quizId(\\d+)/comments/new
exports.new =  function(req, res) {
	res.render("comments/new.ejs",{quizid: req.params.quizId , errors: []});
};

// POST /quizes/:quizId/comments
exports.create = function(req, res) {

	var comment = models.Comment.build(
		{ texto: req.body.comment.texto,
		QuizId: req.params.quizId
		});

	var errors = comment.validate();

	if (errors) {
		
		var ArrayErrors = new Array();
		var i = 0;

		for (var Propiedad in errors)
		{
			ArrayErrors[i]={message: errors[Propiedad]};
			i++;
		}

		res.render("comments/new.ejs", {comment:comment, quizId: req.params.quizId, errors: ArrayErrors});

	} else {
		// guarda en db los campos de comment

			comment
			.save()
			.then (function() {res.redirect("/quizes/" + req.params.quizId)});
		} // redireccion http a lista de preguntas
};

// Get /quizes/edit
exports.edit =  function(req, res) {
	var quiz = req.quiz; // autoload de instancioa de quiz
	res.render("quizes/edit",{quiz: quiz , errors: []});
};

// PUT /quizes/:id
exports.update = function(req, res) {

	req.quiz.pregunta = req.body.quiz.pregunta;
	req.quiz.respuesta = req.body.quiz.respuesta;
	req.quiz.tema = req.body.quiz.tema;

	var errors = req.quiz.validate();

	if (errors) {
		
		var ArrayErrors = new Array();
		var i = 0;

		for (var Propiedad in errors)
		{
			ArrayErrors[i]={message: errors[Propiedad]};
			i++;
		}

		res.render("quizes/edit", {quiz:req.quiz, errors: ArrayErrors});
	}
	else {
		// guarda en db los campos pregunta y respuesta de quiz
			req.quiz
			.save({fields: ["pregunta","respuesta","tema"]})
			.then (function() {res.redirect("/quizes");});
	} // redireccion http a lista de preguntas (URL relativo)

}

//delete /quizes/:id
exports.destroy = function(req, res) {
	req.quiz.destroy().then(function() {
		res.redirect("/quizes");
	}).catch(function(error) {next(error)});
};