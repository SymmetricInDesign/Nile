class ChangeProducts2 < ActiveRecord::Migration[5.2]
  def change
    change_table :products do |t|
      t.remove :category_id
      t.integer :category_id, null: false
    end
  end
end
