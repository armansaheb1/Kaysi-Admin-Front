<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          ایجاد پست
        </CCardHeader>
        <CCardBody>

          <form  enctype="multipart/form-data" @submit.prevent="submit()" method="POST">
                  <div>
                  <input v-model="title" class="form-control" style="text-align: right; padding: 5px;margin: auto;" type="text" name="name" placeholder="تیتر" required><br>
                  <textarea v-model="text" rows="10" class="form-control" style="text-align: right; padding: 5px;margin: auto;" type="text" name="brand" placeholder="متن" required></textarea>
                   <label >تصویر</label>
                  <input class="form-control" style="text-align: right; padding: 5px;margin: auto;"  type="file" id="pic" placeholder=" بارکد کیف پول ارز" value="" ><br>
              </div>
              <datalist id="cats">
                <option></option>
              </datalist>
              
                      <input v-model="index" type="checkbox" style="margin: 0 10px"><label>نمایش در صفحه اصلی</label><br>
                      <input v-model="app" type="checkbox" style="margin: 0 10px"><label>نمایش در اپ</label><br>
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
    des: ''
  }),
  mounted() {
    this.get_post()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },

    async get_post() {
      var id = this.$route.params.id
      await axios
        .get(`admin/post/${id}`)
        .then(response => response.data)
        .then(response => {
          this.title = response.title
          this.text = response.text
          this.index = response.index
          this.app = response.app
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
      var pic = document.getElementById('pic').files[0]
      if(pic){
        formdata.append('pic', pic, pic.name)
      }
      
      formdata.append('title', this.title)
      formdata.append('text', this.text)
      formdata.append('index', this.index)
      formdata.append('app', this.app)
      await axios
        .put(`admin/post/${id}`, formdata)
        .then(response => response.data)
        .then(response => {
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