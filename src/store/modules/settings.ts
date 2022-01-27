import defaultSettings from '@/settings';
import { Module } from 'vuex';
import type { RootState } from '../index';

const { fixedHeader, sidebarLogo } = defaultSettings;

const state = {
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
};
export type SettingState = typeof state;
type SettingChangeInput<T extends keyof SettingState = keyof SettingState> = T extends T
    ? [{ key: T; value: SettingState[T] }] extends Array<infer R>
        ? R
        : never
    : never;
const settingModule: Module<SettingState, RootState> = {
    namespaced: true,
    state,
    mutations: {
        CHANGE_SETTING: (state, data: SettingChangeInput) => {
            Reflect.set(state, data.key, data.value);
        },
    },
    actions: {
        changeSetting({ commit }, data: SettingChangeInput) {
            commit('CHANGE_SETTING', data);
        },
    },
};
export default settingModule;
