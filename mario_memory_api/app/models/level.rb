class Level < ApplicationRecord
    has_many :tiles, :dependent => :destroy
    has_many :scores, :dependent => :destroy
end
