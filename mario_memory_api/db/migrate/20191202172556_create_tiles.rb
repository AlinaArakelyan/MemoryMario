class CreateTiles < ActiveRecord::Migration[6.0]
  def change
    create_table :tiles do |t|
      t.string :name
      t.string :image
      t.belongs_to :Level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
