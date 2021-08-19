class ChangeProducts < ActiveRecord::Migration[5.2]
  def change
    change_table :products do |t|
      t.remove :category_id
      t.integer :category_id, presence: true
    end
  end
end
