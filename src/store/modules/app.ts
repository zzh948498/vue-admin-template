import Cookies from 'js-cookie';
import { Module } from 'vuex';
import type { RootState } from '../index';
const state = {
    sidebar: {
        opened: Boolean(Cookies.get('sidebarStatus')),
        withoutAnimation: false,
    },
    device: 'desktop',
};
export type AppState = typeof state;

const appModule: Module<AppState, RootState> = {
    namespaced: true,
    state,
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened;
            state.sidebar.withoutAnimation = false;
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', '1');
            } else {
                Cookies.set('sidebarStatus', '0');
            }
        },
        CLOSE_SIDEBAR: (state, withoutAnimation: AppState['sidebar']['withoutAnimation']) => {
            Cookies.set('sidebarStatus', '0');
            state.sidebar.opened = false;
            state.sidebar.withoutAnimation = withoutAnimation;
        },
        TOGGLE_DEVICE: (state, device: AppState['device']) => {
            state.device = device;
        },
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR');
        },
        closeSideBar(
            { commit },
            { withoutAnimation }: { withoutAnimation: AppState['sidebar']['withoutAnimation'] }
        ) {
            commit('CLOSE_SIDEBAR', withoutAnimation);
        },
        toggleDevice({ commit }, device: AppState['device']) {
            commit('TOGGLE_DEVICE', device);
        },
    },
};
export default appModule;
