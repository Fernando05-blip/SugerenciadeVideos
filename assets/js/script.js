 // Definición de la clase Multimedia
 class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = () => _url;
    }

    // Getter para obtener la URL
    get url() {
        return this.getUrl();
    }

    // Método para establecer el inicio del video
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Definición de la clase Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    getId() {
        return this.id;
    }

    // Método para reproducir el contenido multimedia
    playMultimedia() {
        iifeGlobal.mostrarTodo(this.url, this.id);
    }

    // Método para establecer el inicio del video
    setInicio(tiempo) {
        this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
}

// IIFE (Expresión de Función Invocada Inmediatamente) que encapsula la lógica de inyectar y mostrar contenido
let iifeGlobal = (() => {
    let inyectarTodo = (url, id) => {
        id.setAttribute("src", url);
        id.style.display = "block";
    };

    return {
        mostrarTodo: (url, id) => inyectarTodo(url, id),
    };
})();

// Obtener los elementos iframe por su id
let musica = document.getElementById('musica');
let peliculas = document.getElementById('peliculas');
let series = document.getElementById('series');

  // Crear instancias de Reproductor para reproducir diferentes videos
  let playMusica = new Reproductor("https://www.youtube.com/embed/OuMEhaPQ-P8?si=7bOX4CQ_9ixmotHV", musica);
  playMusica.playMultimedia();
  playMusica.setInicio(200);
  
  let playPelicula = new Reproductor("https://www.youtube.com/embed/CoZqL9N6Rx4?si=7K6kuCk7uGsd-CmX", peliculas);
  playPelicula.playMultimedia();
  
  let playSerie = new Reproductor("https://www.youtube.com/embed/UHiwdDFPsZY?si=Xp4YU_J1FUmWUETC", series);
  playSerie.playMultimedia();
  