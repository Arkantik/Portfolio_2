import "../../css/style.css";

export default function SideNav() {
  return (
    <header>
      {/* Navigation */}
      <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
        <a href="#home" title="Logo" className="logo">
          <img
            className="mega-logo"
            src="./public/assets/icons/logo.svg"
            alt="logo"
          />
        </a>

        {/* Side Menu Button */}
        <div className="navigation-toggle">
          <ul className="slider-social toggle-btn my-0">
            <li>
              <a
                href="javascript:void(0);"
                className="sidemenu_btn"
                id="sidemenu_toggle"
              >
                <span />
                <span />
                <span />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Side Nav */}
      <div className="side-menu hidden">
        <span id="btn_sideNavClose">
          <img
            src="./public/assets/icons/cross.svg"
            alt="close button"
            className="btn-close"
          />
        </span>
        <div className="inner-wrapper">
          <nav className="side-nav w-100">
            <a href="#home" title="Logo" className="logo navbar-brand">
              <img src="./public/assets/icons/logo.svg" alt="logo" />
            </a>
            <ul className="navbar-nav text-capitalize">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#timeline">
                  Timeline
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#review">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="text-center sidebar_btn">
              <a
                href="./public/assets/document/resume-JeremyDohin.pdf"
                download
                className="btn btn-medium btn-rounded btn-blue text-capitalize"
              >
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      </div>
      <a id="close_side_menu" href="javascript:void(0);" />
    </header>
  );
}
