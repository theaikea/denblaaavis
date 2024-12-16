<template>
    <div class="card rounded-lg drop-shadow w-1/4 p-12 bg-green-400">
        <h4 class="title " >{{ title }}</h4>
        <p class="secondary-text">{{ subText }}</p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        subText: String
    }
}
</script>

<style scoped> 

</style>