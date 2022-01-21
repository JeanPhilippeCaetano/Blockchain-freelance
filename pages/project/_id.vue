<template>
  <div v-if="project">
    <div>
      <div class="text-h3">{{ project.title }}</div>
      <div class="d-flex flex-wrap">
        <v-card
          width="300"
          height="300"
          class="d-flex justify-start align-start pa-4 ma-4 flex-column"
        >
          <div>description</div>
          <div class="card-center">{{ project.description }}</div>
        </v-card>

        <v-card
          width="300"
          height="300"
          class="d-flex justify-start align-start pa-4 ma-4 flex-column"
        >
          <div>compétences requises</div>
          <div class="card-center flex-column">
            <div v-for="skill in project.skills" :key="skill">
              - {{ skill }}
            </div>
          </div>
        </v-card>

        <v-card
          width="300"
          height="300"
          class="d-flex justify-start align-start pa-4 ma-4 flex-column"
        >
          <div>freelancer</div>
          <div class="card-center flex-column" v-if="project.hasFreelancer">
            <div>{{ project.freelancer.name }}</div>
            <div>pour {{ project.freelancer.price }} ETH</div>
            <v-btn class="mt-4" color="purple darken-3 white--text" @click="fire">
              renvoyer
            </v-btn>
            <v-btn class="mt-4" color="purple darken-3 white--text" @click="pay">
              payer
            </v-btn>
          </div>
          <div class="card-center" v-else>
            vous n'avez actuellement pas recruté de freelancer
          </div>
        </v-card>

        <v-card
          width="600"
          height="300"
          class="d-flex justify-start align-start pa-4 ma-4 flex-column"
        >
          <div>étapes</div>
          <div class="card-center flex-column pa-4">
            <v-stepper
              width="100%"
              alt-labels
              v-model="$store.state.details.advancement"
            >
              <v-stepper-header>
                <v-stepper-step step="1">définir projet</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="2">
                  trouver freelancer
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                  créer logo
                </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </div>
        </v-card>
      </div>

      <v-card class="ma-4">
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="`pour ${item.price} ETH`"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  :disabled="project.hasFreelancer"
                  color="purple darken-3 white--text"
                  @click="recrut(item)"
                >
                  recruter
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-card>

      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="purple darken-3 white--text"
            v-bind="attrs"
            @click="snackbar = false"
          >
            fermer
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      items: [
        { header: 'Propositions de candidature' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: 'Tommy Cartsland',
          price: 0.001,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: 'Etienne Borges',
          price: 0.004,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          name: 'Emilie Dubois',
          price: 0.0015,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          name: 'Stéphanie Courla',
          price: 0.002,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          name: 'Léa Cartel',
          price: 0.0014,
        },
      ],
      snackbar: false,
      text: '',
    }
  },
  methods: {
    recrut(freelancer) {
      this.$store.commit('modify', {
        id: this.$store.state.details.id,
        payload: { hasFreelancer: true, freelancer, advancement: 3 },
      })
      this.text = `le freelancer ${this.$store.state.details.freelancer.name} a été embauché`
      this.snackbar = true
    },
    fire() {
      this.text = `le freelancer ${this.$store.state.details.freelancer.name} a été renvoyé`
      this.$store.commit('modify', {
        id: this.$store.state.details.id,
        payload: { hasFreelancer: false, freelancer: {}, advancement: 2 },
      })
      this.snackbar = true
    },
    pay() {
      this.text = `le freelancer ${this.$store.state.details.freelancer.name} a été payé ${this.$store.state.details.freelancer.price}`
      this.$store.commit('takeUserMoney', {
        moneyToTake: this.$store.state.details.freelancer.price,
      })
      this.$store.commit('modify', {
        id: this.$store.state.details.id,
        payload: { hasFreelancer: false, freelancer: {}, advancement: 4 },
      })
      this.snackbar = true
    },
  },
  computed: {
    project() {
      return this.$store.state.details
    },
  },
  created() {
    this.$store.commit('setDetails', this.$route.params.id)
  },
}
</script>

<style>
.card-center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>