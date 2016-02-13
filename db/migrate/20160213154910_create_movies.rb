class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :front_text
      t.string :front_image
      t.string :question
      t.string :back_text
      t.string :back_image
      t.string :hint
      t.integer :likes
      t.integer :dislikes

      t.timestamps null: false
    end
  end
end
