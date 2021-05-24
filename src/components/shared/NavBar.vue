<template>
  <nav class="h-auto bg-gradient-to-r from-lg via-bb to-dg flex-row flex-nowrap">
    <div class="flex flex-row flex-nowrap min-h-full px-4 justify-between flex-initial">
        <div class="flex flex-nowrap space-x-1 self-center">
            <img class="w-14 h-14" src="../../assets/Icon.png"/>
            <p class="self-center font-mono text-primary font-bold select-none">DANIEL</p>
            <p class="self-stretch font-thin text-primary text-4xl select-none">|</p>
            <p class="self-center font-mono font-bold text-primary select-none">SAUNDERS</p>
        </div>
        <div class="hidden md:flex md:flex-nowrap md:space-x-8 text-sm subpixel-antialiased font-semibold tracking-tighter text-primary">
            <NavBarRoutes/>
        </div>
        <div class="md:hidden self-center">
            <i @click="handleHamburger" :class="[{'text-secondary': showHamburger}, 
                    'fas', 'fa-bars', 'fa-lg', 
                    'text-primary', 'cursor-pointer', 
                    'hover:text-secondary']">
            </i>
        </div>
    </div>
    <div :class="['md:hidden overflow-hidden transition-all duration-500 ease-in-out flex flex-nowrap flex-inital flex-col space-y-4 subpixel-antialiased font-medium tracking-tighter text-primary bg-green-500 pt-1']" :style="heightModulator" >
        <NavBarRoutes  :opacity="opacityModulator" location="ham"/>
    </div>
  </nav>
</template>

<script>
import NavBarRoutes from "./NavBarRoutes";

const NUMBER_OF_ROUTES = 4

export default {
    name: "NavBar",
    components: {
        NavBarRoutes
    },
    data(){
        return {
            showHamburger: false,
            heightModulator: 'height: 0',
            opacityModulator: 0
        }
    },
    methods: {
        handleHamburger(){
            this.showHamburger = !this.showHamburger
            this.heightModulator = this.showHamburger ? `height: ${NUMBER_OF_ROUTES * 40}px;` : 'height: 0px;'
            this.opacityModulator = this.showHamburger ? 1 : 0
        }
    }
}
</script>