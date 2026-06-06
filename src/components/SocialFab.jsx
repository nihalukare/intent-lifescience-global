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

  const phoneNumber = "918149106619";
  const email = "info@intentlifescience.com";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  const telegramUrl = "https://t.me/IntentLifeScienceGlobal";
  const emailUrl = `mailto:${email}`;

  return (
    <div className="fab-wrapper">
      <div className={`fab-container ${open ? "open" : ""}`}>
        <div className="fab-menu">
          <a
            href={whatsappUrl}
            target="_blank"
            className="social-whatsapp"
            rel="noreferrer"
            title="Chat on WhatsApp"
          >
            <RiWhatsappLine size={24} />
          </a>
          <a
            href={telegramUrl}
            target="_blank"
            className="social-telegram"
            rel="noreferrer"
            title="Join Telegram"
          >
            <RiTelegram2Fill size={24} />
          </a>
          <a
            href={emailUrl}
            className="social-mail"
            title="Email Us"
          >
            <RiMailLine size={24} />
          </a>
        </div>

        <div className="fab-toggle-wrap">
          {!open && <span className="socials-text">Reach Out!</span>}
          <button
            className="fab-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle contact menu"
          >
            {open ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialFab;
