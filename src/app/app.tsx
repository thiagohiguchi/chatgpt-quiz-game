import { useState } from "react";
import Home from "components/templates/home";
import QuizManager from "components/templates/quizManager";
import { ActiveComponentType } from "../lib/interfaces";

function App() {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponentType>("quiz");

  const renderView = () => {
    switch (activeComponent) {
      case "home":
        return <Home setActiveComponent={setActiveComponent} />;
      case "quiz":
        return <QuizManager setActiveComponent={setActiveComponent} />;
      default:
        return null;
    }
  };

  return (
    <main>
      <section className="py-8 lg:py-20 min-h-screen grid">
        <div className="layout">{renderView()}</div>
      </section>
      <footer className="m-0 p-2 text-center text-gray-400 font-bold absolute bottom-0 min-w-full">
        <div className="layout">
          <a href="mailto:thiago.higuchi@gmail.com">by Thiago Higuchi</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
