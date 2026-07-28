function Footer() {
  return (
    <footer
      style={{
        background: "#4a3328",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        marginTop: "50px"
      }}
    >

      <h2
        style={{
          color: "#e8c39e",
          marginBottom: "15px"
        }}
      >
        Studio Bela ✨
      </h2>


      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.7",
          color: "#eee"
        }}
      >
        Design de sobrancelhas para valorizar
        sua beleza natural.
      </p>


      <p
        style={{
          marginTop: "20px",
          color: "#ddd"
        }}
      >
        📍 Vila Moraes • São Bernardo do Campo
        • Grande Alvarenga
      </p>


      <div
        style={{
          marginTop: "25px"
        }}
      >

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#e8c39e",
            textDecoration: "none",
            margin: "0 10px"
          }}
        >
          Instagram
        </a>


        <a
          href="https://wa.me/5511000000000"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#e8c39e",
            textDecoration: "none",
            margin: "0 10px"
          }}
        >
          WhatsApp
        </a>

      </div>


      <p
        style={{
          marginTop: "30px",
          fontSize: "14px",
          color: "#ccc"
        }}
      >
        © {new Date().getFullYear()} Studio Bela.
        Todos os direitos reservados.
      </p>


      <p
        style={{
          marginTop: "10px",
          fontSize: "12px",
          color: "#aaa"
        }}
      >
        Desenvolvido por Emerson Viana
      </p>


    </footer>
  );
}

export default Footer;