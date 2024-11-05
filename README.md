# ChatGPT Quiz Game - Jaya

> :warning: **Add yout OpenAI API key to an .env file (.local or .development), to properly request que questions. If an API key is not provided, some static questions will me used to keep the application working**

This repo organizes the source code of the trivia game using the chatGPT API.

## Stack

- [React 18](https://beta.reactjs.org/)
- TypeScript, of course
- [Tailwindcss](https://tailwindcss.com/) - next generation utility-first CSS
- [Atomic Design organization](https://bradfrost.com/blog/post/atomic-web-design/)
- [Relative imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)
- [Shadcn/UI](https://ui.shadcn.com)
- Structure: Project structured inspired by [Vital](https://vital.josepvidal.dev).

### Coding Style

- [ESLint](https://eslint.org/) - configured for React/Hooks & TypeScript
- [Prettier](https://prettier.io/)

## Dev tools

- [TypeScript](https://www.typescriptlang.org/)

### Development

Just run and visit http://127.0.0.1:3000/

```bash
yarn dev
```

### Linting

```bash
yarn lint
yarn lint:fix
yarn format
```

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated file in `dist` that ready to be served.

## Features

- Integration with the ChatGPT API (https://api.openai.com/v1/chat/completions) using the model (gpt-3.5-turbo)
- Progress bar with a timer for each question
- Overall status until the end of the game (n/10)
- Scoring displayed throughout the game and at the end
- Scoring system: 1000 points for each correct answer + an additional score based on the remaining time on the timer
- Scoreboard with local persistence
- Option to add a username
- Username with validations
- Fully responsive interface
- Theming for better customization
- State management with hooks and Context Provider
