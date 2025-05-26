import { useEffect, useState } from 'react';

export function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Si hay un valor guardado, usarlo; si no, usar la preferencia del sistema
      const initialValue = saved !== null ? saved === 'true' : prefersDark;
      
      setIsDarkMode(initialValue);
      setIsInitialized(true);
      
      // Aplicar la clase inmediatamente
      if (initialValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  useEffect(() => {
    // Solo aplicar cambios después de la inicialización
    if (isInitialized) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', isDarkMode.toString());
    }
  }, [isDarkMode, isInitialized]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return [isDarkMode, toggleDarkMode];
}