import Navbar from "../components/Navbar";
import ServicoCard from "../components/ServicoCard";
import Galeria from "../components/Galeria";
import Sobre from "../components/Sobre";
import Depoimentos from "../components/Depoimentos";
import Localizacao from "../components/Localizacao";
import GaleriaPremium from "../components/GaleriaPremium";
import Agendamento from "../components/Agendamento";
import Faq from "../components/Faq";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f1eb",
        color: "#4a3328",
        fontFamily: "Arial, sans-serif"
      }}
    >

      <Navbar />

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px"
          }}
        >
          Studio Bela
        </h1>


        <h2
          style={{
            fontSize: "26px",
            fontWeight: "normal"
          }}
        >
          Design de sobrancelhas que valoriza sua beleza natural
        </h2>


        <p
          style={{
            maxWidth: "600px",
            margin: "30px auto",
            fontSize: "18px",
            lineHeight: "1.8"
          }}
        >
          Atendimento personalizado em Vila Moraes,
          São Bernardo do Campo e Grande Alvarenga.
        </p>


        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#b8865b",
            color: "#fff",
            padding: "16px 35px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Agendar pelo WhatsApp
        </a>


      </section>

      <section
  style={{
    padding: "60px 20px"
  }}
>

<h2
  style={{
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "40px"
  }}
>
  Serviços
</h2>


<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "0 auto"
  }}
>


<ServicoCard
  icone="🤎"
  titulo="Design de Sobrancelhas"
  descricao="Modelagem personalizada para valorizar o formato natural do seu rosto."
/>


<ServicoCard
  icone="✨"
  titulo="Design com Henna"
  descricao="Mais definição e destaque para suas sobrancelhas com acabamento elegante."
/>


<ServicoCard
  icone="🌸"
  titulo="Brow Lamination"
  descricao="Fios alinhados e efeito sofisticado para um olhar marcante."
/>


</div>

</section>

<GaleriaPremium />

<Galeria />

<Sobre />

<Depoimentos />

<Localizacao />

<Agendamento />

<Faq />


    </div>
  );
}

export default Home;