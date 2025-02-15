<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
</script>

<template>
  <app-dropdownMenu>
    <app-dropdown-menu-trigger as-child>
      <app-button variant="outline">
        <Icon
          icon="radix-icons:moon"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          icon="radix-icons:sun"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Alterar tema</span>
      </app-button>
    </app-dropdown-menu-trigger>
    <app-dropdown-menu-content align="end">
      <app-dropdown-menu-item @click="mode = 'light'">
        Light
      </app-dropdown-menu-item>
      <app-dropdown-menu-item @click="mode = 'dark'">
        Dark
      </app-dropdown-menu-item>
      <app-dropdown-menu-item @click="mode = 'auto'">
        System
      </app-dropdown-menu-item>
    </app-dropdown-menu-content>
  </app-dropdownMenu>
</template>
