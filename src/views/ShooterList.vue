<template>
  <div class="shooterlist">
    <img alt="Vue logo" src="../assets/logo.png" />
    Liste
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  mounted() {
    this.getEintraege();
  },
  methods: {
    getEintraege() {
      axios.get("http://localhost:3000/eintraege").then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
    }
  }
};
</script>
