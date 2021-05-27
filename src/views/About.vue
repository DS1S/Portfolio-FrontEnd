<template>
    <div class="flex flex-col w-full h-screen bg-lg bg-gradient-to-r from-lg via-bb to-dg fixed">
        <div class="flex flex-row h-3/4 transition-opacity" :style="`opacity: ${opacity};`" ref="cardWrapper">    
                <ShuffleCard v-for="(i, index) in cardIndexes" :key="index" :class="[findTransform(i), 'transition transform duration-300', `order-${index + 1}`]"
                    :title="aboutCards[adjustIndex(i)].title" 
                    :content="aboutCards[adjustIndex(i)].content"
                    :should-filter="aboutCards[adjustIndex(i)].blur"           
                />
        </div>
        <div class="flex flex-row flex-initial self-center space-x-12 transition-opacity" :style="`opacity: ${opacity};`">
            <i @click="adjustCardsLeft" class="far fa-arrow-alt-circle-left 
                fa-3x text-primary transition duration-250 ease-in-out 
                transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            </i>
            <i @click="adjustCardsRight" class="far fa-arrow-alt-circle-right fa-3x text-primary 
                transition duration-250 ease-in-out 
                transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            </i>
        </div>
    </div>
</template>

<script>
import ShuffleCard from "@/components/about/ShuffleCard.vue"


export default {
    name: "About",
    components: {
        ShuffleCard
    },
    data(){
        return {
            aboutCards: [
                {title: "Who I am", content: "some stuff", blur: false},
                {title: "Technologies", content: "some stuff", blur: true},
                {title: "Hobbies & Intrests", content: "some stuff", blur: true},
            ], 
            opacity: 0,
            cardIndexes: [2, 0, 1],
            initialCardState: true
        }
    },
    methods: {
        adjustCardsRight(){
            this.aboutCards[0].blur = true
            this.aboutCards = [this.aboutCards.pop(), ...this.aboutCards]
            this.cardIndexes = [this.cardIndexes.pop(), ...this.cardIndexes]
            this.initialCardState = false
            this.aboutCards[0].blur = false
            setTimeout(() => {
                this.initialCardState = true;
            }, 300)
        },
        adjustCardsLeft(){
             this.aboutCards[0].blur = true
             this.aboutCards = [...this.aboutCards.slice(1, this.aboutCards.length), this.aboutCards[0]]   
             this.cardIndexes = [...this.cardIndexes.slice(1, this.cardIndexes.length), this.cardIndexes[0]]
             this.initialCardState = false;
             this.aboutCards[0].blur = false
             setTimeout(() => {
                this.initialCardState = true;
            }, 300)
        },
        findTransform(index){
            if(this.initialCardState){
                const posToTransform = {
                        0: this.leftCardTransform, 
                        1: this.middleCardTransform, 
                        2: this.rightCardTransform
                }
                return posToTransform[this.cardIndexes.indexOf(index)]
            }

            const posToTransform = {
                        0: this.antiLeftCardTransform, 
                        1: this.antiMiddleCardTransform, 
                        2: this.antiRightCardTransform
            }

            return posToTransform[this.cardIndexes.indexOf(index)]
        },
        adjustIndex(index){
            if(index === this.cardIndexes[0]) return this.aboutCards.length - 1;
            if(index === this.cardIndexes[1]) return 0;
            if(index === this.cardIndexes[2]) return 1;
        }
    },
    mounted(){
        setTimeout(() => {
            this.opacity = 1
        }, 200)
    },
    computed: {
        leftCardTransform() {
            return "translate-x-64 z-0 translate-y-10 scale-75 skew-x-6 -skew-y-6 flex-shrink-0"
        },
        middleCardTransform() {
            return "z-50 translate-y-24 flex-shrink-0"
        },
        rightCardTransform() {
            return "-translate-x-64 z-0 translate-y-10 scale-75 -skew-x-6 skew-y-6 flex-shrink-0"
        },
        antiLeftCardTransform(){
            return "rotate-6 z-50 scale-100 translate-x-full"
        },
        antiMiddleCardTransform(){
            return "z-10"
        },
        antiRightCardTransform(){
            return "scale-75 -translate-x-full z-0"
        }
    }
    
}
</script>
