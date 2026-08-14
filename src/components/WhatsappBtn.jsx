import { RiWhatsappLine } from "@remixicon/react";
import { Link } from "react-router-dom";

function WhatsAppButton({ productName }) {
  const phoneNumber = "918149713321";

  const message = `Hi 👋 \nI am interested in: ${productName}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      <Link
        to={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success d-md-flex justify-content-center align-items-center gap-md-2"
      >
        <RiWhatsappLine /> Order on WhatsApp
      </Link>
    </>
  );
}

export default WhatsAppButton;
