@reviews.each do |review|
    json.set! review.id do
        json.partial! 'api/reviews/review', review: review, username: review.author.username
    end
end