<template>
  <MainLayoutView>
    <template #right-content>
      <Transition name="slide-fade">
        <section v-if="isMount" class="flex flex-col w-full h-screen p-5 justify-center gap-4">
          <div class="flex flex-col gap-2 w-fit">
            <div class="font-semibold">
              <h1 class="text-3xl font-black">Rahman Nurhayadi</h1>
              <h3 class="text-secondary">Junior Web Programmer</h3>
            </div>
            <div class="flex flex-row gap-4 justify-between">
              <small class="btn btn-outline">Be professinal</small>
              <small class="btn btn-outline">Lets Collaborate</small>
            </div>
            <div class="w-full flex flex-row gap-4 justify-between">
              <a rel="author"  href="https://linkedin.com/in/rahman-nurhayadi" target="_blank">
                <button class="btn btn-outline btn-secondary w-20">
                  <font-awesome-icon icon="fa-brands fa-linkedin" />
                </button>
              </a>
              <a rel="author"  href="https://github.com/Torune9" target="_blank">
                <button class="btn btn-outline btn-success w-20">
                  <font-awesome-icon icon="fa-brands fa-square-github" />
                </button>
              </a>
              <a rel="author" href="mailto:rahmannurhayadi@gmail.com" target="_blank">
                <button class="btn btn-outline btn-accent w-20">
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                </button>
              </a>
           </div>
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