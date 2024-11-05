import { useState } from 'react';
import Home from '@/components/templates/home';
import Details from '@/components/templates/details';
import QuizManager from '@/components/templates/quizManager';
import { ActiveComponentType } from '../lib/interfaces';
import { UserProvider } from '../contexts/userContext';

function App() {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponentType>('home');

  const renderView = () => {
    switch (activeComponent) {
      case 'home':
        return <Home setActiveComponent={setActiveComponent} />;
      case 'details':
        return <Details setActiveComponent={setActiveComponent} />;
      case 'quiz':
        return <QuizManager setActiveComponent={setActiveComponent} />;
      default:
        return null;
    }
  };

  return (
    <UserProvider>
      <main>
        <section className="py-8 lg:py-20 min-h-screen grid">
          <div className="layout">{renderView()}</div>
        </section>
        {/* <footer className="m-0 p-2 text-center text-gray-400 font-bold static bottom-0 min-w-full">
          <div className="layout">
            <a href="mailto:thiago.higuchi@gmail.com">by Thiago Higuchi</a>
          </div>
        </footer> */}
      </main>
    </UserProvider>
  );
}

export default App;
