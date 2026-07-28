function Localizacao() {
  return (
    <section
      style={{
        background: "#fdf8f4",
        padding: "70px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center"
        }}
      >
        {/* Texto */}
        <div>
          <span
            style={{
              color: "#b8865b",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            LOCALIZAÇÃO
          </span>

          <h2
            style={{
              fontSize: "38px",
              margin: "15px 0",
              color: "#4a3328"
            }}
          >
            Atendimento em São Bernardo do Campo
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "17px"
            }}
          >
            O Studio Bela atende clientes da Vila Moraes,
            Grande Alvarenga e toda a região de
            São Bernardo do Campo, oferecendo um atendimento
            personalizado em um ambiente acolhedor.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://wa.me/5511000000000"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "inline-block"
              }}
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,.15)"
          }}
        >
          <iframe
            title="Mapa Studio Bela"
            src="https://www.google.com/maps?q=Vila+Moraes+S%C3%A3o+Bernardo+do+Campo&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Localizacao;