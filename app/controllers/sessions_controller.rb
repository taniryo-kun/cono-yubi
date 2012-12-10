# coding: utf-8

class SessionsController < ApplicationController
	def callback
	  #raise request.env["omniauth.auth"].to_yaml
		#omniauth.auth環境変数を取得
		auth = request.env["omniauth.auth"]
		
		#ACCESS_TOKENをセッションに保存する
		session[:token] = auth.credentials.token

		#Userモデルを検索
		user = User.find_by_provider_and_uid(auth.provider, auth.uid)

		if user
			#既存のユーザ情報があった場合　ルートに遷移させます
			session[:user_id] = user.uid
			if session[:data]
			@event = Event.find(session[:data])
			session[:data]=nil
		    redirect_to @event
		    else
			redirect_to events_url, :notice => "ログインしました。"
			end
		else
			#Userモデルに:providerと:uidが無い場合（外部認証していない）、保存してからルートへ遷移させる
			User.create_with_omniauth(auth)
			redirect_to events_url#, :notice => "#{ auth.info.name さんの #{ auth.provider }アカウントと接続しました。"
		end

		#raise request.env["omniauth.auth"].to_yaml
	end

	def create
		user = User.authenticate(params[:user_id])
		if user
			session[:user] = user.user_name
		else
			flash.alert = ""
		end
		redirect_to params[:form] || :root
	end
	
	def destroy
		session.delete(:user)
		redirect_to :root
	end
end
