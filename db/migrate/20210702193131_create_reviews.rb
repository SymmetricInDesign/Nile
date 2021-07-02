class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, :product_id, null: false
      t.string :title, :body
      t.decimal :rating, precision: 2, scale: 1
      t.index :author_id
      t.index :product_id
      t.timestamps
    end
  end
end
