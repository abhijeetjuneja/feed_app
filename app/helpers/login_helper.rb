module LoginHelper
  def log_in(user)
    session[:user_id] = user.id
  end

  def logged_in
    !current_user.nil?

  end

  def get_name(id)
    @name = User.find(id).name
  end

  def current_user?(user)
    user = current_user
  end

  def current_user
    if (user_id = session[:user_id])
      @current_user ||= User.find_by(id: user_id)
    elsif (user_id = cookies.signed[:user_id])
      user = User.find_by(id: user_id)
      if user && user.authenticate?(:remember , cookies[:remember_token])
        log_in user
        @current_user = user
      end
    end 
  end

  def remember(user)
    p "remembered"
    user.remember
    cookies.permanent.signed[:user_id] = user.id
    cookies.permanent[:remember_token] = user.remember_token

  end

  def follow_user(other_user_id)
    p "Follow called"
    @relationship = Relationship.new(follower_id: current_user.id, followed_id: other_user_id)
    if @relationship.save
      p "relationship created!"
      redirect_to '/users'
    else
      p "Some Error occurred"
    end
  end

  def unfollow_user(other_user_id)
    @relationship = Relationship.find_by(follower_id: current_user.id, followed_id: other_user_id)
    @relationship.destroy
    redirect_to '/users'
  end


  # Forgets a persistent session.
  def forget(user)
    user.forget
    cookies.delete(:user_id)
    cookies.delete(:remember_token)
  end

  def log_out
    forget(current_user)
    session.delete(:user_id)
    @current_user = nil
    redirect_to '/login'
  end

end
