# Cloudflare Workers Next.js Template

[![.github/workflows/deploy.yml](https://github.com/LubomirGeorgiev/cloudflare-workers-nextjs-saas-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/LubomirGeorgiev/cloudflare-workers-nextjs-saas-template/actions/workflows/deploy.yml)

# [Github Repo](https://github.com/LubomirGeorgiev/cloudflare-workers-nextjs-saas-template)

This is a clean, modern Next.js template for Cloudflare Workers. It uses the [OpenNext](https://opennext.js.org/cloudflare) framework for deployment.

> [!TIP]
> This template is brought to you by 👉 [AgenticDev](https://agenticdev.agency/?ref=github-readme-nextjs-template) 👈 - where we help businesses automate operations and boost productivity through custom AI implementations. Just like this open-source project demonstrates technical excellence, we deliver:
>
> - Process automation with LLM-powered workflows
> - AI strategy consulting for sustainable scaling
> - Custom application development using cutting-edge stacks
>
> Hundreds of developers already trust our codebase - Just Imagine what we could build for your business.

# Supported Features:

- 💾 **Database with Drizzle and Cloudflare D1**
  - 🏗️ Type-safe Database Operations
  - 🔄 Automatic Migration Generation
  - 💻 SQLite for Local Development
  - ⚡ Efficient Data Fetching
  - 🔍 Type-safe Queries
- 🚀 **Deployment with Github Actions**
  - ⚙️ Automatic Deployments
  - 🔐 Environment Variables Management
  - 📦 Database Migrations
  - 🔄 Comprehensive CI/CD Pipeline
  - 🧹 Cache Purging
  - ✅ Type Checking
- 🎨 **Modern UI**
  - 🎨 Tailwind CSS
  - 🧩 Shadcn UI Components
  - 🌓 Dark/Light Mode
  - 📱 Responsive Design
  - ⚡ Loading States and Animations
  - 🔔 Toast Notifications
  - 🏠 Landing Page
  - 📋 Dashboard Example
- ✨ **Validations with Zod and React Hook Form**
  - 🛡️ Type-safe Form Validations
  - 🔒 Server-side Validations
  - 🔍 Client-side Validations
  - 🧹 Input Sanitization
  - ⚡ Real-time Validation
  - 🔄 Form State Management
- 👨‍💻 **Developer Experience**
  - 🧪 Local Development Setup
  - 📘 TypeScript Support
  - 🔍 ESLint Configuration
  - ✨ Prettier Configuration
  - 🔐 Type-safe Environment Variables
  - 🏗️ Cloudflare Types Generation
  - 📚 Comprehensive Documentation
  - 📐 Project Structure Best Practices
- ⚡ **Edge Computing**
  - 🌍 Global Deployment with Cloudflare Workers
  - 🚀 Zero Cold Starts
  - 💨 Edge Caching
  - ⚛️ React Server Components
  - 🖥️ Server-side Rendering
  - 💾 Edge Database with D1
## Planned features (TODO):

- [ ] Update Meta SEO tags 🔍
- [ ] Dynamic OpenGraph images 📸
- [ ] sitemap.xml 📄
- [ ] robots.txt 📄
- [ ] Multi-language support (i18n) 🌐
- [ ] Notifications 🔔
- [ ] Webhooks 🔗
- [ ] Track bundle size with https://www.npmjs.com/package/webpack-bundle-analyzer 📊

# Running it locally

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in the values.
3. `npm run db:migrate:dev` - Creates a local SQLite database and applies migrations
4. `npm run dev`
5. Open http://localhost:3000

## Changes to wrangler.jsonc

After making a change to wrangler.jsonc, you need to run `npm run cf-typegen` to generate the new types.

## Things to change and customize before deploying to production
1. Go to `src/constants.ts` and update it with your project details
2. Update `.cursor/rules/001-main-project-context.mdc` with your project specification so that Cursor AI can give you better suggestions
3. Update the footer in `src/components/footer.tsx` with your project details and links
4. Optional: Update the color palette in `src/app/globals.css`
5. Update the metadata in `src/app/layout.tsx` with your project details

## Deploying to Cloudflare with Github Actions

1. Create D1 and KV namespaces
2. Set either `RESEND_API_KEY` or `BREVO_API_KEY` as a secret in your Cloudflare Worker depending on which email service you want to use.
3. Create a Turnstile catcha in your Cloudflare account, and set the `NEXT_PUBLIC_TURNSTILE_SITE_KEY` as a Github Actions variable.
4. Set `TURNSTILE_SECRET_KEY` as a secret in your Cloudflare Worker.
5. Update the `wrangler.jsonc` file with the new database and KV namespaces, env variables and account id. Search for "cloudflare-workers-nextjs-saas-template" recursively in the whole repository and change that to the name of your project. Don't forget that the name you choose at the top of the wrangler.jsonc should be the same as `services->[0]->service` in the same file.
6. Go to https://dash.cloudflare.com/profile/api-tokens and click on "Use template" next to "Edit Cloudflare Workers". On the next, page add the following permissions in addition to the ones from the template:
    - Account:AI Gateway:Edit
    - Account:Workers AI:Edit
    - Account:Workers AI:Read
    - Account:Queues:Edit
    - Account:Vectorize:Edit
    - Account:D1:Edit
    - Account:Cloudflare Images:Edit
    - Account:Workers KV Storage:Edit
    - Zone:Cache Purge:Purge
7. Add the API token to the Github repository secrets as `CLOUDFLARE_API_TOKEN`
8. Add the Cloudflare account id to the Github repository variables as `CLOUDFLARE_ACCOUNT_ID`
9. Optional: If you want clear the CDN cache on deploy, add `CLOUDFLARE_ZONE_ID` to the Github repository variables for the zone id of your domain. This is the zone id of your domain, not the account id.
10. Push to the main branch
