<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar color="purple darken-3 white--text">
        <NuxtLink class="nuxtlink" to="/project/list">
          <v-toolbar-title>CryptoFreelance</v-toolbar-title>
        </NuxtLink>
        <div class="mr-7"></div>
        <v-spacer></v-spacer>
        <div v-if="$store.state.user.money" class="mr-4">{{ $store.state.user.money }} ETH</div>
        <div class="mr-4">{{ $store.state.user.name }}</div>
      </v-app-bar>
    </v-card>
    <v-main class="ma-8">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer color="purple darken-3 white--text">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
.nuxtlink {
  text-decoration: none !important;
  color: white !important;
}
</style>