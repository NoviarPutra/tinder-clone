import "./App.css";
import TinderCards from "./Component/Card/TinderCards";
import Header from "./Component/Header/Header";
import SwipeButton from "./Component/SwipeButton/SwipeButton";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Card */}
      <TinderCards />
      {/* SwipeButton */}
      <SwipeButton />
    </div>
  );
}

export default App;
