# **Sancrisoft FullStack Position**

## **Resumen**

Este es un proyecto realizado para Sancrisoft con el fin de demostrar mis habilidades como desarrollador Full Stack haciendo una implementación de:

1. ***Front-End***
    - React
    - Redux
    - Tailwind CSS

2. ***Back-End***
    - NodeJs
    - ExpressJs
    - MySQL

---

## **Requisitos para correr el proyecto**

Para poder poner en marcha el proyecto de forma local con estas instrucciones debes tener las ultimas versiones estables de NodeJs y *MySQL Server* y *MySQL WorkBenck* previamente configuradas.

## Crear la base de datos relacional

Dentro de la raiz de este repo encontraras un script `wholedatabase-script.sql` que podras ejecutar desde *MySQL Workbench*.

El script se encargara de crear la base de datos, su estructura e insertara los datos de prueba que agregue como productos.

*Si tienes un error utilizando el script, crea manualmente una base de datos de forma local que llamaras `sancrisoftdatabase` y le das doble click en el menu de la izquierda para que se seleccione por default y vuelves a ejecutar el script.*

---

## **Iniciando el proyecto**

Primero deberas forkear este repositorio y clonarlo en tu maquina de manera local.

~~~
git clone
cd .\sancrisoft-project\
~~~

### **Instalar las dependencias**

Ingresa a las carpetas `client` y `server` desde la consola e instala las dependencias con *npm*.

~~~
cd .\client\
npm install

cd .\server\
npm install
~~~

---

## **Back-End**

Una vez instaladas las dependencias del Back-end iniciaremos el servidor hecho con NodeJs con ayuda de ExpressJs.

~~~
npm start
~~~

o puedes usar `dev-start` para iniciarlo en modo de desarrollo y si haces cambios en los archivos de esta carpeta se reiniciara el servidor. 

~~~
npm run dev-start
~~~

---

## **Front-End**

Con el servidor del back-end funcionando, ahora deberas iniciar el servidor del lado del Front-End hecho con React, Redux y una TailwindCSS.

1. Primero volvemos a la carpeta del `client`.
    ~~~
    cd ..\client\
    ~~~
2. Antes de correr el lado del front deberemos entrar dentro del archivo `.env` ubicado en la carpeta raiz del `client` y cambiaremos las URL que estan asignadas como variable de entorno por la URL privada desde donde estas corriendo el proyecto con el fin de que puedas hacer las llamadas a la API desde el front-end incluso estando desde un dispositivo diferente dentro de la misma red local.

***Recuerda que el puerto por defecto en que estaremos corriendo el backend `(server)` es `3001`, mientras el puerto por defecto del front-end `(client)` es `3000`.***

3. Iniciamos el servidor con `npm start`.
    ~~~
    npm start
    ~~~

---
## **Ultimo paso**

Ya puedes ingresar al servidor desde tu computador o cualquier dispositivo dentro de tu red local accediendo a tu IP privada `(La que declaraste como variable en el archivo .env)`.

Solo recuerda que las iteracciones del usuario se haran a travez del puerto `3000`.