class AddimageUrl < ActiveRecord::Migration
  def up
   add_column :events, :image_url, :string
  end

  def down
  end
end
