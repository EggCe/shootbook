<template>
  <v-container>
    <v-card>
      <v-card-title>
        Schießkladde
        <v-spacer></v-spacer>
        <v-text-field v-model="search" label="Suche" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="shooters"
        :items-per-page="5"
        :search="search"
        dark
        class="elevation-1"
      >
        <template v-slot:item.gk="{ item }">
          <v-chip :color="getColor(item.gk)" dark></v-chip>
        </template>
        <template v-slot:item.kk="{ item }">
          <v-chip :color="getColor(item.kk)" dark></v-chip>
        </template>
        <template v-slot:item.pauschale="{ item }">
          <v-chip :color="getColor(item.pauschale)" dark></v-chip>
        </template>
      </v-data-table>
    </v-card>
    <v-btn @click="createPDF()" />
  </v-container>
</template>

<script>
import axios from "axios";
import jsPDF from "jspdf";

export default {
  name: "home",

  data: () => {
    return {
      date: new Date(),
      search: "",
      shooters: [],
      headers: [
        { text: "Vorname", value: "name" },
        { text: "Nachname", value: "last_name" },
        { text: "Großkaliber", value: "gk" },
        { text: "Kleinkaliber", value: "kk" },
        { text: "Pauschale", value: "pauschale" }
      ]
    };
  },
  mounted() {
    this.getEintraege();
  },
  methods: {
    getEintraege() {
      axios.get("http://localhost:3000/eintraege").then(response => {
        // eslint-disable-next-line no-console
        this.shooters = response.data.ergebnis;
      });
    },
    createPDF() {
      let pdfName = "test";
      var doc = new jsPDF();
      doc.text("schießkladde", 10, 10);

      for (let shooter in this.shooters) {
        let name = shooter.name;
        doc.text(name, 20, 10);
      }

      doc.save(pdfName + ".pdf");
    },
    getColor(item) {
      if (item === 0) return "black";
      else if (item === 1) return "green";
    }
  }
};
</script>
