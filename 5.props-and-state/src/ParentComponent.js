import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div style={{ padding: '8px' }}>
      <h1>I am the parent component</h1>
      <ChildComponent style={{ color: "blue" }} text={"I am the first child"} name={"Blessing"} age={26} />
      <ChildComponent style={{ color: "red" }} text={"I am the second child"} name="Halima" age={24} />
      <ChildComponent style={{ color: "green" }} text={"I am the third child"} name="Opeyemi" age={22} />
      <ChildComponent style={{ color: "orange" }} text={"I am the fourth child"} name="Miriam" age={20} />
    </div>

  );
}

export default ParentComponent;
