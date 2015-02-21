class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.text :description
      t.integer :question_id
      t.integer :category_id
      t.timestamps
    end
  end
end
