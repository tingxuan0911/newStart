<script setup lang="ts">
import { ref, toRef } from "vue";
import { useRouter } from "vue-router";
import svgIcon from "@/components/SvgIcon.vue";
import logo from "@/assets/img/logo.png";

// store
import { useSidebarStore } from "@/stores/sidebar";
const sidebarStore = useSidebarStore();

const noCollapse = toRef(sidebarStore.noCollapse); //收合功能是否開啟
const isCollapse = ref<boolean>(true); //menu左右收合
const router = useRouter();
const currentRoute = router.currentRoute.value;
const activeIndex = ref(currentRoute.name as string); //menu選擇

// 展開menu
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
  const titleElement = document.querySelector(
    `[index="${key}"] .el-sub-menu__title`
  );
  if (titleElement) {
    titleElement.classList.add("title-selected");
  }
};

// 收起menu
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
  const titleElement = document.querySelector(
    `[index="${key}"] .el-sub-menu__title`
  );
  if (titleElement) {
    titleElement.classList.remove("title-selected");
  }
};

//menu選擇
const handleSelect = (index: string) => {
  activeIndex.value = index;
  const routeMap: { [key: string]: string } = {
    matchList: "matchList",
    rollingBallSubscription: "rollingBallSubscription",
    controlFootball: "controlFootball",
    controlBaseball: "controlBaseball",
    controlBasketball: "controlBasketball",
    controlBallClassification: "controlBallClassification",
    maximumCompensation: "maximumCompensation",
    playList: "playList",
    playManagement: "playManagement",
    allianceLevelManagement: "allianceLevelManagement",
    allianceManagement: "allianceManagement",
    teamManagement: "teamManagement",
    historyFootball: "historyFootball",
    historyBaseball: "historyBaseball",
    historyBasketball: "historyBasketball",
    historyBallClassification: "historyBallClassification",
    settlement: "settlement",
  };

  if (routeMap[index]) {
    router.push({ name: routeMap[index] });
  }
};

// noCollapse=false時，滑鼠移入展開menu
const handleMouseOver = () => {
  if (noCollapse.value == false) {
    isCollapse.value = true;
  }
};
// noCollapse=false時，滑鼠移出收起menu
const handleMouseLeave = () => {
  if (noCollapse.value == false) {
    isCollapse.value = false;
  }
};
</script>
<template>
  <div
    :class="[
      ' h-dvh bg-white',
      {
        'w-[86px] RWDcloseContainer': !isCollapse,
      },
      {
        ' RWDcontainer': isCollapse,
      },
    ]"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <div class="flex justify-between items-center px-[14px] py-[28px]">
      <img
        :src="logo"
        alt=""
        :class="[
          '  duration-300',
          { 'w-[100px] h-[12px]': isCollapse },
          {
            'w-[70px] h-[8px]': !isCollapse,
          },
        ]"
      />

      <el-switch
        v-if="isCollapse"
        v-model="noCollapse"
        class="ml-2"
        style="
          --el-switch-on-color: var(--color-blue);
          --el-switch-off-color: #bbbbbb;
        "
      />
    </div>

    <el-menu
      :default-active="activeIndex"
      @select="handleSelect"
      class="el-menu-vertical-demo"
      unique-opened
      :collapse="!isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <svg-icon name="matchList" />
          </el-icon>
          <span>賽式列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="matchList">賽式列表</el-menu-item>
          <el-menu-item index="rollingBallSubscription">滾球訂閱</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title>
          <el-icon> <svg-icon name="controlPanel" /></el-icon>
          <span>控盤</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="controlFootball">足球</el-menu-item>
          <el-menu-item index="controlBaseball">棒球</el-menu-item>
          <el-menu-item index="controlBasketball">籃球</el-menu-item>
          <el-menu-item index="controlBallClassification"
            >球種分類</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <el-icon><svg-icon name="playManage" /></el-icon>
          <span>玩法與聯盟管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="maximumCompensation">站台最高賠付</el-menu-item>
          <el-menu-item index="playList">玩法列表</el-menu-item>
          <el-menu-item index="playManagement">玩法管理</el-menu-item>
          <el-menu-item index="allianceLevelManagement"
            >聯盟等級管理</el-menu-item
          >
          <el-menu-item index="allianceManagement">聯盟管理</el-menu-item>
          <el-menu-item index="teamManagement">球隊管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu index="4">
        <template #title>
          <el-icon><svg-icon name="historical" /></el-icon>
          <span>歷史賽事</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="historyFootball">足球</el-menu-item>
          <el-menu-item index="historyBaseball">棒球</el-menu-item>
          <el-menu-item index="historyBasketball">籃球</el-menu-item>
          <el-menu-item index="historyBallClassification"
            >球種分類</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>

      <el-menu-item index="settlement" class="settlementCenter">
        <el-icon><svg-icon name="settlement" /></el-icon>
        <template #title>結算中心</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  border: unset;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  // width: 200px;
  min-height: 150px;
}
.el-menu-item-group {
  padding: 0 15px;
  margin-bottom: 7px;
}
.el-menu-item {
  height: 48px;
  padding-left: 20px !important;
}

svg {
  fill: var(--icon-color-main);
}

:deep(.el-sub-menu.is-opened) .el-sub-menu__title {
  background-color: var(--color-blue) !important;
  color: white !important;
}

:deep(.el-sub-menu.is-opened) .el-sub-menu__title .el-icon .svg-icon {
  fill: white !important;
}

:deep(.el-menu-item.is-active) {
  border-radius: 5px;
  background-color: var(--color-lightBlue) !important;
  color: black !important;
}

.settlementCenter.el-menu-item.is-active {
  // width: 36px;
  height: 36px;
  background-color: var(--color-blue) !important;
  color: white !important;
  border-radius: 0;
}

.settlementCenter.el-menu-item.is-active .el-icon .svg-icon {
  fill: white !important;
}

// isCollapse = false
.el-menu--collapse {
  margin: auto;
}
.el-menu--collapse :deep(.el-sub-menu) {
  margin: auto;
  width: 40px;
  border-radius: 5px;
}

.el-menu--collapse :deep(.el-sub-menu) .el-sub-menu__title {
  padding: 0 8px !important;
  text-align: center;
}

.el-menu--collapse :deep(.el-sub-menu) .el-sub-menu__title .el-icon {
  text-align: center;
}

.el-menu--collapse :deep(.el-sub-menu.is-active) {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--color-blue) !important;
}

.el-menu--collapse :deep(.el-sub-menu.is-active) .el-sub-menu__title {
  padding-bottom: 16px !important;
}

.el-menu--collapse
  :deep(.el-sub-menu.is-active)
  .el-sub-menu__title
  .el-icon
  svg {
  fill: white !important;
}

.el-menu--collapse .settlementCenter {
  margin: auto;
}

.el-menu--collapse .settlementCenter.is-active {
  padding: unset !important;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--color-blue) !important;
}

.el-menu--collapse
  :deep(.el-menu-item.is-active.settlementCenter)
  .el-menu-tooltip__trigger {
  padding: 0 8px !important;
}

.el-menu--collapse .settlementCenter.el-menu-item.is-active .el-icon .svg-icon {
  fill: white !important;
}

// RWD
.RWDcontainer {
  @include max-dev($m_pc) {
    display: none;
  }

  @include min-max-dev($m_pc, $l_pc) {
    max-width: var(--sidebar-m_pc-l_pc-max-width);
  }

  @include min-max-dev($l_pc, $xl_pc) {
    max-width: var(--sidebar-l_pc-xl_pc-max-width);
  }

  @include min-dev($xl_pc) {
    max-width: var(--sidebar-xl_pc-max-width);
  }
}

.RWDcloseContainer {
  @include max-dev($m_pc) {
    display: none;
  }
}
</style>
