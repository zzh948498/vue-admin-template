import store from '@/store';

const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design

export default {
    watch: {
        $route(route) {
            console.log(route);
            if (this.device === 'mobile' && this.sidebar.opened) {
                store.dispatch('app/closeSideBar', { withoutAnimation: false });
            }
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.__resizeHandler);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.__resizeHandler);
    },
    mounted() {
        const isMobile = this.$_isMobile();
        if (isMobile) {
            store.dispatch('app/toggleDevice', 'mobile');
            store.dispatch('app/closeSideBar', { withoutAnimation: true });
        }
    },
    methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
        __isMobile() {
            const rect = body.getBoundingClientRect();
            return rect.width - 1 < WIDTH;
        },
        __resizeHandler() {
            if (!document.hidden) {
                const isMobile = this.__isMobile();
                store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop');

                if (isMobile) {
                    store.dispatch('app/closeSideBar', { withoutAnimation: true });
                }
            }
        }
    }
};
