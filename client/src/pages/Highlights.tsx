import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Loader2 } from 'lucide-react';

export default function Highlights() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/README.md')
      .then((res) => res.text())
      .then((text) => {
        // Extract the Highlights section
        const highlightsMatch = text.match(/## Highlights([\s\S]*?)(?=## |$)/);
        setContent(highlightsMatch ? highlightsMatch[0] : 'Conteúdo não encontrado');
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading content:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout
      title="Destaques"
      description="Projetos e conquistas mais relevantes"
    >
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="animate-spin" size={32} />
        </div>
      ) : (
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      )}
    </Layout>
  );
}
