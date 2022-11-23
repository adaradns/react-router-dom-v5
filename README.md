## React Routing Navigation
### React-router-dom versión 5.3.0
> Ejemplo de una aplicación ReactJS con react router dom en su versión 5.3.0
la cual cuenta con algunas particularidades diferentes a la versión actual 6.4.3.

### Puntos a tener en cuenta

- El archivo `index.js` debe envolver a nuestra app con el componente `<Router>` .
- Si va a trabajar con links de navegación deben estar contenidos por el mismo componente.
Por ejemplo:
```javascript 
  	<Router>
    	<NavBar
      	items={["inicio", "about", "contact"]}
    	/>
    	<React.StrictMode>
      	<App />
    	</React.StrictMode>
  	</Router>
```
### Componente Switch y Route
En nuestro componente App debemos envolver el manejo de rutas con el componente Switch, este componente se encarga de verificar la url actual en la que se encuentra y renderizar el componente correspondiente a esa url, si no hay coincidencia retorna null.
Por ejemplo:
```javascript 
	<Switch>
        <Route exact path='/inicio'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
```
### Ejecutar la aplicación
- Ejecuta el comando `npm install` el cual se encargará de descargar e instalar las dependencias necesarias para ejecutar el proyecto.
- Ejecute el comando `npm start` con este comando se iniciará su proyecto el su entorno local, puerto por defecto `3000`.