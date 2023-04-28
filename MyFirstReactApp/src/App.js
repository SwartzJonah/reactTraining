import logo from './logo.svg';
import './App.css';

function App() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

  function Greeting(props) {
    if (props.name) {
      return <h1>Hello, {props.name}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  const practiceInject = <Greeting name="Jonah" />;
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Son" />
        {element}
        {practiceInject}
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
    </div>
  );
}

export default App;
