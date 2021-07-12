class Product < ApplicationRecord
    has_many_attached :photos

    def self.filter(category="All Departments", searchTerm='-1')
        if (category == 'All Departments' && searchTerm == '-1')
            Product.with_attached_photos.all
        elsif (category == 'All Departments' && searchTerm != '-1')
            Product.with_attached_photos.where("name LIKE '#{searchTerm}'")
        else
            category_id = Category.find_by(name: category).id
            Product.with_attached_photos.where("name LIKE '#{searchTerm}'' AND category_id = #{category_id}")
        end
    end
end
