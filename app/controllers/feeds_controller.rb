class FeedsController < ApplicationController
  include LoginHelper
  include FeedsHelper
  before_action :logged_in , only: :add
  def home
    
  end

  def add_form
  end

  def add
    @feed = current_user.feeds.build(content: params[:content])
    if @feed.save
      p "Feed created"
      redirect_to '/'
    else
      p "Some error occurred"
      redirect_to '/feeds/add'
    end 
  end

  def delete
    Feed.find(params[:id]).destroy
    redirect_to '/'
  end

  def edit_form
  end

  def edit
  end

  


end
