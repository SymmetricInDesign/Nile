json.extract! product, :id, :name, :details, :price, :category_id
json.photoUrls product.photos.map { |file| url_for(file) }
