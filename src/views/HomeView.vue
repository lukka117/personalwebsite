<script setup>
import { featuredHomeProjects, featuredCreativeWorks, methodologyItems } from '@/data/projects'
import { homeCopy } from '@/data/profile'
import Reveal from '@/components/motion/Reveal.vue'
import CodeProjectCard from '@/components/projects/CodeProjectCard.vue'
import VisualWorksSection from '@/components/projects/VisualWorksSection.vue'
import SplitLines from '@/components/motion/SplitLines.vue'
import MarqueeBand from '@/components/shared/MarqueeBand.vue'
</script>

<template>
  <div>
    <Reveal variant="up" stagger :stagger-step="120">
      <section class="difference-section">
        <div class="difference-left reveal-child" style="--i: 0">
          <div id="difference-link" class="ds-label">{{ homeCopy.leadLabel }}</div>
        </div>
        <div class="difference-right reveal-child" style="--i: 1">
          <h1 class="ds-title">
            {{ homeCopy.leadTitle }}
          </h1>
        </div>
      </section>
    </Reveal>

    <section class="home-code">
      <div class="home-code__head">
        <p class="dev-page__eyebrow">Selected builds</p>
        <RouterLink class="code-pill code-pill--action" to="/projects">All projects</RouterLink>
      </div>
      <div class="code-grid">
        <CodeProjectCard
          v-for="(project, index) in featuredHomeProjects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>
    </section>

    <VisualWorksSection compact :works="featuredCreativeWorks" />

    <section>
      <template v-for="(item, index) in methodologyItems" :key="item.number">
        <Reveal variant="up" :delay="index * 30">
          <div class="methodology-details">
            <div class="ds-label">{{ item.title }}</div>
            <div class="ds-caption">{{ item.number }}</div>
          </div>
        </Reveal>
        <hr class="line-class" />
        <Reveal variant="up" :delay="40">
          <div class="text-box">
            <div class="space-left" />
            <div class="text-styles ds-body">{{ item.text }}</div>
          </div>
        </Reveal>
        <hr class="line-class" />
      </template>
    </section>

    <Reveal variant="up" stagger :stagger-step="120">
      <section class="difference-section" style="margin-top: 10vw">
        <div class="difference-left reveal-child" style="--i: 0">
          <div id="difference-link" class="ds-label">{{ homeCopy.frameLabel }}</div>
        </div>
        <div class="difference-right reveal-child" style="--i: 1">
          <h1 class="ds-title">
            {{ homeCopy.frameTitle }}
          </h1>
        </div>
      </section>
    </Reveal>

    <SplitLines
      id="form-header"
      class-name="ds-mega"
      :lines="['Ready to', 'shape the', 'next piece?']"
    />
    <Reveal variant="fade" :delay="160">
      <div id="send-form-button">
        <RouterLink to="/contact">
          Let's make it happen
        </RouterLink>
      </div>
    </Reveal>

    <MarqueeBand />
  </div>
</template>
