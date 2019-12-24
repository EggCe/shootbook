<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3>Schießkladde</h3>
        </v-col>
      </v-row>

      <v-form>
        <v-row>
          <v-col cols="5">
            <v-text-field v-model="shooter.name" label="Vorname" required></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field v-model="shooter.surname" label="Nachname" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-checkbox v-model="shooter.gk" label="Großkaliber" required></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox v-model="shooter.kk" label="Kleinkaliber" required></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox v-model="shooter.pauschale" label="Pauschale" required></v-checkbox>
          </v-col>
        </v-row>
        <v-btn class="success" @click="saveShooter()">Speichern</v-btn>
      </v-form>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "home",
  components: {},
  data: () => {
    return {
      date: 0,
      shooter: {
        name: "",
        surname: "",
        gk: false,
        kk: false,
        pauschale: false
      }
    };
  },
  methods: {
    saveShooter() {
      // eslint-disable-next-line no-console
      console.log(this.shooter);
    }
  }
};
</script>
