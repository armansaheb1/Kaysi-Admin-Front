<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          ایجاد محصول
        </CCardHeader>
        <CCardBody>

          <form enctype="multipart/form-data" @submit.prevent="submit()" method="POST">
            <div>
              <input v-model="title" class="form-control" style="text-align: right; padding: 5px;margin: auto;"
                type="text" name="name" placeholder="نام" required><br>
              <textarea rows="10" v-model="text" class="form-control"
                style="text-align: right; padding: 5px;margin: auto;" type="text" name="brand" placeholder="متن"
                required></textarea><br>
              <input v-model="price" class="form-control" style="text-align: right; padding: 5px;margin: auto;"
                type="text" name="name" placeholder="قیمت دلاری" required><br>
              <label>تصویر</label>
              <input class="form-control" style="text-align: right; padding: 5px;margin: auto;" type="file" id="pic"
                placeholder=" بارکد کیف پول ارز" value="" required><br>
            </div>
            <datalist id="cats">
              <option></option>
            </datalist>
            <br><br>
            <input class="btn btn-info" type="submit">

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
    des: '',
    price: 0
  }),
  mounted() {
    this.get_curs()
    this.get_product()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_curs() {
      await axios
        .get(`admin/cur`)
        .then(response => response.data)
        .then(response => {
          this.curs = response
        })
    },
    async get_product() {
      var id = this.$route.params.id
      await axios
        .get(`admin/product/${id}`)
        .then(response => response.data)
        .then(response => {
          this.title = response.title
          this.text = response.des
          this.price = response.price
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
        .put(`changepass`, {
          title: this.title,
          percentm: this.percentm,
          des: this.text,
          price: this.price,

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