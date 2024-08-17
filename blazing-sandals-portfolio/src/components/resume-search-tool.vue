<script>

import { mapState, mapActions } from 'vuex'

export default {
    computed: mapState({
        workHistories: state => state.workhistory.all
    }),
    methods: {
        ...mapActions('click', [
            'searchWorkHistory'
        ]),
        currency
    },
    created() {
        this.$store.dispatch('work-histories/search')
    }
}
</script>

<template>
    <div>
        <button @click="searchWorkHistory('.net')">Click this bullshit!</button>
    </div>
</template>


