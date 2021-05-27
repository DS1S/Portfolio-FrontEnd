<template>
    <div class="terminal">
        <div class="terminal-menu bg-gradient-to-tr from-bb to-lg flex-grow-0 space-x-2 rounded-sm">
            <div class="menu-button close rounded-full"></div>
            <div class="menu-button minimize rounded-full"></div>
            <div class="menu-button full rounded-full"></div>
        </div>
        <div class="flex flex-col terminal-body shadow-lg overflow-auto justify-end">
            <p class="prompt1">daniel4531:~$ gcc -std=gnu99 -o DisplaySocials DisplaySocials.c</p>
            <p class="prompt2">daniel4531:~$ ./DisplaySocials.out</p>
            <p class="prompt3 pt-4">Gathering your info ...</p>
            <p class="prompt4 pt-4">Success!</p>
            <p class="prompt5">daniel4531:~$ <span class="cursor">_</span></p>

            <div id="socials" class="flex flex-row flex-nowrap flex-grow w-full justify-center space-x-8">
                <a href="https://github.com/DS1S" class="self-center">
                    <i class="ic self-center fab fa-github fa-3x  md:fa-4x social-icon" :style="`opacity: ${opacity};`"></i>
                </a>
                <a href="https://www.linkedin.com/in/daniel-saunders-8b38831a8/" class="self-center">
                    <i class="ic self-center fab fa-linkedin-in fa-3x  md:fa-4x social-icon" :style="`opacity: ${opacity};`"></i>
                </a>
                <a href="mailto: daniel.saunders@mail.utoronto.ca" class="self-center">
                    <i class="ic self-center fas fa-envelope fa-3x md:fa-4x social-icon" :style="`opacity: ${opacity};`"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FakeTerminal",
    data(){
        return {
            opacity: 0,
        }
    },
    mounted(){
        setTimeout(() => {
            this.opacity = 1
        }, 8100)
    }
}
</script>

<style lang="scss" scoped>
    .ic {
        opacity: 0;
    }

    @mixin anim($duration, $color) {
        color: $color;
        -webkit-animation: type .5s #{$duration}s steps(10, end) forwards;
        -moz-animation: type .5s #{$duration}s steps(10, end) forwards;
        -o-animation: type .5s #{$duration}s steps(10, end) forwards;
        animation: type .5s #{$duration}s steps(10, end) forwards;
    }

    @mixin animOpacity {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .terminal {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        width: 75vw;
        padding: 16px;
        margin: auto;
        @media (min-width: 768px) {
            width: 50%;
            padding: 4rem;
            margin: 0px;
        }
    }

    .terminal-menu {
        width: 100%;
        display: flex;
        flex-direction: row;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        height: 25px;
        box-shadow: 30px;
    }

    .terminal-body {
        width: 100%;
        height: 400px;
        background-color: black;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .menu-button {
        width: 12px;
        height: 12px;
        border: 4px;
        position: relative;
        top: 6px;
        left: 6px;
        &.close {
            background-color: #ff3b47;
            border-color: #9d252b;
        }
        &.minimize {
            background-color: #ffc100;
            border-color: #9d802c;
        }
        &.full {
            background-color: #00d742;
            border-color: #049931
        }
    }

    p {
        font-size: 1.25em;
        font-family: monospace;
        overflow: hidden;
        white-space: normal;
        width: 0;
    }

    .prompt1 {
        @include anim(1, white)
    }

    .prompt2 {
        @include anim(3, white)
    }

    .prompt3 {
         @include anim(5, white)
    }
    .prompt4 {
         @include anim(7, rgb(45, 245, 71))
    }

    .prompt5 {
        @include anim(8, white)
    }

    .cursor {
        -webkit-animation: blink 1s 2s infinite;
        -moz-animation: blink 1s 2s infinite;
        -o-animation: blink 1s 2s infinite;
        animation: blink 1s 2s infinite;
    }

    @-webkit-keyframes blink {
        @include animOpacity
    }

    @-moz-keyframes blink {
        @include animOpacity
    }

    @-o-keyframes blink {
        @include animOpacity
    }

    @keyframes blink {
        @include animOpacity
    }


    @media (min-width: 0px) {
        @-webkit-keyframes type {
            to {
                width: 15em
            }
        }
        @-moz-keyframes type {
            to {
                width: 15em
            }
        }
        @-o-keyframes type {
            to {
                width: 15em
            }
        }
        @keyframes type {
            to {
                width: 15em
            }
        }
    }
    @media (min-width: 400px) {
        @-webkit-keyframes type {
            to {
                width: 25em
            }
        }
        @-moz-keyframes type {
            to {
                width: 25em
            }
        }
        @-o-keyframes type {
            to {
                width: 25em
            }
        }
        @keyframes type {
            to {
                width: 25em
            }
        }
    }
    @media (min-width: 740px) {
        @-webkit-keyframes type {
            to {
                width: 35em
            }
        }
        @-moz-keyframes type {
            to {
                width: 35em
            }
        }
        @-o-keyframes type {
            to {
                width: 35em
            }
        }
        @keyframes type {
            to {
                width: 35em
            }
        }
    }
    @media (min-width: 1068px) {
        @-webkit-keyframes type {
            to {
                width: 50em
            }
        }
        @-moz-keyframes type {
            to {
                width: 50em
            }
        }
        @-o-keyframes type {
            to {
                width: 50em
            }
        }
        @keyframes type {
            to {
                width: 50em
            }
        }
    }
    @media (min-width: 1600px) {
        @-webkit-keyframes type {
            to {
                width: 80em
            }
        }
        @-moz-keyframes type {
            to {
                width: 80em
            }
        }
        @-o-keyframes type {
            to {
                width: 80em
            }
        }
        @keyframes type {
            to {
                width: 80em
            }
        }
    }


</style>