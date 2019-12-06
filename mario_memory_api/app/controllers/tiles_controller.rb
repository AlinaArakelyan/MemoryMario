class TilesController < ApplicationController

    def index
        @half_tiles = Tile.all.shuffle.slice(0,9)
        duplicateArr = @half_tiles.map(&:clone)
        @tiles = (duplicateArr + @half_tiles).shuffle
        render json: @tiles
    end

    def show
        @tile = Tile.find(params[:id])
        render json: @tile
    end
end

