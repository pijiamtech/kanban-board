export default class kanban {
    constructor(root) {
        this.root = root;

        KanbanAPI.columns().forEach(columns => {
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.element.root);
        });
    }

    static columns() {
        return [
            {
                id: 1,
                title: "Not Started"
            },
            {
                id: 2,
                title: "In Progress"
            },
            {
                id: 3,
                title: "Completed"
            }
        ];
    }
}