export type IconName =
  | "Calendar"
  | "CheckSquare"
  | "ListChecks"
  | "Users"
  | "Bell"
  | "MessageCircle"
  | "Share2"
  | "RefreshCw"
  | "Shield"
  | "Smartphone"
  | "Clock"
  | "Zap";

export interface LandingPageFeature {
  iconName: IconName;
  title: string;
  description: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export interface InternalLink {
  href: string;
  label: string;
}

export interface LandingPageData {
  slug: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  features: [LandingPageFeature, LandingPageFeature, LandingPageFeature];
  contentSections: ContentSection[];
  internalLinks: InternalLink[];
}

// ---------------------------------------------------------------------------
// CALENDAR PAGES
// ---------------------------------------------------------------------------

const familyCalendarApp: LandingPageData = {
  slug: "family-calendar-app",
  keyword: "Family Calendar App",
  metaTitle: "Family calendar app — shared schedules and reminders | Noa",
  metaDescription:
    "Noa is a family calendar app that keeps everyone in sync. Colour-coded schedules, smart reminders, WhatsApp access, and Apple and Google Calendar sync.",
  heroHeadline: "The family calendar app that keeps everyone in sync",
  heroSubheadline:
    "See the whole family's schedule in one calm, colour-coded view. Add events from WhatsApp, sync with Apple and Google Calendar, and never double-book again.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "Calendar",
      title: "Unified family view",
      description:
        "See everyone's schedules in one place. Work, school, sports, and social events — colour-coded and easy to scan.",
    },
    {
      iconName: "RefreshCw",
      title: "Apple & Google sync",
      description:
        "Connect your existing calendars and keep everything in sync automatically. No manual copying required.",
    },
    {
      iconName: "MessageCircle",
      title: "Add events via WhatsApp",
      description:
        "Just message Noa on WhatsApp to create events, move appointments, or check your schedule for the week.",
    },
  ],
  contentSections: [
    {
      heading: "Why families need a shared calendar",
      paragraphs: [
        "Keeping track of a busy household is hard. Between school pick-ups, work meetings, after-school clubs, and social plans, things slip through the cracks. A family calendar app brings everything together so both parents — and the whole household — can see what's coming up.",
        "Noa was designed for exactly this. Instead of juggling separate calendars on different phones, Noa gives your family a single, shared view. Every event is colour-coded by family member, so you can glance at the week and know exactly who needs to be where.",
      ],
    },
    {
      heading: "A calendar you can talk to",
      paragraphs: [
        "What makes Noa different from other family calendar apps is how easy it is to add events. You don't need to open the app, tap through screens, and fill in fields. Just send a WhatsApp message like \"football practice every Tuesday at 4pm\" and Noa handles the rest.",
        "This natural language approach means you can manage your family calendar app from the school run, the supermarket queue, or while cooking dinner. It fits into your life instead of adding another app to check.",
      ],
    },
    {
      heading: "Syncs with the calendars you already use",
      paragraphs: [
        "Noa connects to Apple Calendar and Google Calendar, so your existing events appear automatically. There's no need to start from scratch. Your work diary, your partner's schedule, and the kids' activities all live together in one family calendar app.",
        "Combined with shared task lists and shopping lists, Noa goes beyond a calendar to become the single place your family organises life. It's calm, practical, and designed for real households — not boardrooms.",
      ],
    },
  ],
  internalLinks: [
    { href: "/shared-calendar-app", label: "Shared calendar app" },
    { href: "/shared-family-calendar", label: "Shared family calendar" },
    { href: "/family-task-manager", label: "Family task manager" },
  ],
};

const sharedCalendarApp: LandingPageData = {
  slug: "shared-calendar-app",
  keyword: "Shared Calendar App",
  metaTitle: "Shared calendar app for busy households — sync all | Noa",
  metaDescription:
    "Noa is the shared calendar app for busy households. See everyone's schedule in one place, sync existing calendars, and add events via WhatsApp.",
  heroHeadline: "The shared calendar app for busy households",
  heroSubheadline:
    "One calendar for the whole family. Colour-coded schedules, real-time sync, and the ability to add events just by sending a message.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "Users",
      title: "One calendar, everyone's events",
      description:
        "No more asking \"what time is that thing?\" — everyone's events are visible in a single shared view.",
    },
    {
      iconName: "RefreshCw",
      title: "Real-time sync",
      description:
        "Changes appear instantly for everyone. Add an event on your phone and your partner sees it straight away.",
    },
    {
      iconName: "MessageCircle",
      title: "WhatsApp access",
      description:
        "Message Noa on WhatsApp to add, check, or change events. No need to open the app.",
    },
  ],
  contentSections: [
    {
      heading: "Stop asking \"what's the plan?\"",
      paragraphs: [
        "In most households, one person ends up being the family scheduler. They know who has what, when, and where — and everyone else just asks them. A shared calendar app changes that dynamic by giving everyone equal visibility.",
        "Noa makes sharing effortless. Once connected, every family member can see upcoming events, add new ones, and get reminders. No one is left out of the loop, and no one carries the burden alone.",
      ],
    },
    {
      heading: "More than just dates and times",
      paragraphs: [
        "A good shared calendar app does more than show events. Noa combines your shared calendar with task management and family lists — so \"buy a birthday present for Saturday's party\" lives right alongside the party itself.",
        "You can manage your entire household from one place. Calendar events, assigned tasks, and shopping lists all stay connected. And because Noa works through WhatsApp, you can add items to any of them with a quick message.",
      ],
    },
    {
      heading: "Built for families, not offices",
      paragraphs: [
        "Most shared calendar apps were designed for teams at work. Noa is purpose-built for families. The interface is calm and uncluttered. The colours are warm. And features like WhatsApp integration and shared lists reflect how families actually communicate.",
        "Whether you're coordinating school schedules, weekend plans, or just making sure someone remembers the dentist appointment — Noa is the shared calendar app that keeps your household running smoothly.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-calendar-app", label: "Family calendar app" },
    { href: "/shared-family-calendar", label: "Shared family calendar" },
    { href: "/shared-list-app", label: "Shared list app" },
  ],
};

const sharedFamilyCalendar: LandingPageData = {
  slug: "shared-family-calendar",
  keyword: "Shared Family Calendar",
  metaTitle: "Shared family calendar — colour-coded with reminders | Noa",
  metaDescription:
    "Keep your family organised with Noa's shared family calendar. Colour-coded events for every family member, WhatsApp event creation, and smart reminders.",
  heroHeadline: "Your shared family calendar, simplified",
  heroSubheadline:
    "Coordinate schedules without the chaos. Noa gives your family a beautiful, shared calendar that everyone can access — even from WhatsApp.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "Calendar",
      title: "Colour-coded schedules",
      description:
        "Each family member gets their own colour. Scan the week at a glance and know exactly what's happening.",
    },
    {
      iconName: "Bell",
      title: "Smart reminders",
      description:
        "Noa reminds you before events so nothing sneaks up on you. Customise when and how you're notified.",
    },
    {
      iconName: "MessageCircle",
      title: "Add events from WhatsApp",
      description:
        "Type \"dentist for Lily on Thursday at 3\" and Noa adds it to your shared family calendar instantly.",
    },
  ],
  contentSections: [
    {
      heading: "One place for every family schedule",
      paragraphs: [
        "School events. Sports practice. Birthday parties. Dentist appointments. Family life is a web of overlapping schedules, and keeping them all in your head isn't sustainable. A shared family calendar lets everyone see the full picture.",
        "Noa brings all of these together into one calm, visual calendar. Each person's events are colour-coded, so you can quickly see who's busy and when there's a clash. It's the shared family calendar your household has been waiting for.",
      ],
    },
    {
      heading: "Easy enough for everyone to use",
      paragraphs: [
        "The best shared family calendar is one that everyone actually uses. That's why Noa lets you add events through WhatsApp — no app to open, no forms to fill in. Send a message like \"swimming lessons moved to 5pm\" and it's done.",
        "For those who prefer the app, Noa's interface is clean and intuitive. Swipe between days, tap to add events, and see your family's week in a beautifully designed view. Either way, your shared family calendar stays up to date.",
      ],
    },
    {
      heading: "Calendar, tasks, and lists — all connected",
      paragraphs: [
        "Noa doesn't stop at calendars. Your shared family calendar connects naturally with task lists and shopping lists. Assign chores alongside calendar events. Add items to the shopping list while checking the meal plan.",
        "It's a complete family organiser — not just another calendar app. And with WhatsApp integration, managing your household is as simple as sending a message.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-calendar-app", label: "Family calendar app" },
    { href: "/shared-calendar-app", label: "Shared calendar app" },
    { href: "/assign-tasks-family", label: "Assign tasks to family" },
  ],
};

// ---------------------------------------------------------------------------
// TASK PAGES
// ---------------------------------------------------------------------------

const familyTaskManager: LandingPageData = {
  slug: "family-task-manager",
  keyword: "Family Task Manager",
  metaTitle: "Family task manager — assign and track tasks | Noa",
  metaDescription:
    "Noa is a family task manager that lets you assign tasks to family members, track progress, and send automatic reminders. Manage it all from WhatsApp.",
  heroHeadline: "The family task manager that actually gets used",
  heroSubheadline:
    "Create tasks, assign them to family members, and track progress — all from one calm, simple app. Or just message Noa on WhatsApp.",
  heroImage: "/images/tasks.png",
  features: [
    {
      iconName: "CheckSquare",
      title: "Assign & track tasks",
      description:
        "Create tasks, assign them to the right person, and see at a glance what's done and what's outstanding.",
    },
    {
      iconName: "Bell",
      title: "Smart reminders",
      description:
        "Noa nudges family members when tasks are overdue, so nothing slips through the cracks.",
    },
    {
      iconName: "MessageCircle",
      title: "Manage tasks from WhatsApp",
      description:
        "Type naturally to add, complete, or reassign tasks. No need to open the app.",
    },
  ],
  contentSections: [
    {
      heading: "Household tasks shouldn't live in your head",
      paragraphs: [
        "Every family has an invisible to-do list. Take out the bins. Book the car service. Buy new school shoes. These tasks float around in someone's head — usually one person's — and that's not fair or efficient.",
        "A family task manager puts everything in the open. When tasks are visible, shared, and assigned, the mental load gets distributed. Noa makes this easy by letting everyone see what needs doing and who's responsible.",
      ],
    },
    {
      heading: "Assign tasks without the nagging",
      paragraphs: [
        "With Noa, you can assign tasks to specific family members with a tap — or by messaging WhatsApp. Say \"remind Jake to take out the bins on Tuesday\" and Noa creates the task, assigns it, and sets the reminder.",
        "There's no awkward chasing. The family task manager sends gentle reminders automatically, so you don't have to be the one nagging. Everyone sees their own task list and can mark things complete as they go.",
      ],
    },
    {
      heading: "Tasks, calendar, and lists in one place",
      paragraphs: [
        "Most family task managers exist in isolation. Noa connects your tasks with a shared family calendar and household lists. Need to buy something for a task? Add it to the shopping list. Task linked to a date? It shows on the calendar.",
        "This joined-up approach means your family task manager isn't just another app — it's the centre of how your household stays organised. And with WhatsApp access, it's always within reach.",
      ],
    },
  ],
  internalLinks: [
    { href: "/shared-task-list", label: "Shared task list" },
    { href: "/assign-tasks-family", label: "Assign tasks to family" },
    { href: "/family-calendar-app", label: "Family calendar app" },
  ],
};

const sharedTaskList: LandingPageData = {
  slug: "shared-task-list",
  keyword: "Shared Task List",
  metaTitle: "Shared task list for families — assign and track | Noa",
  metaDescription:
    "Keep your family on the same page with Noa's shared task list. Assign tasks to family members, set automatic reminders, and manage everything via WhatsApp.",
  heroHeadline: "A shared task list the whole family can rely on",
  heroSubheadline:
    "Stop losing track of who's doing what. Noa's shared task list keeps everyone aligned — and you can manage it all from WhatsApp.",
  heroImage: "/images/tasks.png",
  features: [
    {
      iconName: "Share2",
      title: "Truly shared",
      description:
        "Everyone in the household sees the same list. Changes sync instantly so you're never out of date.",
    },
    {
      iconName: "Users",
      title: "Task assignment",
      description:
        "Assign tasks to specific family members so responsibilities are clear and nothing gets missed.",
    },
    {
      iconName: "MessageCircle",
      title: "WhatsApp access",
      description:
        "Add or complete tasks by messaging Noa on WhatsApp. It's as easy as sending a text.",
    },
  ],
  contentSections: [
    {
      heading: "Why a shared task list matters",
      paragraphs: [
        "When tasks only exist on one person's phone — or worse, in their head — things get forgotten. A shared task list means everyone can see what needs doing, who's handling it, and what's already done.",
        "Noa's shared task list updates in real time. Add a task on your phone, and your partner sees it immediately. Check something off, and it's marked complete for everyone. No syncing, no delays.",
      ],
    },
    {
      heading: "From chores to errands — all in one list",
      paragraphs: [
        "A shared task list isn't just for chores. Use it for errands, home improvement projects, holiday planning, or anything your family needs to coordinate. Noa lets you create multiple lists and assign tasks within each one.",
        "And because Noa works through WhatsApp, adding to your shared task list is as simple as messaging \"add fix the garden gate to the house list.\" No switching apps, no friction.",
      ],
    },
    {
      heading: "Connected to your calendar and shopping lists",
      paragraphs: [
        "Noa isn't just a shared task list — it's a complete family organiser. Tasks connect naturally with your shared calendar and household lists. Date-sensitive tasks show up on the calendar. Items you need to buy appear on the shopping list.",
        "Everything works together, and everything is accessible from WhatsApp. It's the simplest way to keep your household running smoothly.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-task-manager", label: "Family task manager" },
    { href: "/assign-tasks-family", label: "Assign tasks to family" },
    { href: "/shared-list-app", label: "Shared list app" },
  ],
};

const assignTasksFamily: LandingPageData = {
  slug: "assign-tasks-family",
  keyword: "Assign Tasks to Family Members",
  metaTitle: "Assign tasks to family members — automatic reminders | Noa",
  metaDescription:
    "Assign tasks to family members with Noa and let the app handle reminders. Track progress, see what's done, and manage everything via WhatsApp.",
  heroHeadline: "Assign tasks to family members, effortlessly",
  heroSubheadline:
    "Create a task, pick a family member, and let Noa handle the reminders. You can even assign tasks through WhatsApp.",
  heroImage: "/images/tasks.png",
  features: [
    {
      iconName: "Users",
      title: "One tap assignment",
      description:
        "Assign any task to a family member with a single tap. They'll see it on their own task list immediately.",
    },
    {
      iconName: "Bell",
      title: "Automatic reminders",
      description:
        "Noa sends gentle nudges when tasks are due, so you don't have to chase anyone.",
    },
    {
      iconName: "MessageCircle",
      title: "Assign via WhatsApp",
      description:
        "Message Noa something like \"remind Mum to book the dentist\" and the task is created and assigned.",
    },
  ],
  contentSections: [
    {
      heading: "Distribute the mental load",
      paragraphs: [
        "In most families, one person carries the mental load — remembering everything that needs doing and making sure it happens. Being able to assign tasks to family members changes this dynamic completely.",
        "With Noa, you can create a task, assign it to the right person, and move on. They'll get a reminder, and you can see when it's done. It's a simple shift, but it makes household management genuinely shared.",
      ],
    },
    {
      heading: "Natural language, no friction",
      paragraphs: [
        "You don't need to open an app and navigate menus to assign tasks to family members. Just message Noa on WhatsApp: \"ask Dad to pick up the dry cleaning tomorrow.\" Noa creates the task, assigns it, and sets the date.",
        "This natural language approach means task assignment happens in the flow of life — while you're at work, on the school run, or cooking dinner. There's no overhead and no friction.",
      ],
    },
    {
      heading: "See everything at a glance",
      paragraphs: [
        "Noa gives you a clear view of all assigned tasks across the household. Filter by person to see who's got what, or view the full list to make sure nothing's been missed. Completed tasks are checked off in real time.",
        "Combined with a shared family calendar and household lists, Noa is a complete organiser. Assign tasks to family members, track your shared schedule, and manage your shopping list — all from one beautifully designed app.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-task-manager", label: "Family task manager" },
    { href: "/shared-task-list", label: "Shared task list" },
    { href: "/family-list-app", label: "Family list app" },
  ],
};

// ---------------------------------------------------------------------------
// LIST PAGES
// ---------------------------------------------------------------------------

const familyShoppingList: LandingPageData = {
  slug: "family-shopping-list",
  keyword: "Family Shopping List",
  metaTitle: "Family shopping list app — shared and synced | Noa",
  metaDescription:
    "Noa's family shopping list syncs instantly for everyone. Add items via WhatsApp, check them off in the shop, and never forget what you need.",
  heroHeadline: "The family shopping list that stays up to date",
  heroSubheadline:
    "A shopping list the whole family can add to — from the app or WhatsApp. Real-time sync means everyone sees the latest version.",
  heroImage: "/images/lists.png",
  features: [
    {
      iconName: "ListChecks",
      title: "Real-time sync",
      description:
        "Add an item on your phone and your partner sees it instantly. Check it off in the shop and it's gone for everyone.",
    },
    {
      iconName: "Users",
      title: "Everyone can contribute",
      description:
        "The whole household can add items to the family shopping list. No more forgetting what was asked for.",
    },
    {
      iconName: "MessageCircle",
      title: "Add items via WhatsApp",
      description:
        "Message Noa \"add oat milk and bananas to the shopping list\" and they're added instantly.",
    },
  ],
  contentSections: [
    {
      heading: "No more scraps of paper",
      paragraphs: [
        "Every family has tried the paper list on the fridge. It works until you forget it at home, or someone adds something after you've already left. A family shopping list app solves this by keeping the list on everyone's phone, updated in real time.",
        "Noa's family shopping list syncs instantly. Add items from anywhere — the kitchen, the office, or the school car park — and everyone sees the latest version. Check items off as you shop, and they disappear for the whole household.",
      ],
    },
    {
      heading: "Add items without opening the app",
      paragraphs: [
        "The easiest way to add to your family shopping list is through WhatsApp. Message Noa with \"we need bread, eggs, and washing up liquid\" and the items appear on the list immediately. It's faster than opening any app.",
        "This means adding to the family shopping list happens naturally, in the moment you think of something. No switching apps, no typing into small fields. Just a quick message.",
      ],
    },
    {
      heading: "More than a shopping list",
      paragraphs: [
        "Noa isn't just a family shopping list — it's a complete family organiser. Create lists for anything: packing lists, gift ideas, meal plans, or household supplies. Each list syncs instantly and is accessible from WhatsApp.",
        "Combined with a shared calendar and task management, Noa helps your whole household stay on top of everything. One app. One place. Your life, organised.",
      ],
    },
  ],
  internalLinks: [
    { href: "/shared-list-app", label: "Shared list app" },
    { href: "/family-list-app", label: "Family list app" },
    { href: "/family-task-manager", label: "Family task manager" },
  ],
};

const sharedListApp: LandingPageData = {
  slug: "shared-list-app",
  keyword: "Shared List App",
  metaTitle: "Shared list app for families — real-time sync | Noa",
  metaDescription:
    "Noa is the shared list app for families. Create shopping lists, packing lists, and more — all synced in real time and manageable from WhatsApp.",
  heroHeadline: "The shared list app for families who want less chaos",
  heroSubheadline:
    "Shopping lists, to-do lists, packing lists — all shared, synced, and accessible from WhatsApp. Noa makes household lists effortless.",
  heroImage: "/images/lists.png",
  features: [
    {
      iconName: "Share2",
      title: "Instant sharing",
      description:
        "Every list is shared with your household automatically. No invites, no links — it just works.",
    },
    {
      iconName: "ListChecks",
      title: "Multiple list types",
      description:
        "Shopping, packing, gift ideas, household chores — create as many lists as you need.",
    },
    {
      iconName: "MessageCircle",
      title: "Manage via WhatsApp",
      description:
        "Add items, check things off, or create new lists — all by messaging Noa on WhatsApp.",
    },
  ],
  contentSections: [
    {
      heading: "Lists that work for the whole family",
      paragraphs: [
        "Most list apps are built for individuals. They work fine until you need to share a shopping list, coordinate a packing list, or keep a running list of household repairs. A shared list app changes everything by keeping the whole family on the same page.",
        "Noa is a shared list app designed for families. Every list syncs in real time, so when someone adds \"birthday candles\" to the shopping list, everyone sees it immediately. No screenshots. No forwarded messages. Just one source of truth.",
      ],
    },
    {
      heading: "WhatsApp makes it effortless",
      paragraphs: [
        "The biggest barrier to using a shared list app is remembering to open it. Noa removes that barrier entirely by working through WhatsApp. Think of something? Message Noa. Need to check the list? Ask Noa.",
        "This means your shared lists stay up to date without effort. Items get added in the moment you think of them, not when you remember to open an app later. It's the most natural way to manage household lists.",
      ],
    },
    {
      heading: "Part of a bigger picture",
      paragraphs: [
        "Noa isn't just a shared list app — it also includes a family calendar and task manager. Everything connects. A task can link to a list. A calendar event can prompt a packing list. Your household runs more smoothly when everything lives in one place.",
        "Clean design, real-time sync, and WhatsApp access make Noa the shared list app families actually enjoy using.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-shopping-list", label: "Family shopping list" },
    { href: "/family-list-app", label: "Family list app" },
    { href: "/shared-task-list", label: "Shared task list" },
  ],
};

const familyListApp: LandingPageData = {
  slug: "family-list-app",
  keyword: "Family List App",
  metaTitle: "Family list app — shopping, packing and more | Noa",
  metaDescription:
    "Noa is the family list app that keeps your household organised. Shared shopping lists, packing lists, and to-do lists — all synced via WhatsApp.",
  heroHeadline: "A family list app for everything you need to track",
  heroSubheadline:
    "From weekly shopping to holiday packing, Noa keeps your family's lists organised, shared, and always up to date.",
  heroImage: "/images/lists.png",
  features: [
    {
      iconName: "ListChecks",
      title: "Lists for everything",
      description:
        "Shopping lists, to-do lists, wish lists, packing lists — create and share as many as your family needs.",
    },
    {
      iconName: "RefreshCw",
      title: "Always in sync",
      description:
        "Changes appear instantly for everyone. Add, edit, or check off items and the whole family sees it in real time.",
    },
    {
      iconName: "MessageCircle",
      title: "WhatsApp integration",
      description:
        "Add items to any list by messaging Noa on WhatsApp. No app switching required.",
    },
  ],
  contentSections: [
    {
      heading: "One app for all your family's lists",
      paragraphs: [
        "Families rely on lists. The weekly shop. Things to pack for holiday. Christmas gift ideas. Home repairs to get to eventually. But when these lists live in different places — or just in someone's memory — things get lost.",
        "A family list app puts everything in one place, shared with everyone who needs it. Noa lets you create unlimited lists, share them with your household, and access them from your phone or WhatsApp.",
      ],
    },
    {
      heading: "Add items the moment you think of them",
      paragraphs: [
        "The best time to add something to a list is the moment it crosses your mind. With Noa's WhatsApp integration, you can do exactly that. Message \"add sunscreen to the holiday packing list\" and it's done.",
        "This means your family list app is always current. No waiting until you get home. No forgetting by the time you open the app. Just a quick message and the item is saved and shared.",
      ],
    },
    {
      heading: "Lists, calendar, and tasks — all connected",
      paragraphs: [
        "Noa is more than a family list app. It combines lists with a shared calendar and task manager. Need to buy supplies for a weekend project? The task, the calendar event, and the shopping list all live in the same app.",
        "Families deserve tools that work the way they do — fluid, connected, and practical. Noa is the family list app that fits into your life without adding complexity.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-shopping-list", label: "Family shopping list" },
    { href: "/shared-list-app", label: "Shared list app" },
    { href: "/family-calendar-app", label: "Family calendar app" },
  ],
};

// ---------------------------------------------------------------------------
// COMPETITOR ALTERNATIVE PAGES
// ---------------------------------------------------------------------------

const coziAlternative: LandingPageData = {
  slug: "cozi-alternative",
  keyword: "Cozi Alternative",
  metaTitle: "Best Cozi alternative for modern family organisation | Noa",
  metaDescription:
    "Looking for a Cozi alternative? Noa combines a shared family calendar, task manager, and lists with WhatsApp integration — all in one modern app.",
  heroHeadline: "Looking for a Cozi alternative? Meet Noa.",
  heroSubheadline:
    "Noa is a modern family organiser that combines a shared calendar, task manager, and lists — with the simplicity of WhatsApp.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "Calendar",
      title: "Calendar + tasks + lists",
      description:
        "Unlike Cozi, Noa brings your calendar, tasks, and shared lists together in one beautifully designed app.",
    },
    {
      iconName: "MessageCircle",
      title: "WhatsApp built in",
      description:
        "No other family app lets you manage everything from WhatsApp. Add events, tasks, and list items by sending a message.",
    },
    {
      iconName: "Smartphone",
      title: "Designed for modern families",
      description:
        "A calm, clean interface that's a joy to use. No ads, no clutter — just the tools your family needs.",
    },
  ],
  contentSections: [
    {
      heading: "Why families are looking for a Cozi alternative",
      paragraphs: [
        "Cozi has been around for years and many families have relied on it. But as family life and technology have evolved, some households are looking for a Cozi alternative that feels more modern, more connected, and more thoughtful in its design.",
        "Common frustrations include an outdated interface, limited integration with other tools, and the lack of natural-language input. If you've been searching for a Cozi alternative, Noa might be exactly what you need.",
      ],
    },
    {
      heading: "What makes Noa different",
      paragraphs: [
        "Noa takes the core idea behind Cozi — organising family life — and rethinks it for today. The app combines a shared calendar, task manager, and household lists into one clean, modern experience.",
        "The standout feature is WhatsApp integration. Instead of opening an app, you can message Noa to add calendar events, create tasks, or update your shopping list. It's the fastest, most natural way to manage a busy household.",
      ],
    },
    {
      heading: "A fresh start for family organisation",
      paragraphs: [
        "Switching from Cozi doesn't mean starting from scratch. Noa connects to Apple and Google Calendar, so your events carry over. And because Noa syncs in real time, the whole family can be up and running in minutes.",
        "If you're ready for a Cozi alternative that's beautiful, practical, and built for how modern families actually communicate, give Noa a try. Your life, organised.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-calendar-app", label: "Family calendar app" },
    { href: "/family-task-manager", label: "Family task manager" },
    { href: "/family-shopping-list", label: "Family shopping list" },
  ],
};

const googleCalendarAlternative: LandingPageData = {
  slug: "google-calendar-alternative",
  keyword: "Google Calendar Alternative",
  metaTitle: "Google Calendar alternative for family scheduling | Noa",
  metaDescription:
    "Noa is a Google Calendar alternative built for families. Shared calendar, task management, household lists, and WhatsApp integration — all in one app.",
  heroHeadline: "A Google Calendar alternative built for families",
  heroSubheadline:
    "Google Calendar is great for work. Noa is built for home — combining a shared calendar, tasks, and lists with WhatsApp integration.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "Users",
      title: "Built for families",
      description:
        "Google Calendar is designed for professionals. Noa is purpose-built for households — shared schedules, assigned tasks, and family lists.",
    },
    {
      iconName: "ListChecks",
      title: "More than a calendar",
      description:
        "Tasks, shopping lists, reminders, and a shared calendar — all in one place, all synced in real time.",
    },
    {
      iconName: "MessageCircle",
      title: "WhatsApp integration",
      description:
        "Add events, create tasks, or manage lists by messaging Noa on WhatsApp. No app needed.",
    },
  ],
  contentSections: [
    {
      heading: "Why families outgrow Google Calendar",
      paragraphs: [
        "Google Calendar works well for scheduling meetings and blocking time at work. But for family life — coordinating pick-ups, tracking chores, managing shopping lists — it falls short. It wasn't designed for households, and it shows.",
        "If you're looking for a Google Calendar alternative that understands family life, Noa combines everything you need into one app. Shared schedules, assigned tasks, household lists, and the ability to manage it all via WhatsApp.",
      ],
    },
    {
      heading: "Everything in one place",
      paragraphs: [
        "With Google Calendar, your tasks live in one app, your lists in another, and your calendar in a third. A Google Calendar alternative like Noa brings everything together. See your events, tasks, and lists in a single, beautifully designed interface.",
        "And because Noa syncs with Google Calendar and Apple Calendar, you don't lose your existing events. Your work calendar stays connected while Noa handles the family side of things.",
      ],
    },
    {
      heading: "Manage your family from WhatsApp",
      paragraphs: [
        "The biggest advantage of Noa as a Google Calendar alternative is WhatsApp integration. Message Noa to add events, create tasks, or update lists — all in plain English. It's the fastest way to manage a busy household.",
        "No navigating menus. No filling in forms. Just message what you need, and Noa takes care of the rest. It's the Google Calendar alternative that fits into your life, not the other way around.",
      ],
    },
  ],
  internalLinks: [
    { href: "/shared-calendar-app", label: "Shared calendar app" },
    { href: "/family-task-manager", label: "Family task manager" },
    { href: "/shared-list-app", label: "Shared list app" },
  ],
};

// ---------------------------------------------------------------------------
// FEATURE PAGES
// ---------------------------------------------------------------------------

const featureSharedFamilyCalendar: LandingPageData = {
  slug: "features/shared-family-calendar",
  keyword: "Shared Family Calendar",
  metaTitle: "Shared family calendar — free on iPhone | Noa",
  metaDescription:
    "School, work and clubs in one colour-coded view. Syncs with the Apple and Google calendars you already use; add events from WhatsApp. Free to download.",
  heroHeadline: "Shared family calendar for busy households",
  heroSubheadline:
    "See every family member's schedule in one calm, colour-coded calendar. Sync your existing calendars, add events by messaging WhatsApp, and keep the whole household in the loop.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "Calendar",
      title: "Colour-coded family view",
      description:
        "Each person gets their own colour. Glance at the week and instantly see who's busy, who's free, and where there's a clash.",
    },
    {
      iconName: "RefreshCw",
      title: "Sync existing calendars",
      description:
        "Connect Apple Calendar and Google Calendar so work diaries, school schedules, and social plans all appear automatically.",
    },
    {
      iconName: "MessageCircle",
      title: "Add events from WhatsApp",
      description:
        "Message Noa something like \"dentist for Lily on Thursday at 3\" and the event is created and shared instantly.",
    },
  ],
  contentSections: [
    {
      heading: "One calendar the whole family can see",
      paragraphs: [
        "Most households juggle separate calendars on separate phones. One parent knows about the school play, the other has the dentist appointment, and no one is quite sure who's picking up the kids on Friday. A shared family calendar fixes this by putting every event in one place, visible to everyone.",
        "Noa's shared family calendar is designed for exactly this. Events are colour-coded by family member, so you can scan the week at a glance. Connect your existing Apple or Google calendars and everything syncs automatically — no manual copying, no duplication.",
      ],
    },
    {
      heading: "Add events without opening the app",
      paragraphs: [
        "The fastest way to add to your shared family calendar is through WhatsApp. Message Noa with something like \"football practice every Tuesday at 4pm\" and the recurring event is created instantly. Move appointments, check your schedule for the week, or ask what's coming up tomorrow — all from a chat.",
        "This natural language approach means managing your calendar happens in the flow of life. While cooking dinner, on the school run, or during a work break — just send a message and it's done.",
      ],
    },
    {
      heading: "Connected to tasks and lists",
      paragraphs: [
        "Noa goes beyond a standalone calendar. Your shared family calendar connects with task lists and shopping lists, so \"buy a birthday present\" lives alongside the party on Saturday. Smart reminders make sure nothing sneaks up on you, and everyone stays aligned without a single nagging text.",
        "This joined-up approach means your calendar, tasks, and lists all live in one app instead of three. Whether you prefer tapping through the app or sending a quick WhatsApp message, your whole household stays on the same page.",
      ],
    },
  ],
  internalLinks: [
    { href: "/features/tasks", label: "Family task management" },
    { href: "/features/shared-lists", label: "Shared family lists" },
    { href: "/features/whatsapp-assistant", label: "WhatsApp assistant" },
    { href: "/family-calendar-app", label: "Family calendar app" },
  ],
};

const featureTasks: LandingPageData = {
  slug: "features/tasks",
  keyword: "Family Task Management",
  metaTitle: "Family task manager — assign it, Noa chases it | Noa",
  metaDescription:
    "Give every job an owner. Noa reminds whoever's turn it is — by push or WhatsApp — so you don't have to nag. Free on iPhone; Household free for 7 days.",
  heroHeadline: "Family task management made simple",
  heroSubheadline:
    "Create tasks, assign them to the right person, and let Noa handle the reminders. Manage everything from the app or just message WhatsApp.",
  heroImage: "/images/tasks.png",
  features: [
    {
      iconName: "CheckSquare",
      title: "Assign tasks to anyone",
      description:
        "Tap to assign a task to a specific family member. They see it on their list immediately and get a reminder when it's due.",
    },
    {
      iconName: "Bell",
      title: "Automatic reminders",
      description:
        "Noa nudges family members when tasks are due or overdue. No more nagging — the app does it for you.",
    },
    {
      iconName: "MessageCircle",
      title: "Manage tasks from WhatsApp",
      description:
        "Say \"remind Jake to take out the bins on Tuesday\" and Noa creates the task, assigns it, and sets the reminder.",
    },
  ],
  contentSections: [
    {
      heading: "Get the invisible to-do list out of your head",
      paragraphs: [
        "Every household has an invisible to-do list. Book the car service. Order school uniform. Cancel that subscription. These tasks float around in someone's head — usually one parent's — and that's neither fair nor sustainable. Family task management with Noa puts everything in the open.",
        "When tasks are visible, shared, and assigned, the mental load gets distributed. Everyone can see what needs doing, who's responsible, and what's already been ticked off. It's a small change that makes a big difference to how your household runs.",
      ],
    },
    {
      heading: "Assign tasks without the awkward chase",
      paragraphs: [
        "With Noa you can assign tasks to specific family members with a tap — or by messaging WhatsApp. The app sends gentle reminders automatically so you don't have to be the one chasing. Everyone sees their own task list, marks things complete as they go, and the whole family stays on track.",
        "You can also create tasks through natural language. Message Noa \"ask Mum to book the dentist this week\" and the task is created, assigned, and dated — all from a single message.",
      ],
    },
    {
      heading: "Tasks that connect to your calendar and lists",
      paragraphs: [
        "Noa's task management doesn't exist in isolation. Tasks with dates appear on your shared family calendar. Tasks that require buying something link naturally to your shopping list. Everything works together in one calm, connected app — and it's all accessible from WhatsApp.",
        "Instead of switching between a calendar app, a to-do app, and a shopping list app, your family gets one place for everything. Fewer apps, less friction, and a household that actually runs smoothly.",
      ],
    },
  ],
  internalLinks: [
    { href: "/features/shared-family-calendar", label: "Shared family calendar" },
    { href: "/features/shared-lists", label: "Shared family lists" },
    { href: "/features/whatsapp-assistant", label: "WhatsApp assistant" },
    { href: "/family-task-manager", label: "Family task manager" },
  ],
};

const featureSharedLists: LandingPageData = {
  slug: "features/shared-lists",
  keyword: "Shared Family Lists",
  metaTitle: "Shared shopping & family lists that sync live | Noa",
  metaDescription:
    "One shopping list every phone can tick off — plus packing lists and to-dos. Add items from WhatsApp mid-aisle. Free on iPhone, shared with the household.",
  heroHeadline: "Shared lists your whole family can edit",
  heroSubheadline:
    "Shopping lists, packing lists, gift ideas — all shared, synced in real time, and accessible from WhatsApp. No more forgotten items or duplicate purchases.",
  heroImage: "/images/lists.png",
  features: [
    {
      iconName: "ListChecks",
      title: "Lists for everything",
      description:
        "Weekly shopping, holiday packing, Christmas gifts, household repairs — create as many shared lists as your family needs.",
    },
    {
      iconName: "RefreshCw",
      title: "Real-time sync",
      description:
        "Add an item on your phone and your partner sees it instantly. Check it off in the shop and it's gone for everyone.",
    },
    {
      iconName: "MessageCircle",
      title: "Add items via WhatsApp",
      description:
        "Message Noa \"add oat milk and bananas to the shopping list\" and the items appear on the shared list immediately.",
    },
  ],
  contentSections: [
    {
      heading: "One source of truth for every list",
      paragraphs: [
        "Paper lists get left at home. Notes apps don't sync between partners. Group chats get buried. A shared family list solves all of this by giving everyone access to the same list, updated in real time. When someone adds \"birthday candles\" to the shopping list, the whole household sees it immediately.",
        "Noa lets you create unlimited shared lists — shopping, packing, gift ideas, home repairs, meal plans — and every list syncs instantly across the family. No screenshots, no forwarded messages, just one reliable source of truth.",
      ],
    },
    {
      heading: "Add items the moment you think of them",
      paragraphs: [
        "The best time to add something to a list is the moment it crosses your mind. With Noa's WhatsApp integration, you can do exactly that. Message \"add sunscreen to the holiday packing list\" and it's done. No app to open, no fields to fill in — just a quick message.",
        "This means your shared lists stay genuinely up to date. Items get captured in the moment, not when you remember to open an app later. It's the most natural way to keep household lists current.",
      ],
    },
    {
      heading: "Part of a bigger picture",
      paragraphs: [
        "Noa's shared lists connect naturally with your family calendar and task manager. A task can link to a shopping list. A calendar event can prompt a packing list. Your household runs more smoothly when everything lives in one beautifully designed app.",
        "And because everything is accessible from WhatsApp, your family doesn't need to learn a new app or change their habits. Just send a message and Noa takes care of the rest — whether it's adding to a list, creating a task, or checking the schedule.",
      ],
    },
  ],
  internalLinks: [
    { href: "/features/shared-family-calendar", label: "Shared family calendar" },
    { href: "/features/tasks", label: "Family task management" },
    { href: "/features/whatsapp-assistant", label: "WhatsApp assistant" },
    { href: "/family-shopping-list", label: "Family shopping list" },
  ],
};

const featureWhatsAppAssistant: LandingPageData = {
  slug: "features/whatsapp-assistant",
  keyword: "WhatsApp Family Assistant",
  metaTitle: "Run your family calendar from WhatsApp | Noa",
  metaDescription:
    "Message Noa like a person — 'swimming Thursday 5pm' — and it's on the family calendar. Tasks, shopping lists and daily briefings too. Free on iPhone.",
  heroHeadline: "Manage your family life from WhatsApp",
  heroSubheadline:
    "Add calendar events, create tasks, and update shopping lists just by sending a message. Noa's WhatsApp assistant understands natural language and acts instantly.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "MessageCircle",
      title: "Natural language input",
      description:
        "Type the way you normally would — \"swimming moved to 5pm Thursday\" — and Noa understands and updates your calendar.",
    },
    {
      iconName: "Zap",
      title: "Instant actions",
      description:
        "Events are created, tasks assigned, and list items added the moment you send the message. No confirmation screens or extra steps.",
    },
    {
      iconName: "Users",
      title: "Works for the whole family",
      description:
        "Every family member can message Noa directly. Changes sync across the household in real time.",
    },
  ],
  contentSections: [
    {
      heading: "Your family organiser, inside WhatsApp",
      paragraphs: [
        "Opening an app, navigating menus, and filling in form fields takes time you don't have. Noa's WhatsApp assistant lets you skip all of that. Send a message like \"dentist for Lily on Thursday at 3\" and the event appears on your shared family calendar instantly. Ask \"what's happening this weekend?\" and Noa replies with your schedule.",
        "It works for tasks and lists too. \"Remind Dad to book the car service\" creates an assigned task with a reminder. \"Add bread and milk to the shopping list\" updates your shared list in real time. Everything you can do in the app, you can do from WhatsApp.",
      ],
    },
    {
      heading: "No learning curve, no new habits",
      paragraphs: [
        "The reason Noa works through WhatsApp is simple: your family already uses it. There's no new app to learn, no passwords to remember, and no notifications to configure. You message Noa the same way you'd message a partner or friend — in plain, natural language.",
        "This is especially powerful for family members who don't love apps. A grandparent, a teenager, or a partner who never opens the calendar can all contribute just by sending a text. Everyone stays in the loop without changing their habits.",
      ],
    },
    {
      heading: "Connected to everything in Noa",
      paragraphs: [
        "The WhatsApp assistant isn't a separate product — it's a window into your full Noa setup. Calendar events, task assignments, list updates, and reminders all flow through the same system. Whether you use the app or WhatsApp, your family sees the same information, always in sync.",
        "This means there's no trade-off between convenience and completeness. The WhatsApp assistant gives you full access to your shared family calendar, task lists, and shopping lists — all from a chat you already check every day.",
      ],
    },
  ],
  internalLinks: [
    { href: "/features/shared-family-calendar", label: "Shared family calendar" },
    { href: "/features/tasks", label: "Family task management" },
    { href: "/features/shared-lists", label: "Shared family lists" },
    { href: "/shared-calendar-app", label: "Shared calendar app" },
  ],
};

const timetreeAlternative: LandingPageData = {
  slug: "timetree-alternative",
  keyword: "TimeTree Alternative",
  metaTitle: "TimeTree alternative with tasks, lists & WhatsApp | Noa",
  metaDescription:
    "Love TimeTree's shared calendar but juggling separate apps for tasks and shopping? Noa puts calendar, tasks and lists in one place. Free on iPhone.",
  heroHeadline: "Liked TimeTree? Noa finishes the job.",
  heroSubheadline:
    "TimeTree nailed the shared calendar. Noa adds the rest of family life — tasks, shopping lists, reminders and a WhatsApp assistant — in one calm app.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "CheckSquare",
      title: "More than a calendar",
      description:
        "TimeTree stops at events. Noa adds shared tasks with assignment, shopping lists, and reminders — the other half of running a household.",
    },
    {
      iconName: "MessageCircle",
      title: "Add things from WhatsApp",
      description:
        "No keeping-another-app-open. Message Noa on WhatsApp and events, tasks and list items file themselves.",
    },
    {
      iconName: "Shield",
      title: "Calm, ad-free design",
      description:
        "No banner ads in your family's schedule. A quiet, warm interface designed to be glanced at, not lived in.",
    },
  ],
  contentSections: [
    {
      heading: "Why families outgrow TimeTree",
      paragraphs: [
        "TimeTree does one thing genuinely well: a shared calendar that several people can see and edit. For plenty of families that's where it starts and ends — and if all you need is events, it's a fine choice.",
        "The trouble is that family life isn't only events. The dentist appointment sits in TimeTree, but the 'book the dentist' task lives in someone's head, the shopping list lives in a notes app, and the 'whose turn is the school run' conversation lives in WhatsApp. Four systems, one household, and the gaps between them are where things get dropped.",
      ],
    },
    {
      heading: "What Noa does differently as a TimeTree alternative",
      paragraphs: [
        "Noa keeps the shared calendar — connected to the Apple and Google calendars you already use, so nothing moves — and adds shared tasks, shopping lists and reminders in the same app. Assign the birthday-present buying to a named person. Tick off the big shop from either phone.",
        "Then there's the part no calendar app does: you can message Noa on WhatsApp. 'Add sports day to the calendar, 14 July' or 'put batteries on the shopping list' — sent from the school car park, filed correctly, visible to the whole household.",
      ],
    },
    {
      heading: "Switching takes minutes, not an afternoon",
      paragraphs: [
        "Because Noa connects to Apple and Google Calendar rather than replacing them, there's no export/import dance. Download Noa free, connect your calendars, invite your household — up to six people share one plan, free for the first 7 days.",
        "Keep TimeTree installed while you try it if you like. Most families find that once tasks, lists and the calendar live in one place, the second app quietly stops being opened.",
      ],
    },
  ],
  internalLinks: [
    { href: "/shared-family-calendar", label: "Shared family calendar" },
    { href: "/family-task-manager", label: "Family task manager" },
    { href: "/cozi-alternative", label: "Cozi alternative" },
  ],
};

const skylightCalendarAlternative: LandingPageData = {
  slug: "skylight-calendar-alternative",
  keyword: "Skylight Calendar Alternative",
  metaTitle: "Skylight Calendar alternative — no wall screen needed | Noa",
  metaDescription:
    "Get the family command centre without the wall-mounted hardware. Noa puts shared calendars, chores and lists in every pocket. Free on iPhone.",
  heroHeadline: "The family display that's already in your pocket.",
  heroSubheadline:
    "Skylight puts your family's schedule on a screen in the kitchen. Noa puts it on the phones you already own — plus tasks, lists and WhatsApp — with nothing to buy.",
  heroImage: "/images/calendar.png",
  features: [
    {
      iconName: "Smartphone",
      title: "No hardware to buy",
      description:
        "No wall screen, no power lead, no deciding which room the family hub lives in. Everyone's phone is the display.",
    },
    {
      iconName: "Bell",
      title: "Works when you're out",
      description:
        "A kitchen screen can't remind you about pick-up while you're at work. Noa's reminders and widgets travel with each person.",
    },
    {
      iconName: "ListChecks",
      title: "Chores and lists included",
      description:
        "Shared task assignment and live shopping lists, synced to every phone in the household — no premium hardware tier.",
    },
  ],
  contentSections: [
    {
      heading: "The wall calendar, reconsidered",
      paragraphs: [
        "Skylight Calendar is a lovely idea: an always-on screen in the kitchen showing the family's week, chore charts and meal plans. It's the paper wall planner, upgraded. If your household genuinely gathers in one room and glances at one spot, it can work well.",
        "But it inherits the wall planner's oldest flaw: it only works when you're standing in front of it. The schedule conflict surfaces at work; the shopping list matters in the supermarket; the 'leave now for pick-up' nudge is needed in the car. A fixed screen — a three-figure purchase before any optional subscription — can't follow you out of the door.",
      ],
    },
    {
      heading: "Noa as a Skylight Calendar alternative",
      paragraphs: [
        "Noa takes the same job — one shared picture of family life — and does it on the phones your household already carries. A shared, colour-coded calendar synced with Apple and Google Calendar. Chores assigned to named people, with nudges that follow them around. Shopping lists that update live from any phone, including in the supermarket queue.",
        "And because Noa has a WhatsApp assistant, adding things doesn't even require opening the app. Message 'swimming moved to 5pm Thursday' and it's on everyone's calendar. A kitchen screen can't do that.",
      ],
    },
    {
      heading: "Try the whole thing free",
      paragraphs: [
        "There's no hardware cost to recover, so trying Noa is genuinely low-stakes: the app is free to download and use, and the Household plan — shared calendars, lists and task assignment for up to six people — is free for the first 7 days. If a screen for the kitchen still appeals afterwards, an old iPad on a stand running Noa does the job nicely.",
      ],
    },
  ],
  internalLinks: [
    { href: "/family-calendar-app", label: "Family calendar app" },
    { href: "/assign-tasks-family", label: "Assign tasks to family" },
    { href: "/family-shopping-list", label: "Family shopping list" },
  ],
};

const familywallAlternative: LandingPageData = {
  slug: "familywall-alternative",
  keyword: "FamilyWall Alternative",
  metaTitle: "FamilyWall alternative — calmer, with WhatsApp | Noa",
  metaDescription:
    "Want family organisation without the busy all-in-one feed? Noa does calendar, tasks and lists with a calm design and WhatsApp capture. Free on iPhone.",
  heroHeadline: "Family organisation, minus the noise.",
  heroSubheadline:
    "FamilyWall bundles everything into a feed. Noa keeps the essentials — calendar, tasks, lists — in a calm app your whole household will actually keep using.",
  heroImage: "/images/lists.png",
  features: [
    {
      iconName: "Zap",
      title: "Essentials, done properly",
      description:
        "Calendar, tasks, shopping lists and reminders — the four things every household runs on, without a social feed bolted on.",
    },
    {
      iconName: "MessageCircle",
      title: "Capture from WhatsApp",
      description:
        "Your family already talks in WhatsApp. Noa turns those messages into events, tasks and list items instead of scroll-away chat.",
    },
    {
      iconName: "Users",
      title: "One plan, six people",
      description:
        "Household covers up to six people — partners, kids, grandparents on the school run — with a 7-day free trial.",
    },
  ],
  contentSections: [
    {
      heading: "When all-in-one becomes all-over-the-place",
      paragraphs: [
        "FamilyWall's pitch is everything in one app: calendar, lists, meal planner, photo feed, location sharing, messaging. For some families that breadth is the appeal. For many, it's why the app gets abandoned — every screen is busy, the essentials share space with features nobody asked for, and the one person who set it up becomes the only person who opens it.",
        "A family organiser only works if the least-enthusiastic person in the household keeps using it. That's a design problem, not a feature-count problem.",
      ],
    },
    {
      heading: "Noa as a FamilyWall alternative",
      paragraphs: [
        "Noa is deliberately narrower and deliberately calmer. A shared calendar that syncs with Apple and Google. Tasks you can assign to a named person, with reminders that chase so you don't have to. Shopping and packing lists that update live on every phone. A morning briefing that tells each person what their day holds. That's it — and that's the point.",
        "For the family members who won't open another app, Noa meets them where they already are: WhatsApp. Grandma can ask 'what's on this weekend?' and get the family schedule back as a message. No app, no login, no onboarding for her at all.",
      ],
    },
    {
      heading: "Built for the phone-reluctant household",
      paragraphs: [
        "Switching costs almost nothing: Noa connects to the calendars you already have, the app is free to download, and Household — everything shared, up to six people — is free for the first 7 days and cancellable in two taps.",
        "If your FamilyWall experiment ended with one parent maintaining a system nobody else looked at, try the opposite approach: fewer features, less friction, and a way in through the chat app your family already checks forty times a day.",
      ],
    },
  ],
  internalLinks: [
    { href: "/cozi-alternative", label: "Cozi alternative" },
    { href: "/shared-list-app", label: "Shared list app" },
    { href: "/features/whatsapp-assistant", label: "WhatsApp assistant" },
  ],
};

// ---------------------------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------------------------

export const landingPages: LandingPageData[] = [
  familyCalendarApp,
  sharedCalendarApp,
  sharedFamilyCalendar,
  familyTaskManager,
  sharedTaskList,
  assignTasksFamily,
  familyShoppingList,
  sharedListApp,
  familyListApp,
  coziAlternative,
  googleCalendarAlternative,
  timetreeAlternative,
  skylightCalendarAlternative,
  familywallAlternative,
];

export const featurePages: LandingPageData[] = [
  featureSharedFamilyCalendar,
  featureTasks,
  featureSharedLists,
  featureWhatsAppAssistant,
];

export function getLandingPageBySlug(
  slug: string,
): LandingPageData | undefined {
  return (
    landingPages.find((p) => p.slug === slug) ??
    featurePages.find((p) => p.slug === slug)
  );
}
