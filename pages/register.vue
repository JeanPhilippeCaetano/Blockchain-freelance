<template>
  <v-row align="center" justify="center" style="height: 80vh !important">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      style="min-width: 300px; width: 40vw"
    >
      <v-text-field
        v-model="user.name"
        :rules="[rules.required]"
        label="nom d'utilisateur"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.wallet"
        :rules="[rules.required]"
        label="wallet"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.email"
        :rules="[rules.required, rules.email]"
        label="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.password"
        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.passwordMatch]"
        :type="show3 ? 'text' : 'password'"
        name="input-10-2"
        label="mot de passe"
        value
        @click:append="show3 = !show3"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.password_confirmation"
        :rules="[rules.required, rules.passwordMatch]"
        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show4 ? 'text' : 'password'"
        value
        @click:append="show4 = !show4"
        label="taper de nouveau votre mot de passe"
        required
      ></v-text-field>

      <center>
        <NuxtLink to="/login" class="text-decoration-none">
          <v-btn
            large
            class="ma-5"
            color="white"
            elevation="2"
            style="width: 140px"
            >se connecter</v-btn
          >
        </NuxtLink>
        <v-btn
          style="color: white; width: 140px"
          large
          class="ma-5"
          color="purple darken-3"
          elevation="2"
          :disabled="!valid"
          @click.prevent="register()"
          >s'inscrire</v-btn
        >
      </center>
    </v-form>
    <Error :error="error" />
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      rules: {
        required: (value) => !!value || 'required',
        passwordMatch: (value) =>
          this.user.password === value ||
          "The passwords you entered don't match",
        email: (value) => {
          const pattern = /.+@.+\..+/
          return pattern.test(value) || 'invalid email'
        },
      },
      select: null,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      error: [],
      success: false,
      show3: false,
      show4: false,
    }
  },
  methods: {
    showScore(score) {
      this.score = score
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async register() {
      await this.validate()
      this.$store.commit('setUser', { ...this.user, money: 0.2 })
      if (this.valid) {
        this.$router.push('/project/list')
      }
    },
  },
}
</script>
