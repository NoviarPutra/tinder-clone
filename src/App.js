import "./App.css";
import TinderCards from "./Component/Card/TinderCards";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Card */}
      <TinderCards />
      {/* SwipeButton */}
    </div>
  );
}

export default App;
