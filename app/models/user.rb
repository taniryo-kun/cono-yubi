class User < ActiveRecord::Base
  attr_accessible :email, :user_age, :user_id, :user_name
  belongs_to :userlist
  
  def self.create_with_omniauth(auth)
  	create! do |user|
  		user.provider = auth.provider
  		user.uid = auth.uid
  		user.token = auth.credentials.token
  		
  		if user.provider == "facebook"
  		  user.name = auth.info.name
  		else
  		  user.name = auth.info.nickname
  		end
  	end
  end
  
  class << self
  	def authenticate(name)
  		user = find_by_user_id(name)
  		if user
  			user
  		else
  			nil
  		end
  	end
  end
end
