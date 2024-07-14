<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          ایجاد ارز
        </CCardHeader>
        <CCardBody>

          <form enctype="multipart/form-data" @submit.prevent="submit()" method="POST">
            <div>
              <input v-model="name" class="form-control"
                style="text-align: right; padding: 5px;width: 90%;margin: auto;" type="text" name="name"
                placeholder="نام ارز" required><br>
              <input v-model="brand" class="form-control"
                style="text-align: right; padding: 5px;width: 90%;margin: auto;" type="text" name="brand"
                placeholder="نماد ارز" required><br>
              <input v-model="address" class="form-control"
                style="text-align: right; padding: 5px;width: 90%;margin: auto;" type="text" name="address"
                placeholder="آدرس کیف پول ارز" required><br>
              <label style="width: 90%;margin: 0 5%">بارکد</label>
              <input class="form-control" style="text-align: right; padding: 5px;width: 90%;margin: auto;" type="file"
                id="qr" placeholder=" بارکد کیف پول ارز" value="" required><br>
              <label style="width: 90%;margin: 0 5%">تصویر</label>
              <input class="form-control" style="text-align: right; padding: 5px;width: 90%;margin: auto;" type="file"
                id="pic" placeholder="آدرس تصویر ارز" value="" required><br>
            </div>
            <datalist id="cats">
              <option></option>
            </datalist>
            <br>
            <input hidden name="iden" type="number" value="" readonly><br>
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
    address: '',
    name: '',
    brand: ''
  }),
  mounted() {
    this.get_user()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_user() {
      await axios
        .get(`admin/user`)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    },
    async submit() {
      var formdata = new FormData()
      var qr = document.getElementById('qr').files[0]
      var pic = document.getElementById('pic').files[0]
      formdata.append('pic', pic, pic.name)
      formdata.append('qr', qr, qr.name)
      formdata.append('name', this.name)
      formdata.append('brand', this.brand)
      formdata.append('address', this.address)
      await axios
        .post(`admin/cur`, formdata)
        .then(response => response.data)
        .then(() => {
          alert('added successfully')
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