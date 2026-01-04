import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 w-full">
        {/* Header */}
        {(title || description) && (
          <div className="border-b border-border bg-card">
            <div className="container py-8">
              {title && <h1 className="text-4xl font-bold text-foreground">{title}</h1>}
              {description && (
                <p className="text-muted-foreground mt-2 text-lg">{description}</p>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
