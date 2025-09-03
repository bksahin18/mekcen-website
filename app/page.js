"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
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
  FileText,
  Download,
  Eye,
  Image as ImageIcon,
  Cpu,
  Award,
  BookOpen,
} from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("anasayfa");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);

  // Debounced scroll handler for performance
  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 300);
  }, []);

  useEffect(() => {
    // Loading effect
    const timer = setTimeout(() => setLoading(false), 800);

    // Throttled scroll listener for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Contact info with protection
  const contactInfo = useMemo(
    () => ({
      email: "mekcenasansor@hotmail.com",
      phones: {
        office: "+90 312 395 19 32",
        mobile: "+90 532 372 95 11",
      },
    }),
    []
  );

  // Document lists - memoized for performance
  const documentLists = useMemo(
    () => ({
      mc052: [
        {
          name: "KUMANDA TABLOSU İÇİN BESLEME DEVRELERİ ÇİFT HIZLI ASANSÖR SİSTEMLERİ",
          file: "BESL-ÇİFT HIZ.pdf",
          type: "pdf",
        },
        {
          name: "DIŞ KUMANDA BAĞLANTILARI KABİN TESİSATI PARALEL",
          file: "DIŞ KUMANDA BAĞLANTILARI-PARALEL.pdf",
          type: "pdf",
        },
        {
          name: "EMNİYET DEVRELERİ GERİ ALMA KUMANDASI KABİN ÜSTÜ REVİZYON KUMANDASI",
          file: "EMNİYET DEVRESİ BAĞLANTILARI.pdf",
          type: "pdf",
        },
        {
          name: "KABİN BAĞLANTILARI KABİN TESİSATI PARALEL",
          file: "KABİN BAĞLANTILARI.pdf",
          type: "pdf",
        },
        {
          name: "KAT UÇLARI BAĞLANTISI",
          file: "KAT UÇLARI BAĞLANTILARI.pdf",
          type: "pdf",
        },
        {
          name: "KUMANDA TABLOSU İÇİN MIKNATIS DİZİLİŞİ TAHRİK TİPİ : ÇİFT HIZLI SİSTEMLER",
          file: "MIKNATIS DİZİLİMİ-ÇİFT HIZLI.pdf",
          type: "pdf",
        },
        {
          name: "KONTROL KARTI İLE TEK HIZLI MIKNATIS DİZİLİŞİ",
          file: "MIKNATIS DİZİLİMİ-TEK HIZLI.pdf",
          type: "pdf",
        },
        {
          name: "ÇİFT HIZLI SİSTEMLER İÇİN MOTOR KONTAKTÖR, FREN BOBİNİ, LİRPOMP TERMİSTÖR VE FAN MOTORU BAĞLANTILARI",
          file: "motor 2 hız.pdf",
          type: "pdf",
        },
        {
          name: "REVİZYON ALARM KARTI BAĞLANTILARI KABİN ÜSTÜ PRİZ VE FAN BAĞLANTILARI TELEFON VE İNTERCOM BAĞLANTILARI",
          file: "REVİZYON KARTI BAĞLANTISI.pdf",
          type: "pdf",
        },
        {
          name: "KUMANDA SİSTEMLİ ASANSÖRLERDE KULLANILAN KODLAMALAR",
          file: "MC-052 KLEMENS RUMUZLARI.doc",
          type: "word",
        },
        {
          name: "ANA PARAMETRELERİ VE AYARLANABİLEN DEĞERLER",
          file: "MC-052 PARAMETRELERİ.doc",
          type: "word",
        },
      ],
      mc054: [
        {
          name: "MAKİNE DAİRESİ BAĞLANTILARI – KUYU LAMBASI BAĞLANTILARI – PIN-KD KARTI KUYU DİBİ BAĞLANTILARI",
          file: "1.pdf",
          type: "pdf",
        },
        {
          name: "BESLEME DEVRELERİ – UPS BAĞLANTISI – MEKANİK FREN BAĞLANTISI",
          file: "2.pdf",
          type: "pdf",
        },
        {
          name: "BESLEME DEVRELERİ – UPS BAĞLANTISI – MEKANİK FREN BAĞLANTISI",
          file: "3.pdf",
          type: "pdf",
        },
        {
          name: "DELTA VFD-VLİN VERTER BAĞLANTISI – GÜÇ DEVRESİ BAĞLANTISI",
          file: "4.pdf",
          type: "pdf",
        },
        {
          name: "KART BAĞLANTILARI - GENEL",
          file: "5.pdf",
          type: "pdf",
        },
        {
          name: "EMNİYET DEVRESİ KUYU DİBİ – KUYU DİBİ REVİZYON BAĞLANTILARI – KUYU DİBİ ALARM BUTONU VE DIŞ RESET BUTON BAĞLANTILARI",
          file: "6.pdf",
          type: "pdf",
        },
        {
          name: "KABİN ÜSTÜ EMNİYET DEVRESİ – REVİZYON VE ALARM BUTON BAĞLANTILARI",
          file: "7.pdf",
          type: "pdf",
        },
        {
          name: "EMNİYET DEVRESİ PANO – GERİ ALMA REVİZYON – BYPASS DEVRESİ",
          file: "8.pdf",
          type: "pdf",
        },
        {
          name: "TÜM EMNİYET DEVRELERİ",
          file: "9.pdf",
          type: "pdf",
        },
        {
          name: "A3 REGÜLATÖR BOBİN BAĞLANTISI – A3 REGÜLATÖR İZLEME BAĞLANTISI – BYPASS MODU VE KAT LAMBASI BAĞLANTISI",
          file: "10.pdf",
          type: "pdf",
        },
        {
          name: "ŞEBEKE GİRİŞ VE KUYU AYDINLATMA DEVRESİ",
          file: "HD-S1.pdf",
          type: "pdf",
        },
        {
          name: "BESLEME DEVRESİ UPS VE TRAFO",
          file: "HD-S2.pdf",
          type: "pdf",
        },
        {
          name: "MOTOR VE KONTAKTÖR BAĞLANTILARI – TAHRİK TİPİ : HİDROLİK",
          file: "HD-S3.pdf",
          type: "pdf",
        },
        {
          name: "EMNİYET DEVRELERİ – GERİ ALMA KUMANDASI – KABİN ÜSTÜ REVİZYON BAĞLANTILARI",
          file: "HD-S4.pdf",
          type: "pdf",
        },
        {
          name: "KUMANDA KARTI BAĞLANTILARI – HİDROLİK ASANSÖR UYGULAMALARI İÇİN",
          file: "HD-S5.pdf",
          type: "pdf",
        },
        {
          name: "KABİN BAĞLANTILARI – KABİN TESİSAT PARALEL",
          file: "HD-S6.pdf",
          type: "pdf",
        },
        {
          name: "DIŞ BUTON SİNYAL LAMBA VE KAT KAYIT BUTONLARI – DIŞ KUMANDA YÖN OK SİNYAL LAMBALARI – DEPREM VE YANGIN ALARM SİNYAL GİRİŞLERİ",
          file: "HD-S7.pdf",
          type: "pdf",
        },
        {
          name: "VALF BAĞLANTILARI – VALF BLOK: KLEAMAN 48VDC",
          file: "HD-S8.pdf",
          type: "pdf",
        },
        {
          name: "MC-054 UYUMLULUK SERTİFİKASI",
          file: "MC_054 CE BELGESİ.pdf",
          type: "pdf",
        },
        {
          name: "VALF BAĞLANTILARI – VALF BLOK: DMAR 48VDC",
          file: "mc_054 omar_hid.pdf",
          type: "pdf",
        },
        {
          name: "KUMANDA TABLOSU KOLAY DEVREYE ALMA",
          file: "MC_54 ucm test.docx",
          type: "word",
        },
        {
          name: "KONTROL KARTI İLE UCM TEST YAPILMASI",
          file: "MC_054KOLAY DEVREYE ALMA.docx",
          type: "word",
        },
        {
          name: "KUMANDA SİSTEMLİ ASANSÖRLERDE KULLANILAN KODLAMALAR",
          file: "MC-054 KLEMENS RUMUZLARI.doc",
          type: "word",
        },
        {
          name: "MIKNATIS KOPYALAMA",
          file: "MIKNATIS_ML.pdf",
          type: "pdf",
        },
        {
          name: "MIKNATIS DİZİLİMİ ŞEMASI ML1 - ML2 – TAHRİK TİPİ : VVVF VE HİDROLİK",
          file: "mıknatıs_kopyalama.pdf",
          type: "pdf",
        },
        {
          name: "MIKNATIS DİZİLİM ŞEMASI – TAHRİK TİPİ : VVVF VE HİDROLİK",
          file: "mıknatıs_ML.pdf",
          type: "pdf",
        },
        {
          name: "ŞEBEKE GİRİŞ VE KUYU AYDINLATMA DEVRESİ",
          file: "s-01.pdf",
          type: "pdf",
        },
        {
          name: "BESLEME DEVRESİ UPS VE TRAFO",
          file: "s-02.pdf",
          type: "pdf",
        },
        {
          name: "MOTOR VE KONTAKTÖR BAĞLANTILARI – TAHRİK TİPİ : VVVF ASENKRON MOTORLAR – MOTOR SÜRÜCÜ : OPTIDRIVE INVERTEK",
          file: "s-03.pdf",
          type: "pdf",
        },
        {
          name: "EMNİYET DEVRELERİ – GERİ ALMA KUMANDASI – KABİN ÜSTÜ REVİZYON BAĞLANTILARI",
          file: "s-04.pdf",
          type: "pdf",
        },
        {
          name: "KUMANDA KARTI BAĞLANTILARI – VVVF ASANSÖR UYGULAMALARI İÇİN",
          file: "s-05.pdf",
          type: "pdf",
        },
        {
          name: "KABİN BAĞLANTILARI – KABİN TESİSAT PARALEL",
          file: "s-06.pdf",
          type: "pdf",
        },
        {
          name: "DIŞ BUTON SİNYAL LAMBA VE KAT KAYIT BUTONLARI – DIŞ KUMANDA YÖN OK SİNYAL LAMBALARI – DEPREM VE YANGIN ALARM SİNYAL GİRİŞLERİ",
          file: "s-07.pdf",
          type: "pdf",
        },
        {
          name: "SERİ KART KABİN ÜSTÜ BAĞLANTILARI",
          file: "seri_054.pdf",
          type: "pdf",
        },
      ],
    }),
    []
  );

  const products = useMemo(
    () => [
      {
        id: "mc-052",
        name: "MC-052",
        description: "Mikroişlemci Kontrollü Asansör Kumanda Kartı",
        detailedDescription:
          "MC-052, MEKCEN tarafından geliştirilen ilk mikroişlemci kontrollü asansör kumanda kartıdır. Yüksek performans, güvenilirlik ve kolay kurulum özellikleriyle öne çıkar.",
        features: [
          "16 kata kadar destek",
          "Mikroişlemci kontrollü",
          "Acil durum kurtarma sistemi",
          "LCD gösterge desteği",
          "Otomatik kapı kontrolü",
          "Seri haberleşme (RS-485)",
          "Arıza tespit ve kayıt sistemi",
          "CE sertifikalı",
        ],
        technicalSpecs: {
          İşlemci: "32-bit ARM Cortex",
          "Kat Kapasitesi": "16 kat",
          "Besleme Gerilimi": "220V AC / 24V DC",
          "Çalışma Sıcaklığı": "-10°C ~ +50°C",
          Haberleşme: "RS-485, CAN-BUS",
          Boyutlar: "250mm x 180mm x 45mm",
          Ağırlık: "850g",
        },
        images: [
          {
            src: "/products/mc-052/images/anakart.JPG",
            alt: "MC-052 Ana Kart",
          },
          {
            src: "/products/mc-052/images/seri-ext.JPG",
            alt: "MC-052 Seri EXT Modül",
          },
        ],
        documents: documentLists.mc052,
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        hasDetails: true,
      },
      {
        id: "mc-054",
        name: "MC-054",
        description: "Gelişmiş Mikroişlemci Kontrollü Asansör Kumanda Kartı",
        detailedDescription:
          "MC-054, MC-052'nin geliştirilmiş versiyonu olup, daha yüksek performans ve genişletilmiş özellikler sunar. IoT entegrasyonu ve uzaktan erişim özellikleriyle modern asansör sistemleri için ideal çözümdür.",
        features: [
          "24 kata kadar destek",
          "IoT ve bulut entegrasyonu",
          "Uzaktan izleme ve kontrol",
          "Gelişmiş arıza tespit sistemi",
          "Enerji tasarruf modu",
          "Çift güvenlik sistemi",
          "Mobil uygulama desteği",
          "Sesli anons sistemi",
          "RFID kart okuyucu desteği",
          "Deprem sensörü entegrasyonu",
          "Yangın alarm entegrasyonu",
          "Otomatik bakım hatırlatması",
        ],
        technicalSpecs: {
          İşlemci: "64-bit ARM Cortex-A53",
          "Kat Kapasitesi": "24 kat",
          "Besleme Gerilimi": "220V AC / 24V DC",
          "Çalışma Sıcaklığı": "-20°C ~ +60°C",
          Haberleşme: "RS-485, CAN-BUS, Ethernet, WiFi",
          Bellek: "4GB RAM, 32GB Storage",
          Boyutlar: "300mm x 200mm x 50mm",
          Ağırlık: "1200g",
          "Koruma Sınıfı": "IP54",
        },
        images: [
          {
            src: "/products/mc-054/images/gorsel1.JPG",
            alt: "MC-054 Kumanda Kartı",
          },
        ],
        documents: documentLists.mc054,
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        hasDetails: true,
      },
      {
        id: "krc",
        name: "KRC KONTROL KARTI",
        description: "Asansör Hareket Kontaktörü Kontrol Sistemi",
        detailedDescription:
          "KRC Kontrol Kartı, asansör sistemlerinde hareket kontaktörlerinin durumunu izlemek ve kontrol etmek için tasarlanmış özel bir kontrol kartıdır. Motor kontaktörlerinin aktif veya pasif durumunu güvenilir bir şekilde tespit ederek asansörün güvenli çalışmasını sağlar.",
        features: [
          "Hareket kontaktörü durumu kontrolü",
          "T1 ve T2 PTC köprüleme çıkışları",
          "101 ve 101A kuru kontak çıkışları",
          "Güvenilir durum algılaması",
          "Kompakt tasarım",
          "Kolay montaj ve bağlantı",
          "Geniş gerilim aralığı desteği",
          "Endüstriyel ortamlara uygun",
          "24V DC beslenme",
          "LED durum göstergeleri",
        ],
        technicalSpecs: {
          "Besleme Gerilimi": "24V DC",
          "Çalışma Sıcaklığı": "-10°C ~ +60°C",
          "Kontak Kapasitesi": "5A / 250V AC",
          "Çıkış Tipleri": "T1, T2 (PTC Bypass), 101, 101A (Kuru Kontak)",
          Boyutlar: "85mm x 60mm x 25mm",
          Ağırlık: "120g",
          "Koruma Sınıfı": "IP40",
          Bağlantı: "Vida terminali",
        },
        images: [
          {
            src: "/products/krc/images/krc-kart.JPG",
            alt: "KRC Kontrol Kartı",
          },
        ],
        documents: [], // No documents available
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        hasDetails: true,
      },
    ],
    [documentLists]
  );

  const services = useMemo(
    () => [
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
    ],
    []
  );

  const handleProductClick = useCallback((product) => {
    if (product.hasDetails) {
      setSelectedProduct(product);
      setShowProductModal(true);
    }
  }, []);

  const closeModal = useCallback(() => {
    setShowProductModal(false);
    setSelectedProduct(null);
  }, []);

  // Loading screen
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div>
            <Image
              src="/android-chrome-512x512.png"
              alt="MEKCEN Logo"
              width={1200}
              height={1200}
              priority
              className="loading-logo"
            />
          </div>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <SpeedInsights />

      {/* Product Detail Modal */}
      {showProductModal && selectedProduct && (
        <div className="product-modal-overlay" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Kapat"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <h2>{selectedProduct.name} - Detaylı Bilgi</h2>
            </div>

            <div className="modal-content">
              {/* Ürün Görselleri */}
              {selectedProduct.images && (
                <div className="product-section">
                  <h3>
                    <ImageIcon size={18} /> Ürün Görselleri
                  </h3>
                  <div className="image-gallery">
                    {selectedProduct.images.map((img, idx) => (
                      <div key={idx} className="gallery-item">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={400}
                          height={250}
                          className="gallery-image"
                        />
                        <p>{img.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Açıklama */}
              <div className="product-section">
                <h3>
                  <Cpu size={18} /> Ürün Açıklaması
                </h3>
                <p>{selectedProduct.detailedDescription}</p>
              </div>

              {/* Özellikler */}
              <div className="product-section">
                <h3>
                  <Award size={18} /> Özellikler
                </h3>
                <ul className="feature-list-modal">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teknik Özellikler */}
              {selectedProduct.technicalSpecs && (
                <div className="product-section">
                  <h3>
                    <FileText size={18} /> Teknik Özellikler
                  </h3>
                  <div className="specs-grid">
                    {Object.entries(selectedProduct.technicalSpecs).map(
                      ([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Dokümantasyon - Sadece dokümanı varsa göster */}
              {selectedProduct.documents &&
                selectedProduct.documents.length > 0 && (
                  <div className="product-section">
                    <h3>
                      <BookOpen size={18} /> Dokümantasyon
                    </h3>
                    <div className="document-grid">
                      {selectedProduct.documents
                        .slice(0, 35)
                        .map((doc, idx) => (
                          <a
                            key={idx}
                            href={`/products/${selectedProduct.id}/docs/${doc.file}`}
                            download
                            className="document-item"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="doc-icon">
                              <FileText size={20} />
                            </div>
                            <span className="doc-name">
                              {doc.name.substring(0, 50)}...
                            </span>
                            <Download size={12} className="download-icon" />
                          </a>
                        ))}
                    </div>
                    {selectedProduct.documents.length > 35 && (
                      <p className="more-docs-text">
                        Ve {selectedProduct.documents.length - 35} dosya daha...
                      </p>
                    )}
                  </div>
                )}

              {/* Dokümantasyon yoksa bilgilendirme */}
              {selectedProduct.documents &&
                selectedProduct.documents.length === 0 && (
                  <div className="product-section">
                    <h3>
                      <BookOpen size={18} /> Dokümantasyon
                    </h3>
                    <div className="no-documents-info">
                      <p>
                        Bu ürün için şu anda dokümantasyon bulunmamaktadır.
                        Detaylı bilgi için lütfen bizimle iletişime geçin.
                      </p>
                    </div>
                  </div>
                )}

              {/* İletişim Butonu */}
              <div className="modal-footer">
                <button
                  className="btn btn-primary btn-full"
                  onClick={() => {
                    window.open(
                      `https://wa.me/905323729511?text=Merhaba,%20${selectedProduct.name}%20ürününüz%20hakkında%20bilgi%20almak%20istiyorum`,
                      "_blank"
                    );
                  }}
                >
                  <Phone size={18} />
                  <span>Ürün Hakkında Bilgi Al</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div
              className="logo-section"
              onClick={() => setActiveTab("anasayfa")}
            >
              <Image
                src="/logo-for-header.png"
                alt="MEKCEN Logo"
                width={1000}
                height={1000}
                className="logo-image"
                priority
              />
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
              aria-label="Mobil Menü"
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
        <div className="page-content">
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">
                  1997&apos;den Beri{" "}
                  <span className="highlight">Güvenilir</span> Çözüm Ortağınız
                </h1>
                <p className="hero-subtitle">
                  Asansör kontrol sistemlerinde 25 yılı aşkın tecrübe ile
                  modern, güvenli ve ekonomik çözümler sunuyoruz.
                </p>
                <div className="hero-buttons">
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

          <section className="features-section">
            <div className="container">
              <h2 className="section-title">
                Neden <span className="highlight">MEKCEN?</span>
              </h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <CheckCircle size={32} />
                  </div>
                  <h3>25 Yıllık Tecrübe</h3>
                  <p>
                    1997&apos;den beri sektörde edindiğimiz deneyimle güvenilir
                    çözümler sunuyoruz.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <Shield size={32} />
                  </div>
                  <h3>Garantili Ürünler</h3>
                  <p>
                    Tüm ürünlerimiz 2 yıl garanti kapsamında, güvenle
                    kullanabilirsiniz.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <Wrench size={32} />
                  </div>
                  <h3>Teknik Destek</h3>
                  <p>
                    Uzman ekibimizle 7/24 teknik destek ve yerinde servis
                    hizmeti.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section">
            <div className="container">
              <h2 className="section-title">Hizmetlerimiz</h2>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div
                      className="service-icon"
                      style={{ color: service.color }}
                    >
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
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
        <section className="page-content products-page">
          <div className="container">
            <h2 className="section-title">
              <span className="highlight">Ürünlerimiz</span>
            </h2>
            <div className="products-grid">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`product-card ${
                    product.hasDetails ? "clickable" : ""
                  }`}
                  onClick={() => handleProductClick(product)}
                >
                  <div
                    className="product-header"
                    style={{ background: product.color }}
                  >
                    <div className="product-logo">
                      <div className="product-logo-circle">
                        {product.id === "mc-052"
                          ? "052"
                          : product.id === "mc-054"
                          ? "054"
                          : "KRC"}
                      </div>
                      <h3>{product.name}</h3>
                    </div>
                  </div>
                  <div className="product-content">
                    <p className="product-desc">{product.description}</p>
                    <ul className="product-features">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle size={14} />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="more-features">
                          +{product.features.length - 3} özellik daha...
                        </li>
                      )}
                    </ul>
                    <button className="btn btn-outline btn-full">
                      {product.hasDetails ? (
                        <>
                          <Eye size={16} />
                          <span>Detaylı Bilgi & Teknik Özellikler</span>
                        </>
                      ) : (
                        "Detaylı Bilgi"
                      )}
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
        <section className="page-content about-page">
          <div className="container">
            <h2 className="section-title">
              <span className="highlight">Hakkımızda</span>
            </h2>

            <div className="about-content">
              <div className="about-text">
                <h3>Firmamız</h3>
                <p>
                  <strong>MEKCEN Elektronik Asansör Kontrol Sistemleri</strong>,
                  1997 yılından bu yana Ankara İvedik OSB&apos;de faaliyet
                  gösteren, asansör sektöründe öncü firmalardan biridir.
                  Kurucumuz <strong>Mehmet Kıvrak</strong> önderliğinde, 25 yılı
                  aşkın tecrübemizle sektöre yenilikçi ve güvenilir çözümler
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

              <div className="stats-section">
                <h3>Rakamlarla MEKCEN</h3>
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
          </div>
        </section>
      )}

      {/* İletişim Sayfası */}
      {activeTab === "iletisim" && (
        <section className="page-content contact-page">
          <div className="container">
            <h2 className="section-title">
              <span className="highlight">İletişim</span>
            </h2>

            <div className="contact-grid">
              <div className="contact-info">
                <h3>İletişim Bilgilerimiz</h3>
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-details">
                      <strong>Adres:</strong>
                      <p>
                        Güneş 90 Sanayi Sitesi, İvedik OSB, 1403. Sk. NO:22,
                        <br />
                        06374 Yenimahalle/ANKARA
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone size={20} />
                    </div>
                    <div className="contact-details">
                      <strong>Telefon:</strong>
                      <p>
                        {contactInfo.phones.office}
                        <br />
                        {contactInfo.phones.mobile}
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-details">
                      <strong>E-posta:</strong>
                      <p>
                        <a href={`mailto:${contactInfo.email}`}>
                          {contactInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Clock size={20} />
                    </div>
                    <div className="contact-details">
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

              <div className="contact-actions">
                <h3>Bize Ulaşın</h3>
                <div className="contact-quick">
                  <p>
                    <strong>Hızlı İletişim İçin:</strong>
                  </p>
                  <p>📞 Hemen arayın: {contactInfo.phones.office}</p>
                  <p>📱 WhatsApp: {contactInfo.phones.mobile}</p>
                  <p>✉️ E-posta: {contactInfo.email}</p>
                </div>

                <div className="contact-buttons">
                  <button
                    className="btn btn-primary btn-full"
                    onClick={() =>
                      window.open("https://wa.me/905323729511", "_blank")
                    }
                  >
                    <Phone size={18} />
                    WhatsApp&apos;tan Ulaşın
                  </button>

                  <button
                    className="btn btn-secondary btn-full"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/YDekciMW95T8t9kA6",
                        "_blank"
                      )
                    }
                  >
                    <MapPin size={18} />
                    Yol Tarifi Al
                  </button>
                </div>
              </div>
            </div>

            <div className="map-section">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.2168285982207!2d32.74748886965946!3d39.98907042572986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349e5470fd993%3A0x9d169585bbece615!2sMekcen%20Asans%C3%B6r!5e0!3m2!1str!2str!4v1755178189712!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                title="MEKCEN Konum"
              />
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
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

            <div className="footer-section">
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

            <div className="footer-section">
              <h4>İletişim</h4>
              <p>
                Tel: {contactInfo.phones.office}
                <br />
                WhatsApp: {contactInfo.phones.mobile}
                <br />
                <br />
                Güneş 90 Sanayi Sitesi, İvedik OSB
                <br />
                1403. Sk. NO:22, 06374 Yenimahalle/ANKARA
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
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Yukarı Çık"
        >
          <ChevronUp size={20} />
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
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
