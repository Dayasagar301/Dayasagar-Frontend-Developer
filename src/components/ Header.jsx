import React from 'react';

const Header = () => {
  return (
    <header className="header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="header-div">
        <div className="logo">AI.GEN</div>
        <nav className="nav">
          <ul>
            {/* <li><a href="#about">About</a></li> */}
            <li><a href="#features">Features</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#Tokenomics">Tokenomics</a></li>
          </ul>
        </nav>
      </div>
      <div className="buttons" style={{marginRight:"50px"}}>
        <button>Whitepaper</button>
        <button>Get Started</button>
        <span><span className="material-symbols-outlined">menu</span></span>
      </div>
    </header> 
  );
};

export default Header;
