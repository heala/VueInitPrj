import router from "./router";
import {getToken} from "network/auth";
import store from "./store";

router.beforeEach(((to, from, next) => {
    if(getToken()) {    //登陆完成
        store.dispatch("getUserInfo");
        next()
    } else {
        next();
    }
}))
