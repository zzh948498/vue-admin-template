import { asyncRoutes, constantRoutes } from '@/router';
import { RouteRecordRaw } from 'vue-router';
import { Module } from 'vuex';
import type { RootState } from '../index';

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles: string[], route: RouteRecordRaw) {
    if (route.meta && route.meta.roles) {
        const metaRoles = route.meta.roles as string[];
        return roles.some(role => metaRoles.includes(role));
    } else {
        return true;
    }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
    const res: RouteRecordRaw[] = [];

    routes.forEach(route => {
        const tmp = { ...route };
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
            res.push(tmp);
        }
    });

    return res;
}

const state = {
    routes: [],
    addRoutes: [],
};
export interface PermissionState {
    routes: RouteRecordRaw[];
    addRoutes: RouteRecordRaw[];
}

const PermissionModule: Module<PermissionState, RootState> = {
    namespaced: true,
    state,
    getters: {
        permissionRoutes: state => state.routes,
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes;
            state.routes = constantRoutes.concat(routes);
        },
    },
    actions: {
        generateRoutes({ commit }, roles) {
            return new Promise(resolve => {
                let accessedRoutes: RouteRecordRaw[];
                if (roles.includes('admin')) {
                    accessedRoutes = asyncRoutes || [];
                } else {
                    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
                }
                commit('SET_ROUTES', accessedRoutes);
                resolve(accessedRoutes);
            });
        },
    },
};

export default PermissionModule;
