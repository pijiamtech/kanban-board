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

        if (!column) {
            throw new Error("Column does not exist.")
        }

        column.item.push(item);
        save(data);

        return item;
    }

    static updateItem(itemId, newProps) {
        const data = read();
        const [item, currentColumn] = (() => {
            for (const column of data) {
                const item = column.item.find(item => item.id == itemId);

                if (item) {
                    return [item, column];
                }
            }
        })(); 

        if (!item) {
            throw new Error("Item not found.");
        }

        item.content = newProps.content === undefined ? item.content : newProps.content;

        // Update column and position
        if (
            newProps.columnId !== undefined
            && newProps.position !== undefined
        ){
            const targetColumn = data.find(column => column.id == newProps.columnId);

            if (!targetColumn) {
				throw new Error("Target column not found.");
			}

            // Delete the item from it's current column
            currentColumn.item.splice(currentColumn.item.indexOf(item), 1);

            // Move item into it's new column and position
            targetColumn.item.splice(newProps.position, 0, item);
        }

        save(data);
    }

    static deleteItem(itemId) {
        const data = read();

        for (const column of data) {
            const item = column.item.find(item => item.id == itemId);

            if (item) {
                column.item.splice(column.item.indexOf(item), 1);
            }
        }

        save(data);
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

