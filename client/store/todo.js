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
    getters: {
        getItems(context, payload){
            return context.state.todo.items;
        }
    },
    actions: {
        addItem(context, payload) {
            //типа загрузка на сервак
            //типа выгрузка с сервака
            context.commit('addItem', payload);
        },
        clearItem(context, payload) {
            //типа загрузка на сервак
            //типа выгрузка с сервака
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