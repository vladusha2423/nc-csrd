export const cpmStore = {
    state: {
        tickets: [
            {
                id: 1,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 2,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 3,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 4,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 5,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 6,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 7,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 8,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 9,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
            {
                id: 10,
                dateOfCreation: '17.11.2020',
                type: 'support',
                status: 'active',
                closingDate: '22.11.2020'
            },
        ],
        ticketTypes: {
            example: {
                availableParameters: {
                    dateOfCreation: 'Date of creation',
                    type: 'Type',
                    status: 'Status',
                    closingDate: 'Closing date'
                }
            },
            support: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            security: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    email: 'Customer email',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            billing: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            sale: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            generic: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            }
        },
        ticketStatuses: [
            'active',
            'canceled',
            'executing',
            'done',
            'notDone',
        ],
        ticketsByCustomers: {
            dateOfCreation: 'Date of creation',
            type: 'Ticket type',
            status: 'Ticket status',
            closingDate: 'Closing date',
        },
        sortTicketsByCustomersParameters: {
            dateOfCreation: 'Date of creations',
            closingDate: 'Closing date'
        },
        sortTicketsParameters: {
            type: 'Ticket type',
            dateOfCreation: 'Date of creations',
            closingDate: 'Closing date',
            status: 'Ticket status'
        },
    },
    actions: {
        addCpmTicket(context, payload) {
            context.commit('addItem', payload);

        },
        clearCpmTicket(context, payload) {
            context.commit('clearItem', payload);
        },
    },
    mutations: {
        addCpmTicket(state, payload) {
            payload.id = state.todo.items.length + 1;
            state.todo.items.push(payload);

            return state;
        },
        clearCpmTicket(state, payload) {
            state.todo.items.splice(state.todo.items.indexOf(payload.text), 1);

            return state;
        },
    }
}