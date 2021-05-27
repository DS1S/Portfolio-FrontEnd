<template>
  <div :class="['flex flex-col w-1/3 h bg-white md:w-1/3 h-2/3 lg:w-1/3 rounded-xl shadow-2xl border-4', {'filter blur-sm': shouldFilter}]">
    <h1 class="px-4 py-6 self-center font-bold font-mono text-3xl -trans">{{title}}</h1>
    <p class="px-4 font-mono">{{content}}</p>
  </div>
</template>

<script>
export default {
    name: "ShuffleCard",
    props: {
        title: {
            type: String,
            default: "Test Title"
        },
        content: {
            type: String,
            default: "Test Content"
        },
        shouldFilter: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>