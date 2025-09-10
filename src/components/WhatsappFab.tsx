import React from "react";

type Props = {
  phone?: string; // e.g. "256766898058"
  message?: string; // prefill message
  bottom?: number; // px
  right?: number; // px
  left?: number; // px (use either right or left)
};

const WhatsAppFab: React.FC<Props> = ({
  phone = "256782 808261",
  message = "Hi 👋 I need some help",
  bottom = 20,
  right = 20,
  left,
}) => {
  const href = `https://wa.me/${phone.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;
  const style: React.CSSProperties = {
    position: "fixed",
    bottom,
    right: left == null ? right : undefined,
    left,
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "#25D366",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,.25)",
    zIndex: 9999,
    cursor: "pointer",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      style={style}
    >
      <i
        className="fab fa-whatsapp"
        style={{ fontSize: "20px", color: "white" }}
      ></i>
    </a>
  );
};

export default WhatsAppFab;
