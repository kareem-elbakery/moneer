import ScrollReveal from "./ScrollReveal.jsx";

export default function SectionHeader({ eyebrow, title, text, align = "center" }) {
  return (
    <ScrollReveal className={`section-header section-header--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </ScrollReveal>
  );
}
