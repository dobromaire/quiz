var models=require('../models/models.js');

exports.index = function(req, res, next) {

	models.Quiz.findAll().then(function(quizes) {
		models.Comment.findAll().then(function(comments) {

			// tenemos ya los objetos cargados, vamos a hacer los cálculos
			// lo mejor seria hacerlo con sequelize, pero no tengo acceso a la ayuda

			res.render('quizes/statistics.ejs',{stats:estadisticas(quizes,comments), errors: []});	
		});
	}).catch(function(error) {next(error); })
};

function estadisticas(quizes, comments) {

	return {

		totalPreguntas: {desc: "Número total de preguntas", dato: quizes.length},
		totalComentarios: {desc: "Número total de comentarios",dato: comments.length},
		mediaComentariosPregunta: {desc: "Numero medio de comentarios por pregunta",dato: comments.length/quizes.length},
		PreguntasSinComentarios: {desc: "Numero de preguntas sin comentarios", dato: quizes.length - preguntasConComentarios(quizes,comments)},
		PreguntasConComentarios: {desc: "Numero de preguntas con comentarios", dato: preguntasConComentarios(quizes,comments)}

	}
	function preguntasConComentarios(quizes,comments) {
		// hacemos un bucle por las preguntas y miramos para cada una de ellas si tiene comentarios

		var result = 0;

		for (var i=0;i<quizes.length;i++) {

			for (var j = 0; j<comments.length;j++) {

				if (comments[j].QuizId === quizes[i].id) {result++;}

			}

		}

		return result;

	}

}