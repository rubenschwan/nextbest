<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/images/logo/logo_light.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/images/logo/logo_dark.svg">
  <img width="200" height="200" alt="NextBest Logo" src="public/images/logo/logo_light.svg">
</picture>

# NextBest: A Next.js Best Practices Laboratory
</div>

Welcome to NextBest, an evolving repository dedicated to exploring and discovering best practices in modern web development using Next.js and its ecosystem.

## 🧪 Vision

NextBest is designed as a living laboratory for web development excellence. We're not claiming to have all the answers; instead, we're embarking on a journey of experimentation, learning, and continuous improvement in building robust, scalable, and maintainable web applications.

Our goals are to:
- Explore and test various approaches to common web development challenges
- Adapt to the rapidly changing tech landscape through iterative improvements
- Build a community of curious developers who are passionate about pushing the boundaries of what's possible

## 🚀 Features (Current & Planned)

- [x] Next.js 14 with App Router
- [x] TypeScript for type-safe code
- [x] Tailwind CSS for styling
- [x] Dev Containers for consistent development environments
- [x] shadcn/ui for accessible and customizable UI components
- [x] Prisma with PostgreSQL for database management
- [ ] Auth.js for authentication
- [ ] Containerized deployment
- [ ] CI/CD workflows
- [ ] Typed APIs
- [ ] Form handling and validation
- [ ] ... and more to come!

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [Auth.js](https://authjs.dev/) (planned)
- **Deployment**: To be decided
- **Development Environment**: [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)

## 🚦 Getting Started

You can choose to develop using Dev Containers or without them. Dev Containers provide a consistent development environment across different machines.

### Using Dev Containers (Recommended)

1. Ensure you have [Docker](https://www.docker.com/products/docker-desktop) and [VS Code](https://code.visualstudio.com/) installed.
2. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code.
3. Clone the repository:
   ```bash
   git clone https://github.com/rubenschwan/nextbest.git
   ```
4. Open the project in VS Code.
5. When prompted, click "Reopen in Container" or run the "Remote-Containers: Reopen in Container" command from the command palette.
6. VS Code will build the Dev Container and set up the environment. This may take a few minutes the first time.
7. Once the container is ready, open a new terminal in VS Code and run:
   ```bash
   npm install
   npx prisma migrate dev
   ```
   This will install dependencies, generate Prisma client, and run database migrations.

### Without Dev Containers

1. Clone the repository:
   ```bash
   git clone https://github.com/rubenschwan/nextbest.git
   cd nextbest
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your local PostgreSQL database and update the DATABASE_URL in the .env file.
4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Setup

This project uses VS Code for development. We recommend installing the following extensions for the best development experience:

- ESLint
- Prettier
- Remote Development
- Docker
- Tailwind CSS IntelliSense
- Prisma

When using Dev Containers, these extensions are automatically installed in the container environment.

If you're not using Dev Containers, you'll be prompted to install recommended extensions when you open the project in VS Code. We highly recommend installing these extensions to enhance your development experience.

## 🤝 Contributing

We believe in the power of collaborative experimentation. If you have ideas, suggestions, or want to contribute to our ongoing experiments, please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

All contributions, whether they're new experiments or improvements to existing ones, are warmly welcomed!

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Auth.js](https://authjs.dev/)
- [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- All our amazing contributors and the open-source community

---

Built with ❤️ by Ruben Schwan. Let's make the web better, together!