import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { label: 'Visão Geral', href: '/' },
  { label: 'Aprendizado', href: '/learning' },
  { label: 'Habilidades', href: '/skills' },
  { label: 'Destaques', href: '/highlights' },
  { label: 'Bucket List', href: '/bucket-list' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 hover:bg-secondary rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 bg-sidebar border-r border-sidebar-border
          transform md:transform-none transition-transform duration-300 z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-sidebar-foreground">
            Learning Tracker
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Rastreador de Aprendizado
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-2.5 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border space-y-4">
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>
          <p className="text-xs text-muted-foreground text-center">© 2026 My Learning Tracker</p>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className="hidden md:block w-64" />
    </>
  );
}
