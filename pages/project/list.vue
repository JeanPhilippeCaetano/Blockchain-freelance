<template>
  <div class="d-flex flex-wrap flex-column">
    <div class="text-h3 mb-6">Mes projets</div>
    <div class="d-flex flex-wrap">
      <v-card
        v-for="project in $store.state.projects"
        :key="project"
        class="ma-4"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="project.picture"
        >
        </v-img>
        <v-card-title class="mb-2"> {{ project.title }} </v-card-title>

        <v-card-subtitle class="pb-0"> Description </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ project.description }}</div>
        </v-card-text>

        <v-card-subtitle class="pb-0"> Compétences requises</v-card-subtitle>

        <v-card-text class="text--primary">
          <div v-for="skill in project.skills" :key="skill">{{ skill }}</div>
        </v-card-text>

        <div class="mb-2"></div>

        <v-card-actions>
          <NuxtLink class="nuxtlink" :to="`/project/${project.id}`">
            <v-btn color="purple darken-3 white--text"> Details </v-btn></NuxtLink
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>
