import React from "react";

function Navigation() {
  return (
    <div id="amar-oklopcic" className="page-section navigation">
      <div className="navigation" style={{ justifyContent: "left" }}>
        <button
          className="navigation-links navigation-links-button"
          onClick={() => {
            window.scrollTo(0, 0);
            window.history.replaceState(null, null, "/");
          }}
        >
          Amar Oklopcic
        </button>
      </div>
      <div className="navigation">
        <a className="navigation-links" href="#about">
          About
        </a>
        <a className="navigation-links" href="#previous-works">
          Previous Work
        </a>
        <a
          className="navigation-links"
          style={{ marginRight: "4rem" }}
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navigation;
