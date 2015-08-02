Modulo 8

Añado el controlador de new en controllers/quiz_controller.js

Modifico routes/index.js para añadir el enrutamiento a quizes/new

Creo la vista views/quizes/new.ejs

Creo el formulario views/quizes/_form.ejs

Modifico routes/index.js para añadir el enrutamiento a quizes/create

Añado el controlador de create en controllers/quiz_controller.js

Modifico app.js para quitar la propiedad extended del Bodyparser

Añado el enlace a crear pregunta en la vista index.ejs

Pruebo con Foreman

Añado todos los archivos modificados con git add .

Genero una nueva versión en la rama master con git commit -m "10 - Crear Preguntas"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Modifico models/quiz.js para añadir la validación en la definición de la tabla

Modifico controllers/quiz_controller para ejecutar la validación en quizes/create

Modifico views/layout.ejs para mostrar los errores

Modifico la hoja de estilos public/stylesheets/style.css

Modifico controllers/quiz_controller para añadir el parámetro errors en todos los res.render

Tengo que modificar quiz_controller para que funcione la validación porque el método validate no tiene then en esta versión

Modifico app.js para añadir el parámetro errors en res.render

Modifico routes/index.js para añadir el parámetro error en res.render

Pruebo con Foreman

Añado todos los archivos modificados con git add .

Genero una nueva versión en la rama master con git commit -m "11 - Validacion de Preguntas"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Modifico Controllers/quiz_controller.js para añadir el controlador de edit

Modifico routes/index.js para añadir la ruta a edit

Creo views/quizes/edit.ejs para el formulario de edicion

instalo method.override con npm install --save method-override

Modifico app.js para importar e instalar method override 

Modifico routes/index.js para añadir la ruta a put

Modifico Controllers/quiz_controller.js para añadir el controlador de update

Modifico la vista views/quizes/index.ejs para añadir el botón de edición a las preguntas

Pruebo con Foreman

Añado todos los archivos modificados con git add .

Genero una nueva versión en la rama master con git commit -m "12 - Edicion de Preguntas"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Modifico views/quizes/index.ejs para añadir el botón de borrar

Modifico routes/index.js para añadir la ruta a delete

Modifico Controllers/quiz_controller.js para añadir el controlador de destroy

Pruebo con Foreman

Añado todos los archivos modificados con git add .

Genero una nueva versión en la rama master con git commit -m "12 - Edicion de Preguntas"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Ejercicio PDP - Modulo 8

Modifico controllers/quiz_controller.js para añadir el campo tema en create y update

Modifico models/models.js para añadir más preguntas con su tema

Modifico models/quiz.js para añadir el campo tema a la definicion de la tabla

Modifico views/quizes/_form.ejs para añadir el select tal cual pone en el enunciado y modificarlo para que al recuperar la pregunta aparezca seleccionado el valor según el tema de la pregunta.

Modifico views/quizes/show.ejs para que muestre el valor del campo tema de la pregunta que se está mostrando.

Lo puebo con foreman antes de darlo por bueno.

Hago git add . y git commit -m "Ejericio P2P-8" para actualizar la rama master

Lo subo a github con git push -u origin master.

Lo subo a heroku con git push heroku master.

Hago un reset de la base de datos de Heroku para borrar las preguntas que no tenían tema.

Añado este README.md al proyecto con git add . y lo vuelvo a subir ea GitHub con git commit -m "añado README.md" y git push -u origin master.

