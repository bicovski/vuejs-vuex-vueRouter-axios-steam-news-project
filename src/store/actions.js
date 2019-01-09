export const updateAppId = ({commit} , appId) => {
    commit('setAppId', appId);
}


export const updateAppContent = ({commit} , appContent) => {
    commit('setAppContent', appContent);
}

export const updateLink = ({commit} , link) => {
    commit('setLink', link);
}

export const updateHeader = ({commit} , header) => {
    commit('setHeader', header);
}