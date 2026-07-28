function ServicoCard({ icone, titulo, descricao }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
      }}
    >

      <div
        style={{
          fontSize: "40px",
          marginBottom: "15px"
        }}
      >
        {icone}
      </div>


      <h3
        style={{
          color: "#b8865b",
          marginBottom: "15px"
        }}
      >
        {titulo}
      </h3>


      <p
        style={{
          color: "#666",
          lineHeight: "1.7"
        }}
      >
        {descricao}
      </p>


    </div>
  );
}

export default ServicoCard;