<template lang="jade">
div
  p {{ greeting }} World!
  OtherComponent
  <input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>
</template>

<script>
import OtherComponent from "./OtherComponent.vue";
export default {
  components: {
    OtherComponent,
  },
  data() {
    return {
      greeting: "Hello",
    };
  },
};
</script>

<style lang="stylus" scoped>
p
  font-size 2em
  text-align center
</style>
