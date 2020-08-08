<template>
  <div>
    <h1>Show item</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="items icon"></i>  Item
      </div>
      <input type="text" readonly  :value="item.item"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i> Details
      </div>
      <input type="text" readonly  :value="item.amount"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i> Details
      </div>
      <input type="text" readonly  :value="item.unit"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit item
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers.js';
export default {
  name: 'show',
  data() {
    return {
      item: ''
    };
  },
  async mounted() {
    this.item = await api.getitem(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
