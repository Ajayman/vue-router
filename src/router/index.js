import Vue from 'vue'
import Router from 'vue-router'
import bloglist from '../components/bloglist'
import blogdetail from '../components/blogdetail'
import blogupdate from '../components/blogupdate'
import blogcreate from '../components/blogcreate'
import blogdelete from '../components/blogdelete'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/blogs',
            component: bloglist
        },
        {
            path: '/blog/create',
            component: blogcreate
        },
        {
            path: '/blog/:id',
            component: blogdetail,
            props: true
        },
        {
            path: '/blog/:id/edit',
            component: blogupdate,
            props: true
        },
        {
            path: '/blog/:id/delete',
            component: blogdelete,
            props: true
        }
    ]
})

