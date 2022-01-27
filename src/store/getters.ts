import { GetterTree } from 'vuex';
import type { RootState } from './index';

const getters: GetterTree<RootState, RootState> = {
    version: state => state.version,
};
export default getters;
