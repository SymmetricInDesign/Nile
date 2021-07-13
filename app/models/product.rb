class Product < ApplicationRecord
    has_many_attached :photos
    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

    def self.filter(category="All Departments", searchText='-1')
        if (category == 'All Departments' && searchText == '-1')
            Product.with_attached_photos.all
        elsif (category == 'All Departments' && searchText != '-1')
            Product.with_attached_photos.where("name LIKE '%#{searchText}%'")
        elsif (searchText != '-1')
            category_id = Category.find_by(name: category).id
            Product.with_attached_photos.where("name LIKE '%#{searchText}%' AND category_id = #{category_id}")
        else
            category_id = Category.find_by(name: category).id
            Product.with_attached_photos.where("category_id = #{category_id}")
        end
    end
end
