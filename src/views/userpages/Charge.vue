<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol v-for="item in currency " v-bind:key="item">
      <img style="position:relative;width: 16%; margin: 5% 42%; margin-top: 0px;float:left; aspect-ratio: 1/1;"
        :src="item.get_image"><br>
      <div class="autoplay" style="width: 100%;margin: auto;height:auto;overflow-y:hidden;">
        <div class="card wals" style="padding: 0 5%;">
          <br>

          <form @submit.prevent="submitcharge()" method="POST">
            <input class="form-control" v-model="amount" type="text" name="" id="" placeholder="مبلغ"><br>
            <button class="btn btn-success  form-control" id="amreqn" style=" font-family: 'Yekan'!important;">
              ثبت
              واریز</button><br><br>


          </form>
        </div>
      </div>

    </CCol>
  </CRow>
</template>

<script>

import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    user: '',
    currency: []
  }),
  mounted() {
    this.get_user()
    this.get_currency()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_user() {
      await axios
        .get(`user`, this.$store.state.userheaders)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    },
    async get_currency() {
      var id = this.$route.params.id
      await axios

        .post(`currencies/${id}`, this.$store.state.userheaders)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.currency = [response]
        })
    },
    async submitcharge() {
      var id = this.$route.params.id
      await axios
        .post(`admin/adminincrease`, { cur: id, amount: this.amount, userid: this.user.id })
        .then(response => response.data)
        .then(() => {
          const toPath = this.$route.go || '/user/balances'
          this.$router.push(toPath)
        })
    }
  }
}
</script>

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

.wals {
  width: 80%;
  float: left;
  margin: 10%;
  margin-top: 0
}

@media only screen and (max-width: 700px) {
  .wals {
    width: 94%;
    float: left;
    margin: 3%;
  }

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

@media only screen and (max-width: 400px) {
  .wals {
    width: 94%;
    float: left;
    margin: 3%;
  }

}
</style>
<style></style>