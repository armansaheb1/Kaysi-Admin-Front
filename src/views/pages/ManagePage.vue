<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <h4 style="">ویرایش پلن ها</h4>
        </CCardHeader>
        <CCardBody>

          <div>

            <table style="direction: rtl;" class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">نام پلن</th>
                  <th scope="col"> عملیات </th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="item in pages">
                  <th>{{ item['title'] }}</th>

                  <td><a class="btn btn-info" style="text-align: center; float: none; margin: 5%;color: black;"
                      style:focus="border:none" :href="'/edit-page/' + item.id">
                      Edit
                    </a></td>
                </tr>

                <tr>
                  <td v-if="!this.pages.length" colspan="6">پلنی موجود نیست</td>
                </tr>
              </tbody>
            </table>

          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile Page',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    user: '',
    password: '',
    opassword: '',
    repassword: '',
    pages: []
  }),
  mounted() {
    this.get_pages()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_pages() {
      await axios
        .get(`admin/page`)
        .then(response => response.data)
        .then(response => {
          this.pages = response
        })
    },
    async deletes(id) {
      await axios
        .delete(`admin/page/${id}`)
        .then(response => response.data)
        .then(response => {
          this.pages = response
        })
    },
    async submit() {
      await axios
        .post(`changepass`, {
          password: this.password,
          opassword: this.opassword,
          repassword: this.repassword
        })
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerbg-dark {
  background-color: #0B0E11;
  color: white
}

.bannerbg-light {
  color: black
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.banner {
  width: 100%;
  height: 440px;
  background: url('https://static.vecteezy.com/system/resources/thumbnails/002/021/615/original/blockchain-network-concept-free-video.jpg');
  background-size: 100%;
}

.b-back {
  width: 70%;
  right: 15%
}

.mobile {
  display: block;
}

.nmobile {
  display: none;
}

@media only screen and (max-width: 700px) {
  .b-back {
    width: 100%;
    right: 0
  }

  .mobile {
    display: none;
  }

  .nmobile {
    display: block;
  }
}
</style>
<style></style>