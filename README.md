EjercicioP2P-6:

1 - Instalación express-generator:

En mi carpeta Proyectos (ya existente), instalo express-generator haciendo:

/Proyectos$ npm install express-generator@4.9.0

2 - Creación proyecto quiz

Creo el proyecto quiz desde mi carpeta de proyectos:

node_modules/express-generator/bin/express --ejs quiz

3 - Añado el proyecto a GIT

cd quiz
git init

4 - Creo el fichero .gitignore añadiendo la carpeta node_modules, .gitignore y el fichero npm-debug.log

5 - Añado los ficheros al proyecto git con git add .

6 - Ejecuto el commit con git commit -m "esqueleto express-generator"

7 - Ejecuto npm install

8 - Borro fichero routes/users.js

9 - Modifico index.ejs

10 - Modifico app.js quitando la carga de users y el app.use de /users

Modifico index.js añadiendo el título quiz

Borro el fichero routers/users.js con rm

Descomento la línea del favicon en app.js

Me voy a www.favicon.cc y descargo el favicon del sol, lo copio a la carpeta quiz/public con el nombre favicon.ico

Ejecuto npm start y me voy a locaalhost:3000 para ver los cambios antes de meterlos en git.

Ejecuto git add .

Ejecuto git commit -m "Primera pagina y favicon"

Creo carpeta controllers dentro de quiz

Creo fichero quiz_controller.js dentro de controllers e implemento el código.

Añado a routes/index.js la importación de quiz_controller.js

Añado también las dos rutas get a quizes/question y quizes/answer en routes/index.js

Creo la carpeta quizes dentro de views

Creo las vistas answer.ejs y question.ejs en la carpeta de views/quizes

Modifico la página de entrada (views/index.ejs) para añadir el link a empiece a jugar

Ejecuto git add .

Ejecuto git commit -m "Primera pregunta"

Creo fichero layout.ejs dentro de la carpeta views

Instalo express-partials con npm install --save express-partials@0.3.0

Modifico app.js para importar el middleware y el app.use de express-partials

Modifico la vista layout.ejs para añadir el header, el footer y la parte variable

Modifico la vista index.ejs para dejar sólo la parte que irá en la sección variable de layout.ejs
 
Modifico la vista answer.ejs para dejar sólo la parte que irá en la sección variable de layout.ejs

Modifico la vista question.ejs para dejar sólo el formulario

Ejecuto git add .

Ejecuto git commit -m "Marco de la aplicación"

Modifico public/stylesheets/style.css

Creo la página public/stylesheets/wide.css

Creo la página public/stylesheets/smartphone.css

Modifico views/layout.ejs

Ejecuto git add .

Ejecuto git commit -m "CSS adptable a móviles"

Creo el repositorio quiz en GitHub

Añado el repositorio remoto con git remote add origin https://github.com/dobromaire/quiz.git

Subo mi repositorio local al reposiorio remoto con  git push -u origin master

Creo cuenta en Heorku e instalo Toolbelt con wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh

Entro en Heroku con heroku login

Creo aplicación heroku con heroku create

Renombro la aplicación que ha generado Heroku con heroku apps:rename quiz-dobromaire

Creo el fichero Procfile con web: node ./bin/www

Modifico package.json con "engines"

Añado los cambios al repositorio git con git add .

Genero la nueva versión con git commit -m "Despliegue en Heroku"

Lo subo a GitHub con git push -u origin master

Lo subo a Heroku con git push heroku master

Modifico layout.ejs para añadir el footer que apunte a github

Creo la nueva rama con git branch creditos

Me cambio a la rama creditos con git checkout creditos

Modifico views/layout.ejs para añadir el enlace a la barra de navegación

Modifico routes/index.js para añadir el enrutamiento a author.ejs

Añado la vista author.ejs

Pongo un archivo de imagen en la carpeta public/images. El video no lo pondré porque no tengo tiempo

Modifico ligeramente style.css,wide.css y smartphone.css para que se vea bien la imagen en el ordenador. Para poder probarlo como si fuera un móvil ajusto el tamaño de la pantalla.

Hago git add . y git commit para actualizar la rama creditos. Lo hago un par de veces porque tengo que hacer cambios para que se vea bien, una en wide y la otra en wide y smartphone.

Hago git checkout master para pasar a la rama master y git merge creditos para incorporar los cambios de la rama creditos

Lo puebo con foreman antes de darlo por bueno.

Lo subo a github con git push -u origin master.

Lo subo a heroku con git push heroku master.

Añado este README.md al proyecto con git add . y lo vuelvo a subir ea GitHub con git commit -m "añado README.md" y git push -u origin master.













