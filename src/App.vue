<template>
  <div class="wrapper-app">
    <div class="d-flex">
      <inputDefault 
          v-model="searchValue"
          placeholder="Search"
      />
    </div>
    <home 
      :users="searchValueByName"    
    />
  </div>    
</template>

<script>
import axios from "axios"
import home from '@/components/home.vue'
import inputDefault from '@/components/input-default.vue'
export default {
    name: 'app',
    components: {
      home,
      inputDefault
    },
    data() {
      return {
        users: [],
        searchValue: ''
      }
    },
    methods: {
        async fetchTasks() {
        try {
          const response = await axios.get('http://localhost:3000');
          this.users = response.data;
        } catch (e) {
          alert('Error')
        } 
      },
    },
    mounted() {
      this.fetchTasks();
    },
    computed: {
      searchValueByName() {
            return this.users.filter(user => user.name.toLowerCase().includes(this.searchValue.toLowerCase()))
        }
    }
}
</script>

<style lang="scss">
.wrapper-app {
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 3em;
}
</style>
