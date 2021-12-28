<template>
    <div :class="{ 'has-logo': showLogo }">
        <logo v-if="showLogo" :collapse="isCollapse" />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                :collapse="isCollapse"
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :unique-opened="false"
                :active-text-color="variables.menuActiveText"
                :collapse-transition="false"
                mode="vertical"
            >
                <sidebar-item
                    v-for="route in permissionRoutes"
                    :key="route.path"
                    :item="route"
                    :base-path="route.path"
                />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo.vue';
import SidebarItem from './SidebarItem.vue';
// import variables from '@/styles/variables.scss';

export default {
    components: { SidebarItem, Logo },
    computed: {
        ...mapGetters(['permissionRoutes', 'sidebar']),
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            return path;
        },
        showLogo() {
            return this.$store.state.settings.sidebarLogo;
        },
        variables() {
            // console.log(variables)
            // return variables;
            return {
                menuText: '#bfcbd9',
                menuActiveText: '#409EFF',
                menuBg: '#304156',
            };
        },
        isCollapse() {
            return !this.sidebar.opened;
        },
    },
};
</script>
