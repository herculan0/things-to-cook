<template>
  <div>
    <h1>New item</h1>
    <item-form @createOrUpdate="createOrUpdate"></item-form>
  </div>
</template>

<script>
import itemForm from '../components/ItemForm.vue';
import { api } from '../helpers/Helpers.js';
export default {
  name: 'new-item',
  components: {
    'item-form': itemForm
  },
  methods: {
    createOrUpdate: async function(item) {
      const res = await api.createitem(item);
      this.flash('item created', 'success');
      this.$router.push(`/items/${res._id}`);
    }
  }
};
</script>
