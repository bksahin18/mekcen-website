"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Wrench,
  Shield,
  Users,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("anasayfa");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading effect
    setTimeout(() => setLoading(false), 1000);

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // E-posta koruması
  const getEmail = () => {
    const user = "mekcenasansor";
    const domain = "hotmail.com";
    return `${user}@${domain}`;
  };

  // Telefon koruması
  const getPhone = (type) => {
    const phones = {
      office: "+90 312 395 19 32",
      mobile: "+90 532 372 95 11",
    };
    return phones[type];
  };

  const products = [
    {
      name: "MK-2000 Serisi",
      description: "Yüksek performanslı asansör kontrol kartı",
      features: [
        "10 kata kadar destek",
        "Acil durum sistemi",
        "LCD ekran desteği",
      ],
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "MK-3000 Serisi",
      description: "Profesyonel asansör kontrol sistemi",
      features: [
        "20 kata kadar destek",
        "Uzaktan kontrol",
        "Arıza tespit sistemi",
      ],
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "MK-ECO Serisi",
      description: "Enerji tasarruflu kontrol kartı",
      features: ["Enerji verimliliği", "Sessiz çalışma", "Kompakt tasarım"],
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  const services = [
    {
      icon: <Wrench />,
      title: "Bakım & Onarım",
      desc: "7/24 teknik destek ve yerinde servis",
      color: "#667eea",
    },
    {
      icon: <Shield />,
      title: "Garanti",
      desc: "2 yıl ürün garantisi",
      color: "#f093fb",
    },
    {
      icon: <Users />,
      title: "Danışmanlık",
      desc: "Proje bazlı çözümler",
      color: "#4facfe",
    },
  ];

  // Loading screen
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <Image
            src="/logo.png"
            alt="MEKCEN Logo"
            width={150}
            height={150}
            priority
          />
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <SpeedInsights />

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <Image
                src="/logo.png"
                alt="MEKCEN Logo"
                width={50}
                height={50}
                className="logo-image"
                priority
              />
              <div className="company-name">
                <h1>MEKCEN</h1>
                <p>Elektronik Asansör Kontrol Sistemleri</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-menu desktop-nav">
              {["anasayfa", "urunler", "hakkimizda", "iletisim"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? "active" : ""}
                >
                  {tab === "anasayfa"
                    ? "Ana Sayfa"
                    : tab === "urunler"
                    ? "Ürünlerimiz"
                    : tab === "hakkimizda"
                    ? "Hakkımızda"
                    : "İletişim"}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}>
        <nav className="mobile-nav">
          {["anasayfa", "urunler", "hakkimizda", "iletisim"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setMobileMenuOpen(false);
              }}
              className={activeTab === tab ? "active" : ""}
            >
              {tab === "anasayfa"
                ? "Ana Sayfa"
                : tab === "urunler"
                ? "Ürünlerimiz"
                : tab === "hakkimizda"
                ? "Hakkımızda"
                : "İletişim"}
            </button>
          ))}
        </nav>
      </div>

      {/* Ana Sayfa İçeriği */}
      {activeTab === "anasayfa" && (
        <div className="fade-in">
          <section className="hero modern-hero">
            <div className="hero-background">
              <div className="hero-pattern"></div>
            </div>
            <div className="container">
              <div className="hero-content">
                <h2 className="hero-title">
                  1997&apos;den Beri{" "}
                  <span className="gradient-text">Güvenilir</span> Çözüm
                  Ortağınız
                </h2>
                <p className="hero-subtitle">
                  Asansör kontrol sistemlerinde 25 yılı aşkın tecrübe ile
                  modern, güvenli ve ekonomik çözümler sunuyoruz.
                </p>
                <div className="button-group">
                  <button
                    onClick={() => setActiveTab("urunler")}
                    className="btn btn-primary btn-animated"
                  >
                    <span>Ürünlerimizi İnceleyin</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("iletisim")}
                    className="btn btn-secondary btn-glass"
                  >
                    <span>İletişime Geçin</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h3 className="section-title">
                Neden <span className="gradient-text">MEKCEN?</span>
              </h3>
              <div className="features-grid">
                <div className="feature-card card-animated">
                  <div className="feature-icon gradient-icon">
                    <CheckCircle size={32} />
                  </div>
                  <h4>25 Yıllık Tecrübe</h4>
                  <p>
                    1997&apos;den beri sektörde edindiğimiz deneyimle güvenilir
                    çözümler sunuyoruz.
                  </p>
                </div>
                <div className="feature-card card-animated">
                  <div className="feature-icon gradient-icon">
                    <Shield size={32} />
                  </div>
                  <h4>Garantili Ürünler</h4>
                  <p>
                    Tüm ürünlerimiz 2 yıl garanti kapsamında, güvenle
                    kullanabilirsiniz.
                  </p>
                </div>
                <div className="feature-card card-animated">
                  <div className="feature-icon gradient-icon">
                    <Wrench size={32} />
                  </div>
                  <h4>Teknik Destek</h4>
                  <p>
                    Uzman ekibimizle 7/24 teknik destek ve yerinde servis
                    hizmeti.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-gradient">
            <div className="container">
              <h3 className="section-title">Hizmetlerimiz</h3>
              <div className="features-grid">
                {services.map((service, index) => (
                  <div key={index} className="feature-card service-card">
                    <div
                      className="feature-icon"
                      style={{ background: service.color }}
                    >
                      {service.icon}
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Ürünler Sayfası */}
      {activeTab === "urunler" && (
        <section className="section fade-in">
          <div className="container">
            <h2 className="section-title">
              <span className="gradient-text">Ürünlerimiz</span>
            </h2>
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card modern-card">
                  <div
                    className="product-header"
                    style={{ background: product.color }}
                  >
                    <div className="product-logo">
                      <div className="product-logo-circle glass-effect">MK</div>
                      <p>{product.name}</p>
                    </div>
                  </div>
                  <div className="product-content">
                    <p>{product.description}</p>
                    <ul className="feature-list">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="check-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-gradient btn-full">
                      Detaylı Bilgi
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hakkımızda Sayfası */}
      {activeTab === "hakkimizda" && (
        <section className="section fade-in">
          <div className="container">
            <h2 className="section-title">
              <span className="gradient-text">Hakkımızda</span>
            </h2>

            <div className="about-box glass-card">
              <h3>Firmamız</h3>
              <p>
                <strong>MEKCEN Elektronik Asansör Kontrol Sistemleri</strong>,
                1997 yılından bu yana Ankara İvedik OSB&apos;de faaliyet
                gösteren, asansör sektöründe öncü firmalardan biridir. Kurucumuz{" "}
                <strong>Mehmet Kıvrak</strong> önderliğinde, 25 yılı aşkın
                tecrübemizle sektöre yenilikçi ve güvenilir çözümler
                sunmaktayız.
              </p>
              <p>
                Firmamız, asansör kontrol kartları tasarımı, üretimi ve
                satışının yanı sıra, bakım-onarım hizmetleri ile de
                müşterilerimize kesintisiz destek sağlamaktadır.
              </p>
            </div>

            <div className="mission-vision">
              <div className="mission-card glass-card card-hover">
                <h4>Misyonumuz</h4>
                <p>
                  Asansör sektöründe güvenli, ekonomik ve yenilikçi kontrol
                  sistemleri üreterek, müşterilerimizin yaşam kalitesini
                  artırmak ve sektörde güvenilir bir çözüm ortağı olmak.
                </p>
              </div>
              <div className="mission-card glass-card card-hover">
                <h4>Vizyonumuz</h4>
                <p>
                  Türkiye&apos;nin lider asansör kontrol sistemleri üreticisi
                  olarak, uluslararası standartlarda ürünler geliştirmek ve
                  ihracat yapan bir firma haline gelmek.
                </p>
              </div>
            </div>

            <div className="stats-box gradient-box">
              <h4 className="stats-title">Rakamlarla MEKCEN</h4>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number counter">25+</div>
                  <div className="stat-label">Yıllık Tecrübe</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number counter">1000+</div>
                  <div className="stat-label">Mutlu Müşteri</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number counter">5000+</div>
                  <div className="stat-label">Kurulum</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">7/24</div>
                  <div className="stat-label">Teknik Destek</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* İletişim Sayfası */}
      {activeTab === "iletisim" && (
        <section className="section fade-in">
          <div className="container">
            <h2 className="section-title">
              <span className="gradient-text">İletişim</span>
            </h2>

            <div className="contact-grid">
              <div className="contact-card glass-card">
                <h3>İletişim Bilgilerimiz</h3>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-item-icon gradient-icon">
                      <MapPin />
                    </div>
                    <div className="contact-item-content">
                      <strong>Adres:</strong>
                      <p>
                        Güneş 90 Sanayi Sitesi, İvedik OSB, 1403. Sk. NO:22,
                        06374 <br />
                        Yenimahalle/ANKARA
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon gradient-icon">
                      <Phone />
                    </div>
                    <div className="contact-item-content">
                      <strong>Telefon:</strong>
                      <p>
                        {getPhone("office")}
                        <br />
                        {getPhone("mobile")}
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon gradient-icon">
                      <Mail />
                    </div>
                    <div className="contact-item-content">
                      <strong>E-posta:</strong>
                      <p>
                        <a href={`mailto:${getEmail()}`}>{getEmail()}</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon gradient-icon">
                      <Clock />
                    </div>
                    <div className="contact-item-content">
                      <strong>Çalışma Saatleri:</strong>
                      <p>
                        Pazartesi - Cuma: 08:30 - 18:00
                        <br />
                        Cumartesi: 09:00 - 14:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card glass-card">
                <h3>Bize Ulaşın</h3>
                <div className="quick-contact gradient-box">
                  <p>
                    <strong>Hızlı İletişim İçin:</strong>
                  </p>
                  <p>📞 Hemen arayın: {getPhone("office")}</p>
                  <p>📱 WhatsApp: {getPhone("mobile")}</p>
                  <p>✉️ E-posta: {getEmail()}</p>
                </div>

                <div className="cta-box">
                  <h4>Teklif Almak İster Misiniz?</h4>
                  <p>
                    Projeniz için özel fiyat teklifi almak veya ürünlerimiz
                    hakkında detaylı bilgi için bizimle iletişime geçin.
                  </p>
                  <button
                    className="btn btn-gradient btn-full btn-animated"
                    onClick={() => {
                      window.open("https://wa.me/905323729511", "_blank");
                    }}
                  >
                    <Phone size={20} />
                    <span>WhatsApp&apos;tan Ulaşın</span>
                  </button>
                </div>

                <div className="cta-box">
                  <h4>Ziyaret Edin</h4>
                  <p>
                    Ürünlerimizi yerinde görmek ve detaylı bilgi almak için
                    showroom&apos;umuzu ziyaret edebilirsiniz.
                  </p>
                  <button
                    className="btn btn-primary btn-full btn-animated"
                    onClick={() => {
                      window.open("https://maps.app.goo.gl/YDekciMW95T8t9kA6");
                    }}
                  >
                    <MapPin size={20} />
                    <span>Yol Tarifi Al</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="map-container glass-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.2168285982207!2d32.74748886965946!3d39.98907042572986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349e5470fd993%3A0x9d169585bbece615!2sMekcen%20Asans%C3%B6r!5e0!3m2!1str!2str!4v1755178189712!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                title="MEKCEN Konum"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <Image
                  src="/logo.png"
                  alt="MEKCEN Logo"
                  width={40}
                  height={40}
                />
                <h4>MEKCEN</h4>
              </div>
              <p>
                1997&apos;den beri asansör kontrol sistemlerinde güvenilir çözüm
                ortağınız.
              </p>
            </div>

            <div className="footer-column">
              <h4>Hızlı Linkler</h4>
              <ul>
                {["anasayfa", "urunler", "hakkimizda", "iletisim"].map(
                  (tab) => (
                    <li key={tab}>
                      <button
                        onClick={() => {
                          setActiveTab(tab);
                          scrollToTop();
                        }}
                      >
                        {tab === "anasayfa"
                          ? "Ana Sayfa"
                          : tab === "urunler"
                          ? "Ürünlerimiz"
                          : tab === "hakkimizda"
                          ? "Hakkımızda"
                          : "İletişim"}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="footer-column">
              <h4>İletişim</h4>
              <p>
                Tel: {getPhone("office")} <br />
                WhatsApp: {getPhone("mobile")} <br />
                <br />
                Güneş 90 Sanayi Sitesi, İvedik OSB, 1403. Sk. NO:22, 06374{" "}
                <br />
                Yenimahalle/ANKARA
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2025 MEKCEN Elektronik Asansör Kontrol Sistemleri. Tüm hakları
              saklıdır.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <ChevronUp size={24} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905323729511?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="WhatsApp İletişim"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
