<template>
    <div class="container">
        <div class="row">
            <el-card class="box-card col-md-4 w-100" v-for="(blog, id) in bloglist" :key="id">
                <div slot="header">
                    <span>{{ blog.title }}</span>
                    <small>{{ blog.date }}</small>
                    <el-button style="float: right; padding: 3px 0" type="text"><router-link :to="'/blog/'+blog.id">Detail</router-link>
                    </el-button>
                </div>
                <div class="text item">
                    {{ blog.description }}
                </div>
            </el-card>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bloglist: [
                    {
                        id: '1',
                        title: 'blog1',
                        description: 'This is blog1'
                    },
                    {
                        id: '2',
                        title: 'blog2',
                        description: 'This is blog2'
                    },
                    {
                        id: '3',
                        title: 'blog3',
                        description: 'This is blog3'
                    },
                    {
                        id: '4',
                        title: 'blog4',
                        description: 'This is blog3'
                    }
                ],
                blogOne: {}
            }
        },
        methods: {
            findBlogKey(Id) {
                for (var key = 0; key < this.bloglist.length; key++) {
                    if (this.bloglist[key].id == Id) {
                        return key;
                    }
                }
            },
            showdetail(id) {
                this.blogOne = this.bloglist[this.findBlogKey(id)];
                this.$router.push({name: 'BlogDetail', params: {id: id}});

            }
        }
    }
</script>

<style>

</style>