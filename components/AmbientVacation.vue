<template>
  <div>
    <!-- hidden youtube player host -->
    <div ref="playerHost" class="yt-host" aria-hidden="true"></div>

    <!-- the only trace: a small vinyl turning in the corner -->
    <button
      class="now-playing"
      :class="{ paused: !playing }"
      type="button"
      :aria-pressed="playing"
      aria-label="toggle music — flawed mangoes, killswitch lullaby"
      title="flawed mangoes — killswitch lullaby"
      @click="toggle"
    >
      <span class="disc" aria-hidden="true"></span>
      <span class="np-text">killswitch lullaby</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const VIDEO_ID = "Hn4YTL_OlUA"; // flawed mangoes — killswitch lullaby

const playing = ref(false);
const playerHost = ref<HTMLElement | null>(null);

let player: any = null;
let playerReady: Promise<any> | null = null;
let userPaused = false; // once they pause it, never auto-start again

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

async function startTape() {
  if (userPaused || playing.value) return;
  const p = await ensurePlayer();
  try {
    p.playVideo();
  } catch {}
}

async function toggle() {
  const p = await ensurePlayer();
  if (playing.value) {
    userPaused = true;
    p.pauseVideo();
  } else {
    userPaused = false;
    p.playVideo();
  }
}

// sound needs one gesture — the first touch anywhere quietly starts the tape
function onFirstTouch() {
  startTape();
}

onMounted(() => {
  window.addEventListener("pointerdown", onFirstTouch, { once: true });
  window.addEventListener("keydown", onFirstTouch, { once: true });
  // try immediately too — some browsers allow it
  startTape();
});

onBeforeUnmount(() => {
  window.removeEventListener("pointerdown", onFirstTouch);
  window.removeEventListener("keydown", onFirstTouch);
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

/* vinyl disc */
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

/* now playing pill — quiet, bottom corner */
.now-playing {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 9100;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 36px);
  background: var(--pill-bg, rgba(250, 244, 232, 0.85));
  backdrop-filter: blur(10px);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 8px 14px 8px 9px;
  box-shadow: 0 14px 34px -16px rgba(46, 36, 26, 0.45);
  cursor: pointer;
  transition: transform 0.25s, opacity 0.25s;
  opacity: 0.75;
}
.now-playing:hover,
.now-playing:focus-visible {
  transform: translateY(-2px);
  opacity: 1;
  outline: none;
}
.now-playing.paused .disc {
  animation-play-state: paused;
  opacity: 0.55;
}
.np-text {
  font-family: var(--serif);
  font-style: italic;
  font-size: 13px;
  color: var(--soft);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 560px) {
  .np-text {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .disc {
    animation: none;
  }
}
</style>
