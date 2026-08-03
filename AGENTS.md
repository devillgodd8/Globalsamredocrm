# Repository Guidelines

## Project Structure & Module Organization
This project is a React-based web application for **Revera Forte Auto**, built with **Vite**, **TypeScript**, and **Tailwind CSS**.

- **`.\src\components`**: Contains shared UI components like `.\src\components\Header.tsx` and `.\src\components\Footer.tsx`.
- **`.\src\components\ui`**: Houses primitive UI components (e.g., `.\src\components\ui\navigation-menu.tsx`), following a pattern similar to shadcn/ui.
- **`.\src\pages`**: Root-level page components, including organized sub-directories for `industries` and `solutions`.
- **`.\src\lib`**: Shared utilities, primarily `.\src\lib\utils.ts` for Tailwind class merging.
- **`.\public`**: Static assets like logos and images.

## Build, Test, and Development Commands
The project uses `npm` for package management and `vite` for the build pipeline.

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run lint`**: Runs ESLint to check for code quality and style issues.
- **`npm run preview`**: Previews the production build locally.

## Coding Style & Naming Conventions
- **TypeScript**: Used strictly across the codebase. Ensure types are defined for all component props and utility functions.
- **Styling**: Use **Tailwind CSS** classes exclusively. Utilize the `cn` utility from `.\src\lib\utils.ts` for conditional class application.
- **Components**: Functional components using React hooks are preferred. Export components as default exports or named exports following existing patterns in the directory.
- **Icons**: Use **Lucide React** for all icons and logos as per project defaults.
- **Animations**: Use **Framer Motion** for interactive elements and page transitions.

## Design Principles
- **Aesthetic**: Aim for "beautiful, production-worthy designs" that avoid a "cookie-cutter" look.
- **Media**: Use valid Unsplash URLs for stock photos where appropriate. Do not download images; link to them directly.

## Commit Guidelines
- Commit messages should be concise and descriptive (e.g., `Initial commit: Revera Forte Auto website`).
- Ensure code passes `npm run lint` before committing.
