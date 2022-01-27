import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import getters from './getters';
import app, { AppState } from './modules/app';
import permission, { PermissionState } from './modules/permission';
import settings, { SettingState } from './modules/settings';
import user, { UserState } from './modules/user';
// 为 store state 声明类型
export interface RootState {
    version: string;
}
export interface AllstateTypes extends RootState {
    app: AppState;
    permission: PermissionState;
    settings: SettingState;
    user: UserState;
}

// 定义 injection key
export const key: InjectionKey<Store<AllstateTypes>> = Symbol('vue-store');

// 泛型定义所有子模块的 state
export function useStore<T = AllstateTypes>(): Store<T> {
    return baseUseStore<T>(key);
}
const store = createStore<RootState>({
    state: {
        version: '1',
    },
    modules: {
        app,
        permission,
        settings,
        user,
    },
    getters,
});

export default store;
