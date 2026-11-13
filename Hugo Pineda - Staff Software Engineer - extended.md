# Hugo Pineda

**Staff Software Engineer | Full-Stack Product Engineering**

✉️ hpineda83@gmail.com | 📱 [(650) 745-5280](tel:+16507455280) | 💼 [linkedin.com/in/hugoandres](https://www.linkedin.com/in/hugoandres/) | 🐙 [github.com/hugotox](https://github.com/hugotox) | 🔗 [hugopineda.me](https://www.hugopineda.me/) | 📍 San Francisco, CA

---

## Professional summary

Staff software engineer with 18+ years of experience building customer-facing products, healthcare platforms, and marketplaces. Works across the stack, from frontend architecture and design systems to backend services, data modeling, and AI integrations. Recent work includes a patient platform with about 60,000 monthly active patients, Claude-based care-planning tools for healthcare advocates, and a shared component library used by four applications. The side project StickMonkey reached 10,000 registered users. Active interviewer for engineering candidates.

---

## Technical skills

- **Languages:** TypeScript, JavaScript, Python, SQL
- **Frontend:** React.js, Next.js, React Native, SvelteKit, TanStack Query, TanStack Router, Tailwind CSS, Chakra UI, Mapbox, Storybook, Vite
- **Backend:** Node.js, NestJS, Express.js, Django, Django REST Framework, REST APIs, GraphQL, Socket.IO
- **Data:** PostgreSQL, Redis, MS SQL Server, MySQL
- **AI:** OpenAI API, Anthropic Claude API
- **Infrastructure and testing:** AWS, Vercel, Docker, Supabase, Playwright, Cypress, Testing Library, Sentry, Datadog, GitHub Actions
- **Integrations:** Twilio, Stripe, SendGrid, Auth0, Statsig

---

## Professional experience

### Solace Health | Oct 2024 - Present · _2 yrs_

**Remote, San Francisco Bay Area**

#### Staff Full-Stack Engineer | Oct 2025 - Present

- Tech lead for a team of three engineers that built the Patient Experience platform from scratch and shipped it to real patients in four months. Set the architecture and owned the full-stack implementation in React, TanStack Query/Router, NestJS, and PostgreSQL.
- Chose TanStack Router and Query on Vite over Next.js because the portal didn't need server-side rendering, which gave the team caching and retries without writing them.
- Shipped self-service scheduling, so patients book, reschedule, and cancel advocate visits without contacting the customer experience team.
- Raised monthly patient logins about 50% over the old patient pages in the health app, to about 60,000 monthly active patients, by shipping patient dashboards, account management, and advocate progress tracking.
- Set up the platform's authentication and authorization (Auth0), feature flags (Statsig), error monitoring (Sentry), and automated unit and end-to-end tests.

#### Senior Full-Stack Engineer | Oct 2024 - Oct 2025

- Built AI-guided care planning with the Anthropic API, built into the advocate workflow and used by all of Solace's roughly 1,500 advocates to set patient goals, plan care, and decide next steps.
- Replaced hand-written timesheets with AI-generated claim documentation, used by all of Solace's roughly 1,500 advocates for every claim. It combines a patient's completed tasks, visit transcripts, advocate notes, and care plan goals and uses the Anthropic API to write them up in one standard format, so claims no longer depend on each advocate's writing style.
- Started and led the design system, a 56-component library built on shadcn, published to npm, with Figma as the source of truth. Built the proof of concept and the first 10 components, got product and design to sign on, and rolled it out to four apps: Solace Health (advocates and physicians), Solace Admin, Solace Funnel, and Solace Patient. Every team now contributes components.
- Code-split the advocate app, which shipped as a single 10 MB JavaScript chunk. The largest chunk is now about 200 KB.
- Replaced OpenPhone with a Twilio integration for patient and advocate calls and texts, about 6,000 calls a month. Unlike OpenPhone, it lets the platform capture call transcripts, which feed the AI claim documentation.
- Migrated two frontend apps (Solace Health and Solace Admin) from Create React App and Next.js to Vite. Reloading after a code change dropped from 4 to 5 seconds to under a second, and production builds went from about 2 minutes to about 10 seconds.

### Zumper | Jul 2019 - Oct 2024 · _5 yrs 3 mos_

**San Francisco Bay Area**

#### Staff Frontend Engineer | Oct 2023 - Oct 2024 | Hybrid

- Led the JavaScript-to-TypeScript migration across Zumper and PadMapper, taking TypeScript coverage from about 50% to 90% in six months. Broke the work into tickets, assigned and reviewed them across a team of five frontend engineers, and converted a large share of the code personally.
- Started the shared design system with the design team, built on Chakra UI and used by Zumper, PadMapper, and an internal app for property managers. Chakra components are accessible by default, and the custom components were built to the same standard, which raised accessibility compliance on Zumper to over 95%.
- Wrote Cypress end-to-end tests for the main user journeys on Zumper and PadMapper: searching for properties, opening a listing, browsing its photos, and contacting the property manager. The tests ran in CI on every merge to main and caught regressions, such as a photo carousel whose next and previous buttons stopped working.
- Fixed Core Web Vitals on Zumper and PadMapper. Took Zumper's Cumulative Layout Shift (CLS) from 0.25 to a perfect score by replacing loading spinners with skeletons sized to match the content that replaced them. Moved Largest Contentful Paint (LCP) from red to green on both sites by serving images sized for each device with the HTML picture element and lazy-loading sections below the fold.

#### Senior Frontend Engineer | Oct 2021 - Oct 2023 | Hybrid

- Built polygon map search as a Mapbox plugin for Zumper and PadMapper, so users can draw their own search area on the map.
- Built the property manager dashboard, a paid feature for selected Zumper customers. It shows how their listings perform and where the market is moving, and lets them manage their inventory.
- Replaced a mix of four styling approaches (CSS Modules, LESS, Sass, and Emotion) with Tailwind CSS. Pulled the shared styles into one Tailwind theme for Zumper and one for PadMapper, so new pages use utility classes instead of writing their own CSS.

#### Frontend Engineer | Jul 2019 - Oct 2021 | On-site

- Rebuilt PadMapper.com, a real estate search site with millions of users, moving it from a legacy AngularJS app to React and Redux with server-side rendering.

### CareLinx | Jul 2015 - May 2019 · _3 yrs 10 mos_

**On-site, San Bruno, CA**

#### Software Engineer

- Led a rebuild of the website so every page worked on mobile. CareLinx had no mobile app, and this let the company ship iOS and Android apps as a React Native app that loads the site in a webview, instead of rebuilding every screen natively.
- Built caregiver matching and scheduling for a marketplace of about 100,000 caregivers, using Django REST Framework, PostgreSQL, and React.
- Built real-time messaging between families and caregivers with Socket.IO, with push notifications and email alerts.
- Built an invoicing system that calculates overtime, generates PDFs, and sends email notifications.
- Integrated Backgrounds Online to run caregiver background checks.
- Cut the largest JavaScript chunk from about 5 MB to 200 KB with route-based code-splitting.

### LawLogix Group, Inc. | Apr 2012 - Jul 2015 · _3 yrs 3 mos_

**On-site, Phoenix, AZ**

#### Software Engineer

- Migrated a legacy application from 4D, a proprietary database platform, to Python and Django, making it faster and easier to maintain.
- Built the case management dashboard in the company's main product, used by immigration lawyers and paralegals.
- Introduced test-driven development to the team, using Python's unittest.

### Early career experience | 2007 - 2012

**Chile-based companies: Derco, AreaWeb, Quintec, TIDE S.A.**

- Built e-commerce sites for the automotive industry, integrated with SAP.
- Built healthcare systems for public hospitals, including birth control tracking.
- Built educational software and reporting systems for schools and colleges.
- Worked with ASP.NET, Django, PHP, jQuery, PostgreSQL, and Adobe Flex.

---

## Side project

### StickMonkey | Jan 2024 - Oct 2024

- Technical co-founder of a marketplace where student pilots find aircraft owners and managers to build flight time.
- Built the whole product: database, backend, and frontend in SvelteKit, Tailwind CSS, shadcn, and Supabase, with Stripe payments and SendGrid email, deployed on Vercel.
- Reached 10,000 registered users through organic search and Facebook ads. Shut down in September 2025 before earning revenue, for lack of funding.

---

## Education

**B.S. Industrial Engineering (Computer Science Track)** | Universidad de La Frontera | Temuco, Chile | 2008

- Five-year professional degree. Coursework included algorithms, data structures, distributed systems, databases, and software engineering.

---

## Additional information

- **Languages:** English, Spanish
- **Interests:** Open-source projects, retro gaming, rock climbing, and fitness.
