export default class kanban {
    constructor(root) {
        this.root = root;

        KanbanAPI.columns().forEach(columns => {
            // TODO: create an instance Column class
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