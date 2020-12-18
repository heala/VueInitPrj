import {login, regist, logout, getUserInfo} from 'network/system/user'
import {setToken, removeToken} from 'network/auth'
import {Message} from 'element-ui';

const user = {
    state: {
        avatar: '',
        name: '',
        note: ''
    },
    mutations: {
        setAvatar(state, avatar) {
            state.avatar = avatar;
        },
        setName(state, userName) {
            state.name = userName;
        },
        setNote(state, note) {
            state.note = note;
        },
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        login({commit, state}, data) {
            return new Promise(((resolve, reject) => {
                login(data).then(res => {
                    if (res.code === 200) {
                        setToken(res.msg)
                        Message({
                            type: "success",
                            message: "登陆成功",
                            duration: 800
                        });
                        resolve();
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
                commit('setToken', '');
                commit('setAvatar', '');
                commit('setName', '');
                commit('setNote', '');
                removeToken();
            }).catch(err => {
            })
        },
        getUserInfo({commit}, token) {
            getUserInfo().then(res => {
                commit('setAvatar', res.data.avatar);
                commit('setName', res.data.userName);
                commit('setNote', res.data.note);
            })
        }
    }
}
export default user
