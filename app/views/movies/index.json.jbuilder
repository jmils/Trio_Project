json.array!(@movies) do |movie|
  json.extract! movie, :id, :title, :front_text, :front_image, :question, :back_text, :back_image, :hint, :likes, :dislikes
  json.url movie_url(movie, format: :json)
end
