<template>
    <div id="app">
        <el-menu :default-active="activeIndex" background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <router-link to="/blogs">Blog Website</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <router-link to="/blog/id/detail">Blog Detail</router-link>
                </template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">Blog list</el-menu-item>
            <el-menu-item index="4">
                <router-link to="/blog/create">Create Blog</router-link>
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
