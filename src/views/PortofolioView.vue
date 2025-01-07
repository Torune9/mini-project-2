<template>
  <MainLayoutView>
    <template #right-content>
      <Transition name="slide-fade">
        <section v-if="isMount"  class="flex flex-col w-full p-4 gap-4">
        <h1 class="mt-16 text-2xl font-black text-center">List Portofolio Project</h1>
        <div class="w-full flex flex-col gap-2 items-center">
          <div v-for="project of projects" class="card card-compact bg-base-100 w-72 shadow-xl -z-10">
          <figure>
            <img :src="project.img" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">{{ project.year }}</button>
            </div>
          </div>
        </div>
        </div>
      </section>
      </Transition>
    </template>
  </MainLayoutView>
</template>

<script setup>
import MainLayoutView from '@/layouts/main/MainLayoutView.vue';
import { ref,onMounted } from 'vue';
import img1 from '@/assets/img/img-1.png'
import img2 from '@/assets/img/img-2.png'
import img3 from '@/assets/img/img-3.png'
import img4 from '@/assets/img/img-4.png'
import img5 from '@/assets/img/img-5.png'

const isMount = ref(false)

const projects = ref([
  {
    name : "System Fixed Asset Management",
    description : "Aplikasi pengelolaan asset tetap",
    year : "2023 - 2024",
    img : img1
  },
  {
    name : "Sistem Pengelolaan Tugas UMKM",
    description : "Aplikasi yang brfungsi untuk mendigitalisasi beberapa proses bisnis umkm dan pengelolaan tugas",
    year : "2023 - 2024",
    img : img2
  },
  {
    name : "Global Quotes",
    description : "Web untuk men-generate qoutes dari berbagai macam kategori",
    year : "2023 - 2024",
    img : img3
  },
  {
    name : "Food Mate",
    description : "Aplikasi untuk menampilkan resep makanan",
    year : "2023 - 2024",
    img : img4
  },
  {
    name : "Catalog x",
    description : "Website untuk menampilkan katalog produk",
    year : "2023 - 2024",
    img : img5
  },
])


onMounted(()=>isMount.value = true)

</script>