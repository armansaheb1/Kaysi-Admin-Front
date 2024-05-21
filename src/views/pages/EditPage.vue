<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          ایجاد پست
        </CCardHeader>
        <CCardBody>

          <form enctype="multipart/form-data" @submit.prevent="submit()" method="page">
            <div>
              <input v-model="title" class="form-control" style="text-align: right; padding: 5px;margin: auto;"
                type="text" name="name" placeholder="تیتر" required><br>
              <QuillEditor style="text-align: right!important; direction:rtl" v-model:content="text" contentType="html"
                theme="snow" />
              <!-- <textarea v-model="text" rows="10" class="form-control"
                style="text-align: right; padding: 5px;margin: auto;" type="text" name="brand" placeholder="متن"
                required></textarea> -->
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
  <br>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          پیش نمایش
        </CCardHeader>
        <CCardBody>

          <div v-html="text"></div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile Page',
  props: {
    msg: String,
  },
  components: {
    QuillEditor
  },
  data: () => ({
    showModal: [],
    title: '',
    percentm: '',
    period: '',
    cur: '',
    des: '',
    text: ''
  }),
  mounted() {
    this.get_page()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },

    async get_page() {
      var id = this.$route.params.id
      await axios
        .get(`admin/page/${id}`)
        .then(response => response.data)
        .then(response => {
          this.title = response.title
          this.text = response.text
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

      formdata.append('title', this.title)
      formdata.append('text', this.text)
      await axios
        .put(`admin/page/${id}`, formdata)
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

.ql-container {
  min-height: 100px !important;
  text-align: right;
}
</style>
<style></style>