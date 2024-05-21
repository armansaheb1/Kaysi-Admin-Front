<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <h4 style="">ویرایش ارز ها</h4>
        </CCardHeader>
        <CCardBody>

          <div style="width:100%; overflow: auto">
                            
                        <table style="direction: rtl; width: 100%" class="table table-striped table-responsive" >
                            <thead>
                              <tr>
                                <th  style="width: 20%;">نام ارز</th>
                                <th  style="width: 20%;">تصویر ارز</th>
                                <th  style="width: 20%;"> آدرس ارز </th>
                                <th  style="width: 20%;"> بارکد ارز </th>
                                <th  style="width: 20%;">  عملیات </th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in curs">
                                <td>{{item.name}}</td>
                                <td><img style="width: 40%;" :src="item.get_image"> </td>
                                <td style="width: 20%">{{item.address}}</td>
                                <td><img style="width: 100%;" :src="item.get_qr"></td>
                                <td ><a :href="'/edit-currency/' + item.id" class="btn btn-info" style="color: white" onclick="">
                                    Edit
                                    </a><button @click="deletes(item.id)" class="btn btn-danger" onclick="">
                                    Delete
                                    </button></td>
                                <td></td>
                              </tr>
                           <tr>
                            <td v-if="!this.curs.length" colspan="6">ارزی موجود نیست</td>
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
    curs: [],
    user: '',
    password: '',
    opassword: '',
    repassword: ''
  }),
  mounted() {
    this.get_curs()
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
    async deletes(id) {
      await axios
        .delete(`admin/cur/${id}`)
        .then(response => response.data)
        .then(response => {
          this.curs = response
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