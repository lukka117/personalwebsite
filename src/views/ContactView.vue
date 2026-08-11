<script setup>
import { socials } from '@/data/socials'
</script>

<template>
  <div class="contact-page">
    <header class="contact-page__intro">
      <p class="dev-page__eyebrow">Contact</p>
      <h1 class="contact-page__title">Get in touch</h1>
      <p class="contact-page__lead">
        Email or socials - the fastest ways to reach me for projects and collabs.
      </p>
    </header>

    <ul class="contact-channels">
      <li v-for="item in socials" :key="item.id">
        <a
          class="contact-channel liquid-glass liquid-glass--field"
          :href="item.href"
          :target="item.id === 'email' ? undefined : '_blank'"
          :rel="item.id === 'email' ? undefined : 'noopener noreferrer'"
        >
          <span class="contact-channel__label">{{ item.label }}</span>
          <span class="contact-channel__handle">{{ item.handle }}</span>
        </a>
      </li>
    </ul>

    <div id="form-header">
      Check out<br />my previous<br />projects<br />
    </div>
    <div id="send-form-button">
      <RouterLink class="liquid-glass liquid-glass--pill glass-btn" to="/projects">
        Check out full list here!
      </RouterLink>
    </div>
  </div>
</template>
