import Vue from 'vue';
import Router from 'vue-router';
import Items from './views/Items.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/items'
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/items/new',
      name: 'new-item',
      component: New
    },
    {
      path: '/items/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/items/:id/edit',
      name: 'edit',
      component: Edit
    }
   
  ]
});
