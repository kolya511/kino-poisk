<template>
  <section>
    <img
      :src="signInIcon"
      alt="sign Ip"
      title="sign in"
      class="sign-in"
      @click="isComponentModalActive = true"
    />

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <form action>
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input type="email" :value="email" placeholder="Your email" required></b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                :value="password"
                password-reveal
                placeholder="Your password"
                required
              ></b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="close()">Close</button>
            <button class="button is-primary">Login</button>
          </footer>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import signInIcon from "@/assets/icons/sign-in.svg";

export default {
  name: "SignIn",

  data() {
    return {
      isComponentModalActive: false,
      email: "",
      password: "",
      signInIcon
    };
  },

  methods: {
      close() {
      this.isComponentModalActive = false;
    }
  },
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