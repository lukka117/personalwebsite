<script setup>
import { aboutCopy } from '@/data/profile'
</script>

<template>
  <div>
    <div style="margin-bottom: 10vw">
      <div class="about-hero-flex" style="margin-bottom: 5vw">
        <div id="me-box">
          <div id="imgs-box">
            <div class="media-style-container">
              <div class="media-text-container">
                <div class="about-media">
                  <img
                    class="media-style-2"
                    src="/assets/me.webp"
                    alt="lukkafz portrait"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="me-difference-section">
          <div class="me-difference-left">
            <div id="me-difference-link">[About]</div>
          </div>
          <div class="me-difference-right">
            <h1>{{ aboutCopy.about }}</h1>
          </div>
        </section>
      </div>

      <div style="margin-bottom: 10vw">
        <section
          class="me-difference-section"
          style="padding: 0vw 2vw 0 2vw; max-width: 65%; margin-left: 0; margin-right: auto; flex-direction: column"
        >
          <div class="me-difference-left">
            <div id="me-difference-link">[Craft]</div>
          </div>
          <div class="me-difference-right" style="width: 100%">
            <h1>{{ aboutCopy.craft }}</h1>
          </div>
        </section>
      </div>

      <div style="margin-bottom: 10vw">
        <div
          class="right-image-container"
          style="padding: 0vw 2vw 0 2vw; margin-left: auto; margin-right: 0; max-width: 65%; margin-bottom: 5vw"
        >
          <div class="right-text-container">
            <div class="about-media">
              <img class="media-style-2" src="/assets/solary/solary3.gif" alt="Solary visual still" />
            </div>
          </div>
        </div>

        <section
          class="me-difference-section"
          style="padding: 0vw 2vw 0 2vw; max-width: 65%; margin-left: auto; margin-right: 0; flex-direction: column"
        >
          <div class="me-difference-left">
            <div id="me-difference-link">[Process]</div>
          </div>
          <div class="me-difference-right" style="width: 100%">
            <h1>{{ aboutCopy.process }}</h1>
          </div>
        </section>
      </div>

      <div class="about-hero-flex" style="margin-bottom: 5vw">
        <div id="me-box">
          <div id="imgs-box">
            <div class="media-style-container">
              <div class="media-text-container">
                <div class="about-media">
                  <img class="media-style-2" src="/assets/monster1.webp" alt="Campaign still" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="me-difference-section">
          <div class="me-difference-left">
            <div id="me-difference-link">[Belief]</div>
          </div>
          <div class="me-difference-right">
            <h1>{{ aboutCopy.belief }}</h1>
          </div>
        </section>
      </div>
    </div>

    <div id="form-header">
      Are you Ready<br />to embark<br />a new project?<br />
    </div>
    <div id="send-form-button">
      <RouterLink to="/contact">
        Let's make it happen
      </RouterLink>
    </div>
  </div>
</template>
