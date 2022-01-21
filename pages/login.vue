<template>
  <v-row align="center" justify="center" style="height: 80vh !important">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      style="min-width: 300px; width: 40vw"
    >
      <v-text-field
        v-model="user.email"
        :rules="[rules.required, rules.email]"
        label="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.password"
        type="password"
        :rules="[rules.required]"
        name="input-10-2"
        label="mot de passe"
        value
        required
      ></v-text-field>

      <center>
        <NuxtLink to="/register" class="text-decoration-none">
          <v-btn
            large
            class="ma-5"
            color="white"
            elevation="2"
            style="width: 140px"
            >s'inscrire</v-btn
          >
        </NuxtLink>
        <v-btn
          style="color: white; width: 140px"
          large
          class="ma-5"
          color="purple darken-3"
          elevation="2"
          :disabled="!valid"
          @click.prevent="login()"
          >se connecter</v-btn
        >
      </center>
    </v-form>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      rules: {
        required: (value) => !!value || 'required',
        email: (value) => {
          const pattern = /.+@.+\..+/
          return pattern.test(value) || 'invalid email'
        }
      },
      select: null,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    async login () {
      await this.validate()
    }
  }
}

</script>
