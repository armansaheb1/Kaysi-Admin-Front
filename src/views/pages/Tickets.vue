<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          تیکت ها
        </CCardHeader>
        <CCardBody>
          <div class="autoplay" style="width: 100%;margin: auto;height:auto;overflow-y:hidden">
            <div v-bind:key="item" class="card wals" style="">
              <table v-if="subjects" class="table">
                <thead>
                  <tr>
                    <th>کاربر</th>
                    <th>موضوع</th>
                    <th>وضعیت</th>
                  </tr>

                </thead>
                <tbody>
                  <tr @click="gotoloc(`/tickets/${item[4]}`);" v-for="item in subjects " style="cursor:pointer"
                    v-bind:key="item">
                    <td>{{ item[6] }}</td>
                    <td>{{ item[0] }}</td>
                    <td style="color: goldenrod" v-if="item[3] == 'در حال بررسی'">{{ item[3] }}
                    </td>
                    <td style="color: red" v-if="item[3] == 'بسته شده'">{{ item[3] }}</td>
                    <td style="color: green" v-if="item[3] == 'پاسخ داده شده'">{{ item[3] }}
                    </td>
                    <td style="color: goldenrod" v-if="item[3] == 'پاسخ  مشتری'">{{ item[3] }}
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </CCardBody>
      </CCard><br>

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
    subjects: [],
    text: '',
    title: ''
  }),
  mounted() {
    this.get_user()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    gotoloc(path) {
      window.location.replace(path);
    },
    async get_user() {
      await axios
        .get(`admin/subjects`)
        .then(response => response.data)
        .then(response => {
          this.subjects = response
          console.log(this.subjects)
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