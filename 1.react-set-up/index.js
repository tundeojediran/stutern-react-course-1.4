const App = () => {
    return React.createElement(
      "div", // element
      {}, // props
      React.createElement(
        "div",
        {},
        React.createElement("h1", null, "Hello Stutern")
      ) // child
    );
  };

  console.log(React.createElement("h1", null, "Hello World"));

  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));