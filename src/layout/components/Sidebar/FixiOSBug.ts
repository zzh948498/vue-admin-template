import { computed, onMounted, ref } from 'vue';
import { useStore } from '@/store';

export const useFixiOSBug = () => {
    const store = useStore();
    const device = computed(() => store.state.app.device);
    const subMenu = ref();
    onMounted(() => {
        // In order to fix the click on menu on the ios device will trigger the mouseleave bug
        // https://github.com/PanJiaChen/vue-element-admin/issues/1135
        fixBugIniOS();
    });
    const fixBugIniOS = () => {
        const $subMenu = subMenu;
        if ($subMenu) {
            const handleMouseleave = $subMenu.value.handleMouseleave;
            $subMenu.value.handleMouseleave = (e: any) => {
                if (device.value === 'mobile') {
                    return;
                }
                handleMouseleave(e);
            };
        }
    };
    return {
        subMenu,
    };
};
