<template>
    <div>
        <h2>Create Blog</h2>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Blog Id">
                <el-input v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="Blog Title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="Blog Created Date">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1"
                                    style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="Blog Summary">
                <el-input v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onCreate()">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <app-blog :bloglist="blogs"></app-blog>
    </div>
</template>
<script>
    import blogList from './bloglist'
    export default {
        data() {
            return {
                form: {
                    id: '',
                    title: '',
                    date1: '',
                    description : ''
                },
                blogs: [],
                dialogVisible: false
            }
        },
        methods: {
            onCreate() {
                this.blogs.push(this.form);
            }
        },
        components:{
            appBlog : blogList
        }
    }

</script>