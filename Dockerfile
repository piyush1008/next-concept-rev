FROM node:20-alpine

WORKDIR /app

ARG DATABASE_URL

COPY ./package.json ./package.json

COPY ./package-lock.json ./package-lock.json

RUN npm install


COPY . .

# Use a dummy DATABASE_URL for prisma generate (it doesn't actually connect to the database)
RUN DATABASE_URL=${DATABASE_URL} npx prisma generate

CMD ["npm", "run", "dev"]