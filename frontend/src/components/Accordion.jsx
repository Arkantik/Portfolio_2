// Package
import { useState } from "react";

// Style
import style from "../styles/accordion.module.css";

export default function Accordion() {
  const [activePanel, setActivePanel] = useState(null);

  function toggleAccordion(panelId) {
    setActivePanel((prevActivePanel) =>
      prevActivePanel === panelId ? null : panelId
    );
  }

  return (
    <div className={`${style.accordion} z-10 text-light`}>
      <div className={`${style.accordion_panel}`}>
        <h2 id="panel1-heading">
          <button
            type="button"
            className={style.accordion_trigger}
            onClick={() => toggleAccordion("panel1-content")}
            aria-controls="panel1-content"
            aria-expanded={activePanel === "panel1-content"}
          >
            <span className={style.accordion_title} id="panel1-title">
              Crypto
            </span>

            <svg viewBox="0 -0.5 34 34" className={style.accordion_icon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z"
                fill="#F7931A"
              />
            </svg>
          </button>
        </h2>

        <div
          className={`${style.accordion_content} ${
            activePanel === "panel1-content" ? style.active : ""
          }`}
          id="panel1-content"
          aria-labelledby="panel1-heading"
          aria-hidden={activePanel !== "panel1-content"}
          role="region"
        >
          <p>
            Port mutiny draught handsomely ye furl flogging line shrouds hulk.
            Spirits Plate Fleet code of conduct.
          </p>
          <img
            className={style.accordion_image}
            src="../assets/img/about/crypto.avif"
            alt="A sailboat at sea during sunset"
          />
        </div>
      </div>
      <div className={style.accordion_panel}>
        <h2 id="panel2-heading">
          <button
            type="button"
            className={style.accordion_trigger}
            onClick={() => toggleAccordion("panel2-content")}
            aria-controls="panel2-content"
            aria-expanded={activePanel === "panel2-content"}
          >
            <span className={style.accordion_title} id="panel2-title">
              Travel
            </span>
            <svg viewBox="0 0 36 36" className={style.accordion_icon}>
              <path d="M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z" />
              <path d="M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z" />
            </svg>
          </button>
        </h2>

        <div
          className={`${style.accordion_content} ${
            activePanel === "panel2-content" ? style.active : ""
          }`}
          id="panel2-content"
          aria-labelledby="panel2-heading"
          aria-hidden={activePanel !== "panel2-content"}
          role="region"
        >
          <p>
            Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp
            Privateer galleon. Booty boom yard boatswain quarter.
          </p>
          <img
            className={style.accordion_image}
            src="../assets/img/about/travel2.jpg"
            alt="closeup of a metal chain connected to a metal ring in the ground"
          />
        </div>
      </div>
      <div className={style.accordion_panel}>
        <h2 id="panel2-heading">
          <button
            type="button"
            className={style.accordion_trigger}
            onClick={() => toggleAccordion("panel3-content")}
            aria-controls="panel2-content"
            aria-expanded={activePanel === "panel3-content"}
          >
            <span className={style.accordion_title} id="panel2-title">
              Travel
            </span>
            <svg viewBox="0 0 36 36" className={style.accordion_icon}>
              <path d="M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z" />
              <path d="M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z" />
            </svg>
          </button>
        </h2>

        <div
          className={`${style.accordion_content} ${
            activePanel === "panel3-content" ? style.active : ""
          }`}
          id="panel2-content"
          aria-labelledby="panel3-heading"
          aria-hidden={activePanel !== "panel3-content"}
          role="region"
        >
          <p>
            Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp
            Privateer galleon. Booty boom yard boatswain quarter.
          </p>
          <img
            className={style.accordion_image}
            src="../assets/img/about/travel2.jpg"
            alt="closeup of a metal chain connected to a metal ring in the ground"
          />
        </div>
      </div>
    </div>
  );
}
