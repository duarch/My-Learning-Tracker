import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import MarkdownContent from '@/components/MarkdownContent';
import { Loader2 } from 'lucide-react';

export default function Learning() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/README.md')
      .then((res) => res.text())
      .then((text) => {
        // Extract the Learning section
        const learningMatch = text.match(/## Learning([\s\S]*?)(?=## |$)/);
        setContent(learningMatch ? learningMatch[0] : 'Conteúdo não encontrado');
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading content:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout
      title="Aprendizado"
      description="Cursos, certificações e recursos de aprendizado"
    >
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="animate-spin" size={32} />
        </div>
      ) : (
        <MarkdownContent content={content} />
      )}
    </Layout>
  );
}
