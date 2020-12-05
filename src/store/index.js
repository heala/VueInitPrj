import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

//权限模块
const permission = {
    state: {
        menu: [
            {name: '首页'},
            {name: '分类'}
        ]
    },
    getters: {
        realName(state, rootGetters) {
            console.log(rootGetters);
            return rootGetters.fullname + " Hello"
        }
    },
    mutations: {},
    actions: {

    }
}

const store = new Vuex.Store({
    state: {
        name: '张三',
        count: 100,
        userinfo: {
            name: "zs",
            age: 18,
            token: "bearer: askfjalkjiwejr12390812"
        },
        userList: [
            {id: 101, name: '艾松', age: 18},
            {id: 102, name: '大胖', age: 28},
            {id: 103, name: '自己', age: 19}
        ]
    },
    mutations: {
        increment() {
            this.store.state++;
        },
        updateinfo(state, payload) {
            console.log(payload);
            state.userinfo.token = payload.token;
        }
    },
    getters: {
        filteUserByAge(state) {
            return age => {
                return state.userList.filter(user => user.age < age)
            }
        },
        fullname(state){
            return state.name + " 大坝"
        }
    },
    actions: {
        asyncUpdate(context, payload) {
            return new Promise((resolve, reject)=> {
                setTimeout(()=> {
                    context.commit('updateinfo', payload);
                    console.log('里面执行完成');
                    resolve('111')
                }, 1000);
            })
        }
    },
    modules: {
        permission: permission
    }
})

export default store;