# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Toast App Frontend

React + TypeScript + Vite application with comprehensive code quality tooling.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run all Biome checks (lint + format) |
| `npm run check:fix` | Auto-fix issues where possible |
| `npm run lint` | Run linting only |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Check formatting |
| `npm run format:fix` | Auto-fix formatting |
| `npm run ci` | Run all checks (used in CI/CD) |

## 🔧 Code Quality & Development Workflow

This project uses [Biome](https://biomejs.dev/) for fast and comprehensive code linting and formatting.

### Automatic Quality Checks

#### Pre-commit Hook
- Automatically runs `npm run ci` before each commit
- Ensures code passes all quality checks before committing
- Prevents committing code with linting or formatting issues

#### Pre-push Hook
- **Prevents direct pushes to `main` branch** 🚫
- Runs full Biome checks before allowing any push
- Forces developers to use feature branches and pull requests

#### GitHub Actions CI/CD
- Runs on all pushes and pull requests to `main` and `develop`
- Tests multiple Node.js versions (18.x, 20.x)
- Validates TypeScript compilation
- Runs security audits
- Ensures consistent code formatting

### Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write your code
   - Pre-commit hook runs automatically on `git commit`

3. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**
   - Open PR targeting `main` branch
   - GitHub Actions will run full test suite
   - Require approval and passing checks before merge

5. **Merge**
   - Use "Squash and merge" (recommended)
   - Delete feature branch after merge

### Protection Rules

- ✅ **Direct pushes to `main` are blocked**
- ✅ **All commits must pass Biome checks**
- ✅ **PRs require passing CI/CD checks**
- ✅ **Security vulnerabilities are detected**

### Manual Quality Commands

```bash
# Check for issues
npm run check

# Auto-fix all fixable issues
npm run check:fix

# Format code only
npm run format:fix

# Lint code only
npm run lint:fix
```

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD
├── .husky/              # Git hooks
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/         # Images, fonts, etc.
│   ├── App.tsx         # Main App component
│   ├── App.css         # App styles
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── biome.json          # Biome configuration
├── package.json        # Dependencies & scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── BRANCH_PROTECTION.md # GitHub branch protection setup guide
```

## 🛡️ Security

- Automatic dependency vulnerability scanning
- Pre-configured security rules in Biome
- Regular security audits in CI/CD pipeline

## 🤝 Contributing

1. Follow the development workflow outlined above
2. Ensure all quality checks pass locally before pushing
3. Write descriptive commit messages using conventional commits
4. Add tests for new features (when test framework is added)

## 📚 Documentation

- [Biome Documentation](https://biomejs.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
