# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)BlogPostsController is a child of app controller
class BlogPostsController < ApplicationController
  def index
    # ---2) method to index each blog post get instance of posts and make it equal to all, will show all when called
    @posts = BlogPost.all
  end

  # ---3) Show method/route. With the index method we are able to use params to show a particular blog post, using active record call /params to index the correct post we are refrencing.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New method/route to make display from to user. Now when you declare BlogPost.new can declare a new instance of a blog post that can be stored to db
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Restful route that submist user data to db. The instance of post is equal to BlogPost.create passing params if its valid passing post request 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)Method that allows to edit a post. Using params and the id to edit a post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)The update changes item in db using strong params
    @post.update(blog_post_params)    #at the instace of update use params
    if @post.valid?                   #if the post is valid
      redirect_to blog_post_path(@post) #route to send a patch request 
    else
      redirect_to edit_blog_post_path #not valid send back to edit path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)Send back to the path(route) to post and item will not be destroyed
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)Private is a keyword in Ruby that restrics scope of wher method is called. Ony meant to be used as arguments for controller methods. By calling them private we ensure they can't be called anywher else in program.
  private
  def blog_post_params
    # ---10)Making use of strong params  provid control over what info is passed into db. Here allowing changes to title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
