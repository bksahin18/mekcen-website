"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Wrench,
  Shield,
  Users,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("anasayfa");

  const products = [
    {
      name: "MK-2000 Serisi",
      description: "Yüksek performanslı asansör kontrol kartı",
      features: [
        "10 kata kadar destek",
        "Acil durum sistemi",
        "LCD ekran desteği",
      ],
    },
    {
      name: "MK-3000 Serisi",
      description: "Profesyonel asansör kontrol sistemi",
      features: [
        "20 kata kadar destek",
        "Uzaktan kontrol",
        "Arıza tespit sistemi",
      ],
    },
    {
      name: "MK-ECO Serisi",
      description: "Enerji tasarruflu kontrol kartı",
      features: ["Enerji verimliliği", "Sessiz çalışma", "Kompakt tasarım"],
    },
  ];

  const services = [
    {
      icon: <Wrench />,
      title: "Bakım & Onarım",
      desc: "7/24 teknik destek ve yerinde servis",
    },
    { icon: <Shield />, title: "Garanti", desc: "2 yıl ürün garantisi" },
    { icon: <Users />, title: "Danışmanlık", desc: "Proje bazlı çözümler" },
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-box">
                <div className="logo-letter">M</div>
              </div>
              <div className="company-name">
                <h1>MEKCEN</h1>
                <p>Elektronik Asansör Kontrol Sistemleri</p>
              </div>
            </div>

            <nav className="nav-menu">
              <button
                onClick={() => setActiveTab("anasayfa")}
                className={activeTab === "anasayfa" ? "active" : ""}
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => setActiveTab("urunler")}
                className={activeTab === "urunler" ? "active" : ""}
              >
                Ürünlerimiz
              </button>
              <button
                onClick={() => setActiveTab("hakkimizda")}
                className={activeTab === "hakkimizda" ? "active" : ""}
              >
                Hakkımızda
              </button>
              <button
                onClick={() => setActiveTab("iletisim")}
                className={activeTab === "iletisim" ? "active" : ""}
              >
                İletişim
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="container">
          <div className="mobile-menu-buttons">
            <button
              onClick={() => setActiveTab("anasayfa")}
              className={activeTab === "anasayfa" ? "active" : ""}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => setActiveTab("urunler")}
              className={activeTab === "urunler" ? "active" : ""}
            >
              Ürünler
            </button>
            <button
              onClick={() => setActiveTab("hakkimizda")}
              className={activeTab === "hakkimizda" ? "active" : ""}
            >
              Hakkımızda
            </button>
            <button
              onClick={() => setActiveTab("iletisim")}
              className={activeTab === "iletisim" ? "active" : ""}
            >
              İletişim
            </button>
          </div>
        </div>
      </div>

      {/* Ana Sayfa İçeriği */}
      {activeTab === "anasayfa" && (
        <div>
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <h2>1997&apos;den Beri Güvenilir Çözüm Ortağınız</h2>
                <p>
                  Asansör kontrol sistemlerinde 25 yılı aşkın tecrübe ile
                  modern, güvenli ve ekonomik çözümler sunuyoruz.
                </p>
                <div className="button-group">
                  <button
                    onClick={() => setActiveTab("urunler")}
                    className="btn btn-primary"
                  >
                    Ürünlerimizi İnceleyin
                  </button>
                  <button
                    onClick={() => setActiveTab("iletisim")}
                    className="btn btn-secondary"
                  >
                    İletişime Geçin
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h3 className="section-title">Neden MEKCEN?</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <CheckCircle size={32} />
                  </div>
                  <h4>25 Yıllık Tecrübe</h4>
                  <p>
                    1997&apos;den beri sektörde edindiğimiz deneyimle güvenilir
                    çözümler sunuyoruz.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <Shield size={32} />
                  </div>
                  <h4>Garantili Ürünler</h4>
                  <p>
                    Tüm ürünlerimiz 2 yıl garanti kapsamında, güvenle
                    kullanabilirsiniz.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
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

          <section className="section section-gray">
            <div className="container">
              <h3 className="section-title">Hizmetlerimiz</h3>
              <div className="features-grid">
                {services.map((service, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{service.icon}</div>
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
        <section className="section">
          <div className="container">
            <h2 className="section-title">Ürünlerimiz</h2>
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-header">
                    <div className="product-logo">
                      <div className="product-logo-circle">MK</div>
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
                    <button className="btn btn-blue btn-full">
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
        <section className="section">
          <div className="container">
            <h2 className="section-title">Hakkımızda</h2>

            <div className="about-box">
              <h3>Firmamız</h3>
              <p>
                <strong>MEKCEN Elektronik Asansör Kontrol Sistemleri</strong>,
                1997 yılından bu yana Ankara Ostim&apos;de faaliyet gösteren,
                asansör sektöründe öncü firmalardan biridir. Kurucumuz{" "}
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
              <div className="mission-card">
                <h4>Misyonumuz</h4>
                <p>
                  Asansör sektöründe güvenli, ekonomik ve yenilikçi kontrol
                  sistemleri üreterek, müşterilerimizin yaşam kalitesini
                  artırmak ve sektörde güvenilir bir çözüm ortağı olmak.
                </p>
              </div>
              <div className="mission-card">
                <h4>Vizyonumuz</h4>
                <p>
                  Türkiye&apos;nin lider asansör kontrol sistemleri üreticisi
                  olarak, uluslararası standartlarda ürünler geliştirmek ve
                  ihracat yapan bir firma haline gelmek.
                </p>
              </div>
            </div>

            <div className="stats-box">
              <h4
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  fontSize: "24px",
                }}
              >
                Rakamlarla MEKCEN
              </h4>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Yıllık Tecrübe</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Mutlu Müşteri</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5000+</div>
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
        <section className="section">
          <div className="container">
            <h2 className="section-title">İletişim</h2>

            <div className="contact-grid">
              <div className="contact-card">
                <h3>İletişim Bilgilerimiz</h3>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <MapPin />
                    </div>
                    <div className="contact-item-content">
                      <strong>Adres:</strong>
                      <p>
                        Ostim Organize Sanayi Bölgesi
                        <br />
                        Ankara / TÜRKİYE
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <Phone />
                    </div>
                    <div className="contact-item-content">
                      <strong>Telefon:</strong>
                      <p>
                        +90 312 XXX XX XX
                        <br />
                        +90 5XX XXX XX XX
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <Mail />
                    </div>
                    <div className="contact-item-content">
                      <strong>E-posta:</strong>
                      <p>info@mekcenasansor.com</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon">
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

              <div className="contact-card">
                <h3>Bize Ulaşın</h3>
                <div className="quick-contact">
                  <p>
                    <strong>Hızlı İletişim İçin:</strong>
                  </p>
                  <p>📞 Hemen arayın: +90 312 XXX XX XX</p>
                  <p>📱 WhatsApp: +90 5XX XXX XX XX</p>
                  <p>✉️ E-posta: info@mekcenasansor.com</p>
                </div>

                <div className="cta-box">
                  <h4>Teklif Almak İster Misiniz?</h4>
                  <p>
                    Projeniz için özel fiyat teklifi almak veya ürünlerimiz
                    hakkında detaylı bilgi için bizimle iletişime geçin.
                  </p>
                  <button className="btn btn-green btn-full">
                    <Phone size={20} />
                    Hemen Arayın
                  </button>
                </div>

                <div className="cta-box">
                  <h4>Ziyaret Edin</h4>
                  <p>
                    Ürünlerimizi yerinde görmek ve detaylı bilgi almak için
                    showroom&apos;umuzu ziyaret edebilirsiniz.
                  </p>
                  <button className="btn btn-blue btn-full">
                    <MapPin size={20} />
                    Yol Tarifi Al
                  </button>
                </div>
              </div>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={48} />
                <p>Google Maps Buraya Eklenecek</p>
                <p style={{ fontSize: "14px", marginTop: "10px" }}>
                  Ostim, Ankara
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h4>MEKCEN</h4>
              <p>
                1997&apos;den beri asansör kontrol sistemlerinde güvenilir çözüm
                ortağınız.
              </p>
            </div>

            <div className="footer-column">
              <h4>Hızlı Linkler</h4>
              <ul>
                <li>
                  <button onClick={() => setActiveTab("anasayfa")}>
                    Ana Sayfa
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("urunler")}>
                    Ürünlerimiz
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("hakkimizda")}>
                    Hakkımızda
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("iletisim")}>
                    İletişim
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>İletişim</h4>
              <p>
                Ostim OSB, Ankara
                <br />
                Tel: +90 312 XXX XX XX
                <br />
                info@mekcenasansor.com
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2024 MEKCEN Elektronik Asansör Kontrol Sistemleri. Tüm hakları
              saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
