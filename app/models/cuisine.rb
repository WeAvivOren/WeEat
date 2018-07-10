# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord
  validates_presence_of :name # Validates that the specified attributes are not blank

  has_many :restaurants

end
