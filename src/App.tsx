import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom'; // Importante: Troca Routes por Outlet

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* O Outlet é onde as páginas (Index, Whisky, etc) serão renderizadas */}
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
