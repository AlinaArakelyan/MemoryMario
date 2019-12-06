class LevelSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :scores
  has_many :tiles
end
