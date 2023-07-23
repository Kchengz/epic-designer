<template>
  <div class="loading">
    <div class="shape shape-1" />
    <div class="shape shape-2" />
    <div class="shape shape-3" />
    <div class="shape shape-4" />
  </div>
</template>

<style>
.loading {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 24px;
}

.shape {
    width: 13px;
    height: 13px;
    position: absolute;
    border-radius: 2px;
}

.shape-1 {
    background-color: #cc64f5;
    left: 0;
    animation: animationShape1 2s linear infinite;
}

.shape-2 {
    background-color: #8e8ff8;
    right: 0;
    animation: animationShape2 2s linear infinite;
}

.shape-3 {
    background-color: #5faefa;
    bottom: 0;
    animation: animationShape3 2s linear infinite;
}

.shape-4 {
    background-color: #3ec4fa;
    right: 0;
    bottom: 0;
    animation: animationShape4 2s linear infinite;
}

@keyframes animationShape1 {
    0% {
        transform: translate(0);
    }

    25% {
        transform: translateX(17px);
    }

    50% {
        transform: translate(17px, 17px);
    }

    75% {
        transform: translate(0, 17px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes animationShape2 {
    0% {
        transform: translate(0);
    }

    25% {
        transform: translateY(17px);
    }

    50% {
        transform: translate(-17px, 17px);
    }

    75% {
        transform: translate(-17px, 0);
    }

    100% {
        transform: translate(0);
    }
}

@keyframes animationShape3 {
    0% {
        transform: translate(0);
    }

    25% {
        transform: translateY(-17px);
    }

    50% {
        transform: translate(17px, -17px);
    }

    75% {
        transform: translate(17px, 0);
    }

    100% {
        transform: translate(0);
    }
}

@keyframes animationShape4 {
    0% {
        transform: translate(0);
    }

    25% {
        transform: translateX(-17px);
    }

    50% {
        transform: translate(-17px, -17px);
    }

    75% {
        transform: translate(0, -17px);
    }

    100% {
        transform: translate(0);
    }
}
</style>
