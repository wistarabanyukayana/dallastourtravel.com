# Dallas Tour Travel Website (Next.js + Prisma + MariaDB)

This project is an initial setup for the Dallas Tour Travel website, built with [Next.js](https://nextjs.org), [Prisma ORM](https://www.prisma.io/), and MariaDB. The codebase is in its early phase and currently includes the foundational configuration for future development.

## Project Structure

```
.
├── prisma/                # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   └── lib/               # Prisma client setup and test script
├── .env                   # Environment variables (MariaDB connection)
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── ...                    # Other config files
```

## Tech Stack

- **Next.js** for frontend and API routes
- **Prisma ORM** with MariaDB adapter ([`@prisma/adapter-mariadb`](https://www.npmjs.com/package/@prisma/adapter-mariadb))
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Set up environment variables:**

   - Edit [`.env`](.env) with your MariaDB credentials.

3. **Generate Prisma Client:**

   ```sh
   npx prisma generate
   ```

4. **Run migrations (if you add models):**

   ```sh
   npx prisma migrate dev --name init
   ```

5. **Start the development server:**

   ```sh
   npm run dev
   ```

6. **Test Prisma connection:**
   - Run [`src/lib/prisma-test.ts`](src/lib/prisma-test.ts) using:
     ```sh
     npx tsx src/lib/prisma-test.ts
     ```

## Status

> **Note:**  
> This repository contains only the initial setup and basic configuration. Core features and pages will be developed in future commits.

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT

For questions or suggestions, please open an issue or contact------

For questions or suggestions, please open an issue or contact
