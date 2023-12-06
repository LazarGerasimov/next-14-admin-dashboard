import Image from 'next/image';

import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct.module.css';
import { updateProduct } from '@/app/lib/actions';

const SingleProductPage = async ({
  params
}) => {

  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img || "/noavatar.png"}
            alt='product_image'
            fill
          />
        </div>
        {product.phone}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          {/* hidden input used to send data using next 14 server actions */}
          <input type="hidden" name='id' value={product.id} />
          <label>Title</label>
          <input type="text" name='title' defaultValue={product.title} />
          <select name="category" id="category">
            <option value="general">{product.category}</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="tablet">Tablet</option>
          </select>
          <label>Price</label>
          <input type="number" name='price' defaultValue={product.price} />
          <label>Stock</label>
          <input type="text" name='stock' defaultValue={product.stock} />
          <label>Color</label>
          <input type="text" name='color' defaultValue={product.color} />
          <label>Size</label>
          <input type="text" name='size' defaultValue={product.size} />
          <label>Description</label>
          <textarea type="text" name='description' defaultValue={product.description} />
          <button>Update</button>
        </form>

      </div>
    </div>
  )
}

export default SingleProductPage