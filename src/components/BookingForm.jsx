import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { contact } from "../data/content.js";

function buildWhatsAppMessage(data, t) {
  const lines = [
    `👤 *${t.booking.nameLabel}:* ${data.name}`,
    `📞 *${t.booking.phoneLabel}:* ${data.phone}`,
    `🎂 *${t.booking.ageLabel}:* ${data.age}`,
    `🎯 *${t.booking.goalLabel}:* ${data.goal}`,
    `📦 *${t.booking.packageLabel}:* ${data.package}`,
    `⚖️ *${t.booking.weightLabel}:* ${data.weight}`,
    `📏 *${t.booking.heightLabel}:* ${data.height}`,
    `💪 *${t.booking.experienceLabel}:* ${data.experience}`,
    `🩺 *${t.booking.injuriesLabel}:* ${data.injuries}`,
  ];

  if (data.notes) {
    lines.push(`📝 *${t.booking.notesLabel}:* ${data.notes}`);
  }

  return lines.join("\n");
}

export default function BookingForm({ t }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    goal: "",
    package: "",
    weight: "",
    height: "",
    experience: "",
    injuries: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = buildWhatsAppMessage(form, t);
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${contact.coachPhoneInternational}?text=${encoded}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isFormValid =
    form.name.trim() &&
    form.phone.trim() &&
    form.age.trim() &&
    form.goal &&
    form.package &&
    form.weight.trim() &&
    form.height.trim() &&
    form.experience;

  return (
    <section className="section booking-section" id="booking">
      <div className="section-inner">
        <div className="booking-header">
          <span className="eyebrow">{t.booking.eyebrow}</span>
          <h2>{t.booking.title}</h2>
          <p className="booking-description">{t.booking.text}</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="booking-grid">
            {/* الاسم */}
            <div className="field-group">
              <label htmlFor="booking-name">{t.booking.nameLabel}</label>
              <input
                id="booking-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={t.booking.namePlaceholder}
                required
              />
            </div>

            {/* الهاتف */}
            <div className="field-group">
              <label htmlFor="booking-phone">{t.booking.phoneLabel}</label>
              <input
                id="booking-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder={t.booking.phonePlaceholder}
                required
              />
            </div>

            {/* العمر */}
            <div className="field-group">
              <label htmlFor="booking-age">{t.booking.ageLabel}</label>
              <input
                id="booking-age"
                name="age"
                type="number"
                min="10"
                max="100"
                value={form.age}
                onChange={handleChange}
                placeholder={t.booking.agePlaceholder}
                required
              />
            </div>

            {/* الهدف */}
            <div className="field-group">
              <label htmlFor="booking-goal">{t.booking.goalLabel}</label>
              <select
                id="booking-goal"
                name="goal"
                value={form.goal}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  -- {t.booking.goalLabel} --
                </option>
                {t.booking.goals.map((g) => (
                  <option key={g.value} value={g.label}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            {/* الباقة */}
            <div className="field-group">
              <label htmlFor="booking-package">{t.booking.packageLabel}</label>
              <select
                id="booking-package"
                name="package"
                value={form.package}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  -- {t.booking.packageLabel} --
                </option>
                {t.booking.packages.map((p) => (
                  <option key={p.value} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            {/* الوزن */}
            <div className="field-group">
              <label htmlFor="booking-weight">{t.booking.weightLabel}</label>
              <input
                id="booking-weight"
                name="weight"
                type="number"
                min="20"
                max="300"
                value={form.weight}
                onChange={handleChange}
                placeholder={t.booking.weightPlaceholder}
                required
              />
            </div>

            {/* الطول */}
            <div className="field-group">
              <label htmlFor="booking-height">{t.booking.heightLabel}</label>
              <input
                id="booking-height"
                name="height"
                type="number"
                min="80"
                max="250"
                value={form.height}
                onChange={handleChange}
                placeholder={t.booking.heightPlaceholder}
                required
              />
            </div>

            {/* الخبرة */}
            <div className="field-group">
              <label htmlFor="booking-experience">
                {t.booking.experienceLabel}
              </label>
              <select
                id="booking-experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  -- {t.booking.experienceLabel} --
                </option>
                {t.booking.experiences.map((e) => (
                  <option key={e.value} value={e.label}>
                    {e.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* الإصابات - Full Width */}
          <div className="field-group field-group--full">
            <label htmlFor="booking-injuries">{t.booking.injuriesLabel}</label>
            <input
              id="booking-injuries"
              name="injuries"
              type="text"
              value={form.injuries}
              onChange={handleChange}
              placeholder={t.booking.injuriesPlaceholder}
              required
            />
          </div>

          {/* الملاحظات - Full Width */}
          <div className="field-group field-group--full">
            <label htmlFor="booking-notes">{t.booking.notesLabel}</label>
            <textarea
              id="booking-notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder={t.booking.notesPlaceholder}
              rows={4}
            />
          </div>

          {/* ملاحظة الخصوصية */}
          <p className="booking-privacy">{t.booking.privacyNote}</p>

          {/* زر الإرسال */}
          <button
            className="button button--primary booking-submit"
            type="submit"
            disabled={!isFormValid}
          >
            <FaWhatsapp aria-hidden="true" />
            <span>{t.booking.submitText}</span>
          </button>
        </form>
      </div>
    </section>
  );
}