class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :location
      t.string :price
      t.text :description
      t.text :terms_and_conditions
      t.references :user, index: true
      t.references :item, index: true

      t.timestamps
    end
  end
end
