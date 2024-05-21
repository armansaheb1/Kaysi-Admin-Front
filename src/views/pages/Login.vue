<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4" style="height: 310px;width: 80%!important; margin:auto!important">
              <CCardBody>
                <CForm>
                  <h1>ورود</h1>
                  <p class="text-body-secondary">ورود به حساب کاربری</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput v-model="username" placeholder="نام کاربری" autocomplete="username" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput v-model="password" type="password" placeholder="کلمه عبور"
                      autocomplete="current-password" />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton @click="login()" color="primary" class="px-4"> ورود </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        فراموشی رمز ؟
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>

          </CCardGroup>
        </CCol>
      </CRow>
  </div>
</template>

<script>
import axios from 'axios'
import Vcode from "vue3-puzzle-vcode";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  components: {
    Vcode
  },
  methods: {
    async login() {
      var formData = {
        username: this.username.toLowerCase(),
        password: this.password
      }
      await axios
        .post('/token/login', formData)
        .then(response => {
          const token = response.data.auth_token
          this.$store.commit('setToken', token)
          axios.defaults.headers.common.Authorization = 'Token ' + token
          this.$store.state.isAuthenticated = true
          localStorage.setItem('token', token)
          this.$store.state.loginpop = false
          this.$store.state.loginpopmini = false
          this.$store.state.registerpop = false
          const toPath = this.$route.go || '/'
          this.$router.push(toPath)

        }

        )
    }
  }
}

</script>
