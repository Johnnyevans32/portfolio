<template>
  <div>
    <!-- hidden youtube player host -->
    <div ref="playerHost" class="yt-host" aria-hidden="true"></div>

    <!-- arrival gate -->
    <div v-if="gateOpen" class="gate" :class="{ leaving }" role="dialog" aria-label="Take a vacation from the internet">
      <div class="gate-inner">
        <p class="gate-eyebrow">a vacation from the internet</p>
        <h2 class="gate-line">somewhere quiet,<br />the tape is still playing.</h2>
        <button class="gate-play" type="button" @click="enter(true)">
          <span class="disc" aria-hidden="true"></span>
          press play &amp; come in
        </button>
        <button class="gate-quiet" type="button" @click="enter(false)">
          enter quietly instead
        </button>
        <p class="gate-note">flawed mangoes — killswitch lullaby · loops while you read</p>
      </div>
    </div>

    <!-- now playing pill -->
    <button
      v-if="!gateOpen && wantsMusic"
      class="now-playing"
      :class="{ paused: !playing }"
      type="button"
      :aria-pressed="playing"
      @click="toggle"
    >
      <span class="disc np-disc" aria-hidden="true"></span>
      <span class="np-text">flawed mangoes — killswitch lullaby</span>
      <span class="np-state">{{ playing ? "playing · tap to pause" : "paused · tap to play" }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const VIDEO_ID = "Hn4YTL_OlUA"; // flawed mangoes — killswitch lullaby
const STORAGE_KEY = "vacation-mode";

const gateOpen = ref(false);
const leaving = ref(false);
const wantsMusic = ref(false);
const playing = ref(false);
const playerHost = ref<HTMLElement | null>(null);

let player: any = null;
let playerReady: Promise<any> | null = null;

function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve) => {
    const w = window as any;
    if (w.YT && w.YT.Player) return resolve();
    const prev = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      if (typeof prev === "function") prev();
      resolve();
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
  });
}

function ensurePlayer(): Promise<any> {
  if (playerReady) return playerReady;
  playerReady = loadYouTubeAPI().then(
    () =>
      new Promise((resolve) => {
        player = new (window as any).YT.Player(playerHost.value, {
          width: "1",
          height: "1",
          videoId: VIDEO_ID,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            loop: 1,
            playlist: VIDEO_ID, // required for loop
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
          },
          events: {
            onReady: () => resolve(player),
            onStateChange: (e: any) => {
              playing.value = e.data === 1; // YT.PlayerState.PLAYING
            },
          },
        });
      })
  );
  return playerReady;
}

async function enter(withMusic: boolean) {
  wantsMusic.value = withMusic;
  try {
    sessionStorage.setItem(STORAGE_KEY, withMusic ? "music" : "quiet");
  } catch {}
  if (withMusic) {
    const p = await ensurePlayer();
    try {
      p.playVideo();
    } catch {}
  }
  leaving.value = true;
  window.setTimeout(() => {
    gateOpen.value = false;
  }, 1150);
}

async function toggle() {
  const p = await ensurePlayer();
  if (playing.value) {
    p.pauseVideo();
  } else {
    p.playVideo();
  }
}

onMounted(async () => {
  let mode: string | null = null;
  try {
    mode = sessionStorage.getItem(STORAGE_KEY);
  } catch {}
  if (mode === "music") {
    wantsMusic.value = true;
    // returning visitor — try to resume the tape (may be blocked until a tap)
    const p = await ensurePlayer();
    try {
      p.playVideo();
    } catch {}
  } else if (mode !== "quiet") {
    gateOpen.value = true;
  }
});

onBeforeUnmount(() => {
  try {
    player?.destroy?.();
  } catch {}
  player = null;
  playerReady = null;
});
</script>

<style>
.yt-host {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
}

/* ------- arrival gate: a sunset you walk through ------- */
.gate {
  position: fixed;
  inset: 0;
  z-index: 9200;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    #352238 0%,
    #613347 30%,
    #a8543d 55%,
    #dd9a63 78%,
    #f2cf9c 100%
  );
  transition: opacity 1.15s ease, visibility 1.15s ease;
}
.gate.leaving {
  opacity: 0;
  visibility: hidden;
}
.gate::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 62%;
  width: 360px;
  height: 360px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(255, 238, 196, 0.95),
    rgba(255, 202, 142, 0.38) 46%,
    transparent 70%
  );
  filter: blur(4px);
  animation: sunbreathe 7s ease-in-out infinite alternate;
}
@keyframes sunbreathe {
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.85;
  }
  to {
    transform: translate(-50%, -52%) scale(1.06);
    opacity: 1;
  }
}
.gate-inner {
  position: relative;
  text-align: center;
  padding: 0 26px;
  color: #fff7ea;
}
.gate-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 22px;
}
.gate-line {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(32px, 6vw, 60px);
  line-height: 1.18;
  letter-spacing: -0.015em;
  margin: 0 0 40px;
  text-shadow: 0 2px 30px rgba(53, 34, 56, 0.45);
  text-wrap: balance;
}
.gate-play {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #fff7ea;
  background: rgba(255, 247, 234, 0.1);
  border: 1px solid rgba(255, 247, 234, 0.65);
  border-radius: 999px;
  padding: 13px 26px 13px 15px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background 0.25s, transform 0.25s;
}
.gate-play:hover,
.gate-play:focus-visible {
  background: rgba(255, 247, 234, 0.22);
  transform: scale(1.03);
  outline: none;
}
.gate-quiet {
  display: block;
  margin: 18px auto 0;
  background: none;
  border: none;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: rgba(255, 247, 234, 0.78);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.gate-quiet:hover,
.gate-quiet:focus-visible {
  color: #fff7ea;
  outline: none;
}
.gate-note {
  margin: 40px 0 0;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  opacity: 0.55;
}

/* ------- vinyl disc ------- */
.disc {
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: repeating-radial-gradient(
    circle at center,
    #221812 0 1.4px,
    #3c2c1e 1.4px 2.8px
  );
  position: relative;
  animation: spin 5s linear infinite;
}
.disc::after {
  content: "";
  position: absolute;
  inset: 36%;
  border-radius: 50%;
  background: #e09a5f;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ------- now playing pill ------- */
.now-playing {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 9100;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 36px);
  background: rgba(250, 244, 232, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 8px 16px 8px 9px;
  box-shadow: 0 14px 34px -16px rgba(46, 36, 26, 0.45);
  cursor: pointer;
  transition: transform 0.25s;
}
.now-playing:hover,
.now-playing:focus-visible {
  transform: translateY(-2px);
  outline: none;
}
.now-playing.paused .np-disc {
  animation-play-state: paused;
  opacity: 0.55;
}
.np-text {
  font-family: var(--serif);
  font-style: italic;
  font-size: 13.5px;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.np-state {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  white-space: nowrap;
}
@media (max-width: 560px) {
  .np-state {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .disc,
  .gate::before {
    animation: none;
  }
  .gate {
    transition: none;
  }
}
</style>
