<template>
  <nav class="menu">
    <ul class="menu__list">
      <li v-for="(link, index) in links" :key="index">
        <div
          v-if="isLinkPermitted(link) || !token"
          :id="`sidebar_${link.slug}`"
          class="menu__item"
          :class="{
            active: props.contentClass === link.id,
            hidden: !isDrawerVisible,
          }"
          @click="handleDrawer(link.id)"
        >
          <IconSprite :name="link.icon || ''" />
          <div v-show="isDrawerVisible" class="menu__item_content">
            <span class="menu__item_title"> {{ link.title }} </span>
            <IconSprite
              :name="
                props.contentVisible === link.id ? 'arrow_up' : 'arrow_down'
              "
            />
          </div>
        </div>
        <ul
          v-if="props.contentVisible === link.id && isDrawerVisible"
          class="menu__list"
        >
          <MenuItem
            v-for="(child, ind) in link.children"
            :key="ind"
            :item="child"
            :handle-click="handleVisibleDrawer"
            :content-class="contentClass"
          />
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { ILink } from '@/components/common/interfaceCommon'
  import { useStore } from 'vuex'
  import { DISABLE_CHECK_ROLES } from '@/helpers'
  import MenuItem from '@/components/common/Menu/MenuItem.vue'
  import { recurrentPermissionCollector } from '@/helpers/permissions'
  import { authLinks, noAuthLinks } from '@/components/common/Menu/menu'

  const store = useStore()
  const { path } = useRoute()

  console.log('path', path)

  const isDrawerVisible = computed(() => store.getters.getDrawerVisible)

  const props = defineProps<{
    isHandleClick: boolean
    contentVisible: number
    contentClass: number
  }>()

  const emits = defineEmits<{
    (e: 'update:isHandleClick', value: boolean): void
    (e: 'update:contentVisible', value: string | number): void
    (e: 'update:contentClass', value: string | number): void
  }>()

  const handleDrawer = (id: string | number) => {
    props.contentVisible === id
      ? isDrawerVisible.value && emits('update:contentVisible', 0)
      : emits('update:contentVisible', id)
    emits('update:contentClass', id)
    store.commit('setDrawerVisible', true)
  }

  const handleVisibleDrawer = () => {
    store.commit('setDrawerVisible', props.isHandleClick)
  }

  const token = localStorage.getItem('token')
  const links: ILink[] = token ? authLinks : noAuthLinks
  const user = computed(() => store.getters.user)

  function isLinkPermitted(link: ILink) {
    if (DISABLE_CHECK_ROLES) return true
    if (!user.value.group) return false
    const permissions = link.permissions?.length
      ? link.permissions
      : recurrentPermissionCollector(link.children)
    if (permissions.includes('free_access')) return true
    return user.value.group.permissions.some((permission: string): boolean =>
      permissions.includes(permission)
    )
  }
  if (path !== '/') {
    const slug = path.split('/')[1]
    const currentParentPath = authLinks.find((link) => link.slug === slug)
    console.log('currentParentPath', currentParentPath)

    if (currentParentPath) handleDrawer(currentParentPath.id)
  }
</script>

<style lang="sass" scoped>
  @import 'menu'
</style>
