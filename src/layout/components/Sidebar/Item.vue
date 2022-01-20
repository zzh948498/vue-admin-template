<script lang="jsx">
// import { h } from 'vue';
import ElSvgItem from './ElSvgItem.vue';

export default {
    name: 'MenuItem',
    functional: true,
    props: {
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        elSvgIcon: {
            type: String,
            default: '',
        },
    },
    // render(h, context) {
    render(context) {
        const { icon, title, elSvgIcon } = context;
        const vnodes = [];
        if (elSvgIcon) {
            // h('el-icon','bicycle')
            // const elIcon = 'bicycle';
            // vnodes.push(h('el-icon', {}, [h('bicycle')]));
            vnodes.push(<ElSvgItem elSvgName={elSvgIcon} />);
            // elIcon.innerHTML
            // console.log(elIcon.nodeValue);
        } else if (icon) {
            vnodes.push(<svg-icon icon-class={icon} />);
        }
        if (title) {
            vnodes.push(<span slot="title">{title}</span>);
        }
        return vnodes;
    },
};
</script>

<style scoped>
.sub-el-icon {
    color: currentColor;
    width: 1em;
    height: 1em;
}
</style>
