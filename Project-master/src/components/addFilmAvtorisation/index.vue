<template>
  <section>
    <img
      :src="signInIcon"
      alt="sign Ip"
      title="добавить фильм"
      class="sign-in"
      @click="isComponentModalActive = true"
    />

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Добавить фильм</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Login">
            <b-input type="text" v-model="email" placeholder="Your login" required></b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              v-model="password"
              password-reveal
              placeholder="Your password"
              required
            ></b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="close()">Close</button>

          <router-link to="/add-film">
            <button class="button is-primary" @click="login()">Login</button>
          </router-link>
        </footer>
      </div>
    </b-modal>
  </section>
</template>

<script>
import signInIcon from "@/assets/icons/addFilm.png";
import { mapActions } from "vuex";

export default {
  name: "addFilmAvtorisation",

  data() {
    return {
      isComponentModalActive: false,
      email: "",
      password: "",
      signInIcon
    };
  },

  methods: {
    ...mapActions(["adminValidation"]),

    close() {
      this.isComponentModalActive = false;
    },

    login() {
      if (this.email && this.password.length > 0) {
        this.adminValidation({ email: this.email, password: this.password });
        this.isComponentModalActive = false;
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 30px;
  height: 30px;
  margin-top: 4px;
  cursor: pointer;
  margin-right: 40px;
}
.modal-card-title {
  color: rgb(0, 0, 0);
}

</style>