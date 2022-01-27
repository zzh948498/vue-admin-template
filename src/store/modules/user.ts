import { loginApi, logout, getInfo } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';
import { Module } from 'vuex';
import type { RootState } from '../index';

const getDefaultState = () => {
    return {
        token: getToken() ?? '',
        name: '',
        avatar: '',
        roles: [],
    };
};
export type UserState = ReturnType<typeof getDefaultState>;

const state = getDefaultState();
const userModule: Module<UserState, RootState> = {
    namespaced: true,
    state,
    getters: {
        token: state => state.token,
        avatar: state => state.avatar,
        name: state => state.name,
        roles: state => state.roles,
    },
    mutations: {
        RESET_STATE: state => {
            Object.assign(state, getDefaultState());
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
    },
    actions: {
        // user login
        async login({ commit }, userInfo) {
            const { username, password } = userInfo;
            const response = await loginApi({ username: username.trim(), password: password });
            const { data } = response;
            commit('SET_TOKEN', data.token);
            setToken(data.token);
        },

        // get user info
        async getInfo({ commit, state }) {
            const response = await getInfo(state.token);
            const { data } = response;

            if (!data) {
                throw new Error('Verification failed, please Login again.');
            }

            const { roles, name, avatar } = data;

            // roles must be a non-empty array
            if (!roles || roles.length <= 0) {
                throw new Error('getInfo: roles must be a non-null array!');
            }

            commit('SET_ROLES', roles);
            commit('SET_NAME', name);
            commit('SET_AVATAR', avatar);
        },

        // user logout
        async logout({ commit, state }) {
            await logout(state.token);
            removeToken(); // must remove  token  first
            resetRouter();
            commit('RESET_STATE');
        },

        // remove token
        resetToken({ commit }) {
            removeToken(); // must remove  token  first
            commit('RESET_STATE');
        },
    },
};

export default userModule;
