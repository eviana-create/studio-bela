import { useState } from "react";

const perguntas = [
  {
    pergunta: "Preciso agendar um horário?",
    resposta:
      "Sim. Os atendimentos são realizados com horário agendado para garantir um atendimento exclusivo."
  },
  {
    pergunta: "Quanto tempo dura o atendimento?",
    resposta:
      "O tempo pode variar conforme o procedimento escolhido, mas normalmente leva entre 30 e 60 minutos."
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta:
      "As formas de pagamento serão informadas no momento do agendamento."
  },
  {
    pergunta: "Atende somente mulheres?",
    resposta:
      "Não. O atendimento está disponível para qualquer pessoa que deseje cuidar das sobrancelhas."
  }
];

function Faq() {
  const [aberta, setAberta] = useState(null);

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fffaf8"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#4a3328",
            marginBottom: "15px"
          }}
        >
          Perguntas Frequentes
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px"
          }}
        >
          Tire suas principais dúvidas antes de agendar seu atendimento.
        </p>

        {perguntas.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              marginBottom: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
              overflow: "hidden"
            }}
          >
            <button
              onClick={() =>
                setAberta(aberta === index ? null : index)
              }
              style={{
                width: "100%",
                padding: "20px",
                border: "none",
                background: "#fff",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "18px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              {item.pergunta}

              <span
                style={{
                  fontSize: "22px",
                  color: "#b8865b"
                }}
              >
                {aberta === index ? "−" : "+"}
              </span>
            </button>

            {aberta === index && (
              <div
                style={{
                  padding: "0 20px 20px",
                  color: "#666",
                  lineHeight: "1.7"
                }}
              >
                {item.resposta}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;