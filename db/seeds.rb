# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create([{name: 'python'},{name: 'Angular'},{name: 'Biology'}])
python_cat = Category.find_by(name: 'python')
angular_cat = Category.find_by(name: 'Angular')
biology_cat = Category.find_by(name: 'Biology')
Question.create(description: 'Is Python a scription language?',category_id: python_cat.id)
Question.create(description: 'What is two way data binding', category_id: angular_cat.id)
Question.create(description: 'What is the role of plants?', category_id: biology_cat.id)