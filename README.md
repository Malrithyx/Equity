# Equity License Control

Vercel + Neon license dashboard. Add Neon Postgres through Vercel Marketplace, set the variables in `.env.example`, run the SQL in `database/schema.sql`, then deploy.

Login defaults requested: `Equity` / `0909`. Change `ADMIN_PASSWORD` before sharing the site.

The executable validates with `POST /api/v1/validate` using `{licenseKey,deviceId}`. Only the public validation URL belongs in the executable; never embed database or admin secrets.

## GitHub ? Vercel automatic sync

Connect the Vercel project to `Malrithyx/Equity` under Vercel **Project Settings ? Git**. Production deploys should use the `main` branch. Every push to `main` then creates a new Vercel deployment automatically; pull requests can use Preview deployments.

Set these Vercel Production environment variables before login will work: `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `SESSION_SECRET`, and `LICENSE_PEPPER`. Run `database/schema.sql` once in the connected Neon database.
