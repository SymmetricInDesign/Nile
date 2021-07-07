class Category < ApplicationRecord
    validates :name, :details, presence: true
end
