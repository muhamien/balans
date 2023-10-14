import { atom } from "recoil";

const profileGlobalState = atom({
    key: 'profile',
    default: undefined
})
const localeGlobalState = atom({
    key: 'locale',
    default: undefined
})
const areaIdGlobalState = atom({
    key:'areaId',
    default: undefined
})
const motoristIdGlobalState = atom({
    key:'motoristId',
    default: undefined
})

export {
    areaIdGlobalState,
    motoristIdGlobalState,
    profileGlobalState,
    localeGlobalState
}
