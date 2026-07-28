function Agendamento() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg,#b8865b,#8b5e3c)",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px"
          }}
        >
          Agende seu horário 💖
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "35px"
          }}
        >
          Valorize sua beleza com um atendimento personalizado.
          Clique abaixo e fale diretamente pelo WhatsApp.
        </p>

        <a
          href="https://wa.me/5511000000000?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "18px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
            display: "inline-block",
            transition: ".3s"
          }}
        >
          📲 Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Agendamento;