<template>
    <MainLayoutView>
        <template #right-content>
           <Transition name="slide-fade">
            <section v-if="isMount" class="flex flex-col w-full p-4 gap-4">
                <h1 class="mt-16 text-2xl font-black text-center">About Me</h1>
                <p class="text-sm max-sm:text-center">
                    Saya adalah seorang Junior Web Developer dengan spesialisasi di pengembangan aplikasi web fullstack
                    menggunakan Laravel dan Vue.js. Saya memiliki pemahaman yang kuat tentang pengembangan backend
                    dengan
                    Laravel, termasuk pengelolaan database, API, dan autentikasi, serta kemampuan membangun frontend
                    interaktif dan responsif menggunakan Vue.js.
                </p>
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

onMounted(() => isMount.value = true)
</script>