import React, {useState} from "react";

interface TodoFormProps {
    onSubmit: (title: string) => void
}

export default function TodoForm({onSubmit}: TodoFormProps) {
    const [newItem, setNewItem] = useState<string>("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }

    return (<form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text" id="item"
            />
        </div>
        <button className="btn">Add</button>
    </form>)
}
