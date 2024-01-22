import { createRouter, createWebHistory } from "vue-router";

import HomePage from '@/components/HomePage';
import RoomsPage from '@/components/RoomsPage';
import RoomDetailsPage from '@/components/RoomDetailsPage';

const router = createRouter({
  routes : [
    {
      path : '/',
      component : HomePage
    },
    {
      path : '/RoomsPage',
      component : RoomsPage
    },
    {
      path : '/RoomDetailsPage/:id',
      component : RoomDetailsPage
    }
  ],
  history : createWebHistory()
})

export default router;