import "./App.css";
import header from "/header.svg";
import names from "/names.svg";
import rings from "/rings.svg";
import dressCode from "/dressCode.svg";
import giftCard from "/giftCard.svg";
import flower from "/flower.svg";
import img1 from "/img1.png";
import img2 from "/img2.png";
import img3 from "/img3.png";
import { useEffect, useState } from "react";

function App() {
  const [spaces, setSpaces] = useState(1);

  useEffect(() => {
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    const spacesParam = params.get("spaces");
    if (spacesParam) {
      setSpaces(spacesParam);
    }
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "url(bgBody.svg)",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={header} style={{ width: 120, height: 131 }} />
        </div>
        <div
          style={{
            paddingRight: 50,
            paddingLeft: 50,
            marginTop: -10,
          }}
        >
          <p
            style={{
              color: "#A57C00",
              textAlign: "center",
              fontSize: 31,
              lineHeight: "22px",
              margin: 0,
            }}
            className="luxurious-script-regular"
          >
            Nos casamos!
          </p>
          <p
            style={{
              color: "#A57C00",
              textAlign: "center",
              fontSize: 26,
              margin: 0,
              lineHeight: "22px",
            }}
            className="italianno-regular"
          >
            Y hay momentos en la vida que son especiales.
          </p>
          <p
            style={{
              color: "#A57C00",
              textAlign: "center",
              fontSize: 28,
              lineHeight: "22px",
              margin: 0,
            }}
            className="italianno-regular"
          >
            Pero compartirlos con las personas que quieres los convierte en
            inolvidables.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={names} style={{ width: 287, height: 182 }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={rings} style={{ width: 71, height: 56 }} />
          </div>
          <p
            style={{
              color: "#A57C00",
              textAlign: "center",
              fontSize: 28,
              lineHeight: "22px",
              margin: 0,
              marginTop: 20,
            }}
            className="italianno-regular"
          >
            Tenemos el honor de invitarte a celebrar nuestra unión matrimonial
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{
                color: "#A57C00",
                textAlign: "center",
                fontSize: 31,
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                marginTop: 24,
                marginBottom: 10,
              }}
              className="luxurious-script-regular"
            >
              Sábado 28 Septiembre
            </p>
          </div>
          <p
            style={{
              color: "#A57C00",
              textAlign: "center",
              fontSize: 28,
              lineHeight: "22px",
              margin: 0,
            }}
            className="italianno-regular"
          >
            Hora: 5pm
          </p>
          <a
            href="https://maps.app.goo.gl/6HpjuieQ8CnHytZb9"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                color: "#A57C00",
                textAlign: "center",
                fontSize: 28,
                margin: 0,
              }}
              className="italianno-regular"
            >
              Lugar:
            </p>
            <p
              style={{
                color: "#A57C00",
                textAlign: "center",
                fontSize: 28,
                lineHeight: "22px",
                margin: 0,
              }}
              className="italianno-regular"
            >
              Finca el Niu,
            </p>
            <p
              style={{
                color: "#A57C00",
                textAlign: "center",
                fontSize: 28,
                lineHeight: "22px",
                margin: 0,
              }}
              className="italianno-regular"
            >
              Bovalar #20, Polop, Alicante, España
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 28,
                paddingBottom: 60,
              }}
            >
              <div
                style={{
                  padding: 2,
                  backgroundImage: "linear-gradient(#A57C00, #DFAA09)",
                  borderRadius: 100,
                }}
              >
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 23,
                    backgroundImage: "linear-gradient(#8AAD35, #445E05)",
                    borderRadius: 100,
                    paddingRight: 24,
                    paddingLeft: 24,
                    margin: 0,
                  }}
                  className="luxurious-script-regular"
                >
                  Mapa
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          background: "#334605",
          paddingBottom: 42,
          paddingTop: 420,
          position: "relative",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -30,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={img3} style={{ width: 305, height: 240 }} />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
            <img src={img2} style={{ width: 138, height: 190 }} />
            <img src={img1} style={{ width: 138, height: 190 }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 31,
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
            className="italianno-regular"
          >
            Hemos reservado {spaces} lugar{spaces === 1 ? "" : "es"} para ti.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={dressCode} style={{ width: 125, height: 58 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 31,
              borderBottom: "1px solid black",
              marginBottom: 0,
            }}
            className="italianno-regular"
          >
            Traje Formal
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 28,
              lineHeight: "22px",
              margin: 0,
              marginTop: 20,
              maxWidth: 350,
            }}
            className="italianno-regular"
          >
            Para nosotras tu presencia es nuestro mejor regalo. Pero se que
            mueres de ganas de hacernos un obsequio
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <img src={giftCard} style={{ width: 30, height: 30 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 28,
              lineHeight: "22px",
              margin: 0,
              maxWidth: 350,
              paddingBottom: 18,
              borderBottom: "1px solid black",
            }}
            className="italianno-regular"
          >
            Para eso tendremos una caja donde lo podrás depositar.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              color: "white",
              textAlign: "right",
              fontSize: 28,
              lineHeight: "22px",
              margin: 0,
              marginTop: 20,
              maxWidth: 285,
            }}
            className="italianno-regular"
          >
            “El amor es el vinculo eterno que une corazones, tejiendo, historias
            de ternura y complicidad en el lienzo de la vida.”
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <img
            src={flower}
            style={{ width: 220, height: 284, marginBottom: -20 }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
