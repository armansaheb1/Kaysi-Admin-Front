<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100">
      <AppHeader />
      <div class="body flex-grow-1">
        <CContainer class="px-4" lg>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import { CContainer } from '@coreui/vue'
import AppFooter from '@/UserComponents/AppFooter.vue'
import AppHeader from '@/UserComponents/AppHeader.vue'
import AppSidebar from '@/UserComponents/AppSidebar.vue'
import chat from '../views/pages/components/Chat.vue';

export default {
  name: 'DefaultLayout',
  beforeMount() {
    if (!this.$store.state.isAuthenticated) {
      this.$router.push('/login')
    }
  },
  components: {
    chat,
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
  },
}
</script>
