Ejercicio P2P-7

Instalo sequelize con npm install --save sequelize@1.7.0

Instalo sqlite3 con npm install --save sqlite3@2.2.0

Creo la carpeta models y el fichero models/quiz.js

Creo fichero models.js y lo modifico

Modifico controllers/quiz_controller.js

Añado quiz.sqlite a .gitignore

Me voy a heroku dashboard, me logino con mi email y contraseña y añado Heroku Postgres en Add-ons como "hobby dev", que es gratis. Guardo los cambios.

Asigno URL a DATABASE_URL con Heroku dashboard. Para ello selecciono el add-on Heroku Postgres, selecciono la base de datos añadida (es la única) y en la sección de Connection Settings selecciono URL y la visualizo con "Show". Copio la URL y en Heroku dashboard voy a settings y enla variable DATABASE_URL compruebo que la URL es correcta.

Modifico package.json para añadir sqlite a devDependencies y quitarlo de dependencies

Añado la dependencia Postgres con npm install --save pg@4.1.1

Añado las variables de entorno al despliegue local creando el fichero .env

Añado .env a .gitignore

Modifico models/models.js para adaptar el modelo al despliegue en Heroku con Postgres

Pruebo la aplicacion con foreman start y corrijo los errores

Añado todos los archivos modificados con git add .

Genero una nueva versión en la rama master con git commit -m "Despliegue DB en Heroku"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Hago los cambios en models\index.js para trabajar con varias preguntas

Hago los cambios en controllers/quiz_controller.js para que trabaje con varias preguntas: métodos show y answer

Creo la nueva vista views/quizes/show.ejs para mostrar la pregunta a partir de views/quizes/question.ejs

Modifico views/quizes/answer.ejs con el enlace a la pregunta

Modifico controllers/quiz_controller.js para que trabaje con varias preguntas: método index.

Creo la vista views/quizes/index.ejs que mostrará la lista de preguntas

Modifico models/models.js para añadir las otras preguntas

Modifico views/layout.ejs para el enlace a quizes que ahora será quizes.index

Ejecuto con foreman start y pruebo que todo funcione

Añado todos los archivos modificados con git add .

Genero una nueva versión en la rama master con git commit -m "Lista de preguntas"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Modifico controllers/quiz_controller.js para añadir el control de errores en index.

Modifico controllers/quiz_controller.js para añadir load

Modifico controllers/quiz_controller.js para show y answer con load.

Modifico routes/index.js para añadir el load.

Añado todos los archivos modificados con git add .

Genero una nueva versión en la rama master con git commit -m "Autoload"

Subo la versión a gitHub con git push origin master

Subo la versión a Heroku con git push heroku master

Creo la nueva rama con git branch busquedas

Me cambio a la rama busquedas con git checkout busquedas

Modifico index.ejs para añadir el formulario

Modifico controllers/quiz_controller.js para añadir el tratamiento en index

Modifico index.ejs para añadir el aviso de que no se han encontrado preguntas

Hago git add . y git commit -m "Ejericio P2P-7" para actualizar la rama busquedas

Hago git checkout master para pasar a la rama master y git merge busquedas para incorporar los cambios de la rama busquedas

Lo puebo con foreman antes de darlo por bueno.

Lo subo a github con git push -u origin master.

Lo subo a heroku con git push heroku master.

Añado este README.md al proyecto con git add . y lo vuelvo a subir ea GitHub con git commit -m "añado README.md" y git push -u origin master.

