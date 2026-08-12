<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAppReady } from '@/composables/useAppReady'

const { markReady } = useAppReady()

const progress = ref(0)
const hidden = ref(false)
const displayNone = ref(false)

let intervalId = null
let safetyId = null

onMounted(() => {
  // Never leave the app stuck behind the loader
  safetyId = setTimeout(() => {
    markReady()
    hidden.value = true
    displayNone.value = true
  }, 5000)

  const minDuration = 1200
  const maxDuration = 2200
  const totalDuration =
    Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration

  const steps = Math.floor(Math.random() * 3) + 4
  const points = [0]
  let last = 0
  for (let i = 1; i < steps - 1; i++) {
    let min = last + Math.floor((100 - last) / (steps - i + 1))
    let max = 100 - (steps - 1 - i) * 10
    if (min >= max) min = max - 1
    const val = Math.floor(Math.random() * (max - min + 1)) + min
    points.push(val)
    last = val
  }
  points.push(100)

  const startTime = Date.now()
  const stepTimes = points.map((_, i) =>
    startTime + Math.floor((i * totalDuration) / (points.length - 1)),
  )

  let currentStep = 0
  let lastProgress = 0

  intervalId = setInterval(() => {
    const now = Date.now()
    while (currentStep < stepTimes.length - 1 && now >= stepTimes[currentStep + 1]) {
      currentStep++
    }

    let value
    if (currentStep === stepTimes.length - 1) {
      value = 100
    } else {
      const t0 = stepTimes[currentStep]
      const t1 = stepTimes[currentStep + 1]
      const p0 = points[currentStep]
      const p1 = points[currentStep + 1]
      const t = Math.min(Math.max((now - t0) / (t1 - t0), 0), 1)
      const eased = t * (2 - t)
      value = Math.floor(p0 + (p1 - p0) * eased)
    }

    if (value < lastProgress) value = lastProgress
    lastProgress = value
    progress.value = value

    if (value >= 100) {
      clearInterval(intervalId)
      intervalId = null
      setTimeout(() => {
        // Paint content under the loader before the wipe, so there's no second fade
        markReady()
        requestAnimationFrame(() => {
          hidden.value = true
          if (safetyId) {
            clearTimeout(safetyId)
            safetyId = null
          }
          setTimeout(() => {
            displayNone.value = true
          }, 1000)
        })
      }, 280)
    }
  }, 20)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
  if (safetyId) clearTimeout(safetyId)
})
</script>

<template>
  <div
    v-if="!displayNone"
    id="preloader"
    :class="{ hidden }"
    aria-hidden="true"
  >
    <div id="loading-bar-container">
      <div id="loading-bar" :style="{ width: `${progress}%` }" />
    </div>

    <div
      id="percentage-counter"
      :style="{ opacity: 0.7 + 0.3 * (progress / 100) }"
    >
      <span
        v-for="(digit, i) in String(progress).split('')"
        :key="`${progress}-${i}`"
      >{{ digit }}</span>
    </div>
  </div>
</template>
