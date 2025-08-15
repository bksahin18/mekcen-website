"use client";

export default function EmailProtect() {
  const handleEmailClick = () => {
    const user = "mekcenasansor";
    const domain = "hotmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <span
      onClick={handleEmailClick}
      style={{ cursor: "pointer", textDecoration: "underline" }}
    >
      iletişim{"@"}mekcen.com
    </span>
  );
}
