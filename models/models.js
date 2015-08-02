var path=require('path');

// Postgres DATABASE_URL = postgres://user:password@host:port/database
// SQlite 	DATABASE_URL = sqlite://:@:/

var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6]||null);
var user =  (url[2]||null);
var pwd = (url[3]||null);
var protocol =  (url[1]||null);
var dialect =  (url[1]||null);
var port =  (url[5]||null);
var host =  (url[4]||null);
var storage = process.env.DATABASE_STORAGE;

//cargar modelo ORM
var Sequelize=require('sequelize');

// User BD sequelize o Postgres
var sequelize = new Sequelize(DB_name,user,pwd,
	{dialect: protocol,
	 protocol:protocol,
	 port: port,
	 host: host,
	 storage: storage,
	 omitNull: true 		// Postgres
	}
);

// usar bbdd SQLite
// var sequelize=new Sequelize(null,null,null,{dialect: "sqlite",storage:"quiz.sqlite"});

//Importar la definición de la tabla Quiz en quiz.js
var Quiz=sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz=Quiz; //exportar definicion de tabla quiz

//sequelize.sync() crea e incializa tabla de preguntas en DB
sequelize.sync().then(function() {
	// success(..) ejecuta el manejador una vez creada la tabla
	Quiz.count().then(function (count) {
		if(count===0) {	// la tabla se inicializa si está vacía

			Quiz.create({pregunta: 'Capital de Líbano',respuesta:'Beirut',tema:"Otro"});			

			Quiz.create({pregunta: 'Inventor del teléfono',respuesta:'Antonio Meucci',tema:"Tecnología"});

			Quiz.create({pregunta: 'Satélite de la Tierra',respuesta:'Luna',tema:"Ciencia"});

			Quiz.create({pregunta: 'Autor de la banda sonora de la película "Superman"',respuesta:'John Williams',tema:"Ocio"});

			Quiz.create({pregunta: 'Autor de "El ingenioso hidalgo Don Quijote de la Mancha"',respuesta:'Miguel de Cervantes',tema:"Humanidades"});

			Quiz.create({pregunta: 'Capital de Grecia',respuesta:'Atenas', tema:"Otro"});			

			Quiz.create({pregunta: 'Capital de Italia',respuesta:'Roma', tema:"Otro"});

			Quiz.create({pregunta: 'Capital de Portugal',respuesta:'Lisboa', tema:"Otro"}).then(function(){console.log('Base de datos inicializada')});
		};
	});
});

