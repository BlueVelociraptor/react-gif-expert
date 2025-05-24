import { useState } from "react"

type AddCategoryProps = {
    onNewCategory: (newCategory: string) => void
}

export const AddCategory = ({onNewCategory}: AddCategoryProps) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    )
}