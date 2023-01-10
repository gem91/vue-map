import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/pages/ErrorPage"

import MainView from "@/components/pages/main/MainView"
import FoodMapView from "@/components/pages/FoodMapView/FoodMapView"
import ContactView from "@/components/pages/ContactView/ContactView"
import TestPage from "@/components/pages/TestPage"



const router = createRouter({
  history : createWebHistory(),
  routes : [ // path별 component를 추가한다.
    { 
      path : "/", 
      component : MainView,
      meta: {
        title: "메인"
      }
    },
    { 
      path : "/foodMap", 
      component : FoodMapView,
      meta: {
        title: "맛지도"
      }
    },
    { 
      path : "/contact", 
      component : ContactView,
      meta: {
        title: "연락해!!"
      }
    },
    { 
      path : "/TestPage", 
      component : TestPage,
      meta: {
        title: "Test"
      }
    },
    { // 잘못된 경로 : ErrorPage
      path : "/:pathMatch(.*)",
      component : ErrorPage,
      meta: {
        title: "에러났지롱"
      }
    },
  ]
});

router.afterEach((to) => {
  document.title = to.meta.title
});

export default router;