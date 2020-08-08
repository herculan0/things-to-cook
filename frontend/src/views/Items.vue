<template>
  <div>
    <h1>items</h1>
    <table id="items" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="calendar plus icon"></i>Item</th>
          <th> <i class="info circle icon"></i>Detail</th>
                    <th> <i class="lock open icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>

          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(item, i) in items" :key="i">
        <td>{{ item.item }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.unit }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: item._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: item._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(item._id)">
          <a :href="`/items/${item._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers.js';
export default {
  name: 'items',
  data() {
    return {
      items: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteitem(id);
      this.flash('item deleted sucessfully!', 'success');
      const newitems = this.items.filter(item => item._id !== id);
      this.items = newitems;
    }
  },
  async mounted() {
    this.items = await api.getitems();
  }
};
</script>
