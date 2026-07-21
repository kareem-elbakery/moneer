import { FaWhatsapp } from "react-icons/fa";
import { contact } from "../data/content.js";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="developer-credit" dir="rtl">
        <span>تصميم وتطوير الموقع بواسطة</span>
        <strong>كريم البكري</strong>
      </div>
      <div className="footer-socials">
        <a
          className="developer-whatsapp"
          href={`https://wa.me/${contact.developerWhatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`واتساب ${contact.developerPhone}`}
        >
          <FaWhatsapp aria-hidden="true" />
          <span dir="ltr">{contact.developerPhone}</span>
        </a>
      </div>
    </footer>
  );
}
