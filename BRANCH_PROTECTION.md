# Branch Protection Configuration

To fully protect your main branch, you should configure the following settings in your GitHub repository:

## GitHub Repository Settings

1. Go to **Settings** → **Branches** in your GitHub repository
2. Click **Add rule** for the `main` branch
3. Configure the following settings:

### Required Status Checks
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- Select the following required checks:
  - `code-quality (18.x)`
  - `code-quality (20.x)` 
  - `security`

### Pull Request Requirements
- ✅ **Require a pull request before merging**
- ✅ **Require approvals** (minimum 1)
- ✅ **Dismiss stale PR approvals when new commits are pushed**
- ✅ **Require review from code owners** (optional)

### Additional Restrictions
- ✅ **Restrict pushes that create files** (optional)
- ✅ **Do not allow bypassing the above settings**
- ✅ **Include administrators** (recommended)

## Local Git Configuration

The following hooks are automatically configured:

### Pre-commit Hook
- Runs `npm run ci` before each commit
- Ensures code passes Biome checks before committing

### Pre-push Hook  
- Prevents direct pushes to `main` branch
- Runs full Biome checks before allowing any push
- Forces developers to use feature branches and PRs

## Available Scripts

- `npm run check` - Run all Biome checks (lint + format)
- `npm run check:fix` - Auto-fix issues where possible
- `npm run lint` - Run linting only
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Check formatting
- `npm run format:fix` - Auto-fix formatting
- `npm run ci` - Run all checks (used in CI/CD)

## Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit (pre-commit hook runs automatically)
3. Push to GitHub (pre-push hook runs checks)
4. Create Pull Request to `main`
5. GitHub Actions run full test suite
6. Require approval and passing checks before merge
7. Merge via PR (squash recommended)

This setup ensures code quality and prevents direct pushes to main while maintaining a smooth development workflow.