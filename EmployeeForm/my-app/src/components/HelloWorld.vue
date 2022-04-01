<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>Is New Employee?</p>
    <input type="radio" id="yes" value="Yes" v-model="picked" />
    <label for="yes">Yes</label>

    <input type="radio" id="no" value="No" v-model="picked" />
    <label for="no">No</label>
    <br />
    <input v-model="message" placeholder="edit me" />
    <br />
    <label style="padding-right: 20px" for="selected">Gender</label>
    <select v-model="selected">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      selected: "",
      newemployee: [],
      message: "",
      picked: "Yes",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 5px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
