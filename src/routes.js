import { createRouter, createWebHistory } from "vue-router";

import HomePage from '@/components/HomePage';
import Rooms from '@/components/Rooms';
import RoomDetails from '@/components/RoomDetails';

const router = createRouter({
  routes : [
    {
      path : '/',
      component : HomePage
    },
    {
      path : '/Rooms',
      component : Rooms
    },
    {
      path : '/RoomDetails/:id',
      component : RoomDetails
    }
  ],
  history : createWebHistory()
})

export default router;