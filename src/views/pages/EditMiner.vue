<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          ایجاد ماینر
        </CCardHeader>
        <CCardBody>

          <form @submit.prevent="submit()" method="POST">
            <div>
              <input v-model="title" class="form-control" style="text-align: right; padding: 5px;margin: auto;"
                type="text" name="title" placeholder="تیتر" required><br>
              <textarea v-model="des" class="form-control" style="text-align: right;padding: 5px;margin: auto;"
                name="des" rows="5" cols="25" placeholder="توضیحات" required></textarea><br>
              <input v-model="profit" class="form-control" style="text-align: right;padding: 5px;margin: auto;"
                type="number" step="0.00001" name="profit" placeholder="میزان سود " required><br>
              <input v-model="price" class="form-control" style="text-align: right;padding: 5px;margin: auto;"
                type="number" step="0.00001" name="price" placeholder="قیمت " required><br>
              <input v-model="rate" class="form-control" style="text-align: right;padding: 5px;margin: auto;"
                type="number" step="0.00001" name="price" placeholder="هش ریت " required><br>
              <input v-model="period" style="text-align: right;padding: 5px" type="radio" value="360" name="period"
                id="period" required><label>سالانه</label>
              <br>
              <input v-model="period" style="text-align: right;padding: 5px" type="radio" value="180" name="period"
                id="period" required><label>شش ماهه</label>
              <br>
              <input v-model="period" style="text-align: right;padding: 5px" type="radio" value="30" name="period"
                id="period" required><label>ماهانه</label>
              <br>
              <input v-model="period" style="text-align: right;padding: 5px" type="radio" value="1" name="period"
                id="period" required><label>روزانه</label>
              <br><br>
              <!-- <input v-model="cur" class="form-control" style="" type="text" list="cur" name="cur" placeholder="ارز" /> -->
              <select class="form-control" v-model="cur" id="cur">

                <option v-for="item in curs" v-bind:key="item" :value="item.id">{{ item.name }}</option>

              </select>
              <label>تصویر</label>
              <input class="form-control" style="text-align: right; padding: 5px;margin: auto;" type="file" id="pic"
                value=""><br>
            </div>
            <br>
            <input class="btn btn-info" style="margin: auto; width: 30%; margin: 0 33%" type="submit">
          </form>
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
    title: '',
    percentm: '',
    period: '',
    cur: '',
    curs: [],
    des: ''
  }),
  mounted() {
    this.get_curs()
    this.get_cur()
  },
  methods: {
    async get_curs() {
      await axios
        .get(`admin/cur`)
        .then(response => response.data)
        .then(response => {
          this.curs = response
        })
    },
    login() {
      this.$store.state.showloginindex = true
    },
    async get_cur() {
      var id = this.$route.params.id
      await axios
        .get(`admin/miner/${id}`)
        .then(response => response.data)
        .then(response => {
          this.title = response.title
          this.profit = response.profit
          this.des = response.des
          this.price = response.price
          this.period = response.period
          this.cur = response.currency.id
          this.rate = response.rate
        })
    },
    async get_user() {
      await axios
        .get(`user`)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    },
    async submit() {
      var id = this.$route.params.id
      var formdata = new FormData()
      if (document.getElementById('pic').files.length) {
        var pic = document.getElementById('pic').files[0]
        formdata.append('pic', pic, pic.name)
      }

      formdata.append('profit', this.profit,)
      formdata.append('title', this.title,)
      formdata.append('period', this.period,)
      formdata.append('rate', this.rate,)
      formdata.append('cur', this.cur,)
      formdata.append('des', this.des,)
      formdata.append('price', this.price,)

      await axios
        .put(`admin/miner/${id}`, formdata)
        .then(response => response.data)
        .then(response => {
          const toPath = this.$route.go || '/manage-miner'
          this.$router.push(toPath)
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