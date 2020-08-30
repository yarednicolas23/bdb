<template>
  <div id="app">
    <div class="row">
      <div class="col s12 m6 l6">
        <h3>Add employee</h3>
        <div class="row">
          <form class="col s12" v-on:submit.prevent="addEmployee">
            <div class="row">
              <div class="input-field col s12">
                <input id="fullname" v-value="employee.create.fullname" type="text" class="validate" required>
                <label for="fullname">Full Name</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12"> <button type="submit" name="button"></button> </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col s12 m6 l6">
        <h3>Employee list</h3>
        <table>
          <thead>
            <tr>
              <th>key</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in this.employee.list" v-bind:key="index">
              <td>
                {{index}}
              </td>
              <td>
                {{item.fullname}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.css'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      employee:{create:{fullname:''},list:[]}
    }
  },
  mounted () {
    this.getEmployeeList()
  },
  methods:{
    getEmployeeList: function() {
      axios
        .get('http://localhost:8081/read')
        .then(response => (this.employee.list = response.data))
    },
    addEmployee: function() {
      axios
        .post('http://localhost:8081/create',{fullname: this.employee.create.fullname})
        .then(response => (this.employee.list = response.data))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
