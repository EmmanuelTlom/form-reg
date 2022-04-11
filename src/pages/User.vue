<template>
  <h1>User</h1>

  {{ form.email }}

  <form id="form" @submit.prevent="submit">
    <div class="input">
      <label for="devicename">Linkedin</label>
      <input type="text" name="" id="te" v-model="form.linkedin" />
    </div>
    <div class="input">
      <label for="name">Name</label>
      <input type="text" name="name" id="sign" v-model="form.name" />
    </div>
    <div class="input">
      <label for="email">Email</label>
      <input type="email" name="email" id="sign" v-model="form.email" />
    </div>
    <div class="input">
      <label for="phone">Phone</label>
      <input type="text" name="phone" id="sign" v-model="form.phone" />
    </div>
    <div class="input-wrap">
      <label class="text-primary" for="">referral</label>
      <br />

      <div class="input">
        <i class="ri-group-line q-mr-md text-primary"></i>

        <select name="referal" v-model="form.referral" id="">
          <option value="male">family</option>
          <option value="female">friend</option>
          <option value="other">word of mouth</option>
        </select>
      </div>
    </div>
    <div class="input-wrap">
      <label class="text-primary" for="">Gender</label>
      <br />

      <div class="input">
        <i class="ri-group-line q-mr-md text-primary"></i>

        <select name="gender" v-model="form.gender" id="">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <!-- <div class="input">
      <label for="">linkedin_url</label>
      <input type="text" name="linkedin_url" v-model="form.linkedin_url" />
    </div> -->
    <div class="input">
      <label for="">age_group</label>
      <input type="text" name="age_group" v-model="form.age_group" />
    </div>

    <div class="input">
      <label for="">can_work_in_usa</label>
      <input
        type="text"
        name="can_work_in_usa"
        v-model="form.can_work_in_usa"
      />
    </div>

    <div class="input">
      <label for="">employment_status</label>
      <input
        type="text"
        name="employment_status"
        v-model="form.employment_status"
      />
    </div>

    <div class="input">
      <label for="">highest_school</label>
      <input type="text" name="highest_school" v-model="form.highest_school" />
    </div>
    <div class="input">
      <label for="">location</label>
      <input type="text" name="location" v-model="form.location" />
    </div>
    <div class="input">
      <label for="representation">representation</label>
      <input type="text" name="representation" v-model="form.representation" />
    </div>

    <div class="input">
      <label for="email">tech_experience</label>
      <input
        type="text"
        name="tech_experience"
        v-model="form.tech_experience"
      />
    </div>

    <div class="input">
      <label for="email">timezone</label>
      <input type="text" name="timezone" v-model="form.timezone" />
    </div>

    <button type="submit">submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        age_group: this.userData("age_group"),
        can_work_in_usa: this.userData("can_work_in_usa"),
        email: this.userData("email"),
        employment_status: this.userData("employment_status"),
        gender: this.userData("gender"),
        highest_school: this.userData("highest_school"),
        hours_per_week: this.userData("hours_per_week"),
        learning_track: this.userData("learning_track"),
        linkedin_url: this.userData("linkedin_url"),
        location: this.userData("location"),
        name: this.userData("name"),
        phone: this.userData("phone"),
        referral: this.userData("referral"),
        representation: this.userData("representation"),
        tech_experience: this.userData("tech_experience"),
        timezone: this.userData("timezone"),
      },
    };
  },
  methods: {
    userData(key) {
      return JSON.parse(localStorage.getItem("userDetails"))[key];
    },
    async submit() {
      const formData = new FormData(document.querySelector("#form"));

      let resp = await axios
        .put(
          `https://linkedin-signin-prototype.herokuapp.com/api/users/${this.form.email}`
        )
        .catch((err) => console.log(err));

      console.log(resp);
    },
  },
};
</script>

<style></style>
