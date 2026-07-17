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
