
import instaLogo from "../assets/insta.svg";

const Navbar = () => (
  <nav>
    <a
      href="https://www.instagram.com/dzrenzu/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        top: 8,
        right: 14,
        zIndex: 10000
      }}
    >
      <img src={instaLogo} alt="Instagram" style={{ width: "30px", height: "30px" }} />
    </a>
  </nav>
);

export default Navbar;
