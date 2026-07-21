import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaArrowRight,
  FaBullseye,
  FaClipboardCheck,
  FaDumbbell,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaHeartbeat,
  FaInstagram,
  FaMedal,
  FaPhoneAlt,
  FaShieldAlt,
  FaStethoscope,
  FaTiktok,
  FaTrophy,
  FaUserCheck,
  FaWhatsapp,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";

import BookingForm from "./components/BookingForm.jsx";
import Footer from "./components/Footer.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import Navbar from "./components/Navbar.jsx";
import PricingCard from "./components/PricingCard.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import StatCounter from "./components/StatCounter.jsx";
import { contact, copy } from "./data/content.js";
import {
  aboutPortrait,
  certificateImages,
  championshipImages,
  coachImages,
  heroBackground,
  heroPortrait,
  transformationImages,
} from "./data/images.js";

const featureIcons = {
  scientific: FaDumbbell,
  medical: FaStethoscope,
  international: FaGlobe,
  personalized: FaUserCheck,
  nutrition: FaHeartbeat,
  corrective: FaShieldAlt,
  performance: FaBullseye,
  followup: FaClipboardCheck,
  competition: FaTrophy,
};

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function Hero({ t }) {
  return (
    <section
      className="hero"
      id="home"
      style={{ "--hero-bg": `url("${heroBackground?.src}")` }}
    >
      <div className="section-inner hero__inner">
        <motion.div
          className="hero__copy"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p className="hero__arabic-title">{t.hero.arabicTitle}</p>
          <div className="coach-name">
            <span>{t.hero.coachNameLabel}</span>
            <strong>{t.hero.coachName}</strong>
          </div>
          <ul className="hero__roles" aria-label="Professional roles">
            {t.hero.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <p className="hero__description">{t.hero.description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#packages">
              <span>{t.hero.primaryCta}</span>
              <FaArrowRight className="inline-icon" aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#contact">
              {t.hero.secondaryCta}
            </a>
          </div>
          <div className="hero__proof" aria-label="Coach highlights">
            {t.hero.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.figure
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.96, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <img
            src={heroPortrait?.src}
            alt={t.alts.hero}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </motion.figure>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner about-grid">
        <ScrollReveal className="about-media">
          <img src={aboutPortrait?.src} alt={t.alts.about} loading="lazy" decoding="async" />
        </ScrollReveal>
        <ScrollReveal className="about-content" delay={0.08}>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.title}</h2>
          <p>{t.about.body}</p>
          <ul className="about-points">
            {t.about.points.map((point) => (
              <li key={point}>
                <FaMedal aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="stats-grid">
            {t.about.stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Certificates({ t }) {
  return (
    <section className="section" id="certificates">
      <div className="section-inner">
        <SectionHeader
          eyebrow={t.certificates.eyebrow}
          title={t.certificates.title}
          text={t.certificates.text}
        />
        <ScrollReveal delay={0.06}>
          <ImageGallery
            images={certificateImages}
            alt={t.alts.certificate}
            className="certificate-gallery"
            showCaption
            captions={t.certificates.names}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

function ChampionshipCarousel({ t, language }) {
  const [index, setIndex] = useState(-1);
  const slides = useMemo(
    () => championshipImages.map((image) => ({ src: image.src })),
    [],
  );

  if (!championshipImages.length) return null;

  return (
    <>
      <div className="championship-carousel">
        <Swiper
          key={language}
          modules={[Autoplay, Navigation]}
          dir="ltr"
          loop
          speed={700}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          slidesPerView={1.08}
          spaceBetween={14}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 18 },
            900: { slidesPerView: 2.15, spaceBetween: 22 },
          }}
        >
          {championshipImages.map((image, imageIndex) => (
            <SwiperSlide key={image.path}>
              <button
                className="championship-slide"
                type="button"
                aria-label={`${t.alts.championship} ${imageIndex + 1}`}
                onClick={() => setIndex(imageIndex)}
              >
                <img
                  src={image.src}
                  alt={`${t.alts.championship} ${imageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  );
}

function Achievements({ t, language }) {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="section-inner achievements-grid">
        <ScrollReveal className="achievement-copy">
          <span className="eyebrow">{t.achievements.eyebrow}</span>
          <h2>{t.achievements.title}</h2>
          <p>{t.achievements.text}</p>
          <ul className="achievement-list">
            {t.achievements.items.map((item) => (
              <li key={item}>
                <FaTrophy aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <ChampionshipCarousel t={t} language={language} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function Transformations({ t }) {
  return (
    <section className="section" id="transformations">
      <div className="section-inner">
        <SectionHeader
          eyebrow={t.transformations.eyebrow}
          title={t.transformations.title}
          text={t.transformations.text}
        />
        <ScrollReveal>
          <ImageGallery
            images={transformationImages}
            alt={t.alts.transformation}
            className="transformation-gallery"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhyChooseMe({ t }) {
  return (
    <section className="section why-section" id="why">
      <div className="section-inner">
        <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="feature-grid">
          {t.why.features.map((feature, index) => {
            const Icon = featureIcons[feature.id] ?? FaDumbbell;

            return (
              <ScrollReveal key={feature.id} delay={Math.min(index * 0.035, 0.18)}>
                <article className="feature-card">
                  <Icon aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Packages({ t }) {
  return (
    <section className="section packages-section" id="packages">
      <div className="section-inner">
        <SectionHeader eyebrow={t.packages.eyebrow} title={t.packages.title} />
        <div className="pricing-grid">
          {t.packages.items.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.08}>
              <PricingCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoachGallery({ t }) {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-inner">
        <SectionHeader eyebrow={t.gallery.eyebrow} title={t.gallery.title} text={t.gallery.text} />
        <ScrollReveal>
          <ImageGallery
            images={coachImages}
            alt={t.alts.gallery}
            layout="masonry"
            className="coach-gallery"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const contactActions = [
    {
      label: t.contact.whatsapp,
      href: `https://wa.me/${contact.coachPhoneInternational}`,
      icon: FaWhatsapp,
    },
    { label: t.contact.call, href: `tel:+${contact.coachPhoneInternational}`, icon: FaPhoneAlt },
    { label: t.contact.facebook, href: contact.facebook, icon: FaFacebookF },
    { label: t.contact.instagram, href: contact.instagram, icon: FaInstagram },
    { label: t.contact.tiktok, href: contact.tiktok, icon: FaTiktok },
    { label: t.contact.emailButton, href: `mailto:${contact.email}`, icon: FaEnvelope },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner contact-grid">
        <ScrollReveal className="contact-copy">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </ScrollReveal>
        <ScrollReveal className="contact-panel" delay={0.08}>
          <h3>{t.contact.coachName}</h3>
          <dl className="contact-list">
            <div>
              <dt>{t.contact.phone}</dt>
              <dd>{contact.coachPhone}</dd>
            </div>
            <div>
              <dt>{t.contact.facebook}</dt>
              <dd>
                <a href={contact.facebook} target="_blank" rel="noreferrer">
                  MounierElsherbini
                </a>
              </dd>
            </div>
            <div>
              <dt>{t.contact.instagram}</dt>
              <dd>
                <a href={contact.instagram} target="_blank" rel="noreferrer">
                  @mounier_mohamed
                </a>
              </dd>
            </div>
            <div>
              <dt>{t.contact.tiktok}</dt>
              <dd>
                <a href={contact.tiktok} target="_blank" rel="noreferrer">
                  @mouneir_mohamed
                </a>
              </dd>
            </div>
            <div>
              <dt>{t.contact.email}</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
          </dl>
          <div className="contact-actions">
            {contactActions.map((action) => {
              const Icon = action.icon;

              return (
                <a
                  className="contact-button"
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" />
                  <span>{action.label}</span>
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("chef-language") || "en");
  const t = copy[language];

  useEffect(() => {
    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title = t.metaTitle;
    localStorage.setItem("chef-language", language);

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", t.metaDescription);
    }
  }, [language, t.metaDescription, t.metaTitle]);

  return (
    <>
      <Navbar
        language={language}
        onToggleLanguage={() => setLanguage((value) => (value === "en" ? "ar" : "en"))}
        t={t}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Certificates t={t} />
        <Achievements t={t} language={language} />
        <Transformations t={t} />
        <WhyChooseMe t={t} />
        <Packages t={t} />
        <CoachGallery t={t} />
        <BookingForm t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
