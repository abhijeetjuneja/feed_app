class FeedsController < ApplicationController
  include LoginHelper
  def home
    byebug
    current_user 
  end
end
