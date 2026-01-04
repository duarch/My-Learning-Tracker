# Guia de Manutenção - My Learning Tracker

Este documento descreve como manter, atualizar e fazer deploy do projeto My Learning Tracker construído com React 19 e Tailwind CSS 4.

## 📋 Índice

- [Estrutura do Projeto](#estrutura-do-projeto)
- [Desenvolvimento Local](#desenvolvimento-local)
- [Atualizando Conteúdo Markdown](#atualizando-conteúdo-markdown)
- [Personalizando o Design](#personalizando-o-design)
- [Build e Deploy](#build-e-deploy)
- [Troubleshooting](#troubleshooting)

---

## 🏗️ Estrutura do Projeto

O projeto segue uma arquitetura moderna baseada em componentes React com roteamento client-side:

```
astro-learning-tracker/
├── .github/workflows/       # GitHub Actions workflows
│   └── deploy.yml           # Workflow de deploy automático
├── client/
│   ├── public/              # Arquivos estáticos (Markdown, imagens)
│   │   ├── README.md
│   │   ├── bucketList.md
│   │   ├── edit.md
│   │   └── goals.md
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── MarkdownContent.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── ui/          # Componentes shadcn/ui
│   │   ├── pages/           # Páginas da aplicação
│   │   │   ├── Home.tsx
│   │   │   ├── Learning.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Highlights.tsx
│   │   │   └── BucketList.tsx
│   │   ├── contexts/        # React Context (tema, estado global)
│   │   ├── App.tsx          # Componente raiz com rotas
│   │   ├── main.tsx         # Entry point React
│   │   └── index.css        # Estilos globais e tokens de design
│   └── index.html           # Template HTML
├── server/                  # Servidor Express (para produção)
├── package.json             # Dependências do projeto
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração TypeScript
└── MAINTENANCE.md           # Este arquivo
```

### Tecnologias Principais

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 19 | Framework UI |
| Tailwind CSS | 4 | Utilitários CSS |
| Vite | 7 | Build tool e dev server |
| TypeScript | 5.6 | Type safety |
| Wouter | 3 | Roteamento client-side |
| React Markdown | 10 | Renderização de Markdown |
| Lucide React | 0.453 | Ícones SVG |

---

## 🚀 Desenvolvimento Local

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** 18+ ([download](https://nodejs.org))
- **pnpm** 10+ (gerenciador de pacotes: `npm install -g pnpm`)

### Iniciando o Servidor de Desenvolvimento

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/duarch/My-Learning-Tracker.git
cd My-Learning-Tracker
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

O projeto estará disponível em `http://localhost:3000`. O servidor recarrega automaticamente quando você faz alterações nos arquivos.

### Verificando Tipos TypeScript

Para verificar se há erros de tipo:

```bash
pnpm check
```

---

## 📝 Atualizando Conteúdo Markdown

Todo o conteúdo do seu rastreador de aprendizado é armazenado em arquivos Markdown no diretório `client/public/`. Você pode editar esses arquivos diretamente e as mudanças aparecerão automaticamente no navegador.

### Arquivos de Conteúdo

| Arquivo | Página | Descrição |
|---------|--------|-----------|
| `README.md` | Home + Learning | Conteúdo principal, cursos e certificações |
| `bucketList.md` | Bucket List | Objetivos e metas da carreira |
| `goals.md` | Goals | Roadmap de desenvolvimento |
| `edit.md` | Edit | Histórico de edições |

### Como Editar

1. Abra o arquivo Markdown desejado em um editor de texto (VS Code, Sublime, etc.)
2. Faça suas alterações seguindo a sintaxe Markdown
3. Salve o arquivo
4. O navegador recarregará automaticamente com as mudanças

### Sintaxe Markdown Suportada

O projeto suporta a sintaxe completa do GitHub Flavored Markdown (GFM), incluindo:

**Tabelas:**
```markdown
| Status | Curso | Tutor |
|--------|-------|-------|
| ✅ | Python Basics | Alura |
| 🔄 | React Advanced | Udemy |
```

**Listas com checkboxes:**
```markdown
- [x] Tarefa concluída
- [ ] Tarefa pendente
```

**Blocos de código:**
````markdown
```javascript
function helloWorld() {
  console.log("Hello!");
}
```
````

**Links e referências:**
```markdown
[Texto do link](https://exemplo.com)
```

---

## 🎨 Personalizando o Design

### Cores e Temas

O design do projeto usa **OKLCH colors** (espaço de cor moderno) e está centralizado em `client/src/index.css`. Para alterar as cores:

1. Abra `client/src/index.css`
2. Localize a seção `:root { ... }` para o tema claro
3. Altere os valores de cor. Exemplo:

```css
:root {
  --primary: oklch(0.5 0.15 260);      /* Azul primário */
  --accent: oklch(0.5 0.15 260);       /* Cor de destaque */
  --background: oklch(0.99 0 0);       /* Fundo claro */
  --foreground: oklch(0.25 0.01 65);   /* Texto escuro */
}

.dark {
  --background: oklch(0.15 0.01 0);    /* Fundo escuro */
  --foreground: oklch(0.92 0.01 0);    /* Texto claro */
}
```

**Dica:** Use [oklch.space](https://oklch.space) para gerar cores OKLCH interativamente.

### Tipografia

As fontes estão definidas em `client/index.html` e `client/src/index.css`:

- **Display Font:** Geist (para títulos e destaque)
- **Body Font:** Inter (para corpo de texto)

Para mudar as fontes:

1. Edite `client/index.html` e altere o link do Google Fonts
2. Atualize `client/src/index.css` na seção `@theme inline`

```css
@theme inline {
  --font-display: 'Sua-Fonte-Display', sans-serif;
  --font-sans: 'Sua-Fonte-Body', sans-serif;
}
```

### Componentes Customizados

Os componentes principais estão em `client/src/components/`:

- **Sidebar.tsx:** Navegação lateral (edite `navItems` para adicionar/remover páginas)
- **Layout.tsx:** Template de página com header
- **MarkdownContent.tsx:** Renderizador de Markdown com estilos personalizados
- **ThemeToggle.tsx:** Botão de alternância de tema

---

## 🔨 Build e Deploy

### Build para Produção

Para gerar uma versão otimizada para produção:

```bash
pnpm build
```

Isso cria:
- `dist/public/` - Arquivos estáticos (HTML, CSS, JS)
- `dist/index.js` - Servidor Node.js para produção

### Deploy em GitHub Pages (Automático com GitHub Actions)

O projeto está configurado com um workflow automático de GitHub Actions que faz deploy automático a cada push para a branch `master` ou `main`. Não é necessário fazer nada manualmente!

**Configuração Automática:**

O arquivo `.github/workflows/deploy.yml` está pré-configurado com:

- Build automático usando pnpm
- Base URL ajustada para `/My-Learning-Tracker/` durante o build
- Deploy automático para a branch `gh-pages`
- Cada push para `master` ou `main` dispara o workflow automaticamente

**Ativar GitHub Pages:**

1. Vá para **Settings** → **Pages**
2. Em "Source", selecione **Deploy from a branch**
3. Selecione a branch **gh-pages** (criada automaticamente pelo workflow)
4. Clique em **Save**

Seu site estará disponível em `https://duarch.github.io/My-Learning-Tracker/` em poucos minutos!

**Monitorar Deploy:**

1. Vá para a aba **Actions** do seu repositório
2. Veja o histórico de deploys e logs de build
3. Cada workflow mostra o status: ✅ sucesso ou ❌ erro

### Deploy em Vercel

Vercel oferece deploy automático gratuito:

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Vercel detectará automaticamente que é um projeto Vite
5. Clique em "Deploy"

Seu site estará disponível em `seu-projeto.vercel.app`.

### Deploy em Netlify

Netlify também oferece deploy gratuito:

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Configure:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist/public`
5. Clique em "Deploy site"

---

## 🐛 Troubleshooting

### O servidor não inicia

**Erro:** `Port 3000 already in use`

**Solução:** Mude a porta no `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    port: 3001,
  },
});
```

### Markdown não está renderizando corretamente

**Problema:** Tabelas ou código não aparecem formatados

**Solução:** Verifique se o arquivo está em `client/public/` e use a sintaxe GFM correta. Recarregue a página (Ctrl+Shift+R).

### Tema não persiste após recarregar

**Problema:** Ao recarregar a página, o tema volta ao padrão

**Solução:** Verifique se o localStorage está habilitado no navegador. Limpe o cache do navegador (Ctrl+Shift+Delete).

### Build falha com erro de TypeScript

**Erro:** `error TS2339: Property 'X' does not exist`

**Solução:** Execute `pnpm check` para ver todos os erros. Verifique se todas as importações estão corretas e se os tipos estão definidos.

### Dependências desatualizadas

Para atualizar todas as dependências:

```bash
pnpm update
pnpm install
```

Para atualizar uma dependência específica:

```bash
pnpm add nome-do-pacote@latest
```

### GitHub Actions workflow falha

**Problema:** Deploy não funciona automaticamente

**Solução:** Verifique:
1. Se a branch está em `master` ou `main`
2. Se o arquivo `.github/workflows/deploy.yml` existe
3. Os logs na aba **Actions** para ver o erro específico
4. Se o repositório é público (necessário para GitHub Pages gratuito)

---

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com)
- [Guia Markdown](https://www.markdownguide.org)
- [OKLCH Color Space](https://oklch.space)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 💡 Dicas de Produtividade

### Adicionar uma Nova Página

1. Crie um novo arquivo em `client/src/pages/NovaPage.tsx`
2. Importe em `client/src/App.tsx` e adicione uma rota
3. Adicione o link em `navItems` do `Sidebar.tsx`

### Adicionar um Novo Arquivo Markdown

1. Crie o arquivo em `client/public/novo-conteudo.md`
2. Carregue-o em uma página usando `fetch('/novo-conteudo.md')`

### Customizar Componentes UI

O projeto inclui componentes shadcn/ui em `client/src/components/ui/`. Você pode importá-los e customizá-los conforme necessário.

---

**Última atualização:** Janeiro de 2026

Para dúvidas ou sugestões, abra uma issue no [repositório GitHub](https://github.com/duarch/My-Learning-Tracker).
