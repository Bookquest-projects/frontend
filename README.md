# Vite & NextUI Template

This is a template for creating applications using Vite and NextUI (v2).

[Try it on CodeSandbox](https://githubbox.com/nextui-org/vite-template)

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use
This repository uses nvm to manage the node version. If you don't have nvm installed, you can install it by following the instructions on the [official website](https://github.com/nvm-sh/nvm).



### Install dependencies
We uses `pnpm` as the package manager. You can use `corepack` to install `pnpm`. It will automatically install `pnpm` and use the correct version of `pnpm` for the project.

```bash
corepack enable
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/vite-template/blob/main/LICENSE).
