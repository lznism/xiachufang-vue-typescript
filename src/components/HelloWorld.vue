<template>
    <div class="hello">
        <p>{{name}}</p>
        <h1>{{msg}}</h1>
        <h3>今年是：{{yearNumber}}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class App extends Vue {
    name: string = 'HelloWorld';
    msg: string = '使用typescript+vue构建应用';
    user: string = 'lznism';
    yearNumber: number;

    mounted(): void {
        this.greet(this.user);
    }

    created():void {
        this.yearNumber = 2018;
    }

    greet(user: string) {
        console.log(`${user}, hello!`);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
