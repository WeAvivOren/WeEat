class AddLatToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :lat, :string
  end
end
