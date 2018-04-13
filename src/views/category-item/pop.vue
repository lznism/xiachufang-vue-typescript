<template>
    <menu-list :list="categoryItemList"></menu-list>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';
import MenuList from '../../components/menu-list.vue';
@Component({
    components: {MenuList}
})
export default class Pop extends Vue {
    @Getter categoryItemList;
    @Action getCategoryItemList;

    created() {
        let id = this.$route.params.id;
        this.getCategoryItemList({id, type: 'pop'});
    }
}
</script>
