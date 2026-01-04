import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Loader2 } from 'lucide-react';

export default function BucketList() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try loading from bucketList.md first
    fetch('/bucketList.md')
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        // Fallback to README
        fetch('/README.md')
          .then((res) => res.text())
          .then((text) => {
            const bucketMatch = text.match(/## Full Stack Web Developer Bucket List([\s\S]*?)(?=## |$)/);
            setContent(bucketMatch ? bucketMatch[0] : 'Conteúdo não encontrado');
            setLoading(false);
          })
          .catch((err) => {
            console.error('Error loading content:', err);
            setLoading(false);
          });
      });
  }, []);

  return (
    <Layout
      title="Bucket List"
      description="Objetivos e metas para a carreira de desenvolvedor full-stack"
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
