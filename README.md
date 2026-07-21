# Equity License Control

Vercel + Neon license dashboard. Add Neon Postgres through Vercel Marketplace, set the variables in `.env.example`, run the SQL in `database/schema.sql`, then deploy.

Login defaults requested: `Equity` / `0909`. Change `ADMIN_PASSWORD` before sharing the site.

The executable validates with `POST /api/v1/validate` using `{licenseKey,deviceId}`. Only the public validation URL belongs in the executable; never embed database or admin secrets.
