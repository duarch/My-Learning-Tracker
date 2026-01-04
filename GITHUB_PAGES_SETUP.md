# 🚀 Guia de Setup - GitHub Pages

Este arquivo contém instruções passo a passo para ativar o deploy automático no GitHub Pages.

## ⚙️ Passo 1: Autorizar o Workflow

O arquivo `.github/workflows/deploy.yml` foi criado, mas precisa de autorização para funcionar.

**Opção A: Via Interface GitHub (Recomendado)**

1. Vá para seu repositório: https://github.com/duarch/My-Learning-Tracker
2. Clique na aba **Actions**
3. Você verá uma mensagem: "Workflows are disabled for pull requests from public forks"
4. Clique em **Enable GitHub Actions**
5. Pronto! O workflow está ativo

**Opção B: Via Terminal (Se o Passo A não funcionar)**

```bash
# Faça push do arquivo do workflow manualmente
cd My-Learning-Tracker
git push origin master --force
```

---

## 📄 Passo 2: Configurar GitHub Pages

1. Vá para **Settings** do seu repositório
2. No menu lateral esquerdo, clique em **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Selecione a branch **gh-pages** (será criada automaticamente após o primeiro deploy)
5. Clique em **Save**

---

## ✅ Passo 3: Verificar o Deploy

1. Vá para a aba **Actions**
2. Você verá um workflow chamado "Deploy to GitHub Pages"
3. Aguarde a conclusão (geralmente leva 1-2 minutos)
4. Quando terminar, você verá um checkmark verde ✅

---

## 🌐 Acessar seu Site

Após o primeiro deploy bem-sucedido, seu site estará disponível em:

```
https://duarch.github.io/My-Learning-Tracker/
```

---

## 🔄 Deploy Automático

Agora, sempre que você fizer um push para a branch `master` ou `main`:

1. O GitHub Actions dispara automaticamente
2. O projeto é buildado com `pnpm build`
3. Os arquivos são deployados para GitHub Pages
4. Seu site é atualizado automaticamente

---

## 🐛 Troubleshooting

### O workflow não aparece na aba Actions

**Solução:** Faça um novo commit e push:

```bash
git commit --allow-empty -m "trigger: activate GitHub Actions"
git push origin master
```

### O deploy falha com erro de permissão

**Solução:** Vá para **Settings** → **Actions** → **General** e certifique-se de que:
- "Allow GitHub Actions to create and approve pull requests" está ativado
- "Allow all actions and reusable workflows" está selecionado

### O site não aparece em GitHub Pages

**Solução:** Verifique em **Settings** → **Pages** se:
- Source está definido como "Deploy from a branch"
- Branch é "gh-pages"
- Folder é "/ (root)"

---

## 📚 Recursos

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow File Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

**Precisa de ajuda?** Abra uma issue no repositório: https://github.com/duarch/My-Learning-Tracker/issues
