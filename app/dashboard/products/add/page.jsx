import styles from '@/app/ui/dashboard/products/addProduct.module.css';

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form
                action=""
                className={styles.form}
            >
                <input type="text" placeholder='Title' name='title' required />
                <select name="category" id="category">
                    <option value="general">Choose a category</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="tablet">Tablet</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <input type="number" placeholder='Price' name='price' />
                <input type="number" placeholder='Stock' name='stock' />
                <input type="text" placeholder='Color' name='color' />
                <input type="text" placeholder='Size' name='size' />
                <textarea name="desc" id="desc" rows="16" placeholder='Description'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddProductPage