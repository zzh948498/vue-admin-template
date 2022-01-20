import { watch, onBeforeMount, onBeforeUnmount, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design
export const useResizeHandler = () => {
    const route = useRoute();
    const store = useStore();
    const sidebar = computed(() => store.state.app.sidebar);
    const device = computed(() => store.state.app.device);
    const fixedHeader = computed(() => store.state.settings.fixedHeader);
    const classObj = computed(() => ({
        hideSidebar: !sidebar.value.opened,
        openSidebar: sidebar.value.opened,
        withoutAnimation: sidebar.value.withoutAnimation,
        mobile: device.value === 'mobile',
    }));
    watch(route, newRoute => {
        console.log(newRoute);
        if (device.value === 'mobile' && sidebar.value.opened) {
            store.dispatch('app/closeSideBar', { withoutAnimation: false });
        }
    });
    onBeforeMount(() => {
        window.addEventListener('resize', __resizeHandler);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('resize', __resizeHandler);
    });
    onMounted(() => {
        const isMobile = __isMobile();
        if (isMobile) {
            store.dispatch('app/toggleDevice', 'mobile');
            store.dispatch('app/closeSideBar', { withoutAnimation: true });
        }
    });
    const handleClickOutside = () => store.dispatch('app/closeSideBar', { withoutAnimation: false });
    const __isMobile = () => {
        const rect = body.getBoundingClientRect();
        return rect.width - 1 < WIDTH;
    };
    const __resizeHandler = () => {
        if (!document.hidden) {
            const isMobile = __isMobile();
            store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop');

            if (isMobile) {
                store.dispatch('app/closeSideBar', { withoutAnimation: true });
            }
        }
    };
    return {
        sidebar,
        device,
        fixedHeader,
        classObj,
        handleClickOutside,
    };
};
