FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable

RUN npm install -g serve

RUN echo 'nodeLinker: "node-modules"' > ./.yarnrc.yml
RUN \
    if [ -f yarn.lock ]; then yarn install --immutable; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi


COPY . .

RUN ls -lhat
RUN yarn run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]