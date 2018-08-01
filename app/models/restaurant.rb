# == Schema Information
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
#

class Restaurant < ApplicationRecord

  validates_presence_of :name, :address, :max_delivery_time_minutes # Validates that the specified attributes are not blank
  validates_inclusion_of :accepts_10bis, in: [true, false] #

  has_many :reviews
  belongs_to :cuisine

  def combo
    cus = Cuisine.select(:name, :id)
    return cus
  end

  def update_rating
    self.rating = reviews.exists? ? reviews.average(:rating).round : 0
    save!
  end

end
