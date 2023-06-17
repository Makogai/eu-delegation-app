<template>
    <div>

        <div class="loader-container" v-if="loading">

    <div class="loader">
        <div class="loader-inner">
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
        </div>
    </div>
        </div>
  <router-view></router-view>
    </div>
</template>

<style>

.loader-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.82);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 10px;
}

.loader > div {
    background-color: #fff;
    height: 100%;
    width: 6px;
    display: inline-block;
    margin-left: 1px;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
}

.loader .loader-line-wrap {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.loader .loader-line {
    display: block;
    position: absolute;
    top: 0;
    left: -200%;
    width: 200%;
    height: 100%;
    background-color: #fff;
    -webkit-animation: move 2s infinite ease-in-out;
    animation: move 2s infinite ease-in-out;
}

.loader .loader-line:nth-child(1) {
    background-color: #ff0000;
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}

.loader .loader-line:nth-child(2) {
    background-color: #00ff00;
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
}

.loader .loader-line:nth-child(3) {
    background-color: #0000ff;
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}

.loader .loader-line:nth-child(4) {
    background-color: #ffff00;
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}

.loader .loader-line:nth-child(5) {
    background-color: #00ffff;
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
}

@-webkit-keyframes move {
    0% {
        left: -200%;
    }
    100% {
        left: 200%;
    }
}

@keyframes move {
    0% {
        left: -200%;
    }
    100% {
        left: 200%;
    }
}

@-webkit-keyframes stretchdelay {
    0%,
    40%,
    100% {
        -webkit-transform: scaleY(0.4);
    }
    20% {
        -webkit-transform: scaleY(1);
    }
}

@keyframes stretchdelay {
    0%,
    40%,
    100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1);
        -webkit-transform: scaleY(1);
    }
}
</style>



<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters('ProjectsIndex', ['data', 'total', 'loading']),
    },
}
</script>
