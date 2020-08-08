<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>item
      </div>
      <input type="text" placeholder="Enter item..." v-model="item.item" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> amount
      </div>
      <input type="text" placeholder="Enter Amount" v-model="item.amount" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> unit
      </div>
      <input type="text" placeholder="Enter unit" v-model="item.unit" />
    </div>
    

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'item-form',
  props: {
    item: {
      type: Object,
      required: false,
      default: () => {
        return {
          item: '',
          amount: '',
          unit: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.item.item1 === '' || this.item.item2 === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.item);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
