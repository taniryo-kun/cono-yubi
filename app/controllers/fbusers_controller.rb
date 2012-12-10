#conding: utf-8

class FbusersController < ApplicationController

  CALLBACK_URL    = "http://www.cono-yubi.com/fbusers/callback"
  CONSUMER_KEY    = "411286712247085"
  CONSUMER_SECRET = "1af04ea073ab80331de73944ec49fc4e"
  SCOPE           = "read_friendlists, offline_access, read_requests"
  
  def index
  end

  def oauth
    client = FacebookOAuth::Client.new(
      :application_id     => CONSUMER_KEY,
      :application_secret => CONSUMER_SECRET,
      :callback           => CALLBACK_URL,
      :scope              => SCOPE
    )
    redirect_to client.authorize_url
  end

  def callback
    @client = FacebookOAuth::Client.new(
      :application_id     => CONSUMER_KEY,
      :application_secret => CONSUMER_SECRET,
      :callback           => CALLBACK_URL,
      :scope              => SCOPE
    )
    
    #@client.authorize_url(:scope => "read_friendlists, offline_access, read_requests") => "https://graph.facebook.com/oauth/authorize?scope=SCOPE&client_id=ID&type=web_server&redirect_uri=CALLBACK/"
    @client.authorize(:code => params[:code])
  end
  
end
