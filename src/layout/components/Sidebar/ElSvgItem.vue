<template>
    <el-icon class="el-svg-icon">
        <component :is="elSvgName" />
    </el-icon>
</template>
<script>
export default {
    props: {
        elSvgName: {
            require: true,
            default: 'Fold',
            type: String,
        },
    },
};
</script>

<style scoped lang="scss">
.el-svg-icon {
    width: 1em;
    height: 1em;
    margin-left: -2px; //el-svg-icon has some margin
    font-size: 16px !important;
    text-align: left !important;
    margin-right: 16px;
}
</style>
