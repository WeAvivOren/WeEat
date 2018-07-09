class Review < ApplicationRecord
  validates_presence_of :name, :rating  # Validates that the specified attributes are not blank
  validates_exclusion_of :rating, in: 0..3, message: 'Rating must be 0-3'
end
