import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-secondary">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody>
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left font-semibold text-foreground border-r border-border last:border-r-0">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-foreground border-r border-border last:border-r-0">
              {children}
            </td>
          ),
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold mt-6 mb-3 text-foreground">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold mt-4 mb-2 text-foreground">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-foreground leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-secondary/50 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isInline = !className?.includes('language-');
            if (isInline) {
              return (
                <code className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                  {children}
                </code>
              );
            }
            return (
              <code className={`block bg-secondary p-4 rounded-lg overflow-x-auto text-sm font-mono text-foreground my-4 ${className || ''}`}>
                {children}
              </code>
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground">
              {children}
            </em>
          ),
          hr: () => (
            <hr className="my-6 border-t border-border" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
