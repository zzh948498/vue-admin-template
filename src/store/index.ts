import { InjectionKey } from 'vue';
import { createStore, GetterTree, Store, useStore as baseUseStore } from 'vuex';
import getters from './getters';
import app, { AppState } from './modules/app';
import permission from './modules/permission';
import settings from './modules/settings';
import user from './modules/user';
// 为 store state 声明类型
export interface RootState {
    version: string;
}
export interface AllstateTypes extends RootState {
    app: AppState;
}
// 定义 injection key
export const key: InjectionKey<Store<AllstateTypes>> = Symbol('vue-store');
// 泛型定义所有子模块的 state
export function useStore<T = AllstateTypes>() {
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
