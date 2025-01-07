<template>
    <header class="sm:hidden">
        <NavbarComponent />
    </header>
    <main class="grid sm:grid-cols-2">
        <div class="max-sm:hidden my-auto mx-auto w-full md:w-96 box-border">
            <ul class="grid grid-cols-6 grid-rows-6 h-40 gap-1 p-4 md:pl-10">
                <RouterLink to="/" class="bg-cyan-600 hover:bg-cyan-700 transition-colors ease  duration-300 rounded-md grid place-items-center  col-span-2 row-span-6">
                <li>
                        Home
                    </li>
                </RouterLink >
                <RouterLink to="/list-portofolio" class="bg-red-600 hover:bg-red-700 transition-colors ease  duration-300 rounded-md grid place-items-center  col-span-4 row-span-3">
                <li>
                        Portofolio
                    </li>
                </RouterLink>
                <RouterLink to="/experience" class="bg-orange-600 hover:bg-orange-700 transition-colors ease  duration-300 rounded-md grid place-items-center col-span-4 row-span-3">
                <li >
                        Experience
                    </li>
                </RouterLink>
            </ul>
        </div>
        <div class="w-full h-screen sm:overflow-y-scroll">
            <slot name="right-content">
            </slot>
        </div>
        <div class="fixed h-20 w-1/2 bg-gradient-to-t from-black bottom-0 right-0 hidden md:block">

        </div>
    </main>
    <footer>
        <slot name="footer" />
    </footer>
</template>

<script setup>
import NavbarComponent from '@/components/navigation/NavbarComponent.vue';
</script>