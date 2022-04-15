<template>
  <div class="wrapper container q-pt-sm">
    <!-- <p class="top-text text-left text-weight-bold text-primary">
      Login
    </p> -->
    <!-- <p class="text-dark">Welcome Back, Sirgappy</p> -->

    <!-- This div needs to be changed -->
    <div class="eight q-my-lg">
      <h3><span class="login-text">Enroll</span></h3>
    </div>

    <!-- End of This div needs to be changed -->
    <div class="group">
      <div class="left">
        <div class="text-red q-mb-sm">
          <p class="text-dark q-mb-lg">
           Welcome! We are currently accepting enrolment for our 7-month software development training session that starts in June 2022. Please note, in order to enroll, you must:
          <ul>
          <li>Self-identify as a historically underrepresented racial minority.</li>
          <li>Be authorized to work in the United States.</li>
          <li>Have a LinkedIn profile and photo.</li>
          </ul>


          </p>
          <p class="text-secondary q-mb-lg">
          Please provide the email linked to your LinkedIn account</p>
          <!-- <p
            v-if="errors.length"
            class="text-white q-mb-xl resp bg-primary q-px-lg q-py-md"
          >
            {{ errors[0] }}
          </p> -->
          <div class="error" v-if="inputErr">
            {{ inputErr }}
          </div>
        </div>
        <form @submit.prevent="submit">
          <div class="input-wrap">
            <label class="text-primary" for="">Email</label> <br />

            <div class="input">
              <i class="ri-mail-line q-mr-md text-primary"></i>

              <input
                v-model="form.email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <!-- <div class="error" v-if="inputErr">
              {{ inputErr }}
            </div> -->
          </div>

          <!-- <div class="input-wrap">
            <label class="text-primary" for="">Phone</label> <br />

            <div class="input">
              <i class="ri-phone-fill q-mr-md text-primary"></i>

              <input
                v-model="form.phone"
                type="text"
                placeholder="Enter your number"
              />
            </div>
            <div class="error" v-if="inputErr">
              {{ inputErr }}
            </div>
          </div> -->

          <div class="button q-py-xl q-mt-sm text-center">
            <q-btn type="submit" class="btn q-py-sm q-px-xl">Enroll</q-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";

import axios from "axios";

export default {
  setup() {
    const $q = useQuasar();
    return {};
  },
  data() {
    return {
      inputErr: "",
      form: {
        email: "",
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
        .then((resp) => {
          console.log(resp);
          localStorage.setItem(
            "userDetails",
            JSON.stringify(resp.data.payload)
          );
          this.$q.notify({
            message: "User successfully created, complete you enrollment",
            color: "primary",
            position: "top",
          });
          this.$router.replace("/update");

          console.log(resp);
        })
        .catch(({ response }) => {
          console.log(response);
          if (response.data.error === "User Account Already Exists") {
            this.$q.notify({
              message: response.data.error,
              color: "secondary",
              position: "top",
            });
          }
          // if (response.data.error === "User Account Already Exists") {
          //   axios
          //     .get(
          //       `https://linkedin-signin-prototype.herokuapp.com/api/users/${this.form.email}`
          //     )
          //     .then((resp) => {
          //       console.log(resp);

          //       // alert(resp);
          //       localStorage.setItem(
          //         "userDetails",
          //         JSON.stringify(resp.data.payload)
          //       );
          //       this.$q.notify({
          //         message: "Fill in your profile",
          //         color: "primary",
          //         position: "top",
          //       });
          //       this.$router.replace("/update");
          //     });
          // } else {
          //   console.log(response);
          //   this.inputErr = response.data.error;
          //   setTimeout(() => {
          //     this.inputErr = "";
          //   }, 4000);
          // }
        });
      //   localStorage.setItem("userDetails", JSON.stringify(resp.data.payload));

      //   this.$router.replace("/update");
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 2rem;
}
.login-text {
  margin-top: -10px;
}
.group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 2rem;
  align-items: flex-end;
}
.top-text {
  font-size: 1rem;
}
input::placeholder {
  font-size: 14px;
  opacity: 0.5;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  padding-top: 7rem;
  max-width: 800px;
}

.error {
  color: red;
}

.forgot {
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 900px) {
  .wrapper {
    padding-top: 2rem;
    height: 100%;
  }
  .forgot {
    display: flex;
    justify-content: flex-start;
  }
  .group {
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 2rem;
    align-items: flex-end;
  }
}

.heeder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heeder i {
  font-size: 35px;
}
.heeder .icon {
  cursor: pointer;
}
.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}

.input-wrap,
select {
  width: 100%;
  margin-bottom: 2px;
}
.error {
  font-size: 0.9em;
  color: #ff0000;
}
.input-wrap .input {
  /* border: 1px solid #2b945b; */
  padding: 0.75rem;
  margin: 1rem 0;
  margin-bottom: 2px;
  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.45rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.btn {
  border: none;
  background: #f2594b;

  margin: 1rem;
  border-radius: 60px;
  font-size: 1.1rem !important;
  color: #fff;
  margin: 0.55rem 0;
  padding: 1rem;
  width: 60%;
}

.eight h3 {
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 16px 0;
  grid-gap: 22px;
}

.eight h3:after,
.eight h3:before {
  content: " ";
  display: block;
  border-bottom: 1px solid #ccc;
  /* background-color: #f8f8f8; */
}

.log {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2.5rem auto;
}

.log .wrapp {
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 100%;
  box-shadow: 18.587px 18.587px 37.1739px rgba(211, 209, 216, 0.25);
  border-radius: 28.5px;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 0 1rem;
  /* margin:0 1rem ; */
}
/* .log .wrapp .go{
  height: 30px;
} */
.log .wrapp i {
  font-size: 2rem;
}
.log .wrapp img {
  width: 20px;
  height: 20px;
}
@media (max-width: 500px) {
  .log .wrapp p {
    font-size: 11px;
  }

  .btn {
    width: 90%;
  }
}

.ri-facebook-box-fill {
  color: #4267b2;
}

.ri-google-fill {
  color: #fbbc05;
}

.log .wrap p {
  margin: 0 1rem;
}

.flexx {
  display: flex;
  justify-content: space-between;
}

.q-tab {
  width: 50% !important;
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .log {
    width: 100%;
  }

  .resp {
    padding: 1rem;
    border-radius: 8px;
    font-size: 12px;
  }
}
</style>
