class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :creator

  def creator
    "#{object.user.email}"
  end
end
