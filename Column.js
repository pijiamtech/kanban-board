export default class Column {
    constructor(id, title) {
        this.element = {};
        this.element.root = Column.createRoot();
        this.element.title = this.element.root.querySelector(".kanban__column-title");
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title"></div>
                <div class="kanban__column-items"></div></div>
                <button class="kanban__add-item" type="button">+ Add</button>
            </div>
        `).childNodes[0];
    }
}