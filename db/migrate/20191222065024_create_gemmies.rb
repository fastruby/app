class CreateGemmies < ActiveRecord::Migration[6.0]
  def change
    create_table :gemmies do |t|
      t.string :name, index: { unique: true }
      t.json :dependencies_and_versions, default: {}
      t.json :compat_ids, default: [], null: false
      t.timestamps
    end
  end
end
