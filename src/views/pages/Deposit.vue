<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <h4 style="">تایید درخواست واریز</h4>
        </CCardHeader>
        <CCardBody>

          <div>
            <div class="table-responsive">
              <table style="direction: rtl;" class="table table-responsive table-striped">
                <thead>
                  <tr>
                    <th scope="col" style="width: 20%;">نام کاربر</th>
                    <th scope="col"> ارز</th>
                    <th scope="col"> کد پیگیری </th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="item in plans" v-bind:key="item">
                    <th style="width: 20%;font-size: 10px;">{{ item.user.username }}</th>
                    <th style="width: 20%;font-size: 10px;">{{ item.currency.brand }}<br>{{ item.amount }}</th>
                    <td>
                      <button @click="aler(item.link)" style="width: 100%;margin:2px; font-size: 10px;"
                        class="btn btn-warning"> نمایش کد
                        پیگیری</button>
                      <button @click="accept(item.id)" type="submit" style="width: 100%;margin:2px"
                        class="btn btn-info">تایید</button><br>
                      <button @click="reject(item.id)" style="width: 100%;margin:2px" class="btn btn-danger">رد</button>

                    </td>

                  </tr>

                  <tr v-if="!plans.length">
                    <td colspan="6">درخواستی موجود نیست</td>
                  </tr>

                </tbody>
              </table>
            </div>
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
    aler(text) {
      alert(text)
    },
    login() {
      this.$store.state.showloginindex = true
    },
    images(aa) {
      var myWindow = window.open("", "MsgWindow", "width=800,height=500");
      myWindow.document.write(`<img o style="width:100%;" src="${aa}">`);
    },
    async get_plans() {
      await axios
        .get(`admin/add-amount-reqs`)
        .then(response => response.data)
        .then(response => {
          this.plans = response
        })
    },
    async accept(id) {
      await axios
        .put(`admin/add-amount-reqs/${id}`)
        .then(response => response.data)
        .then(response => {
          this.plans = response
        })
    },
    async reject(id) {
      await axios
        .delete(`admin/add-amount-reqs/${id}`)
        .then(response => response.data)
        .then(response => {
          this.plans = response
        })
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