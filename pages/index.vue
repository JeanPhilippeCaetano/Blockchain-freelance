<template>
  <v-progress-linear indeterminate color="purple darken-2"></v-progress-linear>
</template>

<script>
export default {
  created() {
    if (Object.keys(this.$store.state.user).length > 0) {
      this.$router.push('/project/list')
    }
    this.$router.push('/login')
  },
}
</script>
