import router from "./router";
import {getToken} from "network/auth";
import store from "./store";

router.beforeEach(((to, from, next) => {
    let currentUser = store.state.user.name;
    if(getToken() && currentUser == '') {    //登陆完成
        store.dispatch("getUserInfo", getToken());
        next()
    } else {
        next();
    }
}))
