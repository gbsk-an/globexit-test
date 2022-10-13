<template>
    <div class="d-flex justify-content-between flex-wrap wrapper-main">
        <cardItem 
            v-for="user in users"
            :key="user.name"
            :user="user"
        />
    </div>
</template>

<script>
import cardItem from '@/components/cardItem.vue'

export default {
    name: 'home',
    components: {
      cardItem,
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.wrapper-main {
    padding: 2em 0;
    gap: 2em 2em;
}
</style>