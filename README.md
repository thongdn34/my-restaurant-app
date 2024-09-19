## Getting Started

First, install packages:

```bash
npm i
# or
yarn
```

### Set up
Create .env file with content clone from env.example
```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/my-restaurant"
```

Run docker compose
```bash
docker compose up -d
```

Prisma init
```bash
npx prisma init
```

Migrate and seed database
```bash
npx prisma migrate dev --name init
```
```bash
npm run db:seed
```

run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Prisma studio
```bash
npx prisma studio
```