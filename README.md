Modulo 9

Creo fichero models/comentarios.js con la definición de la tabla de comentarios (comment)

Modifico models/models.js para añadir la tabla de comentarios

Creo fichero controllers/comment_controller.js que contendrá el controlador de comentarios

Modifico fichero routes/index.js para importar el controlador de comentarios

Creo la vista views/comments/new.ejs que será el formulario para la creacion de comentarios

Modifico views/quizes/new.ejs para añadir la parte de crear comentario

Modifico controllers/quiz_controller para añadir el autoload

Modifico views/quizes/show.ejs para visualizar comentarios

Pruebo con foreman

hago git add . para añadir los ficheros modificados

Genero una nueva versión en la rama master con git commit -m "15 - Crear Comentarios"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Instalo el middleware express-session con npm install --save express-session

Modifico app.js para importar express-session y añadir la semilla para cifrar cookies

Modifico app.js para guardar el path de la solicitud antes de login/logout

Añado las referencias al controlador de sesion en routes/index.js para new, logout, create.

Creo fichero controllers/session_controller.js y añado el código para new, create,destroy

Creo fichero controllers/user_controller.js y añado el código para el controlador de autenticar.

Modifico views/layout.ejs para añadir el botón de login/logout

Modifico style.css para añadir right

Creo fichero views/sessions/new.ejs para formmulario de registro

Pruebo con foreman start

hago git add . para añadir los ficheros modificados

Genero una nueva versión en la rama master con git commit -m "16 - Autenticacion y sesion"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Modifico views/quizes/index.ejs para que no salgan los botones si no hay sesión

Modifico controllers/session_controller.js para añadir el middleware.

Modifico routes/index.js para añadir el middleware a las rutas.

Pruebo con foreman start

hago git add . para añadir los ficheros modificados

Genero una nueva versión en la rama master con git commit -m "17 - Autorizacion"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Modifico models/comment.js para añadir el campo comentario a la tabla

Modifico routes/index.js para añadirle la primitiva get para actualizar el comentario y la llamada al autoload

Añado la accion publish en controllers/comment_controller.js y el autoload

Modifico el formulario views/quizes/show.ejs para añadir el código de mostrar los comentarios sólo si se está autenticado y el botón de autenticar

Modifico bin/www para añadir SSL

Pruebo con foreman start

hago git add . para añadir los ficheros modificados

Genero una nueva versión en la rama master con git commit -m "19 - HTTP Seguro"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Ejercicio P2P-9: Auto logout de sesion

Modifico app.js para añadir el middleware app.use para controlar el log out de sesion

Pruebo con foreman start

hago git add . para añadir los ficheros modificados

Genero una nueva versión en la rama master con git commit -m "Ejercicio P2P-9: Auto logout"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Ejercicio P2P-9: Estadísticas

Modifico views/layout.ejs para añadir el enlace a estadísticas

Modifico routes/index.js para añadir las rutas a statistics

Creo fichero views/quizes/statistics.ejs para mostrar las estadísticas generales

Creo fichero controllers/statsController.js para controlar las peticiones de estadísticas y obtener los datos

Añado onDelete: 'cascade' en models.js para el borrado de comentarios en cascada

Lo puebo con foreman antes de darlo por bueno.

Hago git add . y git commit -m "Ejercicio P2P-9: Estadisticas" para actualizar la rama master

Hago un reset de la base de datos de Heroku.

Lo subo a github con git push -u origin master.

Lo subo a heroku con git push heroku master.

Añado este README.md al proyecto con git add . y lo vuelvo a subir ea GitHub con git commit -m "añado README.md" y git push -u origin master.