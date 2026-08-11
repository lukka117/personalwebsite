/**
 * Shared motion presets for v-motion directive.
 * Usage: v-motion="motionPresets.fadeUp" v-motion-visible
 */
export const motionPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 700, ease: [0.16, 1, 0.3, 1] },
    },
  },

  fadeIn: {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 500 },
    },
  },

  slideLeft: {
    initial: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 600, ease: [0.16, 1, 0.3, 1] },
    },
  },

  stagger(index = 0) {
    return {
      initial: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 650,
          delay: index * 90,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }
  },

  parallax: {
    initial: { opacity: 0.06, y: 0 },
    visible: {
      opacity: 0.06,
      y: -40,
      transition: { duration: 1200, ease: 'linear' },
    },
  },
}
