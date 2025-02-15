<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
} from '@/components/ui/sidebar'
import {
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'

const data = {
  user: {
    name: 'João Guimarães',
    email: 'joaovpsguimaraes@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  about: {
    name: 'Vue 3',
    logo: GalleryVerticalEnd,
    description: 'Study guide',
  },
  navMain: [
    {
      title: 'Essentials',
      url: '#',
      icon: SquareTerminal,
      items: [
        {
          title: 'Reactivity Fundamentals',
          url: '#',
        },
        {
          title: 'Computed Properties',
          url: '#',
        },
        {
          title: 'Class and Style Bindings',
          url: '#',
        },
        {
          title: 'Conditional Rendering',
          url: '#',
        },
        {
          title: 'List Rendering',
          url: '#',
        },
        {
          title: 'Event Handling',
          url: '#',
        },
        {
          title: 'Watchers',
          url: '#',
        },
        {
          title: 'Form Input Bindings',
          url: '#',
        },
        {
          title: 'Lifecycle Hooks',
          url: '#',
        },
      ],
    },
    {
      title: 'Components',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Registration',
          url: '#',
        },
        {
          title: 'Props',
          url: '#',
        },
        {
          title: 'Events',
          url: '#',
        },
        {
          title: 'v-model',
          url: '#',
        },
        {
          title: 'Slots',
          url: '#',
        },
        {
          title: 'Provide / Inject',
          url: '#',
        },
        {
          title: 'Async Components',
          url: '#',
        },
      ],
    },
    {
      title: 'Reusability',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Composables',
          url: '#',
        },
        {
          title: 'Custom Directives',
          url: '#',
        },
        {
          title: 'Plugins',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Best Practices',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Performance',
          url: '#',
        },
        {
          title: 'Accessibility',
          url: '#',
        },
        {
          title: 'TypeScript',
          url: '#',
        },
        {
          title: 'Animation Techniques',
          url: '#',
        },
      ],
    },
  ],
}
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
            >
              <component :is="data.about.logo" class="size-4" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">{{ data.about.name }}</span>
              <span class="truncate text-xs">{{ data.about.description }}</span>
            </div>
            <ChevronsUpDown class="ml-auto hidden" />
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible
              v-for="item in data.navMain"
              :key="item.title"
              as-child
              class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton :tooltip="item.title">
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
                    <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem
                      v-for="subItem in item.items"
                      :key="subItem.title"
                    >
                      <SidebarMenuSubButton as-child>
                        <a :href="subItem.url">
                          <span>{{ subItem.title }}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage :src="data.user.avatar" :alt="data.user.name" />
                <AvatarFallback class="rounded-lg"> JG </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ data.user.name }}</span>
                <span class="truncate text-xs">{{ data.user.email }}</span>
              </div>
              <ChevronsUpDown class="ml-auto size-4 hidden" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <slot></slot>
    </SidebarInset>
  </SidebarProvider>
</template>
