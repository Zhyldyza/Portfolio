import "./style.css"
import project01 from "./../../img/projects/01.jpg"

const Project = (props) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={props.img} alt={props.title} className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </a>
    </li>
  );
};

export default Project;
