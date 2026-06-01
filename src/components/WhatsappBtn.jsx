import { RiWhatsappLine } from "@remixicon/react";
import { Link } from "react-router-dom";

function WhatsAppButton({ productName }) {
  const phoneNumber = "918698109212";

  const message = `Hi 👋 Thanks for your enquiry😊

I am interested in: ${productName}

💊 Please share: Medicine Name + Strength + Quantity
✅ I'll check availability & send you the best price quotation quickly`;

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
