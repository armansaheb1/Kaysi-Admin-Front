<template>
    <div></div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'app-layout-navbar',
    props: {
        sidenavToggle: {
            type: Boolean,
            default: true
        }
    },
    beforeMount() {
        axios.defaults.headers.common.Authorization = ''
            localStorage.removeItem('token')
            this.$store.commit('removeToken')
            this.$router.push('/login')

    },
    methods: {
        logout() {
           
        }
    }
}
</script>