import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="Header">
      <div>
        <Link to="/tc39">TC39</Link>
      </div>
      <a
        className="git-link"
        href="https://github.com/putstrln/react-tc39-demo"
        target="_blank"
        rel="noreferrer"
      >
        <img src="https://git-scm.com/images/logos/logomark-black@2x.png" />
      </a>
    </div>
  );
};
