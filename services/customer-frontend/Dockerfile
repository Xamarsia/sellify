# Stage 1 and Stage 2 were split to decrease the number of `pnpm install` runs. 
# Any change to a package will cause a redeployment of other services.
# In a large monorepo, this can result in a huge amount of lost time, 
# as any change to a monorepo's lockfile cascades into tens or hundreds of deploys.
# Please refer to the https://turborepo.com/docs/guides/tools/docker for more details.


FROM node:24 AS base

#
# Stage 1: Build stage
#
FROM base AS builder

WORKDIR /app
RUN npm install -g pnpm
RUN pnpm add turbo --save-dev --ignore-workspace-root-check
RUN pnpm -v

COPY . .
RUN pnpm turbo prune customer-frontend --docker


#
# Stage 2: Add lockfile and package.json's of isolated subworkspace
#
FROM base AS installer

WORKDIR /app
RUN npm install -g pnpm
RUN pnpm add turbo --save-dev --ignore-workspace-root-check

# Install the dependencies
COPY --from=builder /app/out/json/ .
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm turbo build


#
# Stage 3: Run stage 
#
FROM base AS runner

WORKDIR /app
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer /app/services/customer-frontend/.next/standalone ./
COPY --from=installer /app/services/customer-frontend/.next/static ./services/customer-frontend/.next/static
COPY --from=installer /app/services/customer-frontend/public ./services/customer-frontend/public

CMD ["node", "services/customer-frontend/server.js"]
