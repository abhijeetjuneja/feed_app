module FeedsHelper
  def feeds
    @names = Array.new
    @ids = Array.new
    @relationships = Relationship.all
    @relationships.each_with_index do |item,i|
      if item[:follower_id] == current_user.id
        @ids.push(item.followed_id)
      end
    end
    @ids.push(current_user.id)
    @feeds = Feed.where(user_id: @ids)
    if @feeds != nil
      @feeds.each_with_index do |item,i|
        @names[i] = get_name item[:user_id]
      end
    end
    return @feeds,@names
  end
end
