<template>
    <div>
        <h3>
            {{ title }}
        </h3>
        <div class="well">
            <div class="pomodoro-timer">
                <span>{{ min }}</span>:<span>{{ sec }}</span>
            </div>
        </div>
        <div class="well">
            <img :src="catImg" />
        </div>
    </div>

</template>

<script>
export default {}
</script>

<style scoped>

</style>
