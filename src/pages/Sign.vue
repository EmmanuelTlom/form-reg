<template>
  <h1>sign in</h1>

  {{ form }}

  <form @submit.prevent="submit">
    <!-- <div class="input">
      <label for="devicename">Linkedin</label>
      <input type="text" name="" id="te" v-model="form.linkedin" />
    </div> -->
    <div class="input">
      <label for="email">Email</label>
      <input type="email" name="" id="sign" v-model="form.email" />
    </div>

    <!-- <div class="input">
          <label for="name">name</label>
          <input type="text" name="" id="name" v-model="form.name">
      </div>
      <div class="input">
          <label for="email">password</label>
          <input type="password" name="" id="pass" v-model="form.password">
      </div> -->
    <!-- <div class="input">
          <label for="pass">passwordC</label>
          <input type="password" name="" id="pass" v-model="form.password_confirmation">
      </div>
      

      <div class="input">
          <label for="phone">phone</label>
          <input type="tel" name="" id="" v-model="form.phone_number">
      </div>
      <div class="input">
          <label for="usertype">usertype</label>
          <input type="text" name="" id="type" v-model="form.user_type">
      </div>
      <div class="input">
          <label for="username">username</label>
          <input type="text" name="" id="username" v-model="form.username">
      </div> -->
    <button type="submit">submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        //  password:'',
        //  password_confirmation:'',
        //  device_name:'',
        //  name:'',
        //  phone_number:'',
        //  user_type:'',
        //  username:''
      },
    };
  },
  methods: {
    async submit() {
      await axios
        .post(
          "https://linkedin-signin-prototype.herokuapp.com/api/users",
          this.form
        )
        .then((response) => {
          localStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.payload)
          );

          this.form = "";
        })
        .catch((err) => console.log(err));

      console.log(resp);
    },
  },
};
</script>

<style scoped></style>
