<template>
    <div>
        <xcf-header></xcf-header>
        <search></search>
        <menu-list :list="searchResults"></menu-list>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import XcfHeader from '../../components/header.vue';
import Search from '../../components/search.vue';
import MenuList from '../../components/menu-list.vue';

@Component({
    components: {XcfHeader, Search, MenuList}
})
export default class SearchResult extends Vue {
    @Action getSearch;
    @Getter searchResults;

    created() {
        if (this.searchResults.length === 0) {
            let keyword = this.$route.query.keyword;
            this.getSearch(keyword);
        }
    }
}
</script>
<style lang="scss" scoped>
@function r($px) {
    @return $px / 75 + rem;
}

.search {
    margin-bottom: r(20);
}
</style>
