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
