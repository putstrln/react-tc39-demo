import { Link } from "react-router-dom";

export const PromiseCombinatorLinks = () => (
  <li>
    {["PromiseAll", "PromiseAny", "PromiseAllSettled", "PromiseRace"].map(
      (p) => (
        <span key={p}>
          <Link to={`/tc39/${p}`}>{p}</Link>
          &nbsp;
        </span>
      ),
    )}
  </li>
);
