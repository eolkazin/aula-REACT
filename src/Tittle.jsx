import { useState } from "react";

function Tittle({ name, cor }) {
  const [inputText, setInpuText] = useState("");
  const [texto, setTexto] = useState("titulo inicial");
  let nome = "lucas";
  const soma = 10 + 10;
  const urlImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7MDH8q5FTqYGxjntNyHUgMMt1z9SWWaR4Q&s";

    function clicou(){
     setTexto(inputText)
    }

  return (
    <div>
      <h1>oi soyu o {nome}</h1>
      <h1 style={{ color: cor }}>kole {name ? name : "fulano"} </h1>
      <h1>oi soyu o {soma}</h1>
      <h1 style={{ color: cor }}>{texto}</h1>
      <input
        value={inputText}
        onChange={(e) => {
          setInpuText(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={clicou}
      >
        mudar
      </button>
      <img width={400} src={urlImg} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis
        ab rerum voluptatem assumenda ratione saepe, quidem minima corporis
        sequi, mollitia laudantium aperiam voluptate iste eveniet molestias
        quaerat voluptates totam.
      </p>
    </div>
  );
}

export default Tittle;
