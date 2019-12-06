class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.string :name
      t.integer :number
      t.belongs_to :Level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
