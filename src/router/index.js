import Vue from 'vue'
import Router from 'vue-router'
import bloghome from '../components/bloghome'
import bloglist from '../components/bloglist'
import blogdetail from '../components/blogdetail'
import blogupdate from '../components/blogupdate'
import blogcreate from '../components/blogcreate'
import blogdelete from '../components/blogdelete'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name:'BlogHome',
            component: bloghome
        },
        {
            path: '/blogs',
            name: 'BlogList',
            component: bloglist
        },
        {
            path: '/blog/create',
            name: 'BlogCreate',
            component: blogcreate
        },
        {
            path: '/blog/:id',
            name: 'BlogDetail',
            component: blogdetail,
            props: true
        },
        {
            path: '/blog/:id/update',
            name: 'BlogUpdate',
            component: blogupdate,
            props: true
        },
        {
            path: '/blog/:id/delete',
            name: 'BlogDelete',
            component: blogdelete,
            props: true
        }
    ]
})

