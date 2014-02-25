class ArticlesController < ApplicationController

  # remove root node from JSON
  # def default_serializer_options
  #   {root: false}
  # end

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.all

    render json: @articles
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    @article = Article.find(params[:id])

    render json: @article
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  # PATCH/PUT /articles/1.json
  def update
    @article = Article.find(params[:id])

    if @article.update(params[:article])
      head :no_content
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    head :no_content
  end

  private
    def article_params
      params.require(:article).permit(:title, :body, :id)
    end
end
