class ScoresController < ApplicationController

    def index
        @scores = Score.order(number: :desc)
        render json: @scores
    end

    def show
      @score = Score.find(params[:id])
      render json: @score
    end 

    def create
        @score = Score.create(score_params)
        render json: @score
    end

    def destroy
      @score = Score.find(params[:id])
      @score.destroy
      render json: {message: "This score has been deleted"}
    end
    
      private 

      def score_params
        params.permit(:name, :number, :Level_id)
      end 


end
