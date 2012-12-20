#coding: utf-8

class EventsController < ApplicationController
  # GET /events
  # GET /events.json
  #フィルターを有効にするとログインしているかチェックを行う
  #before_filter :login_check
  
  def index
    @events = Event.find(:all,:conditions => ["private_flag = ?", 0], :order => "updated_at DESC")
    @event = Event.new
	$token = session[:token]
	
	#全イベント確認用
	@allevents = Event.all(:order => "updated_at DESC")

		respond_to do |format|
	      format.html # index.html.erb
	      format.json { render json: @events }
	      format.xml { render xml: @allevents }
	    end
  end
  
  def indexMypage
    @userlists = Userlist.find_all_by_user_id(@current_user.name)
    @event = Event.new
    $listarray = Array.new()
    @userlists.each do |ul|
    	$listarray.push(ul.event_id)
    end
	@events = Event.find_all_by_id($listarray, :order => "updated_at DESC")
  	respond_to do |format|
  	format.html { render "index" }
  	format.xml { render xml: @events}
  	end
  end

  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(params[:id])
    if @event.userlists.find_by_participant_number(1).present?
    	@promorterName = @event.userlists.find_by_participant_number(1).user_id
    end
    @userlists = Userlist.where(event_id: @event.id)
    $listnum = 0

    @attendance = Hash::new
    @attendance["candidate_response1"] = 0
    @attendance["candidate_response2"] = 0
    @attendance["candidate_response3"] = 0

    @userlists.each do |f|
    	$listnum += 1

            @attendance.each_key do |key|
                    if f[key] == 2 || f[key] == 1
                         @attendance[key] += 1
                    end
               end

    	if f.user_id == @current_user.name
    	@userlist = Userlist.find_by_event_id_and_user_id(@event.id, f.user_id)
		end
	end
	
	if @userlist == nil
		@userlist = Userlist.new(event_id: @event.id, user_id: @current_user.name, candidate_response1: 2,candidate_response2: 2,candidate_response3: 2)
	end

    respond_to do |format|
      format.html { render layout: "detail" }
      format.json { render json: @event }
    end
  end

  # GET /events/new
  # GET /events/new.json
  def new
    @events = Event.all
    @event = Event.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/1/edit
  def edit
    @event = Event.find(params[:id])
    @events = Event.all
    render "edit"
  end
  
  #アクセストークン（テスト用）
  TOKEN = "AAAF2ECZAiYy0BANqXcR1f30eDl6HlAHwLSpbRUOcMCnZBJUv0Jwo4RAeD4tlE9DNUFPoTRNmKTzmOn1gxe3sZAonooVt7tQB6TyzsebYgZDZD"
  # 送信するイベント情報の文言を自動生成するメソッド
  def automessage
  	@graph = Koala::Facebook::GraphAPI.new(TOKEN)
  	@profile = @graph.get_object("me")
  	render "messagebox"
  end

  def getfriendlist
   @graph = Koala::Facebook::GraphAPI.new(session[:token])
   @friendlist = @graph.get_object("me/friends")
   render "friendlist"
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(params[:event])

    respond_to do |format|
      if @event.save
        @promorter = Userlist.new(event_id: @event.id, user_id: @current_user.name, participant_number: 1) 
        if @promorter.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render json: @event, status: :created, location: @event }
        else
        format.html { redirect_to @event, notice: '幹事の設定に失敗しました。' }
        format.json { render json: @event, status: :created, location: @event }
        end
      else
        format.html { render action: "new" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /events/1
  # PUT /events/1.json
  def update
    @event = Event.find(params[:id])

    respond_to do |format|
      if @event.update_attributes(params[:event])
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end
  
  def multifriendselect
	
	render "multifriendselect"
  end
end
