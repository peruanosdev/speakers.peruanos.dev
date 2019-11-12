# Peruanos Dev Speakers 

¡Hola!. Estamos creando un directorio de speakers voluntarios Perú.

El cual pretende resolver el problema de:

- Estoy organizando un evento|meetup|conf y no se a que speakers llamar.
- Tengo cosas que contar, me gustaría dar una charla, pero no conozco a ningún organizador

### ¿Quieres ser un speaker? 
Envíanos un PR con tus datos para figurar en el listado. 

Pasos: 
1. Crear un archivo con tu nombre en el directorio _speakers
    ```
        $ vi _speakers/NombreApellido.md
    ```
2. Registrar tus datos

    ```
        ---
        name: Nombre y Apellidos
        topics: Lista las tecnologias que usas
        picture: https://your-picture
        email: micorreo@domain.com
        github: 'https://www.github.com/username'
        twitter: 'https://twitter.com/username'
        linkedin: 'https://www.linkedin.com/in/username' 
        ---
        Agrega tu bio y personalizalo usando markdown
    ```
    
3. Envia tu Pull Request

### Setup Deveploment
To start this application locally:

1. Make sure you have installed Ruby
2. Install the dependencies: `bundle install`
3. Start the application: `bundle exec jekyll serve`
4. Go to the [app](http://127.0.0.1:4000)
