<template>
  <div class="flex flex-col md:flex-row w-screen h-screen bg-lg bg-gradient-to-r from-lg via-bb to-dg">
      <FakeTerminal class="z-10 flex-shrink-0"/>
      <div class="space-y-4 mx-auto md:m-0">
        <p class="relative top-16 font-mono font-bold text-6xl lg:text-7xl uppercase text-primary">Daniel</p>
        <p class="relative left-48 -top-3 lg:left-60 lg:-top-6 font-mono font-bold text-6xl lg:text-7xl  uppercase">Saunders</p>
        <p class="font-mono font-bold text-xl py-2">Computer Science Student, University of Toronto</p>
        <p class="font-mono font-bold text-xl py-2">Oshawa ON, Canada</p>
        <p class="font-mono font-bold text-xl py-2">DevOps Engineer, CyberSecurity</p>
        <div class="flex flex-row space-x-6  py-4 md:py-10">
            <button @click.prevent="routeToPage('About')" class="appearance-none focus:outline-none bg-lg rounded-lg text-primary h-12 w-1/3 shadow-lg font-bold mix-blend-lighten transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110">Learn About Me</button>
            <button @click.prevent="routeToPage('Projects')" class="appearance-none focus:outline-none bg-lg rounded-lg text-primary h-12 w-1/4 shadow-lg font-bold mix-blend-lighten transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110">Projects</button>
        </div>
      </div>
  </div>
</template>

<script>
import FakeTerminal from "../components/home/FakeTerminal.vue"

export default {
  name: 'Home',
  components: {
    FakeTerminal
  },
  methods: {
    routeToPage(page){
      this.$router.push(page)
    }
  }
}
</script>

