export const template = function(){
    let tickets = this.props.store.state.cpm.tickets;
    return {
        tagName: 'div',
        classList: ['cpm-table'],
        children: [
            {
                tagName: 'h2',
                classList: ['cpm-table__title'],
                textContent: 'List of tickets'
            },
            {
                tagName: 'div',
                classList: ['cpm-table__list'],
                children: [
                    ...tickets.map(ticket => { return {
                        tagName: 'div',
                        classList: ['cpm-table__ticket'],
                        children: [
                            ...Object.values(ticket).map(value => { return {
                                tagName: 'div',
                                classList: ['cpm-table__ticket-col'],
                                textContent: value
                            }})
                        ]
                    }})
                ]
            },
        ]
    }
}