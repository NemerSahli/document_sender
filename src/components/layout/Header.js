import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="header">
        <img
          src="/images/icons/mieter-engel-logo.png"
          className="header-logo"
          alt="logo"
        />
      </div>
      <div className="mt-5 ml-4">
        <h2 className="text-dark">Willkommen bei MieterEngel!</h2>
        <p className="text-muted">
          MieterEngel ist der digitale Mieterschutz-Club
        </p>
      </div>
    </div>
  );
}
