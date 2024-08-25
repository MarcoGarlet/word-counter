# Step 1: Build and Test the application
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm test

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "run", "start"]

