function Depoimentos() {

  const depoimentos = [
    {
      nome: "Cliente Studio Bela",
      texto:
        "Amei o resultado! Minhas sobrancelhas ficaram naturais e combinaram muito com meu rosto."
    },
    {
      nome: "Cliente Studio Bela",
      texto:
        "Atendimento maravilhoso, muito cuidado nos detalhes e resultado impecável."
    },
    {
      nome: "Cliente Studio Bela",
      texto:
        "O design ficou exatamente como eu queria. Recomendo muito!"
    }
  ];


  return (
    <section
      style={{
        padding: "60px 20px"
      }}
    >

      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          color: "#4a3328",
          marginBottom: "40px"
        }}
      >
        O que nossas clientes dizem ✨
      </h2>


      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >

        {depoimentos.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.08)"
            }}
          >

            <div
              style={{
                fontSize: "30px",
                marginBottom: "15px"
              }}
            >
              ⭐⭐⭐⭐⭐
            </div>


            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                fontStyle: "italic"
              }}
            >
              "{item.texto}"
            </p>


            <h4
              style={{
                marginTop: "20px",
                color: "#b8865b"
              }}
            >
              {item.nome}
            </h4>


          </div>

        ))}

      </div>

    </section>
  );
}

export default Depoimentos;