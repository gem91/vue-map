import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/ErrorPage"
import MainPage from "@/components/MainPage"
import TestPage from "@/components/TestPage"

const router = createRouter({
  history : createWebHistory(),
  routes : [ // path별 component를 추가한다.
    { // 잘못된 경로 : ErrorPage
      path : "/:pathMatch(.*)",
      component : ErrorPage
    },
    { 
      path : "/", 
      component : MainPage 
    },
    { 
      path : "/TestPage", 
      component : TestPage 
    },
  ]
});

export default router;