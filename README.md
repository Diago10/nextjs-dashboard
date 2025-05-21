# Next.js Dashboard Application

This is a dashboard application built with Next.js using the App Router. It serves as a starter template for learning and building dashboard apps with authentication and data management features.

## Technologies Used

- Next.js (App Router)
- NextAuth.js for authentication
- PostgreSQL for database
- Tailwind CSS for styling
- React Suspense and Server Components
- TypeScript

## Features

- User authentication with email and password (NextAuth Credentials provider)
- Protected dashboard routes accessible only to authenticated users
- Customer and invoice management pages
- Responsive UI with Tailwind CSS
- Middleware for route protection and redirects

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- PostgreSQL database with connection URL set in `POSTGRES_URL` environment variable

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-dashboard
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add your PostgreSQL connection string:

```
POSTGRES_URL=your_postgres_connection_string
```

4. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The app is deployed and can be viewed at:

[https://nextjs-dashboard-jet-gamma-38.vercel.app/](https://nextjs-dashboard-jet-gamma-38.vercel.app/)

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `app/dashboard/` - Dashboard related pages (customers, invoices)
- `app/login/` - Login page
- `app/ui/` - Reusable UI components
- `auth.ts` and `auth.config.ts` - Authentication configuration and setup
- `middleware.ts` - Middleware for route protection
- `public/` - Static assets like images
- `app/lib/` - Utility functions and data definitions

## License

This project is licensed under the MIT License.

---

For more information, see the [Next.js App Router Course](https://nextjs.org/learn) on the Next.js website.
