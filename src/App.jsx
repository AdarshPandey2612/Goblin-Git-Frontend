import Button from "./components/ui/Button";

function App() {
  return (
    <div>
      <h1>Goblin Git</h1>
      <p>School Transport Safety Console</p>

      <Button onClick={() => alert("Goblin Git is working!")}>
        Test Button
      </Button>
    </div>
  );
}

export default App;