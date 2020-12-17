const getters = {
    token: state=> state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    note: state => state.user.note
}
export default getters
