# 🚀 Guia de Deploy - GitHub Pages

Este guia explica como o projeto está configurado para deploy automático no GitHub Pages.

## Configuração Atual

O projeto usa **GitHub Actions** para fazer build e deploy automático sempre que você faz push para a branch `main` ou `master`.

### Arquivo de Workflow

O arquivo `.github/workflows/deploy.yml` contém as instruções para:

1. **Checkout** do código
2. **Setup Node.js** (versão 18)
3. **Instalação de dependências** com `pnpm`
4. **Build** do projeto com `pnpm build`
5. **Upload do artefato** para GitHub Pages
6. **Deploy automático** usando a ação `actions/deploy-pages@v2`

## Ativar GitHub Pages

Para que o deploy funcione, você precisa ativar o GitHub Pages no repositório:

### Passo 1: Acessar Settings
1. Vá para seu repositório no GitHub
2. Clique em **Settings** (engrenagem no topo direito)

### Passo 2: Configurar Pages
1. Na barra lateral esquerda, clique em **Pages**
2. Em "Build and deployment":
   - **Source**: Selecione "GitHub Actions"
   - **Branch**: Deve estar "main" (padrão)
3. Clique em **Save**

### Passo 3: Verificar Deploy
1. Vá para a aba **Actions** do seu repositório
2. Você verá o workflow sendo executado
3. Quando terminar, seu site estará disponível em:
   ```
   https://duarch.github.io/My-Learning-Tracker/
   ```

## Fluxo de Deploy

```
1. Você faz push para 'main'
   ↓
2. GitHub Actions dispara o workflow
   ↓
3. Workflow faz build do projeto
   ↓
4. Artefato é gerado em ./dist
   ↓
5. Deploy automático para GitHub Pages
   ↓
6. Site fica disponível em poucos segundos
```

## Atualizando o Site

Depois que GitHub Pages está ativado, basta fazer push de suas alterações:

```bash
# Fazer alterações no código
# Depois fazer commit e push

git add .
git commit -m "Descrição das alterações"
git push origin main
```

O deploy acontecerá automaticamente!

## Monitorando o Deploy

1. Vá para a aba **Actions** do seu repositório
2. Clique no workflow mais recente para ver os logs
3. Se houver erro, os logs mostrarão o motivo

## Variáveis de Ambiente

Se precisar de variáveis de ambiente no build, adicione em **Settings → Secrets and variables → Actions**:

1. Clique em **New repository secret**
2. Adicione a variável (ex: `API_KEY`)
3. Use no workflow como `${{ secrets.API_KEY }}`

## Troubleshooting

### O deploy não está funcionando?

1. **Verifique se GitHub Pages está ativado**: Settings → Pages → Source deve ser "GitHub Actions"
2. **Verifique os logs**: Actions → Workflow mais recente → Ver logs de erro
3. **Verifique o branch**: Certifique-se de que está fazendo push para `main` ou `master`
4. **Verifique permissões**: O workflow precisa de permissão para fazer deploy

### O site não aparece no URL correto?

- Verifique se a URL no `vite.config.ts` está correta:
  ```typescript
  export default defineConfig({
    base: process.env.GITHUB_PAGES ? '/My-Learning-Tracker/' : '/',
  });
  ```

## Documentação Relacionada

- [MAINTENANCE.md](./MAINTENANCE.md) - Como manter e atualizar o projeto
- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - Setup inicial do GitHub Pages
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
