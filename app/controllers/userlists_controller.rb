class UserlistsController < ApplicationController
  def new
  end

  def create
  	@userlist = Userlist.new(params[:userlist])
  	@event = Event.find_by_id(@userlist.event_id)
  	
  	respond_to do |format|
  		if @userlist.save
  		  format.html { redirect_to @event }
  		 else
  		  format.html { render @event }
  		 end
  	end
  end

  def edit
  end

  def update
  	@userlist = Userlist.find(params[:id])
  	if @userlist
  	@userlist.assign_attributes(params[:userlist])
  	end
  	@event = Event.find(@userlist.event_id)
  	if @userlist.save
  		redirect_to event_path(@event)
  	end
  end

  def destroy
  	@userlist = Userlist.find(params[:id])
  	@event = Event.find(@userlist.event_id)
    @userlist.destroy

    respond_to do |format|
      format.html { redirect_to event_path(@event) }
    end
  end
end
