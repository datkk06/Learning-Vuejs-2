<template>
    <div>
        <div class="input-group">
            <input @keyup.enter="addItem" type="text" class="input form-control" placeholder="add item" v-model="text">
            <span class="input-group-btn">
                <button @click="addItem" class="btn btn-default" type="button">Add</button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
