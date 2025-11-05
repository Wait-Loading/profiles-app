# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



The Profiles App is a responsive, React-based web application designed to manage and display user profiles in a clean and modern interface. Each profile includes a name and a like counter, allowing users to interact dynamically with the listed profiles. The application supports adding new profiles through a validated form and updates state changes in real time without requiring a page refresh.

Built with Vite, React, and React-Bootstrap, the app delivers optimized performance, modular components, and consistent styling. Continuous Integration and Deployment are automated through GitHub Actions, with the production build hosted on GitHub Pages for seamless version control and deployment.

This project demonstrates a streamlined, production-ready architecture suitable for lightweight profile management or directory-style applications.