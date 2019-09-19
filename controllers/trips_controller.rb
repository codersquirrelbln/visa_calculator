# # CONTROLLER: it will fetch and store data of the Model,
# # and tell the view to show or gather data to and from the user.

# require_relative 'recipe'
# require_relative 'cookbook'
# require_relative 'view'

# class CountryController
#   def initialize(cookbook)
#     @cookbook = cookbook
#     @view = View.new
#   end

#   def list
#     # get recipe from cookbook
#     display_recipe_list
#   end

#   def create
#     @trip = Trip.new
#     # name = @view.add_name
#     # description = @view.add_description
#     # recipe = Recipe.new(name, description)
#     # @cookbook.add_recipe(recipe)
#   end

# #   def destroy
#     display_recipe_list
#     index = @view.what_to_delete
#     @cookbook.remove_recipe(index)
#     # ask view to ask the user which the user wants to delete
#     # @decipe.delete_at(index)
#   end

#   private

#   def display_recipe_list
#     recipes = @cookbook.all
#     @view.display_list(recipes)
#   end
# end
