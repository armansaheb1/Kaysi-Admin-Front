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
                  <th scope="col">#</th>
                  <th scope="col">نام کاربری</th>
                  <th scope="col">وضعیت تایید</th>
                  <th scope="col"> عملیات </th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="item in plans" v-bind:key="item">
                  <th>{{ item.id }}</th>
                  <th>{{ item.username }}</th>
                  <th>{{ item.is_verified }}</th>

                  <td><a class="btn form-control btn-warning"
                      style="text-align: center; float: none; margin: 5%; width: 100%;font-size: 10px;color: black;"
                      style:focus="border:none" :href="`usertoken/${item.id}`">
                      Go To Profile
                    </a><a v-if="item.is_active" @click="block(item.id)" class="btn form-control btn-danger"
                      style="text-align: center; float: none; margin: 5%; width: 100%;font-size: 10px;color: black;"
                      style:focus="border:none">
                      Block
                    </a>
                    <a v-else @click="block(item.id)" class="btn form-control btn-danger"
                      style="text-align: center; float: none; margin: 5%; width: 100%;font-size: 10px;color: black;"
                      style:focus="border:none">
                      Unblock
                    </a><br>
                    <a @click="deletes(item.id)" class="btn form-control btn-danger"
                      style="text-align: center; float: none; margin: 5%; width: 100%;font-size: 10px;color: black;"
                      style:focus="border:none">
                      Delete
                    </a>
                  </td>
                </tr>

                <tr>
                  <td v-if="!this.plans.length" plans colspan="6">پلنی موجود نیست</td>
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
    plans: []
  }),
  mounted() {
    this.get_plans()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_plans() {
      await axios
        .get(`admin/user`)
        .then(response => response.data)
        .then(response => {
          this.plans = response
        })
    },
    async block(id) {
      await axios
        .put(`/admin/user-token/${id}`)
        .then(response => {
          this.get_plans()

        }
        )
    },
    async deletes(id) {
      await axios
        .delete(`/admin/user-token/${id}`)
        .then(response => {
          this.get_plans()

        }
        )
    },

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