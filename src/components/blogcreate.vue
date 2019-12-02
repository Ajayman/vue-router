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
            <el-form-item label="Blog Summary">
                <el-input v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onCreate()">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: {
          blogs1 : {
              type : Array
          }
        },
        data() {
            return {
                form: {
                    id: '',
                    title: '',
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
        }
    }

</script>