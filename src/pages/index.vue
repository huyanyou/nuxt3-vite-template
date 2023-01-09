<script lang='ts' setup>
let visible = $ref(false);
let parenNodeShow = $ref(false)
const handleClick = () => {
    visible = true;
};
const handleOk = () => {
    visible = false;
};
const handleCancel = () => {
    visible = false;
}
const showDetail = () => {
    visible = true
    parenNodeShow = true
}
const closeDetail = () => {
    visible = false
    parenNodeShow = false
}
// 鼠标移动到遮罩层关闭抽屉
const moveCloseDetail = (event: MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
    if (elementUnderMouse?.className === 'arco-drawer-mask') {
        visible = false
    }
}
</script>

<template>
    <div>
        <AAffix>
            <APageHeader :show-back="false" title="ArcoDesign" subtitle="ArcoDesign Vue 2.0">
                <template #title>
                    飞度
                </template>
                <template #subtitle>
                    <div @mouseenter="showDetail">222</div>
                </template>
            </APageHeader>
        </AAffix>
        <AAffix>
            <div v-show="parenNodeShow" id="parentNode" @mousemove="moveCloseDetail"></div>
        </AAffix>
        <div style="height:1800px ; background-color: red;">
        </div>
    </div>
    <ADrawer :header="false" @close="parenNodeShow = false" popup-container="#parentNode" placement="top"
        :visible="visible" @ok="handleOk" @cancel="handleCancel">
        <div>
            <ASpace direction="vertical" :size="16" style="display: block;">
                <ARow class="grid-demo">
                    <ACol :span="12">
                        <!-- <div>12 - 50%</div> -->
                        <DrawerDetail />
                    </ACol>
                    <ACol :span="12">
                        <div>12 - 50%</div>
                    </ACol>
                </ARow>
            </ASpace>
        </div>
    </ADrawer>
</template>

<style scoped lang="scss">
.arco-page-header {

    // 内容居中
    :deep(.arco-page-header-wrapper) {
        width: 1366px;
        margin: 0 auto;
    }

}

#parentNode {
    height: calc(100vh - 78px);
    width: 100vw;
    position: absolute;
    top: 60px;
    overflow: hidden;
}

.arco-space {
    display: block;
}



.grid-demo .arco-col {
    height: 48px;
    line-height: 48px;
    color: var(--color-white);
    text-align: center;
}

.grid-demo .arco-col:nth-child(2n) {
    background-color: rgba(var(--arcoblue-6), 0.9);
}

.grid-demo .arco-col:nth-child(2n + 1) {
    background-color: var(--color-primary-light-4);
}
</style>

