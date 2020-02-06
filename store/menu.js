export const state = () => ({
    vtitle: "",
    vback: "",
    vcolor: "",
    vbuttons: []
});

export const mutations = {
    changeTitle(state,title) {
        state.vtitle = title;
    },
    changeBackground(state,back) {
        state.vback = back;
    },
    changeFontColor(state,color) {
        state.vcolor = color;
    },
    addButton(state,button) {
        state.vbuttons.push(button);
    }
}

export const actions = {
    setConfig({commit},body) {
        commit('changeTitle',body.title);
        commit('changeBackground',body.back);
        commit('changeFontColor',body.color);
    },
    setButtons({state,commit},body) {
        let count = 0;
        let buttons = state.vbuttons;
        body.forEach(button => {
            if (buttons.length) {
                buttons.forEach(btn => {
                    if (btn.id == button.id) count += 1;
                })
            }
            if (count == 0) commit('addButton',button);
        })
    }
}