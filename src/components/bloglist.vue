<template>
    <div>
        <el-card class="box-card" v-for="(blog, index) in bloglist" :key="index">
            <div slot="header" class="clearfix">
                <span>{{ blog.title }}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="showDetail(index)">Detail</el-button>
            </div>
            <div class="text item">
                {{ blog.description }}
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        props: {
            bloglist: {
                type: Array

            }
        },
        data() {
            return {}
        },
        methods:{
            showDetail(){

            }
        }
    }
</script>

<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>