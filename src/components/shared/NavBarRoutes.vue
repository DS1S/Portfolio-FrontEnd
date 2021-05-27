<template>
    <router-link v-for="route in routes" 
        :key="route.name" 
        @click="handleNavClick(route)" 
        :class="[actionClass, {'text-secondary': route.active}]" 
        :style="opacityString" 
        :to="route.path">
        {{route.name}}
    </router-link>
</template>

<script>
export default{
    name: "NavBarRoutes",
    data(){
        return {
            routes: [
                {name: "Home", active: true, path: '/'}, 
                {name: "About", active: false, path: '/About'}, 
                {name: "Projects", active: false, path: '/Projects'}, 
                {name: "Experience", active: false, path: '/Experience'}       
            ]
        }
    },
    props: {
        opacity: {
            type: Number,
            default: 1
        },
        location: {
            type: String,
            default: 'head'
        }
    },
    computed: {
        opacityString (){
            return 'opacity:' + this.opacity.toString()
        },
        actionClass () {
            const attachment = this.location === "head" ? "self-center" : "self-start ml-6"
            return 'router-link ' + attachment
        }
    },
    methods: {
        handleNavClick(route){
            this.routes.map((val) => {
                if (val.active) val.active = !val.active
            })

            route.active = true
        }
    }
}
</script>