# Bookquest frontend

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use

This repository uses nvm to manage the node version. If you don't have nvm installed, you can install it by following
the instructions on the [official website](https://github.com/nvm-sh/nvm).

### on macOS or Linux or WSL

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

### on Windows

![Note] Please use the WSL preferably to use the official nvm and avoid any issues.

You can also install nvm directly on Windows. You can download the installer from the
[nvm-windows](https://github.com/coreybutler/nvm-windows) repository.

After installing nvm, you can install node by running the following command:

```bash
nvm install --lts
```

Check the node version by running the following command:

```bash
node --version
```

if necessary you can change the node version by running the following command:

```bash
nvm use --lts
```

It should be at least `v20.0.0`.

### Package Manager

This repository uses `yarn` as the package manager. You can use `corepack` to install `yarn`. It will automatically
install `yarn` and use the correct version of `yarn` for the project.

> [!WARNING]
> Please reload your terminal before running the following command.

```bash
corepack enable
```

### Install dependencies

Before running the development server, you need to install the dependencies.

```bash
yarn
```

### Run the development server

```bash
yarn run dev
```

### Open in browser

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Run tests

```bash
yarn run test
```

## License

Licensed under the [MIT license](https://github.com/Bookquest-projects/frontend/blob/main/LICENSE).
