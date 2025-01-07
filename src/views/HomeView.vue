<template>
  <MainLayoutView>
    <template #right-content>
      <Transition name="slide-fade">
        <section v-if="isMount" class="flex flex-col w-full h-screen p-5 justify-center gap-4">
          <div class="flex flex-col gap-2 w-full">
            <div class="font-semibold">
              <h1 class="text-3xl font-black">Rahman Nurhayadi</h1>
              <h3 class="text-secondary">Junior Web Programmer</h3>
            </div>
            <div class="flex flex-row gap-4">
              <small class="btn btn-outline">Be professinal</small>
              <small class="btn btn-outline">Lets Collaborate</small>
            </div>
          </div>
          <div class="w-full">
            <p class="text-sm">
              Saya adalah seorang Junior Web Developer dengan spesialisasi di pengembangan aplikasi web fullstack
              menggunakan Laravel dan Vue.js. Saya memiliki pemahaman yang kuat tentang pengembangan backend dengan
              Laravel, termasuk pengelolaan database, API, dan autentikasi, serta kemampuan membangun frontend
              interaktif dan responsif menggunakan Vue.js.
            </p>
          </div>
        </section>
      </Transition>
    </template>
  </MainLayoutView>

</template>

<script setup>
import MainLayoutView from '@/layouts/main/MainLayoutView.vue';

import { ref, onMounted } from 'vue';

const isMount = ref(false)

onMounted(() => isMount.value = true)
</script>