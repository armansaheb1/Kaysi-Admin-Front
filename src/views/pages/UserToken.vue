<template>
  <div>
   
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  mounted(){
    this.login()
  },
  methods: {
    async login() {
      var id = this.$route.params.id
      await axios
        .get(`/admin/user-token/${id}`)
        .then(response => {
          const token = response.data
          localStorage.setItem('usertoken', token)
          const toPath = this.$route.go || '/user/dashboard'
          this.$router.push(toPath)

        }

        )
    }
  }
}

</script>
