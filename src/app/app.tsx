import { useState } from 'react';

import { Toaster } from '@/components/atoms/toaster';
import Details from '@/components/templates/details';
import Home from '@/components/templates/home';
import QuizManager from '@/components/templates/quizManager';
import { UserProvider } from '@/contexts/userContext';
import { ActiveComponentType } from '@/lib/interfaces';

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
      </main>
      <Toaster />
    </UserProvider>
  );
}

export default App;
