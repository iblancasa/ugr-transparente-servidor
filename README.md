UGR Transparente
================

Portal de transparencia de la [UGR](http://www.ugr.es/) para publicar los datos y hacerlos accesibles y tratables. La aplicación web está diseñada en [Node.js](http://nodejs.org/) junto con [Express](http://expressjs.com/) y [Jade](http://jade-lang.com/). [Express](http://expressjs.com/) es un framework para desarrollar aplicaciones web mientras que [Jade](http://jade-lang.com/) es un módulo para trabajar con plantillas y poder implementar la arquitectura Modelo Vista Controlador.

La aplicación es accesible desde [http://transparente.ugr.es/](http://transparente.ugr.es).


## Instalación

1.- Instalar Node.js como indican en su [repositorio](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

(Nota: en la versión 14.10 de Ubuntu (Utopic Unicorn), se han detectado problemas para instalar Node.js desde los repositorios oficiales de la aplicación. Para solucionar esto podemos seguir las instrucciones de [este enlace](http://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/).)

[PONER COMANDOS]

2.- Descargar el repositorio `git clone`

```
git clone https://github.com/oslugr/ugr-transparente-servidor
```

3.- Entrar al directorio `ugr-transparente-servidor` e instalar las dependencias que se usen en este repositorio.

```
cd ugr-transparente-servidor
sudo npm install
```

4.- Comprobamos que las dependencias de todos los módulos se cumplen:

```
npm list --depth=0
```

5.- Para indicar el puerto que el servidor va a estar escuchando para resolver peticiones, deberemos modificarlo en el archivo `package.json`. Si vamos a instalar la aplicación en un servidor de acceso público tendremos que dejar obligatoriamente este puerto en el 80, ya que este es el puerto por defecto al que los navegadores harán las peticiones por defecto; pero como durante el desarrolllo trabajaremos habitualmente en local, y no se puede usar el puerto 80 porque es un puerto reservado, podríamos usar, por ejemplo,  el 3000, aunque este puerto se puede cambiar por cualquier otro que no esté reservado o en uso.
```
{
...
"scripts": {
  "start": "PORT=80 forever start -l /var/log/forever.log -a -o /var/log/out.log -e /var/log/err.log ./app.js",
  ...

}
```

6.- Para indicar la dirección IP donde accederemos, deberemos modificar la variable "ip" en el archivo `app.js`. Si vamos a instalar la aplicación en un servidor de acceso público tendremos que cambiar esta dirección obligatoriamente por nuestra IP. Por defecto, si estamos probando la instalación de forma local, accederemos a `127.0.0.1`
```
...
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || 'transparente.ugr.es');
...

```

7.- Lanzaremos la aplicación mediante un script que hemos introducido en el archivo `package.json`. ¡Ojo! cuando lances la aplicación apareceran los logs de registro en /var, por lo que es necesario escribir el comando con permisos de superusuario.

```
sudo npm start
```

Si vas a tu navegador, y has realizado las modificaciones para una instalación en local, en [http://localhost:3000](http://localhost:3000) tendrás la aplicación disponible.

8.- Cuando queramos matar el proceso tendremos que usar el script `kill` que hay en el archivo `package.json`.

```
sudo npm run-script kill
```


# Test

Se han incluido tests unitarios para comprobar que las diferentes funcionalidades de la aplicación funcionan correctamente, de dichas funcionalidades hay que destacar el acceso a los archivos JSON con los datos del portal (para comprobar que existen y que los datos que contienen están en un formato válido) y que las diferentes páginas del portal son accesibles. También se ha creado un test de cobertura para comprobar que toda funcionalidad del portal está cubierta y asegurada por sus correspondientes test unitarios. Los test unitarios son realizados con [Mocha](https://github.com/mochajs/mocha) y el test de cobertura es realizado con [Istanbul](https://github.com/gotwarlost/istanbul). Se ejecutan con:

```
npm test
```

El resultado de los tests unitarios se mostrarán por pantalla como salida de la ejecución del script; a su vez, el resultado de los tests de cobertura se almacenarán en el archivo `coverage/lcov-report/index.html`, mostrando el porcentaje del código que está cubierto por los test unitarios.


# Integración continua

Disponemos de una integración continua que nos permite detectar automáticamente mediante la ejecución de pruebas los fallos que se produzcan cuando se actualiza el código, evitando así encontrarmos problemas inesperados durante el despliegue de la aplicación.

Para introducir la integración continua vamos a usar [Travis CI](https://travis-ci.org/). Para poder usarlo, activamos continua como explican en la propia [página](http://docs.travis-ci.com/user/getting-started/) de Travis CI, lo más importante es activar el uso de Travis para nuestro repositorio y crear el archivo de configuración `.travis.yml`.

A partir de ahora, con cada nuevo cambio que publiquemos en el repositorio del proyecto se generará una build del programa en Travis que ejecutará los scripts básicos de `npm`: `npm install` y `npm test`. Ya solo nos queda comprobar el resultado de estas [builds](https://travis-ci.org/oslugr/ugr-transparente-servidor/builds).


# Despliegue automático

copiar clave ssh en github

ssh-keygen -t rsa -b 4096 -C "germaaan@gmail.com"

Introducir ruta del archivo id_rsa
Introducir contraseña
The key's randomart image is:

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

pide contraseña


cat ~/.ssh/id_rsa.pub

copiar en la pagina de github

ssh -T git@github.com
Hi germaaan! You've successfully authenticated, but GitHub does not provide shell access.

No poner el git clone
git clone https://github.com/oslugr/ugr-transparente-servidor.git
