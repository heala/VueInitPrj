import {login, regist, logout, getUserInfo} from 'network/system/user'
import {setToken, removeToken} from 'network/auth'
import {Message} from 'element-ui';

const user = {
    state: {
        currentUser: {},
        token: ''
    },
    mutations: {
        setUser(state, user) {
            state.currentUser.name = user.userName;
            state.currentUser.note = user.note;
            state.currentUser.avatar = user.avatar;
        },
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        login({commit}, data) {
            return new Promise(((resolve, reject) => {
                login(data).then(res => {
                    setToken(res.msg);
                    commit('setToken', res.msg);
                    if (res.code === 200) {
                        Message({
                            type: "success",
                            message: "登陆成功",
                            duration: 800
                        })
                        resolve()
                    } else {
                        Message({
                            type: "error",
                            message: res.msg,
                            duration: 1000
                        })
                    }
                })
            }))
        },
        regist({commit}, data) {
            return new Promise((resolve, reject) => {
                regist(data).then(res => {
                    setToken(res.msg);
                    commit('setToken', res.msg)
                    if (res.code === 200) {
                        Message({
                            type: "success",
                            message: "注册成功",
                            duration: 800
                        })
                        resolve();
                    }
                })
            })
        },
        logout({commit}) {
            logout().then(() => {
                commit('setToken', '')
                removeToken();
            }).catch(err => {
            })
        },
        getUserInfo({commit}, userName) {
            getUserInfo(userName).then(res => {
                commit('setUser', res.msg);
            })
        }
    }
}
