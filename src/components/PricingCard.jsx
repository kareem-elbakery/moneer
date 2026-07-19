import { FaCheck } from "react-icons/fa";

export default function PricingCard({ item }) {
  return (
    <article className={`pricing-card ${item.recommended ? "pricing-card--featured" : ""}`}>
      {item.badge ? <span className="package-badge">{item.badge}</span> : null}
      <div className="pricing-card__head">
        <h3>{item.name}</h3>
        <strong>{item.price}</strong>
      </div>
      <p>{item.description}</p>
      <ul>
        {item.features.map((feature) => (
          <li key={feature}>
            <FaCheck aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a className="button button--full" href="#contact">
        {item.cta}
      </a>
    </article>
  );
}
