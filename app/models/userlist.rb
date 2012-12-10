# coding: utf-8

class Userlist < ActiveRecord::Base
  attr_accessible :candidate_response1, :candidate_response2, :candidate_response3, :event_id, :participant_number, :user_id
  belongs_to :event
  has_many :users
  
  def change(number)
  	case number
  	when 2
  	 return "〇"
  	when 1
  	 return "△"
  	when 0
  	 return "×"
  	end
  end
  
end
