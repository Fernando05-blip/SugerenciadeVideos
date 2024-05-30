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
  
  // Definición de la clase Multimedia para manejar la URL
  class Multimedia {
    constructor(url) {
      let _url = url;
  
      this.getUrl = () => _url;
    }
  
    // Getter para obtener la URL
    get url() {
      return this.getUrl();
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
  
  // Crear elementos de ejemplo
  let musica = document.createElement('iframe');
  let peliculas = document.createElement('iframe');
  let series = document.createElement('iframe');
  
  // Añadir los elementos al documento para su visualización
  document.body.appendChild(musica);
  document.body.appendChild(peliculas);
  document.body.appendChild(series);
  
  // Crear instancias de Reproductor para reproducir diferentes videos
  let playMusica = new Reproductor("https://www.youtube.com/embed/OuMEhaPQ-P8?si=7bOX4CQ_9ixmotHV", musica);
  playMusica.playMultimedia();
  playMusica.setInicio(200);
  
  let playPelicula = new Reproductor("https://www.youtube.com/embed/VIDEO_ID", peliculas);
  playPelicula.playMultimedia();
  
  let playSerie = new Reproductor("https://www.youtube.com/embed/VIDEO_ID", series);
  playSerie.playMultimedia();
  