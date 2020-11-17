export const todoStore = {
    state: {
        items: [
            'Привет',
            'Как дела',
            'Заебись',
            'А ты как',
            'Тоже заебись'
        ],
    },
    actions: {
        addItem(context, payload) {
            context.commit('addItem', payload);
        },
        clearItem(context, payload) {
            context.commit('clearItem', payload);
        },
    },
    mutations: {
        addItem(state, payload) {
            state.todo.items.push(payload);

            return state;
        },
        clearItem(state, payload) {
            state.todo.items.splice(state.todo.items.indexOf(payload.text), 1);

            return state;
        },
    }
}