import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1> Aprende los fundamentos de React en este curso desde cero </h1>
        <Testimonio
          nombre="Shawn Whan"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de sistemas"
          empresa="Amazon"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de sistemas"
          empresa="Spotify"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
        <Testimonio
          nombre="Sarah Whan"
          pais="EEUU"
          imagen="sarah"
          cargo="Ingeniera de sistemas"
          empresa="ChatDesk"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
      </div>
    </div>
  );
}

export default App;
