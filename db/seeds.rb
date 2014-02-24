num_users = 300
num_users.times do |i|
  User.create!(email: Faker::Internet.email)  
end

num_articles = 10
num_articles.times do |i|
  # Article will have between 1 and 10 paragraphs
  article_text = Faker::Lorem.paragraphs((i%10)+1).join(' ')
  article = Article.create!(title: Faker::Lorem.word, body: article_text )

  puts "Created Article #{i}"

  # Article will have btw 1 to 7 comments.
  rand(1..7).times do |i|
    # Grab a random user that will be the commenter.
    the_user = User.find(rand(1..num_users))
    article.comments.create!(body: Faker::Lorem.paragraphs(i+1).join(' '), user: the_user)
    puts "Created comment for #{article.title} "
  end
end

# Add a bunch of comments to the last Article
last_article = Article.last
100.times do |i|
    the_user = User.find(rand(1..num_users))
    last_article.comments.create!(body: Faker::Lorem.paragraphs(i+1).join(' '), user: the_user)
end
