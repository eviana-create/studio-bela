function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511000000000?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Studio%20Bela."
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "65px",
        height: "65px",
        background: "#25d366",
        color: "#fff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        textDecoration: "none",
        boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
        zIndex: 9999,
        animation: "pulse 2s infinite"
      }}
      aria-label="Agendar pelo WhatsApp"
    >
      💬

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.08);
            }

            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

    </a>
  );
}

export default WhatsAppButton;