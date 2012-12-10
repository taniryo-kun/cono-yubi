class Event < ActiveRecord::Base
  attr_accessible :candidate1, :candidate2, :candidate3, :deadline, :event_id, :event_name, :event_place, :event_pr, :event_time, :private_flag
  has_many :userlists
  
  validates_presence_of :event_name
  validates_presence_of :event_place
  validates_presence_of :candidate1
end
