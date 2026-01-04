import { BookOpen, Target, Zap, Trophy } from 'lucide-react';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

interface ContentCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}

const contentCards: ContentCard[] = [
  {
    icon: <BookOpen size={24} />,
    title: 'Aprendizado',
    description: 'Cursos, certificações e recursos de aprendizado',
    href: '/learning',
    color: 'from-blue-50 to-cyan-50 border-blue-200',
  },
  {
    icon: <Zap size={24} />,
    title: 'Habilidades',
    description: 'Competências técnicas e profissionais desenvolvidas',
    href: '/skills',
    color: 'from-amber-50 to-orange-50 border-amber-200',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Destaques',
    description: 'Projetos e conquistas mais relevantes',
    href: '/highlights',
    color: 'from-purple-50 to-pink-50 border-purple-200',
  },
  {
    icon: <Target size={24} />,
    title: 'Bucket List',
    description: 'Objetivos e metas para a carreira',
    href: '/bucket-list',
    color: 'from-green-50 to-emerald-50 border-green-200',
  },
];

export default function Home() {
  const [readmeContent, setReadmeContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/README.md')
      .then((res) => res.text())
      .then((text) => {
        setReadmeContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading README:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout
      title="Meu Rastreador de Aprendizado"
      description="Uma documentação completa da minha jornada de desenvolvimento full-stack"
    >
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {contentCards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className={`card-minimal p-6 flex flex-col items-start gap-3 group hover:border-primary transition-all duration-200`}
          >
            <div className="text-primary group-hover:scale-110 transition-transform duration-200">
              {card.icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="divider my-12" />

      {/* README Content */}
      <div className="space-y-8">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {/* Extract main content from README, skipping the header */}
            <div
              dangerouslySetInnerHTML={{
                __html: readmeContent
                  .split('\n')
                  .slice(5)
                  .join('\n'),
              }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
