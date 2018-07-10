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

class Review < ApplicationRecord
  validates_presence_of :name, :rating  # Validates that the specified attributes are not blank
  validates_exclusion_of :rating, in: 0..3, message: 'Rating must be 0-3'

  belongs_to :restaurant
end
