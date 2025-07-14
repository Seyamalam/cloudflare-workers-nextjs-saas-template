import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GITHUB_REPO_URL } from "@/constants";

const faqs = [
  {
    question: "Is this template really free?",
    answer: (
      <>
        Yes, this template is completely free and <a href={GITHUB_REPO_URL} target="_blank">open source</a>! You can use it for both personal and commercial projects without any licensing fees. You can fork, copy, modify, and distribute it as you see fit without any restrictions and attribution.
      </>
    ),
  },
  {
    question: "What features are included?",
    answer: (
      <>
        The template includes a clean foundation with essential features:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Database integration with Drizzle ORM and Cloudflare D1</li>
          <li>Modern UI components from Shadcn UI and Tailwind CSS</li>
          <li>Form validations and error handling</li>
          <li>Dark mode support</li>
          <li>Responsive design</li>
          <li>TypeScript throughout the codebase</li>
          <li>Automated deployments with GitHub Actions</li>
          <li>SEO optimization with Next.js</li>
          <li>Clean, maintainable architecture</li>
        </ul>
      </>
    ),
  },
  {
    question: "What's the tech stack?",
    answer: (
      <>
        <p>The template uses modern and reliable technologies:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Next.js 15 with App Router and React Server Components</li>
          <li>TypeScript for type safety</li>
          <li>Tailwind CSS and Shadcn UI for styling</li>
          <li>DrizzleORM with Cloudflare D1 for database</li>
          <li>Cloudflare Workers for serverless deployment</li>
          <li>React Hook Form and Zod for form handling</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I deploy my application?",
    answer: (
      <>
        <p>Deployment is automated with GitHub Actions. You&apos;ll need to:</p>
        <ol className="list-decimal pl-6 mt-2 space-y-1">
          <li>Create Cloudflare D1 database</li>
          <li>Add your Cloudflare API token to GitHub secrets</li>
          <li>Configure your wrangler.toml file</li>
          <li>Push to the main branch</li>
        </ol>
        <p className="mt-2">The deployment process is fully documented in the <a href={`${GITHUB_REPO_URL}/blob/main/README.md`} target="_blank">GitHub repository</a>.</p>
      </>
    ),
  },
  {
    question: "What do I need to get started?",
    answer: (
      <>
        <p>You&apos;ll need a Cloudflare account (free tier is fine), Node.js installed locally, and basic knowledge of React and TypeScript. The template includes detailed documentation to guide you through the setup.</p>
        <p>You can also check out the <a href={`${GITHUB_REPO_URL}/blob/main/README.md`} target="_blank">documentation</a> for more information.</p>
      </>
    ),
  },
  {
    question: "How do I customize the template?",
    answer: (
      <>
        <p>Before deploying to production, you should:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Update project details in <code>src/constants.ts</code></li>
          <li>Modify the footer in <code>src/components/footer.tsx</code></li>
          <li>Customize the color palette in <code>src/app/globals.css</code></li>
          <li>Add your own pages and components</li>
          <li>Configure your database schema in <code>src/db/schema.ts</code></li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I contribute?",
    answer: (
      <>
        Contributions are welcome! Feel free to open issues, submit pull requests, or help improve the documentation on <a href={GITHUB_REPO_URL} target="_blank">GitHub</a>. The project follows standard open source contribution guidelines.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full mt-10">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert w-full max-w-none">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
