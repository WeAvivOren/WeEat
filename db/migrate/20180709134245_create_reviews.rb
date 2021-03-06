class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :name
      t.integer :rating
      t.string :comment
      t.belongs_to :restaurant, foreign_key: true, null: false

      t.timestamps
    end
  end
end
