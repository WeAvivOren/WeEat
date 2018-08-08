class AddLngToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :lng, :string
  end
end
