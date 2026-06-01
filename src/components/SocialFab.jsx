import { useState } from "react";
import {
  RiWhatsappLine,
  RiTelegram2Fill,
  RiMailLine,
  RiMenuLine,
  RiCloseLine,
} from "@remixicon/react";

function SocialFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fab-wrapper">
      <div className={`fab-container ${open ? "open" : ""}`}>
        <div className="fab-menu">
          <a href="#" className="social-mail">
            <RiMailLine />
          </a>
          <a href="#" className="social-telegram">
            <RiTelegram2Fill />
          </a>
          <a href="#" className="social-whatsapp">
            <RiWhatsappLine />
          </a>
        </div>

        <div className="fab-toggle-wrap">
          {!open && <span className="socials-text">Reach Out!</span>}
          <button className="fab-toggle" onClick={() => setOpen(!open)}>
            {open ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialFab;
