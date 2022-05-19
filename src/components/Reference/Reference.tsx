import "./Reference.scss";
interface ReferenceProps {
  url: string;
}
export const Reference = ({ url }: ReferenceProps) => (
  <a href={url} target="_blank" rel="noreferrer" className="Reference">
    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-reference-literature-flaticons-lineal-color-flat-icons-3.png" />
  </a>
);
