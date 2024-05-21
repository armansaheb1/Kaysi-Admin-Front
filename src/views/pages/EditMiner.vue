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
                            <input v-model="title" class="form-control" style="text-align: right; padding: 5px;margin: auto;" type="text" name="title" placeholder="تیتر" required><br>
                            <textarea v-model="des" class="form-control" style="text-align: right;padding: 5px;margin: auto;" name="des" rows="5" cols="25" placeholder="توضیحات" required></textarea><br>
                            <input v-model="profit" class="form-control" style="text-align: right;padding: 5px;margin: auto;" type="number" step="0.00001" name="profit" placeholder="میزان سود " required><br>
                            <input v-model="price" class="form-control" style="text-align: right;padding: 5px;margin: auto;" type="number" step="0.00001" name="price" placeholder="قیمت " required><br>
                            <input v-model="rate" class="form-control" style="text-align: right;padding: 5px;margin: auto;" type="number" step="0.00001" name="price" placeholder="هش ریت " required><br>
                            <input v-model="period" style="text-align: right;padding: 5px" type="radio" value="360" name="period" id="period" required><label>سالانه</label>
                            <br>
                            <input v-model="period" style="text-align: right;padding: 5px" type="radio" value="180" name="period" id="period" required><label>شش ماهه</label>
                            <br>
                            <input v-model="period" style="text-align: right;padding: 5px" type="radio" value="30" name="period" id="period" required><label>ماهانه</label>
                            <br>
                            <input v-model="period"  style="text-align: right;padding: 5px" type="radio" value="1" name="period" id="period" required><label>روزانه</label>
                            <br><br>
                            <input v-model="cur" class="form-control" style="" type="text" list="cur" name="cur" placeholder="ارز"/>
                             <datalist id="cur">

                                        <option v-for="item in curs">{{item.name}}</option>

                                     </datalist>
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
    curs : [],
    des: ''
  }),
  mounted() {
    this.get_curs()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_curs() {
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
          this.cur = response.get_cur
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
      await axios
        .post(`admin/miner`, {
          title : this.title,
          profti : this.profit,
          period: this.period,
          rate: this.rate,
          cur: this.cur,
          des: this.des,
          price: this.price

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