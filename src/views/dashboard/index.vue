<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';
const store = useStore();
const name = computed(() => store.getters['user/name']);
const roles = computed(() => store.getters['user/roles']);
</script>
<template>
    <div class="dashboard-container">
        <div class="dashboard-text">name: {{ name }}</div>
        <div class="dashboard-text">
            roles: <span v-for="role in roles" :key="role">{{ role }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
