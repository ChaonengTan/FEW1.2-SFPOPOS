// src/Footer.js
import './Footer.css';

import React from 'react'

function Footer() {
    const date = new Date();
    return (
      <div className="Footer">
        <header>
          <h2>Chaoneng Tan Copyright {date.getFullYear()}</h2>
        </header>
      </div>
    )
  }

export default Footer