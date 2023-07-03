import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img className="avatar" src="person.jpg" alt="Person" />
      <Intro />
      <SkillList />
    </div>
  );
}
function Intro() {
  return (
    <div className="data">
      <h1>Rapheal Jonas</h1>
      <p>
        This is too much text simply. This is too much text simply.This is too
        much text simply.This is too much text simply.This is too much text
        simply.This is too much text simply.
      </p>
    </div>
  );
}

function SkillList() {
  const totalSkills = [
    { name: "Training", design: "male-muscle.png", color: "#74992e" },
    { name: "Dancing", design: "dancer.png", color: "#a1b1c9" },
    { name: "Reading Books", design: "book-stack.png", color: "#67d6d1" },
    { name: "Chess", design: "queen.png", color: "#917f41" },
    { name: "Swimming", design: "swimmer.png", color: "#decad8" }
  ];
  return (
    <div className="skill-list">
      {totalSkills.map((element) => (
        <Skill {...element} key={element.name} />
      ))}
    </div>
  );
}

function Skill({ name, design, color }) {
  const style = { backgroundColor: color };
  return (
    <div className="skill" style={style}>
      <span>{name}</span>
      <img className="icons" src={design} alt=""></img>
    </div>
  );
}
