<script lang="ts">
export default {
  name: "LoginView",
};
</script>

<script lang="ts" setup>
// components
import { ref } from "vue";
import svgIcon from "@/components/SvgIcon.vue";

// store
import { useLangStore } from "@/stores/lang";
import { useUserStores } from "@/stores/user";

import { useI18n } from "vue-i18n";

import { z } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import bg1 from "@/assets/img/bg-1.jpg";
import bg2 from "@/assets/img/bg-2.png";
import logo from "@/assets/img/logo.png";

// utils
import { getStorage } from "@/utils/storage";

const { t, locale } = useI18n();
const langStore = useLangStore();
const stores = useUserStores();

const isLoading = ref(false);
const isPasswordHide = ref(true);

// Zod schema
const loginSchema = z.object({
  account: z
    .string({ message: t("login.required") })
    .regex(/^\S*$/, { message: t("login.noSpace") })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/, {
      message: t("login.alphanumeric"),
    }),

  password: z
    .string({ message: t("login.required") })
    .min(6, { message: t("login.minLength", { min: 6 }) })
    .max(12, { message: t("login.maxLength", { max: 12 }) }),
});

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    account: "",
    password: "",
  },
});

// defineField 拿出來是 computed
const [account] = defineField("account");
const [password] = defineField("password");

const onSubmit = handleSubmit(async (values) => {
  const { account, password } = values;
  const params = {
    account,
    password,
  };
  await stores.login(params);
});

function togglePassword(): void {
  isPasswordHide.value = !isPasswordHide.value;
}

// 只是處理型別而已
// function setLang(event: Event): void {
//   const target = event.target as HTMLSelectElement;
//   langStore.setLang(target.value);
// }
</script>
<template>
  <main>
    <div
      class="w-full h-dvh bg-cover bg-center"
      :style="{ 'background-image': `url(${bg1})` }"
    ></div>

    <div
      class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-between items-center"
    >
      <img :src="bg2" alt="" class="w-[50%]" />

      <form
        class="w-[476px] h-[352px] px-[14px] py-[28px] mr-[10%] bg-white shadow rounded"
        @submit.stop.prevent="onSubmit"
      >
        <img :src="logo" alt="logo" class="w-[50%] mx-auto pb-[28px]" />
        <div class="p-[14px] border-t-2 border-t-[#e8e6ee]">
          <div class="">
            <div class="">
              <div>帳號:</div>
              <input
                v-model="account"
                type="text"
                placeholder="請輸入帳號"
                class="w-full p-[8px] bg-[#e8f4ff]"
              />
            </div>

            <p class="" :class="{ active: errors.account }">
              &emsp;{{ errors.account }}
            </p>
          </div>

          <div class="">
            <div>
              <div>密碼:</div>
              <div class="relative">
                <input
                  v-model="password"
                  :type="isPasswordHide ? 'password' : 'text'"
                  placeholder="請輸入密碼"
                  class="w-full p-[8px] bg-[#e8f4ff]"
                />
                <button
                  type="button"
                  class="absolute right-[8px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] fill-black"
                  @click="togglePassword()"
                >
                  <svg-icon
                    v-if="isPasswordHide"
                    name="visibility"
                    class="w-[20px] h-[20px] fill-[--icon-color-main]"
                  />
                  <svg-icon
                    v-else-if="!isPasswordHide"
                    name="visibility-off"
                    class="w-[20px] h-[20px] fill-[--icon-color-main]"
                  />
                  <!-- <transition name="slide">
                  </transition> -->
                </button>
              </div>
            </div>

            <p class="" :class="{ active: errors.password }">
              &emsp;{{ errors.password }}
            </p>
          </div>

          <button
            type="submit"
            class="w-full py-[11px] mt-6 bg-[#4692c8] text-white rounded"
          >
            登入
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
// vue transition
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s linear, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(50%) scale(0.5);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-50%) scale(0.5);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0%) scale(1);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s linear, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translateY(50%) scale(0.5);
}

.fade-enter-to,
.fade-leave-from {
  // transform: translateY(0%) scale(1);
  opacity: 1;
}
</style>
