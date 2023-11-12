import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state() {
        return {
            user: null,
        }
    },
    mutations: {
        SET_USER: (state, user)=> {
            state.user = user
        },
        SET_BACKGROUND_IMAGE: (state, image)=> {
            state.user.background_image_url = image
        },
        SET_PROFILE_IMAGE: (state, image)=> {
            state.user.profile_image_url = image
        },
        SET_FOLLOW: (state, uid)=> {
            state.user.follwings.push(uid)
        },
        SET_UN_FOLLOW: (state, uid)=> {
            state.user.follwings = state.user.follwings.filter((u) => u !== uid)
        },
    },
    plugins: [createPersistedState()],
})

export default store