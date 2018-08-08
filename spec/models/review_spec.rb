require 'rails_helper'

RSpec.describe Review, type: :model do
  it 'Review test' do
    # cuisine = create(:cuisine)
    restaurants = create(:restaurant)
    review = create(:review, restaurant: restaurants)

    puts restaurants.name
    puts review.inspect

  end
end
