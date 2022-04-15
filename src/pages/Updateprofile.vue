<template>
  <div class="wrapper container q-pt-xl">
    <!-- <p class="top-text text-left text-weight-bold text-primary">
      Sign Up
    </p> -->

    <!-- {{ form }} -->

    <div class="eight q-my-lg">
      <h3><span class="login-text">Apply</span></h3>
    </div>

    <!-- <div class="text-red q-mb-sm">
      {{ resp }}
    </div> -->
    <div class="error" v-if="inputErr">
      {{ inputErr }}
    </div>
    <form @submit.prevent="submit">
      <div class="input-wrap">
        <label class="text-primary" for="">Name</label> <br />

        <div class="input">
          <i class="ri-user-fill q-mr-md text-primary"></i>

          <input
            disabled
            type="email"
            v-model="form.name"
            placeholder="Ademola"
          />
        </div>
      </div>
      <div class="input-wrap">
        <label class="text-primary" for="">Email</label> <br />

        <div class="input">
          <i class="ri-mail-line q-mr-md text-primary"></i>

          <input
            disabled
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div class="input-wrap">
        <label class="text-primary" for="">Linkedin Profile URL</label> <br />

        <div class="input">
          <i class="ri-shield-user-fill q-mr-md text-primary"></i>

          <input
            disabled
            type="text"
            name=""
            id="te"
            v-model="form.linkedin_url"
          />
        </div>
      </div>

      <!-- <div class="input-wrap">
        <label class="text-primary" for="">City/State of Residence</label>
        <br />

        <div class="input">
          <i class="ri-mail-line q-mr-md text-primary"></i>

          <input
            
            type="email"
            v-model="form.city"
            placeholder="Enter your city"
          />
        </div>
      </div> -->
      <div class="two">
        <div class="input-wrap">
          <label class="text-primary" for="">Time zone (for assigning to a learning group) </label> <br />

          <div class="input">
            <i class="ri-time-fill q-mr-md text-primary"></i>

            <input type="text" v-model="form.timezone" placeholder="Timezone" />
          </div>
        </div>
        <div class="input-wrap">
          <label class="text-primary" for="">Phone Number</label> <br />

          <div class="input">
            <i class="ri-phone-fill q-mr-md text-primary"></i>

            <input
              type="text"
              v-model="form.phone"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>

      <div class="two">
        <div class="input-wrap">
          <label class="text-primary" for="">Minority Representation</label>
          <br />

          <div class="input">
            <i class="ri-apps-fill q-mr-md text-primary"></i>

            <select name="gender" v-model="form.representation" id="">
              <option value="native american">Native American</option>
              <option value="alaska native">Alaska Native</option>
              <option value="black">Black</option>
              <option value="hispanic">Hispanic</option>
              <option value="pacific islander">Pacific Islander</option>
              <option value="southeast asian">Southeast Asian</option>
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
              <option value="non binary">Non Binary</option>
              <option value="prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </div>
      <div class="two">
        <div class="input-wrap">
          <label class="text-primary" for="">Age Group</label>
          <br />

          <div class="input">
            <i class="ri-calendar-fill q-mr-md text-primary"></i>

            <select name="gender" v-model="form.age_group" id="">
              <option value="16 - 17">16 - 17</option>
              <option value="18 - 24">18 - 24</option>
              <option value="25 - 34">25 - 34</option>
              <option value="35 - 44">35 - 44</option>
              <option value="45 - above">45 - above</option>
              <option value="prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
        <div class="input-wrap">
          <label class="text-primary" for="">Employment status</label>
          <br />

          <div class="input">
            <i class="ri-star-fill q-mr-md text-primary"></i>

            <select name="gender" v-model="form.employment_status" id="">
              <option value="Employed full-time">Employed full-time</option>
              <option value="Employed part-time">Employed part-time</option>
              <option value="Self-employed ">Self-employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
        </div>
      </div>
      <div class="input-wrap">
        <label class="text-primary" for=""
          >Highest level of school completed:
        </label>
        <br />

        <div class="input">
          <i class="ri-book-fill q-mr-md text-primary"></i>

          <select name="gender" v-model="form.highest_school" id="">
            <option value="No diploma">No diploma</option>
            <option value="High school ">High school</option>
            <option value="College – no degree">College – no degree</option>
            <option value="Trade/technical/vocational training">
              Trade/technical/vocational training
            </option>
            <option value="Associate Degree">Associate Degree</option>

            <option value="Bachelor’s Degree">
              Bachelor’s Degree (list major)
            </option>

            <option value="Master’s Degree">
              Master’s Degree (list major)
            </option>
            <option value="Post-graduate study">Post-graduate study</option>
          </select>
        </div>
      </div>

      <div class="two">
        <div class="input-wrap">
          <label class="text-primary" for="">How many hours per week are you able to commit to this program (dedicated to learning, doing assignments, and peer/instructor interaction) over the seven months you are enrolled? </label> <br />

          <div class="input">
            <i class="ri-timer-fill q-mr-md text-primary"></i>

            <select name="gender" v-model="form.hours_per_week" id="">
              <option value="15 hours per week">
                15 hours per week (minimum)
              </option>
              <option value="16 - 24 hours per week">
                16 - 24 hours per week
              </option>
              <option value="25 - 40 hours per week">
                25 - 40 hours per week
              </option>
            </select>
          </div>
        </div>
        <div class="input-wrap">
          <label class="text-primary" for="">Are you authorized to work in the United States? </label> <br />
          <div class="input">
            <i class="ri-flag-fill q-mr-md text-primary"></i>

            <select name="gender" v-model="form.can_work_in_usa" id="">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <div class="three">
        <div class="input-wrap">
          <label class="text-primary" for="">Which learning track are you considering? </label> <br />

          <div class="input">
            <i class="ri-bookmark-fill q-mr-md text-primary"></i>

            <select name="gender" v-model="form.learning_track" id="">
              <option value="Full-Stack Web Development">
                Full-Stack Web Development
              </option>
              <option value="UI/UX Product Design">UI/UX Product Design</option>
              <option value="Undecided “Learner Category">
                Undecided “Learner Category”?
              </option>
            </select>
          </div>
        </div>
        <div class="input-wrap">
          <label class="text-primary" for="">Which best describes your tech experience: </label> <br />

          <div class="input">
            <i class="ri-inbox-fill q-mr-md text-primary"></i>

            <select name="gender" v-model="form.tech_experience" id="">
              <option value="No experience">
                No experience – This will be completely new information.
              </option>
              <option value="Some experience/novice">
                Some experience/novice - Self-learner. I've familiarized myself
                through self-learning or introductory concepts but haven’t moved
                into the application of the skills.
              </option>
              <option value=" Experienced/advanced beginner">
                Experienced/advanced beginner? - I’ve acquired many of the
                skills and can put together simple projects, but don’t yet have
                a deep understanding or entry-level skills.
              </option>
            </select>
          </div>
        </div>
        <div class="input-wrap">
          <label class="text-primary" for=""> How did you hear about us? </label> <br />

          <div class="input">
            <i class="ri-funds-line q-mr-md text-primary"></i>

            <select name="gender" v-model="form.referral" id="">
              <option value="Social media">Social media</option>
              <option value="Google or another search engine">
                Google or another search engine
              </option>
              <option value="Friend/Family/Word of Mouth">
                Friend/Family/Word of Mouth
              </option>
              <option value="News Outlet">News Outlet</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
      </div>

      <div class="button q-py-xl q-mt-sm text-center">
        <!-- <button class="btn">Register</button> -->
        <q-btn type="submit" class="btn q-py-sm q-px-xl">Apply</q-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { useQuasar, QSpinnerFacebook } from "quasar";
import { onBeforeUnmount } from "vue";
import { QSpinnerGears } from "quasar";
import axios from "axios";

export default {
  setup() {
    const $q = useQuasar();
    let timer;

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    return {
      showLoading() {
        $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: "primary",
          spinnerSize: 140,
          backgroundColor: "#ca7c06",
          message: "Signing you up, hold on...",
          messageColor: "black",
        });
      },
    };
  },
  data() {
    return {
      inputErr: "",
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
      //   const formData = new FormData(document.querySelector("#form"));

      let resp = await axios
        .put(
          `https://linkedin-signin-prototype.herokuapp.com/api/users/${this.form.email}`
        )
        .catch(({ response }) => {
          this.inputErr = response.data.error;
          setTimeout(() => {
            this.inputErr = "";
          }, 4000);
        });
      this.$q.notify({
        message: "Application Successful",
        color: "primary",
        position: "top",
      });

      console.log(resp);
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 4px;
}

.login-text {
  margin-top: -10px;
}

.wrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-top: 5rem; */
  max-width: 1300px;

  height: 100%;
}
input::placeholder {
  font-size: 12px;
  opacity: 0.5;
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

.error {
  color: red;
}

.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}
.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
}

.three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
}
.input-wrap,
select {
  width: 100%;
  margin-bottom: 2px;
  margin-top: 1.5rem;
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
  background-color: #fff;
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  font-size: 1.1rem !important;
  background: #f2594b;

  border-radius: 60px;
  color: #fff;
  margin: 0.55rem 0;
  padding: 1rem;
  width: 50%;
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

.log .wrapp i {
  font-size: 2rem;
}
.log .wrapp img {
  width: 20px;
  height: 20px;
}

@media (max-width: 900px) {
  .three {
    grid-template-columns: 1fr;
  }
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
@media (max-width: 500px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .log {
    width: 100%;
  }
  .two {
    grid-template-columns: 1fr;
  }
  .resp {
    padding: 1rem;
    border-radius: 8px;
    font-size: 12px;
  }
}
</style>
