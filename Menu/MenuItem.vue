<template>
  <li>
    <div v-if="item.children">
      <div
        v-if="permitted || !token"
        :id="`sidebar_${item.id}`"
        class="menu__item_level"
        :class="{
          active: contentClass === item.id,
        }"
        @click="() => (contentVisible = !contentVisible)"
      >
        <span>{{ item.title }}</span>
        <IconSprite :name="contentVisible ? 'arrow_up' : 'arrow_down'" />
      </div>
    </div>
    <div v-else @click="handleClick">
      <router-link
        v-if="(permitted && !item.slug.includes('react')) || !token"
        :id="`sidebar_${item.id}`"
        :to="item.slug"
        class="menu__item_children"
        :class="{ active: isRouteMatch(item) }"
      >
        <span>{{ item.title }}</span>
      </router-link>
    </div>
    <ul v-if="item.children && contentVisible">
      <MenuItem
        v-for="(child, ind) in item.children"
        :key="ind"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  import MenuItem from '@/components/common/Menu/MenuItem.vue'
  import { DISABLE_CHECK_ROLES } from '@/helpers'
  import { ILink } from '@/components/common/interfaceCommon'
  import { recurrentPermissionCollector } from '@/helpers/permissions'

  const props = defineProps<{
    item: ILink
    handleClick?: () => void
    contentClass?: number
  }>()

  const route = useRoute()
  const isRouteMatch = (item: ILink) => {
    return route.matched.some((name) => name.path.split('/:')[0] === item.slug)
  }

  const contentVisible = ref<boolean>(false)
  const token = localStorage.getItem('token')

  const store = useStore()
  const user = computed(() => store.getters.user)
  const permitted = computed(() => {
    return isItemPermitted(props.item)
  })

  function isItemPermitted(link: ILink) {
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
</script>

<style lang="sass" scoped>
  @import 'menu'
</style>
