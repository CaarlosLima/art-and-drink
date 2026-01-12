import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-muted flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-muted-foreground mb-4 text-xl">Oops! Página não encontrada</p>
        <a href="/" className="text-primary hover:text-primary/90 underline">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
