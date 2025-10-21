# AI Coding Assistant Instructions

This document contains guidelines for AI coding assistants (GitHub Copilot, Cursor, etc.) working on this project.

## 🚨 Critical Rules

### 1. Use DaisyUI Components & Utilities
- **DO NOT** use magic numbers or standard CSS for styling
- **DO** use DaisyUI component classes and utility classes wherever possible
- **DO NOT** write custom CSS unless explicitly requested by the user
- Examples:
  - ❌ `style={{ padding: '16px', backgroundColor: '#3b82f6' }}`
  - ✅ `className="btn btn-primary p-4"`
  - ❌ Custom CSS with hex colors and pixel values
  - ✅ DaisyUI color tokens: `bg-primary`, `text-accent`, `border-base-300`

### 2. No Unsolicited Documentation
- **DO NOT** create or update `.md` files explaining changes after completing a prompt
- **DO NOT** write changelog entries unless explicitly asked
- **DO** make changes and confirm completion concisely
- Exception: Update documentation only when the user explicitly requests it

## 📋 Additional Guidelines

### Code Style
- Follow existing TypeScript and React patterns in the project
- Use functional components with hooks
- Prefer named exports for components

### Testing
- Write tests when implementing new features (once test framework is set up)
- Ensure changes don't break existing functionality

### Git Workflow
- Follow the branch protection rules outlined in `BRANCH_PROTECTION.md`
- Never commit directly to `main`

---

**Note**: This file will be updated as more guidelines are established. AI assistants should check this file before making significant changes.