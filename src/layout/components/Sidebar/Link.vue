<script setup>
import { isExternal as validateIsExternal } from '@/utils/validate';
import { computed } from 'vue';

const props = defineProps({
    to: {
        type: String,
        required: true,
    },
});
const isExternals = computed(() => validateIsExternal(props.to));
const type = computed(() => {
    if (isExternals.value) {
        return 'a';
    }
    return 'router-link';
});
const linkProps = to => {
    if (isExternals.value) {
        return {
            href: to,
            target: '_blank',
            rel: 'noopener',
        };
    }
    return {
        to: to,
    };
};
</script>
<template>
    <component :is="type" v-bind="linkProps(to)">
        <slot />
    </component>
</template>
