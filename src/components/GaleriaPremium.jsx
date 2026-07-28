const imagens = [
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop"
];

function GaleriaPremium() {
  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#fff"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            color: "#4a3328"
          }}
        >
          Nosso Portfólio
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#777",
            maxWidth: "700px",
            margin: "20px auto 50px"
          }}
        >
          Cada atendimento é realizado com cuidado,
          buscando valorizar a beleza natural de cada cliente.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px"
          }}
        >
          {imagens.map((img, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,.12)"
              }}
            >
              <img
                src={img}
                alt={`Portfólio ${index + 1}`}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  transition: ".4s",
                  cursor: "pointer"
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GaleriaPremium;