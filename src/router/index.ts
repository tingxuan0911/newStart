import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/stores/app";
import { usePersistedStateStore } from "@/stores/persistedState";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/match-list",
          name: "matchList",
          component: () => import("@/views/MatchList.vue"),
        },
        {
          path: "/rolling-ball-subscription",
          name: "rollingBallSubscription",
          component: () => import("@/views/RollingBallSubscription.vue"),
        },
        {
          path: "/control-football",
          name: "controlFootball",
          component: () => import("@/views/ControlFootball.vue"),
        },
        {
          path: "/control-baseball",
          name: "controlBaseball",
          component: () => import("@/views/ControlBaseball.vue"),
        },
        {
          path: "/control-basketball",
          name: "controlBasketball",
          component: () => import("@/views/ControlBasketball.vue"),
        },
        {
          path: "/control-ball-classification",
          name: "controlBallClassification",
          component: () => import("@/views/ControlBallClassification.vue"),
        },
        {
          path: "/maximum-compensation",
          name: "maximumCompensation",
          component: () => import("@/views/MaximumCompensation.vue"),
        },
        {
          path: "/play-list",
          name: "playList",
          component: () => import("@/views/PlayList.vue"),
        },
        {
          path: "/play-management",
          name: "playManagement",
          component: () => import("@/views/PlayManagement.vue"),
        },
        {
          path: "/alliance-level-management",
          name: "allianceLevelManagement",
          component: () => import("@/views/AllianceLevelManagement.vue"),
        },
        {
          path: "/alliance-management",
          name: "allianceManagement",
          component: () => import("@/views/AllianceManagement.vue"),
        },
        {
          path: "/team-management",
          name: "teamManagement",
          component: () => import("@/views/TeamManagement.vue"),
        },
        {
          path: "/history-football",
          name: "historyFootball",
          component: () => import("@/views/HistoryFootball.vue"),
        },
        {
          path: "/history-baseball",
          name: "historyBaseball",
          component: () => import("@/views/HistoryBaseball.vue"),
        },
        {
          path: "/history-basketball",
          name: "historyBasketball",
          component: () => import("@/views/HistoryBasketball.vue"),
        },
        {
          path: "/history-ball-classification",
          name: "historyBallClassification",
          component: () => import("@/views/HistoryBallClassification.vue"),
        },
        {
          path: "/settlement",
          name: "settlement",
          component: () => import("@/views/Settlement.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  appStore.checkMobile();
  // 抓token
  const persistedStateStore = usePersistedStateStore();
  const token = persistedStateStore.token;
  // 檢查是否登入
  if (!token && to.name !== "login") {
    next("/login"); // 重定向到登入頁
  } else {
    next(); // 允許路由進行
  }
});

export default router;
