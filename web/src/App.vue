<template>
  <div id="app">
    <div class="row">
      <div class="col s12 m6 l6">
        <div class="card">
          <div class="card-content">
            <h3><b>Add employee</b></h3>
            <div class="row">
              <form class="col s12" v-on:submit.prevent="addEmployee">
                <div class="row">
                  <div class="input-field col s12">
                    <input id="fullname" v-model="employee.create.fullname" placeholder="Full name" type="text" class="validate" required>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12"> <button class="btn indigo waves-effect waves-light col s12" type="submit" name="button">save</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m6 l6">
        <div class="card">
          <div class="card-content">
            <h3><b>Employees list</b></h3>
            <table>
              <thead>
                <tr>
                  <th>key</th>
                  <th>name</th>
                  <th>action</th>
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
                  <td>
                    <button class="btn red waves-effect waves-light" v-on:click="deleteEmployee(index)" type="button" name="button">delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from 'materialize-css'
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
        .post('http://localhost:8081/create',{name: this.employee.create.fullname})
        .then(response => {
          if (response.statusText=="OK") {M.toast({html:"Register ok"});this.getEmployeeList()}
        })
    },
    deleteEmployee: function(key) {
      axios
        .post('http://localhost:8081/delete',{key:key})
        .then(response => {
          if (response.statusText=="OK") {M.toast({html:"Employee deleted"});this.getEmployeeList()}
        })
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
}
</style>
