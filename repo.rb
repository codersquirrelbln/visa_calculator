# do we need a countryRepo if there is only one? this should be user repo
#and trips rpo...?!


# class CountryRepository
#   def initialize(country)
#     @country = country
#   end

#   # def add(task)
#   #   @tasks << task
#   # end

#   # def all
#   #   @tasks
#   # end

#   def find(index)
#     @tasks[index]
#   end

#   def remove(index)
#     @tasks.delete_at(index)
#   end
# end


# # repo holding out data, list of countries or trips?
# # REPO holding the list of receipes

# require 'csv'

# class Cookbook
#   def initialize(csv_file)
#     # array that stores instances of the Recipe class
#     @recipes = []
#     @path = csv_file
#     load_csv
#   end

#   def all
#     @recipes
#   end

#   def add_recipe(recipe)
#     # pushing new recipe into the array of recipe instances
#     @recipes << recipe
#     storing_csv
#   end

#   def remove_recipe(recipe_index)
#     @recipes.delete_at(recipe_index)
#     storing_csv
#   end

#   private

#   def load_csv
#     CSV.foreach(@path) do |row|
#       # each row should be an instance of the cookbook class
#       # row[0] is the name, row[1] is the description
#       new_recipe = Recipe.new(row[0], row[1])
#       # that then gets pushed into the array
#       @recipes << new_recipe
#     end
#   end

#   def storing_csv
#     CSV.open(@path, 'w') do |csv|
#       @recipes.each do |recipe|
#         # recipe is an instance of the Recipe class, accessing the instance variable
#         # with attribute readers(see receipe.rb file, instance-methods)
#         # pushing each instance into the csv file in an array form (row)
#         csv << [recipe.name, recipe.description]
#       end
#     end
#   end
# end
