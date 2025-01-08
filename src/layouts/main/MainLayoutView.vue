<template>
    <header class="sm:hidden">
        <NavbarComponent />
    </header>
    <main class="grid sm:grid-cols-2">
        <div class="max-sm:hidden my-auto mx-auto w-full md:w-96 box-border">
            <ul class="grid grid-cols-6 grid-rows-12 h-72 gap-1 p-4 md:pl-10">
                <RouterLink to="/"
                    class="bg-primary-content transition-colors ease  duration-300 rounded-md grid place-items-center  col-span-2 row-span-6 btn-ghost">
                    <li>
                        <font-awesome-icon icon="fa-solid fa-house" size="xl"/> 
                    </li>
                </RouterLink>
                <RouterLink to="/about"
                    class="bg-primary-content btn-ghost transition-colors ease  duration-300 rounded-md grid place-items-center col-span-4 row-span-3">
                    <li>
                        About me
                    </li>
                </RouterLink>
                <RouterLink to="/list-portofolio"
                    class="bg-primary-content transition-colors ease  duration-300 rounded-md grid place-items-center  col-span-4 row-span-3 btn-ghost">
                    <li>
                        Portofolio
                    </li>
                </RouterLink>
                <RouterLink to="/experience"
                    class="bg-primary-content transition-colors ease  duration-300 rounded-md grid place-items-center col-span-6 row-span-3 btn-ghost">
                    <li>
                        Experience
                    </li>
                </RouterLink>
            </ul>
        </div>
        <div class="w-full h-screen sm:overflow-y-auto">
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