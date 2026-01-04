# My Learning Tracker

This repository contains a minimal static site built with Astro and Svelte that uses Markdown files as the canonical content source.

## Local development

- Install dependencies: `npm install`
- Run dev server: `npm run dev` (visit http://localhost:4321)
- Build for production: `npm run build`
- Preview build locally: `npm run preview`

## Content

All site content is in the `content/` folder as Markdown files. Add or edit markdown files there and push to `main` to update the site.

Key files:
- `content/home.md` — main page content
- `content/bucket-list.md` — checklist and bucket list
- `content/goals.md` — roadmap and goals
- `content/ideas.md` — design ideas and principles
- `content/manutencao.md` — maintenance log (changes and notes)

Pages are automatically generated for each main markdown file and are available at:
- `/` (Home)
- `/goals`
- `/bucket-list`
- `/ideas`
- `/manutencao`

## Deployment

The project is set up to deploy to GitHub Pages via GitHub Actions on push to `main`. The workflow builds the site and publishes the `dist/` output to GitHub Pages.

If your repo uses a project page (username.github.io/<repo>), `astro.config.mjs` already sets `base` to `/My-Learning-Tracker/`. Adjust `base` and `site` in `astro.config.mjs` if needed.

## Notes

- Design follows a minimal, typographic-first approach. Styles live in `src/layouts/Layout.astro` and can be extended.
- Emojis in content were normalized to text for accessibility and consistency.


- [My Learning Tracker](#my-learning-tracker)
  - [My objective is learn core concepts to become a Senior Full Stack Developer](#my-objective-is-learn-core-concepts-to-become-a-senior-full-stack-developer)
  - [My Next Step](#my-next-step)
  - [Learning](#learning)
    - [Courses and Certifications](#courses-and-certifications)
    - [Books to Read](#books-to-read)
    - [Paths](#paths)
  - [Skills](#skills)
  - [Highlights](#highlights)
  - [Interesting Links](#interesting-links)
  - [Full Stack Web Developer Bucket List](#full-stack-web-developer-bucket-list)
    - [Acknowledgments](#acknowledgments)
    - [License](#license)

<!-- TOC end -->

![GitHub last commit](https://img.shields.io/github/last-commit/duarch/My-Learning-Tracker)

## My objective is learn core concepts to become a Senior Full Stack Developer

**To be considered a senior full stack developer:**

> Must have extensive experience with building and maintaining scalable web applications, including:

1. Front-end frameworks such as Angular, React, or Svelte for creating dynamic user interfaces
2. Back-end languages like Python or Golang for server-side logic and API development
3. Database management systems (e.g., SQL/NoSQL databases like PostgreSQL, MongoDB) for data persistence and querying
4. API design and integration, including RESTful services, GraphQL, and microservices architectures
5. Deployment and DevOps practices, such as CI/CD pipelines, containerization (Docker/Kubernetes), and cloud platforms (AWS, Azure, or GCP)
6. Security best practices, including authentication (OAuth, JWT), encryption, and vulnerability mitigation
7. Performance optimization techniques for both front-end (e.g., lazy loading, code splitting) and back-end (e.g., caching, indexing)

> Should have advanced knowledge in the following areas to demonstrate seniority:

1. Relevant certifications (e.g., AWS Certified Developer, Google Cloud Professional Developer, or full stack-specific credentials)
2. Data handling and analytics tools, including data knowledge for processing large datasets
3. Big data technologies like SAS for statistical analysis, PySpark for distributed data processing, and PowerBI for visualization and reporting

> Additionally, seniority is reflected in soft skills and broader expertise such as:

1. Mentoring junior developers and leading technical teams
2. Architectural decision-making for complex systems, including scalability and maintainability
3. Problem-solving in high-pressure environments, with a track record of debugging and resolving production issues
4. Version control mastery with Git, including branching strategies and code reviews
5. Agile methodologies and project management tools (e.g., Jira, Scrum) for collaborative development

<!-- Needs update -->
## My Next Step

1. Finish first freecodecamp Responsive Web Design Certification (300 hours)
2. Learn Git and Github
3. Basic Terminal Commands
4. CS50 Havard School
5. Grasshopper app
6. Curso em Vídeo (Portuguese)
7. ...

----

## Learning

**Legend:**

:battery: -  In progress

:hourglass_flowing_sand: - Soon

:white_check_mark: - Completed

### Courses and Certifications

|            Status           |   Year   | Course                                                                           |                Tutor                        |
|:---------------------------:|:--------:|:--------------------------------------------------------------------------------:|:-------------------------------------------:|
| :battery:                   |          | [Pós-graduaçao em Engenharia de Software]                                        | [Uni Alphaville]                            |
| :battery:                   |          | [Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas]          | [UniCV]                                     |
| :battery:                   |          | [Angular - The Complete Guide (2025 Edition)]                                    | Maximilian Schwarzmüller - [Udemy]          |
| :hourglass_flowing_sand:    |          | [CS50’s Introduction to Artificial Intelligence with Python]                     | [Harvard - CS50]                            |
| :hourglass_flowing_sand:    |          | [The Web Developer Bootcamp 2026]                                                | Colt Steele - [Udemy]                       |
| :hourglass_flowing_sand:    |          | [React - The Complete Guide 2025] (incl. Next.js, Redux)                         | Maximilian Schwarzmüller - [Udemy]          |
| :hourglass_flowing_sand:    |          | [Go - The Complete Guide]                                                        | Maximilian Schwarzmüller - [Udemy]          |
| :hourglass_flowing_sand:    |          | [MBA (pós-graduação) em Análise de dados e BIG Data]                             | [Uni Alphaville]                            |
| :hourglass_flowing_sand:    |          | [CSS Demystified!]                                                               | [KP] - Kevin Powell                         |
| :white_check_mark:          | Dec 2025 | [CS50’s Introduction to Programming with Python]                                 | [Harvard - CS50]                            |
| :white_check_mark:          | Jan 2025 | [DataViz - Power BI - Visionário]                                                | [Banco do Brasil]                           |
| :white_check_mark:          | Jan 2025 | [Engenharia de Dados - Visionário]                                               | [Banco do Brasil]                           |
| :white_check_mark:          | Jan 2025 | [Inteligência Artificial e Ciência de Dados - Visionário]                        | [Banco do Brasil]                           |
| :white_check_mark:          | Jan 2025 | [Web Analytics - Visionário]                                                     | [Banco do Brasil]                           |
| :white_check_mark:          | Dec 2024 | [Legacy JavaScript Algorithms and Data Structures]                               | [freeCodeCamp.org]                          |
| :white_check_mark:          | Jun 2024 | [SAS Education Brasil - SAS® Guide para Iniciantes]                              | [SAS]                                       |
| :white_check_mark:          | Nov 2023 | [Scrum]                                                                          | [Alura]                                     |
| :white_check_mark:          | Aug 2023 | [Linguaskill English C1 (CEFR)]                                                  | [Cambridge University Press & Assessment]   |
| :white_check_mark:          | Mar 2022 | [GO: DESENVOLVENDO UMA API REST]                                                 | [Alura]                                     |
| :white_check_mark:          | Feb 2022 | [GO: INICIANDO COM A LINGUAGEM DO GOOGLE]                                        | [Alura]                                     |
| :white_check_mark:          | Oct 2025 | [Aprendizado contínuo: desenvolvendo o perfil de lifelong learner]               | [Alura]                                     |
| :white_check_mark:          | Aug 2025 | [Métricas Ágeis: como medir resultados em um Ambiente Ágil]                      | [Alura]                                     |
| :white_check_mark:          | Aug 2025 | [Apache Airflow: orquestrando seu primeiro pipeline de dados]                    | [Alura]                                     |
| :white_check_mark:          | Jul 2025 | [OKR: construindo metas ágeis]                                                   | [Alura]                                     |
| :white_check_mark:          | Jul 2025 | [IA: explorando o potencial da inteligência artificial generativa]               | [Alura]                                     |
| :white_check_mark:          | May 2025 | [Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD]                | [Alura]                                     |
| :white_check_mark:          | Jan 2025 | [Kanban: análises para implementação]                                            | [Alura]                                     |
| :white_check_mark:          | Jan 2025 | [Git e GitHub: compartilhando e colaborando em projetos]                         | [Alura]                                     |
| :white_check_mark:          | Jan 2025 | [Transformação Digital: inicie a implementação do movimento]                     | [Alura]                                     |
| :white_check_mark:          | Jan 2025 | [Gestão Ágil: explorando conceitos da agilidade]                                 | [Alura]                                     |
| :white_check_mark:          | Jan 2025 | [Comunicação inclusiva e vieses inconscientes]                                   | [Alura]                                     |
| :white_check_mark:          | Jan 2025 | [UX Research: metodologias e imersão em pesquisa]                                | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Lógica de programação: praticando com desafios]                                 | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Lógica de programação: explore funções e listas]                                | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Lógica de programação: mergulhe em programação com JavaScript]                  | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Machine Learning: classificação com SKLearn]                                    | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Machine Learning: classificação com SKLearn]                                    | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Machine Learning: classificação por trás dos panos]                             | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Estatística com Python: probabilidade e amostragem]                             | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Estatística com Python: frequências e medidas]                                  | [Alura]                                     |
| :white_check_mark:          | Nov 2024 | [Python para Dados: trabalhando com funções, estruturas de dados e exceções]     | [Alura]                                     |
| :white_check_mark:          | Oct 2024 | [Python para Dados: primeiros passos]                                            | [Alura]                                     |
| :white_check_mark:          | Oct 2024 | [ChatGPT: otimizando a qualidade dos resultados]                                 | [Alura]                                     |
| :white_check_mark:          | Oct 2024 | [ChatGPT: desvendando a IA em conversas e suas aplicações]                       | [Alura]                                     |
| :white_check_mark:          | Jun 2024 | [SQL com MySQL: manipule e consulte dados]                                       | [Alura]                                     |
| :white_check_mark:          | Apr 2024 | [Angular: formulários orientados a templates]                                    | [Alura]                                     |
| :white_check_mark:          | Apr 2024 | [Angular: ciclo de vida]                                                         | [Alura]                                     |  
| :white_check_mark:          | Feb 2024 | [TypeScript na prática: implemente um projeto completo com TypeScript e módulos] | [Alura]                                     |
| :white_check_mark:          | Feb 2024 | [TypeScript: o paradigma funcional no front-end]                                 | [Alura]                                     |
| :white_check_mark:          | Feb 2024 | [TypeScript: aplicando orientação a objetos no Front-end]                        | [Alura]                                     |
| :white_check_mark:          | Feb 2024 | [TypeScript parte 2: avançando na linguagem]                                     | [Alura]                                     |
| :white_check_mark:          | Jan 2024 | [Angular 14: evoluindo a aplicação]                                              | [Alura]                                     |
| :white_check_mark:          | Nov 2023 | [Scrum: agilidade em seu projeto]                                                | [Alura]                                     |
| :white_check_mark:          | Oct 2023 | [Organização de Equipes Ágeis: os papéis existentes em uma equipe]               | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Liderança: práticas de gestão e melhorias]                                      | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Liderança: aprendendo sobre a missão e propósito de liderar pessoas]            | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Delegação de tarefas: obtenha o melhor do seu time]                             | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Liderança ambidestra: buscando inovação e resultados]                           | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Curiosidade, persistência e resiliência: da ideia à ação]                       | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [A Empresa Ágil: implemente o Business Agility nas organizações]                 | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [OKR: direcionando seu negócio para resultados]                                  | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Design Thinking: viabilizando soluções]                                         | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Data Science: analise e visualização de dados]                                  | [Alura]                                     |
| :white_check_mark:          | Sep 2023 | [Transformação organizacional: Lean-Ágil além da TI]                             | [Alura]                                     |
| :white_check_mark:          | Aug 2023 | [JavaScript: explorando a linguagem]                                             | [Alura]                                     |
| :white_check_mark:          | Aug 2023 | [NodeMcu e Esp8266: medindo e publicando dados com MQTT]                         | [Alura]                                     |
| :white_check_mark:          | Aug 2023 | [Gestão Ágil: liderando a mudança em um ambiente de agilidade]                   | [Alura]                                     |
| :white_check_mark:          | Aug 2023 | [Comunicação estratégica na liderança: como engajar e influenciar pessoas]       | [Alura]                                     |
| :white_check_mark:          | Aug 2023 | [Feedback: a arte de orientar e ser orientado com sentido]                       | [Alura]                                     |
| :white_check_mark:          | Jul 2023 | [Comunicação: como se expressar bem e ser compreendido]                          | [Alura]                                     |
| :white_check_mark:          | Jun 2023 | [Produtividade parte 1: estratégias para o dia a dia]                            | [Alura]                                     |
| :white_check_mark:          | Apr 2023 | [Customer Success: cultura centrada em cliente]                                  | [Alura]                                     |
| :white_check_mark:          | Feb 2023 | [Dashboard com Power BI: visualizando dados]                                     | [Alura]                                     |
| :white_check_mark:          | Jan 2023 | [Go: Orientação a Objetos]                                                       | [Alura]                                     |
| :white_check_mark:          | Jan 2023 | [Typescript parte 3: mais técnicas e boas práticas]                              | [Alura]                                     |
| :white_check_mark:          | Jan 2023 | [Go: crie uma aplicação web]                                                     | [Alura]                                     |
| :white_check_mark:          | Jan 2023 | [Go: a linguagem do Google]                                                      | [Alura]                                     |
| :white_check_mark:          | Dec 2022 | [Design Thinking em vendas: conhecendo seu cliente]                              | [Alura]                                     |
| :white_check_mark:          | Oct 2022 | [Agilidade: promovendo a transformação ágil]                                     | [Alura]                                     |
| :white_check_mark:          | Sep 2022 | [Vendas de alta performance: gestão de carteira]                                 | [Alura]                                     |
| :white_check_mark:          | Sep 2022 | [Vendas de alta performance: técnicas para melhorar seu aprendizado]             | [Alura]                                     |
| :white_check_mark:          | Sep 2022 | [Vendas de alta performance: prospecção de clientes]                             | [Alura]                                     |
| :white_check_mark:          | Sep 2022 | [Vendas de alta performance: entendendo a necessidade do cliente]                | [Alura]                                     |
| :white_check_mark:          | Aug 2022 | [Vendas de alta performance: perguntas poderosas]                                | [Alura]                                     |
| :white_check_mark:          | Aug 2022 | [Vendas de alta performance: Pitch e dicas de negociação]                        | [Alura]                                     |
| :white_check_mark:          | Aug 2022 | [Estratégias de Customer Success: foco no cliente]                               | [Alura]                                     |
| :white_check_mark:          | Jul 2022 | [Vendas de alta performance: solução e proposta]                                 | [Alura]                                     |
| :white_check_mark:          | Jul 2022 | [Vendas de alta performance: vendas na era digital]                              | [Alura]                                     |
| :white_check_mark:          | Jul 2022 | [TypeScript Part 1: Evolving Your JavaScript]                                    | [Alura]                                     |
| :white_check_mark:          | May 2022 | [JavaScript: programando a Orientação a Objetos]                                 | [Alura]                                     |
| :white_check_mark:          | Apr 2022 | [Python para Data Science]                                                       | [Alura]                                     |
| :white_check_mark:          | Mar 2022 | [Go: desenvolvendo uma API Rest]                                                 | [Alura]                                     |
| :white_check_mark:          | Feb 2022 | [Mindset Digital: técnicas e habilidades para liderança remota]                  | [Alura]                                     |
| :white_check_mark:          | Jan 2022 | [Comunicação não violenta parte 2: mantendo a empatia]                           | [Alura]                                     |
| :white_check_mark:          | Jan 2022 | [Comunicação não violenta: consciência para agir]                                | [Alura]                                     |
| :white_check_mark:          | Jan 2022 | [Comunicação assertiva: reduzindo conflitos e frustrações]                       | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Modelagem de banco de dados: NoSQL]                                             | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Design: desenvolvendo o seu portfólio]                                          | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Scraping com Python: coleta de dados na web]                                    | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Aprender a aprender: técnicas para seu autodesenvolvimento]                     | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Redis I: armazenando chaves e valores]                                          | [Alura]                                     |
| :white_check_mark:          | Jul 2021 | [UX: entenda a experiência de usuário]                                           | [Alura]                                     |
| :white_check_mark:          | Nov 2021 | [Certificate for Conquering Responsive Layouts]                                  | [KP] - Kevin Powell                         |
| :white_check_mark:          | Aug 2021 | [Aprender a Aprender: Técnicas para seu autodesenvolvimento]                     | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Modelagem de banco de dados: Começando com NoSQL]                               | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Redis I: Armazenando chaves e valores]                                          | [Alura]                                     |
| :white_check_mark:          | Aug 2021 | [Scraping com Python: Coleta de dados na web]                                    | [Alura]                                     |
| :white_check_mark:          | Jul 2021 | [Fundamentos de UX: Entenda a experiência de usuário]                            | [Alura]                                     |
| :white_check_mark:          | Mar 2021 | [HTML for Designers]                                                             | [Uxcel]                                     |
| :white_check_mark:          | Mar 2021 | [UI Components Best Practices]                                                   | [Uxcel]                                     |
| :white_check_mark:          | Feb 2021 | [Accessibility]                                                                  | [Uxcel]                                     |
| :white_check_mark:          | Feb 2021 | [What is Graphic Design?]                                                        | [LinkedIn]                                  |
| :white_check_mark:          | Jan 2021 | [Common Patterns]                                                                | [Uxcel]                                     |
| :white_check_mark:          | Jan 2021 | [Design Composition]                                                             | [Uxcel]                                     |
| :white_check_mark:          | Jan 2021 | [Responsive Web Design]                                                          | [freeCodeCamp.org]                          |
| :white_check_mark:          | Jan 2021 | [UI Components]                                                                  | [Uxcel]                                     |
| :white_check_mark:          | Dec 2020 | [CS50x]                                                                          | [Harvard - CS50]                            |
| :white_check_mark:          | Oct 2020 | [CS50’s Understanding Technology]                                                | [Harvard - CS50]                            |
| :white_check_mark:          | Aug 2020 | [UX/UI Design Foundations]                                                       | [Uxcel]                                     |
| :white_check_mark:          | Oct 2019 | [Curso Grátis de JavaScript]                                                     | [Curso em Vídeo]                            |
| :white_check_mark:          | May 2016 | [Fluência Duolingo em Inglês: Proficiente (estimativa)]                          | [Duolingo]                                  |

[//]: # (Reference links to courses)

[Curso Grátis de JavaScript]: https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1
[Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas]:https://unicv.edu.br/courses/analise_e_desenvolvimento_de_sistemas_ead/
[CS50’s Introduction to Programming with Python]: https://cs50.harvard.edu/python/2022/
[CS50x]:https://cs50.harvard.edu/x/
[CS50’s Understanding Technology]:https://cs50.harvard.edu/tech/2020/
[CSS Demystified!]: https://courses.kevinpowell.co/courses/css-demystified
[Uni Alphaville]: https://unialphaville.com.br/
[Pós-graduaçao em Engenharia de Software]: https://unialphaville.com.br/cursos/engenharia-de-software?uuid=f0c3990d-1afb-4ad3-adad-dee73663ea81&lat=-15.8355016&lc=Bras%C3%ADlia&lng=-48.0412934&ls=DF&kind=A+dist%C3%A2ncia+(EaD)/
[MBA (pós-graduação) em Análise de dados e BIG Data]: https://unialphaville.com.br/cursos/mba-em-analise-de-dados-e-big-data?uuid=69389457-dc40-4dc3-b9f8-c88f93ac8a90&lat=-3.21&lc=Altamira&lng=-52.21&ls=PA&kind=A+dist%C3%A2ncia+(EaD)/
[CS50’s Introduction to Artificial Intelligence with Python]: https://cs50.harvard.edu/ai/

[//]: # (Reference links to tutors)
[Duolingo]: https://www.duolingo.com
[freeCodeCamp.org]: https://www.freecodecamp.org
[Curso em Vídeo]: https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ
[Udemy]: https://www.udemy.com
[Alura]: https://www.alura.com.br
[Banco do Brasil]:https://www.bb.com.br
[Harvard - CS50]:https://cs50.harvard.edu/x/
[Uxcel]:https://uxcel.com
[UniCV]:https://unicv.edu.br
[LinkedIn]:https://www.linkedin.com/learning/
[Cambridge University Press & Assessment]:https://www.cambridge.org/gb/cambridge-university-press-assessment/
[KP]:https://courses.kevinpowell.co/products/home
[SAS]:https://www.sas.com/en_us/home.html

### Books to Read

|            Status           |   Year   | Book                                                             |                Author                       |
|:---------------------------:|:--------:|:----------------------------------------------------------------:|:-------------------------------------------:|
| :white_check_mark:          |          |                                                                  |                                             |
| :battery:                   |          | LExpressões Regulares - Uma abordagem divertida                  | Aurélio Marinho Jargas                      |
| :battery:                   |          | Learning Go:An Idiomatic Approach to Real-World Go Programming   | Jon Bodner                                  |
| :hourglass_flowing_sand:    |          | [How to Read a Book]                                             | Mortimer J. Adler and Charles Van Doren     |
| :hourglass_flowing_sand:    |          | [The Pragmatic Programmer]                                       | Andrew Hunt e David Thomas                  |
| :hourglass_flowing_sand:    |          | [How We Learn]                                                   | Stanislas Dehaene                           |
| :hourglass_flowing_sand:    |          | [How to Take Smart Notes]                                        | Sönke Ahrens                                |
| :hourglass_flowing_sand:    |          | [A High-Performing Mind]                                         | Andrew D. Thompson                          |
| :hourglass_flowing_sand:    |          | [Deep Work]                                                      | Cal Newport                                 |
| :hourglass_flowing_sand:    |          | [Atomic Habits]                                                  | James Clear                                 |
| :hourglass_flowing_sand:    |          | [The Construction of Social Reality]                             | John R. Searle                              |
| :hourglass_flowing_sand:    |          | [Flow: The Psychology of Optimal Experience]                     | Mihaly Csikszentmihalyi                     |
| :hourglass_flowing_sand:    |          | [The Math of Life and Death]                                     | Kit Yates                                   |
| :hourglass_flowing_sand:    |          | [Essencialismo]                                                  | Greg McKeown                                |
| :hourglass_flowing_sand:    |          | [A arte de ligar o *]                                            | Mark Manson                                 |
| :hourglass_flowing_sand:    |          | [O poder do hábito]                                              | Charles Duhigg                              |
| :hourglass_flowing_sand:    |          | [Mindset: A nova psicologia do sucesso]                          | Carol Dweck                                 |
| :hourglass_flowing_sand:    |          | [Rápido e devagar: duas formas de pensar]                        | Daniel Kahneman                             |
| :hourglass_flowing_sand:    |          | [Deep Work]                                                      | Cal Newport                                 |
| :hourglass_flowing_sand:    |          | [Atomic Habits]                                                  | James Clear                                 |
| :hourglass_flowing_sand:    |          | [The Construction of Social Reality]                             | John R. Searle                              |
| :hourglass_flowing_sand:    |          | [Clean Code]                                                     | Robert C. Martin                            |
| :hourglass_flowing_sand:    |          | [Refactoring]                                                    | Martin Fowler                               |
| :hourglass_flowing_sand:    |          | [Design Patterns]                                                | E. Gamma, R. Helm, R. Johnson, J. Vlissides |
| :hourglass_flowing_sand:    |          | [The Phoenix Project]                                            | Gene Kim                                    |
| :hourglass_flowing_sand:    |          | [Soft Skills: The Software Developer’s Life Manual]              | John Sonmez                                 |
| :hourglass_flowing_sand:    |          | [Domain-Driven Design]                                           | Eric Evans                                  |
| :hourglass_flowing_sand:    |          | [The Mythical Man-Month]                                         | Frederick Brooks                            |
| :hourglass_flowing_sand:    |          | [Working Effectively with Legacy Code]                           | Michael Feathers                            |
| :hourglass_flowing_sand:    |          | [Thinking in Systems]                                            | Donella Meadows                             |
| :hourglass_flowing_sand:    |          | [Don't Make Me Think, Revisited]                                 | Steve Krug                                  |
| :hourglass_flowing_sand:    |          | [System Design Interview]                                        | Alex Xu                                     |
| :hourglass_flowing_sand:    |          | [Accelerate: The Science of Lean Software and DevOps]            | Nicole Forsgren, Jez Humble, Gene Kim       |
| :hourglass_flowing_sand:    |          | [Staff Engineer: Leadership beyond Management]                   | Will Larson                                 |
| :hourglass_flowing_sand:    |          | [The Full Stack Developer]                                       | Chris Northwood                             |

<!--  -->
[//]: # (Reference links to books)
[How to Read a Book]: https://www.google.com.br/books/edition/_/1aJxEQAAQBAJ?hl=pt-BR
[How We Learn]: https://www.google.com.br/books/edition/_/jSNvEAAAQBAJ?hl=pt-BR
[How to Take Smart Notes]: https://www.google.com.br/books/edition/_/BGaPEQAAQBAJ?hl=pt-BR

### Paths

My roadmap is on [roadmap.sh](https://roadmap.sh/duarch)

----

<!-- Needs update -->
## Skills

|               Skill              | 1-Introduction         | 2-Basics           | 3-Good             | 4-Pretty Good         | 5-Confident         | 6-Awesome            |
|:-------------------------------- |:----------------------:|:------------------:|:------------------:|:---------------------:|:-------------------:|:--------------------:|
|**HTML5**                         | :white_check_mark:     | :white_check_mark: | :white_check_mark: |                       |                     |                      |
|**CSS3**                          | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**JavaScript**                    | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**ES6**                           | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**React**                         | :white_check_mark:     |                    |                    |                       |                     |                      |
|**Redux**                         |                        |                    |                    |                       |                     |                      |
|**Backbone**                      |                        |                    |                    |                       |                     |                      |
|**Git**                           | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**Git bash**                      |                        |                    |                    |                       |                     |                      |
|**GitHub**                        | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**Bitbucket**                     |                        |                    |                    |                       |                     |                      |
|**Gulp/Webpack**                  |                        |                    |                    |                       |                     |                      |
|**Agile**                         | :white_check_mark:     |                    |                    |                       |                     |                      |
|**Stylus**                        |                        |                    |                    |                       |                     |                      |
|**Working with APIs**             |                        |                    |                    |                       |                     |                      |
|**jQuery**                        | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**Css Grid & Flex-box**           | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**Responsive design**             | :white_check_mark:     |                    |                    |                       |                     |                      |
|**Mobile first**                  | :white_check_mark:     |                    |                    |                       |                     |                      |
|**Progressive Enhancement**       |                        |                    |                    |                       |                     |                      |
|**Markdown**                      | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**Website Building**              | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**Publishing website**            | :white_check_mark:     |                    |                    |                       |                     |                      |
|**Bootstrap**                     | :white_check_mark:     |                    |                    |                       |                     |                      |
|**Command line**                  | :white_check_mark:     | :white_check_mark: |                    |                       |                     |                      |
|**Node.js**                       | :white_check_mark:     |                    |                    |                       |                     |                      |
|**NPM**                           | :white_check_mark:     |                    |                    |                       |                     |                      |
|**Open Source Contribution**      |                        |                    |                    |                       |                     |                      |
|**Angular 4**                     | :white_check_mark:     |                    |                    |                       |                     |                      |
|**NPM scripts**                   |                        |                    |                    |                       |                     |                      |
|**One day some will be like this**| :white_check_mark:     | :white_check_mark: | :white_check_mark: | :white_check_mark:    | :white_check_mark:  | :white_check_mark:   |

----

## Highlights

The most interesting of what I'm watching, reading, and doing:

[**Click here for playlists and tweets. Articles, talks, tutorials, and more**](https://syknapse.github.io/My-Learning-Tracker/)

And here is a chronological log of the highlights of my learning:

[**My Learning Log**](https://github.com/Syknapse/My-Learning-Tracker/blob/master/log.md)

----

## Interesting Links

- Website to learn things quick [Learn X in Y minutes](https://learnxinyminutes.com/)
- Free resources for devs [Free for Developers](https://free-for.dev/#/)

----

## Full Stack Web Developer Bucket List

This is inspired by the article [Ginny Fahs'](https://twitter.com/ginnyfahs) ["Things Real Developers Do: My Bucket List"](https://blog.prototypr.io/wondering-if-youre-a-real-developer-yet-try-making-a-bucket-list-281275482155)
But its updated to reflect more modern web development practices in early 2026.

[**View Full Stack Web Developer Bucket List**](bucketList.md)

----

If you find this useful for your own needs you are welcome to fork a copy, customise it or even give it a star.

**You can [follow me on Twitter](https://x.com/duar_ch) or [get in touch](https://duar.ch "My contact section | Portfolio")**

----

### Acknowledgments

This has been partly inspired by [Syk Houdeib](https://x.com/duar_ch) and his wonderful [My-Learning-Tracker](https://github.com/Syknapse/My-Learning-Tracker) project.
Index generated by [Markdown TOC generator](https://bitdowntoc.derlin.ch/)

### License

[MIT License](https://github.com/Syknapse/My-Learning-Tracker/blob/master/LICENSE)
=======
# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
>>>>>>> 475b2b4 (Initial commit from Astro)
