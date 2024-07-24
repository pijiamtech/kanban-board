export default class KanbanAPI {
    static getItem(columnId) {
        const column = read().find(column => column.id == columnId)

        if (!column) {
            return [];
        }

        return column.item;
    }

    static insertItem(columnId, content) {
        const data = read();
        const column = data.find(column => column.id == columnId)
        const item = {
            id: Math.floor(Math.random() * 100000),
            content: content
        }

        if (!colimn) {
            throw new Error("Colimn does not exist.")
        }

        column.item.push(item);
        save(data);

        return item;
    }
}

function read() {
    const json = localStorage.getItem("kanban-data");

    if (!json) {
        return [
            {
                id:1,
                item: []
            },
            {
                id:2,
                item: []
            },
            {
                id:3,
                item: []
            },
        ];
    }

    return JSON.parse(json);
}

function save(data) {
    localStorage.setItem("kanban-data", JSON.stringify(data));
}

