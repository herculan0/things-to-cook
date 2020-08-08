<template>
  <div>
    <h1>Edit item</h1>
    <item-form @createOrUpdate="createOrUpdate" :item=this.item></item-form>
  </div>
</template>

<script>
import itemForm from '../components/ItemForm.vue';
import { api } from '../helpers/Helpers.js';

export default {
  name: 'edit',
  components: {
    'item-form': itemForm
  },
  data: function() {
    return {
      item: {}
    };
  },
  methods: {
    createOrUpdate: async function(item) {
      await api.updateitem(item);
      this.flash('item updated sucessfully!', 'success');
      this.$router.push(`/items/${item._id}`);
    }
  },
  async mounted() {
    this.item = await api.getitem(this.$route.params.id);
  }
};
</script>
