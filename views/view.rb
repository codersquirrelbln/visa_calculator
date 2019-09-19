# # user interface, ask questions, display info the user needs
# # PUTS AND GETS
# # VIEW: this is the place where we display information to the user (puts)
# # and ask for information from the user (gets)


# class TasksView
#   def display(tasks)
#     tasks.each_with_index do |task, index|
#       done = task.done? ? "[x]" : "[ ]"
#       puts "#{done} #{index + 1} - #{task.description}"
#     end
#   end

#   def ask_user_for_description
#     puts "What do you want to do?"
#     return gets.chomp
#   end

#   def ask_user_for_index
#     puts "Index?"
#     return gets.chomp.to_i - 1
#   end
# end

# class View
#   def display_list(recipe_list)
#     recipe_list.each_with_index do |recipe, index|
#       puts "This is your cookbook:"
#       puts " #{index + 1} - #{recipe.name}, #{recipe.description}"
#     end
#   end

#   def add_name
#     puts "What is the name of the new recipe?"
#     gets.chomp
#   end

#   def add_description
#     puts "Put a description of the recipe"
#     gets.chomp
#   end

#   def what_to_delete
#     puts "Which recipe do you want to delete? Enter a number."
#     gets.chomp.to_i - 1
#   end

#   def end_app
#     puts "Goodbye"
#   end
# end




