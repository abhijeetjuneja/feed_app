module FeedsHelper
  def feeds
    @feeds = Feed.all
    @names = Array.new
    @feeds.each_with_index do |item,i|
      @names[i] = get_name item[:user_id]
    end
    return @feeds,@names
  end
end
