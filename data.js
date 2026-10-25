/* ============================================================
   SITE CONTENT: edit this file to update the portfolio.
   - cases: featured case studies (Hiring manager path)
   - archive: smaller / retired / prototype builds (Curious path)
   - hoursSavedPerMonth: drives the live counter in the header
   ============================================================ */
window.SITE = {
  hoursSavedPerMonth: 570,

  cases: [
    { t: "Client Email Automation Suite", s: "Four one-click tools that turn a flood of client email into tracked, summarized, assigned work.", imp: "~210", built: "Built · self-initiated",
      prob: "A client communications team tracked every incoming email by hand, summarized it for the team, chose next steps, logged them in the project tracker, and replied. All manual, every day.",
      how: ["Email tracking: every incoming email lands in a Google Sheet in the exact format the team needs.", "Synthesizer: one click and Claude writes a structured summary (synthesis, previous emails, next steps), picking next steps from a curated library.", "Next steps to the tracker: the team ticks the steps that apply; one click creates them all as issues.", "Team notification: an approved summary posts to the team channel, but only after a person signs off."],
      flow: ["Inbox", "Sheet log", "Claude summary", "Human picks steps", "Issues created", "Team channel"], human: [3],
      why: "I built it on my own time because nobody had asked, then introduced it to the firm, which adopted it. Each step stays one click with a human in the loop until the AI has earned full trust." },
    { t: "Status on Demand", s: "Live status dashboards and a 20-slide leadership deck, generated in about three minutes.", imp: "~160", built: "Built",
      prob: "The CEO could walk in at any moment and ask how a department was doing. Answering meant hours of pulling numbers and building slides by hand.",
      how: ["Dashboards read the shared data layer: projects by priority, with total, change and remaining work for yesterday, today and tomorrow.", "An action-item view lists every task with owner, deadline, estimate and a direct link.", "A deck generator fills a slide template and works out where to break long lists across slides, building 20–25 slides in about 3 minutes.", "Anticipated questions stay human-written on purpose."],
      flow: ["Tracker data", "Data layer", "Dashboards", "Deck generator", "Leadership"], human: [],
      why: "The hard part isn't filling a template; it's layout. The generator handles pagination itself, so the deck is presentable without touch-ups." },
    { t: "Output Credit Engine", s: "Completed work earns credit automatically and rolls into fair, transparent performance rankings.", imp: "~100", built: "Built",
      prob: "Each person's output (measured in relative value units) was calculated by hand for every team member and department, and it feeds bonus decisions, so it had to be right.",
      how: ["Standard tasks carry a predefined credit label, set once in the project step library.", "When a task is marked done, the data layer picks it up and credits the person responsible.", "Dashboards rank people and departments by today, daily average, 7-day average and quarter to date."],
      flow: ["Task marked done", "Data layer", "Credit awarded", "Rankings", "Bonus review"], human: [],
      why: "It ties three systems together: the step library assigns credit, the data layer detects completion, and the dashboards keep score. Nobody tallies anything." },
    { t: "Project in 20 Seconds", s: "Create a project and every standard task it needs in one click, from a shared playbook.", imp: "~80", built: "Built",
      prob: "Setting up a project meant typing every field into the tracker and re-entering the same standard steps for every project of the same kind.",
      how: ["An intake sheet captures the project in about 20 seconds: name, team, type, owners, priority, dates.", "A step library holds the standard tasks for each project type, each with a definition of done, phase and estimate. Anyone can add to it.", "One click creates the project and all its tasks; the sheet records the link, ID, task count, or a clear error."],
      flow: ["Intake form", "Step library", "Validate", "Project + tasks created", "Link written back"], human: [],
      why: "It turns tribal knowledge into a shared playbook. Fifteen projects and about 150 tasks were created in its first two days." },
    { t: "Automation Helpdesk", s: "A support desk for the automations my team ships, with turnaround measured end to end.", imp: "25+", unit: "tickets handled", built: "Built · first week as lead",
      prob: "Teams across the firm depend on our automations, but there was no single place to report problems and no way to know how fast we fixed them.",
      how: ["Anyone logs an issue in a shared sheet, linked to the right project.", "I approve it; only approved items move forward.", "One click creates the issue in the tracker, with validation and a timestamped push log.", "When the assignee closes it, the completion time syncs back, and a dashboard tracks turnaround and resolution."],
      flow: ["Issue logged", "Lead approves", "Validated push", "Fixed", "Turnaround tracked"], human: [1],
      why: "It was the first thing I built when I took over the team. If you deliver automations to internal customers, you owe them a way to say what's broken." }
  ],

  archive: [
    { t: "Analysis on Autopilot", s: "Paste in the data, pick a few dropdowns, and the full analysis builds itself. My pre-AI origin story.", st: "live", n: "~30 min saved per analysis" },
    { t: "Client deck locker", s: "One click turns a deck into a read-only version: charts become images so the data behind them can't be opened or edited.", st: "live", n: "~7 hrs/mo" },
    { t: "Manuscript feedback toolkit", s: "Pulls every reviewer's comments into a tracker table, and merges them into the master document, in one go.", st: "live", n: "~9 hrs/mo" },
    { t: "Meeting reminders", s: "Posts reminders to the team chat with a link to the calendar event, so nobody misses an interview they're running.", st: "live", n: "" },
    { t: "Linear → Sheets data layer", s: "The shared extraction behind my dashboards: 28 fields, refreshed twice a day and on demand.", st: "live", n: "" },
    { t: "Batch ticket closer", s: "Replaced filling a form for every closed ticket with one pre-filled confirmation per person.", st: "retired", n: "~3.5 hrs/mo" },
    { t: "Excel → slide chart filler", s: "My 2024 attempt to fill slide charts from analysis files. Too brittle to ship, and it taught me why everything I build now has a data layer and validation.", st: "proto", n: "" }
  ]
};
