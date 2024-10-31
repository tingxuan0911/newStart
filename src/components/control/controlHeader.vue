<script setup lang="ts">
import { ref } from "vue";

const gameTypes = ref<"morningTrading" | "rollingBall" | "guessWinner">(
  "morningTrading"
);

const quantityNow = ref("actual");
const siteNow = ref("all");

const quantitySelection = [
  {
    value: "actual",
    label: "實貨量",
  },
  {
    value: "virtua",
    label: "虛貨量",
  },
];

const site = [
  {
    value: "all",
    label: "全站",
  },
  {
    value: "api",
    label: "API",
  },
  {
    value: "credit",
    label: "信用",
  },
];
</script>

<template>
  <div class="flex justify-between items-center pl-[28px] pr-[12px] w-full">
    <div class="flex items-center">
      <div
        v-for="type in ['morningTrading', 'rollingBall', 'guessWinner']"
        :key="type"
        class="gameCategory"
        :class="{ active: gameTypes === type }"
        @click="
          gameTypes = type as 'morningTrading' | 'rollingBall' | 'guessWinner'
        "
      >
        {{
          type === "morningTrading"
            ? "早盤"
            : type === "rollingBall"
            ? "滾球"
            : "猜冠軍"
        }}
      </div>

      <el-select
        v-model="quantityNow"
        placeholder="Select"
        size="large"
        style="width: 104px; margin-left: 28px"
      >
        <el-option
          v-for="item in quantitySelection"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <div class="headerBtn bg-[--color-blue]">停押賽式</div>
      <div class="headerBtn bg-[--color-blue]">即時注單</div>
      <div class="headerBtn bg-[--color-green]">人員管理</div>
      <div class="ml-[8px] text-[--icon-color-main]">
        回應: <span class="text-[--color-blue]">158</span>
      </div>
    </div>

    <div class="flex items-center">
      <div>貨量顯示: &nbsp;</div>

      <el-select
        v-model="siteNow"
        placeholder="Select"
        size="large"
        style="width: 104px"
      >
        <el-option
          v-for="item in site"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gameCategory {
  padding: 6px 14px;
  border-bottom: 2px solid var(--icon-color-main);
  color: var(--icon-color-main);
  cursor: pointer;
}
.active {
  border-bottom: 2px solid var(--color-blue);
  color: black;
}

.headerBtn {
  margin-left: 8px;
  padding: 8px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

:deep(.el-select__wrapper) {
  background-color: var(--color-lightBlue);
  box-shadow: unset;
}
// select style
:deep(.el-select__selected-item) {
  color: black;
}
</style>
