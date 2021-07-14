json.extract! cart_item, :id, :product_id, :quantity
json.photoUrl url_for(product.photos.first)
