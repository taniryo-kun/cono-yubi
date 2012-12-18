class ApplicationController < ActionController::Base

  include Jpmobile::ViewSelector

  protect_from_forgery
  
  before_filter :current_user

  
  class Forbidden < StandardError; end
  
  helper_method :current_user
  
 def login_check
	  if @current_user.blank?
	  	redirect_to(:controller => "users", :action => "index")
	  else
	  end
  end
  
  private
  def current_user
    @current_user = User.find_by_uid(session[:user_id]) if session[:user_id]
  end
  
  def authorize
  	if session[:user]
  		@current_user = User.find_by_uid(session[:user])
  		session.delete(:user) unless @current_user
  	end
  end
  
  def login_required
  	raise Forbidden unless @current_user
  end
end
