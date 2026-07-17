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
      "What DeceptionBench found when a monitor is allowed to read only a model's private reasoning — and why the interesting question starts where the metric saturates.",
    body: `
<p>I built DeceptionBench to answer a narrow, concrete question: if a language model is being deceptive, can you catch it by reading only its private reasoning?</p>
<p>The setup is a social-deduction game played across six frontier models. One model is assigned to deceive. A separate monitor never sees the game state, only the suspect model's private chain of thought, and has to decide who is lying. In the pilot, that monitor identifies the deceiver almost perfectly, and it holds up even when the models are instructed to hide their reasoning.</p>
<p>That result is less impressive than it first looks, and the reason is the more interesting finding. The metric saturates because the game <em>forces</em> the plan into the reasoning: to deceive well, the model has to think about deceiving, and that thought lands in the channel the monitor is reading. Perfect detection here is a statement about the game, not a law about oversight.</p>
<p>So the real question is the one that starts where the metric ends: does monitored reasoning stay faithful under an adversary that is trained to hide its plan, or that learns to do the deciding somewhere the monitor cannot see? That is the direction I want to push next, and it is why I care about the robustness of reasoning-based oversight rather than any single benchmark number.</p>
<p>The benchmark is live at <a href="https://deceptionbench.xyz">deceptionbench.xyz</a>, and the write-up is <a href="https://deceptionbench.xyz/paper">here</a>.</p>
`.trim(),
  },
];
