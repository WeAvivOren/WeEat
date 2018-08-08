#
# Table name: restaurants
#
#  id                        :bigint(8)        not null, primary key
#  name                      :string
#  cuisine_id                :integer
#  rating                    :integer
#  accepts_10bis             :boolean
#  address                   :string
#  max_delivery_time_minutes :integer
#  created_at                :datetime         not null
#  updated_at                :datetime         not null


FactoryBot.define do
  factory :restaurant do
    name     { Faker::Name.name  }
    # cuisine_id { Faker::Number.between(4, 5) }
    rating   { Faker::Number.between(1, 5) }
    accepts_10bis {Faker::Boolean.boolean }
    address  { Faker::Address.full_address }
    img {"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/1/8/4/144813-1-eng-GB/Front.jpg" }
    lat {Faker::Address.latitude}
    lng {Faker::Address.longitude}
    max_delivery_time_minutes { Faker::Number.between(10, 60) }
    cuisine
  end
end