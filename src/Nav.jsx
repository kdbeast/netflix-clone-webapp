import { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [handleShow, setHandleShow] = useState(false);

    useEffect(() => {
        window?.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setHandleShow(true);
            } else setHandleShow(false);
        });
        return () => {
          window?.removeEventListener("scroll", () => {
            console.log("remove");
          });
        };
    }, [])

  return (
    <div className={`nav ${handleShow && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/500px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="netflix-avatar"
      />
    </div>
  );
}

export default Nav;
