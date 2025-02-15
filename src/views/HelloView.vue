<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <app-card>
      <app-card-header>
        <app-card-title> Hello </app-card-title>
        <app-card-description
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          laboriosam.</app-card-description
        >
      </app-card-header>
      <app-card-content> </app-card-content>
      <app-card-footer>
        <app-button>shadcn</app-button>
        <ThemeToggle />
      </app-card-footer>
    </app-card>
  </div>
</template>
