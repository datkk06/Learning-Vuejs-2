<template>
    <div>
        <Item v-for="item in items" :item="item"></Item>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>
