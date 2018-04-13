<template>
    <header class="xcf-header">
        <i class="iconfont icon-zuojiantou" @click="back()"></i>
        <img src="../assets/images/logo.png">
    </header>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Header extends Vue {
    back() {
        this.$router.go(-1);
    }
}
</script>
<style lang="scss" scoped>
@function r($px) {
    @return $px / 75 + rem;
}
.xcf-header {
    height: r(121);
    line-height: r(121);
    border-bottom: 1px solid #f6f6f6;
    position: relative;
    font-size: 0;

    .iconfont {
        font-size: r(28);
        color: #383835;
        margin-left: r(32);
    }

    img {
        height: r(55);
        position: absolute;
        top: r(32);
        left: r(74);
    }
}
</style>
