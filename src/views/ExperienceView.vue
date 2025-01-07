<template>
  <MainLayoutView>
    <template #right-content>
      <Transition name="slide-fade">
        <section v-if="isMount" class="flex flex-col w-full p-4 gap-4">
          <h1 class="mt-16 text-2xl font-black text-center">Experience </h1>
          <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical -z-10">
            <li v-for="(exp, i) in experience">
              <hr v-if="i !== 0">
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="mb-10" :class="i % 2 == 0 ? 'timeline-start md:text-end' : 'timeline-end'">
                <time class="font-mono italic">{{ exp.year }}</time>
                <div class="text-lg font-black">{{ exp.name }}</div>
                <p class="text-success text- mt-2">PT Intersolusi Teknologi Asia(Bts.id)</p>
                <p class="text-sm">
                  {{ exp.description }}
                </p>
              </div>
              <hr />
            </li>
          </ul>
        </section>
      </Transition>
    </template>
  </MainLayoutView>
</template>

<script setup>
import MainLayoutView from '@/layouts/main/MainLayoutView.vue';

import { onMounted, ref } from 'vue';

const experience = ref([
  {
    name: "Fullstack Web Developer(Magang)",
    description: "Membangun web aplikasi pengelolaan asset tetap untuk perusahaan,mulai dari pembuatan ERD,normaliasi Database,membangun REST API,dan implemnentasi desain Figma",
    year: "2023 - 2024",
  },
])

const isMount = ref(false)

onMounted(()=>isMount.value = true)

</script>