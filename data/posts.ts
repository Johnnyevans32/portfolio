export interface Post {
  slug: string;
  title: string;
  date: string; // e.g. "2026-07"
  category: string;
  excerpt: string;
  /** Authored HTML for the post body (headings, paragraphs, links). */
  body: string;
}

// Newest first. Add a new object to the top to publish a post.
export const posts: Post[] = [
  {
    slug: "chrome-kept-deleting-itself",
    title: "Chrome kept deleting itself",
    date: "2026-08",
    category: "security",
    excerpt:
      "I thought I had a broken browser. I had two pieces of malware that reinstalled each other, and the browser turned out to be the only innocent part of the story.",
    body: `
<p>For two days Chrome kept dying mid-session and disappearing from my Applications folder. I would reinstall it, work for an hour, and it would be gone again. I filed it in my head as a bad auto-update and kept reinstalling.</p>
<p>It was not a bad auto-update. There were two pieces of malware on my laptop, and Chrome had nothing to do with either of them.</p>
<p>The first real clue was an absence. Chrome was missing from Applications, but there were no Chrome crash reports at all. None. An app that crashes leaves a report. An app whose executable is deleted out from under it just stops existing. That is a different failure, and it meant something was deleting files.</p>
<p>So I went looking for things that delete files, and found two launch agents in my own home directory that had no business being there. They were named <code>com.apple.softwareupdate.agent</code> and <code>com.apple.softwareupdate.background</code>. Apple's real software update daemon lives inside the System volume. These pointed at a binary in <code>~/Library/Caches</code>, ad-hoc signed, no team identifier. Gatekeeper's verdict on it was one word: rejected.</p>
<p>The payload was a 145KB Python script. Its docstring claimed to be a ".NET Runtime Optimization Service" doing cache maintenance, which is a strange thing to find on a Mac. Further down, still in the docstring, was the line <code>[LEGITIMATE DESCRIPTION REMOVED FOR OPSEC]</code>. Somebody forgot to delete their own note to self.</p>
<p>What it actually did: watch the clipboard, and on every single change, grab the contents and take a screenshot. Encrypt both, POST them to a hardcoded IP every thirty seconds over plain HTTP. Its own log file told me it had been running for about twenty-three hours. Every password I had pasted. Every token. Everything that had been on my screen.</p>
<p>I killed it, pulled the launch agents, quarantined the files, and verified it was gone.</p>
<p>Three minutes later it was back.</p>
<p>That is the part worth writing about. There was a second implant I had not found, because it was never on disk. It ran as an inline <code>node -e</code> one-liner: fetch code from a command server, XOR-decode it, <code>eval</code> it. Nothing to grep for, nothing to quarantine, no file to delete. It sat in memory holding a live channel to whoever was on the other end.</p>
<p>The two of them kept each other alive. The Python stealer owned the disk persistence. The Node implant owned nothing but could re-download the stealer on command. Kill the stealer, and the Node process pulls a fresh copy from a file-sharing site and redeploys it. Kill the Node process, and the stealer brings it back. Either one alone regenerates the pair.</p>
<p>Sequential cleanup cannot work against that, no matter how carefully you do it. You have to kill both process trees in the same action and then clear persistence.</p>
<p>I did that. Thirteen minutes later, it beaconed again.</p>
<p>That was the moment the job changed. The second implant is not a process that sits there, it is a beacon: it wakes up, opens a connection, does whatever it is told, and exits. Point-in-time checks show a clean machine because most of the time the machine is clean. It spawns already orphaned, so by the time you see it, the thing that launched it is gone.</p>
<p>I went through every persistence mechanism macOS has. All four launchd directories. The full launchd session dump, in case a job was still loaded after its file was deleted. User and system shell configs. Cron. Login items. Git hooks. Python startup hooks. Editor extensions. Chrome native messaging hosts and extensions. Every global npm package under both Homebrew and nvm. Every package.json on the disk with an install hook that invokes <code>node -e</code> or <code>curl</code> or <code>eval</code>. All clean.</p>
<p>Which is its own kind of answer. When every standard mechanism is clean and the thing still comes back, the mechanism is not standard, and you are not going to grep your way to it.</p>
<p>Chrome, meanwhile, was genuinely innocent. Neither implant contained a single reference to Chrome, browser profiles, or cookies. The browser was being eaten by two generations of Google's own updater installed at the same time, fighting each other, with the "current" symlink pointing at the older one. Chrome updates by swapping the entire app bundle. The swap was failing after the old bundle came off. Two unrelated problems, and the noisy one was the harmless one.</p>
<p>On the AI part, since people keep asking. I did this with Claude Code driving the investigation, and the honest split is this: it was dramatically better than me at breadth and speed, and it was wrong about at least one thing.</p>
<p>What it was good at was the tedious middle. Reading half a megabyte of updater logs and pulling out the four lines that mattered. Walking a process tree to its parent before the parent exited. Diffing what a legitimate Apple daemon path looks like against what was actually there. When the malware came back during cleanup, it caught the reinfection live, captured the full parent chain and the open socket, and had the second implant's command line saved before I had finished reading the first alert. I would have gotten there eventually. Not in fifteen minutes.</p>
<p>What it got wrong: a teammate sent me a scanner script hosted under a GitHub org called OpenSourceMalware. Claude told me not to run it, on the reasonable-sounding grounds that the org name was alarming and blind <code>curl</code>-and-execute is how I probably got infected in the first place. Then it actually read the script and reversed itself. The thing is entirely read-only, just greps and a <code>git reflog</code> call, completely safe, and its signature list turned out to be the most useful lead of the whole day. The malware family it hunts uses a <code>global['key']='victim-id'</code> prologue followed by obfuscated JavaScript, which is exactly the shape of what was running on my machine. Good instinct, bad first call, corrected once it looked instead of guessed. Make it look.</p>
<p>So this post does not have the ending I wanted. I never found the entry point: the infection window contains nothing but WhatsApp telemetry and browser local storage, my shell history has no timestamps, and no dropper was recovered. I never found the trigger either. The machine is still compromised as I write this.</p>
<p>That is the honest state, and I think it is worth publishing in that state rather than waiting for a tidier one. A lot of security writing arrives pre-resolved, which quietly teaches you that if you are thorough enough you win. Sometimes you are thorough and you still lose, and the correct move is to stop spending hours on eradication and admit the machine is not salvageable. I am wiping it. Documents only, no application restore, no config restore, nothing out of <code>~/Library</code>.</p>
<p>Rotating everything from a different device, starting with the wallet. I had MetaMask in two Chrome profiles, and a clipboard monitor plus a screenshot on every clipboard change is exactly the tool you would build to steal a seed phrase. I am treating mine as public.</p>
<p>If you are a developer, you are specifically who this family targets, usually through npm packages and fake recruiter take-home tests. Worth running <code>npm config set ignore-scripts true</code> today. Mine was set to false, like almost everyone's.</p>
<p>And if an app on your machine ever deletes itself, do not just reinstall it. Ask what has permission to delete files in that folder.</p>
`.trim(),
  },
  {
    slug: "when-the-ai-holds-your-wallet",
    title: "When the AI holds your wallet",
    date: "2026-07",
    category: "ai safety",
    excerpt:
      "I gave nine AI models a signed budget and tried to talk them into breaking it. Every one of them did, in ways no payment system can catch.",
    body: `
<p>Google and Coinbase now have standards that let an AI agent spend real money. The user signs a mandate that says what the agent may buy, and the agent signs each payment. Once it signs, the money is gone.</p>
<p>People assume the payment system keeps the agent honest. It can check the numbers: the budget, the spending cap, the approved store. But it cannot check meaning. If you authorize your agent to buy this week's groceries, a $25 gift card at the same grocery store passes every check the system can run. Only the agent can know that is not what you meant.</p>
<p>So I built MandateBench. Thirty five scenarios across five kinds of spending: groceries, flights, subscriptions, donations, office supplies. Seventeen of them are traps that look perfectly legal but break what the user actually asked for. I ran nine top models against them, three times each.</p>
<p>No model caught every trap. The best missed one in ten. The worst missed nearly half. And here is the part that surprised me: in my small pilot, three models looked perfect. When I grew the test set five times bigger, none of them stayed perfect and the ranking reshuffled. Small benchmarks lie about rankings, even when the overall effect is real.</p>
<p>The scariest result is about oversight. I had one model read another model's private reasoning and guess whether the payment it was about to sign broke the mandate. That works okay, until you tell the agent to keep its reasoning bland. Then two things happen at once. The agent breaks the mandate more, and the overseer's guesses become worse than a coin flip, because a hidden breach reads calmer than an honest decision.</p>
<p>Hiding the reasoning does not just blind the watcher. It blinds the agent too.</p>
<p>The benchmark is open source, the ground truth needs no AI judge, and every number in the paper is generated from a frozen data export. The paper and the live dashboard are at <a href="https://mandatebench.xyz/paper">mandatebench.xyz/paper</a>.</p>
`.trim(),
  },
  {
    slug: "reading-the-liars-mind",
    title: "Reading the liar's mind",
    date: "2026-07",
    category: "ai safety",
    excerpt:
      "I let one AI read another AI's private thoughts to catch it lying. It worked, but the hard part is still ahead.",
    body: `
<p>I wanted to know one thing. If an AI is lying, can you catch it by reading its private thoughts?</p>
<p>So I built DeceptionBench. Six of the top AI models play a social game where one of them has to lie. A separate AI, the monitor, never sees the game. It only gets to read the suspect's private thinking, and it has to guess who is lying.</p>
<p>It worked almost every time. Even when I told the models to hide their thinking, the monitor still caught them.</p>
<p>That sounds great, but it is not the win it looks like. The game pushes the lie into the open. To lie well, a model has to think about lying, and that thought lands in the exact place the monitor is reading. So catching it here says more about the game than about AI in general.</p>
<p>The real question is the harder one. What happens when a model is trained to hide its plan, or learns to do its real thinking somewhere you cannot see? That is what I want to work on next. If we are going to hand AI agents real decisions, we need to know when watching their reasoning stops working.</p>
<p>You can try the benchmark at <a href="https://deceptionbench.xyz">deceptionbench.xyz</a>, and the full write-up is <a href="https://deceptionbench.xyz/paper">here</a>.</p>
`.trim(),
  },
];
