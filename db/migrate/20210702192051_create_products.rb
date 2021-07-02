class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :category_id, null: false
      t.string :name, null: false
      t.string :details, null: false
      t.decimal :price, null: false, precision: 10, scale: 2
      t.timestamps
      t.index :category_id
    end
  end
end
