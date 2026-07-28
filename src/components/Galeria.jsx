function Galeria() {

  const fotos = [
    {
      imagem:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800",
      titulo: "Design Natural"
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800",
      titulo: "Resultado Elegante"
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800",
      titulo: "Olhar Marcante"
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800",
      titulo: "Acabamento Perfeito"
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
        Galeria de Resultados ✨
      </h2>


      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >

        {fotos.map((foto, index) => (

          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.08)"
            }}
          >

            <img
              src={foto.imagem}
              alt={foto.titulo}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover"
              }}
            />

            <h3
              style={{
                padding: "20px",
                margin: 0,
                color: "#b8865b",
                textAlign: "center"
              }}
            >
              {foto.titulo}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Galeria;