class CartItem < ApplicationRecord
    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
