# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  rating     :integer
#  comment    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


FactoryBot.define do
  factory :review do
    name     { Faker::Friends.character }
    rating   { Faker::Number.between(1, 5) }
    comment  { Faker::Friends.quote }
  end
end