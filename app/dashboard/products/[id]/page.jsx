import styles from '@/app/ui/dashboard/products/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/noavatar.png"
            alt='no_avatar_image'
            fill
          />
        </div>
        Random Phone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name='title' placeholder='test title' />
          <select name="category" id="category">
            <option value="general">Choose a category</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="tablet">Tablet</option>
          </select>
          <label>Price</label>
          <input type="number" name='price' placeholder='test price' />
          <label>Stock</label>
          <input type="text" name='stock' placeholder='test stock' />
          <label>Color</label>
          <input type="text" name='color' placeholder='test color' />
          <label>Size</label>
          <input type="text" name='size' placeholder='test size' />
          <label>Description</label>
          <textarea type="text" name='description' placeholder='Random Test Description' />
          <button>Update</button>
        </form>

      </div>
    </div>
  )
}

export default SingleProductPage