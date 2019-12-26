<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3>Schießkladde am {{date.getDate()}}.{{date.getMonth()+1}}.{{date.getFullYear()}}</h3>
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
import axios from "axios";
export default {
  name: "home",
  components: {},
  data: () => {
    return {
      date: new Date(),
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
      axios
        .post("http://localhost:3000/neweintrag", {
          shooter: this.shooter
        })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.shooter = {
            name: "",
            surname: "",
            gk: false,
            kk: false,
            pauschale: false
          };
        });
    }
  }
};
</script>
