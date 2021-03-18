<template>
  <div id="app">
    <div class="app-container">
      <HierarchyTable msg="Welcome to Your PrimeVue App"/>
      <form @submit.prevent="greet">
        <InputText type="text" v-model="text"/>
        <Button type="submit" label="Submit"/>
        <h3>{{ message }}</h3>
      </form>
    </div>

    <Toast/>
  </div>
</template>

<script>
import HierarchyTable from './components/hierarchy-table/hierarchy-table'

export default {
  data() {
    return {
      message: null,
      text: null
    }
  },
  methods: {
    greet() {
      this.$toast.add({severity: 'info', summary: 'Hello ' + this.text});
      this.message = 'Hello ' + this.text;
    }
  },
  components: {
    HierarchyTable
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  text-align: center;
}

body #app .p-button {
  margin-left: .2em;
}

form {
  margin-top: 2em;
}
</style>
